$(function(){
	var omid = getUrlParam('omid');
	$.ajax({
	url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/returnVisitDetial",
	dataType:"jsonp",
	data:{"omid":omid},			
	success:function(data){
		console.log(data);
		var optime,temple,quality,recom,content,wname;
		$(".carpep_xinxi_top").append('<span>车主姓名: '+data.data[0].username+'</span><span>手机号:'+data.data[0].phonenum+'</span>');
		$.each(data.data, function(index,val){
			$(".huifangjilu_messagetb").after('<tr><td>'+val.optime+'</td><td>'+val.temple+'</td><td>'+val.quality+'</td><td>'+val.recom+'</td><td>'+val.content+'</td><td>'+val.wname+'</td></tr>')
		});
	}
});
//获取url的id值
function getUrlParam(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg);  //匹配目标参数
		if (r!=null) return unescape(r[2]); return null; //返回参数值
} 
})
