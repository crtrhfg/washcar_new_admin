!function (win,doc){
	function zzxl_calendar(option){
		return new zzxl_calendar.prototype.init(option);
	}
	zzxl_calendar.prototype.init=function (option){
		var nowDate=new Date();
		this.option={
			firstLineSort:["日","一","二","三","四","五","六"],
			timeStyle:nowDate.getFullYear().toString()+"/"+(nowDate.getMonth()+1).toString()+"/"+nowDate.getDate().toString()+",/",
			box:"body",//日历组件的容器id
			//"timeStyle":"2016/5/1,/"//默认时间
			disabledColor:"#000",//禁止选择的颜色
			selector:"green",//默认选择的颜色
			defaultSelect:false,//默认选择当前日期
			defaultOneDayClick:true,//默认点击下月天数跳转至小月
			callback:null,//点击每天的回调
			delAll:false,//是否删除之前页面存在的所有日历组件,
			css:null,//重置css函数
			restdate:6,//员工礼拜六休息
			restdisabled:true,//休息日是否禁止
			lessthannowdatedisabled:true,//小于当前日期是否禁止
			prevmonthdisabled:true,//点击上月是否禁止
			nextmonthdisabled:true,//点击下月是否禁止
			lessthannowmonthdisabled:true,//点击小于当前月是否禁止,
			checkholidays:true//检测节假日
		};
		if(option)this.option=this.extends(option,this.option);
		if(this.option.css)this.css=this.option.css;
		try{
			var splitLine=this.option.timeStyle.split(",");
			var timeArray=splitLine[0].split(splitLine[1]);
			var carr=window.calendaridarr||[];
			this.year=parseInt(timeArray[0]);
			this.year.toString().length==2&&(this.year=parseInt(new Date().getFullYear().toString().substr(0,2)+this.year.toString()));
			this.month=parseInt(timeArray[1]);
			this.systemMonth=new Date().getMonth()+1;
			this.systemYear=new Date().getFullYear();
			this.nowDay=new Date().getDate();
			this.day=parseInt(timeArray[2]);
			this.calendarid='zzxl_calendar'+parseInt(Math.random()*10);
			var a=0;
			while(doc.getElementById(this.calendarid)){
				if(a>=100)break;
				a++;
				this.calendarid='zzxl_calendar'+parseInt(Math.random()*10);
			}
			carr.push(this.calendarid);
			window.calendaridarr=carr;
			this.calendarString="<div id='"+this.calendarid+"'><p><em class='jt'><</em>"+this.year+"/"+this.month+"<em class='jt'>></em></p><p>";
			this.prevMonthDays=new Date(this.year,this.month-1,0).getDate();
			this.nowMonthDays=new Date(this.year,this.month,0).getDate();
			this.nextMonthDays=new Date(this.year,this.month+1,0).getDate();
			//上个月应该显示几天
			this.prevMonthDisplayDays=new Date(Date.parse(this.year+"/"+this.month+"/1")).getDay();
			//下个月应该显示几天
			this.nextMonthDisplayDays=6-new Date(Date.parse(this.year+"/"+this.month+"/"+this.nowMonthDays)).getDay();
			//节假日
			this.holidays=[
				{
					"holidaysname":"元旦节",
					"startrest":"2016-1-1",
					"restdays":3
				},
				{
					"holidaysname":"春节",
					"startrest":"2016-2-7",
					"restdays":7
				},
				{
					"holidaysname":"清明节",
					"startrest":"2016-4-2",
					"restdays":3
				},
				{
					"holidaysname":"劳动节",
					"startrest":"2016-4-30",
					"restdays":3
				},
				{
					"holidaysname":"端午节",
					"startrest":"2016-6-9",
					"restdays":3
				},
				{
					"holidaysname":"中秋节",
					"startrest":"2016-9-15",
					"restdays":3
				},
				{
					"holidaysname":"国庆节",
					"startrest":"2016-10-1",
					"restdays":7
				}
			];
		}catch(e){
			throw '格式不正确';
		}
		option&&this.initFunction();
	};
	zzxl_calendar.prototype.initFunction=function (){
		this.layout();
		this.option.onload&&this.option.onload();
		this.css();
		this.event();
		this.destroy();
	};
	zzxl_calendar.prototype.layout=function (){
		var nowBox=doc.getElementById(this.option.box);
		//画出排序
		for(var i=0,len=this.option.firstLineSort.length;i<len;i++){
			this.calendarString+="<span>"+this.option.firstLineSort[i]+"</span>"
		}
		this.calendarString+="</p><ul class='clear'>";
		//画出上个月显示天数
		for(var i=this.prevMonthDays-this.prevMonthDisplayDays+1;i<=this.prevMonthDays;i++){
			if(this.option.prevmonthdisabled || this.checkIsSaturday(this.year+"/"+(this.month-1)+"/"+i)){
				this.calendarString+="<li class='prevNextMonth' date='"+this.year+'-'+(this.month-1)+'-'+i+"'>"+i+"</li>";
			}else{
				this.calendarString+="<li date='"+this.year+'-'+(this.month-1)+'-'+i+"'>"+i+"</li>";
			}
		}
		//画出当月天数
		for(var i=1;i<=this.nowMonthDays;i++){
			if(i==this.day && this.systemMonth==this.month && this.option.defaultSelect){//默认选中当前日期
				if(this.checkIsSaturday(this.year+"/"+this.month+"/"+i)){
					(this.calendarString+="<li class='prevNextMonth'  date='"+this.year+'-'+this.month+'-'+i+"'>"+i+"</li>");
				}else{
					this.calendarString+="<li class='nowDay' date='"+this.year+'-'+this.month+'-'+i+"'>"+i+"</li>";
				}
			}else{
				if(this.checkIsSaturday(this.year+"/"+this.month+"/"+i)){//是否是礼拜六
					(this.calendarString+="<li class='prevNextMonth' date='"+this.year+'-'+this.month+'-'+i+"'>"+i+"</li>");
				}else{
					if(i<this.nowDay && this.month==new Date().getMonth()+1 && this.option.lessthannowdatedisabled){
						(this.calendarString+="<li class='prevNextMonth' date='"+this.year+'-'+this.month+'-'+i+"'>"+i+"</li>")
					}else{
						this.calendarString+="<li date='"+this.year+'-'+this.month+'-'+i+"'>"+i+"</li>";
					}
				}
			}
		}
		//画出下月天数
		for(var i=1;i<=this.nextMonthDisplayDays;i++){
			if(this.option.nextmonthdisabled || this.checkIsSaturday(this.year+"/"+(this.month+1)+"/"+i)){
				this.calendarString+="<li class='prevNextMonth' date='"+this.year+'-'+(this.month+1)+'-'+i+"'>"+i+"</li>";
			}else{
				this.calendarString+="<li date='"+this.year+'-'+(this.month+1)+'-'+i+"'>"+i+"</li>";
			}
		}
		this.calendarString+="</ul></div>";
		nowBox.innerHTML=this.calendarString;
	};
	zzxl_calendar.prototype.destroy=function(){
		var style=doc.getElementsByTagName("style");
		var carr=window.calendaridarr||[];
		for(var i=0,len=style.length;i<len;i++){
			if (style[i] && style[i].getAttribute("pid") && this.inarray(style[i].getAttribute("pid"),carr) && !document.getElementById(style[i].getAttribute("pid"))){
				style[i].parentNode.removeChild(style[i]);
			}
		}
	};
	zzxl_calendar.prototype.delAll=function (){
		try{
			var style=doc.getElementsByTagName("style");
			var obj,pid;
			var carr=window.calendaridarr||[];
			for(var i=0,len=style.length;i<len;i++){
				if(style[i] && style[i].getAttribute("pid") && this.inarray(style[i].getAttribute("pid"),carr)){
					pid=style[i].getAttribute("pid");
					style[i].parentNode.removeChild(style[i]);
					obj=doc.getElementById(pid);
					obj&&obj.parentNode.removeChild(obj);
				}
			}
			window.calendaridarr=[];
		}catch(e){}
	};
	zzxl_calendar.prototype.inarray=function (arg,arr){
		var res=false;
		var len=arr.length;
		for(var i=0,len=arr.length;i<len;i++){
			if(arr[i].indexOf("zzxl_calendar")>-1){
				res=true;
				break;
			}
		}
		return res;
	};
	zzxl_calendar.prototype.css=function (){
		var st=doc.createElement("style");
		st.type="text/css";
		st.setAttribute("pid",this.calendarid);
		var styleContent=".clear:after{content:'';display:block;clear:both;}\
		#"+this.calendarid+"{width:100%;position:relative;font-size:.49rem;}\
		#"+this.calendarid+">p{width:100%;text-align:center;margin:0;background:#f5f5f5;height:1.06rem;line-height:1.06rem;color:#666;}\
		#"+this.calendarid+">p+p{font-size:.375rem;}\
		#"+this.calendarid+">p+p>span{display:inline-block;width:14.28%;background:#e4e4e4;}\
		#"+this.calendarid+">ul{margin:0;padding:0;width:100%;}\
		#"+this.calendarid+">ul>li{-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;font-weight:inherit;list-style:none;float:left;/*width:14.28%;*/width:13.9%;text-align:center;font-size:.46rem;margin-top:1px;box-sizing:border-box;height:1.2rem;line-height:1.2rem;}\
		#"+this.calendarid+">ul>li+li{margin-left:1px;}\
		#"+this.calendarid+" .prevNextMonth{color:#ccc;}\
		#"+this.calendarid+" .nowDay{color:blue;border:1px solid blue;}\
		#"+this.calendarid+" .jt{height:100%;font-style:normal;padding:0 .8rem;display:inline-block;color:#919191;font-family:-webkit-body;font-weight:bold;}";
		if (st.styleSheet) { //IE
		  st.styleSheet.cssText = styleContent;
		} else { //w3c
		  st.innerHTML = styleContent;
		}
		doc.getElementsByTagName("head")[0].appendChild(st);
	};
	zzxl_calendar.prototype.event=function (){
		var oBox=doc.getElementById(this.calendarid);
		if(!oBox)throw "Box Is not defined!";
		var aLi=oBox.getElementsByTagName("li");
		var oEm=oBox.getElementsByTagName("em");
		var _this=this;
		var temp;
		this.bind(aLi,"ontouchend" in doc? "touchend" :"click",function (){
			temp=this.getAttribute("date").split("-");
			var index=_this.checkisholiday(_this.holidays,this.getAttribute("date"));
			if(index!=-1 && _this.option.checkholidays)return alert("当前为"+_this.holidays[index].holidaysname+"，员工休息");
			if(this.className && this.className=="prevNextMonth"){
				if(_this.option.prevmonthdisabled && parseInt(temp[1])<_this.month)return;
				if(_this.option.nextmonthdisabled && parseInt(temp[1])>_this.month)return;
				if(_this.option.lessthannowdatedisabled && parseInt(temp[1])==_this.month)return;
			}
			if(_this.option.restdisabled && _this.checkIsSaturday(_this.year+"/"+_this.month+"/"+this.innerHTML))return;
			if( _this.option.defaultOneDayClick && (temp[1]<_this.month || temp[1]>_this.month)){
				var timeStyle,year,month;
				var nowClickDate=this.getAttribute("date").split("-");
				var nowClickMonth=parseInt(nowClickDate[1]);
				year=_this.year;
				month=nowClickMonth;
				timeStyle=year+"/"+month+"/"+_this.day+",/";
				_this.init(_this.extends({
					"timeStyle":timeStyle
				},_this.option));
			}
			_this.option.callback&&_this.option.callback.call(this);
		});
		//点击上一个月
		this.bind(oEm[0],"ontouchend" in doc?"touchend":"click",function (){//prev
			if(parseInt(_this.month)-1<_this.systemMonth && _this.systemYear==_this.year && _this.option.lessthannowmonthdisabled)return alert('不能再往前咯!');
			var timeStyle,year,month;
			if(_this.month-1<1){
				year=_this.year-1;
				month=12;
			}else{
				year=_this.year;
				month=_this.month-1;
			}
			timeStyle=year+"/"+month+"/"+_this.day+",/";
			_this.init(_this.extends({
				"timeStyle":timeStyle
			},_this.option));
		});
		//点击下一个月
		this.bind(oEm[1],"ontouchend" in doc?"touchend":"click",function (){//next
			var timeStyle,year,month;
			if(_this.month+1>12){
				year=_this.year+(_this.month+1)%12;
				month=_this.month+1-12;
			}else{
				year=_this.year;
				month=_this.month+1;
			}
			timeStyle=year+"/"+month+"/"+_this.day+",/";
			_this.init(_this.extends({
				"timeStyle":timeStyle
			},_this.option));
		});
	};
	zzxl_calendar.prototype.extends=function (obj1,obj2){
		for(var attr in obj1)obj2[attr]=obj1[attr];
		return obj2;
	};
	zzxl_calendar.prototype.checkisholiday=function (arr,val){
		var startDate,endDate,res=-1;
		for(var i=0,len=arr.length;i<len;i++){
			startDate=arr[i].startrest;
			endDate=this.dateendadd(arr[i].startrest,arr[i].restdays);
			if(this.returnTimeStamp(val)>=this.returnTimeStamp(startDate) && this.returnTimeStamp(val)<=this.returnTimeStamp(endDate)){
				res=i;
				break;
			}
		}
		return res;
	};
	zzxl_calendar.prototype.returnTimeStamp=function (date){
		return new Date(date).getTime();
	};
	zzxl_calendar.prototype.dateendadd=function (date,num){
		var date=date.split("-");
		var year=date[0];
		var month=parseInt(date[1]);
		var day=parseInt(date[2]);
		var days=new Date(year,month,0).getDate();
		if(day+num-1>days){
			month+=1;
			day=day+num-1-days;
		}else{
			day=day+num-1;
		}
		return year+"-"+month+"-"+day;
	};
	zzxl_calendar.prototype.bind=function (obj,ev,fn){
		if(win.addEventListener){//标准
			if(!obj.length){
				obj.addEventListener(ev,fn,false);
			}else{
				for(var i=0,len=obj.length;i<len;i++){
					obj[i].addEventListener(ev,fn,false);
				}
			}
		}else{
			if(win.attachEvent){//非标准
				if(!obj.length){
					obj.attachEvent("on"+ev,fn);
				}else{
					for(var i=0,len=obj.length;i<len;i++){
						obj[i].attachEvent("on"+ev,fn);
					}
				}
			}else{
				if(!obj.length){
					obj.ev=fn;
				}else{
					for(var i=0,len=obj.length;i<len;i++){
						obj[i].ev=fn;
					}
				}
			}
		}
	};
	zzxl_calendar.prototype.checkIsSaturday=function (str){
		return new Date(Date.parse(str)).getDay()==this.option.restdate && this.option.restdisabled;
	}; 
	zzxl_calendar.prototype.init.prototype=zzxl_calendar.prototype;
	win.zzxl_calendar=zzxl_calendar;
}(window,document);