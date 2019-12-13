import React, { Component } from 'react'
import Back from "../../views/back/back"
import './shezhi.css'
import { Toast } from 'antd-mobile';
export default class Parent extends Component {
  state = {
    user: {
        name: "",
        oldpass: "",
        newpass: ""
    },
    confirm: ""
    // 后端不要确认密码字段
}
componentDidMount() {
    this.$axios({
        url: "/findUser",
        method: "post",
        data: {
         name: "123"
        }
    }).then(res => {
        if (res.data.isok) {
            Toast.success('successed', 1);
            var tempuser={
                name: "",
                oldpass: "",
                newpass: ""
            }
            var users=res.data.data[0];
            tempuser.name=users.name;
            tempuser.oldpass=users.pass;
            
            this.setState({
                user:tempuser
            })
     
        } else {
            Toast.fail(res.data.info, 1);
        }
    })
}
   componentWillUnmount(){
    return false;
}
 ChangeUser(e, props, index) {
    var user = this.state.user;
       switch (props) {
        case "isAgree":
            user[props] = e.target.checked
            break;

        case "hobby":
          this.aihao[index].isChecked = !this.aihao[index].isChecked
            var arr = this.aihao.filter(item => item.isChecked)
            user[props] = arr.map(item => { return item.value })
            break;
        default:
            user[props] = e.target.value
            break;
    }
    this.setState({
        user
    })
}
Change2(e) {
    this.setState({
        confirm: e.target.value
    })
}
change3() {
    if (this.state.confirm !== this.state.user.newpass) {
        Toast.fail("两次密码不一致!", 1);
        return
    }
  
    this.$axios({
        url: "/changePassUser",
        method: "post",
        data: this.state.user
    }).then(res => {
        if (res.data.isok) {
            this.props.history.push('/login')
        } else {
            Toast.fail(res.data.info, 1);
        }
    })
}

    render(){
          return (
               <div>
                 <div className="top">
                    <div className="bac3"><Back /></div>
                    <div className="hh1"><h2>修改密码</h2></div>
                    <div className="hRight"></div>
                  </div>

              <div className="Lmain gai1">
                    <div className="iItem">
                        <input type="text" value={this.state.user.name}
                            className="input1" disabled />
                    </div>
                    <div className="iItem">
                        <input type="password" value={this.state.user.oldpass}
                            className="input3" placeholder="旧密码" disabled />
                    </div>
                    <div className="iItem">
                    
                        <input type="password" value={this.state.user.newpass}
                            onChange={(e) => this.ChangeUser(e, "newpass")}
                            className="input3" placeholder="请输入新密码" />    
                    </div>
                    <div className="iItem">
                        <input type="password" value={this.state.confirm} onChange={(e) => this.Change2(e)}
                            className="input2" placeholder="确认新密码" />
                    </div>
                    <div className="btndiv">
                        <button className="btn-login" onTouchEnd={() => this.change3()}>确定</button>
                    </div>
                </div>


                </div>
  )
}

}