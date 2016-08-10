$(function(){
    //返回楼盘列表
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
            url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/reVillageList",
            type:"get",
            dataType:"jsonp",
            data:{"page":page},
            success:function(data){
            	var wname;
                var count =Math.ceil(data.len/14);
                var str="";
                var strhead=""; //固定头部文字
                $.each(data.data,function(data,val){
                	wname=val.wname;
                	if(wname!=null){
                		str+="<tr><td class='province'>"+val.province+"</td><td class='city'>"+val.city+"</td><td class='county'>"+val.county+"</td><td class='building'>"+val.building+"</td><td class='wname'>"+val.wname+"</td>" +
                        "<td class='housemanage_button'><div><button class='remove' flog="+val.vid+">删除</button><a href='house_manage_change.html?vid="+val.vid+"'><button class='change_house'>修改</button></a></div></td></tr>";
                	}else{
                		str+="<tr><td class='province'>"+val.province+"</td><td class='city'>"+val.city+"</td><td class='county'>"+val.county+"</td><td class='building'>"+val.building+"</td><td class='wname'>无负责人</td>" +
                        "<td class='housemanage_button'><div><button class='remove' flog="+val.vid+">删除</button><a href='house_manage_change.html?vid="+val.vid+"'><button class='change_house'>修改</button></a></div></td></tr>";
                	}
                    strhead="<tr class='admin_listcontent_mean'><td>省市</td><td>城市</td><td>县区</td><td>楼盘</td><td>负责人</td><td>操作</td></tr>";
                });
                $("#search>input").eq(1).css("cursor","pointer");
                //查询
                $("#search>input").eq(1).bind("click",function(){
                    var page=$(".current").text();
                    var xq=$(".text_num").val();
                    !page&&(page=1);
                    if(xq!=""){
                        $.ajax({
                            url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/returnfloorList",
                            type:"get",
                            dataType:"jsonp",
                            data:{"page":page,"xq":xq},
                            success:function(data){
                            	if(data.status==1){
	                            	var count =Math.ceil(data.len/14);
	                                var str="";
	                                var strhead=""; //固定头部文字
	                                $.each(data.data,function(data,val){
	                                	if(wname!=null){
		                                    str+="<tr><td>"+val.province+"</td><td>"+val.city+"</td><td>"+val.county+"</td><td class='building'>"+val.building+"</td><td>"+val.wname+"</td>" +
		                                    "<td class='housemanage_button'><div><button class='remove' flog="+val.vid+">删除</button><button class='change_house'>修改</button></div></td></tr>";
	                                    }else{
	                                    	str+="<tr><td>"+val.province+"</td><td>"+val.city+"</td><td>"+val.county+"</td><td class='building'>"+val.building+"</td><td>无负责人</td>" +
		                                    "<td class='housemanage_button'><div><button class='remove' flog="+val.vid+">删除</button><button class='change_house'>修改</button></div></td></tr>";
	                                    }
	                                    strhead="<tr><td>省市</td><td>城市</td><td>县区</td><td>楼盘</td><td>负责人</td><td>操作</td></tr>";
	                                });
	                                $(".admin_listcontent .admin_list_list").html(strhead+str);
                            	}else{
                            		alert(data.msg);
                            	} 
                            }
                        });
                    }else{
                        alert("请输入关键字")
                    }
                });
                $(".admin_listcontent .admin_list_list").html(strhead+str);
                /*楼盘管理删除*/
                $(".remove").bind("click", function () {
                    var id=$(this).attr("flog");
                    if ($(".del").length != 0) return false;
                    $('<div class="del"><p><img src="./img/warn.png"/><span>是否删除该管理</span></p>' +
                        '<button class="confirm" flog='+id+'>确定</button>' +
                        '<button class="cancel_pass">取消</button></div>').appendTo(".admin_listcontent");
                    var parent=this.parentNode.parentNode;
                    $(".confirm").click(function () {
                        var vid=$(this).attr("flog");
                        $.ajax({
                            url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/delVillage",
                            type:"get",
                            dataType:"jsonp",
                            data:{"vid":vid},
                            success:function(data){
                                $(parent).parent().remove();
                                $(".del").remove();
                                alert(data.msg);
                            }
                        })
                    });
                    $(".cancel_pass").click(function(){$(".del").remove();});
                });
                var vid = getUrlParam('vid');
              //修改楼盘
                $(".house_savee").click(function(){
                    var vid = getUrlParam('vid');
                    var province=$("#province").val();
                    var city=$("#city").val();
                    var county=$("#county").val();
                    var building=$("#aa").val();
                    var wids=$("#selects").val();
                    $.ajax({
                        url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/updateVillage",
                        dataType:"jsonp",
                        data:{"vid":vid,"province":province,"city":city,"county":county,"building":building,"wids":wids},
                        success:function(data){
                            console.log(data);
                            if(data.status==1){
                                $("#save_password").remove();
                                $('<div id="save_password"><p>正在保存...</p><button>确认</button></div>').appendTo("#add_house_selected");
                                $("#save_password button").click(function(){
                                 $("#save_password").remove();
                                 window.location.href="house_manage.html";
                                });
                                setTimeout(function(){
                                    $("#save_password p").html(data.msg);
                                    $("#save_password button").show();
                                    $("#save_password p").css({"line-height":"142px"})
                                },1000);
                            }else{
                                alert(data.msg)
                            }
                        }
                    })
            		$("#save_password").show();
                });
                //获取url的id值
                function getUrlParam(name){
                    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
                    if (r!=null) return unescape(r[2]); return null; //返回参数值
                }
                fn&&fn(count);
                $("tr:even").css("background-color","#F2F2F3");
            }
        });
    }
    //增加楼盘负责人
    var floga="";
    $("#selects").bind("click",function(){
        floga = $('#selects option:selected').attr("value");
    });
    $.ajax({
        url:"http://www.nbinbi.com/waterObj/index.php/Admin/Order/reTruename",
        type:"get",
        dataType:"jsonp",
        success:function(data){
            var str="";
            $.each(data.data,function(data,val){
                str+='<option value='+val.wid+'>'+val.wname+'</option>'
            });
            $(".selected_principal select").append(str);
        }
    });
    //增加楼盘
    $(".house_save").click(function () {
        var province=$("#province").val(),q="省份";
        var city=$("#city").val(),w="地级市";
        var county=$("#county").val(),e="市、县级市、县";
        var builing=$(".selected_house input").val(),r="";
        var wids=floga;
        if(province!=q&&city!=w&&county!=e&&builing!=r){
            $.ajax({
                url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/addVillage",
                type:"get",
                dataType:"jsonp",
                data:{"province":province,"city":city,"county":county,"building":builing,"wids":wids},
                success:function(data){
                    if(data.status==1){
                        $("#save_password").remove();
                        $('<div id="save_password"><p>正在保存...</p><button>确认</button></div>').appendTo("#add_house_selected");
                        $("#save_password button").click(function(){
                            $("#save_password").remove();
                            window.location.href="house_manage.html";
                        });
                        setTimeout(function(){
                            $("#save_password p").html(data.msg);
                            $("#save_password button").show();
                            $("#save_password p").css({"line-height":"142px"})
                        },1000);
                    }else{
                        alert(data.msg);
                    }
                }
            });
            $("#save_password").show();
        }else{
            $("#save_password").hide();
            alert("请把资料填写完整");
        }
    });
    $(".add_house_selected_div ul li select").click(function(){$(this).css("color","#333333")});
    $(".selected_house input").focus(function(){$(this).css("color","#333333")});
    $("#selects").click(function(){$(this).css("color","#333333");});
    //增加负责人
    $(".selected_principal+span").click(function(){
    	window.location.href="add_principals.html"
    });
    //楼盘管理
    $(".house_manage_add").click(function(){window.location.href="house_manage_add.html"});
});
