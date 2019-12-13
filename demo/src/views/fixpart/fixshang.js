import React, { Component } from 'react'
import "./fixpart.css"
export default class Parent extends Component {
    state={}
          render(){
            let { item } = this.props;
        return (

            <div className="Wdfirst2">
            <div className="wdtop">
                <span className='f30 wdttitle wdfortfff'>{item.name}</span>
                 <span className="iconfont icon-start1 star" ></span>
                 <span className="iconfont icon-start1 star" ></span>
                 <span className="iconfont icon-start1 " ></span>
                 <span className="iconfont icon-start1 " ></span>
            </div>
            <div className="wdmid flex">
                <div className="flex ">
                    <span className="iconfont icon-location f20 wdslicon"></span>
                       <span className="f222 wdsspan wdmdis">距离您{item.len}km</span>
                </div>
                <p className="f20">石家庄</p>
                <p className="f20">营业时间:8:00-20:00</p>
                <div className="wdmbtn">
                    <button className="f20 rdbtn1">关注</button>
                       <button className="f20 rdbtn2">向Ta提问</button>

                </div>
                <div className="wddright">
                    <span className="f20 iconfont icon-eyes"></span>
                    <span className="f20">{item.likeNum}</span>&nbsp;&nbsp;
                    <span className="f20 iconfont icon-aixin"></span>
                      <span className="f20">{item.readNum}</span>
                </div>
            </div>
           
        </div>
  )
}
}