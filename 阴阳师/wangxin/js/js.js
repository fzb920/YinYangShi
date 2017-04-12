/**
 * Created by 13497 on 2017/2/21.
 */
$(document).ready(function () {
    //头部特效
    //var paper = document.getElementById("paper");
    $("#paper").children().children("i").css("display","none");
    $("#paper>li").mouseenter(function () {
        $(this).children("i").css("display","block");
    })
    $("#paper>li").mouseleave(function () {
        $(this).children("i").css("display","none");
    })
    $("#paper>li").mouseenter(function () {
        $(this).children("a").css("opacity","1");
    })
    $("#paper>li").mouseleave(function () {
        $(this).children("a").css("opacity","0.5");
    })

});
//轮播图
