import React, { Component } from "react";
import { Col, Row } from "antd";
import BCL from "./bcl";
import { BridgeBCL } from "../../model/bridge";

interface Props {
    bcl: BridgeBCL;
}

interface State {
    BclData: Array<any>;
}

class Left extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            BclData: [],
        };
    }

    generateData = () => {
        const { bcl } = this.props;
        const data = [
            {
                label: "全桥",
                type: "bcl",
                value: bcl.bcl,
            },
            {
                label: "全桥",
                type: "bsl",
                value: bcl.bsl,
            },
            {
                label: "桥面",
                type: "bcl",
                value: bcl.deck.bcl,
            },
            {
                label: "桥面",
                type: "bsl",
                value: bcl.deck.bsl,
            },
            {
                label: "上部",
                type: "bcl",
                value: bcl.sup.bcl,
            },
            {
                label: "上部",
                type: "bsl",
                value: bcl.sup.bsl,
            },
            {
                label: "下部",
                type: "bcl",
                value: bcl.sub.bcl,
            },
            {
                label: "下部",
                type: "bsl",
                value: bcl.sub.bsl,
            },
        ];
        this.setState({ BclData: data });
    };

    componentDidMount() {
        this.generateData();
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.bcl !== prevProps.bcl) {
            this.generateData();
        }
    }

    render() {
        return (
            <Row>
                <Col span={8}>
                    <BCL value={this.state.BclData} />
                </Col>
                <Col span={16}></Col>
            </Row>
        );
    }
}

export default Left;
