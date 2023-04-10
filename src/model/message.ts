import CryptoJS from "crypto-js";
export class Message {
    msg_type: string;
    content: any;
    timestamp: number;

    constructor() {
        this.timestamp = Date.now()
        this.msg_type = "msg"
    }

    // 转换为二进制
    toBinary(): ArrayBuffer {
        const msgString = JSON.stringify(this);
        const msgHex = CryptoJS.enc.Utf8.parse(msgString).toString(CryptoJS.enc.Hex);
        return hexToArrayBuffer(msgHex);
    }
}

// 二进制转换为 Message
export const ToMessage = (data: Uint8Array): Message => {
    if (data.length === 0) {
        return new Message();
    }
    const dataAsNumberArray = Array.from(data);
    const msgHex = CryptoJS.enc.Hex.stringify(CryptoJS.lib.WordArray.create(dataAsNumberArray));
    const msgString = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Utf16.parse(msgHex));
    if (msgString === "") {
        return new Message();
    }
    return JSON.parse(msgString) as Message;
}



function hexToArrayBuffer(hex: string): ArrayBuffer {
    const length = hex.length / 2;
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    for (let i = 0; i < length; i++) {
        view.setUint8(i, parseInt(hex.substr(i * 2, 2), 16));
    }
    return buffer;
}