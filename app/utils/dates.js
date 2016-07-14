/**
 * 时间操作工具集
 * @type {Object}
 */
module.exports = {
	/**
	 * 获取当前月最后日期
	 * @param  {[type]} data Date对象
	 * @return {[type]}      [description]
	 */
	getMaxDay:function(data){
		return 32-new Date(new Date(data).setDate(32)).getDate();
	},
	/**
	 * 跳转到上月
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	prevMonth:function(data){
		var data=new Date(data),
		year=data.getFullYear(),
		month=data.getMonth()-1,
		day=data.getDate();
		if(month<0){
			year--;
			month=11;
		}
		return new Date(year,month,day)
	},
	/**
	 * 跳转到下月
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	nextMonth:function(data){
		var data=new Date(data),
		year=data.getFullYear(),
		month=data.getMonth()+1,
		day=data.getDate();
		if(month>11){
			year++;
			month=0;
		}
		return new Date(year,month,day)
	},
	/**
	 * 获取上月最后一天
	 * @param  {[type]} date Date对象
	 * @return {[type]}      [description]
	 */
	getPreLastDay:function(data){
		/*
		var data=new Date(data),
		year=data.getFullYear(),
		month=data.getMonth()-1;
		if(month<0){
			year--;
			month=11;
		}
		*/

		return this.getMaxDay(this.prevMonth(data));
	},
	/**
	 * 获取本月最后一天是星期几
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	getLastDay:function(data){
		return new Date(new Date(data).setDate(this.getMaxDay(data))).getDay();
	},
	/**
	 * 获取当前月第一天是星期几
	 * @param  {[type]} data Date对象
	 * @return {[type]}      [description]
	 */
	getOneDay:function(data){
		return new Date(new Date(data).setDate(1)).getDay()
	},
	/**
	 * 获取当月的日期数据
	 * @param  {[type]} data Date对象
	 * @return {[type]} [description]
	 */
	getMonthDay:function(data,index){
		index=parseInt(index)>6?0:index || 0;
		var data=new Date(data);
		var year=data.getFullYear();
		var month=data.getMonth();
		var day=data.getDate();
		var preLastDay=this.getPreLastDay(data);	//上月最后一天
		var one=this.getOneDay(data);				//第一天是星期几
		var max=this.getMaxDay(data);				//当前月最后一天
		var maxDay=this.getLastDay(data);			//当前月最后一天是星期几
		var l=one+max+(6-maxDay);					//当前月视图总共展示日期长度
		var i=1;									//日期计数器
		var dayL=Math.ceil(l/7);					//星期长度
		var dayArr=[];								//日期数组
		for(var n=0;n<dayL;n++){
			var arr=[];
			for(var k=0;k<7;k++){
				var obj={};
				if(i<=one){
					obj.day=(preLastDay-one+i);		//日
					obj.month=month-1<0?12:month;	//月
					obj.year=month-1<0?year-1:year;	//年
					obj.mcur=0;						//是否是当前月
				}else if(i<=one+max){
					obj.day=(i-one);	//日
					obj.month=month+1;	//月
					obj.year=year;		//年
					obj.mcur=1;			//是否是当前月
				}else{
					obj.day=(i-one-max);				//日
					obj.month=month+2>11?1:month+2;		//月
					obj.year=month+2>11?year+1:year;	//年
					obj.mcur=0;							//是否是当前月
				}
				arr.push(obj);
				i++;
			}
			dayArr.push(arr);
		}
		return dayArr;
	}
}