window.onload = function(){
 $(".boo li").mouseenter(function(){
 	$(this).find("img").addClass("current")		 
 	       .end()
 		   .siblings()
 		   .find("img")
       	   .removeClass("active");
    $(".t2 img").eq( $(this).index() )
                .show()
    		    .siblings("img")
    		    .hide();
    $("#mask").css("display","block")
    $(".bigImage").eq( $(this).index() ).show()
    		    		       .siblings()
    		    		       .hide()
 }).mouseleave(function(){
 	$(this).find("img").removeClass("current");
 })
 
$(".top").mousemove(function(e){
	var e = e || event;
	var disx = e.pageX - $(".le-con").offset().left -$("#mask").offset().left - $("#mask").width()/2; 
	var disy = e.pageY - $(".le-con").offset().top - $("#mask").offset().top - $("#mask").height()/2;
	maxl = $(".top").width() - $("#mask").width();
	maxt = $(".top").height() - $("#mask").height();
	var x = Math.min( Math.max(0,maxl) ,x )
	var y = Math.min( Math.max(0,maxt) ,y )
	var pos = {
		left:x,
		top:y
	}
//	大图宽/小图宽 = 大图left/maskleft = 大图显示区宽/mask宽 
	$(".bigImage").offset().left = -800/480 *  disx 
})
   
 
 
}
