window.dialog=function(text){
	var div=document.createElement("div");
	div.innerHTML=text;
	div.style.cssText="position:absolute;left:50%;top:50%;width:400px;height:200px;margin-top:-100px;margin-left:-200px;text-align:center;line-height:200px;background:#fff;color:black";
	document.body.appendChild(div);
}

window.onload = function(){
	//	左边列表切换效果
	$(".yhguanlibutton").click(function(){
		$(".content_left_listhideo").slideToggle();
		$(".content_left_listhidet,.content_left_listhidef,.content_left_listhides,.content_left_listhidee").hide();
		$(".listimgo").toggleClass("content_left_listimgup");
		$(".listimgt,.listimgf,.listimgs,.listimge").addClass("content_left_listimgdown").removeClass("content_left_listimgup");
	});	
	$(".yhhuifangbutton").click(function(){
		$(".content_left_listhidet").slideToggle();
		$(".content_left_listhideo,.content_left_listhidef,.content_left_listhides,.content_left_listhidee").hide();
		$(".listimgt").toggleClass("content_left_listimgup");
		$(".listimgo,.listimgf,.listimgs,.listimge").addClass("content_left_listimgdown").removeClass("content_left_listimgup");
		$(".gengxin").show();
	});
	$(".yedingzhibutton").click(function(){
		$(".content_left_listhidef").slideToggle();
		$(".content_left_listhideo,.content_left_listhidet,.content_left_listhides,.content_left_listhidee").hide();
		$(".listimgf").toggleClass("content_left_listimgup");
		$(".listimgo,.listimgt,.listimgs,.listimge").addClass("content_left_listimgdown").removeClass("content_left_listimgup");
	});
		  
	$(".tjbaobiaobutton").click(function(){
		$(".content_left_listhides").slideToggle();
		$(".content_left_listhideo,.content_left_listhidet,.content_left_listhidef,.content_left_listhidee").hide();
		$(".listimgs").toggleClass("content_left_listimgup");
		$(".listimgo,.listimgt,.listimgf,.listimge").addClass("content_left_listimgdown").removeClass("content_left_listimgup");
	});
		  
	$(".qxguanlibutton").click(function(){
		$(".content_left_listhidee").slideToggle();
		$(".content_left_listhideo,.content_left_listhidet,.content_left_listhides").hide();
		$(".listimge").toggleClass("content_left_listimgup");
		$(".listimgo,.listimgt,.listimgs,.listimgf").addClass("content_left_listimgdown").removeClass("content_left_listimgup");
	});
//	鼠标点击无下拉选项时的背景颜色变换	
$(".nochildrenl").click(function(){
	$(this).css("background-color","#85C45C");
	$(this).children().children().css("color","white");
	$(".nochildrenli,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
	$(".nochildrenli,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	$(".mainHeader").html('<div class="while">现金用户<span><a href="shouye.html" target="index">×</a></span></div>');
	$(".while>span").css("left","20.5%");
	$(".while>span").click(function(){$(".while").hide();});
	$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	
})
$(".nochildrenli").click(function(){
	$(this).css("background-color","#85C45C");
	$(this).children().children().css("color","white");
	$(".nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
	$(".nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	$(".mainHeader").html('<div class="while">楼盘管理<span><a href="shouye.html" target="index">×</a></span></div>');
	$(".while>span").css("left","20.5%");
	$(".while>span").click(function(){$(".while").hide();});
	$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
})
$(".nochildrenlii").click(function(){
	$(this).css("background-color","#85C45C");
	$(this).children().children().css("color","white");
	$(".nochildrenli,.nochildrenl,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
	$(".nochildrenli,.nochildrenl,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	$(".mainHeader").html('<div class="while">密码管理<span><a href="shouye.html" target="index">×</a></span></div>');
	$(".while>span").css("left","20.5%");
	$(".while>span").click(function(){$(".while").hide();});
	$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
})
$(".nochildrenliii").click(function(){
	$(this).css("background-color","#85C45C");
	$(this).children().children().css("color","white");
	$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
	$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	$(".mainHeader").html('<div class="while">图片设置<span><a href="shouye.html" target="index">×</a></span></div>');
	$(".while>span").css("left","20.5%");
	$(".while>span").click(function(){$(".while").hide();});
	$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
})
$(".nochildrenly").click(function(){
	$(this).css("background-color","#85C45C");
	$(this).children().children().css("color","white");
	$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenliii,.nochildrenlz").css("background-color","#E3E3E3");
	$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenliii,.nochildrenlz").children().children().css("color","#686868");
	$(".mainHeader").html('<div class="while">员工管理<span><a href="shouye.html" target="index">×</a></span></div>');
	$(".while>span").css("left","20.5%");
	$(".while>span").click(function(){$(".while").hide();});
	$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
})	

$(".nochildrenlz").click(function(){
	$(this).css("background-color","#85C45C");
	$(this).children().children().css("color","white");
	$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenliii,.nochildrenly").css("background-color","#E3E3E3");
	$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenliii,.nochildrenly").children().children().css("color","#686868");
	$(".mainHeader").html('<div class="while">车辆管理<span><a href="shouye.html" target="index">×</a></span></div>');
	$(".while>span").css("left","20.5%");
	$(".while>span").click(function(){$(".while").hide();});
	$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
})	
//contentright上面导航部分   订单用户点击后效果**********************************************************************************************
	$(".admin_list_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">订单用户<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	 });
	 $(".admin_add_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">新增用户<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	});
	$(".tryadmin_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">体验用户<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	});
	$(".missadmin_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">失效用户<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	});

	$(".daoqitixing_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.huifangjilu_opnew,.missadmin_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">到期提醒<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	});
	$(".huifangjilu_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">回访记录<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	});
    $(".service_order_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".huifangjilu_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">客户预约<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	});
	$(".taocanlist_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">套餐列表<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	});
	$(".taocanlist_add_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">增加套餐<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	});
	$(".taocanlist_oncelist_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">单次项目列表<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	});
	$(".taocanlist_addxiangmu_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">增加项目<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	});

	$(".statisticslist_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">清单<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	});
	$(".statisticslist_admin_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.statisticslist_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">数据统计<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	});

	$(".administratorlist_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">管理员列表<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	});
	$(".role_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">角色列表<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenly,.nochildrenlz").children().children().css("color","#686868");
	});
	
