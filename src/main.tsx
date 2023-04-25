import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/global.scss'
import {BrowserRouter} from "react-router-dom";
import IndexRouter from "./routes/routes";

import {AliveScope} from 'react-activation'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <IndexRouter/>
    </BrowserRouter>
)
