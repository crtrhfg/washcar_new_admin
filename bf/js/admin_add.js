$(function(){
	carType();
	cityO();
	var province ="",city = "",county = "",building = "",username = "",phoneNum = "",carnum = "",park = "",rmid = "",innum = "",
		outnum = "",mstatus = "",monthchose="",totalPrice="",oncetime="",totalPriceyd="",mpricearry="",sprice="",rmidder="",tip="";			
	var t = $("#text_box");
	var tancanmouth=t.val();	
	var rsid=[];  //单次服务id数组
	var rsids;    //赠送id
	var otherDate =[];	//单次服务预约时间
	var startDate=[];	//起始日期
	var otherDates=[];	//赠送日期
	var trimDate=[];	//内饰清洗时间
	var extDate=[];		//外饰清洗时间
	var arroncetime=[];  //单次服务日期数组
	var oncersid=[];
	var totalPrices=0;    //单次金额
	//套餐次数叠加
    $("#add_button").click(function(){t.val(parseInt(t.val())+1)});  
    $("#min_button").click(function(){t.val(parseInt(t.val())-1)});     
    $('.oncetc').bind('change',function(){
		oncersid=$('.oncetc option:selected').attr('flog');
		sprice=$('.oncetc option:selected').attr('sprice');		
	})
	$("#selectCarType").bind("keydown",function (e){
		var ev=e || window.event;
		if(ev.keyCode==13)$("#searchCar")[0].click();
	});
	$("#searchCar").bind("click",function (){
		var val=$("#selectCarType").val();
		if(!val || val=="")return alert("请输入关键词!");
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Brand/selectCarType",
			type:"get",
			dataType:"jsonp",
			data:{kw:val},
			success:function (data){
				console.log(data.data.cartype);
				$("#CarTypefont").text(data.data.cartype)
			}
		});
	});
    //新增用户添加按钮
	var singlenum=-1;
	$(document).on("click",".admin_addcontent_tjbutton",function(dw){
		$(".tianjialist").show();
		singlenum++;
		var dancixinxi ='<div class="admin_addcontent admin_addcontent_once"><label>单次服务：</label>'+
						'<select name="cars" class="oncetc" style="width:28%" flog='+singlenum+'><option value="服务项目" style="display:none">服务项目</option></select><button class="admin_addcontent_tjbutton" style="margin-left:5px;">添加单次套餐</button></div>'
		var qingxishij ='<div class="admin_addcontent admin_addcontent_once"><label>清洗时间：</label>'+
						'<input class="admin_addcontent_times once_yuyuedata" type="text" value="预约时间" style="text-align: center;color: #504E4E;cursor: pointer;background-image: url(img/data.png);background-size: 24px;background-repeat: no-repeat;border: 1px solid #A9A9A9;" readonly="readonly">'+
						'</div><div class="timechoseryed '+parseInt(Math.random()*100)+'"><div id='+parseInt(Math.random()*100)+' style="margin-left: 11%;overflow: hidden;float: left;"></div></div>'
		$(".tianjialist").before(dancixinxi+qingxishij);
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Home/Subscribe/returnServe",
			dataType:"jsonp",
			success:function(data){
				console.log(data)			
				if(data.status==1){
					$.each(data.data, function (index,val){	
						$(".oncetc").append('<option flog='+val.rsid+' sprice='+val.sprice+'>'+val.singlename+'</option>');
					});					
				}
			}
		});
		$('.oncetc').bind('change',function(sa){
			var nowflog=$(this).attr('flog');
			var js={};
			zzxl_calendar({												//获取多次点击的值
				box:$('.timechoseryed').eq(nowflog).find("div").attr('id'),	
				lessthannowdatedisabled:false,	
				prevmonthdisabled:false,	
				nextmonthdisabled:false,	
				lessthannowmonthdisabled:false,	
				callback:function (){				
					// if(this.className=='prevNextMonth'||this.classname || (js[this.parentNode.parentNode.id] && js[this.parentNode.parentNode.id]!=this.innerHTML))return;			
					if((js[this.parentNode.parentNode.id] && js[this.parentNode.parentNode.id]!=this.innerHTML))return;			
					js[this.parentNode.parentNode.id]=this.innerHTML;
					var yeers=$(this).parent().parent().find('p:eq(0)').text().match(/\d+\/\d+/)[0];
					if(this.className==''){
						this.className='hover';
						otherDate.push(yeers+"/"+$(this).text());
						$(".once_yuyuedata").val(otherDate);
					}else{
						var index=-1;
						this.className=''
						rm(otherDate,yeers+'/'+$(this).text());
						console.log(otherDate)
						js[this.parentNode.parentNode.id]="";
					}				
				}
			});
			
			function rm(arr,value){
				$.each(arr, function(index1,val) {
					val==value&&(index=index1)
				});
				arr.splice(index,1);
			}
			sa.stopPropagation();
			
			var select = $('.admin_addcontent_once select');
			$.each(select,function(index,val){
				totalPrices+=parseInt($(val).find('option:selected').attr('sprice')); //单次服务金额
			})
			$("#onceprice").val(totalPrices);
		});
		dw.stopPropagation();
	});
	
	$(".admin_addcontent_tjzsbutton").click(function(ev){
		$(".tianjialist").show();
		$(".admin_addcontent_tjzsbutton").hide();
		$(this).hide();
		var zengsongxinxi ='<div class="admin_addcontent admin_addcontent_zs"><label>赠送服务：</label>'+
						   '<select class="zengsong" style="width:28%"><option value="赠送项目" style="display:none">赠送项目</option></select></div>'
		var qingxishijian ='<div class="admin_addcontent admin_addcontent_zs"><label>清洗时间：</label>'+
						   '<input class="admin_addcontent_times zsyuyue" type="text" value="预约时间" style="text-align: center;color: #504E4E;cursor: pointer;background-image: url(img/data.png);background-size: 24px;background-repeat: no-repeat;border: 1px solid #A9A9A9;" readonly="readonly">'+
						   '</div><div class="timechoseryek"><div style="margin-left: 11%;overflow: hidden;float: left;" id="box4"></div></div>'
		$(".tianjiazs").after(zengsongxinxi+qingxishijian);
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Home/Subscribe/returnServe",
			dataType:"jsonp",
			success:function(data){
				console.log(data)			
				if(data.status==1){
					$.each(data.data, function (index,val){	
						$(".zengsong").append('<option rsids='+val.rsid+'>'+val.singlename+'</option>');
					});					
				}
			}
		});
		$(".zengsong").change(function(dwq){
			rsids=$(".zengsong option:selected").attr('rsids');     //赠送服务id
			$("#onceprice").val("0");
			zzxl_calendar({												
				box:"box4",	
				lessthannowdatedisabled:false,	
				prevmonthdisabled:false,	
				nextmonthdisabled:false,	
				lessthannowmonthdisabled:false,	
				first:true,		
				onload:function (){
					var oLi=$('#box4 ul li');
					for(var i=0,len=otherDates.length;i<len;i++){
						for(var j=0;j<oLi.length;j++){
							if(oLi.eq(j).attr("date")==otherDates[i])oLi[j].className='hover';
						}					
					}
				},
				callback:function (){
					if(otherDates.length>=1 && this.className!="hover")return;
					var yeers=$('#box4 p:eq(0)').text().match(/\d+\/\d+/)[0];				
					if(this.className!='hover'){
						otherDates.push($(this).attr("date"));
						this.className='hover';
						$(".zsyuyue").val(otherDates)
					}else{
						var index=-1;
						this.className=''
						otherDates=[];	
					}
					return false;
				}
			});
			dwq.stopPropagation();
		});
		ev.stopPropagation();
	});
	
	
	//日期函数			
	var arrtcd=[];												//单次预约
	var arr=[];													//套餐内饰外饰时间
	var arrtcb=[];												//套餐起始时间
	var arrtce=[];												//套餐结束时间	
	var dd = new Date(); 
	var	m=(dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获得月份 
	var	y=dd.getFullYear(); //获取年(四位)	
	//保存传参
	$('.rate').bind('change',function(){
		mpricearr=$('.rate option:selected').attr('flog');		
		mpricearry=$('.rate option:selected').attr('mprice');
		rmidder=$('.rate option:selected').attr('flog');
		innum = $('.rate option:selected').attr('innum');
		outnum = $('.rate option:selected').attr('outnum');	
		mstatus = $('.rate option:selected').attr('mstatus');	
		//外饰根据套餐显示隐藏  
		if(mstatus==1){
			$(".onecetime_chosebten").css("display","none");		
			$(".trieout,.aaasadw").css("display","block");
		}else if(mstatus==0){
			$(".onecetime_chosebten").css("display","block");
			$(".trieout,.aaasadw").css("display","block");
		}else if(mstatus==2){
			$(".onecetime_chosebten").css("display","none");
			$(".trieout,.aaasadw").css("display","none");
		}
		zzxl_calendar({												//获取多次点击的值
			box:"box1",	
			lessthannowdatedisabled:false,	
			prevmonthdisabled:false,	
			nextmonthdisabled:false,	
			lessthannowmonthdisabled:false,	
			first:true,		
			onload:function (){
				var oLi=$('#box1 ul li');
				for(var i=0,len=startDate.length;i<len;i++){
					for(var j=0;j<oLi.length;j++){
						if(oLi.eq(j).attr("date")==startDate[i])oLi[j].className='hover';
					}					
				}
			},
			callback:function (){		
				if(startDate.length>=1 && this.className!="hover")return;
				var yeers=$('#box1 p:eq(0)').text().match(/\d+\/\d+/)[0];				
				if(this.className!='hover'){
					startDate.push($(this).attr("date"));
					this.className='hover';
				}else{
					var index=-1;
					this.className=''
					startDate=[];	
				}
				return false;
			}
		});
		//日历公用方法
		function rm(arr,value){
			var index;
			$.each(arr, function(index1,val) {
				val==value&&(index=index1)
			});
			arr.splice(index,1);
		}
		//内饰日期
		zzxl_calendar({
			box:"box",
			lessthannowdatedisabled:false,	
			prevmonthdisabled:false,	
			nextmonthdisabled:false,	
			lessthannowmonthdisabled:false,	
			defaultOneDayClick:false,
//			onload:function(){
//				var yeers=$('#box p:eq(0)').text().match(/\d+\/\d+/)[0];
//				var oLi=$('#box ul li');
//				for(var i=0,len=trimDate.length;i<len;i++){
//					for(var j=0;j<oLi.length;j++){
//						if(trimDate[i].indexOf(yeers)>-1){
//							trimDate[i].split('/')[2]==$(oLi[j]).text()&&(oLi[j].className='hover');
//						}
//					}					
//				}
////				console.log(trimDate)
//			},
			onload:function(){
				var yeers=$('#box p:eq(0)').text().match(/\d+\/\d+/)[0];
				var oLi=$('#box ul li');
				for(var i=0,len=trimDate.length;i<len;i++){
					for(var j=0;j<oLi.length;j++){
						if(trimDate[i]==($(oLi[j]).attr("date"))){
							oLi[j].className='hover';
						}
					}					
				}
			},
			callback:function (){
//				if(trimDate.length==innum*monthchose && this.className!="hover")return;
//					var yeers=$('#box p:eq(0)').text().match(/\d+\/\d+/)[0];
//				if(this.className!='hover'){					
//					trimDate.push(yeers+"/"+$(this).text());
//					this.className='hover';					
////					console.log(trimDate)
//				}else{
//					var index=-1;
//					this.className=''
//					rm(trimDate,yeers+'/'+$(this).text());
////					console.log(trimDate)
//				}
				if(trimDate.length==innum*monthchose&&this.className!="hover")return;
	//				if(trimDate.length<innum*month&&this.className!="hover")alert('没有选择足够次数');
				var yeers=$('#box p:eq(0)').text().match(/\d+\/\d+/)[0]; 
				if(this.className!='hover'){	
					trimDate.push($(this).attr('date'));
					console.log(trimDate)
					this.className='hover';		
					$(".onecetime_chosebtbg").attr("value",trimDate);
				}else{
					var index=-1;
					this.className=''
					rm(trimDate,$(this).attr('date'));
					console.log(trimDate)
					$(".onecetime_chosebtbg").attr("value",trimDate);
				}
	
			}
		});	
		//外饰日期
		zzxl_calendar({												//获取多次点击的值
			box:"box2",	
			lessthannowdatedisabled:false,	
			prevmonthdisabled:false,	
			nextmonthdisabled:false,	
			lessthannowmonthdisabled:false,	
			onload:function(){
				var yeers=$('#box2 p:eq(0)').text().match(/\d+\/\d+/)[0];
				var oLi=$('#box2 ul li');
				for(var i=0,len=extDate.length;i<len;i++){
					for(var j=0;j<oLi.length;j++){
						if(extDate[i]==($(oLi[j]).attr("date"))){
							oLi[j].className='hover';
						}
					}					
				}	
			},
			callback:function (){
//				if(extDate.length==outnum*monthchose && this.className!="hover")return;
//					var yeers=$('#box2 p:eq(0)').text().match(/\d+\/\d+/)[0];
//				if(this.className!='hover'){						
//					extDate.push(yeers+"/"+$(this).text());
//					this.className='hover';						
////					console.log(extDate)
//				}else{
//					var index=-1;
//					this.className=''
//					rm(extDate,yeers+'/'+$(this).text());
////					console.log(extDate)
//				}
				if(extDate.length==outnum*monthchose&&this.className!="hover")return;	
//					if(extDate.length<outnum*month&&this.className!="hover")alert('没有选择足够次数');	
				var yeers=$('#box2 p:eq(0)').text().match(/\d+\/\d+/)[0]; 
				if(this.className!='hover'){	
					extDate.push($(this).attr('date'));
					console.log(extDate)
					this.className='hover';		
					$(".onecetime_chosebten").attr("value",extDate);
				}else{
					var index=-1;
					this.className=''
					rm(extDate,$(this).attr('date'));
					console.log(extDate)
					$(".onecetime_chosebten").attr("value",extDate);
				}
			}
		});
	});
	$("#box1").click(function(){if(startDate!=""){$(".taocantime_chosebt").attr("value",startDate);}});
	$("#box").click(function(){if(trimDate!=""){$(".onecetime_chosebtbg").attr("value",trimDate);}});
	$("#box2").click(function(){if(extDate!=""){$(".onecetime_chosebten").attr("value",extDate);}});	
	//套餐购买次数叠加
	$(".add_button,.min_button").click(function(){
		monthchose=$(".month_chose").val();
		if(monthchose==0){
			$(".min_button").hide();
		}else if(monthchose>0&&monthchose<12){
			$(".min_button,.add_button").show();
		}else if(monthchose==12){
			$('.add_button').hide();
		}
		//遍历单次金额
		var one=$(".oncetc");
		var input=$(".once_yuyuedata");
		var sprice,flog;
		for(var i=0,len=one.length;i<len;i++){
			sprice=one.eq(i).find("option:selected").attr('sprice');
			flog=one.eq(i).find("option:selected").attr('flog');			
			rsid.push({"sprice":sprice,"flog":flog});
		}
//		console.log(rsid)
		var count=0;    //总金额
		rsid.forEach(function (item){
			count+=parseInt(item.sprice);
		});	
		//套餐购买次数选择
		totalPrice=mpricearry*monthchose;
		totalPriceyd=totalPrice.toFixed(2)
		$(".totlemoney").html(totalPriceyd+'元');
		// if(monthchose<3 ){
		// 	totalPriceyy=mpricearry*monthchose+count;
		// 	totalPrice=mpricearry*monthchose;
		// 	totalPriceyd=totalPrice.toFixed(2)
		// 	$(".totlemoney").html(totalPriceyd+'元');
			
		// }
		// else if(monthchose<6 || monthchose>=3){
		// 	totalPriceyy = mpricearry * monthchose*0.9+count;
		// 	totalPrice=mpricearry*monthchose*0.9;
		// 	totalPriceyd=totalPrice.toFixed(2)
		// 	$(".totlemoney").html(totalPriceyd+'元');
			
		// }
		// else if(monthchose>6){
		// 	totalPriceyy = mpricearry * monthchose*0.85+count;
		// 	totalPrice=mpricearry*monthchose*0.85;
		// 	totalPriceyd=totalPrice.toFixed(2)
		// 	$(".totlemoney").html(totalPriceyd+'元');
		// }		
	});
	//限号提示
	$(".carnum").bind('blur',function(){
		function getNum(arr){          //将输入框的字符串取整  并获取最后一位
			var paddleft = arr.replace(/[^0-9]/ig, ""); 
			var len=parseInt(paddleft).toString();
			return len.substr(-1);
		}
	    var aVal=$(this).val();
		var s=aVal.substring(6);
		if((getNum(aVal)==1)||(getNum(aVal)==6)){
		$("#xianhaotishi").html('星期一限号');
		}
		if((getNum(aVal)==2)||(getNum(aVal)==7)){
			$("#xianhaotishi").html('星期二限号');
		}
		if((getNum(aVal)==3)||(getNum(aVal)==8)){
			$("#xianhaotishi").html('星期三限号');
		}
		if((getNum(aVal)==4)||(getNum(aVal)==9)){
			$("#xianhaotishi").html('星期四限号');
		}
		if((getNum(aVal)==5)||(getNum(aVal)==0)){
			$("#xianhaotishi").html('星期五限号');
		}
	});
	
	$(".adminadd_bcun").click(function(){	
		username = $(".username").val();									
		phoneNum = $(".phoneNum").val();	
		carnum = $(".carnum").val();
		park = $(".park").val();	
		tip=$(".beizhu").val();
		//遍历单次id
		var one=$(".oncetc");
		var flog;
		for(var i=0,len=one.length;i<len;i++){			
			flog=one.eq(i).find("option:selected").attr('flog');			
			rsid.push({"flog":flog});
		}
		if($("#names_").text()=="用户名格式错误"){
			alert("用户名格式错误")
		}else if($("#numbers_").text()=="手机号格式错误"){
			alert("手机号格式错误")
		}else if($("#car_licence_plate").text()=="车牌号格式错误"){
			alert("车牌号格式错误")
		}else if($("#names_").text()!="用户名格式错误"||$("#numbers_").text()!="手机号格式错误"||$("#car_licence_plate").text()!="车牌号格式错误"){
			var config={
				url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/addOrder",
				type:"get",
				dataType:"jsonp",
				data:{"vid":vid,"rmid":rmidder,"rsid":rsid,"username":username,"phoneNum":phoneNum,"carnum":carnum,
					  "park":park,"carType":cartype,"startDate":startDate[0],
					  "totalPrice":totalPriceyd,"month":monthchose,"otherDate":otherDate,"tip":tip,"sid":sid,"omid":omid,"seid":seid,
					  "totalPrices":$("#onceprice").val(),"otherDates":otherDates,"rsids":rsids},
				success:function(data){
					if(data.status==1){
						alert(data.msg);
						if(seid){
							window.location.href="moneyadmin.html";
						}else{
							window.location.href="admin_list.html";
						}
					}else{
						alert(data.msg);
					}
					console.log(data);
				},error:function(){
					console.log("数据交互有误")
				}
			};	

			//套餐购买情况判断**************************************************************************************************************
			if($(".rate option:selected").val()!="请选择服务"){
				if($(".hidetrieout label").css("display")=='block'){
					if($("#text_box").attr("value")==0){
						alert("请先选择购买月份次数");
						$("#text_box").css("border","1px solid red");
					}else 
					if($(".onecetime_chosebtbg").val()=="内饰清洗时间"&&$(".onecetime_chosebten").val()=="外饰清洗时间"){
						alert("请选择套餐日期");
					}else{
						if(innum!=0&&outnum!="包月"){
							if(trimDate.length!=innum*monthchose&&extDate.length!=outnum*monthchose){
								alert("没选择足够的内、外饰日期")
							}else if(trimDate.length!=innum*monthchose&&extDate.length==outnum*monthchose){
								alert("没选择足够的内饰日期")
							}else if(trimDate.length==innum*monthchose&&extDate.length!=outnum*monthchose){
								alert("没选择足够的外饰日期")
							}else if(trimDate.length==innum*monthchose&&extDate.length==outnum*monthchose){
								config.data.trimDate=trimDate;
								config.data.extDate=extDate;
								$.ajax(config)
							}
						}else if(innum==0&&outnum!="包月"){
							if(extDate.length!=outnum*monthchose){
								alert("没选择足够的外饰日期")
							}else if(extDate.length==outnum*monthchose){
								config.data.extDate=extDate;
								config.data.trimDate="";
								$.ajax(config)
							}
						}else if(innum!=0&&outnum=="包月"){
							if(trimDate.length!=innum*monthchose){
								alert("没选择足够的内饰日期")
							}else if(trimDate.length==innum*monthchose){
								config.data.extDate="";
								config.data.trimDate=trimDate;
								$.ajax(config)
							}
						}
					}
				}
			}
			//单次购买情况***************************************************************************************************************
			if($(".admin_addcontent_once").length!=0){   												//如果需要购买单次
				if($(".oncetc").val()=="服务项目"&&$(".once_yuyuedata").val()=="预约时间"){
					alert("请先选择单次套餐名称")
				}else if($(".oncetc").val()!="服务项目"&&$(".once_yuyuedata").val()=="预约时间"){
					alert("单次套餐日期填写不完整")
				}else if($(".oncetc").val()!="服务项目"&&$(".once_yuyuedata").val()!="预约时间"){
					config.data.rsid=rsid;
					config.data.otherDate=otherDate;
					$.ajax(config)
				}
			}
			//赠送购买情况***************************************************************************************************************
			if($(".admin_addcontent_zs").length!=0){   												//如果需要购买单次
				if($(".zengsong").val()=="赠送项目"&&$(".zsyuyue").val()=="预约时间"){
					alert("请先选择赠送套餐名称")
				}else if($(".zengsong").val()!="赠送项目"&&$(".zsyuyue").val()=="预约时间"){
					alert("赠送套餐日期填写不完整")
				}else if($(".zengsong").val()!="赠送项目"&&$(".zsyuyue").val()!="预约时间"){
					config.data.rsids=rsids;
					config.data.otherDates=otherDates;
					$.ajax(config)
				}
			}
			if($(".hidetrieout label").css("display")=='none'){
				config.data.month="";
				config.data.trimDate="";
				config.data.extDate="";
				$.ajax(config)
			}
			rsid.length=0;
		}
	});
	//体验用户 用户数据填充
	var sid = getUrlParam('sid');
	if(sid!=null){
		$.ajax({                                                 
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/ReSupMsg",                                   
			type:"get",                                        
			dataType:"jsonp", 
			data:{"sid":sid},
			success:function(data){
				console.log(data)
				if($(".cartype option:selected").text()=="请选择车型"){
					alert("请优先填写车型，并重新选择地区和楼盘");
					$(".cartype").css("border","1px solid red");
					$(".city_numF,.city_numS").css("border","1px solid #fff100");
					$(".cartype").change(function(){
						$(this).css("border","1px solid #A9A9A9");
					});
					$(".city_numF").change(function(){
						$(this).css("border","1px solid #A9A9A9");
					});
					$(".city_numS").change(function(){
						$(this).css("border","1px solid #A9A9A9");
					});
				}
				$(".username").val(data.data[0].name);
				$(".phoneNum").val(data.data[0].phone);	
				if(data.data[0].cartype!=""){
					selected($('.cartype option'),data.data[0]["cartype"]);
				}
				$(".carnum").val(data.data[0].carnum);
				$(".park").val(data.data[0].park);
				var t=0;
				t=setInterval(function (){
					if(window.sheng){
						clearInterval(t);
						var count=$(".city_numF option").length;
						console.log(count)
			   			for(var i=0;i<count;i++){
			   			 	if($(".city_numF").get(0).options[i].text == data.data[0].county){
			           			$(".city_numF").get(0).options[i].selected = true;
			           			break;
			       			}
			    		}
			   			aheng($(".city_numF").val());
					}
				},200);
				var y=0;
				y=setInterval(function (){
					if(window.cheng){
						clearInterval(y);
						var count=$(".city_numS option").length;
						console.log(count)
			   			for(var i=0;i<count;i++){
			   			 	if($(".city_numS").get(0).options[i].text == data.data[0].building){
			           			$(".city_numS").get(0).options[i].selected = true;
			           			break;
			       			 }
			    		}
					}
				},400);
			}
		})
	}
	//失效用户 用户数据填充
	var omid = getUrlParam('omid');
	if(omid!=null){
		$.ajax({                                                 
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/RenewUserMsg",                                   
			type:"get",                                        
			dataType:"jsonp", 
			data:{"omid":omid},
			success:function(data){            
				console.log(data)
				if($(".cartype option:selected").text()=="请选择车型"){
					alert("请优先填写车型，并重新选择地区和楼盘");
					$(".cartype").css("border","1px solid red");
					$(".city_numF,.city_numS").css("border","1px solid #fff100");
					$(".cartype").change(function(){
						$(this).css("border","1px solid #A9A9A9");
					});
					$(".city_numF").change(function(){
						$(this).css("border","1px solid #A9A9A9");
					});
					$(".city_numS").change(function(){
						$(this).css("border","1px solid #A9A9A9");
					});
				}
				$(".username").val(data.data[0].username);
				$(".phoneNum").val(data.data[0].phonenum);	
				selected($('.cartype option'),data.data[0]["ctype"]);
				$(".carnum").val(data.data[0].carnum);
				$(".park").val(data.data[0].park);
				var t=0;
				t=setInterval(function (){
					if(window.sheng){
						clearInterval(t);
						var count=$(".city_numF option").length;
						console.log(count)
			   			for(var i=0;i<count;i++){
			   			 	if($(".city_numF").get(0).options[i].text == data.data[0].county){
			           			$(".city_numF").get(0).options[i].selected = true;
			           			break;
			       			}
			    		}
			   			aheng($(".city_numF").val());
					}
				},200);
				var y=0;
				y=setInterval(function(){
					if(window.cheng){
						clearInterval(y);
						var count=$(".city_numS option").length;						
			   			for(var i=0;i<count;i++){
			   			 	if($(".city_numS").get(0).options[i].text == data.data[0].building){
			           			$(".city_numS").get(0).options[i].selected = true;
			           			break;
			       			 }
			    		}
					}
				},400);				
				var z=0;
				z=setInterval(function (){
						clearInterval(z);
						province = $('.city_numO option:selected').text();	
						city = $('.city_numT option:selected').text();	
						county = $('.city_numF option:selected').text();	
						building = $('.city_numS option:selected').text();	
						cartype = $('.cartype option:selected').text();		
						console.log(province,city,county,building,cartype,vid)
						$.ajax({                                                 
							url:"http://www.nbinbi.com/waterObj/index.php/Home/Common/reVillage",
							type:"get",                                        
							dataType:"jsonp", 
							data:{"province":province,"city":city,"county":county,"building":building},
							success:function(data){ 
								console.log(data)
								if(data.status==1){
									vid=data.data;
									console.log(vid)
									$.ajax({
										type:"get",
										url:"http://www.nbinbi.com/waterObj/index.php/Home/Subscribe/rateReturn",
										dataType:"jsonp", 
										data:{"carType":cartype,"vid":vid},
										success:function(data){
											console.log(data);							
											if(data.status==1){
												$(".rate").find('.select').remove();
												$.each(data.data,function (index,val) {							
														$(".rate").append('<option class="select" flog='+val.rmid+' mprice='+val.mprice+' innum='+val.innum+' outnum='+val.outnum+' mstatus='+val.mstatus+'>'+val.ratename+'</option>');
												});
									
											}
										}
									});					
								}
							}
						});	
				},1000);
			}
		})
	}
	//客户预约 用户数据填充
	var seid = getUrlParam('seid');		
	if(seid!=null){
		$.ajax({                                                 
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/ReSerMsg",                                   
			type:"get",                                        
			dataType:"jsonp", 
			data:{"seid":seid},
			success:function(data){            
				console.log(data)
				if($(".cartype option:selected").text()=="请选择车型"){
					alert("请优先填写车型，并重新选择地区和楼盘");
					$(".cartype").css("border","1px solid red");
					$(".city_numF,.city_numS").css("border","1px solid #fff100");
					$(".cartype").change(function(){
						$(this).css("border","1px solid #A9A9A9");
					});
					$(".city_numF").change(function(){
						$(this).css("border","1px solid #A9A9A9");
					});
					$(".city_numS").change(function(){
						$(this).css("border","1px solid #A9A9A9");
					});
				}
				$(".username").val(data.data[0].name);
				$(".phoneNum").val(data.data[0].phonenum);	
				if(data.data[0].cartype!=""){
					selected($('.cartype option'),data.data[0]["cartype"]);
				}
				if(data.data[0].carnum!=""){
					$(".carnum").val(data.data[0].carnum);
				}
				if(data.data[0].park!=""){
					$(".park").val(data.data[0].park);
				}						
				var t=0;
				t=setInterval(function (){
					if(window.sheng){
						clearInterval(t);
						var count=$(".city_numF option").length;
						console.log(count)
			   			for(var i=0;i<count;i++){
			   			 	if($(".city_numF").get(0).options[i].text == data.data[0].county){
			           			$(".city_numF").get(0).options[i].selected = true;
			           			break;
			       			}
			    		}
			   			aheng($(".city_numF").val());
					}
				},200);
				var y=0;
				y=setInterval(function (){
					if(window.cheng){
						clearInterval(y);
						var count=$(".city_numS option").length;
						console.log(count)
			   			for(var i=0;i<count;i++){
			   			 	if($(".city_numS").get(0).options[i].text == data.data[0].building){
			           			$(".city_numS").get(0).options[i].selected = true;
			           			break;
			       			 }
			    		}
					}
				},400);
//				var z=0;
//				z=setInterval(function (){
//					if(window.aheng){
//						clearInterval(z);
//						hheng();
//						var count=$(".rate option").length;
//						console.log(count)
////			   			for(var i=0;i<count;i++){
////			   			 	if($(".rate").get(0).options[i].text == data.data[0].building){
////			           			$(".rate").get(0).options[i].selected = true;
////			           			break;
////			       			 }
////			    		}
//					}
//				},600);
			}
		})
	}
	
	
	//选中地址方法
	function selected(oId,data){
		for(var i=0;i<oId.length;i++){
			($(oId[i]).text()==data)&&$(oId[i]).attr('selected','selected');
		}	
	}	
	function getUrlParam(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg);  //匹配目标参数
		if (r!=null) return unescape(r[2]); return null; //返回参数值
	} 
	
})
//车型选择
function carType(val){
	$.ajax({                                                 
		url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/reCarType",                                   
		type:"get",                                        
		dataType:"jsonp", 
		success:function(data){                                    
			if(data.status==1){
				$.each(data.data, function (index,val) {						
					$(".cartype").append('<option class="select">'+val.cartype+'</option>');
				});
			}
		},                                                
		error:function(){
			console.log("数据交互有误")
		}
	})    
}
//省份选择
var ss;
function cityO(val){
	$.ajax({                                                 
		url:"http://www.nbinbi.com/waterObj/index.php/Home/Common/reProvince",                                   
		type:"get",                                        
		dataType:"jsonp", 
		success:function(data){  
//			console.log(data)
			if(data.status==1){
				$.each(data.data, function (index,val) {						
					$(".city_numO").append('<option>'+val.province+'</option>');
					ss=val.province;
				});			
				$(".city_numO option:eq(1)").prop("selected", 'selected');
				sheng($(".city_numO option:eq(1)").val());
			}
		},                                                
		error:function(){
			console.log("数据交互有误")
		}
	})    
}
//城市选择
function sheng(val){ 
	$.ajax({                                                 
		url:"http://www.nbinbi.com/waterObj/index.php/Home/Common/reVillage",                                   
		type:"get",                                        
		dataType:"jsonp", 
		data:{"province":ss},
		success:function(data){                               
//			console.log(data);	
			if(data.status==1){
				$(".city_numT").find('.select').remove();
				$.each(data.data, function (index,val) {							
						$(".city_numT").append('<option class="select">'+val.city+'</option>');						
				});
				$(".city_numT option:eq(0)").prop("selected", 'selected');
				cheng($(".city_numT option:eq(0)").val());
				window.sheng=1;
			}
		}
	})	
};
//县选择
function cheng(val){ 
	$.ajax({                                                 
		url:"http://www.nbinbi.com/waterObj/index.php/Home/Common/reVillage",
		type:"get",                                        
		dataType:"jsonp", 
		data:{"city":val},
		success:function(data){                               
//				console.log(data);	
			if(data.status==1){
				$(".city_numF").find('.select').remove();
				$.each(data.data, function (index,val) {							
						$(".city_numF").append('<option class="select">'+val.county+'</option>');
				});
				window.cheng=1;
			}
		},                                                
		error:function(){
			console.log("数据交互有误")
		}
	})		
};

