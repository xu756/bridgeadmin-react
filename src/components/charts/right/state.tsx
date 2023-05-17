// @ts-ignore
import {BorderBox10} from '@jiaminghi/data-view-react'
import React from "react";
import {Waterfall} from "@ant-design/charts";


const BridgeState = () => {
    let data = [{
        time: '建成',
        value: 100,
        about: '建成',
    }, {
        time: '2019-04',
        value: -37,
        about: '自然灾害'
    }, {
        time: '2019-10',
        value: 20,
        about: '修复桥墩'
    }, {
        time: '2019-11',
        value: 17,
        about: '修复桥面'
    },{
        time: '2020-01',
        value: -16,
        about: '路面受损'
    },{
        time: '2020-05',
        value: -18,
        about: '桥墩老化'
    },{
        time: '2020-07',
        value: 26,
        about: '修复'
    }]
    const [config, setConfig] = React.useState<any>({
        data: data,
        renderer: 'svg',
        appendPadding: [10, 10, 10, 20],
        xField: 'time',
        yField: 'value',
        seriesField: 'about',
        meta: {
            name: {
                alias: '时间',
            },
            value: {
                alias: '完好状况指数变化',
                formatter: (v: number) => {
                    return v;
                },
            },
            about: {
                alias: '原因',
            }
        },
        label: {
            style: {
                fill: '#B7DDF4',
            },
        },
        total: {
            label: '当前',
            name: '当前'
        },
        color: ({time, value}: {
            time: string,
            value: number
        }) => {
            if (time === '建成' || time === '当前') {
                return '#06e1e1';
            }
            return value > 0 ? '#30bf78' : '#f4664a';
        },
        legend: {
            custom: true,
            itemName: {
                style: {
                    fill: '#00799C',
                    fontWeight: 700,
                    cursor: 'pointer',
                }
            },
            items: [
                {
                    name: '修复',
                    marker: {
                        symbol: 'square',
                        style: {
                            r: 5,
                            fill: '#30bf78',
                        },
                    },
                },
                {
                    name: '损害',
                    marker: {
                        symbol: 'square',
                        style: {
                            r: 5,
                            fill: '#f4664a',
                        },
                    },
                },
                {
                    name: '端点',
                    marker: {
                        symbol: 'square',
                        style: {
                            r: 5,
                            fill: '#06e1e1',
                        },
                    },
                },
            ],
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
        tooltip: {
            title: 'about',
        },
        xAxis: {
            grid: null,
            tickLine: null,
            line: {
                style: {
                    stroke: '#1ccfe3',
                }
            },
            label: {
                style: {
                    fill: '#1ccfe3',
                }
            },
        },
    })
    return (
        <BorderBox10>
            <Waterfall {...config} />
        </BorderBox10>
    )
}
export default BridgeState;