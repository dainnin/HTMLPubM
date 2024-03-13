console.time('cElement-Time')

const urlComponents=location.origin+'/HTMLPubM/test/ProgramacionWebI/componentes/';

const arrais={
clase1:['clase1'],
test:['test'],

}
let position=0;
let cont;

/**
* cElement personalizada.
* @param {('beforebegin'|'beforeend'|'afterbegin'|'afterend')} innerEl - La posición.
*@param {('0'|'1'|'2')} nodeX - Tipo de insercion en documento 0:querySelector;1:body;2:head;
*/
const cElement = (tag, attributes, content, innerEl, nodeX, Selquery) => {
  
    if(typeof innerEl==='object'){console.log('ok')}
    if (typeof tag == "boolean" && tag == false) {
        console.timeLog('cElement-Time','1ro')
        
        return document.querySelector(attributes).insertAdjacentHTML('beforebegin', content)
       
    }

    const element = document.createElement(tag);
    const docT = [document.querySelector(Selquery), document.body, document.head];
    Object.assign(element, attributes);

    if ((content && innerEl)) {
        console.log(typeof innerEl)
       
        element.innerHTML = content;
        console.timeLog('cElement-Time','2do')
        return docT[nodeX].insertAdjacentElement(innerEl, element)
    } else if (content) {
        element.innerHTML = content;
        console.timeLog('cElement-Time','3do')
        return element;
    }
};

const neoFetch={
    text: (a,b)=>{
      
        let elemento=document.createElement('div');
       
        fetch(a)
.then(response =>{
    if (!response.ok) {
      throw new Error('No se encontró el archivo');
    }
    return response.text();
})
.then(data => {
   
    
  elemento.innerHTML =data;
  
  
}
)

.catch((error) => {
  console.error( error);
});

return elemento

    },
    
    div:(a,b)=>{
        function crearDivsConDatos(datos) {
            // Supongamos que cada parte de los datos está separada por un salto de línea
            let partes = datos.split(';-;');
          
            // Crear un div para cada parte
            
           arrais[location.hash.substring(1)].length=partes.length-2
            for (let i = 0; i < partes.length; i++) {
             if(i===0){
              
              }
                if(i!=0){
                    
              let div = document.createElement('div');
              div.innerHTML = partes[i];
              div.classList.add('imagen')
              if(i!=1){
              
              Object.assign(div,{style:`
        height:0px;
        visibility:collapse;
        opacity:0;
        `})  }else{
            Object.assign(div,{style:`
            height:auto;
            visibility:visibility;
            opacity:1;
            `})
        }
              b.appendChild(div);
            }}
          }
        fetch(a)
.then(response =>{
    if (!response.ok) {
      throw new Error('No se encontró el archivo');
    }
    return response.text();
})
.then(data => {
 
  crearDivsConDatos(data)
  
  
}
)

.catch((error) => {
  console.error( error);
});

 
    }
}

document.body.appendChild(cElement('main',{},' '))
const mmm=()=>{
document.getElementsByTagName('main')[0].appendChild(cElement('nav',{id:"controlDia"},`

        
               
            <div class="carrusel">
              
              <div style='display:grid;' class="carrusel-imagenes">
          
              </div>
            
              
            </div>
            
         
    
   
   
`));}
mmm()
if(localStorage.config===undefined){
    localStorage.config='{position:0}';
  };



  const imagenes = document.getElementsByClassName('imagen');
  const puntos = document.getElementsByClassName('punto');
  function mostrarImagen(indice) {
    for (var i = 0; i < imagenes.length; i++) {
      Object.assign(imagenes[i],{style:`
        height:0;
        visibility:collapse;
        opacity:0;
        `})        
      puntos[i%3].classList.remove('punto-activo');
    }
    
    Object.assign(imagenes[indice],{style:`
        visibility:visibility;
        opacity:1;
        `}) 
    puntos[indice%3].classList.add('punto-activo');
  }

 const pag={
  mov:(a)=>{
    if(0>position+a){
      
      return position=arrais[location.hash.substring(1)].length-1;
    }else if(arrais[location.hash.substring(1)].length===position+a){
      console.log('max')
      return position=0;
    }
   return position+=a;
  },
  
 }
 //carga creacion
