$(function(){
    /*删除方法调转*********************************************************************************************************************************************/
    function dele(){
        $(".changepass").click(function(even){
            var str1='<div class="change_password" style="display:block;">' +
                '<div><span class="confirm_passwordnew">新密码:</span>&nbsp;&nbsp;<input type="password" id="pass"/><br/><span id="pass_"></span>' +
                '<br/><span class="confirm_password">确认密码:</span>&nbsp;&nbsp;<input type="password" id="password"/><br/><span id="password_"></span></div>' +
                '<button  id="confirm_pass" >确定</button><button class="removepass">取消</button></div>';
            $('.admin_list_list').append(str1);
            $(".removepass").click(function(){
                $(".change_password").remove();
            });
            even.stopPropagation();
        });
        $("tr:even").css("background-color","#F2F2F3");
    }

    /*rudate调用方法*******************************************************************************************************************************************/
    function ajaxm(url,param,page,fn){
        $.ajax({
            type: "get",
            url: url,
            data: param,
            dataType: "jsonp",
            success: function(data){
                if(data.status ==1){
                    len =Math.ceil(data.data.data.count/14);
                    var str='<tr><td>编号</td><td>注册时间</td><td>手机号</td><td>用户名</td><td>操作</td></tr>';
                    for(var i=0,leng=data.data.data[i].length;i<leng;i++){
                        str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data.data[0][i].ruDate.substring(0,10)+'</td><td>'+data.data.data[0][i].phoneNum+'</td><td>'+data.data.data[0][i].username+'</td><td><div class="staff_botton">'+
                        '<button class="changepass">修改密码</button><a href="customer_orders.html?uid='+data.data.data[0][i].uid+'"><button class="customer_orders">用户订单</button></a></div></td></tr>';
                    }
                    $(".admin_list_list").html(str);
                    fn&&fn(len);
                }else{
                    alert("没有数据");
                }
                dele();
            }
        });
    }

    /*supTime调用方法*******************************************************************************************************************************************/
    function ajaxy(url,param,page,fn) {
        $.ajax({
            type: "get",
            url: url,
            data: param,
            dataType: "jsonp",
            success: function(data){
                if(data.status ==1){
                   len =Math.ceil(data.data.data.count/14);
                   var str='<tr><td>编号</td><td>注册时间</td><td>手机号</td><td>用户名</td><td>操作</td></tr>';
                   for(var i=0,leng=data.data.data[i].length;i<leng;i++){
                       str+='<tr><td>'+((page-1)*14+i+1)+'</td><td>'+data.data.data[0][i].supTime+'</td><td>'+data.data.data[0][i].phone+'</td><td>'+data.data.data[0][i].name+'</td><td><div class="staff_botton">'+
                       '<button class="changepass">修改密码</button></div></td></tr>';
                   }
                   $(".admin_list_list").html(str);
                   fn&&fn(len);
               }else{
                   alert("没有数据");
               }
               dele();
            }
        });
    }

    /*默认加载***********************************************************************************************************************************************/
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
        /*页面初始加载***************************************************************************************************************************************************************/
        if($(".missadmin_qiehuan").text()=="有效订单"){
            $(".account_select_display").html('<select class="account_select"><option>套餐用户</option><option>单次用户</option><option>体验用户</optionselect>');
            /*页面初次加载有效 套餐用户*/
            if($(".account_select option:selected").text()=="套餐用户"){
                var urle="http://101.204.246.93/water_seller/backend/web/users/onlinemonth.html?status=online&callback=?";
                var parame={"pageNum":page};
                ajaxm(urle,parame,page,fn);
            }
            /*有效点击下拉框*/
            $(".account_select").bind("change",function(){
                if($(".account_select option:selected").text()=="套餐用户"){
                    var urle="http://101.204.246.93/water_seller/backend/web/users/onlinemonth.html?status=online&callback=?";
                    var parame={"pageNum":page};
                    ajaxm(urle,parame,page,fn);
                }else if($(".account_select option:selected").text()=="单次用户"){
                    var urly="http://101.204.246.93/water_seller/backend/web/users/onlinesingle.html?status=online&callback=?";
                    var paramy={"pageNum":page};
                    ajaxm(urly,paramy,page,fn);
                }else if($(".account_select option:selected").text()=="体验用户"){
                    var urlt="http://101.204.246.93/water_seller/backend/web/users/experience.html?status=online&callback=?";
                    var paramt={"pageNum":page};
                    ajaxy(urlt,paramt,page,fn);
                }
            });
        }else if($(".missadmin_qiehuan").text()=="过期订单"){
            /*页面初次加载过期 套餐用户*/
            $(".account_select_display").html('<select class="account_select"><option>套餐用户</option><option>单次用户</option><option>体验用户</optionselect>');
            if($(".account_select option:selected").text()=="套餐用户"){
                var urlea="http://101.204.246.93/water_seller/backend/web/users/onlinemonth.html?status=fail&callback=?";
                var paramea={"pageNum":page};
                ajaxm(urlea,paramea,page,fn);
            }
            /*有效点击下拉框*/
            $(".account_select").bind("change",function(){
                if($(".account_select option:selected").text()=="套餐用户"){
                    var urlea="http://101.204.246.93/water_seller/backend/web/users/onlinemonth.html?status=fail&callback=?";
                    var paramea={"pageNum":page};
                    ajaxm(urlea,paramea,page,fn);
                }else if($(".account_select option:selected").text()=="单次用户"){
                    var urleb="http://101.204.246.93/water_seller/backend/web/users/onlinesingle.html?status=fail&callback=?";
                    var parameb={"pageNum":page};
                    ajaxm(urleb,parameb,page,fn);
                }else if($(".account_select option:selected").text()=="体验用户"){
                    var urlt="http://101.204.246.93/water_seller/backend/web/users/experience.html?status=fail&callback=?";
                    var paramt={"pageNum":page};
                    ajaxy(urlt,paramt,page,fn);
                }
            });
        }
        /*点击切换按钮**************************************************************************************************************************************************************/
        $(".dancitaocan_button button").bind("click",function(){
            $(this).addClass('missadmin_qiehuan').siblings().removeClass('missadmin_qiehuan');
            var flog=$(this).attr("flog");
            if(flog==1){
                $(".account_select_display").html('<select class="account_select"><option>套餐用户</option><option>单次用户</option><option>体验用户</optionselect>');
                var urle="http://101.204.246.93/water_seller/backend/web/users/onlinemonth.html?status=online&callback=?";
                var parame={"pageNum":page};
                ajaxm(urle,parame,page,fn);
                /*有效点击下拉框*/
                $(".account_select").bind("change",function(){
                    if($(".account_select option:selected").text()=="套餐用户"){
                        var urle="http://101.204.246.93/water_seller/backend/web/users/onlinemonth.html?status=online&callback=?";
                        var parame={"pageNum":page};
                        ajaxm(urle,parame,page,fn);
                    }else if($(".account_select option:selected").text()=="单次用户"){
                        var urly="http://101.204.246.93/water_seller/backend/web/users/onlinesingle.html?status=online&callback=?";
                        var paramy={"pageNum":page};
                        ajaxm(urly,paramy,page,fn);
                    }else if($(".account_select option:selected").text()=="体验用户"){
                        var urlt="http://101.204.246.93/water_seller/backend/web/users/experience.html?status=online&callback=?";
                        var paramt={"pageNum":page};
                        ajaxy(urlt,paramt,page,fn);
                    }
                });
            }else if(flog==2){
                $(".account_select_display").html('<select class="account_select"><option>套餐用户</option><option>单次用户</option><option>体验用户</optionselect>');
                var urlea="http://101.204.246.93/water_seller/backend/web/users/onlinemonth.html?status=fail&callback=?";
                var paramea={"pageNum":page};
                ajaxm(urlea,paramea,page,fn);
                /*有效点击下拉框*/
                $(".account_select").bind("change",function(){
                    if($(".account_select option:selected").text()=="套餐用户"){
                        var urlea="http://101.204.246.93/water_seller/backend/web/users/onlinemonth.html?status=fail&callback=?";
                        var paramea={"pageNum":page};
                        ajaxm(urlea,paramea,page,fn);
                    }else if($(".account_select option:selected").text()=="单次用户"){
                        var urleb="http://101.204.246.93/water_seller/backend/web/users/onlinesingle.html?status=fail&callback=?";
                        var parameb={"pageNum":page};
                        ajaxm(urleb,parameb,page,fn);
                    }else if($(".account_select option:selected").text()=="体验用户"){
                        var urlt="http://101.204.246.93/water_seller/backend/web/users/experience.html?status=fail&callback=?";
                        var paramt={"pageNum":page};
                        ajaxy(urlt,paramt,page,fn);
                    }
                });
            }
        });
    }
    /*查询***********************************************************************************************************************************************/
    $(".seachdate").bind("change",function(){
        console.log($(this).val());
    });
});
