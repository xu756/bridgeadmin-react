import Axios, {AxiosRequestConfig} from 'axios'
import {useNavigate} from "react-router-dom";

const navigate = useNavigate();








const BASE_URL = 'https://xu756.top/appserver/'
const client = Axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
})

// 请求拦截器
client.interceptors.request.use(
    (config) => {
        config.url = BASE_URL + config.url
        // 在发送请求之前做些什么
        if (location.pathname !== '/login') {
            if (!localStorage.getItem('token')) {
                navigate('/login')
            }
        }
        //  设置加载

        return config
    }
)




