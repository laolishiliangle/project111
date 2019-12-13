import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Button } from 'antd-mobile';
class Parent extends Component {
    state = {}
    showall() {
        console.log("启用了~")
    }
    render() {
        return <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>我要发布</Button>
    }
}
export default withRouter(Parent)