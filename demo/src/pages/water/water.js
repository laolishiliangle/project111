import React, { Component } from 'react'
import './water.css'
import Back from '../../views/back/back'
import Item from '../../views/wateItem/item'
export default class Parent extends Component {
  state={
     data:[]
}

  componentDidMount() {      
    this.$axios({
       url:"/findWater"            
  }).then(res=>{
      if(res.data.isok){
         console.log("获取水站成功！");
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
               <span className="long2"> 送水到家</span>   <Back />
               {/* <span className="ren iconfont icon-zhanghao"></span> */}
            </div>
     <div className="hui">
         <select className="xia">
            <option value="水站">水站</option>
            <option value="农夫山泉">农夫山泉</option>
            <option value="百岁山">百岁山</option>
         </select>

          <select className="xia">
            <option value="区域">区域</option>
            <option value="成都">成都</option>
            <option value="绵阳">绵阳</option>
         </select>
         <select className="xia">
            <option value="智能排序">智能排序</option>
            <option value="好评优先">好评优先</option>
            <option value="距离最近">距离最近</option>
         </select>

     </div>
   
         {/* <div><img src="//ecma.bdimg.com/public03/imageglobal/loader.js?c=1"></img> </div>
          <div className="midd">
                <h4>农夫山泉水站</h4>
                 <p>用一份良心 送一份纯净，农夫山泉老百姓最放心的桶装水</p>
                 <span className="iconfont icon-location"></span>  <span>石景山地铁北星座大厦201</span>
          </div>
          <div className="zui1">
              <div className="iconfont icon-location"></div>
              <p>200米</p>
          </div> */}
     
           {
               this.state.data.map(item => {
                    return <Item key={item.id} item={item} />
               })
           }




       </div>
  )
}
}