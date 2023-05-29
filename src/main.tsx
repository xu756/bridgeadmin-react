import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider, useSelector} from 'react-redux';
import store, {RootState} from '@/store';
import {message, Spin} from 'antd';
import './assets/global.scss'
import {indexRoutes} from './routes/routes';
import AuthRoute from './routes/AuthRouter';

const App = () => {
    const loading = useSelector((state: RootState) => state.Config.loading != 0);
    return (
        <BrowserRouter>
            <Routes>
                {indexRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <AuthRoute key={index} path={route.path}>
                                <Spin spinning={loading}>
                                    {route.element}
                                </Spin>
                            </AuthRoute>
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App/>
    </Provider>
);
