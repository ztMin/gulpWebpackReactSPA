import React from 'react';
// import elementType from 'react-prop-types/lib/elementType';
// import classNames from 'classnames';
// const propTypes = {
//     componentClass: elementType,
//     type: React.PropTypes.string,
//     id: React.PropTypes.string,
// };
require('../css/waveInput.css');
var WaveInput=React.createClass({
    propTypes:{
        // componentClass: elementType,
        /**
        * Only relevant if `componentClass` is `'input'`.
        */
        type: React.PropTypes.string,
        /**
        * Uses `controlId` from `<FormGroup>` if not explicitly specified.
        */
        id: React.PropTypes.string,
    },
    getDefaultProps:function(){
        return {
            componentClass: 'input'
        }
    },
    childContextTypes:{
        $bs_formGroup: React.PropTypes.object
    },
  	render: function () {
        var formGroup = this.context.$bs_formGroup;
        var controlId = formGroup && formGroup.controlId;
        var props=this.props;
        var className = props.className;
        var _props$id = props.id;
        var id = _props$id === undefined ? controlId : _props$id;
        var type = props.type;
        var Component = props.componentClass;
	    return (
	    	<div className="waveInput">
	    		<Component 
                    {...props}
                    type={type}
                    id={id}
	    			className={className + ' inputTxt'}
	    		/>
                <svg className="waveSvg" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                    <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                </svg>
	    	</div>
	    );
  	}
});
// WaveInput.propTypes = propTypes;
// WaveInput.defaultProps = {
//   componentClass: 'input'
// };
// WaveInput.contextTypes = {
//   $bs_formGroup: React.PropTypes.object
// };
module.exports =WaveInput;