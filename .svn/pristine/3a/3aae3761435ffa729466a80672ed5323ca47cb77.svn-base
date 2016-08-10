/*$(function(){
	cityO();
	carType();
})*/
function carType(val){
	$.ajax({                                                 
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/reCarType",                                   
			type:"get",                                        
			dataType:"jsonp", 
			success:function(data){                               
//				console.log(data)      
				if(data.status==1){
//					$(".cartype").find('.select').remove();
					$.each(data.data, function (index,val) {						
						$(".cartype").append('<option class="select">'+val.cartype+'</option>');
					});
				}
			},                                                
			error:function(){
				console.log("数据交互有误")
			}
	})    
}


//省份选择
function cityO(val){
	$.ajax({                                                 
			url:"http://www.nbinbi.com/waterObj/index.php/Home/Subscribe/reProvince",                                   
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
			url:"http://www.nbinbi.com/waterObj/index.php/Home/Subscribe/reVillage",                                   
			type:"get",                                        
			dataType:"jsonp", 
			data:{"province":val},
			success:function(data){                               
				//console.log(data);	
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
			url:"http://www.nbinbi.com/waterObj/index.php/Home/Subscribe/reVillage",
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
			url:"http://www.nbinbi.com/waterObj/index.php/Home/Subscribe/reVillage",
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

//套餐选择

var oid;
function hheng(fn){ 
//	console.log($('.city_numO option:selected').text()+$('.city_numT option:selected').text()+$('.city_numF option:selected').text()+$('.city_numS option:selected').text())
	var province = $('.city_numO option:selected').text();	
	var city = $('.city_numT option:selected').text();	
	var county = $('.city_numF option:selected').text();	
	var building = $('.city_numS option:selected').text();
	var cartype = $('.cartype option:selected').text();	
	$.ajax({                                                 
			url:"http://www.nbinbi.com/waterObj/index.php/Home/Subscribe/reVillage",
			type:"get",                                        
			dataType:"jsonp", 
			data:{"province":province,"city":city,"county":county,"building":building},
			success:function(data){  
				oid=data.data;
				//$('.taocanlist_button .active').attr('msg',oid);
				$('.choose .city_numS').attr('msg',oid);
				fn&&fn(oid);
			}
	}) 
};