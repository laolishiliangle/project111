import React, { Component } from 'react'
import Back from "../../views/back/back"
import {Link} from 'react-router-dom'
import SearchInput from "../../views/SearchInput/SearchInput"
import Fabu from "../../views/fabu/fabu"
import Banner from "../../views/bannerjia/banner"
import './jiazheng.css'

export default class Parent extends Component {
  state = {}
  render() {
      return (
          <div>
              <div className='top2'>
                  <div ><Back /></div>
                  <div><h2 className="long">找家政</h2></div>        
                  <div >
                      <span className="iconfont icon-zhanghao ren1"></span>                                                   
                  </div>
              </div>
              <div >
                  <div>
                      <div><SearchInput /></div>
                      <div><Fabu /></div>
                  </div>   
                  <div >
                      <Banner />
                  </div>
              </div>
           
    <div className="four">
          <Link to="/jiazhenglist/钟点工"  className="small2">
            <div className="orange2">
               <div className="iconfont icon-hua boshi2"></div>
            </div>
            <p className="word">钟点工</p>
           </Link>
           <Link to="/jiazhenglist/保姆"  className="small2">
            <div className="orange2 green2">
               <div className="iconfont icon-boshimao boshi2"></div>
            </div>
            <p className="word">保姆</p>
           </Link>
           <Link to="/jiazhenglist/月嫂"  className="small2">
            <div className="orange2 blue2">
               <div className="iconfont icon-shuben boshi2"></div>
            </div>
            <p className="word">月嫂</p>
           </Link>
           <Link to="/jiazhenglist/保洁"  className="small2">
            <div className="orange2 pink">
               <div className="iconfont icon-aixin boshi2"></div>
            </div>
            <p className="word2">专业保洁</p>
           </Link>
        
           <Link to="/jiazhenglist/家电清洗"  className="small2">
            <div className="orange2 g1">
               <div className="iconfont icon-hua boshi2"></div>
            </div>
            <p className="word">家电清洗</p>
          </Link>
          <Link to="/jiazhenglist/家居保养"  className="small2">
            <div className="orange2 ">
               <div className="iconfont icon-boshimao boshi2"></div>
            </div>
            <p className="word">家居保养</p>
          </Link>
          <Link to="/jiazhenglist/新居开荒"  className="small2">
            <div className="orange2 g2">
               <div className="iconfont icon-shuben boshi2"></div>
            </div>
            <p className="word">新居开荒</p>
          </Link>
          <Link to="/jiazhenglist/更多"  className="small2">
            <div className="orange2 g3">
               <div className="iconfont icon-gengduo boshi2"></div>
            </div>
            <p className="word2">更多</p>
          </Link>
        
    </div>
             

             <div className="zheli">
              
                   <div className="sao2"> 
                      <p>临时小时工预约</p> 
                      <p>点击这里</p>
                   </div>
                   <div className="iconfont icon-saoba sao"></div>
               
                   <div className="sao2 sao3">
                      <p>临时小时工预约</p> 
                      <p>点击这里</p>
                   </div>
                   <div className="iconfont icon-saoba sao"></div>               

             </div>

     </div>
      )
  }
}