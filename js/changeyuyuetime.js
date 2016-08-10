$(function(){
	var dd = new Date();
	var	m=(dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获得月份
	var	y=dd.getFullYear(); //获取年(四位)
	var omid  = getUrlParam('omid');
	var innum,outnum,month;
	var indate,outdate;
	var cid,mstatus,uoutnum,uinnum;
	$.ajax({
		url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/returnMakeDate",
		dataType:"jsonp",
		type:"get",
		data:{"omid":omid},
		success:function(data){
			console.log(data);
			cid=data.data.cid;
			innum=data.data.innum;
			outnum=data.data.outnum;
			month=data.data.month;
			mstatus=data.data.mstatus;
			uinnum=data.data.uinnum;
			uoutnum=data.data.uoutnum;
			$(".carnum").val(data.data.carnum);
			$(".park").val(data.data.park);
			$(".phonenum").val(data.data.phonenum);
			if(mstatus!=2){
				if(data.data.innum==0){
					$(".chinnum").attr("value",0);
				}else{
					$(".chinnum").attr("value",innum);
				}
				if(data.data.outnum=="包月"){
					$(".choutnum").attr("value","包月");
					$(".oldchosetime span").text(month);
				}else{
					$(".choutnum").attr("value",outnum);
					$(".oldchosetime span").text(month);
				}
				if($(".chinnum").val()!="0"&&$(".choutnum").val()!="包月"){     //内饰外饰都不为空
					indate=data.data["trimdate"].split(",");
					$(".onecetime_chosebtbg").attr("value",indate);
					outdate=data.data["extdate"].split(",");
					$(".onecetime_chosebten").attr("value",outdate);
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
								if(indate.length==$(".chinnum").attr("value")&&this.className!="hover")return;
		//						if(indate.length<innum*month&&this.className!="hover")alert('没有选择足够次数');
								var yeers=$('#box p:eq(0)').text().match(/\d+\/\d+/)[0];
								if(this.className!='hover'){
									indate.push($(this).attr('date'));
									console.log(indate);
									this.className='hover';
									$(".onecetime_chosebtbg").attr("value",indate);
								}else{
									var index=-1;
									this.className='';
									rm(indate,$(this).attr('date'));
									console.log(indate);
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
								if(outdate.length==$(".choutnum").attr("value")&&this.className!="hover")return;
		//						if(outdate.length<outnum*month&&this.className!="hover")alert('没有选择足够次数');
								var yeers=$('#box2 p:eq(0)').text().match(/\d+\/\d+/)[0];
								if(this.className!='hover'){
									outdate.push($(this).attr('date'));
									console.log(outdate);
									this.className='hover';
									$(".onecetime_chosebten").attr("value",outdate);
								}else{
									var index=-1;
									this.className='';
									rm(outdate,$(this).attr('date'));
									console.log(outdate);
									$(".onecetime_chosebten").attr("value",outdate);
								}
							}
						}
					});
					$(".changeyuyuetime").click(function(){
//						if(outdate.length<=$(".choutnum").attr("value")&&indate.length<=$(".chinnum").attr("value")){
							var config={
								url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/saveMakeRateMonthDate",
								type:"get",
								dataType:"jsonp",
								data:{"omid":omid,"trimDate":indate,"extDate":outdate,"cid":cid,
									  "carnum":$(".carnum").val(),
									  "park":$(".park").val(),
									  "phonenum":$(".phonenum").val(),
									  "inNum":$(".chinnum").val(),
									  "outNum":$(".choutnum").val()
								},
								success:function(data){
									if(data.status==1){
										console.log(data);
										alert(data.msg);
										window.location.href="admin_list.html";
									}else{
										alert(data.msg);
									}
								}
							};
							$.ajax(config);
//						}else{
//							alert('次数超出限制');
//						}
					});
				}else if($(".chinnum").val()=="0"&&$(".choutnum").val()!="包月"){       //内饰为空，外饰不为空
					outdate=data.data["extdate"].split(",");
					$(".onecetime_chosebten").attr("value",outdate);
					//内饰日期
					zzxl_calendar({
						box:"box",
						lessthannowdatedisabled:false,
						prevmonthdisabled:false,
						nextmonthdisabled:false,
						defaultOneDayClick:false,
	//					onload:function(){
	//						if(indate){
	//							var yeers=$('#box p:eq(0)').text().match(/\d+\/\d+/)[0];
	//							var oLi=$('#box ul li');
	//							for(var i=0,len=indate.length;i<len;i++){
	//								for(var j=0;j<oLi.length;j++){
	//									if(indate[i]==($(oLi[j]).attr("date"))){
	//										oLi[j].className='hover';
	//									}
	//								}
	//							}
	//						}
	//					},
						callback:function(){
							alert('不能选择内饰时间');
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
//								if(outdate.length==$(".choutnum").attr("value")&&this.className!="hover")return;
								var yeers=$('#box2 p:eq(0)').text().match(/\d+\/\d+/)[0];
								if(this.className!='hover'){
									outdate.push($(this).attr('date'));
									console.log(outdate);
									this.className='hover';
									$(".onecetime_chosebten").attr("value",outdate);
								}else{
									var index=-1;
									this.className='';
									rm(outdate,$(this).attr('date'));
									console.log(outdate);
									$(".onecetime_chosebten").attr("value",outdate);
								}
							}
						}
					});
					$(".changeyuyuetime").click(function(){
						console.log($(".choutnum").val(),$(".chinnum").val())
//						if(outdate.length<=$(".choutnum").attr("value")){
							var config={
								url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/saveMakeRateMonthDate",
								type:"get",
								dataType:"jsonp",
								data:{"omid":omid,"trimDate":"","extDate":outdate,"cid":cid,
									  "carnum":$(".carnum").val(),
									  "park":$(".park").val(),
									  "phonenum":$(".phonenum").val(),
									  "inNum":$(".chinnum").val(),
									  "outNum":$(".choutnum").val()
								},
								success:function(data){
									if(data.status==1){
										console.log(data);
										alert(data.msg);
										window.location.href="admin_list.html";
									}else{
										alert(data.msg);
									}
								}
							};
							$.ajax(config);
//						}else{
//							alert('次数超出限制');
//						}
					});
				}else if($(".chinnum").val()!="0"&&$(".choutnum").val()=="包月"){    //内饰不为空   外饰为空
					indate=data.data["trimdate"].split(",");
					$(".onecetime_chosebtbg").attr("value",indate);
					outdate=data.data["extdate"].split(",");
					$(".onecetime_chosebten").attr("value",outdate);
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
//								if(indate.length==$(".chinnum").attr("value")&&this.className!="hover")return;
		//						if(indate.length<innum*month&&this.className!="hover")alert('没有选择足够次数');
								var yeers=$('#box p:eq(0)').text().match(/\d+\/\d+/)[0];
								if(this.className!='hover'){
									indate.push($(this).attr('date'));
									console.log(indate);
									this.className='hover';
									$(".onecetime_chosebtbg").attr("value",indate);
								}else{
									var index=-1;
									this.className='';
									rm(indate,$(this).attr('date'));
									console.log(indate);
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
							alert("不能选择外饰时间");
						}
					});
					$(".changeyuyuetime").click(function(){
//						if(indate.length<=$(".chinnum").attr("value")){
							var config={
								url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/saveMakeRateMonthDate",
								type:"get",
								dataType:"jsonp",
								data:{"omid":omid,"trimDate":indate,"extDate":data.data.extdate,"cid":cid,
									  "carnum":$(".carnum").val(),
									  "park":$(".park").val(),
									  "phonenum":$(".phonenum").val(),
									  "inNum":$(".chinnum").val(),
									  "outNum":$(".choutnum").val()
								},
								success:function(data){
									if(data.status==1){
										console.log(data);
										alert(data.msg);
										window.location.href="admin_list.html";
									}else{
										alert(data.msg);
									}
								}
							};
							$.ajax(config);
//						}else{
//							alert('次数超出限制');
//						}
					});
				}else if($(".chinnum").val()=="0"&&$(".choutnum").val()=="包月"){      //两个都为空
					outdate=data.data["extdate"].split(",");
					$(".onecetime_chosebten").attr("value",outdate);
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
							alert("不能选择内饰日期");
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
							alert("不能选择外饰日期");
						}
					});
					$(".changeyuyuetime").click(function(){
						var config={
							url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/saveMakeRateMonthDate",
							type:"get",
							dataType:"jsonp",
							data:{"omid":omid,"trimDate":"","extDate":data.data.extdate,"cid":cid,
								  "carnum":$(".carnum").val(),
								  "park":$(".park").val(),
								  "phonenum":$(".phonenum").val(),
								  "inNum":$(".chinnum").val(),
								  "outNum":$(".choutnum").val()
							},
							success:function(data){
								if(data.status==1){
									console.log(data);
									alert(data.msg);
									window.location.href="admin_list.html";
								}else{
									alert(data.msg);
								}
							}
						};
						$.ajax(config);
					});
				}
			}else{
				if(data.data.innum){
					$(".chinnum").attr("value",data.data.innum);
				}else{
					$(".chinnum").attr("value","0");
				}
				$(".oldchosetime span").text("12次");
				$(".oldchosetime font").text("");
				$(".choutnum,.onecetime_chosebten,.chtimechosery").css("display","none");
				indate=data.data["trimdate"].split(",");
				$(".onecetime_chosebtbg").attr("value",indate);
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
//							if(indate.length==$(".chinnum").attr("value")&&this.className!="hover")return;
	//						if(indate.length<innum*month&&this.className!="hover")alert('没有选择足够次数');
							var yeers=$('#box p:eq(0)').text().match(/\d+\/\d+/)[0];
							if(this.className!='hover'){
								indate.push($(this).attr('date'));
								console.log(indate);
								this.className='hover';
								$(".onecetime_chosebtbg").attr("value",indate);
							}else{
								var index=-1;
								this.className='';
								rm(indate,$(this).attr('date'));
								console.log(indate);
								$(".onecetime_chosebtbg").attr("value",indate);
							}
						}
					}
				});

				$(".changeyuyuetime").click(function(){
//					if(indate.length<=$(".chinnum").attr("value")){
					var config={
						url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/saveMakeRateMonthDate",
						type:"get",
						dataType:"jsonp",
						data:{"omid":omid,"trimDate":indate,"extDate":indate,"cid":cid,
							  "carnum":$(".carnum").val(),
							  "park":$(".park").val(),
							  "phonenum":$(".phonenum").val(),
							  "inNum":$(".chinnum").val(),
							  "outNum":$(".chinnum").val()
						},
						success:function(data){
							if(data.status==1){
								console.log(data);
								alert(data.msg);
								// window.location.href="admin_list.html";
							}else{
								alert(data.msg);
							}
						}
					};
					$.ajax(config);
				});
			}
		}
	});
	//日历公用方法
	function rm(arr,value){
		var index;
		$.each(arr, function(index1,val) {
			val==value&&(index=index1);
		});
		arr.splice(index,1);
	}
	function getUrlParam(name){
			var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
			var r = window.location.search.substr(1).match(reg);  //匹配目标参数
			if (r!=null) return unescape(r[2]); return null; //返回参数值
	}
});
