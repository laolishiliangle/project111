import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
 class Parent extends Component {
render(){
    let { item } = this.props;
     return (
       
            <div>
               <p>{item.name}</p>
            
           </div>
  )
}
}
export default withRouter(Parent)