document.addEventListener('DOMContentLoaded', (event) => {
 
    document.body.appendChild(neoFetch.text(`./ProgramacionWebI/componentes/menu.html`))
    

    Object.assign( document.getElementsByTagName('main')[0].firstElementChild,{className:'desplazar7',})
    if(location.hash.substring(1)===''){
      if(cont!=undefined&&cont!=location.hash.substring(1)){
        arrais[cont].length=1;
        }
       document.getElementsByClassName('carrusel-imagenes')[0].appendChild(neoFetch.text(`./ProgramacionWebI/componentes/${location.hash.substring(1)}inicio.html`))
    }
    

   
    if(arrais[location.hash.substring(1)].length===1){
      if(cont===undefined){
cont=location.hash.substring(1)}else if(cont!=location.hash.substring(1)){
  arrais[cont].length=1;
  cont=location.hash.substring(1)
}
neoFetch.div(urlComponents+[...arrais[location.hash.substring(1)]][0]+'.html',document.getElementsByClassName('carrusel-imagenes')[0]);

    }else{
    for(i=0;i<arrais[location.hash.substring(1)].length;++i){
        document.getElementsByClassName('carrusel-imagenes')[0].appendChild( neoFetch.text(urlComponents+[...arrais[location.hash.substring(1)]][i]+'.html'))
        document.getElementsByClassName('carrusel-imagenes')[0].children[i].classList.add('imagen')
       
        }
     
          mostrarImagen(position);}
       

    for (var i = 0; i < puntos.length; i++) {
      
      puntos[i].addEventListener('click', function () {
        var indicePunto = Array.prototype.indexOf.call(puntos, this);
        mostrarImagen(indicePunto);
      });
    }
    
  

    console.log('Todo el contenido del documento ha sido cargado');
});


    //hash creacion
window.addEventListener("hashchange", (e) => {

    document.getElementsByTagName('main')[0].innerHTML = '';
    mmm()
    document.scrollingElement.scrollTop = 0
    if(location.hash.substring(1)===''){
      if(cont!=location.hash.substring(1)){
        arrais[cont].length=1;
        }
        document.getElementsByClassName('carrusel-imagenes')[0].appendChild(neoFetch.text(`./ProgramacionWebI/componentes/${location.hash.substring(1)}inicio.html`))
    }
    document.scrollingElement.scrollTop='0'
    location.href
    Object.assign( document.getElementsByTagName('main')[0].firstElementChild,{className:'desplazar7 styleP',})
    
 
   
        if(arrais[location.hash.substring(1)].length===1){
          if(cont===undefined){
            cont=location.hash.substring(1)}else if(cont!=location.hash.substring(1)){
              arrais[cont].length=1;
              cont=location.hash.substring(1)
            }
            console.log(arrais[location.hash.substring(1)].length, 'hash test')
            neoFetch.div(urlComponents+[...arrais[location.hash.substring(1)]][0]+'.html',document.getElementsByClassName('carrusel-imagenes')[0]);
            
                }else{
                for(i=0;i<arrais[location.hash.substring(1)].length;++i){
            document.getElementsByClassName('carrusel-imagenes')[0].appendChild( neoFetch.text(urlComponents+[...arrais[location.hash.substring(1)]][i]+'.html'))
            document.getElementsByClassName('carrusel-imagenes')[0].children[i].classList.add('imagen')
            }
            
              mostrarImagen(position);}
        for (var i = 0; i < puntos.length; i++) {
          
          puntos[i].addEventListener('click', function () {
            var indicePunto = Array.prototype.indexOf.call(puntos, this);
            mostrarImagen(indicePunto);
          });
        }
    
      
})


document.addEventListener('click',(e)=>{

    if(!document.getElementsByTagName('details')[0].contains(e.target)){
        document.getElementsByTagName('details')[0].open=false
    }
      
    })
  
    const getTag =(x)=> document.getElementsByTagName(x);
    const getClass =(x)=> document.getElementsByClassName(x);
const getId =(x)=> document.getElementById(x);

    function esconder(){
        
    if (getId('menHidden').checked===true) {
        getClass('headerP')[0].classList.add('navHidden')
      

    }else {
        getClass('headerP')[0].classList.remove('navHidden')
    }
    
} 

