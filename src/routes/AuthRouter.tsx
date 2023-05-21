import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

export default ({children, path}: any) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token") || "";

    useEffect(() => {
    if (!token && path !== "/login") {
            navigate("/login")
        }
    }, [token, location.pathname])
    return children
}