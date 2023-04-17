import React from "react";
import {Col, Row} from "antd";
import BCL from "./bcl";

const Left = () => {

    return (
        <Row>
            <Col span={8}>
                <BCL/>
            </Col>
            <Col span={16}></Col>
        </Row>
    );
};
export default Left;