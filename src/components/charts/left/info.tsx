import {Button, Col, ConfigProvider, Row, Statistic} from "antd";
import React from "react";

const LeftInfo = () => {
    const [data, setData] = React.useState<any>({
        name: '桥梁1',
        count: 9,
        remark: '本座桥梁监测设备于2017年1月1日安装，各类传感器共76个，行业图形采集器4个。',

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
                <Col span={22}>
                    <Statistic valueStyle={valueStyle} title="备注：" value={data.remark}/>
                </Col>
            </Row>
        </ConfigProvider>
    )
}
export default LeftInfo;