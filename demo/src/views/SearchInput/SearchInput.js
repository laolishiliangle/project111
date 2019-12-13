import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile';
export default class Parent extends Component {

    state = {}
    render() {
        return (
            <SearchBar placeholder="搜索" />
        )
    }
}