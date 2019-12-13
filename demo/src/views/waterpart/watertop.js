import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import "./Water.css"
 class Parent extends Component {
     state={}
    render(){
        let { item } = this.props;    
            return (

          <div>
                <div className="watert1">
                <div className="wfleft">
                    <img src={item.img} />
                </div>
                <div className="wfright">
                    <h3 className="f30">{item.name}</h3>
                    <div className='flex tongscore'>
                
                        <span className="iconfont icon-start1 star"></span>
                        <span className="iconfont icon-start1 star"></span>
                        <span className="iconfont icon-start1 star"></span>
                        <span className="f16 tong">月售 {item.count}桶</span>
                    </div>
                    <div>￥{item.price}</div>
                    <p>
                        <span className="f20 iconfont icon-aixin"></span>
                          <span className="f20">{item.likeNum}</span>&nbsp;&nbsp;
                         <span className="f20">浏览数:</span>
                        <span className="f20">{item.readNum}</span>
                    </p>
                </div>

               </div>
               <div className="flex wdsec">
                <div className="wdsleft">
                    <span className="iconfont icon-location f20 wdslicon"></span>
                </div>
                <div className="wdsmid">
                    <div className="f222 wdsspan">{item.len}</div>
                    <div className="f222 wdsspan">{item.address}</div>
                </div>
                <div className="wdsright">
                    <span className="iconfont icon-dianhua wdddphone"></span>
                </div>
            </div>
    </div>
  )
}
}
export default withRouter(Parent)