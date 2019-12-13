import React, { Component } from 'react'
import {Toast } from 'antd-mobile';
import Back from "../../views/back/back"
import './jiazhenglist.css'
import JiazhengItem from "../../views/jiazhengItem/jiazhengItem"
export default class Parent extends Component {
  constructor() {
    super()
    this.state = {
        title: "",
        homeworker: []
    }
}
componentDidMount() {
    var title = this.props.match.params.type;
      this.setState({
          title
  })
  
  this.$axios({
      url: "/findHomeWorker",
      params:{
          type:this.props.match.params.type
      }
  }).then(res => {
      if (res.data.isok) {
          this.setState({
             homeworker: res.data.data,
          });
      } else {
          Toast.fail(res.data.info, 1);
      }
  })
}
render(){
   return (
          <div>
                <div className="top">
              <span className="zhe"></span>
               <span className="long"> {this.state.title}</span>  <span className="bac"><Back /></span> 
               <span className="iconfont icon-sousuo ge2"></span>
            </div>
            <div className="hui">
          <select className="xia">
            <option value="籍贯">籍贯</option>
            <option value="成都">成都</option>
            <option value="绵阳">绵阳</option>
         </select>

          <select className="xia">
            <option value="工资">工资</option>
            <option value="5000-7000">5000-7000</option>
            <option value="7000-10000">7000-10000</option>
         </select>
         <select className="xia">
            <option value="年龄">年龄</option>
            <option value="30-40">30-40</option>
            <option value="40-50">40-50</option>
         </select>

     </div>
                <div className="homeitem">
                    {this.state.homeworker.map(item=>{
                          return <JiazhengItem key={item.id} item={item}/>
                    })}
                </div>
         </div>
  )
}
}