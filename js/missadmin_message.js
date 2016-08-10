$(function(){
	var uid = getUrlParam('uid');
	var sorderid=getUrlParam('sorderid');
	if(uid!=null){
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/reLoseUser",
			dataType:"jsonp",
			data:{"uid":uid},			
			success:function(data){	
				var cinnum,inNum,innumsuan,coutnum,outNum,outnumsuan,ratemprice,rateratename;

				$(".username").html('车主姓名：'+data.data.user.name)
				$(".phonenumer").html('手机号：'+data.data.user.phonenum)
				if(data.data.rate!=null){
					//如果没有单次服务的字段就只显示套餐名称
					if(data.data.ordersingle.length==0){
						$(".dangqianyewu").text(data.data.rate.ratename+'、');     		//当前业务
					}else{//如果有就套餐，单次一起显示
						var onceille="";
						$.each(data.data.ordersingle,function(index,val){
							onceille+=val.singlename;
						})
						$(".dangqianyewu").text(data.data.rate.ratename+'、'+onceille);     		//当前业务
					}			
					$(".ratelist").append(data.data.rate.ratename+'(开始时间：'+data.data.rate.startDate+'&nbsp;&nbsp;&nbsp;&nbsp;到期时间：'+data.data.rate.endDate+')');
					if(data.data.rate.coutnum=="包月"){
						cinnum=data.data.rate.cinnum;       //内饰总次数
						inNum=data.data.rate.inNum;			//内饰剩余次数
						innumsuan=cinnum-inNum;				//内饰已用次数			
						coutnum=data.data.rate.coutnum;		//外饰总次数
						$(".totalnumin").text(cinnum);
						$(".miminumiin").text(inNum);
						$(".innumsuan").text(innumsuan);
						$(".totalnumout,.miminumoutt,.outnumsuan").text(coutnum);
					}else if(data.data.rate.coutnum!="包月"){			
						cinnum=data.data.rate.cinnum;       //内饰总次数
						inNum=data.data.rate.inNum;			//内饰剩余次数
						innumsuan=cinnum-inNum;				//内饰已用次数			
						coutnum=data.data.rate.coutnum;		//外饰总次数
						outNum=data.data.rate.outNum;		//外饰剩余次数
						outnumsuan=coutnum-outNum;			//外饰已用次数
						$(".totalnumin").text(cinnum);
						$(".miminumiin").text(inNum);
						$(".innumsuan").text(innumsuan);
						$(".totalnumout").text(coutnum);
						$(".miminumoutt").text(outNum);
						$(".outnumsuan").text(outnumsuan);			
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
					$(".allpayfored").text('总费用合计 = '+data.data.rate.mprice+'（元）  其中:包月-'+data.data.rate.ratename+'='+data.data.rate.mprice+'（元）')
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
					$(".allpayfored").text('总费用合计 = '+data.data.rate.mprice+'（元）  其中:包月-'+data.data.rate.ratename+'='+data.data.rate.mprice+'（元）,'+str);
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
				
				if(data.data.logs.length!=0){
					var yewuqingkuang;
					$.each(data.data.logs,function(index,val){
						yewuqingkuang+='<tr><td>'+val.finishdate+'</td><td>'+val.name+'</td><td>'+val.wname+'</td><td>'+val.carnum+'</td><td>'+val.park+'</td><td>'+val.optype+'</td><td>1</td><td>'+val.price+'</td></tr>';
					});
					$(".zongjifeiyong").after(yewuqingkuang);
				}else{
					$(".zongjifeiyong").after('<tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td></tr>');
				}
			}
		});
	}else if(sorderid!=null){
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selLoseDetails",
			dataType:"jsonp",
			data:{"sOrderId":sorderid},			
			success:function(data){	
				var cinnum,inNum,innumsuan,coutnum,outNum,outnumsuan,ratemprice,rateratename;

				$(".username").html('车主姓名：'+data.data.user.name)
				$(".phonenumer").html('手机号：'+data.data.user.phonenum)
				if(data.data.rate!=null){
					//如果没有单次服务的字段就只显示套餐名称
					if(data.data.ordersingle.length==0){
						$(".dangqianyewu").text(data.data.rate.ratename+'、');     		//当前业务
					}else{//如果有就套餐，单次一起显示
						var onceille="";
						$.each(data.data.ordersingle,function(index,val){
							onceille+=val.singlename;
						})
						$(".dangqianyewu").text(data.data.rate.ratename+'、'+onceille);     		//当前业务
					}			
					$(".ratelist").append(data.data.rate.ratename+'(开始时间：'+data.data.rate.startDate+'&nbsp;&nbsp;&nbsp;&nbsp;到期时间：'+data.data.rate.endDate+')');
					if(data.data.rate.coutnum=="包月"){
						cinnum=data.data.rate.cinnum;       //内饰总次数
						inNum=data.data.rate.inNum;			//内饰剩余次数
						innumsuan=cinnum-inNum;				//内饰已用次数			
						coutnum=data.data.rate.coutnum;		//外饰总次数
						$(".totalnumin").text(cinnum);
						$(".miminumiin").text(inNum);
						$(".innumsuan").text(innumsuan);
						$(".totalnumout,.miminumoutt,.outnumsuan").text(coutnum);
					}else if(data.data.rate.coutnum!="包月"){			
						cinnum=data.data.rate.cinnum;       //内饰总次数
						inNum=data.data.rate.inNum;			//内饰剩余次数
						innumsuan=cinnum-inNum;				//内饰已用次数			
						coutnum=data.data.rate.coutnum;		//外饰总次数
						outNum=data.data.rate.outNum;		//外饰剩余次数
						outnumsuan=coutnum-outNum;			//外饰已用次数
						$(".totalnumin").text(cinnum);
						$(".miminumiin").text(inNum);
						$(".innumsuan").text(innumsuan);
						$(".totalnumout").text(coutnum);
						$(".miminumoutt").text(outNum);
						$(".outnumsuan").text(outnumsuan);			
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
					$(".allpayfored").text('总费用合计 = '+data.data.rate.mprice+'（元）  其中:包月-'+data.data.rate.ratename+'='+data.data.rate.mprice+'（元）')
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
					$(".allpayfored").text('总费用合计 = '+data.data.rate.mprice+'（元）  其中:包月-'+data.data.rate.ratename+'='+data.data.rate.mprice+'（元）,'+str);
				}else if(data.data.rate==null&&data.data.logs.length!=0){
					var optype,price;
					$.each(data.data.logs,function(index,val){
						optype+=val.optype;
						price+=val.price;
						$(".allpayfor").html('<td colspan="8" class="allpayfored" style="text-align: left;">总费用合计：'+val.optype+':'+val.price+'元</td>');
					});
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
				
				if(data.data.logs.length!=0){
					var yewuqingkuang;
					$.each(data.data.logs,function(index,val){
						yewuqingkuang+='<tr><td>'+val.finishdate+'</td><td>'+val.name+'</td><td>'+val.wname+'</td><td>'+val.carnum+'</td><td>'+val.park+'</td><td>'+val.optype+'</td><td>1</td><td>'+val.price+'</td></tr>';
					});
					$(".zongjifeiyong").after(yewuqingkuang);
				}else{
					$(".zongjifeiyong").after('<tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td></tr>');
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
