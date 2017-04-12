$(document).ready(function () {
    //头部搜索框
    $(".header-button").click(function () {
        $(".right-search").animate({
            "opacity": "1"
        }, 600);
    });
    $(".nav").mouseleave(function () {
        $(".right-search").animate({
            "opacity": "0"
        }, 600);
    });
    //顶部子导航
    $(".community").mouseenter(function () {
        $(".travel-nav").slideDown();
    });
    $(".reserve").mouseenter(function () {
        $(".yuding-nav").slideDown();
    });
    $(".nav").mouseleave(function () {
        $(".travel-nav").slideUp();
        $(".yuding-nav").slideUp();
    });

    //header-line
    $("#main-body .div4").mouseenter(function () {
        $(".header-line").stop().animate({
            "width": "275px"
        }, 1000);
    });
    $("#main-body .div4").mouseleave(function () {
        $(".header-line").stop().animate({
            "width": "0px"
        }, 1000);
    });

    //当前高亮显示
    $("#main-body div").mouseenter(function () {
        $(this).css("opacity", "1").siblings("div").css("opacity", "0.4");
        $("#main-body .div4").css("opacity", "1");
    });
    $("#main-body").mouseleave(function () {
        $("#main-body div").css("opacity", "1");
    });

    //话题与游记
    $(".bigger img").mouseenter(function () {
        $(this).stop().animate({
            "width": "412px",
            "height": "277px",
            "left": "-68px",
            "top": "-46px"
        }, 1000);
    });

    $(".bigger img").mouseleave(function () {
        $(this).stop().animate({
            "width": "275px",
            "height": "185px",
            "left": "0px",
            "top": "0px"
        }, 1000);
    });

    //关闭固定登陆栏
    $("#login-box").mouseenter(function () {
        $("#login-close").css("display", "block");
    });
    $("#login-box").mouseleave(function () {
        $("#login-close").css("display", "none");
    });
    $("#login-close").click(function () {
        $("#login-box").fadeOut(800);
    });

    //返回顶部案例
    $(window).scroll(function () {
        var scrollHeight = $(this).scrollTop();
        if (scrollHeight > 100) {
            $("#returnTop").fadeIn(300);
        }
        else {
            $("#returnTop").fadeOut(300);
        }
    });
    $('#returnTop').click(function () {
        $('html,body').animate({scrollTop: '0px'}, 1000);
    });

});