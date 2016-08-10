$(function(){
	$("body").css("overflow","auto");
	getUserReportData(30);
	function getUserReportData(day,startdate,enddate){
		!startdate&&(startdate="");
		!enddate&&(enddate="");
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/StatisticalReport/returnTjUser",
			type:"get",
			dataType:"jsonp",
			data:{timekey:day,start:startdate,end:enddate},
			success:function(data){
				if (data.status==1) {
					var arr=returnCalendarDays(data.data);
					arr=sortarr(arr);
					var contentString="<tr class='table_th'><td>时间</td><td>新增用户</td><td>失效用户</td><td>新增体验用户</td></tr>";
					var newadduser=expuser=newaddexpuser="暂无数据!";
					var len=arr.length-1;
					for(var i=len;i>=0;i--){
						res=injson(arr[i],data.data);
						for(var st in res){
							res[st]['key']=="xzyh"&&(newadduser=res[st]['value']);
							res[st]['key']=="sxyh"&&(expuser=res[st]['value']);
							res[st]['key']=="tyyh"&&(newaddexpuser=res[st]['value']);

						}
						contentString+='<tr><td>'+arr[i]+'</td><td>'+newadduser+'</td><td>'+expuser+'</td><td>'+newaddexpuser+'</td></tr>';

						newadduser=expuser=newaddexpuser="暂无数据!";
						
					}
					$("#table2").find("tbody tr").remove();
					$("#table2").find("tbody").html(contentString);
				}else{
					//alert(data.msg)
				}
			}
		});
	}
	function getRecvReport(day,startdate,enddate){
		!startdate&&(startdate="");
		!enddate&&(enddate="");
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/StatisticalReport/tjIncome",
			type:"get",
			dataType:"jsonp",
			data:{timekey:day,start:startdate,end:enddate},
			success:function(data){
				if (data.status==1) {
					var arr=returnCalendarDays(data.data);
					arr=sortarr(arr);
					var contentString="<tr class='table_th'><td>时间</td><td>SUV/MPV</td><td>精致轿车</td><td>豪华车/跑车</td></tr>";
					var newadduser=expuser=newaddexpuser="暂无数据!";
					var len=arr.length-1;
					for(var i=len;i>=0;i--){
						res=injson(arr[i],data.data);
						for(var st in res){
							console.log(res[st])
							res[st]['key']=="SUV/MPV"&&(newadduser=res[st]['value']);
							res[st]['key']=="精致轿车"&&(expuser=res[st]['value']);
							res[st]['key']=="豪华车/跑车"&&(newaddexpuser=res[st]['value']);

						}
						contentString+='<tr><td>'+arr[i]+'</td><td>'+newadduser+'</td><td>'+expuser+'</td><td>'+newaddexpuser+'</td></tr>';
						newadduser=expuser=newaddexpuser="暂无数据!";
						
					}
					$("#table2").find("tbody tr").remove();
					$("#table2").find("tbody").html(contentString);
				}else{
					alert(data.msg)
				}
			}
		});
	}
	function getPayWayReport(day,startdate,enddate){
		!startdate&&(startdate="");
		!enddate&&(enddate="");
		$.ajax({
			url:"http://www.nbinbi.com/waterObj/index.php/Admin/StatisticalReport/cashOnlineTj",
			type:"get",
			dataType:"jsonp",
			data:{timekey:day,start:startdate,end:enddate},
			success:function(data){
				if (data.status==1) {
					var arr=returnCalendarDays(data.data);
					arr=sortarr(arr);
					var contentString="<tr class='table_th'><td>时间</td><td>在线支付</td><td>现金支付</td></tr>";
					var newadduser=expuser=newaddexpuser="暂无数据!";
					var len=arr.length-1;
					for(var i=len;i>=0;i--){
						res=injson(arr[i],data.data);
						for(var st in res){
							res[st]['key']=="1"&&(newadduser=res[st]['value']);
							res[st]['key']=="4"&&(expuser=res[st]['value']);
						}
						contentString+='<tr><td>'+arr[i]+'</td><td>'+newadduser+'</td><td>'+expuser+'</td></tr>';
						newadduser=expuser=newaddexpuser="暂无数据!";
					}
					$("#table2").find("tbody tr").remove();
					$("#table2").find("tbody").html(contentString);
				}else{
					alert(data.msg)
				}
			}
		});
	}
	function calcJsonLength(json){
		var len=0;
		for(var attr in json)len++;
		return len;
	}
	function returnCalendarDays(data){
		var arr=[];
		for(var attr in data){
			for(var attrs in data[attr]){
				!in_array(attrs,arr)&&arr.push(attrs);
			}
		}
		return arr;
	}
	function sortarr(arr){
		var res=[];
		for(var i=0,len=arr.length;i<len;i++){
			res.push(arr[i].replace(/-/g,''));
		}
		var arr=res.sort(function (n1,n2){
			return n1-n2;
		});
		return arr;
	}
	function injson(str,json){
		var res=[];
		for(var attr in json){
			for(var attrs in json[attr]){
				if(str==attrs.replace(/-/g,'')){
					res.push({key:attr,value:json[attr][attrs]});
				}
			}
		}
		return res;
	}
	function in_array(arg,arr){
		var res=0;
		for(var i=0,len=arr.length;i<len;i++){
			if(arr[i]==arg){
				res=1;
				break;
			}
		}
		return res;
	}
	
	$(".endBtn,.startBtn").bind("change",function (){
		var startDate=$(".startBtn").val();
		var endDate=$(".endBtn").val();
		var tmp=$(".countList .active").attr("id")
		if(startDate>endDate)return alert("结束月份不能小于开始月份!");
		tmp=="userTj"&&getUserReportData("",startDate,endDate);
		tmp=="incomeTj"&&getRecvReport("",startDate,endDate);
		tmp=="parwaysTj"&&getPayWayReport("",startDate,endDate);
	});


	$(".selectdate a").bind("click",function(){
		$(".selectdate a").removeClass("active")
		$(this).addClass("active");
		var tmp=$(".countList .active").attr("id")
		tmp=="userTj"&&getUserReportData($(this).attr("flog"))
		tmp=="incomeTj"&&getRecvReport($(this).attr("flog"))
		tmp=="parwaysTj"&&getPayWayReport($(this).attr("flog"))
	});
	$(".countList").find("li").bind("click",function (){
		$(".countList").find("li").attr("class","");
		$(this).attr("class","active");
		switch(this.id){
			case 'userTj':
				getUserReportData(30);
			break;
			case 'incomeTj':
				getRecvReport(30);
			break;
			case 'parwaysTj':
				getPayWayReport(30);
			break;
		}
	});
})