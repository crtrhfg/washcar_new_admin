$(function(){
	cityO();	
	var web;
//添加点击事件  改变颜色方便判断   加载数据*********************************************************************************************************************
	$(".dancitaocan_button button").bind('click',function(event){
		$(this).addClass('missadmin_qiehuan').siblings().removeClass('missadmin_qiehuan');		
		web=$(this).attr('web');
		if(web==1){
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
					url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selOrder",
					dataType:"jsonp",
					data:{"page":page},
					success:function(data){
						if(data.status ==1){
							var ctype;
							if(ctype==""){
							    len =Math.ceil(data.len/14);				
							 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
							 	for(var i=0,leng=data.data.length;i<leng;i++){
							 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>不限</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?omid='+data.data[i].omid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
									ctype=data.data[i].ctype;
							 	}
							 	$(".admin_list_list").html(str);
							 	fn&&fn(len);
							}else{
								len =Math.ceil(data.len/14);				
							 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
							 	for(var i=0,leng=data.data.length;i<leng;i++){
							 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?omid='+data.data[i].omid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
							 		ctype=data.data[i].ctype;											
							 	}
							 	$(".admin_list_list").html(str);
							 	fn&&fn(len);
							}	
						}else{
							alert(data.msg)
						}
					}
				});
			}	
		}else if(web==2){
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
					url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selSingle",
					dataType:"jsonp",
					data:{"page":page},
					success:function(data){
						if(data.status ==1){
							var ctype;
							if(ctype==""){
							    len =Math.ceil(data.len/14);				
							 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
							 	for(var i=0,leng=data.data.length;i<leng;i++){
							 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>不限</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?sorderid='+data.data[i].sorderid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
									ctype=data.data[i].ctype;
							 	}
							 	$(".admin_list_list").html(str);
							 	fn&&fn(len);
							}else{
								len =Math.ceil(data.len/14);				
							 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
							 	for(var i=0,leng=data.data.length;i<leng;i++){
							 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?sorderid='+data.data[i].sorderid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
							 		ctype=data.data[i].ctype;											
							 	}
							 	$(".admin_list_list").html(str);
							 	fn&&fn(len);
							}	
						}else{
							alert(data.msg)
						}
					}
				});
			}
		}
		event.stopPropagation();
	});
