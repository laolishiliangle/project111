import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './left.css'
class Parent extends Component {
    
    render() {
        return (
           <div> 这是左边中间333333333333333333333333333333333333333333333333!</div>
        )
    }
}
export default withRouter(Parent)