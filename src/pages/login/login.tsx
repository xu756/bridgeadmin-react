import "./login.scss";
import {Button} from 'antd';
import {useDispatch} from 'react-redux';
import {setUser} from "@/store/user";
import {useSelector} from 'react-redux';
import {RootState} from '@/store';
import {useEffect} from "react";
import {NoAuthApi} from "@/utils/api";

export default () => {
    const api = new NoAuthApi();
    const user = useSelector((state: RootState) => state.User);
    useEffect(() => {
        init();
    }, []);
    const init = () => {
        api.getCaptcha().then(r => {
            console.log(r);
        }).catch(e => {
            console.log(e);
        });
    }
    const dispatch = useDispatch();
    return (
        <div id="login_body">

        </div>
    )
}