import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import './fixdetail.css'
import Back from "../../views/back/back"         
import Fixshang from "../../views/fixpart/fixshang"
import Fixxia from "../../views/fixpart/fixxia"
import Bott from "../../views/fixpart/bott"
import Waterview from '../../views/waterpart/waterview'
export default class Parent extends Component {
  state = {
    repairdetail: {},
    waterid: "",
    reviewlist: []
}
componentDidMount() {
    var id = this.props.match.params.id;
   
    this.$axios({
        url: "/findRepair",
        params: {
            id:id
        }
    }).then(res => {
        if (res.data.isok) {
            this.setState({
                repairdetail: res.data.data[0],
            });
        } else {
            Toast.fail(res.data.info, 1);
        }
    })
    this.initrepaircomment()
}
initrepaircomment(){
    var id = this.props.match.params.id;
    this.$axios({
        url: "/findRepairComment",
        method: "get",
        params: {
            repairId: id
        }
    }).then(res => {
        if (res.data.isok) {
            this.setState({
                reviewlist: res.data.data,
            });
        } else {
            Toast.fail(res.data.info, 1);
        }
    })
}
render() {
    return (
        <div>
            <div className="top2">
                <div className="bac2"><Back /></div>
                <div className="hh"><h2>商家详情</h2></div>
               
            </div>
            <div className="WDfirst">
                < Fixshang item={this.state.repairdetail} />
            </div>
            <div className="WDthird">
                < Fixxia item={this.state.repairdetail} />
            </div>
            <div className="WDforth">
                    <Waterview reviewlist={this.state.reviewlist}  
                    waterid={this.props.match.params.id}
                    initcommont={()=>this.initrepaircomment()} apiurl="/addRepairComment"/>
                </div>
          
            <div className="hdbtnfix">
                <Bott/>
            </div>

        </div>
    )
}
}