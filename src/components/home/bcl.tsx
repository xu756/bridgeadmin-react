import React, {memo, useEffect, useRef} from 'react';
import {Bar, Plot} from '@ant-design/plots';
import {BclAndBsl} from "../../model/bridge";
import ws from "../../utils/ws";


const BCL = () => {
    let plot: Plot<any>;
    let w = 0;
    let h = 0;
    let config: any = {
        width: w,
        height: h,
        renderer: 'svg',
        isGroup: true,
        xField: 'value',
        yField: 'label',
        seriesField: 'type',
        dodgePadding: 2,
        colorField: 'type',
        color: ['#5B8FF9', '#5AD8A6'],
        label: {
            position: 'right',
            style: {
                fill: '#c1a4a4',
            },
        },
        xAxis: {
            grid: null,
            visible: false,

        },
        yAxis: {
            grid: null, // 去掉刻度线
        },

        data: [],
        onReady: (p: any) => {
            plot = p;
        }
    };
    const UpdateData = (bridge_bcl: BclAndBsl) => {
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
        w = document.getElementById('l1')!.clientWidth;
        h = document.getElementById('l1')!.clientHeight;
        plot && plot.changeSize(w, h);
        const handelBCL = (e: Event) => {
            const d: any = (e as CustomEvent).detail as BclAndBsl;
            UpdateData(d);
        }

        ws.event.addEventListener("bcl", handelBCL);
        return () => {
            ws.event.removeEventListener("bcl", handelBCL);
        }
    }, []);

    return (
        <div>
            <Bar {...config}/>
        </div>
    );
};


export default BCL;
