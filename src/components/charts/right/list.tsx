// @ts-ignore
import {BorderBox12} from '@jiaminghi/data-view-react'
import React from "react";
import {Col, ConfigProvider, Row, Tag} from "antd";

const DataList = () => {
    const [data, setData] = React.useState<any>([
        {
            id: 1,
            name: '桥梁1',
            count: 9,
            bcl: 99,
            bsl: 99,
        }, {
            id: 2,
            name: '桥梁2',
            count: 9,
            bcl: 99,
            bsl: 99,
        }, {
            id: 3,
            name: '桥梁3',
            count: 9,
            bcl: 99,
            bsl: 99,
        }, {
            id: 4,
            name: '桥梁4',
            count: 9,
            bcl: 99,
            bsl: 99,
        }, {
            id: 5,
            name: '桥梁5',
            count: 9,
            bcl: 99,
            bsl: 99,
        }, {
            id: 6,
            name: '桥梁6',
            count: 9,
            bcl: 99,
            bsl: 99,
        }, {
            id: 7,
            name: '桥梁7',
            count: 9,
            bcl: 99,
            bsl: 99,
        }, {
            id: 8,
            name: '桥梁8',
            count: 9,
            bcl: 99,
            bsl: 99,
        }])
    return (
        <BorderBox12>
            <ConfigProvider theme={{
                token: {
                    colorBorderSecondary: '',
                    colorBgContainer: '',
                }
            }}>
                <div className="data-list">
                    <div className="data-list-title">
                        <Row>
                            <Col span={6}>名称</Col>
                            <Col span={4}>区域</Col>
                            <Col span={4}>已评估</Col>
                            <Col span={3}>BCl</Col>
                            <Col span={3}>BSl</Col>
                            <Col span={4}>操作</Col>
                        </Row>
                    </div>
                    <div className="data-list-content">
                        {
                            data.map((item: any) => {
                                return (
                                    <Row key={item.id} >
                                        <Col span={6}>{item.name}</Col>
                                        <Col span={4}>区</Col>
                                        <Col span={4}><Tag color="#2db7f5">{item.count}</Tag></Col>
                                        <Col span={3}>{item.bcl}</Col>
                                        <Col span={3}>{item.bsl}</Col>
                                        <Col span={4}> <Tag color="#2db7f5">查看</Tag></Col>
                                    </Row>
                                )

                            })
                        }
                    </div>
                </div>
            </ConfigProvider>
        </BorderBox12>
    )
}
export default DataList;