$(function () {
    var aida=[];
    $.ajax({
        url:"http://www.nbinbi.com/waterObj/index.php/Admin/Auth/returnControllerMethod",
        type:"get",
        dataType:"jsonp",
        success:function(data){
            var str='';
            $.each(data.data,function(data,val0) {
                str+= ' <div class="jurisdiction_selected_div">' +
                    '  <div class="user_manage"><input type="checkbox"/><span>' + val0.c_tip + '</span></div>' +
                    ' <div class="system_selected">' +
                    ' <ul class="clear">' +
                    ''+li(val0.child)+''+
                    ' </ul>' +
                    ' </div>' +
                    ' </div>';
            });
            function li(val0){
                var str1='';
                $.each(val0,function(index,val){
                    str1+='<li><input type="checkbox" flog='+val.id+'><span>'+val.mtip+'</span></li>';
                });
                return str1;
            }
            $('.jurisdiction_selected').append(str);
        }
	});
    //权限内容加载     
    var id = getUrlParam("id");
    $.ajax({
    	type:"get",
    	url:"http://www.nbinbi.com/waterObj/index.php/Admin/Auth/reAccess",
		data:{"id":id},
		dataType:"jsonp",
		success:function(data){
			var dwq=$(".system_selected input");
			var web=0;
			var webb=0;
			$.each(dwq,function(index,val){
				for(var i = 0,len = data.data.access.length;i<len;i++){
					if($(val).attr('flog')==data.data.access[i]){
						$(val).attr('checked',true);
					}
				}
			});
		},error:function(data){
			console.log("数据请求失败");
		}
    });
    
    //全选与全不选
    var a=0,b=0,c=0,d=0,f=0;
    $(" .user_manage:eq(0) input").click(function () {
        if(a==0) {
            $(".system_selected:eq(0) input").prop("checked",true);
            a=1;
        }else {
            $(".system_selected:eq(0) input").prop("checked",false);
            a=0;
        }
    });
    $(" .user_manage:eq(1) input").click(function () {
        if(b==0) {
            $(".system_selected:eq(1) input").prop("checked",true);
            b=1;
        }else {
            $(".system_selected:eq(1) input").prop("checked",false);
            b=0;
        }
    });
    $(" .user_manage:eq(2) input").click(function () {
        if(c==0) {
            $(".system_selected:eq(2) input").prop("checked",true);
            c=1;
        }else {
            $(".system_selected:eq(2) input").prop("checked",false);
            c=0;
        }
    });
    $(" .user_manage:eq(3) input").click(function () {
        if(d==0) {
            $(".system_selected:eq(3) input").prop("checked",true);
            d=1;
        }else {
            $(".system_selected:eq(3) input").prop("checked",false);
            d=0;
        }
    });
    $(" .user_manage:eq(4) input").click(function () {
        if(f==0) {
            $(".system_selected:eq(4) input").prop("checked",true);
            f=1;
        }else {
            $(".system_selected:eq(4) input").prop("checked",false);
            f=0;
        }
    });
    
    //配置权限
    var access=[];
    $(".jurisdiction_confirm").click(function(){
        var oInput=$('.jurisdiction_selected').find('input');
        access=[];
        $.each(oInput,function(index,val){
            $(val).is(':checked')&&$(val).attr('flog')&&access.push($(val).attr('flog'))
        });

        if(access!=""){
            $.ajax({
                url: "http://www.nbinbi.com/waterObj/index.php/Admin/Auth/setGroupAccess",
                type: "get",
                dataType: "jsonp",
                data: {"access": access,"aid": id},
                success: function (data) {
                    alert(data.msg);
                    console.log(data);
                }
            });
        }else{
            alert('请选择用户组权限!')
        }
    });
    $(".return_div").click(function(){window.location.href="role_list.html"});            
      
    //获取url的id值
    function getUrlParam(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r!=null) return unescape(r[2]); return null; //返回参数值
    }
});
