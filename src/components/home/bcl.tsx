import React, {memo, useEffect, useRef} from 'react';
import {Bar, Plot} from '@ant-design/plots';
import {BridgeBCL, Item} from "../../model/bridge";

interface BclProps {
    data: BridgeBCL;
}

const BCL = memo(({data}: BclProps) => {
    const plotRef = useRef<any>(null);
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
        onReady: (plot: any) => {
            plotRef.current = plot;
        },
    };
    useEffect(() => {
        if (plotRef.current) {
            plotRef.current.changeData([
                {
                    label: "全桥",
                    type: "bcl",
                    value: data.bcl,
                },
                {
                    label: "全桥",
                    type: "bsl",
                    value: data.bsl,
                },
                {
                    label: "桥面",
                    type: "bcl",
                    value: data.deck.bcl,
                },
                {
                    label: "桥面",
                    type: "bsl",
                    value: data.deck.bsl,
                },
            ]);
        }
    }, [data]);

    return (
        <div>
            <Bar {...config}/>
        </div>
    );
});


export default BCL;
