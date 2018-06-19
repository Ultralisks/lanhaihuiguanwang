window.onload = function(){
	// 服务
	$(".nav .fuwu").hover(function(){
		$(".subnav .fuwu").css("transform", "scaleY(1)");
	}, function(){
		$(".subnav .fuwu").css("transform", "scaleY(0)");
	});
	$(".subnav .fuwu").hover(function(){
		$(".subnav .fuwu").css("transform", "scaleY(1)");
	}, function(){
		$(".subnav .fuwu").css("transform", "scaleY(0)");
	});
	// 产品
	$(".nav .chanpin").hover(function(){
		$(".subnav .chanpin").css("transform", "scaleY(1)");
	}, function(){
		$(".subnav .chanpin").css("transform", "scaleY(0)");
	});
	$(".subnav .chanpin").hover(function(){
		$(".subnav .chanpin").css("transform", "scaleY(1)");
	}, function(){
		$(".subnav .chanpin").css("transform", "scaleY(0)");
	});
	// 解决方案
	$(".nav .jiejue").hover(function(){
		$(".subnav .jiejue").css("transform", "scaleY(1)");
	}, function(){
		$(".subnav .jiejue").css("transform", "scaleY(0)");
	});
	$(".subnav .jiejue").hover(function(){
		$(".subnav .jiejue").css("transform", "scaleY(1)");
	}, function(){
		$(".subnav .jiejue").css("transform", "scaleY(0)");
	});
	// 关于我们
	$(".nav .guanyuwomen").hover(function(){
		$(".subnav .guanyuwomen").css("transform", "scaleY(1)");
	}, function(){
		$(".subnav .guanyuwomen").css("transform", "scaleY(0)");
	});
	$(".subnav .guanyuwomen").hover(function(){
		$(".subnav .guanyuwomen").css("transform", "scaleY(1)");
	}, function(){
		$(".subnav .guanyuwomen").css("transform", "scaleY(0)");
	});
	$(".navmoreul2").css("display", "none");
	$(".navmoreul3").css("display", "none");
	window.onscroll = function(){
		var top = document.body.scrollTop||document.documentElement.scrollTop;
		if(top != 0){
			$(".headnav").css("background", "rgba(255, 255, 255, 1)");
			$(".headnav>.margin>ul>li>a").addClass("scroll");
			$(".headnav>.margin>ul>li>a").css("color", "#333");
			// $(".headnav>.margin>.logo>img").attr("src", "images/logo.png");
			// $(".headnav>.margin>.tel>img").attr("src", "images/phone.png");
		}else{
			$(".headnav").css("background", "rgba(255, 255, 255, 0)");
			$(".headnav>.margin>ul>li>a").removeClass("scroll");
			$(".headnav>.margin>ul>li>a").css("color", "#fff");
			// $(".headnav>.margin>.logo>img").attr("src", "images/logo.png");
			// $(".headnav>.margin>.tel>img").attr("src", "images/phone.png");
		}
	}
}