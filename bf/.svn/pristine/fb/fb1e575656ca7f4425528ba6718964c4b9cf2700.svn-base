$(function(){
    //上传图片
    $("#pic_path").click(function () {
        var k=[];
        var listimg=$("#select span img");
        $.each(listimg,function(p1,p2){
            if(!$(p2).attr("style")){
                k.push($(p2).attr("flog"))
            }
            $(".kv").attr("value",k);
            $("#sub").click(function () {
                //return alert(4234);
                //var webnum = k;
                var web=2;
                $.ajax({
                    url: "http://www.nbinbi.com/waterObj/index.php/Home/Login/photo",
                    type: "POST",
                    data: {"web":web},
                    success: function (data) {
                        console.log(data);
                    }
                });
            });
        });
    });
    $("#sub").bind("click",function(){
        $("#suba")[0].click();
    });
    //图片设置的选择
    $(".box1>img,.box2>img,.box3>img").css({"display":"none"});
    $(".picture_intro").css({"display":"none"});
    var q=0,w= 0,e=0;
    $(".box1").click(function(){
        if(q==0){
            $(this).append('<img src="./img/checked.png" flog="1"/>');
            $("#form").append('<p class="picture_intro">图片大小：640px*200px<p>');
            $(".box1>img").show();
            $(".picture_intro").
                show();
            q=1;
        }else{
            $(".box1>img").hide();
            q=0;
        }
    });
    $(".box2").click(function(){
        if(w==0){
            $(this).append('<img src="./img/checked.png" flog="2"/>');
            $("#form").append('<p class="picture_intro">图片大小：640px*200px<p>');
            $(".box2>img").show();
            $(".picture_intro").show();
            w=1
        } else{
            $(".box2>img").hide();
            w=0
        }
    });
    $(".box3").click(function(){
        if(e==0){
            $(this).append('<img src="./img/checked.png" flog="3"/>');
            $("#form").append('<p class="picture_intro">图片大小：640px*200px<p>');
            $(".box3>img").show();
            $(".picture_intro").show();
            e=1;
        }
        else{
            $(".box3>img").hide();
            e=0;
        }
    });
    $(".box1,.box2,.box3").click(function () {
        if(q!=1&&w!=1&&e!=1){
            $(".picture_intro").hide();
        }
    });
    //点击上传按钮的设置
    $("#uploading").change(function () {
        var img=$("#imghead").prop("src");
        console.log(img)
        if(img!==null){
            $("#uploading").hide();
        }else{
            $("#uploading").show();
        }
    });
});
/*图片上传*/
function previewImage(file) {
    var MAXWIDTH  = 640;
    var MAXHEIGHT = 200;
    var div = document.getElementById('preview');
    if (file.files && file.files[0]) {
        div.innerHTML ='<img id=imghead>';
        var img = document.getElementById('imghead');
        img.onload = function(){
            var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
            img.width  =  rect.width;
            img.height =  rect.height;
//                 img.style.marginLeft = rect.left+'px';
            img.style.marginTop = rect.top+'px';
        };
        var reader = new FileReader();
        reader.onload = function(evt){img.src = evt.target.result;};
        reader.readAsDataURL(file.files[0]);
    }
    else {//兼容IE
        var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
        file.select();
        var src = document.selection.createRange().text;
        div.innerHTML = '<img id=imghead>';
        var img = document.getElementById('imghead');
        img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
        var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
        status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
        div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
    }
}
function clacImgZoomParam( maxWidth, maxHeight, width, height ){
    var param = {top:0, left:0, width:width, height:height};
    if( width>maxWidth || height>maxHeight ) {
        rateWidth = width / maxWidth;
        rateHeight = height / maxHeight;

        if( rateWidth > rateHeight ) {
            param.width =  maxWidth;
            param.height = Math.round(height / rateWidth);
        }else {
            param.width = Math.round(width / rateHeight);
            param.height = maxHeight;
        }
    }
    param.left = Math.round((maxWidth - param.width) / 2);
    param.top = Math.round((maxHeight - param.height) / 2);
    return param;
}
