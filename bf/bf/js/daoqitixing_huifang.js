$(function(){
	//车主信息
	 var omid = getUrlParam('omid');
//	var uid = 8;
	$.ajax({
	url:"http://www.nbinbi.com/waterObj/index.php/Admin/Complex/returnUserMsg",
	dataType:"jsonp",
	data:{"omid":omid},			
	success:function(data){
		console.log(data);
		$(".carpep_xinxi_top").html('<span>车主姓名:'+data.data.username+'</span><span>手机号:'+data.data.phonenum+'</span>')
		$(".huifang_againbt").after('<a href="daoqitixing_huifangagain.html?uid='+data.data.omid+'"><input type="button" value="再次回访"></input></a>')
	}
});
//获取url的id值
function getUrlParam(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg);  //匹配目标参数
		if (r!=null) return unescape(r[2]); return null; //返回参数值
} 




//单选框数据
	var radio;
	var radio_val=[];
	var temple,quality,recom,content,omid,option;   
	// deleteEleById();
	$(".huifang_tjbutton").bind("click",function(){        //绑定点击事件
		option = $(".huifang_tjbutton,.daoqitixing_huifangagain").val();
	 // var temp=$('.radio').attr('checked')=="checked"&&$('.radio').val();  //单选框获取方法
	 // var content=$("#text").val();         //文本框 其他部位获取方法
	 // console.log(temp+content)
	 // return (temp+content);
		radio=$('.radio');								//取得点击事件的值
		radio_val=[];									//清空数组
		$.each(radio,function(i){						//循环遍历  
			$(radio[i]).attr('checked')=="checked"&&radio_val.push($(this).val())  //点击后增加数组
		})
		if(radio_val.length!=3||$(".text").val()==""){    //如果点击值小于三或者文本没内容则弹出提示框
			alert('数据填写不完整！');
		}else{
			omid=window.location.search.slice(1).split("=")[1];
			content=$(".text").val();					//后台数据content的值
			$.each(radio_val,function(i){				//循环点击事件的判断 选中1,2,3次
				switch (i){
					case 0:
						temple=radio_val[i];
						break;
					case 1:
						quality=radio_val[i];
						break;
					case 2:
						recom=radio_val[i];
						break;
				}	
			})
			console.log(temple,quality,recom,content )
			$.ajax({				
				url:'http://www.nbinbi.com/waterObj/index.php/Admin/Complex/addVisitMsg',            		//后台数据地址
				type:'get',										//get比post能传输的数据要多
				dataType:"jsonp",
				data:{"omid":omid,"temple":temple,"quality":quality,"recom":recom,"content":content,"option":option}, //四个数据命名
				success:function(data){                         //如果成功 回调数据
					console.log(data)							//显示出数据
					data.data.length==0&&alert('提交成功')        //数据等于0就弹出msg“参数错误请核对参数正误”的提示
					window.location.href="daoqitixing.html";
				},
				error:function(){								//如果回调错误，显示后台没有数据提示
					console.log('后台没有返回数据！')
				}
			})
		}
	
	})
})	