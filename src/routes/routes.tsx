import React, {lazy, Suspense} from "react";
import {Navigate, Route, useLocation, Routes} from "react-router-dom";
import {CrownFilled, SmileFilled, TabletFilled} from "@ant-design/icons";
import Index from "../pages";
import Home from "../pages/home/home";
import Charts from "../components/charts";




export const appList = [
    {
        icon: '/b.svg',
        title: '云工桥安',
        desc: '城市桥梁安全技术评估系统',
        url: 'http://b.imlogic.cn/',
    },{
        icon: '/admin.svg',
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
            icon: <CrownFilled/>,
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
    },{
        path: "/admin",
        auth: true,
        element: <Navigate to="/admin/page1"/>,
    }, {
        path: "/admin/page1",
        auth: true,
        element: <h1>管理1</h1>,
    }
]

export interface routerItem {
    path: string,
    auth: boolean,
    element: React.ReactNode,
    children?: routerItem[]
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
        path: "/charts",
        auth: true,
        element: <Charts/>,
    },{
        path: "/login",
        auth: false,
        element: <h1>登录</h1>,
    }
]