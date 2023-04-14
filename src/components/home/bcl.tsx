import React, {useState, useEffect} from 'react';
import {Bar, Plot} from '@ant-design/plots';
import {Button} from 'antd';
import {Item} from "../../model/bridge";


const BCL = (prop: {
    values: Item[]
}) => {　
    const [plot, SetPlot] = useState(null)
    useEffect(() => {
        // @ts-ignore
        plot && plot.changeData(prop.values);
    }, [prop.values])
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
        onReady: (p: any) => {
            SetPlot(p)
        },
        data: prop.values,
    };


    return (
        <div>
            {
                // 循环
                prop.values.map((item: Item, index: number) => {
                    return (
                        <div key={index}>
                            <div>{item.label}</div>
                            <div>{item.value}</div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default BCL;
