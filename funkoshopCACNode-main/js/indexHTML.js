
document.head.insertAdjacentHTML("afterbegin",`
<!-- link fuentes -->
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500;700&display=swap" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;700&display=swap" rel="stylesheet"> 

<!-- link css -->

<link rel="stylesheet" href="./css/banner.css">
<link rel="stylesheet" href="./css/colecciones.css">
<link rel="stylesheet" href="./css/novedades.css">
<title>FunkoShop</title>
`);
HeaFoot()
document.body.insertAdjacentHTML("afterbegin",` <main>
<section class="banner">
    <div class="banner__imagen">
        <div class="banner__descripcion">
            <h2 class="banner__titulo">nuevos ingresos</h2>
            <p class="banner__texto">Descubrí el próximo Funko Pop de tu colección</p>
            <button class="banner__boton">shop</button>
        </div>
    </div>
</section>

<section class="colecciones">
    
    <div class="coleccion coleccion--reverse">
        <img src="./multimedia/pokemon/vulpix-1.webp" alt="vulpix" class="coleccion__imagen">
        <div class="coleccion__descripcion">
            <h2 class="descripcion__titulo">pokemon indigo</h2>
            <p class="descripcion__texto">Atrapa todos los que puedas y disfruta de una colección llena de amigos.</p>
            <hr class="descripcion__linea">
            <button class="descripcion__boton">ver colección</button>
        </div>
    </div>
    <div class="coleccion">
        <img src="./multimedia/harry-potter/snape-patronus-1.webp" alt="" class="coleccion__imagen">
        <div class="coleccion__descripcion">
            <h2 class="descripcion__titulo">harry potter</h2>
            <p class="descripcion__texto">Revive los recuerdos de una saga llena de magia y encanto.</p>
            <hr class="descripcion__linea">
            <button class="descripcion__boton">ver colección</button>
        </div>
    </div>
</section>

<section class="novedades">
    <h2 class="novedades__titulo">últimos lanzamientos</h2>
    <div class="novedades__contenedor">
        <button class="novedades__flecha novedades__flecha--izquierda"><img class="flecha flecha--izquierda" src="./multimedia/icons/Vector-1-_Stroke_.webp" alt="flecha"></button>
        
        <div class="novedades__card">
            <p class="card__etiqueta">nuevo</p>
            <img src="./multimedia/star-wars/trooper-1.webp" alt="trooper" class="card__imagen">
            <div class="card__descripcion">
                <p class="card__coleccion">star wars</p>
                <h4 class="card__item">STORMTROOPER LIGHTSABER</h4>
                <p class="card__precio">$ 1799,99.-</p>
                <p class="card__pago">3 cuotas sin interés</p>
            </div>
        </div>
        <div class="novedades__card">
            <p class="card__etiqueta">nuevo</p>
            <img src="./multimedia/pokemon/pidgeotto-1.webp" alt="pidgeotto" class="card__imagen">
            <div class="card__descripcion">
                <p class="card__coleccion">pokemon</p>
                <h4 class="card__item">PIDGEOTTO</h4>
                <p class="card__precio">$ 1799,99.-</p>
                <p class="card__pago">3 cuotas sin interés</p>
            </div>
        </div>
        <div class="novedades__card">
            <p class="card__etiqueta">nuevo</p>
            <img src="./multimedia/harry-potter/luna-1.webp" alt="luna" class="card__imagen">
            <div class="card__descripcion">
                <p class="card__coleccion">harry potter</p>
                <h4 class="card__item">LUNA LOVEGOOD LION MASK</h4>
                <p class="card__precio">$ 1799,99.-</p>
                <p class="card__pago">3 cuotas sin interés</p>
            </div>
        </div>
        
        <button class="novedades__flecha novedades__flecha--derecha"><img class="flecha flecha--derecha" src="./multimedia/icons/Vector-1-_Stroke_.webp" alt="flecha"></button>
    </div>
</section>
</main>`);




   /*  lectJson().then( (obj)=> {

        
      

for (i=0; i<OKeys(obj).length;) {

  

   let  frcz=OKeys(obj)[randomx(OKeys(obj).length)];
   let proRmd=randomx(OKeys(obj[frcz]).length);
 
  if(proRmd!=0 && dByID(obj[frcz][proRmd]["idu"])==null && dByID(frcz+"lanzamientos")==null ){

    const contx1 = document.createElement('div');
    contx1.setAttribute("id",obj[frcz][proRmd]["idu"])
   contx1.innerHTML=
   `<div id="${frcz+"lanzamientos"}">
       <div>
         <h2>${obj[frcz][0]["frc"][0]}</h2>
         <p>${obj[frcz][0]["descrip"]}</p>
         </div>
         <hr>
         <a href=${obj[frcz][proRmd]["linka"][1]}>${obj[frcz][proRmd]["linka"][0]}</a>
         </div>
         <img src=${obj[frcz][proRmd]["imgz"]}>`;
   
   prsv.appendChild(contx1);
   
 i++;



};

   }

 

   csl(ArrObj, "el csl obj??")
 for (i=0,idProx=0,c=0; i<6;) {
  csl(c," Esto es C",i," Y que pasa con I?")  
let frcx=OKeys(obj)[randomx(OKeys(obj).length)];
let proRmd=OKeys(obj[frcx])[randomx(OKeys(obj[frcx]).length)];




if(proRmd!=0 && proRmd!=obj[frcx][proRmd].length && dByID(obj[frcx][proRmd]["idu"])==null && dByID("prs"+idProx)==null ){
       
    
const cont1az = document.createElement('article');



cont1az.setAttribute("id",`${obj[frcx][proRmd]["idu"]}`)
cont1az.innerHTML=`<a href=${urlAct+"#"+obj[frcx][proRmd]["idu"]}>
<img src=${obj[frcx][proRmd]["imgz"]}>
<h4>${obj[frcx][0]["frc"][0]}</h4>
<h3>${obj[frcx][proRmd]["nompro"]}</h3>
<div id="${frcx+idProx}">${obj[frcx][proRmd]["precio"]}</div>
<div>${obj[frcx][proRmd]["cuotas"]}</div>
</a>`;

prsh.appendChild(cont1az);

++idProx;
++i;
if(idProx==2){
  idProx=0;
  ++c;
}

}
}
}
) */
 



