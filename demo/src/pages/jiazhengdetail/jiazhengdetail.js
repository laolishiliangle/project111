import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import './jiazhengdetail.css'
import Back from "../../views/back/back"
import Jiazhengtop from "../../views/jiazhengtop/jiazhengtop"
import Jiazhengcon from "../../views/jiazhengcon/jiazhengcon"
import Jiazhengpin from "../../views/jiazhengpin/jiazhengpin"
import Jiazhengbot from "../../views/jiazhengbot/jiazhengbot"

export default class Parent extends Component {
  state = {
    item: {}
}
changearr(obj) {
    var str = String(obj);
    if (str.includes('[')) {
        var arr = JSON.parse(str);
        str = arr.join()
    }
    return str
}
componentDidMount() {
    this.$axios({
        url: "/findHomeWorker",
        params: {
            id: this.props.match.params.id
        }
    }).then(res => {
        if (res.data.isok) {
            var item=res.data.data[0]
            item.type=this.changearr(item.type)
            item.qualification=this.changearr(item.qualification)
            this.setState({
                item
            });

        } else {
            Toast.fail(res.data.info, 1);
        }
    })
}
render() {
    return (
        <div>
            <div className="top2">
                <div className="bac1"><Back /></div>
                <div className="Name2"><h2>{this.state.item.name}</h2></div>
                <div className="hRight">
                    <span className="iconfont icon-zhanghao ren1"></span>
                </div>
            </div> 
            <div className="HDtop">
                <Jiazhengtop item={this.state.item} />
            </div>
            <div className="HDmain">
                <Jiazhengcon item={this.state.item} />
            </div>
            <div className="HDreview">
                <Jiazhengpin />
            </div>
            <div className="hdbtnfix">
                <Jiazhengbot />
            </div>
        </div>
    )
}
}