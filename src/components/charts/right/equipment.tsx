import React, {useEffect} from 'react';
import {Line, Plot} from '@ant-design/plots';
import {EqItem} from "../bridge";
import ws from "../../../utils/ws";
// @ts-ignore
import {BorderBox1} from '@jiaminghi/data-view-react'

const Equipment = () => {
    let plot: Plot<any>;
    const [config, setConfig] = React.useState<any>({
        renderer: 'svg',
        xField: 'time',
        yField: 'value',
        appendPadding: [0, 20, 18, 20],
        seriesField: 'name',
        label: null,
        point: {
            visible: true,
            size: 2,
        },
        smooth: true,
        yAxis: {
            min: 250,
            grid: null,
            tickLine: null,
            line: {
                style: {
                    stroke: '#1ccfe3',
                },
            },
            label: {
                style: {
                    fill: '#1ccfe3',
                }
            },
        },
        xAxis: {
            line: {
                style: {
                    stroke: '#1ccfe3',
                },
            },
            label: {
                style: {
                    fill: '#1ccfe3',
                }
            },
            tickLine: {
                style: {
                    stroke: '#1ccfe3',
                }
            }
        },
        legend: {
            position: 'top',
            offsetY: 13,
            flipPage: false,
            itemName: {
                style: {
                    fill: '#1ccfe3',
                    cursor: 'pointer',
                }
            },
        },
        data: [],
        onReady: (p: any) => {
            plot = p;
        }
    })
    const UpdateData = (d: EqItem[]) => {
        plot && plot.changeData(
            d
        );
    }
    useEffect(() => {
        const handelBCL = (e: Event) => {
            const d: any = (e as CustomEvent).detail as EqItem[];
            UpdateData(d);
        }

        ws.event.addEventListener("equipment", handelBCL);
        return () => {
            ws.event.removeEventListener("equipment", handelBCL);
        }
    }, []);

    return (
        <BorderBox1>
            <div className="content_title">监控设备实时传输数据次数</div>
            <Line className="content" {...config}/>
        </BorderBox1>

    );
};


export default Equipment;
