import React, { Component } from 'react';
import "./jiazhengpin.css"
import Item from "../../views/ReviewItem/ReviewItem"
export default class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <h3 className="hdmh3">雇主评价</h3>
                <hr />

                <div className="ReviewItem">
                    <div className="ReLeft">
                        <img  src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1576080344001&amp;di=57e7745f98a99269e8c01ff24891a127&amp;imgtype=0&amp;src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201408%2F26%2F20140826082551_ePLQL.thumb.700_0.jpeg" alt="" />
                      </div>
                        <div className="ReRight">
                        <div className="ReRtop">
                            <div className="f20 revname">嘿嘿！！！</div>
                            <span className="revtime f16">3小时前</span>
                        </div>
                        <p className="f16 revp">店家的服务很好，纯净水的质量很高，赞一个赞一个~</p>
                        <hr />
                    </div>
                </div>
                <div className="ReviewItem">
                    <div className="ReLeft">
                         <img  src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1576080344001&amp;di=57e7745f98a99269e8c01ff24891a127&amp;imgtype=0&amp;src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201408%2F26%2F20140826082551_ePLQL.thumb.700_0.jpeg" alt="" />
                    </div>
                    <div className="ReRight">
                        <div className="ReRtop">
                            <div className="f20 revname">嘿嘿！！！</div>
                            <span className="revtime f16">3小时前</span>
                        </div>
                        <p className="f16 revp">店家的服务很好，纯净水的质量很高，赞一个赞一个~</p>
                        <hr />
                    </div>
                </div>
                <div className="ReviewItem">
                    <div className="ReLeft">
                         <img  src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1576080344001&amp;di=57e7745f98a99269e8c01ff24891a127&amp;imgtype=0&amp;src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201408%2F26%2F20140826082551_ePLQL.thumb.700_0.jpeg" alt="" />
                    </div>
                    <div className="ReRight">
                        <div className="ReRtop">
                            <div className="f20 revname">嘿嘿！！！</div>
                            <span className="revtime f16">3小时前</span>
                        </div>
                        <p className="f16 revp">店家的服务很好，纯净水的质量很高，赞一个赞一个~</p>
                        <hr />
                    </div>
                </div>
                <div className="ReviewItem">
                    <div className="ReLeft">
                         <img  src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1576080344001&amp;di=57e7745f98a99269e8c01ff24891a127&amp;imgtype=0&amp;src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201408%2F26%2F20140826082551_ePLQL.thumb.700_0.jpeg" alt="" />
                    </div>
                    <div className="ReRight">
                        <div className="ReRtop">
                            <div className="f20 revname">嘿嘿！！！</div>
                            <span className="revtime f16">3小时前</span>
                        </div>
                        <p className="f16 revp">店家的服务很好，纯净水的质量很高，赞一个赞一个~</p>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}