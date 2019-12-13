import React, { Component } from 'react'
import './Reg.css'
import Back from '../../views/back/back'
export default class Parent extends Component {     
  state={
    user:{
        type:2,
        name:"",
        tel:"",
        pass:"",
        comfir:""
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

reg(){
console.log(this.state.user)
this.$axios({
    url:"/addUser",
    method:"post",
    data:this.$qs.stringify(this.state.user)             
}).then(res=>{
  if(this.state.user.name===false||this.state.user.pass===false||this.state.user.tel===false){
    alert("请输入账号、密码和电话~")
  }else{
    alert("注册成功！")
    this.props.history.push("/login")
    
  }

})
}



render(){
   return (
         <div>
            <div className="login">
              <Back />
             <span>注册</span>
           </div>
           <input type="text" placeholder="账号"  className="inp" value={this.state.user.name} onChange={(e)=>this.change(e,"name")}/>
         <span  className="iconfont icon-zhanghao name"></span>
         <input type="text" placeholder="手机号/邮箱"  className="inp" value={this.state.user.tel} onChange={(e)=>this.change(e,"tel")}/>
         <span  className="iconfont icon-shouji name"></span>
         
    
         <input type="text" placeholder="手机验证码" className="inp" value={this.state.user.comfir} onChange={(e)=>this.change(e,"comfir")}/>
         <span  className="iconfont icon-shouji name"></span>
         

         <input type="password" placeholder="6-32位密码" className="inp" value={this.state.user.pass} onChange={(e)=>this.change(e,"pass")}/>
         <span  className="iconfont icon-mima name"></span>
         <span className="code">验证码</span>
       <div className="button" onClick={()=>this.reg()}>注册</div>                 
       

 </div>
  )
}
}