//通过点击事件添加的颜色判断初始载入时的数据********************************************************************************************************************
	if($(".missadmin_qiehuan").text()=="套餐用户"){		
		fullAdminListy(1,function (count){
			$(".tcdPageCode").createPage({
			    pageCount:count,
			    current:1,
			    backFn:function(p){
			   		fullAdminListy(p)
			    }
			});
		});
		function fullAdminListy(page,fn){
			!page&&(page=1);
			$.ajax({
				url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selOrder",
				dataType:"jsonp",
				data:{"page":page},
				success:function(data){
					if(data.status ==1){
						var ctype;
						if(ctype==""){
						    len =Math.ceil(data.len/14);				
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>不限</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?omid='+data.data[i].omid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
								ctype=data.data[i].ctype;
						 	}
						 	$(".admin_list_list").html(str);
						 	fn&&fn(len);
						}else{
							len =Math.ceil(data.len/14);				
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?omid='+data.data[i].omid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
						 		ctype=data.data[i].ctype;											
						 	}
						 	$(".admin_list_list").html(str);
						 	fn&&fn(len);
						}	
					}else{
						alert(data.msg)
					}
				}
			});
		}		
	}else if($(".missadmin_qiehuan").text()=="单次用户"){
		fullAdminListrz(1,function (count){
			$(".tcdPageCode").createPage({
		      pageCount:count,
		      current:1,
		      backFn:function(p){
		      	fullAdminListrz(p)
		      }
			});
		});
		function fullAdminListrz(page,fn){
			!page&&(page=1);
			$.ajax({
				url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selSingle",
				dataType:"jsonp",
				data:{"page":page},
				success:function(data){
					if(data.status ==1){
						var ctype;
						if(ctype==""){
						    len =Math.ceil(data.len/14);				
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>不限</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?sorderid='+data.data[i].sorderid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
								ctype=data.data[i].ctype;
						 	}
						 	$(".admin_list_list").html(str);
						 	fn&&fn(len);
						}else{
							len =Math.ceil(data.len/14);				
						 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?sorderid='+data.data[i].sorderid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
						 		ctype=data.data[i].ctype;											
						 	}
						 	$(".admin_list_list").html(str);
						 	fn&&fn(len);
						}	
					}else{
						alert(data.msg)
					}
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
					if($(".missadmin_qiehuan").text()=="套餐用户"){	
						fullAdminListx(1,function (count){
							$(".tcdPageCode").createPage({
						      pageCount:count,
						      current:1,
						      backFn:function(p){
						      	fullAdminListx(p)
						      }
							});
						});
						function fullAdminListx(page,fn){
							!page&&(page=1);
							$.ajax({
								url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selVillageRateList",
								dataType:"jsonp",
								data:{"vid":vid,"page":page,"web":1},
								success:function(data){  		
									console.log(data)
									if(data.status == 1){									
									    len=Math.ceil(data.len/14);
										var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
									 	for(var i=0,leng=data.data.length;i<leng;i++){
									 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?omid='+data.data[i].omid+'">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
										}
									 	$(".admin_list_list").html(str);
									 	fn&&fn(len);
									}else{
									 	alert(data.msg);
									}								
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
								type:"get",
								url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selVillageSingleList",
								dataType:"jsonp", 
								data:{"vid":vid,"page":page,"web":2},
								success:function(data){  	
									if(data.status == 1){									
									    len=Math.ceil(data.len/14);
										var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
									 	for(var i=0,leng=data.data.length;i<leng;i++){
									 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="xiangqing_color" ><a href="admin_once_message.html?sorderid='+data.data[i].sorderid+'">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
										}
									 	$(".admin_list_list").html(str);
									 	fn&&fn(len);
									}else{
									 	alert(data.msg);										
									}								
								}
							});
						}
					}
				}
			}
		})
		//三级联动点击按钮切换内容************************************************************************************
		$(".dancitaocan_button button").bind('click',function(ev){
			web=$(this).attr('web');
			if(web==1){							
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
						url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selVillageRateList",
						dataType:"jsonp",
						data:{"vid":vid,"page":page,"web":1},
						success:function(data){  		
							console.log(data)
							if(data.status == 1){									
							    len=Math.ceil(data.len/14);
								var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
							 	for(var i=0,leng=data.data.length;i<leng;i++){
							 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?omid='+data.data[i].omid+'">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
								}
							 	$(".admin_list_list").html(str);
							 	fn&&fn(len);
							}else{
							 	alert(data.msg);
							}								
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
					!page&&(page=1);
					$.ajax({
						type:"get",
						url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selVillageSingleList",
						dataType:"jsonp", 
						data:{"vid":vid,"page":page,"web":2},
						success:function(data){  	
							if(data.status == 1){									
							    len=Math.ceil(data.len/14);
								var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
							 	for(var i=0,leng=data.data.length;i<leng;i++){
							 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="xiangqing_color" ><a href="admin_once_message.html?sorderid='+data.data[i].sorderid+'">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
								}
							 	$(".admin_list_list").html(str);
							 	fn&&fn(len);
							}else{
							 	alert(data.msg);										
							}								
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
		if($(".missadmin_qiehuan").text()=="套餐用户"){
			fullAdminListn(1,function (count){
				$(".tcdPageCode").createPage({
				  pageCount:count,
				  current:1,
				  backFn:function(p){
					fullAdminListn(p)
				  }
				});
			});
			function fullAdminListn(page,fn){
			!page&&(page=1);
				$.ajax({
					url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selRatesingleList",
					type:"get",                                        
					dataType:"jsonp", 
					data:{"keyword":keyword,"web":1},
					success:function(data){  			
						console.log(data)
						if(data.status == 1){
						    len =Math.ceil(data.len/14);
							var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?omid='+data.data[i].omid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
						 		ctype=data.data[i].ctype;
						 	}
						 	$(".admin_list_list").html(str);
						 	fn&&fn(len);
						}else{
							alert("对不起，没有找到相关数据！");
						}
					}
				});
			}
		}else if($(".missadmin_qiehuan").text()=="单次用户"){
			fullAdminListm(1,function (count){
				$(".tcdPageCode").createPage({
				  pageCount:count,
				  current:1,
				  backFn:function(p){
					fullAdminListm(p)
				  }
				});
			});
			function fullAdminListm(page,fn){
			!page&&(page=1);
				$.ajax({
					url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selRatesingleList",
					type:"get",                                        
					dataType:"jsonp", 
					data:{"keyword":keyword,"web":2},
					success:function(data){  		
						console.log(data)
						if(data.status == 1){
						    len =Math.ceil(data.len/14);
							var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
						 	for(var i=0,leng=data.data.length;i<leng;i++){
						 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?sorderid='+data.data[i].sorderid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
						 		ctype=data.data[i].ctype;
						 	}
						 	$(".admin_list_list").html(str);
						 	fn&&fn(len);
						}else{
							alert("对不起，没有找到相关数据！");
						}
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

////顶部筛选选择
//function hheng(){ 
//	var province = $('.city_numO option:selected').text();	
//	var city = $('.city_numT option:selected').text();	
//	var county = $('.city_numF option:selected').text();	
//	var building = $('.city_numS option:selected').text();	
//	fullAdminList(1,function (count){
//		$(".tcdPageCode").createPage({
//	      pageCount:count,
//	      current:1,
//	      backFn:function(p){
//	      	fullAdminList(p)
//	      }
//		});
//	});	
//	function fullAdminList(page,fn){
//		!page&&(page=1);
//		$.ajax({                                                 
//			url:"http://www.nbinbi.com/waterObj/index.php/Home/Common/reVillage",
//			type:"get",                                        
//			dataType:"jsonp", 
//			data:{"province":province,"city":city,"county":county,"building":building},
//			success:function(data){  
//				if(data.status==1){
//					vid=data.data;
//					console.log(vid)					
//					$.ajax({
//						type:"get",
//						url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selVillageRateList",
//						dataType:"jsonp", 
//						data:{"vid":vid,"page":page,"web":1},
//						success:function(data){  		
//							console.log(data)
//							if(data.status == 1){									
//							    len =Math.ceil(data.len/14);
//								var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
//							 	for(var i=0,leng=data.data.length;i<leng;i++){
//							 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?omid='+data.data[i].omid+'">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a></td></tr>';
//								}
//							 	$(".admin_list_list").html(str);
//							 	fn&&fn(len);
//							}else{
//							 	alert(data.msg);
//							}								
//						}
//					});											
//				}
//			}
//		})
//	}		
//};





