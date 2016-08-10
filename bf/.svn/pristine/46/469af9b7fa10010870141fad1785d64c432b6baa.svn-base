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
            url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/reWorkerList",
            type:"get",
            dataType:"jsonp",
            data:{"page":page},
            success:function(data){
                var count =Math.ceil(data.len/14);
                var str="";
                var strhead=""; //固定头部文字
                $.each(data.data,function(data,val){
                    val.building = val.building==null?"该负责人暂时没有指定负责的楼盘!":val.building;
                    str+=("<tr>" +
                    "<td class='wid'>"+val.wname+"</td>" +
                    "<td>"+val.phonenum+"</td>" +
                    "<td>"+val.sex+"</td>" +
                    "<td class='staff_building'>"+val.building+"</td>" +
                    "<td>" +
                    "<div class='staff_botton'>" +
                    "<button class='adminlist_set_change' flog="+val.wid+">修改密码</button>" +
                    "<a href='change_principal.html?wid="+val.wid+"'><button>修改</button></a>"+ 
                    "<button class='adminlist_set_del' flog="+val.wid+">删除</button>" +
                    "</div></td>"+
                    "</tr>");
                    strhead="<tr><td class='wid'>姓名</td><td>手机号</td><td>性别</td><td>楼盘</td><td>操作</td></tr>";
                });
                $("#search>input").eq(1).css("cursor","pointer");
                //查询
                $("#search>input").eq(1).bind("click",function() {
                    var keyword = $(".text_num").val();
                    !page&&(page=1);
                    if(keyword!=""){
                        $.ajax({
                            url: "http://www.nbinbi.com/waterObj/index.php/Admin/Complex/selWokerKeyword",
                            type: "get",
                            dataType: "jsonp",
                            data: {"keyword":keyword},
                            success: function (data) {
                                 if(data.status==1){
                                    var count = Math.ceil(data.len / 14);
                                    var str = "";
                                    var strhead = ""; //固定头部文字
                                    $.each(data.data, function (data, val) {
                                        str += ("<tr>" +
                                        "<td class='wid'>" + val.wname + "</td>" +
                                        "<td>" + val.phonenum + "</td>" +
                                        "<td>" + val.sex + "</td>" +
                                        "<td class='staff_building'>" + val.building + "</td>" +
                                        "<td>" +
                                        "<div class='staff_botton'>" +
                                        "<button class='adminlist_set_change'  flog=" + val.wid + ">修改密码</button>" +
                                        "<a href='change_principal.html?wid="+val.wid+"'><button>修改</button></a>" +
                                        "<button class='adminlist_set_del'  flog=" + val.wid + ">删除</button>" +
                                        "</div></td>" +
                                        "</tr>");
                                        strhead = "<tr><td class='wid'>姓名</td><td>手机号</td><td>性别</td><td>楼盘</td><td>操作</td></tr>";
                                    });
                                    $(".admin_list_list").html(strhead+str)
                                }else{
                                    alert(data.msg);
                                }
                                
                            }
                        })
                    }else{
                        alert("请输入关键字");
                    }
                });
                $(".admin_list_list").html(strhead+str);
                $(".house_manage_add").click(function(){window.location.href="add_principal.html"});
                function getUrlParam(name){
                    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
                    if (r!=null) return unescape(r[2]); return null; //返回参数值
                }
                //修改密码
                $(".adminlist_set_change").bind("click", function () {
                    var wid=$(this).attr("flog");
                    var wids=$(this).attr("flog");
                    var id=$(this).attr("flog");
                    var str1="";
                    $(".del").hide();
                    $(".change_password").show();
                    $(".change_password").remove();
                    str1='<div class="change_password">' +
                        '<div><span class="confirm_passwordnew">新密码:</span>&nbsp;&nbsp;<input type="password" id="pass"/><br/><span id="pass_"></span>' +
                        '<br/><span class="confirm_password">确认密码:</span>&nbsp;&nbsp;<input type="password" id="password"/><br/><span id="password_"></span></div>' +
                        '<button onclick="register()" id="confirm_pass" flog='+wids+'>确定</button><button>取消</button></div>';
                    $('.admin_listcontent').append(str1);
                    $("#confirm_pass").click(function(){
                        $(".change_password").show();
                        var old_pw=$("#pass").val();
                        var newpwd=$("#password").val();
                        if(old_pw==newpwd){
                            $.ajax({
                                url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/reWorkerPwd",
                                type:"get",
                                dataType:"jsonp",
                                data:{"wid":wid,"newpwd":newpwd},
                                success:function(data){
                                    alert(data.msg);
                                }
                            })
                        }else{
                            alert("密码修改失败")
                        }
                    });
                    $(".change_password>div+button+button").click(function () {$(".change_password").hide();});
                });
                //删除管理员
                $(".adminlist_set_del").click(function () {
                    var id=$(this).attr("flog");
                    var str1="";
                    $(".change_password").hide();
                    $(".del").show();
                    $(".del").remove();
                    str1='<div class="del"><p><img src="./img/warn.png"/><span>是否删除该管理</span></p>' +
                        '<button class="confirm" flog='+id+'>确定</button>' +
                        '<button class="cancel_pass">取消</button></div>';
                    $(".admin_listcontent").append(str1);
                    var parent=this.parentNode.parentNode.parentNode;
                    $(".confirm").click(function () {
                        var wid=$(this).attr("flog");
                        $.ajax({//删除
                            url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/delWorker",
                            type:"get",
                            dataType:"jsonp",
                            data:{"wid":wid},
                            success:function(data){
                                $(parent).remove();
                                $(".del").hide();
                                 alert(data.msg);
                            }
                        });
                    });
                    $(".cancel_pass").click(function () {$(".del").hide();});
                });
                fn&&fn(count);
               // console.log(data);
            }
        });
    }
});