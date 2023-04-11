import React, {Component} from 'react';
import {Bar} from '@ant-design/plots';
import {BridgeBCL} from "../../model/bridge";

let config: any = {
    renderer: 'canvas',
    isGroup: true,
    xField: 'value',
    yField: 'label',
    seriesField: 'type',
    dodgePadding: 4,
    colorField: 'type', // 部分图表使用 seriesField
    color: ['#5B8FF9', '#5AD8A6'],
    label: {
        // 可手动配置 label 数据标签位置
        position: 'right',
        style: {
            fill: "#c1a4a4",
        }
    },
    axis: {
        title: {
            text: 'BCL',
        }
    }

}

interface item {
    label: string;
    type: string;
    value: number;
}

interface DataProps {
    value: item[];
}

interface DataState {
    data: item[];
}

class BCL extends Component<DataProps, DataState> {
    constructor(props: DataProps) {
        super(props);
        this.state = {
            data: [
                {
                    label: "全桥",
                    type: "bcl",
                    value: 0,
                },
                {
                    label: "全桥",
                    type: "bsl",
                    value: 0,
                }
            ]
        };
    }

    componentDidMount() {
        this.setState({
            data: this.props.value
        });
        console.log("mount");
    }

    componentDidUpdate(prevProps: DataProps) {
        if (prevProps.value !== this.props.value) {
            console.log("update");
            this.setState({
                data: this.props.value
            });
        }
    }

    render() {
        return <Bar data={this.state.data} {...config} />
    }
}

export default BCL;
