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
        !page&&(page=1);
        $.ajax({
            url:"http://www.nbinbi.com/waterObj/index.php/Admin/Position/PositionList",
            data:{"page":page},
            dataType:"jsonp",
            success:function(data){
                console.log(data);
                console.log(data.data.data.length);
                if(data.status==1){
                    len =Math.ceil(data.data.count/14);
                    var str='<tr><td>序号</td><td>职位</td><td>用户类型</td><td>提成金额</td><td>操作</td></tr>';
                    for(var i=0,leng=data.data.data.length;i<leng;i++){
                        str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data.data[i].position+'</td><td>'+data.data.data[i].user_type+'</td><td>'+data.data.data[i].rewards+'</td><td><div class="staff_botton"><a href="commission_add.html?pos_id='+data.data.data[i].pos_id+'"><button class="changecommiss">修改</button></a><button class="delet" pos_id='+data.data.data[i].pos_id+'>删除</button></div></td></tr>';
                    }
                    // $.each(data.data,function(index,val){
                    //     // console.log(index)
                    //      str+='<tr><td>'+val.position+'</td><td>'+val.user_type+'</td><td>'+val.rewards+'</td><td><div class="staff_botton"><a href="commission_add.html?pos_id='+val.pos_id+'"><button class="changecommiss">修改</button></a><button class="delet" pos_id='+val.pos_id+'>删除</button></div></td></tr>';
                    // });

                    $(".admin_list_list").html(str);
                    fn&&fn(len);

                    $(".delet").click(function(dw){
                        var pos_id=$(this).attr("pos_id");
                        var str='<div class="alert" style="display:block;"><h3>提示</h3>'+
                            '<p>是否<strong>删除数据</strong>?</p>'+
                            '<button class="sure">确定</button><button class="cancel">取消</button>'+
                            '</div>';
                        $(".admin_listcontent").append(str);
                        $(".cancel").click(function(ev){
                            $(".alert").remove();
                            ev.stopPropagation();
                        });
                        $(".sure").click(function(){
                            $.ajax({
                                url:"http://www.nbinbi.com/waterObj/index.php/Admin/Position/DelPosition",
                                data:{"pos_id":pos_id},
                                dataType:"jsonp",
                                success:function(data){
                                    console.log(data);
                                    if(data.status==1){
                                        $(".alert").remove();
                                        window.location.href="commission_management.html";
                                    }else{
                                        alert("删除失败");
                                        $(".alert").remove();
                                        window.location.href="commission_management.html";
                                    }
                                }
                            });
                        });
                        dw.stopPropagation();
                    });

                    $(".addcommiss").click(function(){
                        window.location.href="commission_add.html";
                    });
                    $("tr:even").css("background-color","#F2F2F3");
                }
            },error:function(data){
                alert("没有数据");
            }
        });
    }
});
