$(function(){
	cityO();
	var web;
	$(".dancitaocan_button>button").bind('click',function(){
		web=$(this).attr('web');
		console.log(web)
	});
	
})
//省份选择
function cityO(val){
	$.ajax({                                                 
			url:"http://www.nbinbi.com/waterObj/index.php/Home/Common/reProvince",                                   
			type:"get",                                        
			dataType:"jsonp", 
			success:function(data){                               
//				console.log(data)	
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
//				console.log(data);	
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
//				console.log(data);	
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
//				console.log(data);	
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
var vid;
//顶部筛选选择
function hheng(){ 
//	console.log($('.city_numO option:selected').text()+$('.city_numT option:selected').text()+$('.city_numF option:selected').text()+$('.city_numS option:selected').text())
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
						vid=data.data;												
						$.ajax({
							type:"get",
							url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/selOrdermonthList",
							dataType:"jsonp", 
							data:{"vid":vid,"page":page},
							success:function(data){  
								 console.log(data);
								if(data.status == 1){
								    len =Math.ceil(data.len/14);				
								 	var str='<tr class="admin_listcontent_mean"><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>用户类型</td><td>操作</td></tr>';
								 	var strhead=""; //固定头部文字
								 	for(var i=0,leng=data.data.length;i<leng;i++){
								 		str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].name+'</td><td>'+data.data[i].building+'</td><td>'+data.data[i].phonenum+'</td><td>'+data.data[i].ctype+'</td><td class="trymiss_qiehuan">体验用户</td><td><div class="missadmin_botton"><a href="missadmin_huifang.html"><button>回访</button></a><a href="admin_add.html"><button>续费</button></a><a href="missadmin_message.html?uid='+data.data[i].uid+'"><button class="missmessage">查看详情</button></a></div></td></tr>';
								 	}
								 	$(".missadmin_content").html(str);
								 	fn&&fn(len);
								}else{
									len =Math.ceil(data.len/14);
									$(".missadmin_content").html('<tr><td>编号</td><td>车主姓名</td><td>楼盘</td><td>联系方式</td><td>车型</td><td>用户类型</td><td>操作</td>	</tr>');
								 	fn&&fn(len);
								 	alert(data.msg);
								}
							}
						});
					}
				}
			})
		}		
};





