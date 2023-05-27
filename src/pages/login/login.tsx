import "./login.scss";
import {Button, Checkbox, Col, Form, Input, Row,message} from 'antd';
import {setUser} from "@/store/user";
import {useSelector} from 'react-redux';
import store, {RootState} from '@/store';
import {useEffect} from "react";
import {NoAuthApi} from "@/utils/api";
import IconFont from "@/components/iconfont/icon";

export default () => {
    const api = new NoAuthApi();
    const [messageApi, contextHolder] = message.useMessage();

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
    const Login = (values: any) => {
        console.log('Success:', values);
    };

    const LoginFailed = (errorInfo: any) => {
        messageApi.error("请输入用户名和密码");
    };
    return (
        <div className="login">
            {contextHolder}
            <div className="login-box">
                <Row className="w100">
                    <Col className="login-box-left" span={12}>
                        1
                    </Col>
                    <Col className="login-box-right" span={12}>
                        <Form onFinish={Login}
                              onFinishFailed={LoginFailed}
                        >
                            <Form.Item
                                name={"username"}
                                rules={[{required: true, message: '请输入用户名'}]}
                            >
                                <Input prefix={<IconFont type={"yg-icon-yonghu"}/>} placeholder="手机号"/>
                            </Form.Item>
                            <Form.Item
                                name={"password"}
                                rules={[{required: true, message: '请输入密码'}]}
                            >
                                <Input.Password prefix={<IconFont type={"yg-icon-tianchongxing-"}/>} placeholder="密码"/>
                            </Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Row justify={"space-between"}>
                                    <Col span={8}>
                                        <Checkbox>记住密码</Checkbox>
                                    </Col>
                                    <Col span={8} className="login-form-forgot">
                                        <a href="">
                                            忘记密码
                                        </a>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item className="login-form—submit">
                                <Button type="primary" htmlType="submit" className="login-form—submit-button">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    )
}