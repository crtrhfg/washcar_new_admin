$(function(){
	$(".login_bttton").bind('click',function(){
		var name  = $(".phoneNum").val();
		var pwd = $(".pwd").val();		
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/Indvdio/checkLogin",
			dataType:"jsonp",
			data:{"name":name,"pwd":pwd},
			success:function(data){
				console.log(data)
				if(data.status ==1){
					$.cookie('name',name,24);
					window.location.href="index.html";
				}else if(data.status ==-3){
					alert(data.msg)
					window.location.href="login.html";
				}else if(data.status ==0){
					alert(data.msg)
					$(".loggintishi").html(data.msg);
				}			
			}
		})
	})

})