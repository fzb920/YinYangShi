/**
 * Created by Administrator on 2017/2/24.
 */
//��תľ��
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

];//config��ʵ����һ�����õ� �涨��ÿ��ͼƬ�Ĵ�Сλ�ò㼶͸����

//1 ��ȡԪ��
var wrap = document.getElementById("wrap");
var slide = wrap.children[0];
var ul = slide.children[0];
var lis = ul.children;//����Ҫ������ͼƬ
var arrow = slide.children[1];//Ҫ�����ļ�ͷ
var arrLeft = arrow.children[0];
var arrRight = arrow.children[1];

var flag=true;//����һ��������ͨ��������ֵ����ÿ�ε��ֻ���л���һ��ͼ����ܳ�����һ��ͼ
//��������ÿ��li��ӵ�ָ����configλ��
getpos();
//��������Ƴ��¼�
wrap.onmouseover= function () {
    animate(arrow,{"opacity":1});
}
wrap.onmouseout= function () {
    animate(arrow,{"opacity":0});
}

//��ӵ���¼�
arrRight.onclick= function () {
    if(flag){
        flag=false;
        config.push(config.shift());
        //��������ÿ��li��ӵ�ָ����configλ��
        getpos();
    }
}
arrLeft.onclick= function () {
    if(flag){
        flag=false;
        config.unshift(config.pop());
        //��������ÿ��li��ӵ�ָ����configλ��
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
        var flag = true;//���赱ǰ��һ�ζ�ʱ������ִ�п������������ÿ����ʽ��������ָ��λ�ã�
        //�ȱ���obj
        for (var k in obj) {
            //����obj����һЩ���Կ�����zIndex����opacity����ʱ��Ҫ��������
            if (k == "opacity") {
                //��͸���ȵ�ǰֵ��Ŀ��ֵ������Ϊ�����ı���������ʱ������Ӧ��������
                var target = obj[k] * 100;
                var leader = getStyle(tag, k) * 100 || 0;
                var step = (target - leader) / 10;
                //��step����ȡ��
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                //͸���ȵ�������Ҫȥ����λ
                tag.style[k] = leader / 100;

            } else if (k == "zIndex") {
                //zIndex����Ҫ���䣬ֱ�����ü���
                tag.style.zIndex = obj[k];

            } else {
                var target = obj[k];
                var leader = parseInt(getStyle(tag, k)) || 0;
                var step = (target - leader) / 10;
                //��step����ȡ��
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                leader = leader + step;
                tag.style[k] = leader + "px";
            }

            //��ȡ��ÿ����������Ҫ�Ĵ���
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
