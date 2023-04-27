import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/global.scss'
import {BrowserRouter, Route, Router, Routes,} from "react-router-dom";
import {indexRoutes} from "./routes/routes";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Routes>
            {indexRoutes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                )
            })
            }
        </Routes>
    </BrowserRouter>
)
