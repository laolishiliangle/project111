import React, { Component } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import API from '../../common/API'             
import Back from '../../views/back/back'

export default class Parent extends Component {
    state={
        user:{
            type:2,
            name:"",
            pass:""
      }
    }   
    change(e,props){
      var user=this.state.user;
      user[props]=e.target.value;    
         // 获取表单里的数据
      this.setState({
          user:user    
      })
  }

  login(){
    this.$axios({
        url:"/login",
        method:"post",
        data:this.$qs.stringify(this.state.user)             
    }).then(res=>{
        if(res.data.isok){
            localStorage.setItem('name',this.state.user.name);     
            this.props.history.push("/index")
            alert("登录成功")
        }else{
           alert(res.data.info)
          
        }
     
    })
    console.log(this.state.user)
}


render(){
   return (
       <div>
         
           <div className="login">
             {/* <span className="iconfont icon-fanhui back" onClick={()=>this.back()}></span>       */}
             <Back />
             <span>登录</span>
           </div>
         <input type="text" placeholder="邮箱/手机号"  className="inp" value={this.state.user.name} onChange={(e)=>this.change(e,"name")}/>
         <span  className="iconfont icon-zhanghao name"></span>
         
    
         <input type="password" placeholder="密码" className="inp" value={this.state.user.pass} onChange={(e)=>this.change(e,"pass")}/>
         <span  className="iconfont icon-mima name"></span>

       <div className="button" onClick={()=>this.login()}>登录</div>
       <div className="forget">忘记密码</div>
       <Link to="/reg" className="reg">注册</Link>
       <div className="or">—————————或者—————————</div>
       <div className="or">社交账号快速注册</div>

<div className="box">

       <span className="iconfont icon-weixin  one" ></span>    
       <span className="iconfont icon-weibo  two" ></span>
       <span className="iconfont icon-QQ  three" ></span>
 </div>

       </div>
  )
}
}