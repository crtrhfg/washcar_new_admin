$(function(){
    fullAdminList(1,function (count){
        $(".tcdPageCode").createPage({
            pageCount:count,
            current:1,
            backFn:function(p){
                fullAdminList(p)
            }
        });
    });
    function fullAdminList(page,fn){
        !page&&(page=1);
        $.ajax({
            url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/selServiceList",
            dataType:"jsonp",
            data:{"page":page},
            success:function(data){
                if(data.status==1){
                     var count =Math.ceil(data.len/14);
                    var str="";
                    var strhead=""; //固定头部文字;
                    var id=0;
                    $.each(data.data,function(data,val){
                        id++;
                        str+="<tr><td>"+id+"</td><td>"+val.phonenum+"</td><td>"+val.name+"</td><td>"+val.building+"</td>" +
                            "<td><a href='admin_add.html?seid="+val.seid+"'><button class='send' id='send'>订购</button></a><button class='remove' flog="+val.seid+">删除</button>"+
                            "</td></tr>";
                        strhead="<tr class='admin_listcontent_mean'><td>序号</td><td>手机号</td><td>姓名</td><td>楼盘</td><td>操作</td></tr>";
                    });
                    $("#search>input").eq(1).css("cursor","pointer");                
                    $(".service_order .admin_service").html(strhead+str);
                    /*删除*/
                    $(".remove").bind("click", function () {
                        var id=$(this).attr("flog");
                        if ($(".del").length != 0) return false;
                        $('<div class="del"><p><img src="./img/warn.png"/><span>是否删除该管理</span></p>' +
                            '<button class="confirm" flog='+id+'>确定</button>' +
                            '<button class="cancel_pass">取消</button></div>').appendTo(".service_order");
                        var parent=this.parentNode.parentNode;
                        $(".confirm").click(function () {
                            var seid=$(this).attr("flog");
                            $.ajax({
                                url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/delService",
                                type:"get",
                                dataType:"jsonp",
                                data:{"seid":seid},
                                success:function(data){
                                    $(parent).remove();
                                    $(".del").remove();
                                    alert(data.msg);
                                }
                            })
                        });
                        $(".cancel_pass").click(function () {$(".del").remove();});
                    });
                    fn&&fn(count);
                }else{
                    alert(data.msg);
                }
                $("tr:even").css("background-color","#F2F2F3");
            }
        });
    }
    //查询
    $("#search>input").eq(1).click(function(){
        var keyword=$(".text_num").val();
         fullAdminListd(1,function (count){
            $(".tcdPageCode").createPage({
                pageCount:count,
                current:1,
                backFn:function(p){
                    fullAdminListd(p)
                }
            });
        });
        function fullAdminListd(page,fn){
        	if(keyword!=""){
        		!page&&(page=1);
	            $.ajax({
	                url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/selKeyService",
	                type:"get",
	                dataType:"jsonp",
	                data:{"keyword":keyword},
	                success:function(data){
	                	if(data.status==1){
		                    var count=Math.ceil(data.len / 14);
		                    var str="";
		                    var strhead=""; //固定头部文字;
		                    var id=0;
		                    $.each(data.data,function(data,val){
		                        id++;
		                        str+="<tr><td>"+id+"</td><td class='phone'>"+val.phonenum+"</td><td>"+val.name+"</td>"+
		                            "<td>"+val.building+"</td><td><a href='admin_add.html?seid="+val.seid+"'><button class='send' id='send'>订购</button></a><button class='remove' flog=" + val.seid + ">删除</button>"+
		                            "</td></tr>";
		                        strhead="<tr class='admin_listcontent_mean'><td>序号</td><td>手机号</td><td>姓名</td><td>楼盘</td><td>操作</td></tr>";
		                    });
		                    $("#search>input").eq(1).css("cursor","pointer");                
		                    $(".service_order .admin_service").html(strhead+str);
		                       /*删除*/
		                    $(".remove").click(function(){
		                        var id=$(this).attr("flog");
		                        if ($(".del").length != 0) return false;
		                        $('<div class="del"><p><img src="./img/warn.png"/><span>是否删除该管理</span></p>' +
		                            '<button class="confirm" flog='+id+'>确定</button>' +
		                            '<button class="cancel_pass">取消</button></div>').appendTo(".service_order");
		                        var parent=this.parentNode.parentNode;
		                        $(".confirm").click(function () {
		                            var seid=$(this).attr("flog");
		                            $.ajax({
		                                url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/delService",
		                                type:"get",
		                                dataType:"jsonp",
		                                data:{"seid":seid},
		                                success:function(data){
		                                    $(parent).remove();
		                                    $(".del").remove();
		                                    alert(data.msg);
		                                }
		                            })
		                        });
		                        $(".cancel_pass").click(function () {$(".del").remove();});
		                        fn&&fn(count);
		                    });
	                    	
	                    }else{
	                    	alert(data.msg);
	                    }
                        $("tr:even").css("background-color","#F2F2F3");
                	}
           	 	})
        	}else{
        		alert("请输入关键字");
       	 	}
        }
    });
});