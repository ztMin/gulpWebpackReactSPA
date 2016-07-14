/**
 * title：选择时间
 * date：2016-06-09
 * author：ztMin
 */
import React from 'react';
import Dates from '../utils/dates';
var EventEmitter = require('events').EventEmitter;
require('../css/datetimepicker.css');

//年
var Year=React.createClass({
	getDefaultProps:function(){
		initialDate:new Date()
	},
	render:function(){
		return(
			<table className="table-condensed w100">
				<thead>
					<tr>
						<th className="prev">
							<span className="glyphicon glyphicon-arrow-left"></span>
						</th>
						<th className="switch" colSpan="2">2010-2019</th>
						<th className="next">
							<span className="glyphicon glyphicon-arrow-right"></span>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2010</td>
						<td>2011</td>
						<td>2012</td>
						<td>2013</td>
					</tr>
				</tbody>
			</table>
		)
	}
})

module.exports = React.createClass({
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
    childContextTypes:{
        $bs_formGroup: React.PropTypes.object
    },
	getDefaultProps:function(){
		return {
			initialDate:new Date(),	//初始时间
			format:'mm/dd/yyyy',	//日期格式
			week:['日','一','二','三','四','五','六'],	//星期
			weekStart:0,			//一周从哪一天开始。0（星期日）到6（星期六）
			startDate:null,			//起始时间-更早的日期将被禁用。
			endDate:null,			//结束时间
			daysOfWeekDisabled:[],
			autoclose:false,		//当选择一个日期之后是否立即关闭此日期时间选择器。
			startView:2,			//日期时间选择器打开之后首先显示的视图。 可接受的值：0/1/2/3/4
			minView:0,				//日期时间选择器所能够提供的最精确的时间选择视图。
			maxView:4,				//日期时间选择器最高能展示的选择范围视图。
			todayHighlight:true,	//如果为true, 高亮当前日期。
			//输入框属性
			input:{
				type:'text',		//输入框type
				className:"form-control cur-p",
				readOnly:true,		//是否只读
				placeholder:"请选择时间",		//提示
			},
			th:false,				//是否显示日期按钮
		}
	},
    getInitialState: function() {
    	var data=this.props.initialDate?new Date(this.props.initialDate):new Date();
        return {
        	value:"",	//选中日期
        	open:0,	//选择日期开关
        	view:["Hour","Day","Month","Year","Decade"],	//视图
        	viewDate:data,									//视图时间
        	initialDate:data,								//初始时间
        	startView:this.props.startView					//日期时间选择器打开之后首先显示的视图。 可接受的值：0/1/2/3/4
        };
    },
    //开关
	toggle:function(v){
		this.setState({
			open: !this.state.open
		});
	},
	//获取值
	val:function(){
		return this.state.value;
	},
	setVal:function(val){
		this.setState({
			value:val
		});
		this.toggle(0);
		if(typeof this.props.onChange=='function'){
			this.props.onChange(val);
		}
		if(typeof this.props.input.onChange=="function"){
			this.props.input.onChange(val);
		}
	},
	onClick:function(e){
		this.toggle();
		if(typeof this.props.onClick=="function"){
			this.props.onClick(e)
		}
	},
	render:function(){
		var formGroup=this.context.$bs_formGroup;
		var props=this.props;
		var id=props.id || (formGroup?formGroup.controlId:undefined);
		var viewName=this.state.view[this.state.startView];
		var view=this['get'+viewName]();
		return(
			<div className="datetimepickerBox">
				<div className="date input-group" onClick={this.onClick}>
					<input 
						{...props.input}
						onChange={this.props.onChange || this.props.input.onChange}
						id={id}
						ref={"time"}
						name={this.props.name || this.props.input.name}
						value={this.state.value} 
					/>
					<span className={"input-group-addon "+(props.th?"":"hide")}>
						<span className="glyphicon glyphicon-th"></span>
					</span>
				</div>
				<div className={"datetimepicker animated bounceInDown datetimepicker-"+viewName+" "+(this.state.open?"block":"none")}>
					{view}
				</div>
			</div>
		)
	},
	//设置日期
	selectDay:function(obj){
		this.setVal(obj.year+"-"+(obj.month<10?"0"+obj.month:obj.month)+"-"+(obj.day<10?"0"+obj.day:obj.day))
	},
	prevMonth:function(){
		this.setState({
			viewDate:Dates.prevMonth(this.state.viewDate)
		});
	},
	nextMonth:function(){
		this.setState({
			viewDate:Dates.nextMonth(this.state.viewDate)
		});
	},
	//小时
	getHour:function(){},
	//日
	getDay:function(){},
	//月
	getMonth:function(){
		var data=new Date(this.state.viewDate);
		var date=new Date(this.state.value || this.state.initialDate);
		var year=date.getFullYear();
		var month=date.getMonth();
		var day=date.getDate();
		var dayArr=Dates.getMonthDay(data);
		//星期
		var week=this.props.week.map(function(o,i){
			return(<th className="dow" key={i}>{o}</th>)
		})
		//月数据
		var monthDay=dayArr.map(function(o,i){
			var dayTd=o.map(function(obj,index){
				return(
					<td 
						className={"day"+(!obj.mcur?" old":"")+(obj.year==year&&obj.month==month+1&&obj.day==day?" active":"")}
						key={index} onClick={this.selectDay.bind(this,obj)}
					>
						{obj.day}
					</td>
				)
			},this);
			return(
				<tr key={i}>{dayTd}</tr>
			)
		},this)
		return(
			<table className="table-condensed w100">
				<thead>
					<tr>
						<th className="prev" onClick={this.prevMonth}>
							<span className="glyphicon glyphicon-arrow-left"></span>
						</th>
						<th className="switch" colSpan="5">{data.getFullYear()+"年"+(data.getMonth()+1)+"月"}</th>
						<th className="next" onClick={this.nextMonth}>
							<span className="glyphicon glyphicon-arrow-right"></span>
						</th>
					</tr>
					<tr>{week}</tr>
				</thead>
				<tbody>
					{monthDay}
				</tbody>
			</table>
		)
	},
	//年
	getYear:function(){},
	//十年
	getDecade:function(){},
})