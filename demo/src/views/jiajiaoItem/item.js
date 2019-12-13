import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
 class Parent extends Component {
   render(){
       let { item } = this.props;
        return (
             <div className="tu2">
                <div>
                    <img className="tu" src={item.img}></img>      
                </div>
                <div >已报名{item.num}人</div>
             
             </div>
  )
}
}
export default withRouter(Parent)