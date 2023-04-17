import React, {useCallback, useContext, useEffect, useState} from "react";
import {Col, Row} from "antd";
import BCL from "./bcl";
import {BridgeBCL, LeftProps} from "../../model/bridge";
import {LeftContext} from "../../pages/home/home";
import {Plot} from "@ant-design/plots";

const Left = React.memo(() => {
    const {bridge_bcl} = useContext<LeftProps>(LeftContext);
    const [bclPlot, setBclPlot] = useState<Plot<any>>();
    useEffect(() => {
        if (bclPlot) {
            bclPlot.changeData([{
                label: '全桥',
                value: bridge_bcl.bcl,
                type: 'BCL',
            }, {
                label: '全桥',
                value: bridge_bcl.bsl,
                type: 'BSL',
            }, {
                label: '桥面',
                value: bridge_bcl.deck.bcl,
                type: 'BCL',
            }, {
                label: '桥面',
                value: bridge_bcl.deck.bsl,
                type: 'BSL',
            }, {
                label: '上部',
                value: bridge_bcl.sup.bcl,
                type: 'BCL',
            }, {
                label: '上部',
                value: bridge_bcl.sup.bsl,
                type: 'BSL',
            }, {
                label: '下部',
                value: bridge_bcl.sub.bcl,
                type: 'BCL',
            }, {
                label: '下部',
                value: bridge_bcl.sub.bsl,
                type: 'BSL',
            }]);
        }
    }, [bridge_bcl]);

    return (
        <Row>
            <Col span={8}>
                <BCL onReady={
                    useCallback((plot: Plot<any>) => {
                        setBclPlot(plot);
                    }, [])
                }/>
            </Col>
            <Col span={16}></Col>
        </Row>
    );
});
export default Left;