//增加单次套餐	
$(".taocanlist_addxiangmu").click(function(){location.href="taocanlist_addxiangmu.html";});	

//查看详情 增加标签 效果
// 订单用户详情
	$(".xiangqing_color a:eq(0)").click(function(){
		window.parent.$(".mainHeader").html('<div class="gray">订单用户</div><div class="while">订单用户详情<span><a href="admin_list.html" target="index">×</a></span></div>');
			window.parent.$(".while>span").css("left","28%");
	 		window.parent.$(".while>span").click(function(){
	 			window.parent.$(".while").hide();
	 			window.parent.$(".mainHeader").html('<div class="while">订单用户<span><a href="shouye.html" target="index">×</a></span></div>');
	 			window.parent.$(".while>span").css("left","20.5%");
	 			window.parent.$(".while>span").click(function(){
	 				window.parent.$(".while").hide();
	 			});
	 		});
	});
	$(".xiangqing_color a:eq(1)").click(function(){
		window.parent.$(".mainHeader").html('<div class="gray">订单用户</div><div class="while">修改预约时间<span><a href="admin_list.html" target="index">×</a></span></div>');
			window.parent.$(".while>span").css("left","28%");
	 		window.parent.$(".while>span").click(function(){
	 			window.parent.$(".while").hide();
	 			window.parent.$(".mainHeader").html('<div class="while">订单用户<span><a href="shouye.html" target="index">×</a></span></div>');
	 			window.parent.$(".while>span").css("left","20.5%");
	 			window.parent.$(".while>span").click(function(){
	 				window.parent.$(".while").hide();
	 			});
	 		});
	});

