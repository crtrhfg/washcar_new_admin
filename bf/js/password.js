$(function(){
    //密码管理
    $(".asdsadsadsad button").click(function(){
        var before_password=$("#before_password").val();
        var pwd=$("#new_password").val();
        var affirm_password=$("#affirm_password").val();
        if(pwd==affirm_password&&before_password!=""&&pwd!=""&&affirm_password!=""){
            $.ajax({
                url:"http://www.nbinbi.com/waterObj/index.php/Admin/Auth/modifythisPwd",
                type:"get",
                dataType:"jsonp",
                data:{"pwd":pwd},
                success:function(data){
                     if(data.status==1){
                         alert(data.msg)
                        window.location.href="shouye.html"
                    }else{
                        alert(data.msg);
                    }
                }
            })
        }
    });
    $(".asdsadsadsad input").click(function(){
        $(this).css("border","1px solid #85C45C").blur(function(){
            $(this).css("border","1px solid #d2d2d2")
        })
    })
});
