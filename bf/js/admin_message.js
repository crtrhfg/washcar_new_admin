$(function(){
	var omid = getUrlParam('omid');
	var sorderid=getUrlParam('sorderid');
	var dwa;
	if(sorderid!=null){
		dwa={"sOrderId":sorderid};
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selDetails",
			dataType:"jsonp",
			data:dwa,		
			success:function(data){	
				console.log(data)
				$(".username").text("车主姓名："+data.data.user.name);
				$(".phonenumer").text("手机号："+data.data.user.phonenum);
				$(".ratelist").text("无套餐使用情况");
				$(".innumsuan,.miminumiin,.totalnumin,.outnumsuan,.miminumoutt,.totalnumout").text("/");
				var str,counts;
				$.each(data.data.ordersingle,function(index,val){
					str+='<tr class="admin_listcontent_xinxitaneirong"><td colspan="2">'+val.singlename+'</td><td colspan="2" class="onceused">1</td><td colspan="1">'+val.counts+'</td><td colspan="2" class="oncetotal">1</td><td colspan="1">'+val.enddate+'</td></tr>'
					counts=val.counts;					
				});
				$(".yewuqingkuang").after(str);
				if(counts==1){
					$(".onceused").html("0");
					$(".oncetotal").html(counts);
				}
				//判断业务情况
				if(data.data.logs==""){
					$(".zongjifeiyong").after('<tr class="admin_listcontent_xinxitaneirong"><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td></tr>')
				}else{
					var pdd;
					$.each(data.data.logs,function(index,val){
						pdd+='<tr class="admin_listcontent_xinxitaneirong"><td>'+val.finishdate+'</td><td>'+val.name+'</td><td>'+val.wname+'</td><td>'+val.carnum+'</td><td>'+val.park+'</td><td>'+val.optype+'</td><td>1</td><td>'+val.price+'</td></tr>';
					});
					$(".zongjifeiyong").after(pdd)
				}
				//判断备注
				if(data.data.tip!=null){
					var dd = new Date(); 
					var	m=(dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获得月份 
					var	y=dd.getFullYear(); //获取年(四位)	
					$(".beizhumessage").text(y+'-'+m+'备注：'+data.data.tip);
				}else{
					var dd = new Date(); 
					var	m=(dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获得月份 
					var	y=dd.getFullYear(); //获取年(四位)
					$(".beizhumessage").text(y+'-'+m+'备注：');
				}
				//判断金额
				//判断总金额		
				if(data.data.rate!=null && data.data.price.length==0){
					$(".allpayfored").text('总费用合计 = '+res.countprice+'（元）  其中:包月-'+res.info+'（元）')
				}else if(data.data.rate==null && data.data.price.length!=0){
					var singlename,totalprice,str='';
					$.each(data.data.price,function(index,val){
						singlename=val.singlename;
						totalprice=val.totalprice;
						str+=singlename+"="+totalprice+'元、'
						$(".allpayfored").text('总费用合计：'+str)
					});				
				}else if(data.data.rate!=null && data.data.price.length!=0){
					var singlename,totalprice,str='';
					$.each(data.data.price,function(index,val){
						singlename=val.singlename;
						totalprice=val.totalprice;
						str+=singlename+"="+totalprice				
					});	
					$(".allpayfored").text('总费用合计 = '+res.countprice+'（元）  其中:包月-'+res.info+'（元）,单次服务='+str);
				}
				function returnDateAndInOutNum(data){
					var countprice=0,str="";
					for(var attr in data.data){
						if(attr!="ordersingle" && attr!="rate")continue;
						$(data.data[attr]).each(function (key,val){
							countprice+=parseInt(val["mprice"]||val["sprice"]);
						});
					}			
				}				
			}
		});
	}else if(omid!=null){
		dwa={"omid":omid};
		function returnDateAndInOutNum(data){
			var sDate="3000-1-1",eDate="1700-1-1",rI=0,rO=0,rCI=0,rCO=0,countprice=0,info={},str="";
			for(var attr in data.data){
				if(attr!="ordersingle" && attr!="rate")continue;
				$(data.data[attr]).each(function (key,val){
					if(attr=="rate" && new Date(val["startDate"]).getTime()<new Date(sDate).getTime())sDate=val["startDate"];
					if(attr=="rate" && new Date(val["endDate"]).getTime()>new Date(eDate).getTime())eDate=val["endDate"];
					attr=="rate"&&(rI+=parseInt(val["inNum"]),rO+=parseInt(val["outNum"]),rCI+=parseInt(val["cinnum"]),rCO+=parseInt(val["coutnum"]));
					countprice+=parseInt(val["mprice"]||val["sprice"]);
					if(attr=="rate"){
						info[val["ratename"]]=info[val["ratename"]]||{};
						info[val["ratename"]]["num"]=++info[val["ratename"]]["num"]||1;
						info[val["ratename"]]["price"]=parseInt(info[val["ratename"]]["price"]||0)+parseInt(val["mprice"]);
					}
				});
			}
			for(var attr in info)str+=attr+"*"+info[attr]["num"]+"="+info[attr]["price"]+",";
			str=str.substr(0,str.lastIndexOf(","));
			return {
				"startDate":sDate,
				"endDate":eDate,
				"ratename":data.data["rate"][0]["ratename"],
				"rateLastInnum":rI,
				"rateLastOutnum":rO || "包月",
				"useInnum":rCI-rI,
				"useOutnum":rCO-rO || "包月",
				"rateincountnum":rCI,
				"rateoutcountnum":rCO || "包月",
				"countprice":countprice,
				"info":str
			}
		}
		
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selDetails",
			dataType:"jsonp",
			data:dwa,		
			success:function(data){	
				console.log(data)
				var res=returnDateAndInOutNum(data);
				var cinnum,inNum,innumsuan,coutnum,outNum,outnumsuan,ratemprice,rateratename;		
				$(".username").html('车主姓名：'+data.data.user.name)
				$(".phonenumer").html('手机号：'+data.data.user.phonenum)
				if(data.data.rate!=null){
					//如果没有单次服务的字段就只显示套餐名称
					if(data.data.ordersingle.length==0){
						$(".dangqianyewu").text(res.ratename+'、');     		//当前业务
					}else{//如果有就套餐，单次一起显示
						var onceille="";
						$.each(data.data.ordersingle,function(index,val){
							onceille+=val.singlename;
						})
						$(".dangqianyewu").text(res.ratename+'、'+onceille);     		//当前业务
					}	
					with(res){
						$(".ratelist").append(ratename+'(开始时间：'+startDate+'&nbsp;&nbsp;&nbsp;&nbsp;到期时间：'+endDate+')');
						var outNum;
						$.each(data.data.rate,function(index,val){
							outNum=val.outNum;
						});
						if(outNum=="包月"){
							cinnum=rateincountnum;       //内饰总次数
							inNum=rateLastInnum;			//内饰剩余次数		
							coutnum=rateoutcountnum;		//外饰总次数
							$(".totalnumin").text(cinnum);
							$(".miminumiin").text(inNum);
							$(".innumsuan").text(useInnum);
							$(".totalnumout,.miminumoutt,.outnumsuan").text('包月');
						}else{		
							cinnum=rateincountnum;       //内饰总次数
							inNum=rateLastInnum;			//内饰剩余次数		
							coutnum=rateoutcountnum;		//外饰总次数
							outNum=rateLastOutnum;		//外饰剩余次数
		//					outnumsuan=useOutnum;			//外饰已用次数
							$(".totalnumin").text(cinnum);
							$(".miminumiin").text(inNum);
							$(".innumsuan").text(useInnum);
							$(".totalnumout").text(coutnum);
							$(".miminumoutt").text(outNum);
							$(".outnumsuan").text(coutnum-outNum);			
						}
						// if(data.data.rate.coutnum=="包月"){
						// 	cinnum=data.data.rate.cinnum;       //内饰总次数
						// 	inNum=data.data.rate.inNum;			//内饰剩余次数
						// 	innumsuan=cinnum-inNum;				//内饰已用次数			
						// 	coutnum=data.data.rate.coutnum;		//外饰总次数
						// 	$(".totalnumin").text(rateincountnum);
						// 	$(".miminumiin").text(inNum);
						// 	$(".innumsuan").text(innumsuan);
						// 	$(".totalnumout,.miminumoutt,.outnumsuan").text(coutnum);
						// }else if(data.data.rate.coutnum!="包月"){			
						// 	cinnum=data.data.rate.cinnum;       //内饰总次数
						// 	inNum=data.data.rate.inNum;			//内饰剩余次数
						// 	innumsuan=cinnum-inNum;				//内饰已用次数			
						// 	coutnum=data.data.rate.coutnum;		//外饰总次数
						// 	outNum=data.data.rate.outNum;		//外饰剩余次数
						// 	outnumsuan=coutnum-outNum;			//外饰已用次数
						// 	$(".totalnumin").text(cinnum);
						// 	$(".miminumiin").text(inNum);
						// 	$(".innumsuan").text(innumsuan);
						// 	$(".totalnumout").text(coutnum);
						// 	$(".miminumoutt").text(outNum);
						// 	$(".outnumsuan").text(outnumsuan);			
						// }
					}							
				}else{
					var singlename,strd='';
					$.each(data.data.ordersingle,function(index,val){
						singlename=val.singlename;
						strd+=singlename+'、';
						$(".dangqianyewu").text(strd);     						//当前业务
					})
					$(".ratelist").append('');
					$(".totalnumin,.miminumiin,.innumsuan,.totalnumout,.miminumoutt,.outnumsuan").text('/');
				}
				//当前业务添加单次服务名称
				if(data.data.ordersingle!=0){												
					$(".xiangmumingcheng").text(data.data.ordersingle.singlename)
				}		
				//单次使用情况		
				if(data.data.ordersingle.length==0){
					$(".yewuqingkuang").after('<tr class="admin_listcontent_xinxitaneirong"><td colspan="2">/</td><td colspan="2">/</td><td colspan="1">/</td><td colspan="2">/</td><td colspan="1">/</td></tr>');
				}else{
					$.each(data.data.ordersingle,function (index,val) {
						$(".yewuqingkuang").after('<tr class="admin_listcontent_xinxitaneirong"><td colspan="2">'+val.singlename+'</td> <td colspan="2">/</td> <td colspan="1">'+val.counts+'</td> <td colspan="2">/</td> <td colspan="1">'+val.enddate+'</td> </tr>');
					});
				}
				
				//判断总金额		
				if(data.data.rate!=null && data.data.price.length==0){
					$(".allpayfored").text('总费用合计 = '+res.countprice+'（元）  其中:包月-'+res.info+'（元）')
				}else if(data.data.rate==null && data.data.price.length!=0){
					var singlename,totalprice,str='';
					$.each(data.data.price,function(index,val){
						singlename=val.singlename;
						totalprice=val.totalprice;
						str+=singlename+"="+totalprice+'元、'
						$(".allpayfored").text(str)
					});				
				}else if(data.data.rate!=null && data.data.price.length!=0){
					var singlename,totalprice,str='';
					$.each(data.data.price,function(index,val){
						singlename=val.singlename;
						totalprice=val.totalprice;
						str+=singlename+"="+totalprice				
					});	
					$(".allpayfored").text('总费用合计 = '+res.countprice+'（元）  其中:包月-'+res.info+'（元）,单次服务='+str);
				}
				//备注
				if(data.data.tip!=null){
					var dd = new Date(); 
					var	m=(dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获得月份 
					var	y=dd.getFullYear(); //获取年(四位)	
					$(".beizhumessage").text(y+'-'+m+'备注：'+data.data.tip);
				}else{
					var dd = new Date(); 
					var	m=(dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获得月份 
					var	y=dd.getFullYear(); //获取年(四位)
					$(".beizhumessage").text(y+'-'+m+'备注：');
				}
		
				if(data.data.logs==""){			
					$(".zongjifeiyong").html('<td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td>');
				}else{
					var str;
					$.each(data.data.logs, function(index,val) {
						str+='<tr class="admin_listcontent_xinxitaneirong zongjifeiyong" ><td>'+val.finishdate+'</td><td>'+val.name+'</td><td>'+val.wname+'</td><td>'+val.carnum+'</td><td>'+val.park+'</td><td>'+val.optype+'</td><td>1</td><td>'+data.data.rate[0].ratename+'</td></tr>'
					});
					$(".zongjifeiyong").after(str)
				}	
			}
		});
	}
	//获取url的id值
	function getUrlParam(name){
			var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
			var r = window.location.search.substr(1).match(reg);  //匹配目标参数
			if (r!=null) return unescape(r[2]); return null; //返回参数值
	} 
})
