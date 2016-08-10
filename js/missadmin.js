$(function(){
	cityO();	
	var web;
	//添加点击事件  改变颜色方便判断   加载数据*********************************************************************************************************************
	$(".dancitaocan_button button").bind('click',function(event){
		$(this).addClass('missadmin_qiehuan').siblings().removeClass('missadmin_qiehuan');		
		web=$(this).attr('web');
		if(web==1){
			//点击失效加载页面*******************************************************************************************
			fullAdminList(1,function (count){
				$(".tcdPageCode").createPage({
			      pageCount:count,
			      current:1,
			      backFn:function(p){
			      	fullAdminList(p)
			      }
				});
			});
			function fullAdminList(page,fn){
				!page&&(page=1);
				$.ajax({
					url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/reUser",
					dataType:"jsonp",
					data:{"page":page},
					success:function(data){
						if(data.status ==1){
						    len =Math.ceil(data.len/14);				
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
						 	var strhead=""; //固定头部文字
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+'</td><td>'+
						 		data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">失效用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html?omid='+data.data[i].omid+'"><button>回访</button></a><a href="admin_add.html?omid='+data.data[i].omid+'"><button>续费</button></a><a href="missadmin_message.html?uid='+data.data[i].uid+'"><button>查看详情</button></a></div></td></tr>';
						 	
						 	$(".missadmin_content").html(str);
						 	fn&&fn(len);
							}							
						}else{
							len =Math.ceil(data.len/14);
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td class="trymiss_qiehuan">/</td><td>/</td></tr>';
						 	}
						 	$(".missadmin_content").html(str);
						 	fn&&fn(len);
						 	alert(data.msg);
						}	
						$("tr:even").css("background-color","#F2F2F3");
					}
				});
			}
		}else if(web==2){
			//点击单次用户加载列表************************************************************************************************************************
			fullAdminListc(1,function (count){
				$(".tcdPageCode").createPage({
			      pageCount:count,
			      current:1,
			      backFn:function(p){
			      	fullAdminListc(p)
			      }
				});
			});
			function fullAdminListc(page,fn){
				!page&&(page=1);
				$.ajax({
					url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selLoseSingle",
					dataType:"jsonp",
					data:{"page":page},
					success:function(data){
						if(data.status ==1){
						   len =Math.ceil(data.len/14);
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+
						 		'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">单次用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html?omid='+data.data[i].omid+'"><button>回访</button></a><a href="admin_add.html?omid='+data.data[i].omid+'"><button>续费</button></a><a href="missadmin_message.html?sorderid='+data.data[i].sorderid+'"><button>查看详情</button></a></div></td></tr>';
						 	}
						 	$(".missadmin_content").html(str);
						 	fn&&fn(len);
						}else{
							len =Math.ceil(data.len/14);
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td class="trymiss_qiehuan">/</td><td>/</td></tr>';
						 	}
						 	$(".missadmin_content").html(str);
						 	fn&&fn(len);
						 	alert(data.msg);
						}	
						$("tr:even").css("background-color","#F2F2F3");							
					}
				});
			}
		}else if(web==3){
			//点击体验用户加载列表************************************************************************************************************************
			fullAdminListh(1,function (count){
				$(".tcdPageCode").createPage({
			      pageCount:count,
			      current:1,
			      backFn:function(p){
			      	fullAdminListh(p)
			      }
				});
			});
			function fullAdminListh(page,fn){
				!page&&(page=1);
				$.ajax({
					url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/reSupmess",
					dataType:"jsonp",
					data:{"page":page},
					success:function(data){
						if(data.status ==1){
						   len =Math.ceil(data.len/14);
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+
						 		'</td><td>'+data.data[i].phone+'</td><td>'+data.data[i].cartype+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">体验用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html?omid='+data.data[i].omid+'"><button>回访</button></a><a href="admin_add.html?omid='+data.data[i].omid+'"><button>续费</button></a></div></td></tr>';
						 	}
						 	$(".missadmin_content").html(str);
						 	fn&&fn(len);
						}else{
							len =Math.ceil(data.len/14);
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td class="trymiss_qiehuan">/</td><td>/</td></tr>';
						 	}
						 	$(".missadmin_content").html(str);
						 	fn&&fn(len);
						 	alert(data.msg);
						}	
						$("tr:even").css("background-color","#F2F2F3");							
					}
				});
			}
		}
		event.stopPropagation();
	});
	
	
	//通过点击事件添加的颜色判断初始载入时的数据********************************************************************************************************************
	if($(".missadmin_qiehuan").text()=="失效用户"){		
		fullAdminList(1,function(count){
			$(".tcdPageCode").createPage({
		      pageCount:count,
		      current:1,
		      backFn:function(p){
		      	fullAdminList(p)
		      }
			});
		});
		function fullAdminList(page,fn){
			!page&&(page=1);
			$.ajax({
				url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/reUser",
				dataType:"jsonp",
				data:{"page":page},
				success:function(data){
					if(data.status ==1){
					    len =Math.ceil(data.len/14);				
					 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
					 	var strhead=""; //固定头部文字
					 	for(var i=0,leng=data.data.length;i<leng;i++){
					 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+'</td><td>'+
					 		data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">失效用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html?omid='+data.data[i].omid+'"><button>回访</button></a><a href="admin_add.html?omid='+data.data[i].omid+'"><button>续费</button></a><a href="missadmin_message.html?uid='+data.data[i].uid+'"><button>查看详情</button></a></div></td></tr>';
					 	
					 	$(".missadmin_content").html(str);
					 	fn&&fn(len);
						}							
					}else{
						len =Math.ceil(data.len/14);
					 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
					 	for(var i=0,leng=data.data.length;i<leng;i++){
					 		str+='<tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td class="trymiss_qiehuan">/</td><td>/</td></tr>';
					 	}
					 	$(".missadmin_content").html(str);
					 	fn&&fn(len);
					 	alert(data.msg);
					}	
					$("tr:even").css("background-color","#F2F2F3");
				}
			});
		}	
	}else if($(".missadmin_qiehuan").text()=="单次用户"){
		fullAdminListc(1,function (count){
			$(".tcdPageCode").createPage({
		      pageCount:count,
		      current:1,
		      backFn:function(p){
		      	fullAdminListc(p)
		      }
			});
		});
		function fullAdminListc(page,fn){
			!page&&(page=1);
			$.ajax({
				url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selLoseSingle",
				dataType:"jsonp",
				data:{"page":page},
				success:function(data){
					if(data.status ==1){
					   len =Math.ceil(data.len/14);
					 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
					 	for(var i=0,leng=data.data.length;i<leng;i++){
					 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+
					 		'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">单次用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html?omid='+data.data[i].omid+'"><button>回访</button></a><a href="admin_add.html?omid='+data.data[i].omid+'"><button>续费</button></a><a href="missadmin_message.html?sorderid='+data.data[i].sorderid+'"><button>查看详情</button></a></div></td></tr>';
					 	}
					 	$(".missadmin_content").html(str);
					 	fn&&fn(len);
					}else{
						len =Math.ceil(data.len/14);
					 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
					 	for(var i=0,leng=data.data.length;i<leng;i++){
					 		str+='<tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td class="trymiss_qiehuan">/</td><td>/</td></tr>';
					 	}
					 	$(".missadmin_content").html(str);
					 	fn&&fn(len);
					 	alert(data.msg);
					}	
					$("tr:even").css("background-color","#F2F2F3");							
				}
			});
		}
	}else if($(".missadmin_qiehuan").text()=="体验用户"){
		fullAdminListh(1,function (count){
			$(".tcdPageCode").createPage({
		      pageCount:count,
		      current:1,
		      backFn:function(p){
		      	fullAdminListh(p)
		      }
			});
		});
		function fullAdminListh(page,fn){
			!page&&(page=1);
			$.ajax({
				url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/reSupmess",
				dataType:"jsonp",
				data:{"page":page},
				success:function(data){
					if(data.status ==1){
					   len =Math.ceil(data.len/14);
					 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
					 	for(var i=0,leng=data.data.length;i<leng;i++){
					 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+
					 		'</td><td>'+data.data[i].phone+'</td><td>'+data.data[i].cartype+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">体验用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html?omid='+data.data[i].omid+'"><button>回访</button></a><a href="admin_add.html?omid='+data.data[i].omid+'"><button>续费</button></a></div></td></tr>';
					 	}
					 	$(".missadmin_content").html(str);
					 	fn&&fn(len);
					}else{
						len =Math.ceil(data.len/14);
					 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
					 	for(var i=0,leng=data.data.length;i<leng;i++){
					 		str+='<tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td class="trymiss_qiehuan">/</td><td>/</td></tr>';
					 	}
					 	$(".missadmin_content").html(str);
					 	fn&&fn(len);
					 	alert(data.msg);
					}			
					$("tr:even").css("background-color","#F2F2F3");					
				}
			});
		}
	}
	//三级联动查询*****************************************************************************************************************************
		var vid;
	$(".city_numS").bind('change',function(dw){
		var province = $('.city_numO option:selected').text();	
		var city = $('.city_numT option:selected').text();	
		var county = $('.city_numF option:selected').text();	
		var building = $('.city_numS option:selected').text();
		$.ajax({                                                 
			url:"http://www.nbinbi.com/waterObj/index.php/Home/Common/reVillage",
			type:"get",                                        
			dataType:"jsonp", 
			data:{"province":province,"city":city,"county":county,"building":building},
			success:function(data){  
				if(data.status==1){
					vid=data.data;		
					if($(".missadmin_qiehuan").text()=="失效用户"){	
						fullAdminLists(1,function (count){
							$(".tcdPageCode").createPage({
						      pageCount:count,
						      current:1,
						      backFn:function(p){
						      	fullAdminLists(p)
						      }
							});
						});
						function fullAdminLists(page,fn){
					 		$.ajax({
								type:"get",
								url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selOrdermonthList",
								dataType:"jsonp", 
								data:{"vid":vid,"page":page},
								success:function(data){  
									if(data.status == 1){
									    len =Math.ceil(data.len/14);				
									 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
									 	var strhead=""; //固定头部文字
									 	for(var i=0,leng=data.data.length;i<leng;i++){
									 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+
									 		'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td>'+data.data[i].carnum+
									 		'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">失效用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html"><button>回访</button></a><a href="admin_add.html"><button>续费</button></a><a href="missadmin_message.html?uid='+data.data[i].uid+'"><button>查看详情</button></a></div></td></tr>';
									 	}
									 	$(".missadmin_content").html(str);
									 	fn&&fn(len);
									}else{
										len =Math.ceil(data.len/14);
										$(".missadmin_content").html('<tr><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>');
									 	fn&&fn(len);
									 	alert(data.msg);
									}
									$("tr:even").css("background-color","#F2F2F3");
								}
							});	
						}
					}else if($(".missadmin_qiehuan").text()=="单次用户"){
						fullAdminListb(1,function (count){
							$(".tcdPageCode").createPage({
						      pageCount:count,
						      current:1,
						      backFn:function(p){
						      	fullAdminListb(p)
						      }
							});
						});
						function fullAdminListb(page,fn){
					 		$.ajax({
								type:"get",
								url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selLoseVillageSingleList",
								dataType:"jsonp", 
								data:{"vid":vid,"page":page},
								success:function(data){  
									if(data.status == 1){
									    len =Math.ceil(data.len/14);				
									 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
									 	var strhead=""; //固定头部文字
									 	for(var i=0,leng=data.data.length;i<leng;i++){
									 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+
									 		'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">单次用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html"><button>回访</button></a><a href="admin_add.html"><button>续费</button></a><a href="missadmin_message.html?sorderid='+data.data[i].sorderid+'"><button class="missmessage">查看详情</button></a></div></td></tr>';
									 	}
									 	$(".missadmin_content").html(str);
									 	fn&&fn(len);
									}else{
										len =Math.ceil(data.len/14);
										$(".missadmin_content").html('<tr><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td>	</tr>');
									 	fn&&fn(len);
									 	alert(data.msg);
									}
									$("tr:even").css("background-color","#F2F2F3");
								}
							});	
						}
					}else if($(".missadmin_qiehuan").text()=="体验用户"){
				 		fullAdminListi(1,function (count){
							$(".tcdPageCode").createPage({
						      pageCount:count,
						      current:1,
						      backFn:function(p){
						      	fullAdminListi(p)
						      }
							});
						});
						function fullAdminListi(page,fn){
					 		$.ajax({
								type:"get",
								url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selSupmessList",
								dataType:"jsonp", 
								data:{"vid":vid,"page":page},
								success:function(data){  
									 var cartype;
									if(data.status == 1){
										if(cartype!=""){
											len =Math.ceil(data.len/14);				
										 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
										 	var strhead=""; //固定头部文字
										 	for(var i=0,leng=data.data.length;i<leng;i++){
										 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+
										 		'</td><td>'+data.data[i].phone+'</td><td>'+data.data[i].cartype+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">体验用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html"><button>回访</button></a><a href="admin_add.html"><button>续费</button></a></div></td></tr>';
										 		cartype=data.data[i].cartype;
										 	}
										 	$(".missadmin_content").html(str);
										 	fn&&fn(len);
										}else{
											len =Math.ceil(data.len/14);				
										 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
										 	var strhead=""; //固定头部文字
										 	for(var i=0,leng=data.data.length;i<leng;i++){
										 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+
										 		'</td><td>'+data.data[i].phone+'</td><td></td><td></td><td></td><td class="trymiss_qiehuan">体验用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html"><button>回访</button></a><a href="admin_add.html"><button>续费</button></a></div></td></tr>';
										 		cartype=data.data[i].cartype;
										 	}
										 	$(".missadmin_content").html(str);
										 	fn&&fn(len);
										}									   
									}else{
										len =Math.ceil(data.len/14);
										$(".missadmin_content").html('<tr><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td>	</tr>');
									 	fn&&fn(len);
									 	alert(data.msg);
									}
									$("tr:even").css("background-color","#F2F2F3");
								}
							});	
						}
					}
				}else{
					alert(data.msg)
				}
			}
		})
		//三级联动点击按钮切换内容************************************************************************************
		$(".dancitaocan_button button").bind('click',function(ev){
			web=$(this).attr('web');
			if(web==1){							
				fullAdminLists(1,function (count){
					$(".tcdPageCode").createPage({
				      pageCount:count,
				      current:1,
				      backFn:function(p){
				      	fullAdminLists(p)
				      }
					});
				});
				function fullAdminLists(page,fn){
			 		$.ajax({
						type:"get",
						url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selOrdermonthList",
						dataType:"jsonp", 
						data:{"vid":vid,"page":page},
						success:function(data){  
							if(data.status == 1){
							    len =Math.ceil(data.len/14);				
							 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
							 	var strhead=""; //固定头部文字
							 	for(var i=0,leng=data.data.length;i<leng;i++){
							 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+
							 		'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td>'+data.data[i].carnum+
							 		'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">失效用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html"><button>回访</button></a><a href="admin_add.html"><button>续费</button></a><a href="missadmin_message.html?uid='+data.data[i].uid+'"><button>查看详情</button></a></div></td></tr>';
							 	}
							 	$(".missadmin_content").html(str);
							 	fn&&fn(len);
							}else{
								len =Math.ceil(data.len/14);
								$(".missadmin_content").html('<tr><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>');
							 	fn&&fn(len);
							 	alert(data.msg);
							}
							$("tr:even").css("background-color","#F2F2F3");
						}
					});	
				}							
			}else if(web==2){
				fullAdminListb(1,function (count){
					$(".tcdPageCode").createPage({
				      pageCount:count,
				      current:1,
				      backFn:function(p){
				      	fullAdminListb(p)
				      }
					});
				});
				function fullAdminListb(page,fn){
			 		$.ajax({
						type:"get",
						url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selLoseVillageSingleList",
						dataType:"jsonp", 
						data:{"vid":vid,"page":page},
						success:function(data){  
							if(data.status == 1){
							    len =Math.ceil(data.len/14);				
							 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
							 	var strhead=""; //固定头部文字
							 	for(var i=0,leng=data.data.length;i<leng;i++){
							 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+
							 		'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">单次用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html"><button>回访</button></a><a href="admin_add.html"><button>续费</button></a><a href="missadmin_message.html?sorderid='+data.data[i].sorderid+'"><button class="missmessage">查看详情</button></a></div></td></tr>';
							 	}
							 	$(".missadmin_content").html(str);
							 	fn&&fn(len);
							}else{
								len =Math.ceil(data.len/14);
								$(".missadmin_content").html('<tr><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td>	</tr>');
							 	fn&&fn(len);
							 	alert(data.msg);
							}
							$("tr:even").css("background-color","#F2F2F3");
						}
					});	
				}
			}else if(web==3){
				fullAdminListi(1,function (count){
					$(".tcdPageCode").createPage({
				      pageCount:count,
				      current:1,
				      backFn:function(p){
				      	fullAdminListi(p)
				      }
					});
				});
				function fullAdminListi(page,fn){
			 		$.ajax({
						type:"get",
						url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selSupmessList",
						dataType:"jsonp", 
						data:{"vid":vid,"page":page},
						success:function(data){  
							 var cartype;
							if(data.status == 1){
								if(cartype!=""){
									len =Math.ceil(data.len/14);				
								 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
								 	var strhead=""; //固定头部文字
								 	for(var i=0,leng=data.data.length;i<leng;i++){
								 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+
								 		'</td><td>'+data.data[i].phone+'</td><td>'+data.data[i].cartype+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">体验用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html"><button>回访</button></a><a href="admin_add.html"><button>续费</button></a></div></td></tr>';
								 		cartype=data.data[i].cartype;
								 	}
								 	$(".missadmin_content").html(str);
								 	fn&&fn(len);
								}else{
									len =Math.ceil(data.len/14);				
								 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
								 	var strhead=""; //固定头部文字
								 	for(var i=0,leng=data.data.length;i<leng;i++){
								 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+
								 		'</td><td>'+data.data[i].phone+'</td><td></td><td></td><td></td><td class="trymiss_qiehuan">体验用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html"><button>回访</button></a><a href="admin_add.html"><button>续费</button></a></div></td></tr>';
								 		cartype=data.data[i].cartype;
								 	}
								 	$(".missadmin_content").html(str);
								 	fn&&fn(len);
								}									   
							}else{
								len =Math.ceil(data.len/14);
								$(".missadmin_content").html('<tr><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>');
							 	fn&&fn(len);
							 	alert(data.msg);
							}
							$("tr:even").css("background-color","#F2F2F3");
						}
					});	
				}
			}
			ev.stopPropagation();
		});	
		dw.stopPropagation();
	});	
	
	
	//查询关键字*************************************************************************************************************************************************
	$(".guanjianzi_chaxun_but").bind('click',function(dd){
		var keyword =$(".guanjianzi_chaxun").val();		
		if($(".missadmin_qiehuan").text()=="失效用户"){
			fullAdminListd(1,function (count){
				$(".tcdPageCode").createPage({
			      pageCount:count,
			      current:1,
			      backFn:function(p){
			      	fullAdminListd(p)
			      }
				});
			});
			function fullAdminListd(page,fn){
				!page&&(page=1);
				$.ajax({
					url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/keywordUser",
					type:"get",                                        
					dataType:"jsonp", 
					data:{"keyword":keyword},
					success:function(data){  
						if(data.status ==1){
						    len =Math.ceil(data.len/14);				
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
						 	var strhead=""; //固定头部文字
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+'</td><td>'+
						 		data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">失效用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html?omid='+data.data[i].omid+'"><button>回访</button></a><a href="admin_add.html?omid='+data.data[i].omid+'"><button>续费</button></a><a href="missadmin_message.html?uid='+data.data[i].uid+'"><button>查看详情</button></a></div></td></tr>';
						 	
						 	$(".missadmin_content").html(str);
						 	fn&&fn(len);
							}	
						}else{
							len =Math.ceil(data.len/14);
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td class="trymiss_qiehuan">/</td><td>/</td></tr>';
						 	}
						 	$(".missadmin_content").html(str);
						 	fn&&fn(len);
						 	alert(data.msg);
						}	
						$("tr:even").css("background-color","#F2F2F3");
					}
				}); 
			}
		}else if($(".missadmin_qiehuan").text()=="单次用户"){
			fullAdminListv(1,function (count){
				$(".tcdPageCode").createPage({
			      pageCount:count,
			      current:1,
			      backFn:function(p){
			      	fullAdminListv(p)
			      }
				});
			});
			function fullAdminListv(page,fn){
				!page&&(page=1);
				$.ajax({
					url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selLoseKeywordSingleList",
					type:"get",                                        
					dataType:"jsonp", 
					data:{"keyword":keyword},
					success:function(data){  
						if(data.status ==1){
						    len =Math.ceil(data.len/14);				
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
						 	var strhead=""; //固定头部文字
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+
						 		'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">单次用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html?omid='+data.data[i].omid+'"><button>回访</button></a><a href="admin_add.html?omid='+data.data[i].omid+'"><button>续费</button></a><a href="missadmin_message.html?sorderid='+data.data[i].sorderid+'"><button>查看详情</button></a></div></td></tr>';
						 	}
						 	$(".missadmin_content").html(str);
						 	fn&&fn(len);
						}else{
							len =Math.ceil(data.len/14);
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td class="trymiss_qiehuan">/</td><td>/</td></tr>';
						 	}
						 	$(".missadmin_content").html(str);
						 	fn&&fn(len);
						 	alert(data.msg);
						}	
						$("tr:even").css("background-color","#F2F2F3");
					}
				}); 
			}
		}else if($(".missadmin_qiehuan").text()=="体验用户"){
			fullAdminListu(1,function (count){
				$(".tcdPageCode").createPage({
			      pageCount:count,
			      current:1,
			      backFn:function(p){
			      	fullAdminListu(p)
			      }
				});
			});
			function fullAdminListu(page,fn){
				!page&&(page=1);
				$.ajax({
					url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/keywordStatusSup",
					type:"get",                                        
					dataType:"jsonp", 
					data:{"keyword":keyword},
					success:function(data){  
						if(data.status ==1){
						    len =Math.ceil(data.len/14);				
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
						 	var strhead=""; //固定头部文字
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+
						 		'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td class="trymiss_qiehuan">体验用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html?omid='+data.data[i].omid+'"><button>回访</button></a><a href="admin_add.html?omid='+data.data[i].omid+'"><button>续费</button></a></div></td></tr>';
						 	}
						 	$(".missadmin_content").html(str);
						 	fn&&fn(len);
						}else{
							len =Math.ceil(data.len/14);
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>车牌号</td><td>车位</td><td>用户类型</td><td>操作</td></tr>';
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td class="trymiss_qiehuan">/</td><td>/</td></tr>';
						 	}
						 	$(".missadmin_content").html(str);
						 	fn&&fn(len);
						 	alert(data.msg);
						}	
						$("tr:even").css("background-color","#F2F2F3");
					}
				}); 
			}
		}
		dd.stopPropagation();
	});		
})
//省份选择
function cityO(val){
	$.ajax({                                                 
		url:"http://www.nbinbi.com/waterObj/index.php/Home/Common/reProvince",                                   
		type:"get",                                        
		dataType:"jsonp", 
		success:function(data){
			if(data.status==1){
				$.each(data.data, function (index,val) {						
					$(".city_numO").append('<option>'+val.province+'</option>');
				});
			}
		}
	})    
}
//城市选择
function sheng(val){ 
	$.ajax({                                                 
		url:"http://www.nbinbi.com/waterObj/index.php/Home/Common/reVillage",                                   
		type:"get",                                        
		dataType:"jsonp", 
		data:{"province":val},
		success:function(data){  
			if(data.status==1){
				$(".city_numT").find('.select').remove();
				$.each(data.data, function (index,val) {							
						$(".city_numT").append('<option class="select">'+val.city+'</option>');
				});
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
			if(data.status==1){
				$(".city_numF").find('.select').remove();
				$.each(data.data, function (index,val) {							
						$(".city_numF").append('<option class="select">'+val.county+'</option>');
				});
			}
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
			if(data.status==1){
				$(".city_numS").find('.select').remove();
				$.each(data.data, function (index,val) {							
						$(".city_numS").append('<option class="select">'+val.building+'</option>');
				});
			}
		}
	})   		
};

function getText(){
	alert($('.city_numO option:selected').text())
}