//失效用户 详情
	$(".missadmin_botton button").click(function(){
		window.parent.$(".mainHeader").html('<div class="gray">失效用户</div><div class="while">失效用户详情<span><a href="missadmin.html" target="index">×</a></span></div>');
			window.parent.$(".while>span").css("left","28%");
	 		window.parent.$(".while>span").click(function(){
	 			window.parent.$(".while").hide();
	 			window.parent.$(".mainHeader").html('<div class="while">失效用户<span><a href="shouye.html" target="index">×</a></span></div>');
	 			window.parent.$(".while>span").css("left","20.5%");
	 			window.parent.$(".while>span").click(function(){
	 				window.parent.$(".while").hide();
	 			});
	 		});
	});
//回访记录 详情
	$(".huifangmessage").click(function(){
		window.parent.$(".mainHeader").html('<div class="gray">回访记录</div><div class="while">回访记录详情<span><a href="huifangjilu.html" target="index">×</a></span></div>');
			window.parent.$(".while>span").css("left","28%");
	 		window.parent.$(".while>span").click(function(){
	 			window.parent.$(".while").hide();
	 			window.parent.$(".mainHeader").html('<div class="while">回访记录<span><a href="shouye.html" target="index">×</a></span></div>');
	 			window.parent.$(".while>span").css("left","20.5%");
	 			window.parent.$(".while>span").click(function(){
	 				window.parent.$(".while").hide();
	 			});
	 		});
	});

//修改套餐
	$(".taocan_change").click(function(){
		window.parent.$(".mainHeader").html('<div class="gray">套餐列表</div><div class="while">修改套餐<span><a href="taocanlist.html" target="index">×</a></span></div>');
			window.parent.$(".while>span").css("left","28%");
	 		window.parent.$(".while>span").click(function(){
	 			window.parent.$(".while").hide();
	 			window.parent.$(".mainHeader").html('<div class="while">套餐列表<span><a href="shouye.html" target="index">×</a></span></div>');
	 			window.parent.$(".while>span").css("left","20.5%");
	 			window.parent.$(".while>span").click(function(){
	 				window.parent.$(".while").hide();
	 			});
	 		});
	});
//修改项目
	$(".taocan_changexiangmu").click(function(){
		window.parent.$(".mainHeader").html('<div class="gray">单次项目列表</div><div class="while">修改项目<span><a href="taocanlist_oncelist.html" target="index">×</a></span></div>');
			window.parent.$(".while>span").css("left","28%");
	 		window.parent.$(".while>span").click(function(){
	 			window.parent.$(".while").hide();
	 			window.parent.$(".mainHeader").html('<div class="while">单次项目列表<span><a href="shouye.html" target="index">×</a></span></div>');
	 			window.parent.$(".while>span").css("left","20.5%");
	 			window.parent.$(".while>span").click(function(){
	 				window.parent.$(".while").hide();
	 			});
	 		});
	});
//增加管理员
	$(".administrator_add").click(function(){
		window.parent.$(".mainHeader").html('<div class="gray">管理员列表</div><div class="while">增加管理员<span><a href="administratorlist.html" target="index">×</a></span></div>');
			window.parent.$(".while>span").css("left","28%");
	 		window.parent.$(".while>span").click(function(){
	 			window.parent.$(".while").hide();
	 			window.parent.$(".mainHeader").html('<div class="while">管理员列表<span><a href="shouye.html" target="index">×</a></span></div>');
	 			window.parent.$(".while>span").css("left","20.5%");
	 			window.parent.$(".while>span").click(function(){
	 				window.parent.$(".while").hide();
	 			});
	 		});
	});
//增加角色
	$(".roleadd").click(function(){
		window.parent.$(".mainHeader").html('<div class="gray">角色列表</div><div class="while">增加角色<span><a href="role_list.html" target="index">×</a></span></div>');
			window.parent.$(".while>span").css("left","28%");
	 		window.parent.$(".while>span").click(function(){
	 			window.parent.$(".while").hide();
	 			window.parent.$(".mainHeader").html('<div class="while">角色列表<span><a href="shouye.html" target="index">×</a></span></div>');
	 			window.parent.$(".while>span").css("left","20.5%");
	 			window.parent.$(".while>span").click(function(){
	 				window.parent.$(".while").hide();
	 			});
	 		});
	});
