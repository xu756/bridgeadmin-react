import Index from "./index";
import "../assets/global.scss"
import 'antd/dist/reset.css';
import {useEffect} from "react";

export default function App() {
    const resizeListener = () => {
        // 定义设计图的尺寸 3840
        let designSize = 1920;
        // 获取 html 元素
        let html = document.documentElement;
        // 定义窗口的宽度
        let clientW = html.clientWidth;
        // html 的fontsize 大小
        let htmlRem = (clientW * 16) / designSize;1
        html.style.fontSize = htmlRem + 'px';
        // console.log(clientW);
    }
    useEffect(() => {
        resizeListener();
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    })
    return (
        Index()
    );
}