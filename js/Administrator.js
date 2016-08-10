$(function(){
    fullAdminList(1,function (count){
        $(".tcdPageCode").createPage({
            pageCount:count,
            current:1,
            backFn:function(p){
                fullAdminList(p);
            }
        });
    });
    function fullAdminList(page,fn){
        !page&&(page=1)
        $.ajax({
            url:"http://www.nbinbi.com/waterObj/index.php/Admin/Auth/returnUserList",
            dataType:"jsonp",
            data:{"page":page},
            success:function(data){
                console.log(data);
                var count =Math.ceil(data.len/14);
                var str="";
                var strhead=""; //固定头部文字
                var statues=["冻结","正常"];
                var statue=["冻结","解冻"];
                var id1=0;
                $.each(data.data,function(data,val){
                    var recip=val.recip || "空";
                    var rectime=val.rectime || "空";
                    id1++;
                    if(val.luck==1){
                       str+=("<tr>" +
                            "<td  class='admin_list_id'>"+id1+"</td>" +
                            "<td class='admin_user'>"+val.name+"</td><td class='admin_name'>"+val.truename+"</td>" +
                            "<td class='admin_fenzu'>"+val.tip+"</td>" +
                            "<td class='admin_ip'>"+recip+"</td>" +
                            "<td class='register_time'>"+rectime+"</td>" +
                            "<td class='admin_statue'>正常</td>" +
                            "<td class='cao_zuo'>" +
                            "<div class='administratorlist_botton'>" +
                            "<button class='freeze' flog="+val.id+">冻结</button>" +
                            "<button class='adminlist_set_change' flog="+val.id+">修改密码</button>" +
                            "<button class='adminlist_set_del' flog="+val.id+">删除</button>" +
                            "</div>" +
                            "</td>" +
                    "</tr>");
                    }else{
                         str+=("<tr>" +
                            "<td  class='admin_list_id'>"+id1+"</td>" +
                            "<td class='admin_user'>"+val.name+"</td><td class='admin_name'>"+val.truename+"</td>" +
                            "<td class='admin_fenzu'>"+val.tip+"</td>" +
                            "<td class='admin_ip'>"+recip+"</td>" +
                            "<td class='register_time'>"+rectime+"</td>" +
                            "<td class='admin_statue'>冻结</td>" +
                            "<td class='cao_zuo'>" +
                            "<div class='administratorlist_botton'>" +
                            "<button class='freeze' flog="+val.id+">解冻</button>" +
                            "<button class='adminlist_set_change' flog="+val.id+">修改密码</button>" +
                            "<button class='adminlist_set_del' flog="+val.id+">删除</button>" +
                            "</div>" +
                            "</td>" +
                    "</tr>");
// "+statues[val.luck?0:1]+"
                    }
                    strhead="<tr class='admin_listcontent_mean'><td class='admin_list_id'>编号</td>"+
                                "<td class='admin_user'>用户名</td>"+
                                " <td class='admin_name'>姓名</td>"+
                                "<td class='admin_fenzu'>所属分组</td>"+
                                "<td class='admin_ip'>最近登录IP</td>"+
                                "<td class='register_time'>最近登录时间</td>"+
                                "<td class='admin_statue'>状态</td>"+
                                "<td class='cao_zuo' style='min-width:237px;'>操作</td>"+
                        " </tr>";
                });
                $(".administratorlist_table table tbody").html(strhead+str);
                $("tr:even").css("background-color","#F2F2F3");
                /*是否冻结*/
                $(".freeze").click(function(){
                    var id=$(this).attr("flog");
                    var str="";
                    $(".alert").remove();
                    str='<div class="alert"><h3><strong>冻结</strong>提示</h3>'+
                        '<p>是否<strong>冻结</strong>?</p>'+
                        '<p><strong>冻结</strong>后管理员<span>无法</span>正常登陆</p>'+
                        '<button class="sure" flog='+id+'>确定</button><button class="cancel" >取消</button>'+
                        '</div>';
                    $(".administratorlist_table").append(str);
                });
                $('.freeze').each(function(index) {
                    $(this).click(function(){
                        if($(this).html()=='冻结'){
                            $('.alert').css('display','block');
                            $(this).css('background','white').css('color','#99cc79');
                            $('.alert').find('strong').html('冻结');
                            $('.alert span').html('无法');
                            $('.sure').click(function(){//冻结
                                var id_freeze=$(this).attr("flog");
                                var luck=0;
                                $.ajax({
                                    url:"http://www.nbinbi.com/waterObj/index.php/Admin/Auth/luckUser",
                                    type:"get",
                                    dataType:"jsonp",
                                    data:{"id":id_freeze,"luck":luck},
                                    success:function(data){
                                        if(data.status==1){
                                            $(".freeze").eq(index).html("解冻");
                                            $(".admin_statue").eq(index+1).html("冻结");
                                            $('.freeze').eq(index).html('解冻').css('background','none').css('color','#99cc79');
                                        }
                                    }
                                });
                                $('.alert').css('display','none');
                            });
                        }else if($(this).html()=='解冻'){
                            $('.alert').css('display','block');
                            $(this).css('background','white').css('color','#99cc79');
                            $('.alert').find('strong').html('解冻');
                            $('.alert span').html('可');
                            $('.sure').click(function(){
                                var id_freeze=$(this).attr("flog");
                                var luck=1;
                                $.ajax({//解冻
                                    url:"http://www.nbinbi.com/waterObj/index.php/Admin/Auth/luckUser",
                                    type:"get",
                                    dataType:"jsonp",
                                    data:{"id":id_freeze,"luck":luck},
                                    success:function(data){
                                        if(data.status==1){
                                            $(".freeze").eq(index).html("冻结");
                                            $(".admin_statue").eq(index+1).html("正常");
                                            $('.freeze').eq(index).html('冻结').css('background','none').css('color','#99cc79');
                                        }
                                    }
                                });
                                $('.alert').css('display','none');
                            });
                        }
                        $('.cancel').click(function(){
                            $('.alert').css('display','none');
                            $('.freeze').css('background','white').css('color','#85c45c');
                        });
                        $(".del").hide();
                        $(".alert").show();
                        $(".change_password").hide();
                    });
                });
                //修改密码
                $(".adminlist_set_change").bind("click", function () {
                    var id=$(this).attr("flog");
                    var str1="";
                    $(".del").hide();
                    $(".alert").hide();
                    $(".change_password").show();
                    $(".change_password").remove();
                    str1='<div class="change_password">' +
                        '<div><span class="confirm_passwordnew">新密码:</span>&nbsp;&nbsp;<input type="password" id="pass"/><br/><span id="pass_"></span>' +
                        '<br/><span class="confirm_password">确认密码:</span>&nbsp;&nbsp;<input type="password" id="password"/><br/><span id="password_"></span></div>' +
                        '<button onclick="register()" id="confirm_pass" flog='+id+'>确定</button><button>取消</button></div>';
                    $('.administratorlist_table').append(str1);
                    $("#confirm_pass").click(function(){
                        $(".change_password").show();
                        var id_change=$(this).attr("flog");
                        var pwd1=$("#pass").val();
                        var pwd=$("#password").val();
                        if(pwd1==pwd){
                            $.ajax({//修改密码
                                url:"http://www.nbinbi.com/waterObj/index.php/Admin/Auth/modifyPwd",
                                type:"get",
                                dataType:"jsonp",
                                data:{"id":id_change,"pwd":pwd},
                                success:function(data){
                                    if(data.status==1){
                                        alert(data.msg);
                                    }else{
                                        alert(data.msg);
                                    }

                                }
                            });
                        }
                    });
                    $(".change_password>div+button+button").click(function () {$(".change_password").hide();});
                });
                //删除管理员
                $(".adminlist_set_del").click(function () {
                    var id=$(this).attr("flog");
                    $(".change_password").hide();
                    $(".alert").hide();
                    $(".del").show();
                    $(".del").remove();
                    var str1="";
                    str1='<div class="del"><p><img src="./img/warn.png"/><span>是否删除该管理</span></p>' +
                        '<button class="confirm" flog='+id+'>确定</button>' +
                        '<button class="cancel_pass">取消</button></div>';
                    $(".administratorlist_table").append(str1);
                    var parent=this.parentNode.parentNode.parentNode;
                    $(".confirm").click(function () {
                        var id_del=$(this).attr("flog");
                        console.log(id_del);
                        $.ajax({//删除
                            url:"http://www.nbinbi.com/waterObj/index.php/Admin/Auth/deleteUser",
                            type:"get",
                            dataType:"jsonp",
                            data:{"id":id_del},
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
            }
        });
    }
    //增加管理员
    $(".administratorlist_add_bcbutton>button").click(function () {
        var name=$("#user").val();
        var user=$("#name").val();
        var pass=$("#password_again").val();
        var aid=$("#select_manage").val();
        if(name!=""&&user!=""&&pass!=""){
            $.ajax({
                url:"http://www.nbinbi.com/waterObj/index.php/Admin/Auth/adduser",
                type:"get",
                dataType:"jsonp",
                data:{"name":name,"truename":user,"pwd":pass,"aid":aid,"luck":1},
                success:function(data){
                    if(data.status==1){
                        alert(data.msg);
                        window.location.href="administratorlist.html";
                    }else{
                        alert(data.msg);
                    }
                    data.status==1&&(window.location.reload(true));
                }
            });
        }
    });
    var flag=false;
    //所属角色
    $("#select_manage").click(function(){
        if(flag)return;
        $.ajax({
            url:"http://www.nbinbi.com/waterObj/index.php/Admin/Auth/returnGroup",
            type:"get",
            dataType:"jsonp",
            success:function(data){
                try{
                    if(data.status!=1)return alert(data.msg);
                    flag=true;
                    var str="";
                    $.each(data.data,function(data,val){
                        str+="<option value="+val.id+">"+val.tip+"</option>";
                    });
                    $("#select_manage").append(str);
                }catch(e){
                    console.error('数据异常!',data);
                }
            }
        });
    });
});
