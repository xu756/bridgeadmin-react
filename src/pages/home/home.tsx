// src/pages/left/index.tsx

import React, {useEffect} from "react";
import {Col, Row} from "antd";
import ws from "../../utils/ws";
import BCL from "../../components/left/bcl";
import Weight from "../../components/left/weight";
import Equipment from "../../components/left/equipment";
import CenterTree from "../../components/center/tree";

const Home = () => {

    useEffect(() => {
        ws.connect()

    }, []);
    return (
        <div id="mainBox">
            <div className="Header">城市桥梁安全技术评估系统可视化终端</div>
            <Row className="Container">
                <Col className="card l" span={6}>
                    <div id="l1"><BCL/></div>
                    <div id="l2"><Weight/></div>
                    <div id="l3"><Equipment/></div>

                </Col>
                <Col className="card c" span={12}>
                    <div id="c1"><CenterTree/></div>
                    <div id="c2">2</div>

                </Col>
                <Col className="card" span={6}>右</Col>
            </Row>
        </div>
    );
};

export default Home;
