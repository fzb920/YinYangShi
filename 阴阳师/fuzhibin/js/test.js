/**
 * Created by Administrator on 2017/2/20.
 */




//main1部分js
$(function () {
    $(".main1").mouseenter(function () {
        $(".door>img").animate({"width":"683px"},1000, function () {
            $(this).parent().siblings().fadeIn(1000).children().fadeIn(1000).children().fadeIn(1000)
        })
    })
})
//main2部分js

//左侧按钮部分
$(function () {
    $("#main2_bt>a").click(function () {
        var index=$(this).index();
        $(this).eq(0).addClass("active").siblings().removeClass("active");
        $(".js_change").eq(index).fadeIn(1000).siblings().hide();
        //var $js_change=document.getElementsByTagName("js_change");
        //console.log($("#main2_bt>.js_change"));
        })



    $(".main2_zhujiao").children(1).children("a").mouseenter(function () {
        var $zj_item=$(this).children(".intro")[0];
        var h=$zj_item.offsetHeight;
        $(this).children(".intro").stop().animate({top:-h})
    $(".main2_zhujiao").children(1).children().mouseleave(function () {
        $(this).children(".intro").stop().animate({top:0})
    })
    })


})
//main3开始

