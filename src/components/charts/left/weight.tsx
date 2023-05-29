import React, {useEffect} from 'react';
import {Pie, Plot} from '@ant-design/plots';
import {BridgeWeight} from "../bridge";
import ws from "../../../utils/ws";
// @ts-ignore
import { BorderBox1 } from '@jiaminghi/data-view-react'

const Weight = () => {
    let plot: Plot<any>;
    const [config, setConfig] = React.useState<any>({
        renderer: 'svg',
        angleField: 'value',
        colorField: 'type',
        color: ['#8fe9cf', '#caf0bf', '#e9f6a4'],
        radius: 0.8,
        appendPadding:[15, 0, 0, 0],
        label: {
            type: 'inner',
            offset: '-40%',
            content: (e: any) => `${(e.percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
                fill: "#000000"
            },
        },
        interactions: [
            {
                type: 'pie-legend-active',
            },
            {
                type: 'element-active',
            },
        ],
        legend: {
            position: 'right-top',
            offsetY: 40,
            offsetX: -10,
            itemName: {
                style: {
                    fill: '#1ccfe3',
                    cursor: 'pointer',
                }
            },
            maxItemWidth: 65,
        },
        data: [],
        onReady: (p: any) => {
            plot = p;
        }
    })
    const UpdateData = (d: BridgeWeight) => {
        plot && plot.changeData([
            {
                type: '桥面',
                value: d.deck,
            },
            {
                type: '上部结构',
                value: d.sup,
            },
            {
                type: '下部结构',
                value: d.sub,
            },
        ]);
    }
    useEffect(() => {
        const handelBCL = (e: Event) => {
            const d: any = (e as CustomEvent).detail as BridgeWeight;
            UpdateData(d);
        }

        ws.event.addEventListener("weight", handelBCL);
        return () => {
            ws.event.removeEventListener("weight", handelBCL);
        }
    }, []);

    return (
        <BorderBox1>
            <div className="content_title">重新分配权重</div>
            <Pie  {...config}/>
        </BorderBox1>

    );
};


export default Weight;
