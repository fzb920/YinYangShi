/**
 * 作者：荆衍 完成时间 2016/9/3.
 */



$(document).ready(function(){
    var pageHeight=$(document).height();
    var clientHeight=document.documentElement.clientHeight;
    var scrollMax=pageHeight-clientHeight;
    $(window).scroll(function () {
        var scrollTop= $(this).scrollTop();
        if(scrollTop>=scrollMax){
            $(".a-bottom").css("visibility","hidden");
        }else if(scrollTop>0&&scrollTop<scrollMax){
            $(".a-top").css("visibility","visible");
            $(".a-bottom").css("visibility","visible");
        }else{
            $(".a-top").css("visibility","hidden");
        }
    });

    $(".a-top").click(function () {
        $("body,html").animate({"scrollTop":"0px"},1000);
    });

    $(".a-bottom").click(function () {
        $("body,html").animate({"scrollTop":scrollMax+"px"},1000);
    });

    $(".nav li>a").mouseenter(function(){
        //当移动进来的时候设置颜色当前a标签的颜色和背景颜色
        //然后让其子元素list展开 100毫秒
        $(".list").slideUp(100);
        $(this).siblings(".list").slideDown(100);
    });
    $(".nav").mouseleave(function(){
        $(".list").slideUp(100);
    });



    //console.log(username);

        $("#a-center").mouseenter(function(){
            var username=window.location.hash;
            if(username){
                var url=username;
                username=username.slice(1);
                $("#xianshi").text(username);
                var url2=$("#header #guanyushixuan").attr("href")+url;
                $("#header #guanyushixuan").attr("href",url2);
                var url2=$("#header #sheyingjiaocheng").attr("href")+url;
                $("#header #sheyingjiaocheng").attr("href",url2);
                var url2=$("#header #lingganxuanran").attr("href")+url;
                $("#header #lingganxuanran").attr("href",url2);
                var url2=$("#header #shouye").attr("href")+url;
                $("#header #shouye").attr("href",url2)
            //console.log($("#xianshi"));
                 $("#xianshi").css("display","block");
            }else{
                var yhm=$("#yhm").val();
                if(yhm){
                    $("#xianshi").text(yhm);
                    $("#xianshi").css("display","block");
                }else{
                    $("#xianshi").text("请登录...");
                    $("#xianshi").css("display","block");
                }
            }
        });
    $("#a-center").mouseleave(function(){
        $("#xianshi").css("display","none");
    });
});
