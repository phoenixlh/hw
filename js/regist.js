window.onload = function(){
	var flagPhone = null;
$(".ss1").blur(function(){
	var str = $(this).val();
	var reg = /^1(3|5|7|8|9)\d{9}$/;
	if(!reg.test(str)){
		$(this).siblings(".error").css("display","block");
		flagPhone = false;
	}else{
		$(this).html("str");
		$(this).siblings(".error").css("display","none");
		flagPhone = true;
	}
})


var flagName = null;
$(".ss2").blur(function(){
	var str = $(this).val();
	var reg = /^.{6,10}$/;
	if(!reg.test(str)){
		$(this).siblings(".error").css("display","block");
		flagName = false;
	}else{
		$(this).html("str");
		$(this).siblings(".error").css("display","none");
		flagName = true;
	}
})


var flagPwd = null;
$(".ss3").blur(function(){
	var str = $(this).val();
	var reg = /^.{6,}$/;
	if(!reg.test(str)){
		$(this).siblings(".error").css("display","block");
		flagPwd = false;
	}else{
		$(this).html("str");
		$(this).siblings(".error").css("display","none");
		flagPwd = true;
	}
})


var flagQpwd = null;
$(".ss4").blur(function(){
	var str = $(this).val();
	if( !( str == $(".ss3").val() ) ){
		$(this).siblings(".error").css("display","block");
		flagQpwd = false;
	}else{
		$(this).html("str");
		$(this).siblings(".error").css("display","none");
		flagQpwd = true;
	}
})

$(".reg").click(function(){
	if(!( flagPhone && flagName && flagPwd && flagQpwd )){
		alert("注册失败！请检查所填信息")
	}
else{
		location.href = "suc.html";
	}
})

}
