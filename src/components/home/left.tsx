import React, {useContext, useEffect, useState} from "react";
import {Col, Row} from "antd";
import BCL from "./bcl";
import {BridgeBCL, LeftProps} from "../../model/bridge";
import {LeftContext} from "../../pages/home/home";

const Left = React.memo(() => {
    const {bridge_bcl} = useContext<LeftProps>(LeftContext);
    return (
        <Row>
            <Col span={8}>
                <BCL data={bridge_bcl}/>
            </Col>
            <Col span={16}></Col>
        </Row>
    )
});

export default Left;
