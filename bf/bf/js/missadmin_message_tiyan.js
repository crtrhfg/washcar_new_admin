$(function(){
	 var sid = getUrlParam('sid');
//	var uid = 8;
$.ajax({
	url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/reLoseSupmess",
	dataType:"jsonp",
	data:{"sid":sid},			
	success:function(data){
		var s="";
		console.log(data)
		$.each(data.data,function(data,val){
			console.log(val)
			s='<li>车主姓名: '+val.name+'</li><li class="admin_listcontent_xinxi">手机号: '+val.phone+'</li><li class="admin_listcontent_xinxi" style="width:15%">当前业务:体验用户</li>' 
			$(".missadmin_message_adminmes").html(s);	
			$(".missadmin_message_adminmtb").html('<tr class="admin_listcontent_xinxitabiaoti"><td colspan="8">清洗清单</td></tr>'+
												  '<tr class="admin_listcontent_xinxitaneirong clearLogs" >'+
												  '<td>时间</td><td>负责人</td><td>清洗人员</td><td>清洗车辆</td><td>车位号</td><td>服务项目</td><td>次数</td><td>费用</td></tr>'+					
												  '<tr class="admin_listcontent_xinxitaneirong" >'+
												  '<td>'+val.suptime+'</td><td></td><td>'+val.clearpeople+'</td><td>'+val.carnum+'</td><td>'+val.park+'</td><td>普洗</td><td>'+val.tip+'</td><td>'+val.principal+'</td></tr>'+
												  '<tr class="admin_listcontent_xinxitabiaoti admin_listcontent_tongji"><td colspan="8">总费用合计 = 1（元）</td></tr>'+
												  '<tr class="admin_listcontent_xinxitabiaoti admin_listcontent_tongji"><td colspan="8">2016-4-20 备注:</td></tr>')
		});
//		var s="";
//		var str = "";
//		var strhead = "";
//		var strfoot = "";
//		var strfooter = "";
//		var strfootery="";
		//车主信息  业务信息
//		s='<li>车主姓名: '+data.data.name+'</li><li class="admin_listcontent_xinxi">手机号: '+data.data.phone+'</li><li class="admin_listcontent_xinxi" style="width:15%">当前业务:体验用户</li>' 
//		$(".missadmin_message_adminmes").html(s);				
//		//表格内容
//		$.each(data.data.logs,function(data,val){					
//			str+='<tr class="admin_listcontent_xinxitaneirong"><td>'+val.finishdate+'</td><td>'+val.wname+'</td><td>'+val.name+'</td><td>'+val.carnum+'</td><td>'+val.park+'</td><td>'+val.optype+'</td><td>1</td><td>'+val.price+'</td></tr>';
//			strhead='<tr class="admin_listcontent_xinxitabiaoti"><td colspan="8">清洗清单</td></tr><tr class="admin_listcontent_xinxitaneirong clearLogs" ><td>时间</td><td>负责人</td><td>清洗人员</td><td>清洗车辆</td><td>车位号</td><td>服务项目</td><td>次数</td><td>费用</td></tr>';
//		});		
//		//总计费用
//		$.each(data.data.price,function(data,val){
//			strfooter+='<span>'+val.singlename+'</span>='+val.totalprice+'(元)</td></tr>'
//		});
//		strfoot='<tr class="admin_listcontent_xinxitabiaoti admin_listcontent_tongji"><td colspan="8">总费用合计 ='+data.data.rate.mprice+'（元）  其中:包月-小车'+data.data.rate.ratename+'（元）'
//		strfootery='<tr class="admin_listcontent_xinxitabiaoti admin_listcontent_tongji"><td colspan="8">2016-4-20 备注:</td></tr>'		
//		$(".missadmin_message_adminmtb").html(strhead+str+strfoot+strfooter+strfootery);
//		}	
	}
});
//获取url的id值
function getUrlParam(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg);  //匹配目标参数
		if (r!=null) return unescape(r[2]); return null; //返回参数值
} 
})
