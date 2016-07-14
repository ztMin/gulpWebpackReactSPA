import React from 'react';
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router';
var Hassub=React.createClass({
    getInitialState: function() {
        return {
            active:'active'
        };
    },
    has:function(){
        this.setState({active:this.state.active?'':'active'})
        return false;
    },
    render:function(){
        return (
            <li className={'has has-sub '+this.state.active}>
                <a href="#" onClick={this.has}>
                    <b className="caret pull-right"></b>
                    <i className={"vam fa "+this.props.icon+" mr-10"}></i>
                    <span className="vam txt ellipsis">{this.props.title}</span>
                </a>
                {this.props.children}
            </li>
        )
    }
});
module.exports = React.createClass({
    getInitialState: function() {
        return {
            active:''
        };
    },
	render:function(){
		return(
            <ul className="nav maxW100">
            	<li>
            		<Link to="/" activeClassName="active">
            			<i className="vam fa fa-home mr-10"></i>
            			<span className="vam txt ellipsis">首页</span>
            		</Link>
            	</li>
                <li className="has">
                	<Link to="/order" activeClassName="active">
                		<b className="caret pull-right"></b>
                		<i className="vam fa fa-shopping-cart mr-10"></i>
            			<span className="vam txt ellipsis">订单管理</span>
                	</Link>
                </li>
                <li className="has">
                	<Link to="/order" activeClassName="active">
                		<b className="caret pull-right"></b>
                		<i className="vam fa fa-users mr-10"></i>
            			<span className="vam txt ellipsis">排队管理</span>
                	</Link>
                </li>
                <li className="has">
                	<Link to="/userManage" activeClassName="active">
                		<b className="caret pull-right"></b>
                		<i className="vam fa fa-user mr-10"></i>
            			<span className="vam txt ellipsis">会员管理</span>
                	</Link>
                </li>
                <li className="has">
                	<Link to="/prod" activeClassName="active">
                		<b className="caret pull-right"></b>
                		<i className="vam fa fa-star mr-10"></i>
            			<span className="vam txt ellipsis">产品管理</span>
                	</Link>
                </li>
                <li className="has">
                	<Link to="/userManage" activeClassName="active">
                		<b className="caret pull-right"></b>
                		<i className="vam fa fa-bank mr-10"></i>
            			<span className="vam txt ellipsis">店铺管理</span>
                	</Link>
                </li>
                <Hassub title="员工管理" icon="fa-heart">
                    <ul className="sub-menu">
                        <li><Link to="/userManage" activeClassName="active">员工信息</Link></li>
                        <li><Link to="/userManage" activeClassName="active">工资管理</Link></li>
                        <li><Link to="/userManage" activeClassName="active">权限管理</Link></li>
                    </ul>
                </Hassub>
            </ul>
		)
	}
})