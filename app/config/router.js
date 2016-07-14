import auth from '../utils/auth.js';
import AppFrame from '../appFrame.js';
//未登录则跳转到登录
function redirectToLogin(nextState, replace) {
  	if (!auth.isLogin()) {
	    replace({
	      	nextPathname: nextState.location.pathname
	    },'/login')
  	}
  	return true;
}
module.exports={
	component: AppFrame,
	childRoutes: [
		{
			path: '/',
			onEnter:redirectToLogin,
		  	getComponent: function(nextState, cb) {
			    require.ensure([], function(require){
			      	cb(null, require('../view/index'))
			    })
		  	}
		},
		{
			path: '/login',
		  	getComponent: function(nextState, cb) {
		    	require.ensure([], function(require){
		      		cb(null, require('../view/login'))
		    	})
		  	}
		},
		{ 
			path: '/order',
			onEnter:redirectToLogin,
		  	getComponent: function(nextState, cb) {
		    	require.ensure([], function(require){
		      		cb(null, require('../view/order'))
		    	})
		  	}
		}
	]
};