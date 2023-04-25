import {GithubFilled, InfoCircleFilled, QuestionCircleFilled} from '@ant-design/icons';
import type {ProSettings} from '@ant-design/pro-components';
import {PageContainer, ProLayout, ProCard} from '@ant-design/pro-components';
import {Avatar, Image, Space} from 'antd';
import React, {useState} from 'react';
import routes, {HomeRoutes, route} from '../../routes/routes';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default () => {
    const [pathname, setPathname] = useState('/home');
    return (

        <ProLayout
            bgLayoutImgList={[
                {
                    src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                    left: 85,
                    bottom: 100,
                    height: '303px',
                },
                {
                    src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                    bottom: -68,
                    right: -45,
                    height: '303px',
                },
                {
                    src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                    bottom: 0,
                    left: 0,
                    width: '331px',
                },
            ]}
            route={route}
            location={{
                pathname,
            }}
            collapsed={false}
            menu={{
                type: 'group',
            }}
            actionsRender={(props) => {
                if (props.isMobile) return [];
                return [
                    <div
                        key={1}
                        style={{
                            height: '200px',
                        }}
                    >
                        <Image
                            width={'100%'}
                            preview={false}
                            height={132}
                            src="https://gw.alipayobjects.com/zos/bmw-prod/d283f09a-64d6-4d59-bfc7-37b49ea0da2b.svg"
                        />
                        <Space
                            align="center"
                            size="middle"
                            style={{
                                width: '100%',
                                marginBlockStart: '32px',
                            }}
                        >
                            <Avatar
                                src="https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"
                                size="small"
                            />
                            <div
                                style={{
                                    fontSize: '14px',
                                    marginInlineEnd: '32px',
                                }}
                            >
                                七妮妮
                            </div>
                            <InfoCircleFilled key="InfoCircleFilled"/>
                            <QuestionCircleFilled key="QuestionCircleFilled"/>
                            <GithubFilled key="GithubFilled"/>
                        </Space>
                    </div>,
                ];
            }}
            menuRender={(props, defaultDom) => (
                <>
                    {defaultDom}
                </>
            )}
            menuItemRender={(item, dom) => (
                <div
                    onClick={() => {
                        setPathname(item.path || '/home');

                    }}
                >
                    {dom}
                </div>
            )}
        >
            <PageContainer>
                <HomeRoutes path={pathname}/>
            </PageContainer>
        </ProLayout>


    );
};