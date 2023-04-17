import React, {memo, useEffect, useRef} from 'react';
import {Bar, Plot} from '@ant-design/plots';
import {BridgeBCL, Item} from "../../model/bridge";

interface BclProps {
    onReady?: (plot: Plot<any>) => void;
}

const BCL = (({onReady}: BclProps) => {
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
        onReady: onReady
    };

    return (
        <div>
            <Bar {...config}/>
        </div>
    );
});


export default BCL;
