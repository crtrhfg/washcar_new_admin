$(function(){
	cityO();
	$(".missadmin_qiehuan").click(function(){
		web1=$(".missadmin_qiehuan").attr("web");
		
	})		
	$(".missadmin_qiehuanw").click(function(){
		web2=$(".missadmin_qiehuanw").attr("web");
		
	})	
	
})
var web1,web2;
//省份选择
function cityO(val){
	$.ajax({                                                 
			url:"http://www.nbinbi.com/waterObj/index.php/Home/Common/reProvince",                                   
			type:"get",                                        
			dataType:"jsonp", 
			success:function(data){                               
//				
				if(data.status==1){
					$.each(data.data, function (index,val) {						
						$(".city_numO").append('<option>'+val.province+'</option>');
					});
				}
			},                                                
			error:function(){
				
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
//				
				if(data.status==1){
					$(".city_numT").find('.select').remove();
					$.each(data.data, function (index,val) {							
							$(".city_numT").append('<option class="select">'+val.city+'</option>');
					});
				}
			},                                                
			error:function(){
				
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
//				
				if(data.status==1){
					$(".city_numF").find('.select').remove();
					$.each(data.data, function (index,val) {							
							$(".city_numF").append('<option class="select">'+val.county+'</option>');
					});
				}
			},                                                
			error:function(){
				
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
//				
				if(data.status==1){
					$(".city_numS").find('.select').remove();
					$.each(data.data, function (index,val) {							
							$(".city_numS").append('<option class="select">'+val.building+'</option>');
					});
				}
			},                                                
			error:function(){
				
			}
	})   		
};

function getText(){
	alert($('.city_numO option:selected').text())
}

//顶部筛选选择
function hheng(){ 
//	
	var province = $('.city_numO option:selected').text();	
	var city = $('.city_numT option:selected').text();	
	var county = $('.city_numF option:selected').text();	
	var building = $('.city_numS option:selected').text();	

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
				url:"http://www.nbinbi.com/waterObj/index.php/Home/Common/reVillage",
				type:"get",                                        
				dataType:"jsonp", 
				data:{"province":province,"city":city,"county":county,"building":building},
				success:function(data){  
					if(data.status==1){
						var vid=data.data;						
						$.ajax({
							type:"get",
							url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selVillageRateList",
							dataType:"jsonp", 
							data:{"vid":vid,"page":page},
							success:function(data){  	
							console.log(data)							 
								if(data.status == 1){									
								    len =Math.ceil(data.len/14);
									var str='<tr><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
								 	for(var i=0,leng=data.data.length;i<leng;i++){
								 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="xiangqing_color" ><a href="admin_once_message.html?uid='+data.data[i].uid+'">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a></td></tr>';
									}
								 	$(".admin_list_list").html(str);
								 	fn&&fn(len);
								}else{
								 	alert(data.msg);
								}								
							}
						});
							if(web1==1){
								var vid=data.data;								
								$.ajax({
									type:"get",
									url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selVillageRateList",
									dataType:"jsonp", 
									data:{"vid":vid,"page":page},
									success:function(data){  										 
										if(data.status == 1){									
										    len =Math.ceil(data.len/14);
											var str='<tr><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
										 	for(var i=0,leng=data.data.length;i<leng;i++){
										 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="xiangqing_color" ><a href="admin_once_message.html?uid='+data.data[i].uid+'">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a></td></tr>';
											}
										 	$(".admin_list_list").html(str);
										 	fn&&fn(len);
										}else{
										 	alert(data.msg);
										}								
									}
								});
							}else if(web2==2){
								var vid=data.data;								
								$.ajax({
									type:"get",
									url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selVillageSingleList",
									dataType:"jsonp", 
									data:{"vid":vid,"page":page},
									success:function(data){  										 
										if(data.status == 1){									
										    len =Math.ceil(data.len/14);
											var str='<tr><td>编号</td><td>车主姓名</td><td>车牌</td><td>车位号</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>操作</td></tr>';
										 	for(var i=0,leng=data.data.length;i<leng;i++){
										 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].carnum+'</td><td>'+data.data[i].park+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="xiangqing_color" ><a href="admin_once_message.html?uid='+data.data[i].uid+'">查看详情</a><a href="changeyuyuetime.html?omid='+data.data[i].omid+'" style="margin-left:8%;">修改预约时间</a></td></tr>';
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
			})
		}		
};





