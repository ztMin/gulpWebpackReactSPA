/**
--	登录、认证
*/


module.exports = {
	isLogin:function(){
		return (!!localStorage['userId'] && !!localStorage['userName'] && !!localStorage['toKen'])
	},
	setUsreInfo:function(obj){
		localStorage['userId']=obj.userId;		//用户ID
		localStorage['userName']=obj.userName;	//用户名称
		localStorage['toKen']=obj.toKen;		//token登录凭证
		localStorage['userPic']=obj.userPic;	//用户头像
		localStorage['openId']=obj.openId;		//微信openId
		localStorage['phone']=obj.phone;		//用户手机号
		localStorage['emaill']=obj.emaill;		//用户邮箱
		localStorage['qq']=obj.qq;				//用户QQ号
	},
	getUsertInfo:function(){
		return({
			id:localStorage['userId']  || '',		//用户ID
			name:localStorage['userName'] || '',	//用户名称
			toKen:localStorage['toKen'] || '',		//token登录凭证
			pic:localStorage['userPic'] || '',		//用户头像
			openId:localStorage['openId'] || '',	//微信openId
			phone:localStorage['phone'] || '',		//用户手机号
			emaill:localStorage['emaill'] || '',	//用户邮箱
			qq:localStorage['qq'] || ''				//用户QQ号
		})
	}
}