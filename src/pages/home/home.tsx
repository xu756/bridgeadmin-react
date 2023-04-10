import React from "react";
import CryptoJS from "crypto-js";
import {Message, ToMessage} from "../../model/message";
import Left from "../../components/home/left";
import {Col, Row} from "antd";
import { BridgeBCL } from "../../model/bridge";

interface State {
    bridge_bcl: BridgeBCL;

}

class Home extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            bridge_bcl: new BridgeBCL()
        }
    }

    componentDidMount() {
        // const ws = new WebSocket("ws://192.168.0.193:1457/websocket");
        // ws.onopen = () => {
        //     // setInterval(() => {
        //     //     const msg = new Message()
        //     //     msg.msg_type = "ping"
        //     //     msg.content = "hello"
        //     //     ws.send(msg.toBinary())
        //     // }, 1000)
        // }
        // ws.onmessage = (e) => {
        //     this.setState({
        //         message: ToMessage(e.data)
        //     })
        // }
        // ws.onclose = () => {
        //     console.log("ws closed")
        // }
        // this.setState({
        //     ws: ws
        // });
    }

    render() {
        return (
            <div id="mainBox">
                <div className="Header">
                    智慧桥---城市桥梁安全技术评估系统可视终端
                </div>
                <Row className="Container">
                    <Col span={18}>
                        <Left bcl={this.state.bridge_bcl}/>
                    </Col>
                    <Col span={6}>col-6</Col>
                </Row>
            </div>
        );
    }
}

export default Home;
