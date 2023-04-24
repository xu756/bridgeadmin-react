import {Button, Col, ConfigProvider, Row, Statistic} from "antd";
import React from "react";

const LeftInfo = () => {
    const [data, setData] = React.useState<any>({
        name: '桥梁1',
        count: 9,
        remark: '备注备注备注备注备注备注备注备注备注',

    });
    const valueStyle = {
        fontSize: 16,
        color: '#14EBFF',
        padding: 15,
    }
    return (
        <ConfigProvider theme={{
            token: {
                fontSize: 16,
                colorTextDescription: '#eeeeee',
            }
        }}>
            <Row>
                <Col span={12}>
                    <Statistic valueStyle={valueStyle} title="桥梁名称：" value={data.name}/>
                </Col>
                <Col span={12}>
                    <Statistic valueStyle={valueStyle} title="已评估次数：" value={data.count}/>
                </Col>
                <Col span={16}>
                    <Statistic valueStyle={valueStyle} title="备注：" value={data.remark}/>
                </Col>
            </Row>
        </ConfigProvider>
    )
}
export default LeftInfo;