$(function(){
	var uid = getUrlParam('uid');
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
            url:"http://www.nbinbi.com/waterObj/index.php/Admin/Seller/reUserDetail",
            type:"get",
			dataType:"jsonp",
            data:{"page":page,"uid":uid},
            success:function(data){
                console.log(data);
				if(data.status==1){
					var str='<tr><td>订单号</td><td>下单时间</td><td>车主姓名</td><td>联系方式</td><td>车牌号</td><td>车位号</td><td>购买服务</td><td>金额</td></tr>';
					$.each(data.data,function(index,val){
						var singlename=val.singlename||"空";
						str+='<tr><td>'+val.morderid+'</td><td>'+val.rudate.substring(0,10)+'</td><td>'+val.username+'</td><td>'+val.phonenum+'</td><td>'+val.carnum+'</td><td>'+val.park+'</td><td>'+singlename+'</td><td>'+val.totalprice+'</td></tr>';
					});
					$(".admin_list_list").html(str);
				}else{
				    alert("对不起，没有查找到该用户数据");
					$(".admin_list_list").html('<tr><td>订单号</td><td>下单时间</td><td>车主姓名</td><td>联系方式</td><td>车牌号</td><td>车位号</td><td>购买服务</td><td>金额</td></tr>'+
											   '<tr><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td></tr>');
				}
            }
        });
    }


    //获取url的id值
    function getUrlParam(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r!=null) return unescape(r[2]); return null; //返回参数值
    }
});
