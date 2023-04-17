import { Message } from "../model/message";
import Crypoto from "../utils/crypto";

class WebSocketService {
    private ws: WebSocket | null = null;
    private readonly url: string;
    public msg: Message;
    private crypto: Crypoto;
    public event = new EventTarget();

    constructor(url: string) {
        this.url = url;
        this.crypto = new Crypoto();
        this.msg = new Message();
    }

    connect(): void {
        this.ws = new WebSocket(this.url);
        this.ws.onopen = () => {
            console.log("WebSocket connected");
            ws.send(this.crypto.encryptCBC(new Message()));
        };
        this.ws.onmessage = (e) => {
            this.crypto.decryptCBC(e.data).then((msg: Message) => {
                this.msg = msg;
                this.event.dispatchEvent(new CustomEvent("message", { detail: this.msg }));
            });
        };
        this.ws.onclose = () => {
            console.log("WebSocket disconnected");
        };
        this.ws.onerror = () => {
            console.log("WebSocket error");
        };
    }

    disconnect(): void {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }

    send(data: Blob): void {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(data);
        } else {
            console.error("WebSocket is not connected");
        }
    }
}

const ws = new WebSocketService("ws://192.168.0.193:1457/api/websocket");
export default ws;
