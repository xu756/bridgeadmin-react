import React, {memo, useEffect, useRef} from 'react';
import {Bar, Plot} from '@ant-design/plots';
import {BridgeBCL, Item} from "../../model/bridge";
import ws from "../../utils/ws";


const BCL = () => {
    let plot: Plot<any>;
    const config: any = {
        renderer: 'svg',
        isGroup: true,
        xField: 'value',
        yField: 'label',
        seriesField: 'type',
        dodgePadding: 4,
        colorField: 'type',
        color: ['#5B8FF9', '#5AD8A6'],
        label: {
            position: 'right',
            style: {
                fill: '#c1a4a4',
            },
        },
        axis: {
            title: {
                text: 'BCL',
            },
        },
        data: [],
        onReady: (p: any) => {
            plot = p;
        }
    };
    const bridge_bcl: BridgeBCL = new BridgeBCL();
    const UpdateData = () => {
        plot && plot.changeData([{
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
    useEffect(() => {
        console.log(plot)

        const handelBCL = (e: Event) => {
            const d: any = (e as CustomEvent).detail;
            bridge_bcl.bcl++;
            UpdateData();
        }

        ws.event.addEventListener("message", handelBCL);
        return () => {
            ws.event.removeEventListener("message", handelBCL);
        }
    }, []);

    return (
        <div>
            <Bar {...config}/>
        </div>
    );
};


export default BCL;