//增加楼盘
	$(".addhouse").click(function(){
		window.parent.$(".mainHeader").html('<div class="gray">楼盘管理</div><div class="while">增加楼盘<span><a href="house_manage.html" target="index">×</a></span></div>');
			window.parent.$(".while>span").css("left","28%");
	 		window.parent.$(".while>span").click(function(){
	 			window.parent.$(".while").hide();
	 			window.parent.$(".mainHeader").html('<div class="while">楼盘管理<span><a href="shouye.html" target="index">×</a></span></div>');
	 			window.parent.$(".while>span").css("left","20.5%");
	 			window.parent.$(".while>span").click(function(){
	 				window.parent.$(".while").hide();
	 			});
	 		});
	});
//修改楼盘
	$(".changehouse").click(function(){
		window.parent.$(".mainHeader").html('<div class="gray">楼盘管理</div><div class="while">修改楼盘<span><a href="house_manage.html" target="index">×</a></span></div>');
			window.parent.$(".while>span").css("left","28%");
	 		window.parent.$(".while>span").click(function(){
	 			window.parent.$(".while").hide();
	 			window.parent.$(".mainHeader").html('<div class="while">楼盘管理<span><a href="shouye.html" target="index">×</a></span></div>');
	 			window.parent.$(".while>span").css("left","20.5%");
	 			window.parent.$(".while>span").click(function(){
	 				window.parent.$(".while").hide();
	 			});
	 		});
	});
	//增加负责人
	//$(".selected_principal+span").click(function(){
	//	window.parent.$(".mainHeader").html('<div class="gray">楼盘管理</div><div class="while">增加负责人<span><a href="add_principal.js">×</a></span></div>');
	//	window.parent.$(".while>span").css("left","28%");
	//	window.parent.$(".while>span").click(function(){
	//		window.parent.$(".while").hide();
	//		window.parent.$(".mainHeader").html('<div class="while">增加负责人<span><a href="shouye.html" target="index">×</a></span></div>');
	//		window.parent.$(".while>span").css("left","20.5%");
	//		window.parent.$(".while>span").click(function(){
	//			window.parent.$(".while").hide();
	//		});
	//	});
	//});
	//员工增加负责人
	$("#add_principal").click(function(){
		window.parent.$(".mainHeader").html('<div class="gray">员工管理</div><div class="while">增加负责人<span><a href="staff_management.html">×</a></span></div>');
		window.parent.$(".while>span").css("left","28%");
		window.parent.$(".while>span").click(function(){
			window.parent.$(".while").hide();
			window.parent.$(".mainHeader").html('<div class="while">增加负责人<span><a href="shouye.html" target="index">×</a></span></div>');
			window.parent.$(".while>span").css("left","20.5%");
			window.parent.$(".while>span").click(function(){
				window.parent.$(".while").hide();
			});
		});
	});
	//订购
	$(".send").click(function(){
		alert(1);
		window.parent.$(".mainHeader").html('<div class="gray">客户预约</div><div class="while">新增用户<span><a href="admin_add.html" target="index">×</a></span></div>');
		window.parent.$(".while>span").css("left","28%");
		window.parent.$(".while>span").click(function(){
			window.parent.$(".while").hide();
			window.parent.$(".mainHeader").html('<div class="while">新增用户<span><a href="shouye.html" target="index">×</a></span></div>');
			window.parent.$(".while>span").css("left","20.5%");
			window.parent.$(".while>span").click(function(){
				window.parent.$(".while").hide();
			});
		});
	});






	
	
	//admin_list 查看详情js
	$(".xiangqing_color").mouseover(function(){
	 	index=$(this).index();
		$(this).addClass("colorer");
	}).mouseout(function(){
	  	$(this).removeClass("colorer");        //鼠标移出调用自动播放方法
	});	

	$(".header_rigt_password,.header_rigt_out").hover(function(){
		$(this).css("background-color","#E5E5E5");
	},function(){
		$(this).css("background-color","transparent");
	});
