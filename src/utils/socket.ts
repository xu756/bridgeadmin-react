import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import store from '@/store';
import {openLoad, closeLoad} from '@/store/config';

const BASE_URL = '/appserver';

// 创建axios实例
const createClient = () => {
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 15000,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    });

    // 请求拦截器
    instance.interceptors.request.use(
        (config) => {
            config.url = BASE_URL + config.url;
            // 在发送请求之前做些什么

            // 设置加载
            store.dispatch(openLoad());
            return config;
        },
        (error) => {
            // 设置加载
            store.dispatch(closeLoad());
            return Promise.reject(error);
        }
    );

    // 响应拦截器
    instance.interceptors.response.use(
        (response) => {
            // 设置加载
            store.dispatch(closeLoad());

            switch (response.status) {
                case 200:
                    return response.data;
                case 401:
                    // 处理未授权的情况
                    break;
                default:
                // 处理其他错误
            }
            return response;
        },
        (error) => {
            // 设置加载
            // const dispatch = useDispatch();
            // dispatch(closeLoad());
            // 处理网络错误
            return Promise.reject(error);
        }
    );

    return instance;
};

// 创建全局axios实例
const client = createClient();

// 返回数据类型
interface ResponseData<T> {
    code: number;
    msg: string;
    data: T;
}

// 封装get请求
export function get<T>(url: string, params = {}): Promise<T> {
    return new Promise((resolve, reject) => {
        client
            .get(url, {
                params,
            })
            .then((response: AxiosResponse<T>) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// 封装post请求
export function post<T>(url: string, data = {}): Promise<T> {
    return new Promise((resolve, reject) => {
        client
            .post(url, data)
            .then((response: AxiosResponse<T>) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
