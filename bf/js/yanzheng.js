//修改管理员密码
function register(){
    var pass=document.getElementById("pass").value;
    var pass_=document.getElementById("pass_");
    var password=document.getElementById("password").value;
    var password_=document.getElementById("password_");
    //判断格式
    var pass_reg=/^[a-zA-Z0-9]/;
    var password_reg=/^[a-zA-Z0-9]/;
    if(pass_reg.test(pass)==false){
        pass_.innerHTML="密码格式错误";
        pass_.style.color='#FF0000';
        pass_.style.fontSize='15px';
        return false;
    }else{
        pass_.innerHTML="";
        pass_.style.color='';
        pass_.style.fontSize='';
    }
    if(pass!=password){
        password_.innerHTML='密码不一致';
        password_.style.color='#FF0000';
        password_.style.fontSize='15px';
        return false;
    }else{
        password_.innerHTML="";
        password_.style.color='';
        password_.style.fontSize='';
    }
    if(pass_reg.test(pass)==true&&pass==password){
        $("#confirm_pass").click(function () {
            $(".change_password").hide();
        })
    }
}
//增加管理员
function saves(){
    var user=document.getElementById("user").value;
    var user_=document.getElementById("user_");
    var name=document.getElementById("name").value;
    var name_=document.getElementById("name_");
    var password_again=document.getElementById("password_again").value;
    var password_again_=document.getElementById("password_again_");
    /*判断格式*/
    var user_reg=/[a-zA-Z0-9_\u4e00-\u9fa5]$/;
    var name_reg=/[a-zA-Z0-9_\u4e00-\u9fa5]$/;
    var password_again_reg=/^[a-zA-Z0-9]/;
    if(user_reg.test(user)==false){
        $(".add_admin button").click(function () {
           $("#save_success").css("display","none");
        });
        user_.innerHTML='用户名格式错误';
        user_.style.color='#ff0000';
        user_.style.fontSize='15px';
        return false;
    }
    else{
        user_.innerHTML='';
        user_.style.color='';
        user_.style.fontSize='';
    }
    if(name_reg.test(name)==false){
        $(".add_admin button").click(function () {
            $("#save_success").css("display","none");
        });
        name_.innerHTML='姓名格式错误';
        name_.style.color='#ff0000';
        name_.style.fontSize='15px';
        return false;
    }
    else{
        name_.innerHTML='';
        name_.style.color='';
        name_.style.fontSize='';
    }
    if(password_again_reg.test(password_again)==false){
        $(".add_admin button").click(function () {
            $("#save_success").css("display","none");
        });
        password_again_.innerHTML='密码格式错误';
        password_again_.style.color='#ff0000';
        password_again_.style.fontSize='15px';
        return false;
    }
    else{
        password_again_.innerHTML='';
        password_again_.style.color='';
        password_again_.style.fontSize='';
    }
    var role=$("#role").val();
    if(role==''){
        $(".add_admin button").click(function () {
            $("#save_success").hide();
        });
        alert("请添加所属角色");
    }
}
//增加角色
function save_roles(){
    var role_name=document.getElementById("role_name").value;
    var role_des=document.getElementById("role_des").value;
    //判断格式
    var role_name_reg=/^[a-zA-Z]/;
    var role_des_reg=/^[\u2E80-\u9FFF]+$/;
    if(role_name_reg.test(role_name)==false){
        $(".save").click(function () {
            $("#save_role").css("display","none");
        });
        alert("请输入英文的角色名称")
    }
    else if(role_des_reg.test(role_des)==false){
        $(".save").click(function () {
            $("#save_role").css("display","none");
        });
        alert("请输入中文角色描述")
    }else{
        $(".save").click(function () {
            $("#save_role").css("display","block");

        });
    }
}
//密码管理保存
function password_manage(){
    var before_password=document.getElementById("before_password").value;
    var before_password_=document.getElementById("before_password_");
    var new_password=document.getElementById("new_password").value;
    var new_password_=document.getElementById("new_password_");
    var affirm_password=document.getElementById("affirm_password").value;
    var affirm_password_=document.getElementById("affirm_password_");
    //判断格式;
    var before_password_reg=/^[a-zA-Z0-9]/;
    var new_password_reg=/^[a-zA-Z0-9]/;
    //var affirm_password_reg=/^[a-zA-Z0-9]/;
    if(before_password_reg.test(before_password)==false){
        $(".password_manage>div>div button").click(function () {
           $("#save_success_password").css("display","none");
        });
        before_password_.innerHTML='密码格式错误';
        before_password_.style.color='#ff0000';
        before_password_.style.fontSize='15px';
        return false;
    }
    else{
        before_password_.innerHTML='';
        before_password_.style.color='';
        before_password_.style.fontSize=''
    }
    if(new_password_reg.test(new_password)==false){
        $(".password_manage>div>div button").click(function (){
            $("#save_success_password").hide()
        });
        new_password_.innerHTML='密码格式错误';
        new_password_.style.color='#ff0000';
        new_password_.style.fontSize='15px';
        return false;
    }
    else{
        new_password_.innerHTML='';
        new_password_.style.color='';
        new_password_.style.fontSize=''
    }
    if(new_password!=affirm_password){
        $(".password_manage>div>div button").click(function () {
            $("#save_success_password").hide()
        });
        affirm_password_.innerHTML='密码不一致';
        affirm_password_.style.color='#ff0000';
        affirm_password_.style.fontSize='15px';
        return false;
    }
    else{
        affirm_password_.innerHTML='';
        affirm_password_.style.color='';
        affirm_password_.style.fontSize=''
    }
    if(before_password_reg.test(before_password)==true&&new_password_reg.test(new_password)==true&&new_password==affirm_password){
        $(".password_manage>div>div button").click(function () {
            $("#save_success_password").show();
        });
    }
}
//增加负责人
function save_princ(){
    var a=document.getElementById("names").value, a1=document.getElementById("names_");
    var s=document.getElementById("numbers").value, s1=document.getElementById("numbers_");
    var d=document.getElementById("sex").value, d1=document.getElementById("sex_");
    var f=document.getElementById("pass").value, f1=document.getElementById("password");
    var names_reg=/[a-zA-Z0-9_\u4e00-\u9fa5]$/;
    var number_reg=/^[1][358][0-9]{9}$/;
    var sex_reg=/^[\u2E80-\u9FFF]/;
    var pass_reg=/^[a-zA-Z0-9]/;
    //判断格式
    if(names_reg.test(a)==false){
        $(".add_principal button").click(function () {
            $("#save_princ").hide();
        });
        a1.innerHTML='用户名格式错误';
        a1.style.color='#ff0000';
        a1.style.fontSize='15px';
        return false;
    }else{
        a1.innerHTML='';
        a1.style.color='';
        a1.style.fontSize='';
    }
    if(number_reg.test(s)==false){
        $(".add_principal button").click(function () {
            $("#save_princ").hide();
        });
        s1.innerHTML='手机号格式错误';
        s1.style.color='#ff0000';
        s1.style.fontSize='15px';
        return false;
    }else{
        s1.innerHTML='';
        s1.style.color='';
        s1.style.fontSize='';
    }
    if(d==""){
        $(".add_principal button").click(function () {
            $("#save_princ").hide();
        });
        d1.innerHTML='性别格式错误';
        d1.style.color='#ff0000';
        d1.style.fontSize='15px';
        return false;
    }else{
        d1.innerHTML='';
        d1.style.color='';
        d1.style.fontSize='';
    }
    if(pass_reg.test(f)==false){
        $(".add_principal button").click(function () {
            $("#save_princ").hide();
        });
        f1.innerHTML='密码格式错误';
        f1.style.color='#ff0000';
        f1.style.fontSize='15px';
        return false;
    }else{
        f1.innerHTML='';
        f1.style.color='';
        f1.style.fontSize='';
    }
    if(names_reg.test(a)==true&&names_reg.test(s)==true&&sex_reg.test(d)==true&&pass_reg.test(f)==true){
        $(".add_principal button").click(function () {
            $("#save_princ").show();
        });
    }
}
//增加订单用户
function save_princc(){
    var a=document.getElementById("names").value, a1=document.getElementById("names_");
    var s=document.getElementById("numbers").value, s1=document.getElementById("numbers_"); 
    var d=document.getElementById("car_licence_plate_number").value,d1=document.getElementById("car_licence_plate");   
    var names_reg=/[a-zA-Z0-9_\u4e00-\u9fa5]$/;
    var number_reg=/^[1][358][0-9]{9}$/;
    var car_licence_plate_reg=/^[\u4E00-\u9FA5][\dA-Z]{6}$/;
    //判断格式
    if(names_reg.test(a)==false){
        $(".adminadd_bcun").click(function (){
        });
        a1.innerHTML='用户名格式错误';
        a1.style.color='#ff0000';
        a1.style.fontSize='15px';
        return false;
    }else{
        a1.innerHTML='';
        a1.style.color='';
        a1.style.fontSize='';
    }
    if(number_reg.test(s)==false){
        $(".adminadd_bcun").click(function () {
        });
        s1.innerHTML='手机号格式错误';
        s1.style.color='#ff0000';
        s1.style.fontSize='15px';
        return false;
    }else{
        s1.innerHTML='';
        s1.style.color='';
        s1.style.fontSize='';
    }
    if(car_licence_plate_reg.test(d)==false){
        $(".adminadd_bcun").click(function () {
        });
        d1.innerHTML='车牌号格式错误';
        d1.style.color='#ff0000';
        d1.style.fontSize='15px';
        return false;
    }else{
        d1.innerHTML='';
        d1.style.color='';
        d1.style.fontSize='';
    }

}