import React, { Component } from 'react'
import "./jiazhengItem.css"
import {withRouter} from 'react-router-dom'
class Parent extends Component {
    state = {}
    go(id){
        this.props.history.push('/jiazhengdetail/'+id)
    }
    render() {
        let { item } = this.props;
        return (
            <div className="HomeItem" onTouchEnd={()=>this.go(item.id)}>   
                <div className="HILeft"> <img src={item.img} /> </div>
                <div className="HTRight">
                    <div className="HRtop">
                        <b className="Name4">{item.name}</b>
                        <span className="rank">{item.vNum}</span>
                        <span className="price"><i className="pcol">￥{item.price} </i>/小时</span>  
                    </div>
                    <p className="HRP">
                    
                        <span className="sspan">{item.city}</span>|  
                        <span className="sspan">{item.age}</span>|
                        <span className="sspan">{item.edu}</span>|
                        <span className="sspan">{item.experience}经验</span>   
                    </p>
                    <p className="HRCon">              
                        {item.info}
                    </p>
                    <div className="HRSee">
                        <span className="iconfont icon-eyes"></span><span className="hst">关注{item.readNum}</span>
                        <span className="iconfont icon-aixin"></span><span className="hst">好评{item.likeNum}</span>
                    </div>          
                    <hr />
                    <p className="HRFot">
                        <span className="iconfont icon-distance1"></span>
                        <span className="HRDis">距您{item.len}公里</span>
                    </p>     
                </div>
            </div>
        )
    }

}
export default withRouter(Parent)