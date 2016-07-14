import React from 'react';
import uncontrollable from 'uncontrollable';

var Selects = React.createClass ({
	getDefaultProps:function(){
		return {
			keys:"key",
			vals:"val",
			open:false,
			data:[{key:0,val:"请选择"}]
		}
	},
	getInitialState:function(){
		return {
			val:0,
			valTxt:"请选择",
			isOpen:false,
		}
	},
	toggle:function(){
		var open = !this.props.open;
		console.log(this.props);
		if (this.props.onToggle) {
	      	this.props.onToggle(open);
	    }
	},
	render(){
		return(
			<div className={this.props.open?"dropdown open":"dropdown"}>
			  	<button className="btn btn-default dropdown-toggle" type="button">
			    	{this.state.valTxt}
			    	<span className="caret"></span>
			  	</button>
			  	<ul className="dropdown-menu" aria-labelledby="dLabel">
					<li><a href="#">Another action</a></li>
			  	</ul>
			</div>
		);
	}
})
Selects.propTypes={
	bsClass: React.PropTypes.string,
	dropup: React.PropTypes.bool,
	open: React.PropTypes.bool,
	onToggle: React.PropTypes.func,
}
Selects = uncontrollable(Selects, { open: 'onToggle' });
module.exports = Selects;