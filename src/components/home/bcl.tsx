import React, {useState, useEffect} from 'react';
import {Bar, Plot} from '@ant-design/plots';
import {Button} from 'antd';
import {Item} from "../../model/bridge";


const BCL = (prop: {
    values: Item[]
}) => {　
    const [plot, SetPlot] = useState(null)

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
        data: [],
    };
    useEffect(() => {
        // @ts-ignore
        plot && plot.changeData(prop.values)
    }, [prop.values])

    return (
        <div>
            <Bar {...config}/>
        </div>
    );
}


export default BCL;
