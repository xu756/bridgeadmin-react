import React, {useEffect, useState} from "react";
import {Col, Row} from "antd";
import BCL from "./bcl";
import {BridgeBCL} from "../../model/bridge";


export default class Left extends React.Component<{ bcl: BridgeBCL }, {}> {
    constructor(props: { bcl: BridgeBCL }) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Col span={8}>
                    <BCL value={this.props.bcl}/>
                </Col>
                <Col span={16}>s</Col>
            </Row>
        );
    }
}