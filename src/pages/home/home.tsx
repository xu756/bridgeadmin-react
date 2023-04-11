import React, {useEffect} from "react";

import Left from "../../components/home/left";
import {Col, Row} from "antd";
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
    useEffect(() => {
        // 每一秒更新一次数据
        const timer = setInterval(() => {
            setState(prevState => ({
                bridge_bcl: {
                    ...prevState.bridge_bcl,
                    bsl: prevState.bridge_bcl.bsl + 1
                }
            }));
        }, 1000);
        return () => clearInterval(timer);

    }, [state.bridge_bcl.bsl])


    return (
        <div id="mainBox">
            <div className="Header">
                可视终端
            </div>
            <Row className="Container">
                <Col span={18}>
                    <Left bcl={state.bridge_bcl}/>
                </Col>
                <Col span={6}>col-6</Col>
            </Row>
        </div>
    );
}
export default Home;
