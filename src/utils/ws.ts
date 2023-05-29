import {WsData} from "../model/ws";
import Crypoto from "../utils/crypto";
import {BclAndBsl, BridgeWeight, EqItem} from "../components/charts/bridge";

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
                // this.data = data;
                // this.event.dispatchEvent(new CustomEvent("message", { detail: this.data }));
                switch (data.code) {
                    case 0:
                        console.log("心跳包");
                        break;
                    case 1:
                        this.event.dispatchEvent(new CustomEvent("bcl", {detail: data.data as BclAndBsl}));
                        break;
                    case 2:
                        this.event.dispatchEvent(new CustomEvent("weight", {detail: data.data as BridgeWeight}));
                        break;
                    case 3:
                        this.event.dispatchEvent(new CustomEvent("equipment", {detail: data.data as EqItem[]}));
                }
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

const ws = new WebSocketService("wss://dev.imlogic.cn/bridgeadmin/api/websocket");
export default ws;
