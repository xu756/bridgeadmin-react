import {CaptchaRes} from "@/model/Api";
import IconFont from "@/components/iconfont/icon";
import {Button} from "antd";
import React, {useState} from "react";

interface CaptchaValue {
    value: CaptchaRes;
    width?: string;
    height?: string;
}

interface Dot {
    x: number;
    y: number;
    index: number;
}

export default (prop: CaptchaValue) => {
    const [dots, setDots] = useState<Dot[]>([]);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const {offsetX, offsetY} = event.nativeEvent;
        const newDot: Dot = {
            x: offsetX,
            y: offsetY,
            index: dots.length + 1,
        };
        // console.log(newDot);
        setDots([...dots, newDot]);
    };

    const handleDotClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <div
            className="captcha"
            style={{
                width: "300px" || prop.width,
            }}
        >
            <div className="captcha-header">
                <div className="captcha-header-title">验证码验证</div>
                <div
                    className="captcha-header-thumb"
                    style={{
                        backgroundImage: `url(${prop.value.thumb})`,
                    }}
                ></div>
            </div>
            <div
                className="captcha-body"
                style={{
                    height: "236px" || prop.height,
                    backgroundImage: `url(${prop.value.image})`,
                }}
                onClick={handleClick}
            >
                {dots.map((dot) => (
                    <div
                        key={dot.index}
                        className="captcha-dot"
                        style={{top: dot.y, left: dot.x}}
                        onClick={handleDotClick}
                    >
                        {dot.index}
                    </div>
                ))}
            </div>
            <div className="captcha-footer">
                <div className="captcha-footer-icon">
                    <div className="captcha-footer-close">
                        <IconFont type={"yg-icon-quxiao"}/>
                    </div>
                    <div className="captcha-footer-refresh">
                        <IconFont type={"yg-icon-zhongxinshangchuan"}/>
                    </div>
                </div>
                <Button block type="primary" className="captcha-footer-btn">
                    验证
                </Button>
            </div>
        </div>
    );
};
