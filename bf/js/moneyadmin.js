$(function(){
	cityO();
	var flog;
//按钮切换***********************************************************************************************************************************************************
	$(".list li").bind("click",function(ev){
		$(this).addClass('activeList').siblings().removeClass('activeList');
		flog=$(".activeList").attr('flog');
		if(flog==1){
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
					url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/returnRateMonthCashUserList",
					type:"get",
					dataType:"jsonp",
					data:{"page":page},
					success:function(data){
						if(data.status==1){
							var str='<tr><td>订单ID</td><td>车主姓名</td><td>联系方式</td><td>车位号</td><td>车牌号</td><td>服务类型</td><td>楼盘</td><td>时间</td><td>金额</td><td>支付状态</td><td>操作</td></tr>';
							$.each(data.data,function(index,val){
								str+='<tr><td>'+val.omid+'</td><td>'+val.username+'</td><td>'+val.phonenum+'</td><td>'+val.park+'</td><td>'+val.carnum+'</td><td>包月</td><td>'+
								val.building+'</td><td>'+val.rudate+'</td><td>'+val.totalprice+'</td><td>待付款</td><td><button omid='+val.omid+'>确认付款</button></td></tr>';
							});
							$(".moneyadmin_button").html(str);
							//包月 按钮切换收款***************************************************************************************************************************
							$(".moneyadmin_button button").bind('click',function(dwq){
								omid=$(this).attr("omid");
								$.ajax({
									type:"get",
									url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/confirmPaymentByRateMonth",
									data:{"omid":omid},
									dataType:"jsonp",
									success:function(data){
										if(data.status==1){
											alert(data.msg);
											window.location.href="admin_list.html";
										}else{
											alert(data.msg);
										}
									}
								});
								dwq.stopPropagation();
							});
						}else{alert(data.msg)}
					}
				});
			}
		}else if(flog==2){
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
					url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/returnRateSingleCashUserList",
					type:"get",
					dataType:"jsonp",
					data:{"page":page},
					success:function(data){
						if(data.status==1){
							var str='<tr><td>订单ID</td><td>车主姓名</td><td>联系方式</td><td>车位号</td><td>车牌号</td><td>服务类型</td><td>楼盘</td><td>时间</td><td>金额</td><td>支付状态</td><td>操作</td></tr>';
							$.each(data.data,function(index,val){
								str+='<tr><td>'+val.osid+'</td><td>'+val.username+'</td><td>'+val.phonenum+'</td><td>'+val.park+'</td><td>'+val.carnum+'</td><td>单次</td><td>'+
								val.building+'</td><td>'+val.rudate+'</td><td>'+val.totalprice+'</td><td>待付款</td><td><button sorderid='+val.sorderid+'>确认付款</button></td></tr>';
							});
							$(".moneyadmin_button").html(str);
							//单次 切换收款***************************************************************************************************************************
							$(".moneyadmin_button button").bind('click',function(dwq){
								sorderid=$(this).attr("sorderid");
								$.ajax({
									type:"get",
									url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/confirmPaymentByRateSingle",
									data:{"sorderid":sorderid},
									dataType:"jsonp",
									success:function(data){
										if(data.status==1){
											alert(data.msg);
											window.location.href="admin_list.html";
										}else{
											alert(data.msg);
										}
									}
								});
								dwq.stopPropagation();
							});
						}else{alert(data.msg)}
					}
				});
			}
		}
		ev.stopPropagation();
	});
