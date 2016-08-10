$(function(){
	$(".login_bttton").bind('click',function(){
		var name  = $(".phoneNum").val();
		var pwd = $(".pwd").val();
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Indvdio/checkLogin",
			dataType:"jsonp",
			data:{"name":name,"pwd":pwd},
			success:function(data){
				if(data.status ==1){
					$.cookie('name',name,24);
					window.location.href="index.html";
				}else{
					alert(data.msg);
					$(".loggintishi").html(data.msg);
				}
			}
		});
	});
	$(".pwd").bind('keydown',function(eveb){
		if(eveb.keyCode=="13"){
			$(".login_bttton")[0].click();
		}
	});
});
