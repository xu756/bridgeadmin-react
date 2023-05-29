import React, {memo, useEffect, useRef} from 'react';
import {Bar, Plot} from '@ant-design/plots';
import {BclAndBsl} from "../bridge";
import ws from "../../../utils/ws";
// @ts-ignore
import {BorderBox1} from '@jiaminghi/data-view-react'


const BCL = () => {
    let plot: Plot<any>;
    const [config, setConfig] = React.useState<any>({
        renderer: 'svg',
        appendPadding: [10, 10, 10, 20],
        isGroup: true,
        xField: 'value',
        yField: 'label',
        seriesField: 'type',
        dodgePadding: 2,
        colorField: 'type',
        color: ['#00A781', '#00A9D9'],
        label: {
            position: 'right',
            offsetX: -10,
            style: {
                fill: '#B7DDF4',
            },
        },
        xAxis: {
            grid: null,
            tickLine: null,
            line: null,
            label: null,
            max: 120,
        },
        legend: {
            position: 'top',
            offsetY: 10,
            itemName: {
                style: {
                    fill: '#00799C',
                    fontWeight: 700,
                    cursor: 'pointer',
                }
            }
        },
        yAxis: {
            grid: null,
            tickLine: null,
            line: null,
            label: {
                style: {
                    fill: '#1ccfe3',
                }
            },
        },

        data: [],
        onReady: (p: any) => {
            plot = p;
        }
    })
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
        <BorderBox1>
            <div className="content_title">综合状况评估指数</div>
            <Bar className="content" {...config}/>
        </BorderBox1>
    );
};


export default BCL;
