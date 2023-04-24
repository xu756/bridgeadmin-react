// @ts-ignore
import {BorderBox10} from '@jiaminghi/data-view-react'
import {ConfigProvider, Tabs} from "antd";
import React, {useEffect} from "react";
import {Column} from "@ant-design/charts";

interface item {
    name: string,
    value: number,
}

interface d {
    deck: Array<item>,
    sup: Array<item>,
    pier: Array<item>,
    abu: Array<item>,
}

export default function GroupCharts() {
    const [plot, setPlot] = React.useState<any>();
    let data: any = {
        deck: [
            {
                name: '桥面铺装',
                value: 100,
            }, {
                name: '桥头平顺',
                value: 87,
            }, {
                name: '伸缩装置',
                value: 67,
            }, {
                name: '排水系统',
                value: 100,
            }, {
                name: '人行道',
                value: 30,
            }, {
                name: '栏杆及护栏',
                value: 90,
            }

        ],
        sup: [{
            name: '#1跨',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#2跨',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#3跨',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#4跨',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#5跨',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#6跨',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#7跨',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#8跨',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#9跨',
            value: Math.floor(Math.random() * 55) + 45,
        }],
        pier: [{
            name: '#1墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#2墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#3墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#4墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#5墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#6墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#7墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#8墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#9墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#10墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#11墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#12墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#13墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#14墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#15墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#16墩',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#17墩',
            value: Math.floor(Math.random() * 55) + 45,
        }],
        abu: [{
            name: '#1台',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#2台',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#3台',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#4台',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#5台',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#6台',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#7台',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#8台',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#9台',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#10台',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#11台',
            value: Math.floor(Math.random() * 55) + 45,
        }, {
            name: '#12台',
            value: Math.floor(Math.random() * 55) + 45,
        }],
    }
    useEffect(() => {
        setConfig({...config, data: data.deck})
    }, []);
    const [activeKey, setActiveKey] = React.useState('deck');
    const [config, setConfig] = React.useState<any>({
        data: [],
        meta: {
            name: {
                alias: '构成',
            },
            value: {
                alias: '综合扣分',
            },
        },
        yAxis: {
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
            max: 100,
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
        xField: 'name',
        yField: 'value',
        seriesField: 'value',
        renderer: 'svg',
        legend: {
            title:{
                style:{
                    fill:'#1ccfe3',
                }
            },
        },
        appendPadding: [10, 10, 5, 0],
        color:({value} :{value:Number})=>{
           //按区间设置颜色
            switch (true) {
                case value > 90:
                    return '#3399FF';
                case value > 75:
                    return '#33FF33';
                case value > 60:
                    return '#FFFF00';
                    default:
                    return '#FF3333';
            }
        },
        label: {
            position: 'top',
            style: {
                fill: '#B7DDF4',
            },
        },
        onReady: (p: any) => {
            setPlot(p);
        }
    })
    const items = [
        {
            label: '桥面', key: 'deck', children: <Column {...config} />
        },
        {
            label: '上部', key: 'sup', children: <Column {...config} />
        }, {
            label: '桥墩', key: 'pier', children: <Column {...config} />
        }, {
            label: '桥台', key: 'abu', children: <Column {...config} />
        }
    ]
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: '#4096ff',
                    colorBorder: '#4096ff',
                    lineWidth: 2,
                    colorPrimary: '#75deef',
                },
            }}
        >
            <BorderBox10>
                <div className="content_title">组成结构BCLsi</div>
                <Tabs
                    activeKey={activeKey}
                    className="tabs"
                    tabPosition="left"
                    tabBarStyle={{
                        width: '85px',
                    }}
                    items={items}
                    onChange={(key) => {
                        setActiveKey(key)
                        // @ts-ignore
                        setConfig({...config, data: data[key]})
                    }}
                >
                </Tabs>
            </BorderBox10>
        </ConfigProvider>
    )
}