import {useEffect, useState} from "react";
import {Button, Form, Input} from "antd";
import {IConfig} from "@/types";
import store from "@/store";
import {useSelector} from "react-redux";


export default () => {
    const initConfig = useSelector((state: any) => state.Config)
    const [config, setConfig] = useState<IConfig>(initConfig as IConfig);
    useEffect(() => {
        console.log(config)
    }, [])
    const submit = (values: IConfig) => {
        console.log(values)
    }
    return (
        <>
            <Form initialValues={config} onFinish={submit}>
                <Form.Item label="网站标题" name="title">
                    <Input/>
                </Form.Item>
                <Form.Item label="网站描述" name="description">
                    <Input.TextArea allowClear defaultValue={"网站描述"} showCount autoSize={{minRows: 2, maxRows: 6}}/>
                </Form.Item>
                <Form.Item label="logo" name="logo">
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        </>
    )
}