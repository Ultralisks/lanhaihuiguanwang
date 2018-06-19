// $("#header").load("/2018/header.html");
//判断移动端设备
var browserRedirect = function() {
    var bFlage = false;
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	var bIsWX = sUserAgent.match(/MicroMessenger/i)=="micromessenger";
    if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || bIsWX) {
        bFlage = true;
    };
    return bFlage;
};

//global header scroll header-bx-collapse
var srcollFun = function() {
	$(window).scroll(function() {
	    if ($("#header").offset().top > 50) {
            $("#header").addClass("header-bx-collapse");
        } else {
            $("#header").removeClass("header-bx-collapse");
        }
	});
};
//nav hover show navsub
var nsHoverFun = function() {
	var _timer = null,
		proSub = $("#nav-ul").find("li[name='proSub']");
	proSub.on({
		mouseenter : function() {
			var _this = $(this);
			if (!_this.hasClass("subShow")) {
				_timer = setTimeout(function() {
					$("#header").addClass("nav-sub-show");
					_this.addClass("subShow");
				}, 300);
			};
		},
		mouseleave : function() {
			var _this = $(this);
			clearTimeout(_timer);
			$("#header").removeClass("nav-sub-show");
			_this.removeClass("subShow");
		}
	});
}

// mw nav tap show
var mwNavShow = function() {
	var _head = $("#header"),
		_mwnav = $(".mw-nav-bx"),
		_mwnavh = _mwnav.height();
	_mwnav.css({"top":-_mwnavh});
	$(".mw-nav-btn").click(function() {
		var _this = $(this);
		if (!_this.hasClass("mw-tap")) {
			_this.addClass("mw-tap");
			_head.addClass("mw-nav-show");
			_mwnav.css({"top":_head.height()});
		} else {
			_this.removeClass("mw-tap");
			_head.removeClass("mw-nav-show");
			_mwnav.css({"top":-_mwnavh});
		}
	});
}

//case sort menu scroll fixed
var rMuFun = function() {
	var timer = null,
		mTip = 0,
		fm = $(".case-sort-bx"),
		fpW = fm.parent(".case-view").outerWidth();
	var sMl = function() {
		var sTop = $(document).scrollTop();
		if (document.compatMode === "CSS1Compat") {
			mTip = document.documentElement.scrollHeight - sTop - document.documentElement.clientHeight;
		} else {
			mTip = document.body.scrollHeight - sTop - document.body.clientHeight;
		};
		if (sTop>650) {
			if (mTip<480) {
				fm.css({
					"position" : "absolute",
					"left" : "0",
					"top" : "0",
					"margin" : "0"
				});
			} else {
				fm.css({
					"position" : "fixed",
					"left" : "50%",
					"top" : "55px",
					"margin-left" : -fpW/2
				})
			}
		} else {
			fm.css({
				"position" : "absolute",
				"left" : "0",
				"top" : "0",
				"margin" : "0"
			})
		}
	};
	$(window).bind("scroll", sMl);
}

//case sort box
var csortFun = function() {
	var _menu = $(".case-sort"),
		_csAl = $("#case-all"),
		_csOp = $("#case-ei"),
		_cEle = $("#cCloneEle"),
		cvTop = $('.case-view');
	_menu.on('click', 'li', function() {
		var _this = $(this);
		_this.addClass("current").siblings().removeClass("current");
		if (_this.children("a").attr("name") != 'c-s-0' && _this.children("a").attr("name")) {
			var _rel = _this.children("a").attr("name");
			_csOp.empty();
			$.each(_csAl.children("dl"), function() {
				var _dl = $(this),
					_dlRel = _dl.attr("rel");
				if (_dlRel === _rel) {
					_dl.clone(true).appendTo(_csOp);
					scrollLoad();
				}
			});
			_csAl.hide();
			_csOp.fadeIn(300);
		} else {
			_csOp.hide();
			_csAl.fadeIn(300);
		};
		$('html,body').animate({'scrollTop' : cvTop.offset().top-70}, 300);
	})
}

// temp cover rotate
var tcFun = function() {
	var tcover = function(obj, time) {
		this.obj = obj;
		this.time = time;
		this.star();
	};
	tcover.prototype = {
		opArr : [{"width" : 0}, {"width" : "260px"}],
		star : function() {
			var that = this;
			that.obj.on({
				mouseenter : function() {
					var _this = $(this);
					_this.find(".temp-cover").stop().animate(that.opArr[0], that.time, function() {
						_this.find(".temp-cover").hide().next().show();
						_this.find(".temp-cont").animate(that.opArr[1], that.time);
					});
				},
				mouseleave : function() {
					var _this = $(this);
					_this.find(".temp-cont").stop().animate(that.opArr[0], that.time, function() {
						_this.find(".temp-cont").hide().prev().show();
						_this.find(".temp-cover").animate(that.opArr[1], that.time);
					});
				}
			}, 'li');
		}
	}
	new tcover($(".temp-list"), 150);
}
//各设备端下执行方法
var allCommFun = function() {
    if (browserRedirect()) {
        //mwNavShow();
    } else {
		srcollFun();
		rMuFun();
		csortFun();
    };
    tcFun();
}

$(function() {
	allCommFun();
	nsHoverFun();
})