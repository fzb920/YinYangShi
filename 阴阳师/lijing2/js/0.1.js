/**
 * Created by Administrator on 2017/2/24 0024.
 */

/*//1 ��ȡҳ��Ԫ��
//�ȵ�
var hotBanner = document.getElementById("hot-banner");
var bannerBox1 = hotBanner.children[0];
var list1 = bannerBox1.children[0];
var  hd1= hotBanner.children[1];
var hds1 = hd1.children;
var imgWid1 = bannerBox1.offsetWidth;//�����ȡinner�Ŀ�ȣ������ܻ�ȡͼƬ

//����ÿ��span���¼�
for (var i = 0; i < hds1.length; i++) {
    hds1[i].index = i;

    hds1[i].onclick = function () {
        //�����ť��ɫ
        for (var i = 0; i < hds1.length; i++) {
            hds1[i].className = "";
        }
        this.className = "current";

        //�����˶�Ч��
        //�˶���λ��Ϊ��ǰ��ǩ������ֵ*ͼƬ���*-1
        var target = -this.index * imgWid1;
        animate(list1,target);

    }
}

//�ȵ�
var tongrenBanner = document.getElementById("tongren-banner");
var bannerBox = tongrenBanner.children[0];
var list = bannerBox.children[0]
var  hd= tongrenBanner.children[1];
var hds = hd.children;
var imgWid = bannerBox.offsetWidth;//�����ȡinner�Ŀ�ȣ������ܻ�ȡͼƬ

//����ÿ��span���¼�
for (var i = 0; i < hds.length; i++) {
    hds[i].index = i;

    hds[i].onclick = function () {
        //�����ť��ɫ
        for (var i = 0; i < hds.length; i++) {
            hds[i].className = "";
        }
        this.className = "current";

        //�����˶�Ч��
        //�˶���λ��Ϊ��ǰ��ǩ������ֵ*ͼƬ���*-1
        var target = -this.index * imgWid;
        animate(list,target);

    }
}*/


function animate(tag, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //��ǩ.offsetLeft  ��ȡ��ǩ��λ��
        var leader = tag.offsetLeft;
        var step = 9;
        step = leader < target ? step : -step;

        //�жϵ�ǰλ�ú�Ŀ��λ��֮ǰ�ľ���
        if (Math.abs(leader - target) > Math.abs(step)) {
            leader = leader + step;//�����µ�λ��
            tag.style.left = leader + "px";
        } else {
            tag.style.left = target + "px";
            clearInterval(tag.timer);
        }
    }, 20);
}

$(function() {

        $(".NIE-qrcode .ewm-light").animate({
            "top": "158px",
        }, 3000,fun)


    function fun() {
        $(".NIE-qrcode .ewm-light").animate({
            "top": "0px",
        }, 3000,fun1)
    }

    function fun1() {
        $(".NIE-qrcode .ewm-light").animate({
            "top": "158px",
        }, 3000,fun)
    }

})


$(function(){
    $(".item").mousemove(function(){
        $(this).css("background","url(images/pic.jpg)").siblings().css("background","");
    });

    $(".btn-close").click(function(){
        $("#Jsider").hide();
    })
})

//-------by zc

function slideHot() {
    var timer = null;
    var pic = 0;
    $("#hot-banner .hd a").mouseenter(function () {
        var index = $(this).index();
        $(this).siblings("a").removeClass("current");
        $(this).addClass("current");
        $("#hot-banner .banner_box ul").animate({"left": -270 * index + "px"}, 200);
        pic = index;
        clearInterval(timer)
    });
    $("#hot-banner .hd a").mouseleave(function () {
        autoPlay();
    });

    function autoPlay() {
        clearInterval(timer);
        timer = setInterval(function () {
            if (pic == 4) {
                pic = 0;
            } else {
                $("#hot-banner .banner_box ul").animate({"left": -270 * pic + "px"});
                $("#hot-banner .hd a").removeClass("current");
                $("#hot-banner .hd a").eq(pic).addClass("current");
                pic++;
            }
        }, 2000)
    }
    autoPlay();
}
slideHot();

function slideTongren() {
    var timer = null;
    var pic = 0;
    $("#tongren-banner .hd a").mouseenter(function () {
        var index = $(this).index();
        $(this).siblings("a").removeClass("current");
        $(this).addClass("current");
        $("#tongren-banner .banner_box ul").animate({"left": -270 * index + "px"}, 200);
        pic = index;
        clearInterval(timer)
    });
    $("#tongren-banner .hd a").mouseleave(function () {
        autoPlay();
    });

    function autoPlay() {
        clearInterval(timer);
        timer = setInterval(function () {
            if (pic == 4) {
                pic = 0;
            } else {
                $("#tongren-banner .banner_box ul").animate({"left": -270 * pic + "px"});
                $("#tongren-banner .hd a").removeClass("current");
                $("#tongren-banner .hd a").eq(pic).addClass("current");
                pic++;
            }
        }, 2000)
    }
    autoPlay();
}
slideTongren();


function codeBtn() {
    var e = $("#media-box .media-tit li");
    var o = $("#media-box .media-wrap li");
    e.click(function () {
        var index = $(e).index($(this));
        $(this).addClass("cur").siblings().removeClass("cur");
        o.eq(index).addClass("cur").siblings().removeClass("cur");
    });
}
codeBtn();



