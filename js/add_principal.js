$(function(){
    //增加负责人
    $(".save_prin").click(function(){
        var wname=$("#names").val();
        var phoneNum=$("#numbers").val();
        var number_reg=/^[1][3578][0-9]{9}$/;
        var sex=$("#sex").val();
        var wpwd=$("#pass").val();
        if(wname!=""&&phoneNum!=""&&sex!=""&&wpwd!=""&&number_reg.test(phoneNum)==true){
            $.ajax({
                url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/addWorker",
                dataType:"jsonp",
                data:{"wname":wname,"phoneNum":phoneNum,"sex":sex,"wpwd":wpwd,"task":1},
                success:function(data){
                    alert(data.msg);
                    data.status==1?location.href=document.referrer:alert(data.msg);
            //         if(data.status==1){
            //         	$("#save_princ").remove();
				        // $('<div id="save_princ"><p>正在保存...</p><button>确认</button></div>').appendTo(".add_principal");
				        // $("#save_princ button").click(function(){        	
				        // 	 window.location.href="house_manage.html";
				        // });
				        // setTimeout(function(){
				        //     $("#save_princ p").html(data.msg);
				        //     $("#save_princ button").show();
				        //     $("#save_princ p").css({"line-height":"122px"})
				        // },1000);
				        // // //增加负责人
            //         }else{
            //         	alert(data.msg)
            //         }
                }
            })
        }
        
    });
    
    
    $("#save_prin").click(function(){
        var wname=$("#names").val();
        var phoneNum=$("#numbers").val();
        var number_reg=/^[1][3578][0-9]{9}$/;
        var sex=$("#sex").val();
        var wpwd=$("#pass").val();
        if(wname!=""&&phoneNum!=""&&sex!=""&&wpwd!=""&&number_reg.test(phoneNum)==true){
            $.ajax({
                url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/addWorker",
                dataType:"jsonp",
                data:{"wname":wname,"phoneNum":phoneNum,"sex":sex,"wpwd":wpwd,"task":1},
                success:function(data){
                   if(data.status==1){
               	    $("#save_princ").remove();
			        $('<div id="save_princ"><p>正在保存...</p><button>确认</button></div>').appendTo(".add_principal");
			        $("#save_princ button").click(function(){
			        	 window.location.href="staff_management.html";
			        });
			        setTimeout(function(){
			            $("#save_princ p").html(data.msg);
			            $("#save_princ button").show();
			            $("#save_princ p").css({"line-height":"122px"})
			        },1000);
                   }else{
                   	alert(data.msg);
                   }
                }
            })
           
        }
      
    });
    

});
