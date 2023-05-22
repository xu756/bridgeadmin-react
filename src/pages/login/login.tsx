import "./login.scss";
import {Button, Col, Row} from 'antd';
import {useDispatch} from 'react-redux';
import {setUser} from "@/store/user";
import {useSelector} from 'react-redux';
import {RootState} from '@/store';
import {useEffect} from "react";
import {NoAuthApi} from "@/utils/api";

export default () => {
    const api = new NoAuthApi();
    const user = useSelector((state: RootState) => state.User);
    useEffect(() => {
        // init();
    }, []);
    const init = () => {
        api.getCaptcha().then(r => {
            console.log(r);
        }).catch(e => {
            console.log(e);
        });
    }
    const dispatch = useDispatch();
    return (
        <div className="login">
            <div className="login_box">
                <Row className="w100" >
                    <Col className="login_box_left" span={12}></Col>
                    <Col className="login_box_right" span={12}></Col>
                </Row>
            </div>
        </div>
    )
}