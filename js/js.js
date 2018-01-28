//选项卡
window.onload = function(){
	$(".cb").each(function(){
	
	}).mouseenter(function(){
		$(this).find("#ty").addClass("active")
			   .end()
			   .find("#cebian").show()
	}).mouseleave(function(){
		$(this).find("#ty").removeClass("active")
		 	   .end()
			   .find("#cebian").hide()
	})
	
	
	
//大轮播图
var index = 0 ;
var timer = null;
timer = setInterval(autoplay,2000);
function autoplay(){
	index++;
	if(index == $(".ool li").size()){
		index = 0;
	}
	$(".ool li").eq(index).addClass("acc")
	                      .siblings()
	                      .removeClass("acc")
	$(".dt li").eq(index).fadeIn(2000)
						 .siblings()
						 .fadeOut(2000)
}	



//注册页面-正则
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
		return false;
	}else{
		location.href = "success.html"
	}
})


}//window的大括号




