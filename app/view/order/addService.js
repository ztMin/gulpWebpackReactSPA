import React from 'react';
import ReactDOM from 'react-dom';
// import Selects from '../../comp/selects';
import {DropdownButton,MenuItem} from 'react-bootstrap/lib/index';
require('../../css/order/addService.css');

var OverlayTrigger=React.createClass({

});
var Toopic=React.createClass({
	render:function(){
		return (
			<div className="aa">123456</div>
		)
	}
})
module.exports =React.createClass({
	mouseOver:function(){
		console.log('mouseOver');
		ReactDOM.unstable_renderSubtreeIntoContainer(toopic);
	},
	render:function(){
		var i=0;
		return(
			<div className={this.props.isAddService?"addService modal block":"addService modal"}>
				<div className="modal-dialog animated bounceInDown">
					<div className="modal-content">
						<div className="modal-header">
							<button className="close" type="button" onClick={this.props.toggleAddServices}>&times;</button>
							<OverlayTrigger overlay={Toopic}>
							<h4 className="modal-title">服务项目</h4>
							</OverlayTrigger>
						</div>
						<div className="modal-body">
							<div className="form-group clearfix">
								<label htmlFor="prodId" className="left">服务项目</label>
								<div className="left" onMouseOver={this.mouseOver}>
									<DropdownButton bsStyle="default" title="Default" id={`dropdown-basic-${i}`}>
								      <MenuItem eventKey="1">Action</MenuItem>
								      <MenuItem eventKey="2">Another action</MenuItem>
								      <MenuItem eventKey="3" active>Active Item</MenuItem>
								      <MenuItem divider />
								      <MenuItem eventKey="4">Separated link</MenuItem>
								    </DropdownButton>
								</div>
							</div>
							<div className="form-group clearfix">
								<label htmlFor="prodId" className="left">服务人员</label>
								<div className="left">
								</div>
							</div>
						</div>
						<div className="modal-footer">
					        <button type="button" className="btn btn-default" onClick={this.props.toggleAddServices}>Close</button>
					        <button type="button" className="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
})