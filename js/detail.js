window.onload = function(){

   $(".boo li").mouseenter(function(){
   	var index = $(this). index() 
   	$(this).find("img").addClass("current")		 
   		   .siblings()
   		   .find("img")
       	   .removeClass("active");
    $(".t2 img").eq( index )
                .show()
    		    .siblings("img")
    		    .hide();
    $(".bigImage").eq ( index ).show().siblings().hide()		    
   }).mouseleave(function(){
   	$(this).find("img").removeClass("current");
   })
   
   
   $(".t1").mouseenter(function(){
	 $(this).find( $("#mask") ).css("display","block")
	 $("#big").css("display","block")
}).mouseleave(function(){
	 $(this).find( $("#mask") ).css("display","none")
	 $("#big").css("display","none")
})

   $(".t1").mousemove(function(e){
	var e = e || event;
	var x = e.pageX - $(".le-con").offset().left - $("#mask").outerWidth()/2;
	var y = e.pageY - $(".le-con").offset().top - $("#mask").outerHeight()/2;
//	获取滑块的left和top
	var maxl = $(".top").outerWidth() - $("#mask").outerWidth();
	var maxt = $(".top").outerHeight() - $("#mask").outerHeight();
	x = Math.min( maxl , Math.max( 0,x ) )
	y = Math.min( maxt , Math.max( 0,y ) )
	$("#mask").css({
		left:x,
		top:y
	})
	//大图/大框宽 = 小图/小框宽(mask宽)比例需要计算800/400 != 450/175 设置大图宽为1028或设mask宽为225px
//	大图宽/小图宽 = 大图left/maskleft = 大图显示区宽/mask宽 
	$(".bigImage").css({
//		left:- x * 800/450,
//		top: -y * 800/450
		left:-x * 800/400,
		top:-y * 800/400
	}) 
})




}