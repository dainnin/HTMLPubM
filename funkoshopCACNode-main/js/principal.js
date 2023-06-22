
function relx(a){
  window.location.href=a;
  window.location.href;
  window.location.reload(); 
  }
  function dByID(a){
    const  ff= document.getElementById(a);
    return ff
    }
    
function randomx (a)
{ 
  
  return Math.floor(Math.random()* a);

}
const OKeys=Object.keys;
const csl=console.log;
const hash=location.hash;
const urlCap =location.origin+location.pathname;
 const bodiy = document.createElement("body")

function comprobarValor(a,b){
 
  
  if (a.substring(a.length-b.length,a.length)==b){
    
    csl("Encontrado",a);
 
 return a.substring(0,a.length-b.length)
}else{
    a;
   csl("Sin Coincidencia",a);
   return a;
  }

} 


document.head.insertAdjacentHTML("afterbegin",`  <!-- link fuentes -->
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500;700&display=swap" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;700&display=swap" rel="stylesheet"> 

<!-- link css -->
<link rel="stylesheet" href="./css/reset.css">
<link rel="stylesheet" href="./css/header.css">

<link rel="stylesheet" href="./css/footer.css">`);

function HeaFoot(){ 
  document.body.insertAdjacentHTML("Afterbegin",`<header class="header">
        <img class="logo" src="./multimedia/branding/logo_light_horizontal.svg" alt="logo">

    <div class="nav__container">
        <ul class="nav">
            <li class="nav__item nav__item--submenu">
                <a class="nav__link" href="./pages/tienda/shop.html">shop
                    <img class="nav__icono" src="./multimedia/icons/Vector.webp" alt="flecha">
                </a>
                <ul class="nav__subnav">
                    <li class="subnav__item"><a class="subnav__link" href="#">colecciones</a></li>
                    <li class="subnav__item"><a class="subnav__link" href="#">figuras</a></li>
                </ul>
            </li>
            <li class="nav__item"><a class="nav__link" href="#">contacto</a></li>
            <li class="nav__item"><a class="nav__link" href="./pages/admin/login.html">login</a></li>
        </ul>
        <img class="icono" src="./multimedia/icons/cart-icon.svg" alt="carrito">
    </div>    
</header>
    <footer class="footer">
        <div class="footer__contenedor">
            <ul class="footer__lista">
                <li class="footer__item"><a class="footer__link" href="./pages/tienda/shop.html">shop</a></li>
                <li class="footer__item"><a class="footer__link" href="./pages/admin/register.html">registrarse</a></li>
                <li class="footer__item"><a class="footer__link" href="./pages/admin/login.html">ingresar</a></li>
                <li class="footer__item"><a class="footer__link" href="#">contacto</a></li>
            </ul>
            <img class="footer__imagen" src="./multimedia/branding/isotype.svg" alt="logo footer">
        </div>
        <p class="footer__derechos">All rights reserved 2022 - Funkoshop &copy;</p>
    </footer>`)}


if(hash==""){
  const scrypt1=document.createElement("script");
  scrypt1.setAttribute("src", './js/indexHTML.js');
  document.head.append(scrypt1);
 }

const urlAct=[];

if(urlCap==('https://dainnin.github.io/dainnin/' || 'https://dainnin.github.io/dainnin/index.html')){
 
   urlAct[0]='https://dainnin.github.io/proyectowebimg/';
   csl("If ejecutado",urlAct);
   }else{
   
       urlAct[0] = [comprobarValor(urlCap,"index.html",hash)];
      
      
   }
 csl(urlAct)

   
 const lectJson=async()=>{

  try{
  
  const resp=await fetch(`${urlAct[0]}inventario.json`);
  const jsonObjList= await resp.json();
  return jsonObjList;
  }catch(pif){
  csl(pif);
  
  };
}
lectJson().then((obj) => {
  for(const Obj in obj){
    for(const SubObj of obj[Obj]){
      if(hash=="#"+SubObj["idu"]){
        const scrypt1=document.createElement("script");
        scrypt1.setAttribute("src", './js/productind.js');
        document.appendChild(scrypt1);
        document.title=SubObj["nompro"];
        csl("#"+SubObj["idu"])
      }
    }
  }
})
