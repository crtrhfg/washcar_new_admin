$(function(){
	var wid = getUrlParam('wid');
	 $.ajax({
        url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/reWorkerMsg",
        type:"get",
        dataType:"jsonp",
        data:{"wid":wid},
        success:function(data){
            var wname=data.data.wname;
            var wpwd=data.data.wpwd;	
            var phonenum=data.data.phonenum;	
            var sex=data.data.sex;	
            $("#names").val(wname);          
            $("#numbers").val(phonenum);
            $("#sex").val(sex);
            $(".bc_change_principal").click(function(){
                var wname=$("#names").val();   
                var phonenum=$("#numbers").val();   
                var sex=$("#sex").val();
            	$.ajax({
            		url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/saveWorker",
            		type:"get",
            		dataType:"jsonp",
            		data:{"wid":wid,"wname":wname,"phonenum":phonenum,"sex":sex,"task":1},
            		success:function(data){
            			alert(data.msg);
                        if(data.status==1)window.location.href="staff_management.html";
            		}
            	});            	
            });
        }
    }); 
	 
});
//获取url的id值
function getUrlParam(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg);  //匹配目标参数
		if (r!=null) return unescape(r[2]); return null; //返回参数值
} 