import './captcha.scss'
import {Button, Col, Row,Popconfirm} from "antd";
import {NoAuthApi} from "@/utils/api";
import {useEffect, useState} from "react";
import {CaptchaRes} from "@/model/Api";
import IconFont from "@/components/iconfont/icon";

interface CaptchaProps {
    onClick: () => void
}

export default (props: CaptchaProps) => {
    const api = new NoAuthApi();
    const [captcha, setCaptcha] = useState({} as CaptchaRes)
    const [captchaVisible, setCaptchaVisible] = useState(false)
    useEffect(() => {
        getCaptcha()
    }, [])

    const getCaptcha = () => {
        api.getCaptcha().then((r: CaptchaRes) => {
            setCaptcha(r)
        })
    }
    const changeCaptcha = () => {
        setCaptchaVisible(!captchaVisible)
    }

    return (
        <div className="captcha">
            <div style={{display: captchaVisible ? "block" : "none"}}
                className={captchaVisible ? "captcha-content animate__animated animate__fadeInUp" : "captcha-content animate__animated animate__fadeOut"}>
                <div className="captcha-content-header">
                    <div className="captcha-content-header-text"> 请在下图依次点击</div>
                    <div className="captcha-content-header-thumb" style={{
                        backgroundImage: `url(${captcha.thumb})`,
                    }}/>
                </div>
                <div style={{
                    backgroundImage: `url(${captcha.image})`,
                }} className="captcha-content-body"/>
                <Row className="captcha-content-footer" justify={"space-between"}>
                    <Col span={6} className="captcha-content-footer-icon">
                        <IconFont type={"yg-icon-quxiao"} onClick={changeCaptcha}/>
                        <IconFont type={"yg-icon-zhongxinshangchuan"} onClick={getCaptcha}/>
                    </Col>

                    <Col span={5}>
                        <Button block type="primary">确认</Button>
                    </Col>
                </Row>


            </div>
            <Button className="captcha-button" onClick={changeCaptcha} block type="primary">获取验证码</Button>
        </div>
    )
}