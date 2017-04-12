/**
 * Created by zengchen on 17/2/20.
 */

/*  头部快递通道topbar begin  */

/*  头部快递通道topbar end  */

/*  主体部分main begin  */

//main-banner动态效果
$(".logo").css({"left": "-50px", "opacity": 0}).animate({"left": "50px", "opacity": 1}, 1400);

$(".slogon").css({"top": "-100px", "opacity": 0}).animate({"top": "65px", "opacity": 1}, 1000);

$(".shenle").css({"top": "300px", "opacity": 0}).animate({"top": "0px", "opacity": 1}, 1000);

$(".qingming").css({"top": "500px", "opacity": 0}).animate({"top": "40px", "opacity": 1}, 1300);

$(window).scroll(function () {
    var h = $(document).scrollTop();
    if (h > 55) {
        $("#top_bar").addClass("fixed");
        $("#top_bar .left_part").css("opacity", 1);
        $(".logo span").addClass("hide");

    } else {
        $("#top_bar").removeClass("fixed");
        $("#top_bar .left_part").css("opacity", 0);
        $(".logo span").removeClass("hide");
    }
});


//导航处同人专区和官方渠道显示隐藏
//同人
$(".topnav_list .topnav_li").eq(4).mouseenter(
    function () {
        var n = $(".topbar_more"),
            arrowL = $(".topnav_list .topnav_li .nav_item .arrow").eq(0),
            arrowR = $(".topnav_list .topnav_li .nav_item .arrow").eq(1);
        n.addClass("show");
        arrowL.css("opacity", 1);
        n.children(".tongren").addClass("show");
        n.children(".qudao").removeClass("show");
        $("#top_bar").addClass("hover");
        n.mouseenter(function () {
            n.addClass("show");
            arrowL.css("opacity", 1);
            arrowR.css("opacity", 0);
            n.children(".tongren").addClass("show");
            n.children(".qudao").removeClass("show");
            $("#top_bar").addClass("hover");
        });
    }
);

$(".topnav_list .topnav_li").eq(4).mouseleave(
    function () {
        var n = $(".topbar_more"),
            arrowL = $(".topnav_list .topnav_li .nav_item .arrow").eq(0),
            arrowR = $(".topnav_list .topnav_li .nav_item .arrow").eq(1);
        n.removeClass("show");
        arrowL.css("opacity", 0);
        n.children(".tongren").removeClass("show");
        $("#top_bar").removeClass("hover");

        n.mouseleave(
            function () {
                n.removeClass("show");
                arrowL.css("opacity", 0);
                n.children(".tongren").removeClass("show");
                $("#top_bar").removeClass("hover");
            }
        );
    }
);

//渠道
$(".topnav_list .topnav_li").eq(5).mouseenter(
    function () {
        var n = $(".topbar_more"),
            arrowL = $(".topnav_list .topnav_li .nav_item .arrow").eq(0),
            arrowR = $(".topnav_list .topnav_li .nav_item .arrow").eq(1);
        n.children(".tongren").removeClass("show");
        n.addClass("show");
        arrowR.css("opacity", 1);
        n.children(".qudao").addClass("show");
        $("#top_bar").addClass("hover");
        n.mouseenter(function () {
            n.children(".tongren").removeClass("show");
            n.addClass("show");
            arrowR.css("opacity", 1);
            arrowL.css("opacity", 0);
            n.children(".qudao").addClass("show");
            $("#top_bar").addClass("hover");
        });
    }
);

$(".topnav_list .topnav_li").eq(5).mouseleave(
    function () {
        var n = $(".topbar_more"),
            arrowL = $(".topnav_list .topnav_li .nav_item .arrow").eq(0),
            arrowR = $(".topnav_list .topnav_li .nav_item .arrow").eq(1);
        n.removeClass("show");
        arrowR.css("opacity", 0);
        n.children(".qudao").removeClass("show");
        $("#top_bar").removeClass("hover");
        n.mouseleave(
            function () {
                n.removeClass("show");
                arrowR.css("opacity", 0);
                n.children(".qudao").removeClass("show");
                $("#top_bar").removeClass("hover");
            }
        );
    }
);

// 设置同人和渠道内容图片动态效果
$(".topbar_more .list_item .inner_item").hover(function () {
    $(this).animate({"marginTop": "-15px"}, 20)
}, function () {
    $(this).animate({"marginTop": "0px"}, 20)
});

