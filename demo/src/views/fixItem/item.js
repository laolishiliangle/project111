import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

 class Parent extends Component {
    state={
    }
    goDetail(id){
      this.props.history.push('/fixdetail/'+id)                                                 
  }
       render(){
       let { item } = this.props;
        return (
          <div className="hezi2"  onTouchEnd={()=>this.goDetail(item.id)}>
            <div>
                <div className="iconfont icon-dianhua dian"></div>
                <p className="hui2">{item.len}</p>      

          </div>

             <div>
                 <span className="name3">{item.name}</span>
                  <span className="iconfont icon-start1 star"></span>
                  <span className="iconfont icon-start1 star"></span>
                 <div className="inf">{item.info}</div>
                 <span  className="iconfont icon-location addr"></span>    
                  <span className="addr">{item.address}</span>
            </div>  

       

          </div>
  )
}
}
export default withRouter(Parent)