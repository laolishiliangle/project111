import React, { Component } from 'react'
import { Carousel, Toast } from 'antd-mobile';
import BannerImg from "../bannertu/bannertu"

export default class Parent extends Component {
  state = {
    data: [],
    imgHeight: 170,
}
componentDidMount() {
    //一进来就执行
    this.$axios({
        url: "/homeBanner"
    }).then(res => {
        if (res.data.isok) {

            this.setState({
                data: res.data.data,
            });
        } else {
            Toast.fail(res.data.info, 1);
        }
    })
}
render() {
    return (
        <Carousel infinite autoplay>
            {this.state.data.map(val => {
                return <div key={val.id}>
                    <BannerImg item={val} />
                </div>
            }
            )}
        </Carousel>
    )
}
}