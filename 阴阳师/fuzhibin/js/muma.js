/**
 * Created by Administrator on 2017/2/24.
 */
//旋转木马
var config = [
    {
        width: 200,
        top: 20,
        left: 185,
        opacity: 0.2,
        zIndex: 2
    },//0
    {
        width: 400,
        top: 70,
        left: 132,
        opacity: 0.8,
        zIndex: 3
    },//1
    {
        width: 400,
        top: 100,
        left: 402,
        opacity: 1,
        zIndex: 4
    },//2
    {
        width: 400,
        top: 70,
        left: 676,
        opacity: 0.8,
        zIndex: 3
    },//3
    {
        width: 200,
        top: 20,
        left: 820,
        opacity: 0.2,
        zIndex: 2
    }//4

];//config其实就是一个配置单 规定了每张图片的大小位置层级透明度

//1 获取元素
var wrap = document.getElementById("wrap");
var slide = wrap.children[0];
var ul = slide.children[0];
var lis = ul.children;//所有要操作的图片
var arrow = slide.children[1];//要操作的箭头
var arrLeft = arrow.children[0];
var arrRight = arrow.children[1];

var flag=true;//设置一个变量，通过变量的值来让每次点击只能切换完一张图后才能出现下一张图
//遍历，将每个li添加到指定的config位置
getpos();
//添加移入移出事件
wrap.onmouseover= function () {
    animate(arrow,{"opacity":1});
}
wrap.onmouseout= function () {
    animate(arrow,{"opacity":0});
}

//添加点击事件
arrRight.onclick= function () {
    if(flag){
        flag=false;
        config.push(config.shift());
        //遍历，将每个li添加到指定的config位置
        getpos();
    }
}
arrLeft.onclick= function () {
    if(flag){
        flag=false;
        config.unshift(config.pop());
        //遍历，将每个li添加到指定的config位置
        getpos();
    }
}
function getpos() {
    for (var i = 0; i < config.length; i++) {
        animate(lis[i],config[i], function () {
            flag=true;
        });
    }
}




function animate(tag, obj, fn) {

    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var flag = true;//假设当前这一次定时器代码执行可以设置清除（每个样式都到达了指定位置）
        //先遍历obj
        for (var k in obj) {
            //由于obj中有一些属性可能是zIndex或者opacity，这时需要单独处理
            if (k == "opacity") {
                //将透明度当前值和目标值都设置为扩大后的倍数，设置时除以相应倍数即可
                var target = obj[k] * 100;
                var leader = getStyle(tag, k) * 100 || 0;
                var step = (target - leader) / 10;
                //给step设置取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                //透明度的设置需要去掉单位
                tag.style[k] = leader / 100;

            } else if (k == "zIndex") {
                //zIndex不需要渐变，直接设置即可
                tag.style.zIndex = obj[k];

            } else {
                var target = obj[k];
                var leader = parseInt(getStyle(tag, k)) || 0;
                var step = (target - leader) / 10;
                //给step设置取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                leader = leader + step;
                tag.style[k] = leader + "px";
            }

            //提取出每种条件都需要的代码
            if (leader != target) {
                flag = false;
            }
        }

        if (flag) {
            clearInterval(tag.timer);
            fn && fn();
        }

    }, 20);
}

function getStyle(tag, attr) {
    if (tag.currentStyle) {
        return tag.currentStyle[attr];
    } else {
        return getComputedStyle(tag, null)[attr];
    }
}
