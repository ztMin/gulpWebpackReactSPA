import React from 'react';
import { withRouter,History } from 'react-router';
import WaveInput from '../comp/waveInput.js';
import auth from '../utils/auth.js';
// import LinkedStateMixin from 'react-addons-linked-state-mixin';
// import { Button,FormControl } from 'react-bootstrap';

require('../css/login.css');
module.exports =React.createClass({
	mixins: [ History ],
  	getInitialState: function() {
    	return {
    		userName:'',
    		pass:''
    	};
  	},
  	fnLogin:function(e){
  		e.preventDefault();
      var obj=this.state;
      //判断是否输入用户名和密码
      if(obj.userName && obj.pass){
        obj.userId='userId';
        obj.toKen='toKen';
        obj.userPic='userPic';
        obj.openId='openId';
        obj.phone='phone';
        obj.emaill='emaill';
        obj.qq='qq';
        auth.setUsreInfo(obj);  //设置用户信息
        //登录成功跳转页面
        var location=this.props.location;
        if (location.state && location.state.nextPathname) {
          this.history.replaceState(null, location.state.nextPathname)
        } else {
          this.history.replaceState(null, '/')
        }
      }
  		return false;
  	},
  	handle:function(e){
  		var obj={};
  		obj[e.target.name]=e.target.value;
  		this.setState(obj);
  	},
  	render: function () {
	    return (
	    	<div className="login ofh wh100 bg-96e0e9">
	    		<form className="loginBox" onSubmit={this.fnLogin}>
	    			<div className="form-group">
	    				<WaveInput type="text" ref="userName" name="userName" placeholder="请出入用户名" value={this.state.userName} onChange={this.handle}></WaveInput>
	    			</div>
	    			<div className="form-group mb-30">
	    				<WaveInput type="password" ref="pass" name="pass" placeholder="请出入密码" value={this.state.pass} onChange={this.handle}></WaveInput>
	    			</div>
	    			<button type="submit" className="btn btn-default w100" >Go</button>
	    		</form>
	    	</div>
	    );
  	}
});