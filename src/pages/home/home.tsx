import {StatisticCard} from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import {useEffect, useState} from "react";
import {AdminApi} from "@/utils/api";
import store from "@/store";
import {setUser} from "@/store/user";

const imgStyle = {
    display: 'block',
    width: 42,
    height: 42,
};

export default () => {
    const [responsive, setResponsive] = useState(false);
    const api = new AdminApi();
    useEffect(() => {
        api.getUserInfo().then(r => {
            store.dispatch(setUser(r));
        })
    },[])
    return (
        <RcResizeObserver
            key="resize-observer"
            onResize={(offset) => {
                setResponsive(offset.width < 596);
            }}
        >
            <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
                <StatisticCard
                    statistic={{
                        title: '支付金额',
                        value: 2176,
                        icon: (
                            <img
                                style={imgStyle}
                                src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                                alt="icon"
                            />
                        ),
                    }}
                />
                <StatisticCard
                    statistic={{
                        title: '访客数',
                        value: 475,
                        icon: (
                            <img
                                style={imgStyle}
                                src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                                alt="icon"
                            />
                        ),
                    }}
                />
                <StatisticCard
                    statistic={{
                        title: '成功订单数',
                        value: 87,
                        icon: (
                            <img
                                style={imgStyle}
                                src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                                alt="icon"
                            />
                        ),
                    }}
                />
                <StatisticCard
                    statistic={{
                        title: '浏览量',
                        value: 1754,
                        icon: (
                            <img
                                style={imgStyle}
                                src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*pUkAQpefcx8AAAAAAAAAAABkARQnAQ"
                                alt="icon"
                            />
                        ),
                    }}
                />
            </StatisticCard.Group>
        </RcResizeObserver>
    );
};