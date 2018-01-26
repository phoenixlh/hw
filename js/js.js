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
}


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


//yidonglunbo
//$(".spl").click(function(){
//	startMove($(".big-con"),{left:-1200px})
//})
