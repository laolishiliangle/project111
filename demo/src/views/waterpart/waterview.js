import React, { Component } from 'react'
import Item from "../pingItem/pingItem"
import Write from "../Write/Write"
export default class Parent extends Component {                                        
    state = {
        reviewlist: []
    }
    componentWillReceiveProps(){
        this.setState({})
    }
    render() {
        let { reviewlist ,waterid} = this.props
        return (
            <div className="wdfort">
                <div className="flex">
                    <h3 className='f30 wdttitle wdfortfff'>TA们都在说</h3>       
                    <Write initcommont={()=>this.props.initcommont()} waterid={waterid} apiurl={this.props.apiurl}/>
                </div>
                <hr />
                <div>
                    {reviewlist.map(item => {
                         return <Item key={item.id} item={item}/>   
                    })}
                </div>
            </div>
        )
    }
}