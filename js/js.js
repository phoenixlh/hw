
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
timer = setInterval(autoplay,3000);
function autoplay(){
	index++;
	if(index == $(".ool li").size()){
		index = 0;
	}
	$(".ool li").eq(index).addClass("acc")
	                      .siblings()
	                      .removeClass("acc")
	$(".dt li").eq(index).fadeIn(3000)
						 .siblings()
						 .fadeOut(3000)
}


var num = 0; 
var timer = setInterval(auto,2000);
function auto(){
	num++;
	if(num == 8){
		num = 1;
		$(".gd").css("top",0)
	}
	$(".gd").animate({"top":-48*num},500)
}

//点击轮播
var flag = true;
var mleft = $(this).siblings("ul").css("margin-left");
$(".spl").click(function(){
	if(flag){
		$(this).siblings("ul").animate({"margin-left":-1200},1000)
		if( mleft == 0 ){
//			mleft = 0;
			flag = false;
		}
	}
})
$(".spr").click(function(){
	if(flag){
		$(this).siblings("ul").animate({"margin-left":0},1000);		
	}
})


}//window的大括号




