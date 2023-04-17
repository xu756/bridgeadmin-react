// src/pages/home/index.tsx

import React, {useRef, useState, Dispatch, SetStateAction, useEffect, useLayoutEffect} from "react";
import {Button, Col, Row} from "antd";
import Left from "../../components/home/left";
import {BridgeBCL, LeftProps} from "../../model/bridge";
import ws from "../../utils/ws";
import {WsData} from "../../model/message";
const Home = () => {
    const [leftData, setLeftData] = useState<LeftProps>({
        bridge_bcl: new BridgeBCL(),
    });
    const updateData = () => {
        setLeftData((prevData) => ({
            ...prevData,
            bridge_bcl: {
                ...prevData.bridge_bcl,
                bcl: prevData.bridge_bcl.bcl + 1,
            },
        }));
    };

    useEffect(() => {
        ws.connect()
        // const handleMessage = (e: any) => {
        //     setWsData(e.detail);
        //     updateData();
        // };
        // ws.event.addEventListener("message", handleMessage);
        // return () => {
        //     ws.event.removeEventListener("message", handleMessage);
        //     ws.disconnect()
        // };
    }, []);
    return (
        <div id="mainBox">
            <div className="Header">可视终端</div>
            <Row className="Container">
                <Col span={18}>

                        <Left/>
                </Col>
                <Col span={6}>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
