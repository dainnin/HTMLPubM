

$(document).ready(function () {
    $(window).resize(function () {
         pezo();
    });
    
   pezo();
    
    function pezo(){    
         
        xscreenx.textContent =  screen.width + " Largo" + "; " + screen.height + " Alto";

        xwindowx.textContent =  screen.width;
       
        xpagex.textContent =  window.innerWidth;
  

        xmainx.style.width= window.innerWidth*0.7+ "px";

        xmainx.style.height=  window.innerHeight * 0.98 -133 + "px";

        xsectx.style.width= window.innerWidth * 0.27 - 7 + "px";

        xsectx.style.height= window.innerHeight * 0.97 - 133 + "px";


}

});

function mainif(){
    let a=document.getElementById('xmainx');
    a.innerHTML="<iframe id='mlcom' src='http://www.mercadolibre.com.ar' frameborder='0'width='100%'></iframe>";
    
}
function mainif2(){
    let a=document.getElementById('xmainx');
    a.innerHTML="<iframe id='mlcom' src='./html-01/index.html' frameborder='0'width='100%'></iframe>";
    
}
function mainif3(){
    let a=document.getElementById('xmainx');
    a.innerHTML="<iframe id='mlcom' src='./html-02/index.html' frameborder='0'width='100%'></iframe>";
    
}
function mainif4(){
    let a=document.getElementById('xmainx');
    a.innerHTML="<iframe id='mlcom' src='./html-03/index.html' frameborder='0'width='100%'></iframe>";
    
}