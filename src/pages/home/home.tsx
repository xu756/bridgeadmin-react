import {BridgeBCL, LeftProps} from "../../model/bridge";
import React, {useRef} from "react";
import {Button, Col, Row} from "antd";
import Left from "../../components/home/left";

interface HomeState {
    LeftData: LeftProps;
}

export const LeftContext = React.createContext<LeftProps>({
    bridge_bcl: new BridgeBCL(),
});

const Home = () => {
    const [leftData, setLeftData] = React.useState<LeftProps>({
        bridge_bcl: new BridgeBCL(),
    });

    const updateData = () => {
        setLeftData((prevState) => ({
            ...prevState,
            bridge_bcl: {
                ...prevState.bridge_bcl,
                bcl: prevState.bridge_bcl.bcl + 1,
            },
        }));
    };

    return (
        <div id="mainBox">
            <div className="Header">可视终端</div>
            <Row className="Container">
                <Col span={18}>
                    <LeftContext.Provider
                        value={{bridge_bcl: leftData.bridge_bcl}}
                    >
                        <Left/>
                    </LeftContext.Provider>
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick={updateData}>
                        Primary Button
                    </Button>
                </Col>
            </Row>
        </div>
    );
};
export default Home;
