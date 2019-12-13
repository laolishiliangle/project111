import React, { Component } from 'react';
import "./Write.css"
import { Toast } from 'antd-mobile';
export default class App extends Component {
    state = {
        review: {
            username: localStorage.getItem('name'),
            waterId: "",
            content: "",
            time: "",
        },
        temp: {}
    }
    componentDidMount() {
        this.state.review.waterId = this.props.waterid
    }

    changek(e) {
        var review = this.state.review;
        review.content = e.target.value;                                          
        this.setState({
            review
        })
    }
    new(e) {

        this.setState({
            review: {
               ...this.state.review,
                content: "" },
            temp: {}
        },()=>{
            console.log(this.state.review);
        })
        this.refs.mask2.style.left = 0;
    }
    hidmak(e) {
        e.stopPropagation();
        this.refs.mask2.style.left = "-100vw"
    }
    kk(e) {
        e.stopPropagation();
    }
    cancel(e) {
        e.stopPropagation();
        this.refs.mask2.style.left = "-100vw"
    }
    sure(e) {
        e.stopPropagation();
        var date = new Date().getTime();
          this.state.review.time = date;
           console.log(this.state.review);
        if (!this.state.review.content) {
            Toast.fail("请输入内容", 1);
            return
        }
        if (this.props.apiurl === "/addComment") {
            this.state.temp = this.state.review;
        }
        if (this.props.apiurl === "/addRepairComment") {
                 this.state.temp.name = this.state.review.username;
                 this.state.temp.repairId = this.state.review.waterId;
                 this.state.temp.content = this.state.review.content;
                this.state.temp.time = this.state.review.time
        }   
        this.$axios({
            url: this.props.apiurl,
            params: this.state.temp
        }).then(res => {

            if (res.data.isok) {
                this.setState({
                    review: {
                        ...this.state.review,
                        content: "",
                    }
                })
                Toast.success("添加成功", 1);
                this.props.initcommont()
                this.refs.mask2.style.left = "-100vw"  
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
    }
    render() {
        return (
            <div className="Writereview" onTouchEnd={(e) => this.new(e)}>
                <span className="iconfont icon-liuyan"></span>
                <span className="f16">写评论</span>
                <div ref="mask2" className="mask" onTouchEnd={(e) => this.hidmak(e)}>
                    <div className="con2" onTouchEnd={(e) => this.kk(e)}>
                        <textarea value={this.state.review.content} onChange={(e) => this.changek(e)} className="reviewtext f20" placeholder="请输入评论......"></textarea>
                        <div className="flex reviewbtn f20">
                            <button className="rbtn1" onTouchEnd={(e) => this.cancel(e)}>取消</button>
                            <button className="rbtn2" onTouchEnd={(e) => this.sure(e)}>确定</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}