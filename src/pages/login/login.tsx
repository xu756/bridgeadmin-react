import "./login.scss";
import {Button, Checkbox, Col, Form, Input, Row, message} from 'antd';
import {setUser} from "@/store/user";
import {useSelector} from 'react-redux';
import store, {RootState} from '@/store';
import {useEffect} from "react";
import {NoAuthApi} from "@/utils/api";
import IconFont from "@/components/iconfont/icon";
import {ResponseData} from "@/model/response";
import {UserLogin} from "@/model/user";

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
        api.login(values.username, values.password).then((r:UserLogin) => {
            localStorage.setItem("token", r.access_token);
        }).catch(e => {
            console.log(e);
        });
    };

    const LoginFailed = (errorInfo: any) => {
        messageApi.error("请输入用户名和密码");
    };
    return (
        <div className="login">
            {contextHolder}
            <div className="login-box">
                    <div className="login-box-left">
                        1
                    </div>
                    <div className="login-box-right">
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
                                <Input.Password prefix={<IconFont type={"yg-icon-tianchongxing-"}/>}
                                                placeholder="密码"/>
                            </Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Row justify={"space-between"}>
                                    <Col span={12}>
                                        <Checkbox>记住密码</Checkbox>
                                    </Col>
                                    <Col span={12} className="login-form-forgot">
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
                </div>
            </div>
        </div>
    )
}