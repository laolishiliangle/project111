import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Toast } from 'antd-mobile';
import store from "../../store/index"
import "./All.css"
class App extends Component {  
    state = {
        isopen: false,
            navlist: [
            {
                id: "1",
                icon: "icon-laoshirenzheng1",
                name: "找家教"
            },
            {
                id: "2",
                icon: "icon-tubiao-",
                name: "送水到家"
            },
            {
                id: "3",
                icon: "icon-dianshi",
                name: "维修服务"
            }, {
                id: "4",
                icon: "icon-zuqiu",
                name: "家政服务"
            }
            , {
                id: "5",
                icon: "icon-yinyue",
                name: "社区互动"
            },
            {
                id: "6",
                icon: "icon-xiaoxi",
                name: "消息中心"
            }, {
                id: "7",
                icon: "icon-i",
                name: "我的收藏"
            }, {
                id: "8",
                icon: "icon-ziyuan",
                name: "我的发布"
            },
            {
                id: "9",
                icon: "icon-aixin",
                name: "账号设置"
            },
            {
                id: "10",
                icon: "icon-tuichu",
                name: "退出登录"
            }

        ]
    }
    showall() {
        this.refs.mask.style.left = 0;
    }
    hideall(e) {
        this.refs.mask.style.left = "-100vw";
        e.stopPropagation();
    }
    gosome(e) {
      
        e.stopPropagation();
    }
    gorout(e, id) {
        e.stopPropagation();
        switch (id) {
            case "1":
                this.props.history.push(('/jiajiao'));
                break;
            case "2":
                this.props.history.push(('/water'));
                break;
            case "3":
                this.props.history.push(('/fix'));
                break;
            case "4":
                this.props.history.push(('/jiazheng'));
                break;
            case "5":
                this.props.history.push(('/neibor'));
                break;
            case "6":
                this.props.history.push(('/news'));
                break;
            case "7":
                this.props.history.push(('/collect'));
                break;
            case "8":
                this.props.history.push(('/fabu'));
                break;
            case "9":
                this.props.history.push(('/shezhi'));
                break;
            case "10":
                this.$axios({
                    url:"/exit"
                }).then(res=>{
                    if(res.data.isok){
                        Toast.success(res.data.info, 1);
                        localStorage.removeItem('name')
                        this.props.history.push(('/login'));
                    }else{
                        Toast.fail(res.data.info, 1);
                    }
                })
                
                break;
                 default:
                break;

        }

    }
    componentWillReceiveProps() {
        this.setState({})
    }
    
    render() {
        return (
            <div>
                <span className="iconfont icon-gengduo geng2" onTouchEnd={() => this.showall()}></span>
                <div ref="mask" className="mask" onTouchEnd={(e) => this.hideall(e)}>
                    <div className="maskcon" onTouchEnd={(e) => this.gosome(e)}>
                        <div className="Auser">
                           
                            <span>{localStorage.getItem('name')}</span>
                        </div>
                        <div className="Aitem">
                            {this.state.navlist.map(item => {
                                return (
                                    <div className="allitem" key={item.id} onTouchEnd={(e) => this.gorout(e, item.id)}>
                                        <span className={"iconfont " + item.icon}></span>&nbsp;&nbsp;
                                        <span>{item.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(App)