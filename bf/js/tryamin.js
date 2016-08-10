$(function(){
	cityO();
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
		data:{"province":val},
		success:function(data){  
			if(data.status==1){
				$(".city_numT").find('.select').remove();
				$.each(data.data, function (index,val) {							
						$(".city_numT").append('<option class="select">'+val.city+'</option>');
				});
			}
		},                                                
		error:function(){
			console.log("数据交互有误")
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
//顶部筛选选择
function hheng(){ 
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
						url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selSupmessList",
						dataType:"jsonp", 
						data:{"vid":vid,"page":page},
						success:function(data){  
							if(data.status == 1){
							    var count =Math.ceil(data.len/14);
								var str="";
								var strhead=""; //固定头部文字
								$.each(data.data, function (index,val) {
									if(!val.name)return;
									str+='<tr><td>'+val.name+'</td><td>'+val.building+'</td><td>'+val.park+'</td><td>'+val.carnum+'</td><td>'+val.phone+
									'</td><td>'+val.wname+'</td><td>'+val.clearpeople+
									'</td><td><div class="huifangdinggou_button"><a href="missadmin.html"><button>回访</button></a><a href="admin_add.html"><button class="huifangdinggou_button_right" >订购</button></a></div></td></tr>';
	
									strhead='<tr class="admin_listcontent_mean"><td>车主姓名</td><td>楼盘</td><td>车位</td><td>车牌</td><td>联系方式</td><td>负责人</td><td>清洗人</td><td>操作</td></tr>';
								});
								$(".tryadminmess").html(strhead+str);
								fn&&fn(count);
							}else if(data.status==0){
								alert("对不起，没有找到相关数据！");
							}
						}
					});
				}
			}
		})
	}		
};





