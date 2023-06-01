import {CaptchaRes} from "@/model/Api";
import IconFont from "@/components/iconfont/icon";
import {Button} from "antd";

interface CaptchaValue {
    value: CaptchaRes
    width?: string
    height?: string

}

export default (prop: CaptchaValue) => {

    return (
        <div className={"captcha"} style={{
            width: '300px' || prop.width,
        }}>
            <div className={"captcha-header"}>
                <div className={"captcha-header-title"}>验证码验证</div>
                <div className={"captcha-header-thumb"} style={{
                    backgroundImage: `url(${prop.value.thumb})`
                }}></div>
            </div>
            <div className={"captcha-body"} style={{
                height: '236px' || prop.height,
                backgroundImage: `url(${prop.value.image})`
            }}></div>
            <div className={"captcha-footer"}>
                <div className={"captcha-footer-icon"}>
                    <div className={"captcha-footer-close"}>
                        <IconFont type={"yg-icon-quxiao"}/>
                    </div>
                    <div className={"captcha-footer-refresh"}>
                        <IconFont type={"yg-icon-zhongxinshangchuan"}/>
                    </div>
                </div>
                <Button block type="primary" className={"captcha-footer-btn"}>验证</Button>
            </div>
        </div>
    )
}