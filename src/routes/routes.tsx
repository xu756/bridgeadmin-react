import React, {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";
import {CrownFilled, AppstoreAddOutlined, SmileFilled, TabletFilled} from "@ant-design/icons";
import Index from "../pages";
import Home from "../pages/home/home";
import Charts from "../components/charts";
import Admin from "../assets/images/admin.svg"
import BSvg from "../assets/images/b.svg"
import Login from "../pages/login/login";
export const appList = [
    {
        icon: BSvg,
        title: '云工桥安',
        desc: '城市桥梁安全技术评估系统',
        url: 'http://b.imlogic.cn/',
    }, {
        icon: Admin,
        title: '可视大屏',
        desc: '桥梁安全状况实时监测大屏',
        url: '/charts',
    }
]
export const route = {
    path: '/',
    routes: [
        {
            path: '/home',
            name: '首页',
            icon: <SmileFilled/>,
        },
        {
            path: '/admin',
            name: '管理页',
            icon: <AppstoreAddOutlined/>,
            routes: [
                {
                    path: '/admin/page1',
                    name: '一级页面',
                },
            ],
        },
        {
            name: '列表页',
            icon: <TabletFilled/>,
            path: '/list',
            routes: [
                {
                    path: '/list/sub-page',
                    name: '列表页面',
                    icon: <CrownFilled/>,
                    routes: [
                        {
                            path: 'sub-sub-page1',
                            name: '一级列表页面',
                            icon: <CrownFilled/>,
                        },
                    ],
                },
                {
                    path: '/list/sub-page2',
                    name: '二级列表页面',
                    icon: <CrownFilled/>,
                },
            ],
        },
    ],
}


export const homeRouter: routerItem[] = [
    {
        path: "/home",
        auth: true,
        element: <Home/>,
    }, {
        path: "/admin",
        auth: true,
        element: <Navigate to="/admin/page1"/>,
    }, {
        path: "/admin/page1",
        auth: true,
        element: <h1>管理页面</h1>,
    }
]

export interface routerItem {
    path: string,
    auth: boolean,
    element: React.ReactNode,
    children?: routerItem[],
}

export const indexRoutes: routerItem[] = [
    {
        path: "/",
        auth: true,
        element: <Navigate to="/home"/>,
    },
    {
        path: "/*",
        auth: true,
        element: <Index/>,
    },
    {
        path: "/login",
        auth: false,
        element:<Login/>,
    },
    {
        path: "/charts",
        auth: true,
        element: <Charts/>,
    },
]