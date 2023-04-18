// src/pages/home/index.tsx

import React, {useEffect} from "react";
import {Col, Row} from "antd";
import Left from "../../components/home/left";
import ws from "../../utils/ws";
import BCL from "../../components/home/bcl";

const Home = () => {

    useEffect(() => {
        ws.connect()

    }, []);
    return (
        <div id="mainBox">
            <div className="Header">可视终端</div>
            <Row className="Container">
                <Col className="card" span={5}>
                    <div id="l1"><BCL/></div>
                    <div id="l2"></div>
                    <div id="l3"></div>

                </Col>
                <Col className="card" span={14}>中</Col>
                <Col className="card" span={5}>右</Col>
            </Row>
        </div>
    );
};

export default Home;
