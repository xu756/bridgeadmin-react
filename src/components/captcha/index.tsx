import {Button, Popover} from "antd";
import "./index.scss"
import {CaptchaRes} from "@/model/Api";
import Captcha from "@/components/captcha/captcha";
import {useEffect} from "react";

interface CaptchaProp {
    data: CaptchaRes
}

export default (prop: CaptchaProp) => {
    const openChange = (open: boolean) => {
        console.log(open)

    }
    useEffect(() => {
        console.log(prop.data)
    }, [])

    return (
        <Popover content={
            <Captcha value={prop.data}/>
        }  onOpenChange={openChange} trigger="click">
            <Button block type="primary">验证码验证</Button>
        </Popover>
    )
}