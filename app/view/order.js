import React from 'react';
import AddService from './order/addService';
import Datetimepicker from '../comp/datetimepicker';
require('../css/order.css');
module.exports =React.createClass({
    getInitialState: function() {
        return {isAddService:false};
    },
    toggleAddServices:function(e){
        this.setState({
            isAddService:!this.state.isAddService
        })
    },
    render: function () {
        var arr=[0,1,2,3,4,5,6,7,8,9];
        var toggleAddServices=this.toggleAddServices;
        var orderList=arr.map(function(o,i){
            return(
                    <div key={i} className="col-md-2">
                        <div className="order mb-20">
                            <div className="prodInfo">
                                <div className="prodPic c-f0 ellipsis right fs-24">
                                    <i className="fa fa-yen fw-300 fs-20 vam mr-5"></i>
                                    <span className="vam">3000</span>
                                </div>
                                <h2 className="prodName ellipsis fw-700 fs-18 c-3 mb-5">洗剪吹</h2>
                                <div className="orderTime c-9">2016-06-05 23:33:00</div>
                                <div className="orderId">
                                    <div className="oderNo right c-f0">10</div>
                                    <div className="ellipsis">NO123465dAS1</div>
                                </div>
                            </div>
                            <div className="schedule">
                                <ul>
                                    <li>
                                        <span className="stxt">排队</span>
                                        <span className="time">10分钟</span>
                                    </li>
                                    <li>
                                        <span className="stxt">洗头</span>
                                        <span className="time">40分钟</span>
                                    </li>
                                    <li className="c-f0">
                                        <span className="stxt">剪头发</span>
                                        <span className="time">20分钟</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="userInfo ofh">
                                <div className="userPic left mr-10">
                                    <img src="../image/user-3.jpg" width="50" height="50" alt=""/>
                                </div>
                                <h2 className="userName ellipsis fs-16 mb-10 fw-700">
                                    <span className="right ml-10"><i className={"fa fa-"+(Math.random()>0.5?"male":"female")}></i></span>
                                    <span className="block ellipsis">用户名称</span>
                                </h2>
                                <div className="userPhone">13659667712</div>
                            </div>
                            <div className="editBox ofh t-c">
                                <div className="editBtn p-10 cur-p left" title="删除订单">
                                    <i className="fa fa-trash"></i>
                                </div>
                                <div className="editBtn p-10 cur-p left" title="添加服务项目" onClick={toggleAddServices}>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <div className="editBtn p-10 cur-p left" title="组合买单">
                                    <i className="fa fa-chain"></i>
                                </div>
                                <div className="editBtn p-10 cur-p left" title="结账">
                                    <i className="fa fa-send"></i>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        })
        return (
            <div className="orderPage">
                <div className="orderForm">
                    <div className="right mr-20">
                        <div className="vam pr-10">
                            <input className="t-c" type="text" placeholder="订单号或者手机号" />
                        </div>
                        <div className="vam maxW100px" title="开始时间">
                            <Datetimepicker onChange={this.handleChange} className="form-control cur-p" ref="startTime" name="startTime"></Datetimepicker>
                        </div>
                        <span className="vam pl-10 pr-10"> - </span>
                        <div className="vam maxW100px" title="结束时间">
                            <Datetimepicker onChange={this.handleChange} className="form-control cur-p" ref="endTime" name="endTime"></Datetimepicker>
                        </div>
                        <span className="cur-p vam ml-20" title="添加订单"><i className="fa fa-plus"></i></span>
                    </div>
                </div>
                <div className="orderList row">
                {orderList}
                </div>
                <AddService isAddService={this.state.isAddService} toggleAddServices={this.toggleAddServices}></AddService>
            </div>
        );
    },
    handleChange:function(){
        window.startTime=this;
    }
});