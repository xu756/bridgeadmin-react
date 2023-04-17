import { WsData } from "../model/message";
import Crypoto from "../utils/crypto";

class WebSocketService {
    private ws: WebSocket | null = null;
    private readonly url: string;
    public data: WsData;
    private crypto: Crypoto;
    public event = new EventTarget();

    constructor(url: string) {
        this.url = url;
        this.crypto = new Crypoto();
        this.data = new WsData();
    }

    connect(): void {
        this.ws = new WebSocket(this.url);
        this.ws.onopen = () => {
            console.log("WebSocket connected");
            ws.send(this.crypto.encryptCBC(new WsData()));
        };
        this.ws.onmessage = (e) => {
            this.crypto.decryptCBC(e.data).then((data: WsData) => {
                this.data = data;
                this.event.dispatchEvent(new CustomEvent("message", { detail: this.data }));
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
