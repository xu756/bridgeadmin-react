// src/pages/left/index.tsx

import React, {useEffect} from "react";
import {Col, Row} from "antd";
import ws from "../../utils/ws";
import BCL from "../../components/charts/left/bcl";
import Weight from "../../components/charts/left/weight";
import Equipment from "../../components/charts/left/equipment";
import CenterTree from "../../components/charts/center/tree";
import GroupCharts from "../../components/charts/center/groupCharts";
import DataList from "../../components/charts/right/list";

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
                    <div id="c2"><GroupCharts/></div>

                </Col>
                <Col className="card r" span={6}>
                    <div id="r1"><DataList/></div>
                    <div id="r2">r2</div>
                    <div id="r3">r3</div>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
