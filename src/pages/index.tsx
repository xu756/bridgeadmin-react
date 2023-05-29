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
import {homeRouter, route, appList} from '../routes/routes';
import {Route, Routes} from "react-router-dom";
import LogoSvg from "../assets/images/logo.svg";
import IconFont, {IconUrl} from "../components/iconfont/icon";
import AuthRoute from "../routes/AuthRouter";
import {AdminApi} from "@/utils/api";
import store, {RootState} from "@/store";
import {setUser} from "@/store/user";
import {useSelector} from "react-redux";

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
                            color: "rgba(0, 0, 0, 0.25)",
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
        iconfontUrl: IconUrl,
    });

    const [loading, setLoading] = useState(true);
    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        const api = new AdminApi();
        api.getUserInfo().then(r => {
            store.dispatch(setUser(r));
        })
    }, [])
    useEffect(() => {
        setPathname(window.location.pathname)
        setLoading(false)
    }, [pathname]);


    const user = useSelector((state: RootState) => state.User);

    return (
        <ProLayout
            loading={loading}
            title={''}
            logo={LogoSvg}
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
                src: user.avatar,
                size: 'small',
                title: user.name,
                render: (props, dom) => {
                    return (
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        key: 'logout',
                                        icon: <LogoutOutlined/>,
                                        label: '退出登录',
                                        onClick: () => {
                                            window.location.href = '/login';
                                        },
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
            <PageContainer>
                <ProCard>
                    <Routes location={pathname}>
                        {homeRouter.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <AuthRoute key={index} path={route.path}>
                                            <Suspense fallback={<div>Loading...</div>}>
                                                {route.element}
                                            </Suspense>
                                        </AuthRoute>
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