import React, { Component } from 'react'
import './jiajiao.css'
import { Carousel, WingBlank } from 'antd-mobile';
import Back from '../../views/back/back'
import Item from '../../views/jiajiaoItem/item'
export default class Parent extends Component {
  state = {
    data: [],
    data2:[],
    imgHeight: 180,
  }
  componentDidMount() {      
    this.$axios({
       url:"/teacherBanner"            
  }).then(res=>{
      if(res.data.isok){
         console.log("获取家教轮播成功！");   
         this.setState({
             data:res.data.data
          });
    
      }else{
        alert(res.data.info)
      }
   
  })
  this.$axios({
    url:"/teacherTop"            
}).then(res=>{
   if(res.data.isok){
      console.log("获取家教排行成功！");   
      this.setState({
          data:res.data.data
       });
 
   }else{
     alert(res.data.info)
   }

})

}
render(){
       return (
          <div>
              <div className="top">
              <span className="zhe"></span>
               <span className="long"> 找家教</span>  <span className="bac"><Back /></span> 
               <span className="ge">北京</span>
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
    <div className="faxian">
        
             <div className="iconfont icon-location loca"></div>
             <div>
               <div className="fir">周边老师</div>
               <div className="seco">发现身边好老师</div>
            </div>
            <div className="iconfont icon-icon_tiwen tiwen"></div>
             <div>
               <div className="fir">我要提问</div>
               <div className="seco">难题名师帮你解</div>
            </div>
   </div>
   <div className="four">
          <div  className="small2">
            <div className="orange2">
               <div className="iconfont icon-hua boshi2"></div>
            </div>
            <p className="word">小学</p>
          </div>
          <div  className="small2">
            <div className="orange2 green2">
               <div className="iconfont icon-boshimao boshi2"></div>
            </div>
            <p className="word">初中</p>
          </div>
          <div  className="small2">
            <div className="orange2 blue2">
               <div className="iconfont icon-shuben boshi2"></div>
            </div>
            <p className="word">高中</p>
          </div>
          <div  className="small2">
            <div className="orange2 pink">
               <div className="iconfont icon-aixin boshi2"></div>
            </div>
            <p className="word2">兴趣</p>
          </div>
        
          </div>

     <p className="devi">———————————top排行榜———————————</p>
      
       {
        this.state.data.map(item => {
             return <Item key={item.id} item={item} />
        })
    }

          </div>
  )
}
}