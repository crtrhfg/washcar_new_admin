$(function(){
	var pos_id=getUrlParam('pos_id');
    if(pos_id){
        $.ajax({
            url:"http://101.204.246.90/waterObj/index.php/Admin/Position/returnPositionDetail",
            type : "post",
            datatype :"json",
            data : {'pos_id':pos_id},
            success : function(data){
                selected($('.position_op option'),data.data.position);
                selected($('.user_typeop option'),data.data.user_type);
                $(".rewards_in").val(data.data.rewards);
                //选中地址方法
                function selected(oId,data){
                    for(var i=0;i<oId.length;i++){
                        ($(oId[i]).text()==data)&&$(oId[i]).attr('selected','selected');
                    }
                }
                /*保存*/
                $(".administratorlist_add_bcbutton button").bind('click',function(){
                    if($(".position_op option:selected").text()=="如：销售客户"){
                        alert("请选择职务");
                    }else if($(".user_typeop option:selected").text()=="如：新开"){
                        alert("请填写用户类型");
                    }else if($(".rewards_in").val()===""){
                        alert("请填写提成金额");
                    }else{
                        $.ajax({
                            url:"http://101.204.246.90/waterObj/index.php/Admin/Position/addPosition",
                            type:"post",
                            dataType:"json",
                            data:{"position":$(".position_op option:selected").text(),"user_type":$(".user_typeop option:selected").text(),"rewards":$(".rewards_in").val(),"pos_id":pos_id},
                            success:function(data){
                                if(data.status==1){
                                    alert("添加成功");
                                    window.location.href="commission_management.html";
                                }else{
                                    alert("添加失败");
                                }
                            },error:function(data) {
                                console.log(data);
                            }
                        });
                    }
                });
            }
        });
    }else{
        var position_op,user_typeop;
        $(".position_op").bind("change",function(){
            position_op=$(".position_op option:selected").text();
        });

        $(".user_typeop").bind("change",function(){
            user_typeop=$(".user_typeop option:selected").text();
        });
        $(".administratorlist_add_bcbutton button").bind('click',function(){
            if($(".position_op option:selected").text()=="如：销售客户"){
                alert("请选择职务");
            }else if($(".user_typeop option:selected").text()=="如：新开"){
                alert("请填写用户类型");
            }else if($(".rewards_in").val()===""){
                alert("请填写提成金额");
            }else{
                $.ajax({
                    url:"http://101.204.246.90/waterObj/index.php/Admin/Position/addPosition",
                    type:"post",
                    dataType:"json",
                    data:{"position":position_op,"user_type":user_typeop,"rewards":$(".rewards_in").val()},
                    success:function(data){
                        if(data.status==1){
                            console.log(data);
                            alert("添加成功");
                            window.location.href="commission_management.html";
                        }else{
                            alert("添加失败");
                        }
                    },error:function(data) {
                        console.log(data);
                    }
                });
            }
        });
    }
    //获取url的id值
    function getUrlParam(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r!==null) return unescape(r[2]); return null; //返回参数值
    }
});
