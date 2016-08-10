$(function(){
	var dd = new Date(); 
	var	m=(dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获得月份 
	var	y=dd.getFullYear(); //获取年(四位)
	var omid  = getUrlParam('omid');
	var innum,outnum,month;
	var indate,outdate;
	var cid;
	$.ajax({
		url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/returnMakeDate",
		dataType:"jsonp",
		type:"get",
		data:{"omid":omid},
		success:function(data){	
			cid=data.data.cid;
			console.log(data)
			if(data.data.trimdate!=""){
				indate=data.data["trimdate"].split(",");
				$(".onecetime_chosebtbg").attr("value",indate);				
			}
			if(data.data.extdate!=null){
				outdate=data.data["extdate"].split(",");
				$(".onecetime_chosebten").attr("value",outdate);
			}
			innum=data.data.innum;
			outnum=data.data.outnum;
			month=data.data.month;
			$(".chinnum").text(innum);
			$(".choutnum").text(outnum);
			$(".carnum").val(data.data.carnum);
			$(".park").val(data.data.park);
			$(".phonenum").val(data.data.phonenum);
			//内饰日期
			zzxl_calendar({
				box:"box",
				lessthannowdatedisabled:false,	
				prevmonthdisabled:false,	
				nextmonthdisabled:false,	
				defaultOneDayClick:false,
				onload:function(){
					if(indate){
						var yeers=$('#box p:eq(0)').text().match(/\d+\/\d+/)[0];
						var oLi=$('#box ul li');
						for(var i=0,len=indate.length;i<len;i++){
							for(var j=0;j<oLi.length;j++){
								if(indate[i]==($(oLi[j]).attr("date"))){
									oLi[j].className='hover';
								}
							}					
						}	
					}
				},
				callback:function(){
					if(indate){
						if(indate.length==innum*month&&this.className!="hover")return;
//						if(indate.length<innum*month&&this.className!="hover")alert('没有选择足够次数');
						var yeers=$('#box p:eq(0)').text().match(/\d+\/\d+/)[0]; 
						if(this.className!='hover'){	
							indate.push($(this).attr('date'));
							console.log(indate)
							this.className='hover';		
							$(".onecetime_chosebtbg").attr("value",indate);
						}else{
							var index=-1;
							this.className=''
							rm(indate,$(this).attr('date'));
							console.log(indate)
							$(".onecetime_chosebtbg").attr("value",indate);
						}
					}
				}
			});	
			//外饰日期
			zzxl_calendar({												//获取多次点击的值
				box:"box2",	
				lessthannowdatedisabled:false,	
				prevmonthdisabled:false,	
				nextmonthdisabled:false,	
				onload:function(){
					if(outdate){
						var yeers=$('#box2 p:eq(0)').text().match(/\d+\/\d+/)[0];
						var oLi=$('#box2 ul li');
						for(var i=0,len=outdate.length;i<len;i++){
							for(var j=0;j<oLi.length;j++){
								if(outdate[i]==($(oLi[j]).attr("date"))){
									oLi[j].className='hover';
								}
							}					
						}		
					}
				},
				callback:function(){
					if(outdate){
						if(outdate.length==outnum*month&&this.className!="hover")return;	
//						if(outdate.length<outnum*month&&this.className!="hover")alert('没有选择足够次数');	
						var yeers=$('#box2 p:eq(0)').text().match(/\d+\/\d+/)[0]; 
						if(this.className!='hover'){	
							outdate.push($(this).attr('date'));
							console.log(outdate)
							this.className='hover';		
							$(".onecetime_chosebten").attr("value",outdate);
						}else{
							var index=-1;
							this.className=''
							rm(outdate,$(this).attr('date'));
							console.log(outdate)
							$(".onecetime_chosebten").attr("value",outdate);
						}
					}
				}
			});		
			$(".changeyuyuetime").click(function(){
				if(data.data.trimdate==""){		
					if(outdate.length==outnum*month){
						var config={
							url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/saveMakeRateMonthDate",
							type:"get",
							dataType:"jsonp",
							data:{"omid":omid,"trimDate":indate,"extDate":outdate,"cid":cid,
								  "carnum":$(".carnum").val(),
								  "park":$(".park").val(),
								  "phonenum":$(".phonenum").val()
							},
							success:function(data){
								if(data.status==1){
									console.log(data)				
									alert(data.msg)
									window.location.href="admin_list.html";
								}else{
									alert(data.msg)
								}
							}
						};
						$.ajax(config);
					}else{
						alert('没有选择足够的外饰次数');
					}
				}else{
					if(indate.length==innum*month&&outdate.length==outnum*month){
						var config={
							url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/saveMakeRateMonthDate",
							type:"get",
							dataType:"jsonp",
							data:{"omid":omid,"trimDate":indate,"extDate":outdate,"cid":cid,
								  "carnum":$(".carnum").val(),
								  "park":$(".park").val(),
								  "phonenum":$(".phonenum").val()},	
							success:function(data){
								if(data.status==1){
									console.log(data)				
									alert(data.msg)
									window.location.href="admin_list.html";
								}else{
									alert(data.msg)
								}
							}
						};
						$.ajax(config);
					}else if(indate.length<innum*month&&outdate.length==outnum*month){
						alert('没有选择足够的内饰次数');
					}else if(indate.length==innum*month&&outdate.length<outnum*month){
						alert('没有选择足够的外饰次数');
					}else if(indate.length<innum*month&&outdate.length<outnum*month){
						alert('没有选择足够的内、外饰次数');
					}else if(indate.length==innum*month&&($(".choutnum").text()=="包月")){
						var config={
							url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/saveMakeRateMonthDate",
							type:"get",
							dataType:"jsonp",
							data:{"omid":omid,"trimDate":indate,"extDate":outdate,"cid":cid,
								  "carnum":$(".carnum").val(),
								  "park":$(".park").val(),
								  "phonenum":$(".phonenum").val()},	
							success:function(data){
								if(data.status==1){
									console.log(data)				
									alert(data.msg)
									window.location.href="admin_list.html";
								}else{
									alert(data.msg)
								}
							}
						};
						$.ajax(config);
					}else if($(".chinnum").text()=="0"&&outdate.length<outnum*month){
						alert('没有选择足够的外饰次数');
					}else if($(".chinnum").text()=="0"&&outdate.length==outnum*month){
						var config={
							url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/saveMakeRateMonthDate",
							type:"get",
							dataType:"jsonp",
							data:{"omid":omid,"trimDate":indate,"extDate":outdate,"cid":cid,
								  "carnum":$(".carnum").val(),
								  "park":$(".park").val(),
								  "phonenum":$(".phonenum").val()},	
							success:function(data){
								if(data.status==1){
									console.log(data)				
									alert(data.msg)
									window.location.href="admin_list.html";
								}else{
									alert(data.msg)
								}
							}
						};
						$.ajax(config);
					}else if($(".chinnum").text()=="0"&&($(".choutnum").text()=="包月")){
						var config={
							url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/saveMakeRateMonthDate",
							type:"get",
							dataType:"jsonp",
							data:{"omid":omid,"trimDate":indate,"extDate":outdate,"cid":cid,
								  "carnum":$(".carnum").val(),
								  "park":$(".park").val(),
								  "phonenum":$(".phonenum").val()},	
							success:function(data){
								if(data.status==1){
									console.log(data)				
									alert(data.msg)
									window.location.href="admin_list.html";
								}else{
									alert(data.msg)
								}
							}
						};
						$.ajax(config);
					}else if($(".chinnum").text()!="0"&&($(".choutnum").text()=="包月")){
						var config={
							url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/saveMakeRateMonthDate",
							type:"get",
							dataType:"jsonp",
							data:{"omid":omid,"trimDate":indate,"extDate":outdate,"cid":cid,
								  "carnum":$(".carnum").val(),
								  "park":$(".park").val(),
								  "phonenum":$(".phonenum").val()},	
							success:function(data){
								if(data.status==1){
									console.log(data)				
									alert(data.msg)
									window.location.href="admin_list.html";
								}else{
									alert(data.msg)
								}
							}
						};
						$.ajax(config);
					}
					
				}
		});
		}
	})
	//日历公用方法
	function rm(arr,value){
		var index;
		$.each(arr, function(index1,val) {
			val==value&&(index=index1)
		});
		arr.splice(index,1);
	}
	function getUrlParam(name){
			var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
			var r = window.location.search.substr(1).match(reg);  //匹配目标参数
			if (r!=null) return unescape(r[2]); return null; //返回参数值
	} 
})	