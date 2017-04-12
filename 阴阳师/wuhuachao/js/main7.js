/**
* Created by Administrator on 2016/9/3.
*/
$(function () {
    //  给window注册鼠标滚动事件
    $(window).scroll(function () {
        //   获取鼠标滚动的高度用  $(window).scrollTop() （注意dom对象和jquery对象的转换）
        if ($(window).scrollTop() >= parseInt($("#header").css("height"))) {
            $(".pos1").animate({"opacity": 1}, 300, function () {
                $(".pos2").animate({"opacity": 1}, 300, function () {
                    $(".pos3").animate({"opacity": 1}, 300, function () {
                        $(".pos4").animate({"opacity": 1}, 300, function () {
                            $(".pos5").animate({"opacity": 1}, 300);
                        });
                    });
                });
            });
        }
    });

    //  摄影技巧的轮播图
    //  首先克隆的是6个li(一走走一排)
    var cloneLi = $("#fastMain li").slice(0, 6).clone();
    $("#fastMain ul").append(cloneLi);
    //  一组为六张  把一组当作一张图片   设置一个值（克隆之后共有三组）
    var indexCount = 3;
    //  自定义一个索引
    var index = 0;
    //  设置每次移动的距离 (移动6张)   //包括padding
    var top = 6 * $("#fastMain ul li").innerHeight();
    //  点击上边按钮
    $(".prevNow").click(function () {
        //  进行判断
        if (index === indexCount - 1) {  //索引为2  显示克隆那张
            index = 0;
            $("#fastMain ul").css("marginTop", "0px");
        }
        index++;
        $("#fastMain ul").stop().animate({marginTop: -index * top}, 500);
        //console.log(index);
        //console.log($("#fastMain ul").css("marginTop"));
    });

    //  点击下边按钮
    $(".nextNow").click(function () {
        //  进行判断
        if (index === 0) {  //索引为2  显示克隆那张
            index = indexCount - 1;
            $("#fastMain ul").css("marginTop", -index * top + "px");
        }
        index--;
        $("#fastMain ul").stop().animate({marginTop: -index * top + "px"}, 500);
        //console.log(index);
        //console.log($("#fastMain ul").css("marginTop"));
    });

    //  无缝滚动
    var timer = setInterval(function () {
        $(".nextNow").click();
    }, 3000);

    //  鼠标移入停止滚动
    $("#fastMain").mouseenter(function () {
        clearInterval(timer);
    });

    //  鼠标移出停止滚动
    $("#fastMain").mouseleave(function () {
        timer = setInterval(function () {
            $(".nextNow").click();
        }, 3000);
    });

    // 注册鼠标移入放大事件
    $("#fastMain ul li").mouseenter(function () {
        $(this).find("img").stop().animate({width:"130%",height:"130%",left:"-15%",top:"-15%"});
        //console.log($(this).find("img"));
    });


    $("#fastMain ul li").mouseleave(function () {
        $(this).find("img").stop().animate({width:"100%",height:"100%",left:"0",top:"0"});
        //console.log($(this).find("img"));
    });
});