import React, { Component } from 'react'
import './collect.css'
import Back from '../../views/back/back'

export default class Parent extends Component {
      render(){
             return (
                <div>
                <div className="top">
                   <span className="zhe"></span>
                    <span className="long"> 我的收藏</span>  <span className="bac"><Back /></span> 
                    <span className="iconfont icon-zhanghao ge"></span>
            </div>
           <div className="tanx">
               <div>
                  <h4 className="b1">百佳维修中心</h4>
                  <p>描述</p>
                 <span className="iconfont icon-location"></span> <span>石家庄星座大厦</span>
               </div>
           <div className="quxiao">
                 <div className="iconfont icon-gengduo qu1"></div>       
                 <p>取消收藏</p>
           </div>

           </div>




               </div>
  )
}
}