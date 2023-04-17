import CryptoJS from "crypto-js";
import {WsData} from "../model/message";

// 定义接口类型，根据需要可自行定义，此处供参考
export interface CrypotoType {
    encryptCBC: any;
    decryptCBC: any;
}

export default class Crypoto implements CrypotoType {
    private EK = "1234567890123456";
    private keyHex = this.getHetKey();

    private getHetKey() {
        return CryptoJS.enc.Utf8.parse(this.EK);
    }

    /** CBC加密 */
    encryptCBC(msg: WsData): Blob {

        const srcs = CryptoJS.enc.Utf8.parse(JSON.stringify(msg));
        const encrypted = CryptoJS.AES.encrypt(srcs, this.keyHex, {
            iv: this.keyHex,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        const encryptedHexStr = encrypted.ciphertext.toString();
        const encryptedHexStrLen = encryptedHexStr.length;
        const byteArray = new Uint8Array(encryptedHexStrLen / 2);
        for (let i = 0; i < encryptedHexStrLen; i += 2) {
            byteArray[i / 2] = parseInt(encryptedHexStr.substr(i, 2), 16);
        }
        return new Blob([byteArray]);
    }

    /** CBC解密 */
    async decryptCBC(str: Blob) {
        const data = await this.blobToArrayBuffer(str);
        const byteArray = new Uint8Array(data);
        const hexParts = [];
        for (let i = 0; i < byteArray.length; i++) {
            const hex = byteArray[i].toString(16);
            const paddedHex = ("00" + hex).slice(-2);
            hexParts.push(paddedHex);
        }
        const hexString = hexParts.join("");
        const encryptedHexStr = CryptoJS.enc.Hex.parse(hexString);
        const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        const decrypt = CryptoJS.AES.decrypt(srcs, this.keyHex, {
            iv: this.keyHex,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptedStr) as WsData;
    }

    private async blobToArrayBuffer(blob: Blob): Promise<ArrayBuffer> {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(blob);
        return await new Promise<ArrayBuffer>((resolve) => {
            fileReader.onload = () => {
                resolve(fileReader.result as ArrayBuffer);
            };
        });
    }

}
