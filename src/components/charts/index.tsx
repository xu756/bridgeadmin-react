// src/pages/left/index.tsx

import React, {useEffect} from "react";
import {Col, Row} from "antd";
import ws from "../../utils/ws";
import BCL from "./left/bcl";
import Weight from "./left/weight";
import Equipment from "./right/equipment";
import CenterTree from "./center/tree";
import GroupCharts from "./center/groupCharts";
import DataList from "./right/list";
import LeftInfo from "./left/info";
// @ts-ignore
import {Decoration3, Decoration1} from "@jiaminghi/data-view-react";
import BridgeState from "./right/state";

const Charts = () => {
    const [time, setTime] = React.useState(new Date().toLocaleString());
    useEffect(() => {
        ws.connect()
        const timer = setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);
    return (
        <div id="mainBox">
            <div className="Header">
                <div className={"t"}>城市桥梁安全技术评估系统可视化终端</div>
                <div className={"time"}>{time}</div>
            </div>
            <Row className="Container">
                <Col className="card l" span={5}>
                    <div id="l1"><LeftInfo/></div>
                    <div id="l2"><BCL/></div>
                    <div id="l3"><Weight/></div>

                </Col>
                <Col className="card c" span={14}>
                    <div id="c0"><Decoration1 style={{width: '250px', height: '30px'}}/></div>
                    <div id="c1"><CenterTree/></div>
                    <div id="c2"><GroupCharts/></div>

                </Col>
                <Col className="card r" span={5}>
                    <div id="r0"><Decoration3 style={{width: '250px', height: '30px'}}/></div>
                    <div id="r1"><DataList/></div>
                    <div id="r2"><BridgeState/></div>
                    <div id="r3"><Equipment/></div>
                </Col>
            </Row>
        </div>
    );
};

export default Charts;
