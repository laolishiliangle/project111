import React, { Component } from 'react'
import Back from '../../views/back/back'
import { Toast } from 'antd-mobile';
import './waterDe.css'
import Watertop from "../../views/waterpart/watertop"
import Watercon from "../../views/waterpart/watercon"
import Bott from "../../views/waterpart/bott"
import Waterview from '../../views/waterpart/waterview'
import Item from '../../views/waterdetailItem/item'
export default class Parent extends Component {
    state={
          waterdetail: {},
        waterid: "",
        reviewlist: []
    }
    
    componentDidMount(){
        var id = this.props.match.params.id;
        this.$axios({
             url: "/findWater",
            params: {
                id:id
            }
        }).then(res => {
            if (res.data.isok) {
                this.setState({
                    waterdetail: res.data.data[0],
                });
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
        this.initcommont()
    }

    initcommont(){
        var id = this.props.match.params.id;
        this.$axios({
            url: "/findComment",
            params: {
                waterId: id
            }
        }).then(res => {
            if (res.data.isok) {
                this.setState({
                    reviewlist: res.data.data,
                });
                console.log("获取评论成功！");
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
    }
    componentWillReceiveProps() {
        this.initcommont()
    }

render(){
     return (
           <div>
                <div className="top2">
                    <div className="bac1"><Back /></div>
                    <div className="xiang"><h2>详情</h2></div>
                    <div className="hRight">
                        <span className="iconfont icon-zhanghao ren1"></span>
                    </div>
                </div>
                
                <div className="WDfirst">
                          {/* 传值给子组件 */}
                    <Watertop item={this.state.waterdetail} />
                </div>
                <div className="WDsecond">
                    <Watercon item={this.state.waterdetail} />
                </div>
                <div className="WDforth">
                    <Waterview reviewlist={this.state.reviewlist} waterid={this.props.match.params.id}
                    initcommont={()=>this.initcommont()} apiurl="/addComment"
                    />
                </div>
                 <div className="hdbtnfix">
                    <Bott/>
                 </div>

           </div>
  )
}
}