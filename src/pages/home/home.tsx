import React, {useEffect} from "react";

import Left from "../../components/home/left";
import {Button, Col, Row} from "antd";
import {BridgeBCL} from "../../model/bridge";

interface State {
    bridge_bcl: BridgeBCL;

}

const Home = () => {
    const [state, setState] = React.useState<State>({
        bridge_bcl: {
            bcl: 90,
            bsl: 88,
            deck: {
                bcl: 90,
                bsl: 88,
            },
            sup: {
                bcl: 76,
                bsl: 65,
                sups: [],
            },
            sub: {
                bcl: 78,
                bsl: 45,
                piers: [],
                abus: [],
            }
        }
    });

    const UpdateData = () => {
        setState({
            bridge_bcl: {
                ...state.bridge_bcl,
                bsl: state.bridge_bcl.bsl + 1,

            }
        })
    }
    useEffect(() => {
        const timer = setInterval(() => {
            UpdateData()
        }, 2000)
        return () => {
            clearInterval(timer)
        }
    }, [state],)


    return (
        <div id="mainBox">
            <div className="Header">
                可视终端
            </div>
            <Row className="Container">
                <Col span={18}>
                    <Left bcl={state.bridge_bcl}/>
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick={UpdateData}>Primary Button</Button>
                </Col>
            </Row>
        </div>
    );
}
export default Home;
