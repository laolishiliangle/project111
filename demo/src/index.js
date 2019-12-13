import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/js/rem'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/css/iconfont.css';
import 'antd-mobile/dist/antd-mobile.css';
import { DatePicker } from 'antd-mobile';

import {BrowserRouter} from 'react-router-dom'

import qs from 'qs'
import axios from 'axios'
Component.prototype.$axios=axios;     
Component.prototype.$qs=qs;   

axios.interceptors.response.use(response => {
    console.log("--------请求的数据回来了" + response.config.url + "--------");
    console.log(response);
    console.log("----------over---------");
    if (response.data.code === -1) {
        window.open("http://localhost:3000/login")     
        // this.props.history.push('/login')
        return {
            data:{
                code:-1,
                data:[]    
            }
        }
    } else {
        return response;
    }

})



ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));      
// 所有引入的都要写在render上面




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
