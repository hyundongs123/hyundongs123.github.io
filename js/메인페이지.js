
myface.addEventListener('click',(e)=>{
    $("#myface").css("transition-duration","2s")
   setTimeout(() => {
   $("#myface").css({"background":"url(../image/현동3크기조정.PNG)"}).css("backgroundSize","100%")
   setTimeout(() =>{
   $("#myface").css({"background":"url(../image/현동2크기조정.PNG)"}).css("transition-duration","2s").css("backgroundSize","100%")
   setTimeout(() => {
   $("#myface").css({"background":"url(../image/현동1크기조정.PNG)"}).css("backgroundSize","100%")
   
}, 400);
}, 400);
}, 100);
   })
myprofile.addEventListener('click',(e)=>{
    $("#myprofile").css("transition-duration","2s")
   setTimeout(() => {
   $("#myprofile").css({"background":"url(./image/프로필1.JPG)"}).css("backgroundSize","100%").css("backgroundPosition","center")
   
}, 100);
   })