//新增用户
	$(".taocantime_chosebt").click(function(){
		$(".timechoser").toggle();		
		$(".timechoserr,.timechosery").hide();
		
	});
	$(".onecetime_chosebtbg").click(function(){
		$(".timechoserr").toggle();		
		$(".timechoser,.timechosery").hide();
	});
	$(".onecetime_chosebten").click(function(){
		$(".timechosery").toggle();		
		$(".timechoser,.timechoserr").hide();
	});

	
	
	$(".rightbutton_adddeleteli input").hover(function(){
		$(this).css({"border":"1px solid #85C45C","color":"#85C45C"});
	},function(){
		$(this).css({"border":"1px solid #d3d3d3","color":"#9A9A9A"});
	});
	
	//tre_admin 回访订购js效果
	$(".huifangdinggou_button>a>button").mouseover(function(){
		$(this).css({"border":"1px solid #91C96C","color":"#91C96C"}).siblings().css({"border":"1px solid #E5E5E5","color":"#7D7D7D"});
	}).mouseout(function(){
		$(this).css({"border":"1px solid #E5E5E5","color":"#7D7D7D"}).siblings().css({"border":"1px solid #E5E5E5","color":"#7D7D7D"});
	});
	
	//到期提醒回访页面button效果
	$(".carpep_xinxi_foot>span>input").hover(function(){
		$(this).css({"background-color":"#85C45C","color":"white"}).siblings().css({"background-color":"white","color":"#85C45C"});
	});	

//7.1管理员列表	
	
	$('.removeMenu').click(function(){
		$(this).parent().parent().parent().remove();	
	});
	$(".administratorlist_botton>a>button").mouseover(function(){
		$(this).css({"border":"1px solid #91C96C","color":"#91C96C"}).siblings().css({"border":"1px solid #E5E5E5","color":"#7D7D7D"});
	}).mouseout(function(){
		$(this).css({"border":"1px solid #E5E5E5","color":"#7D7D7D"}).siblings().css({"border":"1px solid #E5E5E5","color":"#7D7D7D"});
	});
	 $(".administratorlist_add_li li").click(function () {var txt_ul=$(this).text();$("#role").val(txt_ul);$(".administratorlist_add_li").hide();});
//增加角色 输入框点击效果
	$(".add_role_div_div input").click(function () {
        $(this).css("border","1px solid #85c45c")}).blur(function () {
        $(this).css("border","1px solid #d2d2d2")
    });
$(".housemanage_button>a>button").mouseover(function(){
	$(this).css({"border":"1px solid #91C96C","color":"#91C96C"}).siblings().css({"border":"1px solid #E5E5E5","color":"#7D7D7D"});
}).mouseout(function(){
	$(this).css({"border":"1px solid #E5E5E5","color":"#7D7D7D"}).siblings().css({"border":"1px solid #E5E5E5","color":"#7D7D7D"});
});

$('.removeOnet').click(function(){
		$(this).parent().parent().parent().parent().remove();
});
//	保存成功
	// $(".administratorlist_add_bcbutton>button").click(function () {
	// 	if($("#save_success").length!=0) return false;
	// 	$('<div id="save_success"><p>正在保存...</p><button>确认</button></div>').appendTo(".administratorlist_add_input");
	// 	$("#save_success button").click(function () {$("#save_success").remove()});
	// 	setTimeout(function(){
	// 		$("#save_success p").html("保存成功");
	// 		$("#save_success button").show();
	// 		$("#save_success p").css({"line-height":"142px"})
	// 	},1000)
	// });
