import React, {useEffect} from 'react';
import ws from "../../utils/ws";
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
                        percent: 0.7,
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
                    },
                    children: [
                        {
                            id: 'decka',
                            value: {
                                title: '桥面铺装',
                                items: [
                                    {
                                        text: '网裂或龟裂',
                                        value: '99',
                                    },
                                    {
                                        text: 'BSl',
                                        value: '99',
                                    },
                                ],
                            },
                        },
                        {
                            id: 'deckb',
                            value: {
                                title: '桥头平顺',
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
                            },
                        },
                        {
                            id: 'deckc',
                            value: {
                                title: '伸缩装置',
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
                            },
                        },
                    ],
                },
                {
                    value: {
                        title: '上部结构',
                        percent: 0.3,
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
                        children:[
                            {
                                value: {
                                    id: 'sup1',
                                    title: '桥面铺装',
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
                                },
                            },
                            {
                                value: {
                                    id: 'deckc',
                                    title: '桥面铺装',
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
                                },
                            },
                        ]
                    },
                },
            ],
        };
    const stroke = '#EA2F97';
    const config = {
        data,
        autoFit:false,
        style: {
            backgroundColor: '',
        },
        // markerCfg:{
        //     show:true,
        // },
        layout: {
            getWidth:()=>{
                return 120
            }
        },
        nodeCfg: {
            size: [100, 20],
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
                containerStyle: {
                    fill: '#fff',
                },
                style: (cfg: any, group: any, type: string) => {
                    switch (type) {
                        case 'value':
                            return {
                                fill: '#dd1',
                                right:0
                            }
                        case 'text':
                            return {
                                fill: '#aaa',
                                textAlign: 'left'
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
                    fill: 'transparent',
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
        edgeCfg: {
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

        toolbarCfg: {
            show: true,
        },
        menuCfg: {
            show: false,
        },
        // level:1,
        behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        onReady: (graph: any) => {
            graph.zoom(1, {x: 100, y: 300});
            //设置中心节点
        }
    };
    return (
        <BorderBox8>
            <DecompositionTreeGraph {...config} />
        </BorderBox8>

    )

}


export default CenterTree;