import React, { Component } from 'react'

import {Switch,Route,Redirect} from 'react-router-dom'
import './App.css'
import Index from './pages/Index/Index'
import Login from './pages/Login/Login'
import Reg from './pages/Reg/Reg'
import Jiajiao from './pages/jiajiao/jiajiao'
import Water from './pages/water/water'
import WaterDetail from './pages/waterDe/waterDe'
import Fix from './pages/fix/fix'
import Fixdetail from './pages/fixdetail/fixdetail'
import Jiazheng from './pages/jiazheng/jiazheng'
import Jiazhenglist from './pages/jiazhenglist/jiazhenglist'     
import Jiazhengdetail from './pages/jiazhengdetail/jiazhengdetail'    
import Neibor from './pages/neibor/neibor'
import More from './pages/more/more'
import Shezhi from './pages/shezhi/shezhi'
import Fabu from './pages/fabu/fabu'
import News from './pages/news/news'
import Collect from './pages/collect/collect'
export default class Parent extends Component {   

render(){
       return (
           <div>
                <Switch>
                <Route path="/login" component={Login} />
                <Route path="/index" component={Index} />
                <Route path="/reg" component={Reg} />
                <Route path="/jiajiao" component={Jiajiao} />
                <Route path="/water" component={Water} />
                <Route path="/waterdetail/:id" component={WaterDetail} />  
                <Route path="/fix" component={Fix} />
                <Route path="/fixdetail/:id" component={Fixdetail} />
                <Route path="/jiazheng" component={Jiazheng} />
                <Route path="/jiazhenglist/:type" component={Jiazhenglist} />
                <Route path="/jiazhengdetail/:id" component={Jiazhengdetail} />
                <Route path="/neibor" component={Neibor} />
                <Route path="/more" component={More} />
                <Route path="/fabu" component={Fabu} />
                <Route path="/news" component={News} />
                <Route path="/shezhi" component={Shezhi} />
                <Route path="/collect" component={Collect} />
                <Redirect to="/login" />
               </Switch>
           </div>
  )   
}
}