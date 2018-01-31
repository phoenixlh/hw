window.onload = function(){
	
	$(".bt").click(function(){
		var valphone = $(".nc1").find( $(".cc1") ).text() ;
		var valname = $(".nc2").find( $(".cc2") ).text() ;
		var valpwd = $(".nc3").find( $(".cc3") ).text() ;
		var pH = getCookie("userphone");
		var uN = getCookie("username");
		var pS = getCookie("userpwd");
		if( pH == valphone && uN == valname && pS == valpwd ){
			location.href = "index.html"
		}else{
			alert("信息不匹配，请重新输入");
		}
		

})
	}//window大括号






