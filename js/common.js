window.onload=function(){
	$.ajax({
		type:"get",
		url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/expCount",
		dataType:"jsonp",
		success:function(data){
			console.log(data);
			try{
				$(".gengxin").text(data.data[0].len);
				$(".daoqitixing_opnew").click(function(){
					$(".gengxin").text(0);
				});
			}catch(e){}
		}
	});
	$('.header_rigt_out').bind('click',function(){
		$.ajax({
			url:'http://www.nbinbi.com/waterObj/index.php/Admin/Indvdio/logout',
			dataType:'jsonp',
			success:function(data){
				console.log(data);
				data.status==1&&($.cookie("name","请登录",-1),window.location.href='login.html')
			}
		});
		console.log(1);

	});
	$(".header_rigt_admin").find("font").text(($.cookie("name")));

	//	左边列表切换效果
	$(".yhguanlibutton").click(function(){
		$(".content_left_listhideo").slideToggle();
		$(".content_left_listhidet,.content_left_listhidef,.content_left_listhides,.content_left_listhidee,.content_left_listhidem").hide();
		$(".listimgo").toggleClass("content_left_listimgup");
		$(".listimgt,.listimgf,.listimgs,.listimge,.listimgm").addClass("content_left_listimgdown").removeClass("content_left_listimgup");
	});
	$(".yhhuifangbutton").click(function(){
		$(".content_left_listhidet").slideToggle();
		$(".content_left_listhideo,.content_left_listhidef,.content_left_listhides,.content_left_listhidee,.content_left_listhidem").hide();
		$(".listimgt").toggleClass("content_left_listimgup");
		$(".listimgo,.listimgf,.listimgs,.listimge,.listimgm").addClass("content_left_listimgdown").removeClass("content_left_listimgup");
		$(".gengxin").show();
	});
	$(".yedingzhibutton").click(function(){
		$(".content_left_listhidef").slideToggle();
		$(".content_left_listhideo,.content_left_listhidet,.content_left_listhides,.content_left_listhidee,.content_left_listhidem").hide();
		$(".listimgf").toggleClass("content_left_listimgup");
		$(".listimgo,.listimgt,.listimgs,.listimge,.listimgm").addClass("content_left_listimgdown").removeClass("content_left_listimgup");
	});

	$(".tjbaobiaobutton").click(function(){
		$(".content_left_listhides").slideToggle();
		$(".content_left_listhideo,.content_left_listhidet,.content_left_listhidef,.content_left_listhidee,.content_left_listhidem").hide();
		$(".listimgs").toggleClass("content_left_listimgup");
		$(".listimgo,.listimgt,.listimgf,.listimge,.listimgm").addClass("content_left_listimgdown").removeClass("content_left_listimgup");
	});
	$(".qxguanlibutton").click(function(){
		$(".content_left_listhidee").slideToggle();
		$(".content_left_listhideo,.content_left_listhidet,.content_left_listhides,.content_left_listhidef,.content_left_listhidem").hide();
		$(".listimge").toggleClass("content_left_listimgup");
		$(".listimgo,.listimgt,.listimgs,.listimgf,.listimgm").addClass("content_left_listimgdown").removeClass("content_left_listimgup");
	});
	$(".ygguanlibutton").click(function(){
		$(".content_left_listhidem").slideToggle();
		$(".content_left_listhideo,.content_left_listhidet,.content_left_listhides,.content_left_listhidee,.content_left_listhidef").hide();
		$(".listimgm").toggleClass("content_left_listimgup");
		$(".listimgo,.listimgt,.listimgs,.listimgf,.listimge").addClass("content_left_listimgdown").removeClass("content_left_listimgup");
	});
	//	鼠标点击无下拉选项时的背景颜色变换
	$(".nochildrenl").click(function(){
		$(this).css("background-color","#85C45C");
		$(this).children().children().css("color","white");
		$(".nochildrenli,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
		$(".nochildrenli,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
		$(".mainHeader").html('<div class="while">现金用户<span><a href="shouye.html" target="index">×</a></span></div>');
		$(".while>span").css("left","20.5%");
		$(".while>span").click(function(){$(".while").hide();});
		$(".service_order_opnew,.staff_opnew,.commission_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	});
	$(".nochildrenli").click(function(){
		$(this).css("background-color","#85C45C");
		$(this).children().children().css("color","white");
		$(".nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
		$(".nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
		$(".mainHeader").html('<div class="while">楼盘管理<span><a href="shouye.html" target="index">×</a></span></div>');
		$(".while>span").css("left","20.5%");
		$(".while>span").click(function(){$(".while").hide();});
		$(".service_order_opnew,.staff_opnew,.commission_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	});
	$(".nochildrenlii").click(function(){
		$(this).css("background-color","#85C45C");
		$(this).children().children().css("color","white");
		$(".nochildrenli,.nochildrenl,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
		$(".nochildrenli,.nochildrenl,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
		$(".mainHeader").html('<div class="while">密码管理<span><a href="shouye.html" target="index">×</a></span></div>');
		$(".while>span").css("left","20.5%");
		$(".while>span").click(function(){$(".while").hide();});
		$(".service_order_opnew,.admin_list_opnew,.staff_opnew,.commission_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	});
	$(".nochildrenliii").click(function(){
		$(this).css("background-color","#85C45C");
		$(this).children().children().css("color","white");
		$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
		$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
		$(".mainHeader").html('<div class="while">图片设置<span><a href="shouye.html" target="index">×</a></span></div>');
		$(".while>span").css("left","20.5%");
		$(".while>span").click(function(){$(".while").hide();});
		$(".service_order_opnew,.admin_list_opnew,.staff_opnew,.commission_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	});
	$(".nochildrenlz").click(function(){
		$(this).css("background-color","#85C45C");
		$(this).children().children().css("color","white");
		$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenliii,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
		$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenliii,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
		$(".mainHeader").html('<div class="while">车辆管理<span><a href="shouye.html" target="index">×</a></span></div>');
		$(".while>span").css("left","20.5%");
		$(".while>span").click(function(){$(".while").hide();});
		$(".service_order_opnew,.admin_list_opnew,.staff_opnew,.commission_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	});
	// $(".nochildrenliiy").click(function(){
	// 	$(this).css("background-color","#85C45C");
	// 	$(this).children().children().css("color","white");
	// 	$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenliii,.nochildrenly,.nochildrenlz,.nochildrenliij").css("background-color","#E3E3E3");
	// 	$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenliii,.nochildrenly,.nochildrenlz,.nochildrenliij").children().children().css("color","#686868");
	// 	$(".mainHeader").html('<div class="while">操作日志<span><a href="shouye.html" target="index">×</a></span></div>');
	// 	$(".while>span").css("left","20.5%");
	// 	$(".while>span").click(function(){$(".while").hide();});
	// 	$(".service_order_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	// });
	$(".nochildrenliij").click(function(){
		$(this).css("background-color","#85C45C");
		$(this).children().children().css("color","white");
		$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliiz").css("background-color","#E3E3E3");
		$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliiz").children().children().css("color","#686868");
		$(".mainHeader").html('<div class="while">提成管理<span><a href="shouye.html" target="index">×</a></span></div>');
		$(".while>span").css("left","20.5%");
		$(".while>span").click(function(){$(".while").hide();});
		$(".service_order_opnew,.admin_list_opnew,.staff_opnew,.commission_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	});
	$(".nochildrenliiz").click(function(){
		$(this).css("background-color","#85C45C");
		$(this).children().children().css("color","white");
		$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij").css("background-color","#E3E3E3");
		$(".nochildrenli,.nochildrenlii,.nochildrenl,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij").children().children().css("color","#686868");
		$(".mainHeader").html('<div class="while">账号列表<span><a href="shouye.html" target="index">×</a></span></div>');
		$(".while>span").css("left","20.5%");
		$(".while>span").click(function(){$(".while").hide();});
		$(".service_order_opnew,.admin_list_opnew,.staff_opnew,.commission_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	});

//contentright上面导航部分   订单用户点击后效果**********************************************************************************************
	$(".admin_list_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_add_opnew,.commission_opnew,.staff_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">订单用户<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	 });
	 $(".admin_add_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.commission_opnew,.staff_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">新增用户<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});
	$(".tryadmin_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.commission_opnew,.staff_opnew,.admin_add_opnew,.missadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">体验用户<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});
	$(".missadmin_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.commission_opnew,.staff_opnew,.admin_add_opnew,.tryadmin_opnew,.daoqitixing_opnew,.huifangjilu_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">失效用户<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});

	$(".daoqitixing_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.commission_opnew,.staff_opnew,.admin_add_opnew,.tryadmin_opnew,.huifangjilu_opnew,.missadmin_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">到期提醒<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});
	$(".huifangjilu_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.commission_opnew,.staff_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">回访记录<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});
    $(".service_order_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".huifangjilu_opnew,.admin_list_opnew,.commission_opnew,.staff_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">客户预约<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});
	$(".taocanlist_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.commission_opnew,.staff_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">套餐列表<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});
	$(".taocanlist_add_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.commission_opnew,.staff_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_oncelist_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">增加套餐<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});
	$(".taocanlist_oncelist_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.commission_opnew,.staff_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">单次项目列表<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});
	$(".taocanlist_addxiangmu_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.commission_opnew,.staff_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">增加项目<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});
	$(".statisticslist_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.commission_opnew,.staff_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_admin_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">清单<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});
	$(".statisticslist_admin_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.commission_opnew,.staff_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.statisticslist_opnew,.administratorlist_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">数据统计<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});
	$(".administratorlist_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.commission_opnew,.staff_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_addxiangmu_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.role_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">管理员列表<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});
	$(".role_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.commission_opnew,.staff_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">角色列表<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});
	$(".staff_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.role_opnew,.commission_opnew,.admin_list_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">员工列表<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
	});
	$(".commission_opnew").click(function(){
	 		$(this).css({"color":"white","background-color":"#85C45C"});
	 		$(".service_order_opnew,.admin_list_opnew,.role_opnew,.staff_opnew,.admin_add_opnew,.tryadmin_opnew,.missadmin_opnew,.daoqitixing_opnew,.taocanlist_opnew,.taocanlist_add_opnew,.taocanlist_oncelist_opnew,.statisticslist_opnew,.statisticslist_admin_opnew,.administratorlist_opnew").css({"color":"#747474","background-color":"white"});
	 		$(".mainHeader").html('<div class="while">员工提成<span><a href="shouye.html" target="index">×</a></span></div>');
	 		$(".while>span").css("left","20.5%");
	 		$(".while>span").click(function(){$(".while").hide();});
	 		$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").css("background-color","#E3E3E3");
			$(".nochildrenli,.nochildrenl,.nochildrenlii,.nochildrenliii,.nochildrenlz,.nochildrenliiy,.nochildrenliij,.nochildrenliiz").children().children().css("color","#686868");
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
};