//	$(".password_manage>div>div button").click(function () {
//		if($("#save_success_password").length!=0) return false;
//		$('<div id="save_success_password"><p>正在保存...</p><button>确认</button></div>').appendTo(".password_manage");
//		$("#save_success_password button").bind("click",function (){$("#save_success_password").remove();});
//		setTimeout(function () {
//			$("#save_success_password p").html("保存成功");
//			$("#save_success_password button").show();
//			$("#save_success_password p").css({"line-height":"142px"})
//		},1000)
//	});
	// $(".save").click(function(){
	// 	if($("#save_role").length!=0) return false;
	// 	$('<div id="save_role"><p>正在保存...</p><button>确认</button></div>').appendTo(".add_role_div");
	// 	$("#save_role button").click(function(){$("#save_role").hide();});
	// 	setTimeout(function(){
	// 		$("#save_role p").html("保存成功");
	// 		$("#save_role button").show();
	// 		$("#save_role p").css({"line-height":"142px"})
	// 	},1000)
	// });
	// $(".add_principal button").click(function () {
	// 	$("#save_princ").remove();
	// 	$('<div id="save_princ"><p>正在保存...</p><button>确认</button></div>').appendTo(".add_principal");
	// 	$("#save_princ button").click(function(){$("#save_princ").remove()});
	// 	setTimeout(function(){
	// 		$("#save_princ p").html("保存成功");
	// 		$("#save_princ button").show();
	// 		$("#save_princ p").css({"line-height":"122px"})
	// 	},1000)
	// });
	try{

	/* 6.2 折线图*/
	    $('#container').highcharts({
/*        title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },*/
        xAxis: {
            categories: [1, 2, 3, 4, 5, 6,7, 8, 9, 10, 11, 12]
        },
        yAxis: {
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
/*        tooltip: {
            valueSuffix: '°C'
        },*/
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '新增用户',
            data: [12, 13, 3, 2, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: '失效用户',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: '新增体验用户',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }]
    });
    }catch(e){}
	
	

	/*日历*/
	$('.yearList li').each(function(index) {
        $(this).click(function(){
			$('.yearList li').removeClass('active');
			$(this).addClass('active');	
			$('.yearCon').css('display','block');
			$('.yearCon li').each(function(index) {
                $(this).click(function(){
					$('.yearCon').css('display','none');	
				});
            });
		});
 	});
// 	登陆验证
//	 $.ajax({
//		url:"http://www.nbinbi.com/waterObj/index.php/Admin/Login/checkloginstatus",
//		type:"get",
//		dataType:"jsonp",
//		success:function (data){
//			data.status==-1&&(window.dialog(data.msg),setTimeout(function (){window.location.href="login.html"},1000));
//			data.status==-3&&(alert(data.msg),setTimeout(function (){window.location.href="login.html"},1000));
//		}
//	});
//	
	// 登陆验证
	 $.ajax({
		url:"http://www.nbinbi.com/waterObj/index.php/Admin/Login/checkloginstatus",
		type:"get",
		dataType:"jsonp",
		success:function (data){
			
			data.status==-1&&(window.dialog(data.msg),setTimeout(function (){window.parent.location.href="login.html"},1000));
			try{
				document.getElementById("name").innerHTML=$.cookie("name");
			}catch(e){}
		},error:function (){
			try{
				document.getElementById("name").innerHTML=$.cookie("name");
			}catch(e){}
			
		}
	});
}
/*图片上传*/
function previewImage(file) {
	var MAXWIDTH  = 640;
	var MAXHEIGHT = 200;
	var div = document.getElementById('preview');
	if (file.files && file.files[0]) {
		div.innerHTML ='<img id=imghead>';
		var img = document.getElementById('imghead');
		img.onload = function(){
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width  =  rect.width;
			img.height =  rect.height;
//                 img.style.marginLeft = rect.left+'px';
			img.style.marginTop = rect.top+'px';
		};
		var reader = new FileReader();
		reader.onload = function(evt){img.src = evt.target.result;};
		reader.readAsDataURL(file.files[0]);
	}
	else {//兼容IE
		var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		file.select();
		var src = document.selection.createRange().text;
		div.innerHTML = '<img id=imghead>';
		var img = document.getElementById('imghead');
		img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
		var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
		status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
		div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
	}
}
function clacImgZoomParam( maxWidth, maxHeight, width, height ){
	var param = {top:0, left:0, width:width, height:height};
	if( width>maxWidth || height>maxHeight ) {
		rateWidth = width / maxWidth;
		rateHeight = height / maxHeight;

		if( rateWidth > rateHeight ) {
			param.width =  maxWidth;
			param.height = Math.round(height / rateWidth);
		}else {
			param.width = Math.round(width / rateHeight);
			param.height = maxHeight;
		}
	}
	param.left = Math.round((maxWidth - param.width) / 2);
	param.top = Math.round((maxHeight - param.height) / 2);
	return param;
}

