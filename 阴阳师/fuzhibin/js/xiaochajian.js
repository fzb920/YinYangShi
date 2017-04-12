/**
 * Created by Administrator on 2017/2/25.
 */
    $(function(){

        var imgL=$(".pic img").size();
        var deg=360/imgL;
        var roY=0,roX=-10;
        var xN=0,yN=0;
        var play=null;

        $(".pic img").each(function(i){
            $(this).css({
                <!--translateZ ����2d��ת����z��-->
                "transform":"rotateY("+i*deg+"deg) translateZ(300px)"	});
            <!--��ֹͼƬ����ק-->
            $(this).attr('ondragstart','return false');
        });

        $(document).mousedown(function(ev){
            var x_=ev.clientX;
            var y_=ev.clientY;
            clearInterval(play);

            $(this).bind('mousemove',function(ev){
                /*��ȡ��ǰ��������*/
                var x=ev.clientX;
                var y=ev.clientY;
                /*��������֮��ľ���*/
                xN=x-x_;
                yN=y-y_;

                roY+=xN*0.2;
                roX-=yN*0.1;

                //$('body').append('<div style="width:5px;height:5px;position:absolute;top:'+y+'px;left:'+x+'px;background-color:red"></div>');

                $('.pic').css({
                    transform:'perspective(800px) rotateX('+roX+'deg) rotateY('+roY+'deg)'
                });
                /*֮ǰ���������*/
                x_=ev.clientX;
                y_=ev.clientY;

            });
        }).mouseup(function(){
            $(this).unbind('mousemove');
            var play=setInterval(function(){

                xN*=0.95;
                yN*=0.95
                if(Math.abs(xN)<1 && Math.abs(yN)<1){
                    clearInterval(play);
                }
                roY+=xN*0.2;
                roX-=yN*0.1;
                $('.pic').css({
                    transform:'perspective(800px) rotateX('+roX+'deg) rotateY('+roY+'deg)'
                });

            },30);

        });

    });
