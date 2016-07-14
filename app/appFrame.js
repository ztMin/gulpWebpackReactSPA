import React from 'react';
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router';
require('./css/appFrame.css');
var AppMenu=require('./appMenu.js');
var userInfo=require('./utils/auth.js').getUsertInfo();
module.exports = React.createClass({
    getInitialState: function() {
        return {
            menuName:''
        };
    },
    hasMenu:function(){
        if(this.state.menuName){
            this.setState({menuName:''})
        }else{
            this.setState({menuName:'showLeftMenu'})
        }
    },
    render:function() {
        return (
            <div className={'appFrame wh100 ofh bg-f2 '+this.state.menuName}>
                <div className="header navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a href="" className="navbar-brand"><span className="navbar-logo"></span><span className="c-3">品尚管理</span></a>
                            <button className="navbar-toggle collapsed">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="topNav">
                                <a href="javascript:;" className="f-s-14">
                                    <i className="fa fa-bell-o"></i>
                                    <span className="label g-d-n"></span>
                                </a>
                            </li>
                            <li className="topNav navbar-user">
                                <a href="javascript:;" className="c-6">
                                    <img src="./image/user-3.jpg" alt="" />
                                    <span className="hidden-xs userName">{userInfo.name || '用户名称'}</span> <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu animated">
                                    <li className="arrow"></li>
                                    <li><a href="javascript:;">修改密码</a></li>
                                    <li><a href="javascript:;">设置</a></li>
                                    <li className="divider"></li>
                                    <li className="outBtn"><a href="/leqifootball_web/">退出登录</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar h100">
                    <div className={this.state.menuName?'ofh scrollbar-y h100':''}>
                        {
                            function(){
                                if(this.state.menuName){
                                    return (<ul className="nav">
                                        <li className="nav-profile">
                                            <div className="image"><img className="wh100" src="./image/user-3.jpg" alt="" /></div>
                                            <div className="info">
                                                <div className="fs-14">用户名称</div>
                                                <small className="c-889097">角色名称</small>
                                            </div>
                                        </li>
                                    </ul>)
                                }else{
                                    return '';
                                }
                            }
                        }
                        <AppMenu>左侧菜单</AppMenu>
                    </div>
                    <div className="sidebar-minify-btn c-f" onClick={this.hasMenu}><i className="fa fa-angle-double-left c-f"></i></div>
                </div>
                <div className="appContent">{this.props.children}</div>
            </div>
        )
    }
})