//楼盘选择
function aheng(val){ 
	$.ajax({                                                 
		url:"http://www.nbinbi.com/waterObj/index.php/Home/Common/reVillage",
		type:"get",                                        
		dataType:"jsonp", 
		data:{"county":val},
		success:function(data){                               
//				console.log(data);	
			if(data.status==1){
				$(".city_numS").find('.select').remove();
				$.each(data.data, function (index,val) {							
						$(".city_numS").append('<option class="select">'+val.building+'</option>');
				});
			}
		},                                                
		error:function(){
			console.log("数据交互有误")
		}
	})   		
};

function getText(){
	alert($('.city_numO option:selected').text())
}

//套餐选择
var cartype = "";	
var mpricearr=[];
var vid="";
var mprice="";	      //套餐价钱
function hheng(){ 	
//	console.log($('.city_numO option:selected').text()+$('.city_numT option:selected').text()+$('.city_numF option:selected').text()+$('.city_numS option:selected').text())
	province = $('.city_numO option:selected').text();	
	city = $('.city_numT option:selected').text();	
	county = $('.city_numF option:selected').text();	
	building = $('.city_numS option:selected').text();	
	cartype = $('.cartype option:selected').text();		
	$.ajax({                                                 
		url:"http://www.nbinbi.com/waterObj/index.php/Home/Common/reVillage",
		type:"get",                                        
		dataType:"jsonp", 
		data:{"province":province,"city":city,"county":county,"building":building},
		success:function(data){  
			if(data.status==1){
				vid=data.data;
//				console.log(vid)
				$.ajax({
					type:"get",
					url:"http://www.nbinbi.com/waterObj/index.php/Home/Subscribe/rateReturn",
					dataType:"jsonp", 
					data:{"carType":cartype,"vid":vid},
					success:function(data){
						console.log(data);							
						if(data.status==1){
							$(".rate").find('.select').remove();
							$.each(data.data,function (index,val) {							
									$(".rate").append('<option class="select" flog='+val.rmid+' mprice='+val.mprice+' innum='+val.innum+' outnum='+val.outnum+' mstatus='+val.mstatus+'>'+val.ratename+'</option>');
							});
				
						}
					}
				});					
			}
		},                                                
		error:function(){
			console.log("数据交互有误")
		}
	})	
};






