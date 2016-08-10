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
            url:"http://www.nbinbi.com/waterObj/index.php/Admin/Auth/returnGroup",
            dataType:"jsonp",
            data:{"page":page},
            success:function(data){
                var count =Math.ceil(data.len/14);
                var str="";
                var strhead=""; //固定头部文字
                var statues=["暂停","正常"];
                var statue=["暂停","开启"];
                var id=0;
                $.each(data.data,function(data,val){
                    id++;
                    str+="<li>" +
                        "<span class='add_role_list_number' >"+id+"</span>" +
                        "<span class='add_role_list_role_name'>"+val.name+"</span>" +
                        "<span class='add_role_list_rle_describe'>"+val.tip+"</span>" +
                        "<span class='add_role_list_statue'>"+statues[val.luck?0:1]+"</span>" +
                        "<span class='add_role_list_operation'>"+
                        "<button class='suspend' flog="+val.id+">"+statue[val.statue?0:1]+"</button>"+
                        "<button class='jurisdiction role_list_privilege' flog="+val.id+"><a href='role_list_privilege.html?id="+val.id+"'>权限配置</a></button>"+
                        "</span>" +
                        "</li>";
                    strhead="<li class='li'><span class='add_role_list_number'>编号</span><span class='add_role_list_role_name'>角色名称</span> " +
                        "<span class='add_role_list_rle_describe'>角色描述</span><span class='add_role_list_statue'>状态</span>"+
                        "<span class='add_role_list_operation'>操作</span>"+
                        "</li>";
                });
                $(".add_role_list_table ul").html(strhead+str);
                //权限状态

                $('.suspend').each(function(index){
                        $(this).click(function(){
                            if($(this).text()=="开启"){
                                var id=$(this).attr("flog");
                                var luck=0;
                                $.ajax({
                                    url:"http://www.nbinbi.com/waterObj/index.php/Admin/Auth/luckUser",
                                    type:"get",
                                    dataType:"jsonp",
                                    data:{"id":id,"luck":luck},
                                    success:function(data){
                                        alert(data.msg);
                                        if(data.statue=1){
                                            $(".suspend").eq(index).text("暂停");
                                            $(".add_role_list_statue").eq(index+1).text("开启");
                                        }
                                    }
                                });
                            }else if($(this).text()=="暂停"){
                            var id=$(this).attr("flog");
                            var luck=1;
                            $.ajax({
                                url:"http://www.nbinbi.com/waterObj/index.php/Admin/Auth/luckUser",
                                type:"get",
                                dataType:"jsonp",
                                data:{"id":id,"luck":luck},
                                success:function(data){
                                    alert(data.msg);
                                    if(data.statue=1){
                                        $(".suspend").eq(index).html("开启");
                                        $(".add_role_list_statue").eq(index+1).html("暂停");
                                    }
                                }
                            });
                            }
                        });
                });
                fn&&fn(count);
                console.log(data);
            }
        });
    }
    //增加角色
      $(".add_role_div_div .save").click(function(){
        var role_name_reg=/^[a-zA-Z]/;
        var role_des_reg=/^[\u2E80-\u9FFF]+$/;
        var group=$("#role_name").val();
        var tip=$("#role_des").val();
        var luck="";
        if(group!=""&&tip!=""&&role_name_reg.test(group)==true&&role_des_reg.test(tip)==true){
            $.ajax({
                url:"http://www.nbinbi.com/waterObj/index.php/Admin/Auth/addGroup",
                type:"get",
                dataType:"jsonp",
                data:{"group":group,"tip":tip,"luck":luck},
                success:function(data){
                    //console.log(data);
                    if (data.status==1) {
                         $("#save_success").remove()
                        $('<div id="save_success"><p>正在保存...</p><button>确认</button></div>').appendTo(".add_role_div");
                         $("#save_success button").click(function () {
                            window.location.href="role_list.html";
                        });
                        setTimeout(function(){
                            $("#save_success p").html(data.msg);
                            $("#save_success button").show();
                            $("#save_success p").css({"line-height":"142px"})
                        },1000);
                     }else{
                        alert(data.msg)
                     }
                }
            })
        }
    });
    $(".add_role_div_div input").click(function () {
        $(this).css("border","2px solid #85c45c")}).blur(function () {
        $(this).css("border","2px solid #d2d2d2")
    });
});