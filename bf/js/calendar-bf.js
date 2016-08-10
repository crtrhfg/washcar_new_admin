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
			defaultSelect:false,//默认选择
			defaultOneDayClick:true,//默认点击下月天数跳转至小月
			callback:null,//点击每天的回调
			css:null,
			first:true,
			delAll:false
		};
		if(option)this.option=this.extend(option,this.option);
		if(this.option.css)this.css=this.option.css;
		try{
			var splitLine=this.option.timeStyle.split(",");
			var timeArray=splitLine[0].split(splitLine[1]);
			this.year=parseInt(timeArray[0]);
			this.year.toString().length==2&&(this.year=parseInt(new Date().getFullYear().toString().substr(0,2)+this.year.toString()));
			this.month=parseInt(timeArray[1]);
			this.systemMonth=new Date().getMonth()+1;
			this.systemYear=new Date().getFullYear();
			this.nowDay=new Date().getDate();
			this.day=parseInt(timeArray[2]);
			if(this.option.first){
				var carr=window.calendarid||[];
				var sarr=window.calendarstyleid||[];
				this.calendarid='zzxl_calendar'+parseInt(Math.random()*10);
				this.calendarstyleid='zzxl_calendar_style'+parseInt(Math.random()*10);
				while(doc.getElementById(this.calendarid)){
					this.calendarid='zzxl_calendar'+parseInt(Math.random()*10);
				}
				while(doc.getElementById(this.calendarstyleid)){
					this.calendarstyleid='zzxl_calendar_style'+parseInt(Math.random()*10);
				}
				carr.push(this.calendarid);
				sarr.push(this.calendarstyleid);
				window.calendarid=carr;
				window.calendarstyleid=sarr;
			}
			this.calendarString="<div id='"+this.calendarid+"'><p><em class='jt'><</em>"+this.year+"/"+this.month+"<em class='jt'>></em></p><p>";
			this.prevMonthDays=new Date(this.year,this.month-1,0).getDate();
			this.nowMonthDays=new Date(this.year,this.month,0).getDate();
			this.nextMonthDays=new Date(this.year,this.month+1,0).getDate();
			//上个月应该显示几天
			this.prevMonthDisplayDays=new Date(Date.parse(this.year+"/"+this.month+"/1")).getDay();
			//下个月应该显示几天
			this.nextMonthDisplayDays=6-new Date(Date.parse(this.year+"/"+this.month+"/"+this.nowMonthDays)).getDay();
		}catch(e){
			throw 'Format Wrong!';
		}
		this.option.delAll&&this.option.first&&this.removeAfter();
		this.layout();
		this.option.first&&this.css();
		this.option.onload&&this.option.onload();
		this.event();
	};
	zzxl_calendar.prototype.removeAfter=function (){
		var carr=window.calendarid||[];
		var sarr=window.calendarstyleid||[];
		var obj;
		for(var i=0;i<carr.length;i++){
			obj=document.getElementById(carr[i]);
			obj&&obj.parentNode.removeChild(obj);
			obj=document.getElementById(sarr[i]);
			obj&&obj.parentNode.removeChild(obj);
		}
	};
	zzxl_calendar.prototype.layout=function (){
		var nowBox=doc.getElementById(this.option.box);
		if(!nowBox)throw "父级不存在";
		//画出排序
		for(var i=0,len=this.option.firstLineSort.length;i<len;i++){
			this.calendarString+="<span>"+this.option.firstLineSort[i]+"</span>"
		}
		this.calendarString+="</p><ul class='clear'>";
		//画出上个月显示天数
		for(var i=this.prevMonthDays-this.prevMonthDisplayDays+1;i<=this.prevMonthDays;i++){
			//this.calendarString+="<li class='prevNextMonth'>"+i+"</li>";
			this.calendarString+="<li>"+i+"</li>";
		}
		//画出当月天数
		for(var i=1;i<=this.nowMonthDays;i++){
			// i==this.day && this.systemMonth==this.month && this.option.defaultSelect?
			// this.checkIsSaturday(this.year+"/"+this.month+"/"+i)
			// ?(this.calendarString+="<li class='prevNextMonth'>"+i+"</li>"):
			// this.calendarString+="<li class='nowDay'>"+i+"</li>"
			// :
			// this.checkIsSaturday(this.year+"/"+this.month+"/"+i)
			// ?(this.calendarString+="<li class='prevNextMonth'>"+i+"</li>"):
			// 	i<this.nowDay && this.month==new Date().getMonth()+1?(this.calendarString+="<li class='prevNextMonth'>"+i+"</li>"):
			// this.calendarString+="<li>"+i+"</li>";

			i==this.day && this.systemMonth==this.month && this.option.defaultSelect?
			this.checkIsSaturday(this.year+"/"+this.month+"/"+i)
			?(this.calendarString+="<li>"+i+"</li>"):
			this.calendarString+="<li class='nowDay'>"+i+"</li>"
			:
			this.checkIsSaturday(this.year+"/"+this.month+"/"+i)
			?(this.calendarString+="<li>"+i+"</li>"):
				i<this.nowDay && this.month==new Date().getMonth()+1?(this.calendarString+="<li>"+i+"</li>"):
			this.calendarString+="<li>"+i+"</li>";
		}
		//画出下月天数
		for(var i=1;i<=this.nextMonthDisplayDays;i++){
			// this.calendarString+="<li class='prevNextMonth'>"+i+"</li>";
			this.calendarString+="<li>"+i+"</li>";
		}
		this.calendarString+="</ul></div>";
		nowBox.innerHTML=this.calendarString;
	};
	zzxl_calendar.prototype.inarray=function (arg,arr){
		var res=false;
		for(var i=0,len=arr.length;i<len;i++){
			if(arr[i].indexOf(arg)>-1){
				res=true;
				break;
			}
		}
		return res;
	};
	zzxl_calendar.prototype.css=function (){
		var st=doc.createElement("style");
		st.type="text/css";
		st.id=this.calendarstyleid;
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
		if(!oBox)throw "Container Is not Defined!";
		var aLi=oBox.getElementsByTagName("li");
		var oEm=oBox.getElementsByTagName("em");
		var _this=this;
		this.bind(aLi,"ontouchend" in doc? "touchend" :"click",function (){
			if(this.className && this.className=="prevNextMonth" && parseInt(this.innerHTML)<8 && _this.option.defaultOneDayClick){
				var timeStyle,year,month;
				if(_this.month+1>12){
					year=_this.year+(_this.month+1)%12;
					month=_this.month+1-12;
				}else{
					year=_this.year;
					month=_this.month+1;
				}
				timeStyle=year+"/"+month+"/"+_this.day+",/";
				_this.init(_this.extend({
					"timeStyle":timeStyle,
					"first":false
				},_this.option));
			}
			_this.option.callback&&_this.option.callback.call(this);
		});
		//点击上一个月
		this.bind(oEm[0],"ontouchend" in doc?"touchend":"click",function (){//prev
			// if(parseInt(_this.month)-1<_this.systemMonth && _this.systemYear==_this.year)return alert('不能再往前咯!');
			var timeStyle,year,month;
			if(_this.month-1<1){
				year=_this.year-1;
				month=12;
			}else{
				year=_this.year;
				month=_this.month-1;
			}
			timeStyle=year+"/"+month+"/"+_this.day+",/";
			_this.init(_this.extend({
				"timeStyle":timeStyle,
				"first":false
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
			_this.init(_this.extend({
				"timeStyle":timeStyle,
				"first":false
			},_this.option));
		});
	};
	zzxl_calendar.prototype.extend=function (obj1,obj2){
		for(var attr in obj1)obj2[attr]=obj1[attr];
		return obj2;
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
		return new Date(Date.parse(str)).getDay()==6;
	}; 
	zzxl_calendar.prototype.init.prototype=zzxl_calendar.prototype;
	win.zzxl_calendar=zzxl_calendar;
}(window,document);