// mainbanner二维码部分

// 二维码指针来回滑动
(function () {
    var line = function () {
        $(".NIE-qrcode .line").animate({"top": "91px"}, 2000, function () {
            $(".NIE-qrcode .line").animate({"top": "5px"}, 2000, line)
        })
    };
    line();
})();

// 二维码点击显示隐藏
(function () {
    var e = $(".fold_wrap"), n = $("#nie-download"), s = $(".nie_download_wrap");
    $(".close_donwloadbar").click(function () {
        s.addClass("fold");
        setTimeout(function () {
            e.show();
            n.hide()
        }, 300)
    });

    $(e).click(function () {
        s.removeClass("fold");
        setTimeout(function () {
            n.show();
            e.hide()
        }, 300)
    })
})();

/*  活动公告部分news_section begin  */

//tab栏
$("a.news_tab").mouseenter(function () {
        var index = $(this).index();
        $(this).siblings("a").removeClass("active on");
        $(this).addClass("active on");
        $("div.news_list").animate({"left": -500 * index + "px"}, 100)
    }
);

//轮播图
/*$(".banner_nav a").mouseenter(function () {
    var index = $(this).index();
    $(this).siblings("a").removeClass("on");
    $(this).addClass("on");
    $(".banner_wrap").animate({"left": -360 * index + "px"}, 200);
    clearInterval(timer)
});

function autoPlay() {
    var pic = 0;
    clearInterval(timer);
    var timer = setInterval(function () {
        if (pic == 3) {
            pic = 0;
        } else {
            $(".banner_wrap").animate({"left": -360 * pic + "px"});
            $(".banner_nav a").removeClass("on");
            $(".banner_nav a").eq(pic).addClass("on");
            pic++;
        }
    },1000)
}
autoPlay();*/

(function () {
    var timer = null;
    var pic = 0;
    $(".banner_nav a").mouseenter(function () {
        var index = $(this).index();
        $(this).siblings("a").removeClass("on");
        $(this).addClass("on");
        $(".banner_wrap").animate({"left": -360 * index + "px"}, 200);
        pic = index;
        clearInterval(timer)
    });
    $(".banner_nav a").mouseleave(function () {
        autoPlay();
    });

    function autoPlay() {
        clearInterval(timer);
        timer = setInterval(function () {
            if (pic == 3) {
                pic = 0;
            } else {
                $(".banner_wrap").animate({"left": -360 * pic + "px"});
                $(".banner_nav a").removeClass("on");
                $(".banner_nav a").eq(pic).addClass("on");
                pic++;
            }
        }, 1500)
    }

    autoPlay();
})();


/*  活动公告部分news_section end  */

/*  式神部分shishen_section begin  */
// 式神按钮:
(function () {
    var e = $(".shishen_section .com_tabs a");
    var o = $(".pingan_container > section");
    e.click(function () {
        var index = $(e).index($(this));
        $(this).addClass("active").siblings().removeClass("active");
        o.eq(index).addClass("show").siblings().removeClass("show");
    });
})();

(function () {
    var e = $(".shishen_topbar .shishen_tabs a");
    var o = $(".shishen_list");
    e.click(function () {
        var index = $(e).index($(this));
        $(this).addClass("cur").siblings().removeClass("cur");
        o.animate({"left": -828 * index + "px"}, 200)
    });
})();

(function () {
    /*var e = $(".index_side_bar .link_list a.icon7");
    e.mouseenter(function () {
        setTimeout(function () {
            e.find(".icon7_h").show();
        }, 400)
    });
    e.mouseleave(function () {
        e.find(".icon7_h").hide()
    });*/

    $(".icon7").hover(function () {
        $(this).children(".icon7_h").stop().slideDown()
    }, function () {
        $(this).children(".icon7_h").stop().slideUp()
    });

})();

//式神头像3d效果,插件
//$("div.tempWrap").animate3d();

$(".shishen_wrap .shishen_list li").animate3d({
    "Perspective": 1000,
    "Distance": 20,
    "Rotation": 0.9,
    "StartX": 0,
    "StartY": 0
});


// 主角按钮
(function () {
    var e = $(".zhujue_tabs a");
    var o = $("div.zhujue_wrap");
    e.click(function () {
        var index = $(e).index($(this));
        $(this).addClass("cur").siblings().removeClass("cur");
        o.eq(index).addClass("show").siblings().removeClass("show");
    })
})();

