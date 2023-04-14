import React, {useEffect, useState} from "react";
import {Col, Row} from "antd";
import BCL from "./bcl";
import {BridgeBCL, Item} from "../../model/bridge";

interface Props {
    bcl: BridgeBCL;
}

interface State {
    BclData: Item[];
}

const Left = (prop: Props) => {
    const [data, SetData] = useState<State>({
        BclData: []
    })

    useEffect(() => {
        const time = setTimeout(() => {
            SetData({
                BclData: [
                    {
                        label: '全桥',
                        type: 'bcl',
                        value: prop.bcl.bcl,        //需要更新的数据
                    },
                    {
                        label: '全桥',
                        type: 'bsl',
                        value: prop.bcl.bsl,
                    },
                    {
                        label: '桥面',
                        type: 'bcl',
                        value: prop.bcl.deck.bcl,
                    },
                    {
                        label: '桥面',
                        type: 'bsl',
                        value: prop.bcl.deck.bsl,
                    },
                ]
            });
        }, 1000)
        return () => {
            clearTimeout(time)
        }
    }, [prop])
    return (
        <Row>
            <Col span={8}>
                <BCL values={data.BclData}/>
            </Col>
            <Col span={16}></Col>
        </Row>
    )
}
export default Left