import React, {useEffect} from 'react';
import ws from "../../../utils/ws";
// @ts-ignore
import {BorderBox8} from '@jiaminghi/data-view-react'
import {DecompositionTreeGraph} from '@ant-design/graphs';

const CenterTree = () => {
    const data: any =
        {
            value: {
                id: "bridge",
                title: '桥梁1',
                items: [
                    {
                        text: 'BCl',
                        value: '99',
                    },
                    {
                        text: 'BSl',
                        value: '99',
                    },
                ],
                percent: 0.8,
            },
            children: [
                {
                    id: 'deck',
                    value: {
                        title: '桥面',
                        percent: 0.15,
                    },
                    children: [
                        {
                            id: 'deck1',
                            value: {
                                title: '桥面数据',
                                items: [
                                    {
                                        text: '桥面铺装',
                                        value: '99',
                                    },
                                    {
                                        text: '桥头平顺',
                                        value: '99',
                                    },
                                    {
                                        text: '伸缩装置',
                                        value: '99',
                                    },
                                    {
                                        text: '排水系统',
                                        value: '99',
                                    },
                                    {
                                        text: '人行道',
                                        value: '99',
                                    },
                                    {
                                        text: '栏杆或护栏',
                                        value: '99',
                                    },
                                ],
                            },
                        }
                    ]
                },
                {
                    id: 'sup',
                    value: {
                        title: '上部结构',
                        percent: 0.45,
                    },
                    children: [
                        {
                            id: 'sup1',
                            value: {
                                title: '#1跨',
                                items: [
                                    {
                                        text: '主梁',
                                        value: '99',
                                    },
                                    {
                                        text: '横向联系',
                                        value: '99',
                                    },
                                ],
                            },
                        },
                        {
                            id: 'sup2',
                            value: {
                                title: '#2跨',
                                items: [
                                    {
                                        text: '主梁',
                                        value: '99',
                                    },
                                    {
                                        text: '横向联系',
                                        value: '99',
                                    },
                                ],
                            },
                        },
                        {
                            id: 'sup3',
                            value: {
                                title: '#3跨',
                                items: [
                                    {
                                        text: '主梁',
                                        value: '99',
                                    },
                                    {
                                        text: '横向联系',
                                        value: '99',
                                    },
                                ],
                            },
                        },
                    ]
                },
                {
                    value: {
                        title: '下部结构',
                        percent: 0.4,
                    },
                    children: [
                        {
                            value: {
                                id: 'pier',
                                title: '桥墩',
                                items: [
                                    {
                                        text: '#1墩',
                                        value: '99',
                                    },
                                    {
                                        text: '#2墩',
                                        value: '99',
                                    },
                                    {
                                        text: '#3墩',
                                        value: '99',
                                    },
                                    {
                                        text: '#4墩',
                                        value: '99',
                                    },
                                ],
                            },
                        },
                        {
                            value: {
                                id: 'abu',
                                title: '桥台',
                                items: [
                                    {
                                        text: '#1台',
                                        value: '99',
                                    },
                                    {
                                        text: '#2台',
                                        value: '99',
                                    }, {
                                        text: '#3台',
                                        value: '99',
                                    },
                                    {
                                        text: '#4台',
                                        value: '99',
                                    }, {
                                        text: '#5台',
                                        value: '99',
                                    },
                                    {
                                        text: '#6台',
                                        value: '99',
                                    }, {
                                        text: '#7台',
                                        value: '99',
                                    },
                                    {
                                        text: '#8台',
                                        value: '99',
                                    },

                                ],
                            },
                        },
                    ]
                }
            ],
        };
    const stroke = '#EA2F97';
    const config: any = {
        data,
        style: {
            backgroundColor: '',
        },
        // markerCfg: (cfg: any) => {
        //     return {
        //         position: 'right',
        //         show: cfg.children?.length,
        //         style: (arg: any) => {
        //             return {
        //                 stroke: arg.value.percent > 0.3 ? stroke : '#1f8fff',
        //             };
        //         },
        //     };
        // },
        layout: {
            direction: 'TB',
            // getVGap: () => {
            //     // 每个节点的垂直间隙，会结合 getHeight 返回值使用
            //     return 16;
            // },
            // getHGap: () => {
            //     // 每个节点的水平间隙，会结合 getWidth 返回值使用
            //     return 100;
            // },
        },
        nodeCfg: {
            padding: 10,
            percent: {
                position: 'bottom',
                size: 4,
                style: (arg: { value: { percent: number; }; }) => {
                    return {
                        radius: [0, 0, 0, 2],
                        fill: arg.value.percent > 0.3 ? stroke : '#1f8fff',
                    };
                },
            },
            items: {
                padding: 0,
                containerStyle: {
                    fill: '#fff',
                },
                sort: true,
                style: (cfg: any, group: any, type: string) => {
                    switch (type) {
                        case 'value':
                            return {
                                fill: '#11a0dd',
                                x: 75,
                            }
                        case 'text':
                            return {
                                fill: '#2f2f82',
                                x: 10
                            }

                    }
                },
            },
            nodeStateStyles: {
                hover: {
                    lineWidth: 2,
                },
            },
            title: {
                containerStyle: {
                    fill: '#fff',
                },
                style: {
                    fill: '#000',
                    fontSize: 12,
                },
            },
            style: (arg: { value: { percent: number; }; }) => {
                return {
                    fill: '#fff',
                    radius: 2,
                    stroke: arg.value.percent > 0.3 ? stroke : '#1f8fff',
                };
            },
        },
        toolbarCfg:{
            show: true,
        },
        edgeCfg: {
            type: 'quadratic',
            style: {
                stroke: '#b9bbc0',
            },
            endArrow: {
                type: 'triangle',
                fill: '#5B8FF9',
                d: 15,
                size: 6,
            },

        },

        menuCfg: {
            show: false,
        },
        // level: 2,
        behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        onReady: (graph: any) => {
            graph.zoom(1, {x: graph.get('width') / 2, y: 30});
        }
    };
    return (
        <BorderBox8>
            <DecompositionTreeGraph {...config} />
        </BorderBox8>
    )

}


export default CenterTree;