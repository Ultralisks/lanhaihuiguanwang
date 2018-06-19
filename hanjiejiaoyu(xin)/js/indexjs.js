 //effect
	    function effect() {
	    	var it = $(".it"),
	    		os = $(".os"),
	    		dw = $(".dw"),
	    		om = $(".om"),
	    		dm = $(".dm"),
	    		oi = $(".oi"),
	    		cl = $(".cl"),
	    		al = $(".al"),
	    		ft = $(".ft");
	    	var itc = it.children("article"),
	    	    osc = os.children("article"),
	    	    dwc = dw.children("article"),
	    	    omc = om.children("article"),
	    	    dmc = dm.children("article"),
	    	    oic = oi.children("article"),
	    	    clc = cl.children("article"),
	    	    alc = al.children("article"),
	    	    ftc = ft.children("article");
	    	var eFun = function() {
	    		var sH = $(document).scrollTop();
	    			wH = $(window).height();
	    			dH = $(document).height();
	    		//alert(document.body.clientHeight);
	    		if (sH <= 0) {
	    			it.addClass("animate-enter");
	    			itc.children("div").addClass("animated");
	    			itc.children(".I-appico").addClass("fadeInLeft");
	    			itc.children(".downBtn").addClass("delay0d5s fadeInDown");
	    			itc.children(".apple").addClass("fadeInRight");
		    	} else if (sH >= 300 && sH < 950) {
		    		os.addClass("animate-enter");
		    		osc.children("div").addClass("animated");
		    		osc.children(".two-header").addClass("fadeInDown");
		    		osc.children(".two-list-in").addClass("originTopLeft");
		    	} else if (sH >= 950 && sH < 1500) {
		    		dw.addClass("animate-enter");
		    		dwc.children("div").addClass("animated");
		    		dwc.children(".three-down").addClass("fadeInDown");
		    		dwc.children(".three-left").addClass("originTopLeft");
		    		dwc.children(".three-font").addClass("scaleSmall delay1s");
		    	} else if (sH >= 1500 && sH < 2100) {
		    		om.addClass("animate-enter");
		    		omc.children("div").addClass("animated");
		    	} else if (sH >= 2100 && sH < 2700) {
		    		dm.addClass("animate-enter");
		    		dmc.children("div").addClass("animated");
		    	} else if (sH >= 2700 && sH < 3200) {
		    		oi.addClass("animate-enter");
		    		oic.children("div").addClass("animated");
		    		oic.children(".four-box").addClass("fadeInDown");
		    	} else if (sH >= 3200 && sH < 3500) {
		    		cl.addClass("animate-enter");
		    		clc.children("div").addClass("animated");
		    		clc.children(".five-box").addClass("scaleSmall scal");
		    	}else if (sH >= 3500 && sH < 4600) {
		    		al.addClass("animate-enter");
		    		alc.children("div").addClass("animated");
		    		alc.children(".six-box").addClass("fadeInDown");
		    		alc.children(".six-box-list").addClass("delay0d5s scale originTopLeft");
		    	};
	    	};
	    	eFun();
	    	$(window).bind("scroll" , eFun);
	    }
	    //two-effect
	    function effectFun() {
	    	var tit = $(".two-it"),
	    		tos = $(".two-os"),
	    		tdw = $(".two-dw"),
	    		toi = $(".two-oi"),
	    		tcl = $(".two-cl"),
	    		tal = $(".two-al"),
	    		tft = $(".two-ft");
	    	var itc = tit.children("article"),
	    	    osc = tos.children("article"),
	    	    dwc = tdw.children("article"),
	    	    oic = toi.children("article"),
	    	    clc = tcl.children("article"),
	    	    alc = tal.children("article"),
	    	    ftc = tft.children("article");
	    	var eFun = function() {
	    		var sH = $(document).scrollTop();
	    			wH = $(window).height();
	    			dH = $(document).height();
	    		//alert(document.body.clientHeight);
	    		if (sH <= 0) {
	    			tit.addClass("animate-enter");
	    			itc.children("div").addClass("animated");
	    			itc.children(".left-wz").addClass("scaleSmall");
	    			itc.children(".left-app").addClass("fadeInUp delay1s");
	    			itc.children(".right-dn").addClass("fadeInRight");
	    			itc.children(".right-paid").addClass("fadeInDown delay0d5s");
	    			itc.children(".right-sj").addClass("fadeInLeft delay1s");
		    	} else if (sH >= 300 && sH < 1100) {
		    		tos.addClass("animate-enter");
		    		osc.children("div").addClass("animated");
		    		osc.children(".two-os-header").addClass("fadeInDown");
		    		osc.children(".two-os-bg").addClass("fadeInUp");
		    		osc.children(".two-os-top").addClass("scaleBig delay0d5s");
		    	} else if (sH >= 1100 && sH < 1500) {
		    		tdw.addClass("animate-enter");
		    		dwc.children("div").addClass("animated");
		    		dwc.children(".three-dw-bg").addClass("scaleSmall");
		    		dwc.children(".three-dw-topbg").addClass("fadeInRight");
		    		dwc.children(".three-dw-top").addClass("originTopLeft delay0d5s");
		    	} else if (sH >= 1500 && sH < 2500) {
		    		toi.addClass("animate-enter");
		    		oic.children("div").addClass("animated");
		    		oic.children(".two-oi-header").addClass("fadeInDown");
		    		oic.children(".two-oi-tb").addClass("scaleBig delay0d5s");
		    	} else if (sH >= 2500 && sH < 3245) {
		    		tcl.addClass("animate-enter");
		    		clc.children("div").addClass("animated");
		    		clc.children(".two-cl-1").addClass("fadeInDown");
		    		clc.children(".two-cl-2").addClass("fadeInDown delay1s");
		    		clc.children(".two-cl-3").addClass("fadeInDown delay1d5s");
		    	}else if (sH >= 3245 && sH < 3800) {
		    		tal.addClass("animate-enter");
		    		alc.children("div").addClass("animated");
		    		alc.children(".two-al-box").addClass("fadeInDown delay0d5s flyIn3");
		    	}else if (sH >= 3800 && sH < 4650) {
		    		tft.addClass("animate-enter");
		    		ftc.children("div").addClass("animated");
		    		ftc.children(".two-ft-header").addClass("fadeInDown");
		    		ftc.children(".stwo-al-box").addClass("scaleBig delay1s");
		    	};
	    	};
	    	eFun();
	    	$(window).bind("scroll" , eFun);
	    }
	    //case-effect
	    function effectCase() {
	    	var cas = $(".case-banner");
	    	var icas = cas.children("article");
	    	var eFun = function() {
	    		var sH = $(document).scrollTop();
	    			wH = $(window).height();
	    			dH = $(document).height();
	    		//alert(document.body.clientHeight);
	    		if (sH <= 0) {
	    			cas.addClass("animate-enter");
	    			icas.children("div").addClass("animated");
	    			icas.children(".font").addClass("fadeInRight");
	    			icas.children(".light").addClass("scaleBig delay0d5s");
		    	};
	    	};
	    	eFun();
	    	$(window).bind("scroll" , eFun);
	    }
	    //case-about
	    function effectAbout() {
	    	var abo = $(".about-banner");
	    	var iabo = abo.children("article");
	    	var eFun = function() {
	    		var sH = $(document).scrollTop();
	    			wH = $(window).height();
	    			dH = $(document).height();
	    		//alert(document.body.clientHeight);
	    		if (sH <= 0) {
	    			abo.addClass("animate-enter");
	    			iabo.children("div").addClass("animated");
	    			iabo.children(".font-us").addClass("fadeInDown");
	    			iabo.children(".true").addClass("fadeInUp");
		    	};
	    	};
	    	eFun();
	    	$(window).bind("scroll" , eFun);
	    }
	    //slide
		function slideScroll(oBox, prev, next, oUl, speed, autoPlay) {
			var oBox = $(oBox),
				prev = $(prev),
				next = $(next),
				oUl = $(oUl).find("ul"),
				w = oUl.find("li").outerWidth(true),
				l = oUl.find("li").length,
				s = speed,
				timer = null;
				oUl.css("width" , w * l + "px");
			//click left
			next.click(function() {
				if (!oUl.is(":animated")) {
					oUl.animate({"margin-left" : -w}, function() {
						oUl.find("li").eq(0).appendTo(oUl);
						oUl.css("margin-left" , 0)
					});
				};
			});
			//click right
			prev.click(function() {
				if (!oUl.is(":animated")) {
					oUl.find("li:last").prependTo(oUl);
					oUl.css("margin-left" , -w);
					oUl.animate({"margin-left" : 0});
				};
			});
			//autoPlay
			if (autoPlay === true) {
				timer = setInterval(function() {
					next.click();
				}, s * 1000)
				oBox.hover(function() {
					clearInterval(timer);
				}, function() {
					timer = setInterval(function() {
						next.click();
					}, s * 1000)
				});
			}
		};
		//goTop
		function goTop() {
			var gt = $(".goTop");
			gt.click(function() {
				$("html,body").animate({"scrollTop" : 0}, 500);
			})
			var gtFun = function() {
				var sH = $(document).scrollTop();
				(sH > 280) ? gt.fadeIn(50) : gt.fadeOut(50);
			}
			$(window).bind("scroll",gtFun);
		};
   
	//右侧悬浮方法
	function goTop(){
		$("#goTop").click(function() {$("html, body").animate({scrollTop : 0}, 500);});
		if (!window.XMLHttpRequest) {alert("亲！您的浏览器太古老了，请升级到高级版本体验。");};
	}
	function gtFun() {
		var gtB = $(".onlineConsult-gld>dl>dt");
		gtB.hide();
		var uGt = function() {
			var sTop = document.documentElement.scrollTop + document.body.scrollTop;
			if (sTop > 0) {
				gtB.show();
			} else {
				gtB.hide();
			}
		}
		$(window).bind("scroll",uGt);
	}
	function fixedR() {
		$(".onlineC-item>ul>li>div").each(function() {
			var _this = $(this);
			_this.hover(function() {
				_this.find(".onlineC").stop().animate({"width" : _this.attr("name") + "px"}, 300);
			}, function() {
				_this.find(".onlineC").stop().animate({"width" : "0px"}, 300);
			});
		});
	}