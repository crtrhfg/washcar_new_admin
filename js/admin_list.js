window.onload=function(){
	//初次加载********************************************************************************************************************
	if($(".missadmin_qiehuan").text()=="套餐用户"){
		fullAdminListy(1,function (count){
			$(".tcdPageCode").createPage({
				pageCount:count,
				current:1,
				backFn:function(p){
					fullAdminListy(p);
				}
			});
		});
	}else if($(".missadmin_qiehuan").text()=="单次用户"){
		fullAdminListrz(1,function (count){
			$(".tcdPageCode").createPage({
			  pageCount:count,
			  current:1,
			  backFn:function(p){
				fullAdminListrz(p);
			  }
			});
		});
	}
	/*套餐列表初始加载*/
	function fullAdminListy(page,fn){
		if(!page){page=1;}
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selOrder",
			dataType:"jsonp",
			data:{"page":page},
			success:function(data){
				if(data.status ==1){
					len =Math.ceil(data.len/14);
					var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>支付类型</td><td>操作</td></tr>';
					for(var i=0,leng=data.data.length;i<leng;i++){
						var ctype=data.data[i].ctype||"不限";
						var paystatue=data.data[i].paystatus;
						if(paystatue==4){
							paystatue='现金支付';
						}else if(paystatue==1){
							paystatue='微信在线支付';
						}
						str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+ctype+'</td><td>'+paystatue+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?omid='+data.data[i].omid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
					}
					$(".admin_list_list").html(str);
					if(fn){fn(len);}
				}else{
					alert(data.msg);
				}
				$("tr:even").css("background-color","#F2F2F3");
			}
		});
	}
	/*单次列表初始加载*/
	function fullAdminListrz(page,fn){
		if(!page){page=1;}
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selSingle",
			dataType:"jsonp",
			data:{"page":page},
			success:function(data){
				if(data.status ==1){
					len =Math.ceil(data.len/14);
					var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>支付类型</td><td>操作</td></tr>';
					for(var i=0,leng=data.data.length;i<leng;i++){
						var ctype=data.data[i].ctype||"不限";
						var paystatue=data.data[i].paystatus;
						if(paystatue==4){
							paystatue='现金支付';
						}else if(paystatue==1){
							paystatue='微信在线支付';
						}
						str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+ctype+'</td><td>'+paystatue+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?sorderid='+data.data[i].sorderid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
					}
					$(".admin_list_list").html(str);
					if(fn){fn(len);}
				}else{
					alert(data.msg);
				}
				$("tr:even").css("background-color","#F2F2F3");
			}
		});
	}
};

