import React from "react";
import CryptoJS from "crypto-js";
import {Message, ToMessage} from "../../model/message";
import Left from "../../components/home/left";
import {Col, Row} from "antd";
import { BridgeBCL } from "../../model/bridge";

interface State {
    bridge_bcl: BridgeBCL;

}

const Home= () => {
    // 接收props
    const [state, setState] = React.useState<State>({
        bridge_bcl: new BridgeBCL
    });
    return (
        <div id="mainBox">
            <div className="Header">
                智慧桥---城市桥梁安全技术评估系统可视终端
            </div>
            <Row className="Container">
                <Col span={18}>
                    <Left bcl={state.bridge_bcl}/>
                </Col>
                <Col span={6}>col-6</Col>
            </Row>
        </div>
    );
}
export default Home;
