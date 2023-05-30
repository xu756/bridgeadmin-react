import './captcha.scss'
import {Button, Col, Row} from "antd";
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
    useEffect(() => {
        getCaptcha()
    }, [])

    const getCaptcha = () => {
        api.getCaptcha().then((r: CaptchaRes) => {
            setCaptcha(r)
        })
    }
    const openCaptcha = () => {

    }


    return (
        <div className="captcha">
            <div className="captcha-content">
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
                        <IconFont type={"yg-icon-quxiao"}/>
                        <IconFont type={"yg-icon-zhongxinshangchuan"} onClick={getCaptcha}/>
                    </Col>

                    <Col span={5}>
                        <Button block type="primary">确认</Button>
                    </Col>
                </Row>


            </div>
            <Button className="captcha-button" onClick={openCaptcha} block type="primary">获取验证码</Button>
        </div>
    )
}