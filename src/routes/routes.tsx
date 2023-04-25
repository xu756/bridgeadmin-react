import React, {lazy, Suspense} from "react";
import {Navigate, Route, RouteObject, Routes, useRoutes} from "react-router-dom";
import {CrownFilled, SmileFilled, TabletFilled} from "@ant-design/icons";
import react from "@vitejs/plugin-react";
import Home from "../pages/home/home";

export const route = {
    path: '/',
    routes: [
        {
            path: '/home',
            name: '首页',
            icon: <SmileFilled/>,
            component: <h1>home</h1>,
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

interface routerItem {
    path: string,
    auth: boolean,
    element: React.ReactNode,
    children?: routerItem[]
}

const indexRoutes: routerItem[] = [
    {
        path: "/*",
        auth: true,
        element: <Home/>,
    }, {
        path: "/login",
        auth: false,
        element: <h1>登录</h1>,
    }
]

const mapRoutesToElements = (routes: routerItem[]) => {
    return routes.map((route: routerItem) => {
        if (route.children) {
            const childrenElements = mapRoutesToElements(route.children);
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<>{childrenElements}</>}
                />
            );
        }
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        {route.element}
                    </Suspense>
                }
            />
        );
    });
};

const IndexRouter = () => (
    <Routes>{mapRoutesToElements(indexRoutes)}</Routes>
);

export default IndexRouter;

const home: routerItem[] = [
    {
        path: "/",
        auth: true,
        element: <Navigate to="/home"/>,
    },
    {
        path: "/home",
        auth: true,
        element: <div>home</div>,
    }, {
        path: "/admin",
        auth: true,
        element: <Navigate to="/admin/page1"/>,
        children: [
            {
                path: "/admin/page1",
                auth: true,
                element: <h1>管理1</h1>,
            }
        ]
    },
]

export const HomeRoutes = ({path}: { path: string }) => (
    <Routes >{mapRoutesToElements(home)}</Routes>
)
