$(document).ready(function(){
	//erp
	$(function () {
		$(".erp_c").hide();
		$(".erp").hover(function () {
			$(".erp_c").show();
			$(this).addClass("hov");
		}, function () {
			$(".erp_c").hide();
			$(this).removeClass("hov");
		});
		// 鼠标移动到list的div上的时候list div不会被隐藏
		$(".erp_c").hover(function () {
			$(".erp_c").show();
			$(".erp").addClass("hov");
		}, function () {
			$(".erp_c").hide();
			$(".erp").removeClass("hov");
		});
	});	
	//mes
	$(function () {
		$(".mes_c").hide();
		$(".mes").hover(function () {
			$(".mes_c").show();
			$(this).addClass("hov");
		}, function () {
			$(".mes_c").hide();
			$(this).removeClass("hov");
		});
		// 鼠标移动到list的div上的时候list div不会被隐藏
		$(".mes_c").hover(function () {
			$(".mes_c").show();
			$(this).addClass("hov");
			$(".mes").addClass("hov");
		}, function () {
			$(".mes_c").hide();
			$(".mes").removeClass("hov");
		});
	});	
	//wms
	$(function () {
		$(".wms_c").hide();
		$(".wms").hover(function () {
			$(".wms_c").show();
			$(this).addClass("hov");
		}, function () {
			$(".wms_c").hide();
			$(this).removeClass("hov");
		});
		// 鼠标移动到list的div上的时候list div不会被隐藏
		$(".wms_c").hover(function () {
			$(".wms_c").show();
			$(".wms").addClass("hov");
		}, function () {
			$(".wms_c").hide();
			$(".wms").removeClass("hov");
		});
	});	
	//产品
	$(function () {
		$(".product").hide();
		$(".pro_title").hover(function () {
			$(".product").show();
			$(this).addClass("hov");
		}, function () {
			$(".product").hide();
			$(this).removeClass("hov");
		});
		// 鼠标移动到list的div上的时候list div不会被隐藏
		$(".product").hover(function () {
			$(".product").show();
			$(".pro_title").addClass("hov");
		}, function () {
			$(".product").hide();
			$(".pro_title").removeClass("hov");
		});
	});	
	
//	移动端下显示折叠
	$(function(){
    $(".r_icon").click(function(){
	  $('.m_list').toggle();
	  $(this).toggleClass("hov");
	  //if($('.nav_center').css('display')=='block')
	  //$(".w_head_box").addClass("hov");
	//else{
	  //$(".w_head_box").removeClass("hov");
	//}
	
    });
    //$(".qqclose").click(function(){
      //$('.nav_center').hide();
    //});
    $(".r_top").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
	
	$(".m_list b").click(function(){
	//$(".sign_box").show("slow").css("top","465px");
	//$(".sign_box").show();
	$(".m_list").hide();
	});
//	视频播放部分
	
	$("#a1").mouseover(function(){
		$(this).children("i").addClass("active");
	});
	$("#a1").mouseleave(function(){
		$(this).children("i").removeClass("active");	
	});

	
	});
	
	
	
});




