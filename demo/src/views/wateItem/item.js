import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
 class Parent extends Component {
     state={
     }
    toDetail(id) {
        this.props.history.push("/waterdetail/" + id)   
    }

render(){
  let { item } = this.props;
    return (
        <div onTouchEnd={this.toDetail.bind(this, item.id)}>
           <div className="hezi">
             <img style={{ display: 'inline-block',height: "2rem",width: "2.7rem"}} src={item.img}></img>
             <div className="midd">
                  <span className="nongfu">{item.name}</span>
                  <span className="iconfont icon-start1 star"></span>
                  <span className="iconfont icon-start1 star"></span>
                  <span className="iconfont icon-start1 star"></span>
                  <span className="iconfont icon-start "></span>
                  <span className="iconfont icon-start"></span>
                  
                  <p className="miao">{item.des}</p>
                  <span className="iconfont icon-location"></span> 
                  <span>{item.address}</span>
            </div>

            <div className="zui1">
                <div className="iconfont icon-dianhua tel"></div>                               
                <p>{item.len}</p>
          </div>

      </div>
    

 </div>
  )
}
}
export default withRouter(Parent)