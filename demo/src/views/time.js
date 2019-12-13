import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export default function formatTime(data){  
    var d = new Date(data);
    function doTime(d){
        if(d<10){
            d='0'+d }
        return d;
}
    var times= doTime(d.getDate()) + ' ' + doTime(d.getHours()) + ':' + doTime(d.getMinutes()) + ':' + doTime(d.getSeconds());
    return times;
}
     