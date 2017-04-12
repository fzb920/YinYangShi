// options to pass in and default
   // perspective   | 1000px DONE
   // distance      | 50px   DONE
   // rotation      | 0.5    DONE
   // startX        | 0
   // startY        | 0


jQuery.fn.extend({ 
   animate3d: function(customParams){
      
      // set params defaults
         var params = {
            perspective: customParams.perspective || 1000,
            distance: customParams.distance || 50,
            rotation: customParams.rotation || 0.5,
            startX: customParams.startX || 0,
            startY: customParams.startY || 0
         } 
      
      //grab each 3dAnimate element and pass it into the animate function along with the config data
         $(this).each(function(index, element){
            //set the perspective
               $(element).css('perspective', params.perspective + 'px');
            //send it into the animate function
               animate3dElement(
                 element,
                 params.distance,  
                 params.rotation, 
                 params.startX, 
                 params.startY,
                 animate,
                 setCssStyle
               );
               $(window).resize(function(){
                  animate3dElement(
                     element,
                     params.distance,  
                     params.rotation, 
                     params.startX, 
                     params.startY,
                     animate,
                     setCssStyle
                  );
               });
         });
      
      //sets an animation for each element
         function animate3dElement (element, 
                                    distance, 
                                    rotationMultiple,
                                    startX,
                                    startY,
                                    animate,
                                    setCssStyles) {
            //get the specs of the element to be animated
               var divOffset,
                   divTop,
                   divLeft,
                   divWidth,
                   divHeight
               divOffset = $(element).offset();
               divTop = divOffset.top;
               divLeft = divOffset.left;
               divWidth = $(element).innerWidth();
               divHeight = $(element).innerHeight();
            //animate on load
               animate(element, startX, startY, rotationMultiple, distance, setCssStyles);
            //animate based on onmousemove
               $(element).mousemove(function(event){
                  //calculate the mouse position and set the tilt and movement    
                     var pctX = ((event.pageX - divLeft)/divWidth) - 0.5 + startX;
                     var pctY = ((event.pageY - divTop)/divHeight) - 0.5 + startY;
                  //animate the graphic
                     animate(this, pctX, pctY, rotationMultiple, distance, setCssStyles);
               });
            //animate on mouse leave
               $(element).mouseleave(function(){
                  animate(this, startX, startY, rotationMultiple, distance, setCssStyles);    
               });
         };
      
      //sets the calculates the rotation and translation and then calls the css function
         function animate (element, pctX, pctY, rotationMultiple, distance, callback){
            var rotateX = pctY * rotationMultiple * -180;
            var rotateY = pctX * rotationMultiple * 180;
            var translateX = pctX * distance;
            var translateY = pctY * distance;
            $(element).children().each(function(index, element){
                callback(element, index, translateX, translateY, rotateX, rotateY);
            });

         };
      
      //sets the desired css on the element
         function setCssStyle(element, index, translateX, translateY, rotateX, rotateY, distance){
             var x = translateX * index;
             var y = translateY * index;
             $(element).css('transform', 'translate('+ x +'px ,'+ y +'px) rotateX('+ rotateX +'deg) rotateY('+ rotateY +'deg)');
             $(element).css('-webkit-transform', 'translate('+ x +'px ,'+ y +'px) rotateX('+ rotateX +'deg) rotateY('+ rotateY +'deg)');
         };
   }
   
});
   