/*  式神部分shishen_section end  */

/*  主体部分main end  */

/*  攻略部分strategy_section begin  */
// 左侧轮播图
(function () {
    var timer = null;
    var pic = 0;
    $(".strategy_banner_nav a").mouseenter(function () {
        var index = $(this).index();
        $(this).siblings("a").removeClass("on");
        $(this).addClass("on");
        $(".strategy_banner_wrap").animate({"left": -368 * index + "px"}, 200);
        pic = index;
        clearInterval(timer)
    });
    $(".strategy_banner_nav a").mouseleave(function () {
        autoPlay();
    });

    function autoPlay() {
        clearInterval(timer);
        timer = setInterval(function () {
            if (pic == 2) {
                pic = 0;
            } else {
                $(".strategy_banner_wrap").animate({"left": -368 * pic + "px"});
                $(".strategy_banner_nav a").removeClass("on");
                $(".strategy_banner_nav a").eq(pic).addClass("on");
                pic++;
            }
        }, 2000)
    }

    autoPlay();
})();

$(".strategy_nav a span").hover(function () {
    $(this).animate({"marginTop": "-10px"}, 20)
}, function () {
    $(this).animate({"marginTop": "0px"}, 20)
});

$(".right_strategy_part .com_tabs a").mouseenter(function () {
        var index = $(this).index(".right_strategy_part .com_tabs a");
        $(this).addClass("active").siblings("a").removeClass("active");
        $(".strategy_list").animate({"left": -835 * index + "px"}, 400)
    }
);

/*  攻略部分strategy_section end  */

/*  同人部分tongren_section begin  */
$(".tongren_tabs a").mouseenter(function () {
        var index = $(this).index(".tongren_tabs a");
        $(this).parent("li").siblings("li").find("a").removeClass("on");
        $(this).addClass("on");
        $(".tongren_pics_wrap").animate({"left": -1220 * index + "px"}, 200)
    }
);

$("a.to_tuku").hover(function () {
    $(this).animate({"right": "-15px"}, 20)
}, function () {
    $(this).animate({"right": "0px"}, 30)
});


/*  同人部分tongren_section end  */

/*  视频壁纸部分shitu_section begin  */

//插件:鼠标滑过图片显示遮罩层效果
$(".shitu_wrap").sliphover({
    /*duration:100,*/
    /*reverse:true*/
    /*fontSize:"30px",*/
    /*fontFamily:"Microsoft Yahei"*/
});


/*  视频壁纸部分shitu_section end  */


// 返回顶部箭头

$("a.back_top").hover(function () {
    $(this).animate({"marginTop": "-30px"}, 20)
}, function () {
    $(this).animate({"marginTop": "0px"}, 30)
}).click(function () {
    $(document.body).animate({"scrollTop": 0}, 300)
});


/*  页面底部page_footer begin  */
$("#copyRight .protect").sparkleHover({
    colors: ['#297E97', "#2EB8D5", '#36BEC1'],
    num_sprites: 12,
    lifespan: 1000,
    radius: 400,
    sprite_size: 20,
    shape: 'circle',
    gravity: false
});

$(window).scroll(function () {
    // 当页面卷曲高度大于等于footer以上的高度时,.page_footer里的文字透明度由0变为1
    var flag = $(document).height() <= ($(document).scrollTop() + $(".page_footer").height() + 300);
    if (flag) {
        $(".page_footer .txt1").animate({"opacity": 1}, 800);
        $(".page_footer .txt2").animate({"opacity": 1}, 800);
        $(".footer_btn .bar").animate({"opacity": 1}, 800);
    }
});

$("a.footer_btn").hover(
    function () {
        $(".footer_btn .bottom_code_wrap").animate({"opacity": 1, "marginTop": "-10px"}, 200);
        $(".page_footer .txt2 em").animate({"opacity": 0}, 200);
        $(".footer_btn .door").animate({"marginTop": "40px"}, 100);

    }, function () {
        $(".footer_btn .bottom_code_wrap").animate({"marginTop": "0", "opacity": 0}, 200);
        $(".page_footer .txt2 em").animate({"opacity": 1}, 200);
        $(".footer_btn .door").animate({"marginTop": "0px"}, 100);
    }
);


/*  页面底部page_footer end  */
