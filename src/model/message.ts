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


function hexToArrayBuffer(hex: string): ArrayBuffer {
    const length = hex.length / 2;
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    for (let i = 0; i < length; i++) {
        view.setUint8(i, parseInt(hex.substr(i * 2, 2), 16));
    }
    return buffer;
}