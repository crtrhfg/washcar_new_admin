﻿!function(a,b){function c(a){return new c.prototype.init(a)}c.prototype.init=function(a){var d,e,f,g,c=new Date;this.option={firstLineSort:["日","一","二","三","四","五","六"],timeStyle:c.getFullYear().toString()+"/"+(c.getMonth()+1).toString()+"/"+c.getDate().toString()+",/",box:"body",disabledColor:"#000",selector:"green",defaultSelect:!1,defaultOneDayClick:!0,callback:null,delAll:!1,css:null,restdate:6,restdisabled:!0,lessthannowdatedisabled:!0,prevmonthdisabled:!0,nextmonthdisabled:!0,lessthannowmonthdisabled:!0,checkholidays:!0},a&&(this.option=this.extends(a,this.option)),this.option.css&&(this.css=this.option.css);try{for(d=this.option.timeStyle.split(","),e=d[0].split(d[1]),f=window.calendaridarr||[],this.year=parseInt(e[0]),2==this.year.toString().length&&(this.year=parseInt((new Date).getFullYear().toString().substr(0,2)+this.year.toString())),this.month=parseInt(e[1]),this.systemMonth=(new Date).getMonth()+1,this.systemYear=(new Date).getFullYear(),this.nowDay=(new Date).getDate(),this.day=parseInt(e[2]),this.calendarid="zzxl_calendar"+parseInt(10*Math.random()),g=0;b.getElementById(this.calendarid)&&!(g>=100);)g++,this.calendarid="zzxl_calendar"+parseInt(10*Math.random());f.push(this.calendarid),window.calendaridarr=f,this.calendarString="<div id='"+this.calendarid+"'><p><em class='jt'><</em>"+this.year+"/"+this.month+"<em class='jt'>></em></p><p>",this.prevMonthDays=new Date(this.year,this.month-1,0).getDate(),this.nowMonthDays=new Date(this.year,this.month,0).getDate(),this.nextMonthDays=new Date(this.year,this.month+1,0).getDate(),this.prevMonthDisplayDays=new Date(Date.parse(this.year+"/"+this.month+"/1")).getDay(),this.nextMonthDisplayDays=6-new Date(Date.parse(this.year+"/"+this.month+"/"+this.nowMonthDays)).getDay(),this.holidays=[{holidaysname:"元旦节",startrest:"2016-1-1",restdays:3},{holidaysname:"春节",startrest:"2016-2-7",restdays:7},{holidaysname:"清明节",startrest:"2016-4-2",restdays:3},{holidaysname:"劳动节",startrest:"2016-4-30",restdays:3},{holidaysname:"端午节",startrest:"2016-6-9",restdays:3},{holidaysname:"中秋节",startrest:"2016-9-15",restdays:3},{holidaysname:"国庆节",startrest:"2016-10-1",restdays:7}]}catch(h){throw"格式不正确"}a&&this.initFunction()},c.prototype.initFunction=function(){this.layout(),this.option.onload&&this.option.onload(),this.css(),this.event(),this.destroy()},c.prototype.layout=function(){var c,d,a=b.getElementById(this.option.box);for(c=0,d=this.option.firstLineSort.length;d>c;c++)this.calendarString+="<span>"+this.option.firstLineSort[c]+"</span>";for(this.calendarString+="</p><ul class='clear'>",c=this.prevMonthDays-this.prevMonthDisplayDays+1;c<=this.prevMonthDays;c++)this.calendarString+=this.option.prevmonthdisabled||this.checkIsSaturday(this.year+"/"+(this.month-1)+"/"+c)?"<li class='prevNextMonth' date='"+this.year+"-"+(this.month-1)+"-"+c+"'>"+c+"</li>":"<li date='"+this.year+"-"+(this.month-1)+"-"+c+"'>"+c+"</li>";for(c=1;c<=this.nowMonthDays;c++)this.calendarString+=c==this.day&&this.systemMonth==this.month&&this.option.defaultSelect?this.checkIsSaturday(this.year+"/"+this.month+"/"+c)?"<li class='prevNextMonth'  date='"+this.year+"-"+this.month+"-"+c+"'>"+c+"</li>":"<li class='nowDay' date='"+this.year+"-"+this.month+"-"+c+"'>"+c+"</li>":this.checkIsSaturday(this.year+"/"+this.month+"/"+c)?"<li class='prevNextMonth' date='"+this.year+"-"+this.month+"-"+c+"'>"+c+"</li>":c<this.nowDay&&this.month==(new Date).getMonth()+1&&this.option.lessthannowdatedisabled?"<li class='prevNextMonth' date='"+this.year+"-"+this.month+"-"+c+"'>"+c+"</li>":"<li date='"+this.year+"-"+this.month+"-"+c+"'>"+c+"</li>";for(c=1;c<=this.nextMonthDisplayDays;c++)this.calendarString+=this.option.nextmonthdisabled||this.checkIsSaturday(this.year+"/"+(this.month+1)+"/"+c)?"<li class='prevNextMonth' date='"+this.year+"-"+(this.month+1)+"-"+c+"'>"+c+"</li>":"<li date='"+this.year+"-"+(this.month+1)+"-"+c+"'>"+c+"</li>";this.calendarString+="</ul></div>",a.innerHTML=this.calendarString},c.prototype.destroy=function(){var d,e,a=b.getElementsByTagName("style"),c=window.calendaridarr||[];for(d=0,e=a.length;e>d;d++)a[d]&&a[d].getAttribute("pid")&&this.inarray(a[d].getAttribute("pid"),c)&&!document.getElementById(a[d].getAttribute("pid"))&&a[d].parentNode.removeChild(a[d])},c.prototype.delAll=function(){var a,c,d,e,f,g;try{for(a=b.getElementsByTagName("style"),e=window.calendaridarr||[],f=0,g=a.length;g>f;f++)a[f]&&a[f].getAttribute("pid")&&this.inarray(a[f].getAttribute("pid"),e)&&(d=a[f].getAttribute("pid"),a[f].parentNode.removeChild(a[f]),c=b.getElementById(d),c&&c.parentNode.removeChild(c));window.calendaridarr=[]}catch(h){}},c.prototype.inarray=function(a,b){var e,c=!1,d=b.length;for(e=0,d=b.length;d>e;e++)if(b[e].indexOf("zzxl_calendar")>-1){c=!0;break}return c},c.prototype.css=function(){var c,a=b.createElement("style");a.type="text/css",a.setAttribute("pid",this.calendarid),c=".clear:after{content:'';display:block;clear:both;}		#"+this.calendarid+"{width:100%;position:relative;font-size:.49rem;}		#"+this.calendarid+">p{width:100%;text-align:center;margin:0;background:#f5f5f5;height:1.06rem;line-height:1.06rem;color:#666;}		#"+this.calendarid+">p+p{font-size:.375rem;}		#"+this.calendarid+">p+p>span{display:inline-block;width:14.28%;background:#e4e4e4;}		#"+this.calendarid+">ul{margin:0;padding:0;width:100%;}		#"+this.calendarid+">ul>li{-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;font-weight:inherit;list-style:none;float:left;/*width:14.28%;*/width:13.9%;text-align:center;font-size:.46rem;margin-top:1px;box-sizing:border-box;height:1.2rem;line-height:1.2rem;}		#"+this.calendarid+">ul>li+li{margin-left:1px;}		#"+this.calendarid+" .prevNextMonth{color:#ccc;}		#"+this.calendarid+" .nowDay{color:blue;border:1px solid blue;}		#"+this.calendarid+" .jt{height:100%;font-style:normal;padding:0 .8rem;display:inline-block;color:#919191;font-family:-webkit-body;font-weight:bold;}",a.styleSheet?a.styleSheet.cssText=c:a.innerHTML=c,b.getElementsByTagName("head")[0].appendChild(a)},c.prototype.event=function(){var c,d,e,f,a=b.getElementById(this.calendarid);if(!a)throw"Box Is not defined!";c=a.getElementsByTagName("li"),d=a.getElementsByTagName("em"),e=this,this.bind(c,"ontouchend"in b?"touchend":"click",function(){var a,b,c,d,g,h;if(f=this.getAttribute("date").split("-"),a=e.checkisholiday(e.holidays,this.getAttribute("date")),-1!=a&&e.option.checkholidays)return alert("当前为"+e.holidays[a].holidaysname+"，员工休息");if(this.className&&"prevNextMonth"==this.className){if(e.option.prevmonthdisabled&&parseInt(f[1])<e.month)return;if(e.option.nextmonthdisabled&&parseInt(f[1])>e.month)return;if(e.option.lessthannowdatedisabled&&parseInt(f[1])==e.month)return}e.option.restdisabled&&e.checkIsSaturday(e.year+"/"+e.month+"/"+this.innerHTML)||(e.option.defaultOneDayClick&&(f[1]<e.month||f[1]>e.month)&&(g=this.getAttribute("date").split("-"),h=parseInt(g[1]),c=e.year,d=h,b=c+"/"+d+"/"+e.day+",/",e.init(e.extends({timeStyle:b},e.option))),e.option.callback&&e.option.callback.call(this))}),this.bind(d[0],"ontouchend"in b?"touchend":"click",function(){if(parseInt(e.month)-1<e.systemMonth&&e.systemYear==e.year&&e.option.lessthannowmonthdisabled)return alert("不能再往前咯!");var a,b,c;e.month-1<1?(b=e.year-1,c=12):(b=e.year,c=e.month-1),a=b+"/"+c+"/"+e.day+",/",e.init(e.extends({timeStyle:a},e.option))}),this.bind(d[1],"ontouchend"in b?"touchend":"click",function(){var a,b,c;e.month+1>12?(b=e.year+(e.month+1)%12,c=e.month+1-12):(b=e.year,c=e.month+1),a=b+"/"+c+"/"+e.day+",/",e.init(e.extends({timeStyle:a},e.option))})},c.prototype.extends=function(a,b){for(var c in a)b[c]=a[c];return b},c.prototype.checkisholiday=function(a,b){var c,d,f,g,e=-1;for(f=0,g=a.length;g>f;f++)if(c=a[f].startrest,d=this.dateendadd(a[f].startrest,a[f].restdays),this.returnTimeStamp(b)>=this.returnTimeStamp(c)&&this.returnTimeStamp(b)<=this.returnTimeStamp(d)){e=f;break}return e},c.prototype.returnTimeStamp=function(a){return new Date(a).getTime()},c.prototype.dateendadd=function(a,b){var c,d,e,f;return a=a.split("-"),c=a[0],d=parseInt(a[1]),e=parseInt(a[2]),f=new Date(c,d,0).getDate(),e+b-1>f?(d+=1,e=e+b-1-f):e=e+b-1,c+"-"+d+"-"+e},c.prototype.bind=function(b,c,d){var e,f;if(a.addEventListener)if(b.length)for(e=0,f=b.length;f>e;e++)b[e].addEventListener(c,d,!1);else b.addEventListener(c,d,!1);else if(a.attachEvent)if(b.length)for(e=0,f=b.length;f>e;e++)b[e].attachEvent("on"+c,d);else b.attachEvent("on"+c,d);else if(b.length)for(e=0,f=b.length;f>e;e++)b[e].ev=d;else b.ev=d},c.prototype.checkIsSaturday=function(a){return new Date(Date.parse(a)).getDay()==this.option.restdate&&this.option.restdisabled},c.prototype.init.prototype=c.prototype,a.zzxl_calendar=c}(window,document);