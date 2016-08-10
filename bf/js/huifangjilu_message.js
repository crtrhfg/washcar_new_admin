$(function(){
	 var vsid = getUrlParam('vsid');
	 
//	var uid = 8;
	$.ajax({
	url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/returnVisitDetial",
	dataType:"jsonp",
	data:{"vsid":vsid},			
	success:function(data){
		console.log(data);
		$(".carpep_xinxi_top").append('<span>车主姓名: '+data.data.username+'</span><span>手机号:'+data.data.phonenum+'</span>')
		$(".huifangjilu_messagetb").after('<tr><td>'+data.data.optime+'</td><td>'+data.data.temple+'</td><td>'+data.data.quality+'</td><td>'+data.data.recom+'</td><td>'+data.data.content+'</td><td>'+data.data.wname+'</td></tr>')
	}
});
//获取url的id值
function getUrlParam(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg);  //匹配目标参数
		if (r!=null) return unescape(r[2]); return null; //返回参数值
} 
})
