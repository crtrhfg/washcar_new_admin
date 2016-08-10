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
            url:"http://www.nbinbi.com/waterObj/index.php/Admin/Seller/reSellerDetail",
            type:"get",
            dataType:"jsonp",
            data:{"page":page},
            success:function(data){
                console.log(data);
                len =Math.ceil((data.len/14)||1);
                if(data.status==1){
                    var str='<tr><td>编号</td><td>职位</td><td>姓名</td><td>新开</td><td>续费</td><td>提成</td><td>操作</td></tr>';
                    for(var i=0,leng=data.data.length;i<leng;i++){
                        str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data[i].position+'</td><td>'+data.data[i].username+'</td><td>'+data.data[i].new_num+
                              '</td><td>'+data.data[i].renew_num+'</td><td>'+data.data[i].rewards+'</td><td><div class="staff_botton"><button class="delet" seller_id='+data.data[i].seller_id+'>删除</button></div></td></tr>';
                    }
                    $(".admin_list_list").html(str);
                    fn&&fn(len);

                    $(".delet").click(function(dw){
                        var seller_id=$(this).attr("seller_id");
                        var str='<div class="alert" style="display:block;"><h3>提示</h3>'+
                            '<p>是否<strong>删除数据</strong>?</p>'+
                            '<button class="sure">确定</button><button class="cancel">取消</button>'+
                            '</div>';
                        $(".admin_list_list").append(str);
                        $(".cancel").click(function(ev){
                            $(".alert").remove();
                            ev.stopPropagation();
                        });
                        $(".sure").click(function(){
                            $.ajax({
                                url:"http://www.nbinbi.com/waterObj/index.php/Admin/Seller/DelSeller",
                                data:{"seller_id":seller_id},
                                dataType:"jsonp",
                                success:function(data){
                                    console.log(data);
                                    if(data.status==1){
                                        $(".alert").remove();
                                        window.location.href="commission_staff.html";
                                    }else{
                                        alert("删除失败");
                                        $(".alert").remove();
                                        window.location.href="commission_staff.html";
                                    }
                                }
                            });
                        });
                        dw.stopPropagation();
                    });
                }else{
                    alert("没有数据");
                    $(".admin_list_list").html('<tr><td>编号</td><td>职位</td><td>姓名</td><td>新开</td><td>续费</td><td>提成</td><td>操作</td></tr>'+
                                               '<tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td></tr>');
                }
            },error:function(data){
                console.log("数据交互有误");
            }
        });
    }
});
