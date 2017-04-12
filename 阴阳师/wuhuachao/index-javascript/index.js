    //获取id
    function my$(id){
        return document.getElementById(id);
    }

    //封装动画函数
    function animate2(element,target) {
        //不清除计时器两个按钮移动层的时候就会抽搐
        clearInterval(element.timeId);
        element.timeId=setInterval(function () {
            //获取当前位置
            var current=element.offsetLeft;//当前距离左侧的像素
            //获取每次走几步
            var step=(target-current)/10;
            step=step>0?Math.ceil(step):Math.floor(step);
            current+=step;
            if(current!=target){
                element.style.left=current+"px";
            }else{
                clearInterval(element.timeId);
            }

        },20);
    }

    //头部轮播图
    var lunbo_box=my$("lunbo-box");
    var screen=my$("screen");
    var imgWidth=screen.offsetWidth;
    var ul=screen.children[0];
    var ulLis=ul.children;
    var ol=screen.children[1];
    var pic=0;
    var arrow=my$("arrow");
    var arrow_left=my$("arrow-left");
    var arrow_right=my$("arrow-right");

    for(var i=0;i<ulLis.length;i++){
        var li=document.createElement("li");
        li.index=i;
        li.innerHTML=i+1;
        ol.appendChild(li);
        li.onmouseover=function(){
            for(var j=0;j<ol.children.length;j++){
                ol.children[j].className="";
            }
            this.className="current";
            var target=-this.index*imgWidth;
            animate2(ul,target);
            pic = this.index;
        }
    }
    ol.children[0].className="current";
    //为ul追加li标签以便实现无缝连接
    ul.appendChild(ulLis[0].cloneNode(true));
    //设置定时器
    var timed=null;
    timed=setInterval(rightHandle,3000);
    //显示左右焦点
    lunbo_box.onmouseover=function(){
        arrow.style.display="block";
        clearInterval(timed);
    };
    //隐藏左右焦点
    lunbo_box.onmouseout=function(){
        arrow.style.display="none";
        timed=setInterval(rightHandle,3000);
    };
    //轮播图右边按钮
    arrow_right.onclick=rightHandle;
    function rightHandle(){
        if(pic==ulLis.length-1){
            pic=0;
            ul.style.left=0+"px";
        }
        pic++;
        animate2(ul,-pic*imgWidth);
        if(pic==ulLis.length-1){
            ol.children[0].className="current";
            ol.children[ol.children.length-1].className="";
        }
        else{
            for(var k=0;k<ol.children.length;k++){
                ol.children[k].className="";
            }
            ol.children[pic].className="current";
        }
    }
    rightHandle();
    //轮播图左边按钮
    arrow_left.onclick=function(){
        if(pic==0){
            pic=ulLis.length-1;
            ul.style.left=-(ulLis.length-1)*imgWidth+"px";
        }
        pic--;
        animate2(ul,-pic*imgWidth);
        for(var k=0;k<ol.children.length;k++){
            ol.children[k].className="";
        }
        ol.children[pic].className="current";
    };

    //标题跑马灯
    setInterval(function(){
        var tt=document.title;
        document.title=tt.substr(1)+tt.charAt(0);

    },50);

    //封装缝轮播函数
    function lunBo(element,elementList,time,target){
        var timed=setInterval(fnName,time);
        function fnName(){
            var current=elementList.offsetTop;
            var step=-1;
            current+=step;
            if(current>target){
                elementList.style.top=current+"px";
            }
            else{
                elementList.style.top=0+"px";
            }
        }
        element.onmouseover=function(){
            clearInterval(timed);
        };

        element.onmouseout=function(){
            timed=setInterval(fnName,time);
        };
    }
    var div11=my$("div11");
    var div11ul=my$("div11ul");
    lunBo(div11,div11ul,10,-1725 );
    var div13=my$("div13");
    var div13ul=my$("div13ul");
    lunBo(div13,div13ul,10,-1725 );
    var div14=my$("judge-box");
    var div14ul=my$("judge");
    lunBo(div14,div14ul,10,-1020 );

    //div12
    var div12=my$("div12");
    var div12ul=my$("div12ul");
    var div12_timed=setInterval(fn12,10);
    function fn12(){
        var current=div12ul.offsetTop;
        var step=1;
        current+=step;
        if(current<0){
            div12ul.style.top=current+"px";
        }
        else{
            div12ul.style.top=-1725+"px";
        }
    }
    div12.onmouseover=function(){
        clearInterval(div12_timed);
    };

    div12.onmouseout=function(){
        div12_timed=setInterval(fn12,10);
    };

    //游记轮播图
    var travel_body=my$("travel-body");
    var img_width=travel_body.offsetWidth;
    var travel=travel_body.children[0];
    var travel_footer=my$("travel-footer").children[0];
    var lis=travel_footer.children;

    for(var m=0;m<lis.length;m++){
        lis[m].index=m;
        lis[m].onmouseover=function(){
            for(var n=0;n<lis.length;n++){
                lis[n].className="";
            }
            this.className="current";
            var target=-this.index*img_width;
            animate2(travel,target);
        }
    }





