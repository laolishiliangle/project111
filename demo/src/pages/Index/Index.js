import React, { Component } from 'react'
import './Index.css'
import All from "../../views/all/all"
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
// import Time from '../../views/time'
import { Carousel, WingBlank } from 'antd-mobile';
export default class Parent extends Component {

  state = {
    data: [],
    imgHeight: 180,
    show:"flase"
  }
  componentDidMount() {      
    this.$axios({
       url:"/banner"            
  }).then(res=>{
      if(res.data.isok){
         console.log("获取轮播成功！");
         this.setState({
             data:res.data.data
          });
    
      }else{
        alert(res.data.info)
      }
   
  })
}
  touch(){
     console.log("滑上了！！")               
    //  this.setState({
    //    show:!this.state.show
    //  })
  }

render(){
     return (
      <div>
               <div className="top">
              <span className="iconfont icon-zhedie zhe" onTouchEnd={()=>this.touch()}></span>
             
               <span> 龙山家园</span> 
               <span className="iconfont icon-zhanghao ren"></span>
               <div className="hLeft"><All /></div>
            </div>
                
        <input className="inpu" type="text" placeholder="search"/>
        <div className="fabu">我要发布</div>

         <WingBlank>
      <Carousel
          autoplay={true}     
          infinite
      >
        {this.state.data.map(val => (
            <img style={{ display: 'inline-block',height: this.state.imgHeight}} key={val.id} src={val.img} />
        ))}
      </Carousel>
    </WingBlank>

        <div className="weather">
               <div className="iconfont icon-icon-  yun"></div>
               <div>
                     <div>多云/小雨 27/30C</div>
                     <div>3-4级/4-5级风</div>
               </div>
               <div className="date">
                    <div>星期二</div>
                  
                    <div>18：00</div>
               </div>

        </div>
        <div className="six">
          <Link to="/jiajiao" className="small">    
            <div className="orange">
               <div className="iconfont icon-boshimao boshi"></div>
            </div>
            <p className="word">找家教</p>
          </Link>
          <Link to="/water" className="small">
            <div className="orange green">
               <div className="iconfont icon-shuitong boshi"></div>
            </div>
            <p className="word">送水到家</p>
          </Link>
          <Link to="/fix" className="small">
            <div className="orange blue">
               <div className="iconfont icon-weixiu boshi"></div>
            </div>
            <p className="word">维修服务</p>
          </Link>
          <Link to="/jiazheng" className="small">
            <div className="orange light">
               <div className="iconfont icon-saoba boshi"></div>
            </div>
            <p className="word">家政</p>
          </Link>
          <Link to="/neibor" className="small">
            <div className="orange yellow">
               <div className="iconfont icon-ai-connection boshi"></div>
            </div>
            <p className="word">社区互动</p>
          </Link>
          <Link to="/more" className="small">
            <div className="orange red">
               <div className="iconfont icon-gengduo boshi"></div>
            </div>
            <p className="word">更多服务</p>
          </Link>
          </div>
        


       </div>
  )         
    
}

}
