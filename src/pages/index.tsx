import {
    GithubFilled,
    InfoCircleFilled,
    LogoutOutlined,
    SearchOutlined,
    QuestionCircleFilled
} from '@ant-design/icons';
import {
    PageContainer,
    ProLayout,
    ProCard,
    ProSettings
} from '@ant-design/pro-components';
import {Button, Dropdown, Input} from 'antd';
import React, {Suspense, useEffect, useState} from 'react';
import {homeRouter, route,appList} from '../routes/routes';
import {Route, Routes} from "react-router-dom";

const SearchInput = () => {
    return (
        <div
            key="SearchOutlined"
            aria-hidden
            style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
            }}
            onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
        >
            <Input
                style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: "rgba(0, 0, 0, 0.06)",
                }}
                prefix={
                    <SearchOutlined
                        style={{
                            color:"rgba(0, 0, 0, 0.25)",
                        }}
                    />
                }
                placeholder="搜索"
                bordered={false}
            />
            <Button
            >搜索</Button>
        </div>
    );
};

export default () => {
    const [pathname, setPathname] = useState('/home');
    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
        // fixSiderbar: true,
        layout: 'mix',
        splitMenus: true,
        iconfontUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
    const [loading, setLoading] = useState(true);
    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        setPathname(window.location.pathname)
        setLoading(false)
    })
    return (
        <ProLayout
            loading={loading}
            title={''}
            logo={<img src="/logo.svg" style={{width: '120px',height:'60px'}} />}
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
            appList={appList}
            location={{
                pathname,
            }}
            {...settings}
            collapsed={collapsed}
            onCollapse={setCollapsed}
            menu={{
                type: 'group',
                collapsedShowGroupTitle: true,
            }}
            avatarProps={{
                src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                size: 'small',
                title: '徐甲新',
                render: (props, dom) => {
                    return (
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        key: 'logout',
                                        icon: <LogoutOutlined/>,
                                        label: '退出登录',
                                    },
                                ],
                            }}
                        >
                            {dom}
                        </Dropdown>
                    );
                },
            }}
            actionsRender={(props) => {
                if (props.isMobile) return [];
                return [
                    props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                        <SearchInput/>
                    ) : undefined,
                    <InfoCircleFilled key="InfoCircleFilled"/>,
                    <QuestionCircleFilled key="QuestionCircleFilled"/>,
                    <GithubFilled key="GithubFilled"/>,
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
                        window.history.pushState(null, '', item.path || '/home');
                    }}
                >
                    {dom}
                </div>
            )}
        >
            <PageContainer
                // footer={[
                //     <Button key="3">重置</Button>,
                //     <Button key="2" type="primary">
                //         提交
                //     </Button>,
                // ]}
            >
                <ProCard>
                    <Routes location={pathname}>
                        {homeRouter.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Suspense fallback={<div>Loading...</div>}>
                                            {route.element}
                                        </Suspense>
                                    }
                                />
                            )
                        })
                        }
                    </Routes>
                </ProCard>
            </PageContainer>
        </ProLayout>

    );
};