$(function(){
	cityO();
	var web;

	//添加点击事件  改变颜色方便判断   加载数据*********************************************************************************************************************
	$(".dancitaocan_button button").bind('click',function(event){
		$(this).addClass('missadmin_qiehuan').siblings().removeClass('missadmin_qiehuan');
		$(".paystatus_se").get(0).options[0].selected = true;
		web=$(this).attr('web');
		if(web==1){
			fullAdminList(1,function (count){
				$(".tcdPageCode").createPage({
			      pageCount:count,
			      current:1,
			      backFn:function(p){
			      	fullAdminList(p);
			      }
				});
			});
		}else if(web==2){
			fullAdminListd(1,function (count){
				$(".tcdPageCode").createPage({
			      pageCount:count,
			      current:1,
			      backFn:function(p){
			      	fullAdminListd(p);
			      }
				});
			});
		}
		/*点击套餐加载*/
		function fullAdminList(page,fn){
			if(!page){page=1;}
			$.ajax({
				url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selOrder",
				dataType:"jsonp",
				data:{"page":page},
				success:function(data){
					if(data.status ==1){
						len =Math.ceil(data.len/14);
						var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>支付类型</td><td>操作</td></tr>';
						for(var i=0,leng=data.data.length;i<leng;i++){
							var ctype=data.data[i].ctype||"不限";
							var paystatue=data.data[i].paystatus;
							if(paystatue==4){
								paystatue='现金支付';
							}else if(paystatue==1){
								paystatue='微信在线支付';
							}
							str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+
								 '</td><td>'+data.data[i].phonenum+'</td><td>'+ctype+'</td><td>'+paystatue+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?omid='+data.data[i].omid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
							ctype=data.data[i].ctype;
						}
						$(".admin_list_list").html(str);
						if(fn){fn(len);}
					}else{
						alert(data.msg);
					}
					$("tr:even").css("background-color","#F2F2F3");
				}
			});
		}
		/*点击单次加载*/
		function fullAdminListd(page,fn){
			if(!page){page=1;}
			$.ajax({
				url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selSingle",
				dataType:"jsonp",
				data:{"page":page},
				success:function(data){
					if(data.status ==1){
						len =Math.ceil(data.len/14);
						var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>支付类型</td><td>操作</td></tr>';
						for(var i=0,leng=data.data.length;i<leng;i++){
							var ctype=data.data[i].ctype||"不限";
							var paystatue=data.data[i].paystatus;
							if(paystatue==4){
								paystatue='现金支付';
							}else if(paystatue==1){
								paystatue='微信在线支付';
							}
							str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td>'+paystatue+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?sorderid='+data.data[i].sorderid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
							ctype=data.data[i].ctype;
						}
						$(".admin_list_list").html(str);
						if(fn){fn(len);}
					}else{
						alert(data.msg);
					}
					$("tr:even").css("background-color","#F2F2F3");
				}
			});
		}
		event.stopPropagation();
	});

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
						      	fullAdminListx(p);
						      }
							});
						});
					}else if($(".missadmin_qiehuan").text()=="单次用户"){
						fullAdminListc(1,function (count){
							$(".tcdPageCode").createPage({
						      pageCount:count,
						      current:1,
						      backFn:function(p){
						      	fullAdminListc(p);
						      }
							});
						});
					}
				}
			}
		});
		//三级联动点击按钮切换内容************************************************************************************
		$(".dancitaocan_button button").bind('click',function(ev){
			web=$(this).attr('web');
			if(web==1){
				fullAdminListx(1,function (count){
					$(".tcdPageCode").createPage({
				      pageCount:count,
				      current:1,
				      backFn:function(p){
				      	fullAdminListx(p);
				      }
					});
				});
			}else if(web==2){
				fullAdminListc(1,function (count){
					$(".tcdPageCode").createPage({
				      pageCount:count,
				      current:1,
				      backFn:function(p){
				      	fullAdminListc(p);
				      }
					});
				});
			}
			ev.stopPropagation();
		});
		dw.stopPropagation();
	});
	/*三级联动套餐查询*/
		function fullAdminListx(page,fn){
			if(!page){page=1;}
			$.ajax({
				url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selVillageRateList",
				dataType:"jsonp",
				data:{"vid":vid,"page":page,"web":1},
				success:function(data){
					if(data.status == 1){
						len=Math.ceil(data.len/14);
						var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>支付类型</td><td>操作</td></tr>';
						for(var i=0,leng=data.data.length;i<leng;i++){
							var ctype=data.data[i].ctype||"不限";
							var paystatue=data.data[i].paystatus;
							if(paystatue==4){
								paystatue='现金支付';
							}else if(paystatue==1){
								paystatue='微信在线支付';
							}
							str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+ctype+'</td><td>'+paystatue+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?omid='+data.data[i].omid+'">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
						}
						$(".admin_list_list").html(str);
						if(fn){fn(len);}
					}else{
						alert(data.msg);
					}
					$("tr:even").css("background-color","#F2F2F3");
				}
			});
		}
	/*三级联动单次查询*/
		function fullAdminListc(page,fn){
			if(!page){page=1;}
			$.ajax({
				type:"get",
				url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selVillageSingleList",
				dataType:"jsonp",
				data:{"vid":vid,"page":page,"web":2},
				success:function(data){
					if(data.status == 1){
						len=Math.ceil(data.len/14);
						var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>支付类型</td><td>操作</td></tr>';
						for(var i=0,leng=data.data.length;i<leng;i++){
							var ctype=data.data[i].ctype||"不限";
							var paystatue=data.data[i].paystatus;
							if(paystatue==4){
								paystatue='现金支付';
							}else if(paystatue==1){
								paystatue='微信在线支付';
							}
							str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+ctype+'</td><td>'+paystatue+'</td><td class="xiangqing_color" ><a href="admin_once_message.html?sorderid='+data.data[i].sorderid+'">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
						}
						$(".admin_list_list").html(str);
						if(fn){fn(len);}
					}else{
						alert(data.msg);
					}
					$("tr:even").css("background-color","#F2F2F3");
				}
			});
		}

	//查询关键字*************************************************************************************************************************************************
	$(".guanjianzi_chaxun_but").bind('click',function(dd){
		if($(".missadmin_qiehuan").text()=="套餐用户"){
			fullAdminListn(1,function (count){
				$(".tcdPageCode").createPage({
				  pageCount:count,
				  current:1,
				  backFn:function(p){
					fullAdminListn(p);
				  }
				});
			});
		}else if($(".missadmin_qiehuan").text()=="单次用户"){
			fullAdminListm(1,function (count){
				$(".tcdPageCode").createPage({
				  pageCount:count,
				  current:1,
				  backFn:function(p){
					fullAdminListm(p);
				  }
				});
			});
		}
		dd.stopPropagation();
	});
	/*查询 套餐调用*/
	function fullAdminListn(page,fn){
		if(!page){page=1;}
		var keyword =$(".guanjianzi_chaxun").val();
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selRatesingleList",
			type:"get",
			dataType:"jsonp",
			data:{"keyword":keyword,"web":1},
			success:function(data){
				if(data.status == 1){
					len =Math.ceil(data.len/14);
					var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>支付类型</td><td>操作</td></tr>';
					for(var i=0,leng=data.data.length;i<leng;i++){
						var ctype=data.data[i].ctype||"不限";
						var paystatue=data.data[i].paystatus;
						if(paystatue==4){
							paystatue='现金支付';
						}else if(paystatue==1){
							paystatue='微信在线支付';
						}
						str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+ctype+'</td><td>'+paystatue+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?omid='+data.data[i].omid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
					}
					$(".admin_list_list").html(str);
					if(fn){fn(len);}
				}else{
					alert("对不起，没有找到相关数据！");
				}
				$("tr:even").css("background-color","#F2F2F3");
			}
		});
	}
	/*查询单次调用*/
	function fullAdminListm(page,fn){
		if(!page){page=1;}
		var keyword =$(".guanjianzi_chaxun").val();
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selRatesingleList",
			type:"get",
			dataType:"jsonp",
			data:{"keyword":keyword,"web":2},
			success:function(data){
				if(data.status == 1){
					len =Math.ceil(data.len/14);
					var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>支付类型</td><td>操作</td></tr>';
					for(var i=0,leng=data.data.length;i<leng;i++){
						var ctype=data.data[i].ctype||"不限";
						var paystatue=data.data[i].paystatus;
						if(paystatue==4){
							paystatue='现金支付';
						}else if(paystatue==1){
							paystatue='微信在线支付';
						}
						str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+ctype+'</td><td>'+paystatue+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?sorderid='+data.data[i].sorderid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
					}
					$(".admin_list_list").html(str);
					if(fn){fn(len);}
				}else{
					alert("对不起，没有找到相关数据！");
				}
				$("tr:even").css("background-color","#F2F2F3");
			}
		});
	}
	$(".paystatus_se").bind('change',function(){
		$(".missadmin_qiehuan").removeClass("missadmin_qiehuan");
		if($('.paystatus_se option:selected').text()=="现金支付"){
			fullAdminListhh(1,function (count){
				$(".tcdPageCode").createPage({
				  pageCount:count,
				  current:1,
				  backFn:function(p){
					fullAdminListhh(p);
				  }
				});
			});
		}else if($('.paystatus_se option:selected').text()=="微信在线支付"){
			fullAdminListgg(1,function (count){
				$(".tcdPageCode").createPage({
				  pageCount:count,
				  current:1,
				  backFn:function(p){
					fullAdminListgg(p);
				  }
				});
			});
		}
	});
	function fullAdminListhh(page,fn){
		if(!page){page=1;}
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selOrderPay",
			dataType:"jsonp",
			type:"get",
			data:{"payStatus":4,"page":page},
			success:function(data){
				if(data.status == 1){
					len =Math.ceil(data.len/14);
					var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>支付类型</td><td>操作</td></tr>';
					for(var i=0,leng=data.data.length;i<leng;i++){
						var ctype=data.data[i].ctype||"不限";
						var paystatue=data.data[i].paystatus;
						if(paystatue==4){
							paystatue='现金支付';
						}else if(paystatue==1){
							paystatue='微信在线支付';
						}
						str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+ctype+'</td><td>'+paystatue+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?omid='+data.data[i].omid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
					}
					$(".admin_list_list").html(str);
					if(fn){fn(len);}
				}else{
					alert("对不起，没有找到相关数据！");
				}
				$("tr:even").css("background-color","#F2F2F3");
			}
		});
	}
	function fullAdminListgg(page,fn){
		if(!page){page=1;}
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selOrderPay",
			type:"get",
			dataType:"jsonp",
			data:{"payStatus":1,"page":page},
			success:function(data){
				if(data.status == 1){
					len =Math.ceil(data.len/14);
					var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>支付类型</td><td>操作</td></tr>';
					for(var i=0,leng=data.data.length;i<leng;i++){
						var ctype=data.data[i].ctype||"不限";
						var paystatue=data.data[i].paystatus;
						if(paystatue==4){
							paystatue='现金支付';
						}else if(paystatue==1){
							paystatue='微信在线支付';
						}
						str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+ctype+'</td><td>'+paystatue+'</td><td class="xiangqing_color" ><a href="admin_taocan_message.html?omid='+data.data[i].omid+'" style="margin-right:1%;">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a><a href="admin_add.html?omid='+data.data[i].omid+'" style="margin-left:8%;">续费</a></td></tr>';
					}
					$(".admin_list_list").html(str);
					if(fn){fn(len);}
				}else{
					alert("对不起，没有找到相关数据！");
				}
				$("tr:even").css("background-color","#F2F2F3");
			}
		});
	}
});
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
	});
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
	});
}
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
	});
}

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
	});
}

function getText(){
	alert($('.city_numO option:selected').text());
}
