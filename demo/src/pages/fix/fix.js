import React, { Component } from 'react'
import './fix.css'
import Back from '../../views/back/back'
import Item from '../../views/fixItem/item'

export default class Parent extends Component {
   state={
     data:[]
   }

   componentDidMount() {      
    this.$axios({
       url:"/findRepair"            
  }).then(res=>{
      if(res.data.isok){
         console.log("获取维修成功！");
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
                  <span className="iconfont icon-sousuo sou"></span>
                  <span className="zhe"></span>
                  <span className="long2"> 商家列表</span>   <Back />
              
              </div>

       <div className="hui">
          <select className="xia">
            <option value="手机维系">手机维修</option>
            <option value="百佳维修">百佳维修</option>
            <option value="其他维修">其他维修</option>
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
      {/* <div className="hezi2">
           <div>
              <span className="name3">名字</span><span className="iconfont icon-start1 star"></span>
               <p>描述des</p>
                <span className="iconfont icon-location"></span>
               <span>地址</span>
           </div>
           <div>
               <div className="iconfont icon-dianhua dian"></div>
                <p className="hui2">200米</p>           
           </div>

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