//默认载入***********************************************************************************************************************************************************
	if($(".activeList").text()=="包月"){
		fullAdminListw(1,function (count){
			$(".tcdPageCode").createPage({
		      pageCount:count,
		      current:1,
		      backFn:function(p){
		      	fullAdminListw(p)
		      }
			});
		});
		function fullAdminListw(page,fn){
			!page&&(page=1);
			$.ajax({
				url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/returnRateMonthCashUserList",
				type:"get",
				dataType:"jsonp",
				data:{"page":page},
				success:function(data){
					if(data.status==1){
						var str='<tr><td>订单ID</td><td>车主姓名</td><td>联系方式</td><td>车位号</td><td>车牌号</td><td>服务类型</td><td>楼盘</td><td>时间</td><td>金额</td><td>支付状态</td><td>操作</td></tr>';
						$.each(data.data,function(index,val){
							str+='<tr><td>'+val.omid+'</td><td>'+val.username+'</td><td>'+val.phonenum+'</td><td>'+val.park+'</td><td>'+val.carnum+'</td><td>包月</td><td>'+val.building+'</td><td>'+val.rudate+'</td><td>'+
							val.totalprice+'</td><td>待付款</td><td><button omid='+val.omid+'>确认付款</button></td></tr>';
						});
						$(".moneyadmin_button").html(str);
						//包月收款***************************************************************************************************************************
						$(".moneyadmin_button button").bind('click',function(dwq){
							omid=$(this).attr("omid");
							$.ajax({
								type:"get",
								url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/confirmPaymentByRateMonth",
								data:{"omid":omid},
								dataType:"jsonp",
								success:function(data){
									if(data.status==1){
										alert(data.msg);
										window.location.href="admin_list.html";
									}else{
										alert(data.msg);
									}
								}
							});
							dwq.stopPropagation();
						});
					}else(alert(data.msg))
				}
			});
		}
	}else if($(".activeList").text()=="单次"){
		fullAdminListg(1,function (count){
			$(".tcdPageCode").createPage({
		      pageCount:count,
		      current:1,
		      backFn:function(p){
		      	fullAdminListg(p)
		      }
			});
		});
		function fullAdminListg(page,fn){
			!page&&(page=1);
			$.ajax({
				url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/returnRateSingleCashUserList",
				type:"get",
				dataType:"jsonp",
				data:{"page":page},
				success:function(data){
					console.log(data)
					if(data.status==1){
						var str='<tr><td>订单ID</td><td>车主姓名</td><td>联系方式</td><td>车位号</td><td>车牌号</td><td>服务类型</td><td>楼盘</td><td>时间</td><td>金额</td><td>支付状态</td><td>操作</td></tr>';
						$.each(data.data,function(index,val){
							str+='<tr><td>'+val.osid+'</td><td>'+val.username+'</td><td>'+val.phonenum+'</td><td>'+val.park+'</td><td>'+val.carnum+'</td><td>单次</td><td>'+val.building+'</td><td>'+val.rudate+
							'</td><td>'+val.totalprice+'</td><td>待付款</td><td><button sorderid='+val.sorderid+'>确认付款</button></td></tr>';
						});
						$(".moneyadmin_button").html(str);
						//单次收款***************************************************************************************************************************
						$(".moneyadmin_button button").bind('click',function(dwq){
							sorderid=$(this).attr("sorderid");
							$.ajax({
								type:"get",
								url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/confirmPaymentByRateSingle",
								data:{"sorderid":sorderid},
								dataType:"jsonp",
								success:function(data){
									if(data.status==1){
										alert(data.msg);
										window.location.href="admin_list.html";
									}else{
										alert(data.msg);
									}
								}
							});
							dwq.stopPropagation();
						});
					}else(alert(data.msg))
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
					if($(".activeList").text()=="包月"){	
						fullAdminListx(1,function(count){
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
								url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/returnRateMonthCashUserListByArea",
								dataType:"jsonp",
								data:{"vid":vid,"page":page,"web":"包月"},
								success:function(data){  		
									console.log(data)
									if(data.status == 1){	
										var str='<tr><td>订单ID</td><td>车主姓名</td><td>联系方式</td><td>车位号</td><td>车牌号</td><td>服务类型</td><td>楼盘</td><td>时间</td><td>金额</td><td>支付状态</td><td>操作</td></tr>';
										$.each(data.data,function(index,val){
											str+='<tr><td>'+val.omid+'</td><td>'+val.username+'</td><td>'+val.phonenum+'</td><td>'+val.park+'</td><td>'+val.carnum+'</td><td>包月</td><td>'+
											val.building+'</td><td>'+val.rudate+'</td><td>'+val.totalprice+'</td><td>待付款</td><td><button omid='+val.omid+'>确认付款</button></td></tr>';
										});
										$(".moneyadmin_button").html(str);
										//包月 三级联动收款***************************************************************************************************************************
										$(".moneyadmin_button button").bind('click',function(dwq){
											omid=$(this).attr("omid");
											$.ajax({
												type:"get",
												url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/confirmPaymentByRateMonth",
												data:{"omid":omid},
												dataType:"jsonp",
												success:function(data){
													if(data.status==1){
														alert(data.msg);
														window.location.href="admin_list.html";
													}else{
														alert(data.msg);
													}
												}
											});
											dwq.stopPropagation();
										});
									}else(alert(data.msg))								
								}
							});
						}
					}else if($(".activeList").text()=="单次"){
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
								url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/returnRateSingleCashUserListByArea",
								dataType:"jsonp", 
								data:{"vid":vid,"page":page,"web":"单次"},
								success:function(data){  	
									if(data.status == 1){									
									    var str='<tr><td>订单ID</td><td>车主姓名</td><td>联系方式</td><td>车位号</td><td>车牌号</td><td>服务类型</td><td>楼盘</td><td>时间</td><td>金额</td><td>支付状态</td><td>操作</td></tr>';
										$.each(data.data,function(index,val){
											str+='<tr><td>'+val.osid+'</td><td>'+val.username+'</td><td>'+val.phonenum+'</td><td>'+val.park+'</td><td>'+val.carnum+'</td><td>单次</td><td>'+
											val.building+'</td><td>'+val.rudate+'</td><td>'+val.totalprice+'</td><td>待付款</td><td><button sorderid='+val.sorderid+'>确认付款</button></td></tr>';
										});
										$(".moneyadmin_button").html(str);	
										//单次 三级联动收款***************************************************************************************************************************
										$(".moneyadmin_button button").bind('click',function(dwq){
											sorderid=$(this).attr("sorderid");
											$.ajax({
												type:"get",
												url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/confirmPaymentByRateSingle",
												data:{"sorderid":sorderid},
												dataType:"jsonp",
												success:function(data){
													if(data.status==1){
														alert(data.msg);
														window.location.href="admin_list.html";
													}else{
														alert(data.msg);
													}
												}
											});
											dwq.stopPropagation();
										});
									}else(alert(data.msg))										
								}
							});
						}
					}
				}else(alert(data.msg))
			}
		})
		//三级联动点击按钮切换内容************************************************************************************
		$(".list li").bind('click',function(evt){
			web=$(this).attr('flog');
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
						url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/returnRateMonthCashUserListByArea",
						dataType:"jsonp",
						data:{"vid":vid,"page":page,"web":"包月"},
						success:function(data){  		
							console.log(data)
							if(data.status == 1){									
							    var str='<tr><td>订单ID</td><td>车主姓名</td><td>联系方式</td><td>车位号</td><td>车牌号</td><td>服务类型</td><td>楼盘</td><td>时间</td><td>金额</td><td>支付状态</td><td>操作</td></tr>';
								$.each(data.data,function(index,val){
									str+='<tr><td>'+val.omid+'</td><td>'+val.username+'</td><td>'+val.phonenum+'</td><td>'+val.park+'</td><td>'+val.carnum+'</td><td>包月</td><td>'+
									val.building+'</td><td>'+val.rudate+'</td><td>'+val.totalprice+'</td><td>待付款</td><td><button omid='+val.omid+'>确认付款</button></td></tr>';
								});
								$(".moneyadmin_button").html(str);
								//包月 三级联动收款***************************************************************************************************************************
								$(".moneyadmin_button button").bind('click',function(dwq){
									omid=$(this).attr("omid");
									$.ajax({
										type:"get",
										url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/confirmPaymentByRateMonth",
										data:{"omid":omid},
										dataType:"jsonp",
										success:function(data){
											if(data.status==1){
												alert(data.msg);
												window.location.href="admin_list.html";
											}else{
												alert(data.msg);
											}
										}
									});
									dwq.stopPropagation();
								});
							}else(alert(data.msg))										
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
						url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/returnRateSingleCashUserListByArea",
						dataType:"jsonp", 
						data:{"vid":vid,"page":page,"web":"单次"},
						success:function(data){  	
							if(data.status == 1){									
							   var str='<tr><td>订单ID</td><td>车主姓名</td><td>联系方式</td><td>车位号</td><td>车牌号</td><td>服务类型</td><td>楼盘</td><td>时间</td><td>金额</td><td>支付状态</td><td>操作</td></tr>';
								$.each(data.data,function(index,val){
									str+='<tr><td>'+val.osid+'</td><td>'+val.username+'</td><td>'+val.phonenum+'</td><td>'+val.park+'</td><td>'+val.carnum+'</td><td>单次</td><td>'+
									val.building+'</td><td>'+val.rudate+'</td><td>'+val.totalprice+'</td><td>待付款</td><td><button sorderid='+val.sorderid+'>确认付款</button></td></tr>';
								});
								$(".moneyadmin_button").html(str);	
								//单次 三级联动收款***************************************************************************************************************************
								$(".moneyadmin_button button").bind('click',function(dwq){
									sorderid=$(this).attr("sorderid");
									$.ajax({
										type:"get",
										url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/confirmPaymentByRateSingle",
										data:{"sorderid":sorderid},
										dataType:"jsonp",
										success:function(data){
											if(data.status==1){
												alert(data.msg);
												window.location.href="admin_list.html";
											}else{
												alert(data.msg);
											}
										}
									});
									dwq.stopPropagation();
								});
							}else(alert(data.msg))										
						}
					});
				}
			}
			evt.stopPropagation();
		});
		dw.stopPropagation();
	});	
	//包月查询**********************************************************************************************************************************************************
	$(".chaxun").bind('click',function(event){
		if($(".activeList").text()=="包月"){
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
					url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/returnRateMonthCashUserListBykeyword",
					type:"get",
					dataType:"jsonp",
					data:{"keyword":$(".search_input").val()},
					success:function(data){
						console.log(data)
						if(data.status==1){
							var str='<tr><td>订单ID</td><td>车主姓名</td><td>联系方式</td><td>车位号</td><td>车牌号</td><td>服务类型</td><td>楼盘</td><td>时间</td><td>金额</td><td>支付状态</td><td>操作</td></tr>';
							$.each(data.data,function(index,val){
								str+='<tr><td>'+val.omid+'</td><td>'+val.username+'</td><td>'+val.phonenum+'</td><td>'+val.park+'</td><td>'+val.carnum+'</td><td>单次</td><td>'+
								val.building+'</td><td>'+val.rudate+'</td><td>'+val.totalprice+'</td><td>待付款</td><td><button omid='+val.omid+'>确认付款</button></td></tr>';
							});
							$(".moneyadmin_button").html(str);
							//包月 三级联动切换收款***************************************************************************************************************************
							$(".moneyadmin_button button").bind('click',function(dwq){
								omid=$(this).attr("omid");
								$.ajax({
									type:"get",
									url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/confirmPaymentByRateMonth",
									data:{"omid":omid},
									dataType:"jsonp",
									success:function(data){
										if(data.status==1){
											alert(data.msg);
											window.location.href="admin_list.html";
										}else{
											alert(data.msg);
										}
									}
								});
								dwq.stopPropagation();
							});
						}else(alert(data.msg))
					}
				});
			}
		}else if($(".activeList").text()=="单次"){
			fullAdminListj(1,function (count){
				$(".tcdPageCode").createPage({
			      pageCount:count,
			      current:1,
			      backFn:function(p){
			      	fullAdminListj(p)
			      }
				});
			});
			function fullAdminListj(page,fn){
				!page&&(page=1);
				$.ajax({
					url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/returnRateSingCashUserListBykeyword",
					type:"get",
					dataType:"jsonp",
					data:{"keyword":$(".search_input ").val()},
					success:function(data){
						console.log(data)
						if(data.status==1){
							var str='<tr><td>订单ID</td><td>车主姓名</td><td>联系方式</td><td>车位号</td><td>车牌号</td><td>服务类型</td><td>楼盘</td><td>时间</td><td>金额</td><td>支付状态</td><td>操作</td></tr>';
							$.each(data.data,function(index,val){
								str+='<tr><td>'+val.osid+'</td><td>'+val.username+'</td><td>'+val.phonenum+'</td><td>'+val.park+'</td><td>'+val.carnum+'</td><td>单次</td><td>'+
								val.building+'</td><td>'+val.rudate+'</td><td>'+val.totalprice+'</td><td>待付款</td><td><button sorderid='+val.sorderid+'>确认付款</button></td></tr>';
							});
							$(".moneyadmin_button").html(str);
							//单次 三级联动收款***************************************************************************************************************************
							$(".moneyadmin_button button").bind('click',function(dwq){
								sorderid=$(this).attr("sorderid");
								$.ajax({
									type:"get",
									url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/confirmPaymentByRateSingle",
									data:{"sorderid":sorderid},
									dataType:"jsonp",
									success:function(data){
										if(data.status==1){
											alert(data.msg);
											window.location.href="admin_list.html";
										}else{
											alert(data.msg);
										}
									}
								});
								dwq.stopPropagation();
							});
						}else(alert(data.msg))
					}
				});
			}
			event.stopPropagation();
		}		
	});		
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
//								var str='<tr><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
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
