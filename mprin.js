/* http://palabraygracia.com/wp-content/uploads/2021/09/20210901-EELI-La-redenci%C3%B3n-Qu%C3%A9-es-y-qu%C3%A9-significa-ART.png */

const getTag =(x)=> document.getElementsByTagName(x);

const getId =(x)=> document.getElementById(x);

const csl=console.log;


/* getId('vidio').setAttribute('src', "https://www.youtube.com/embed/PJ8Rz8KPmFc?si=9-Ldcu87o5vlVc-h")
 */
function navPag(){
    const navJson=async()=>{
        try {
        const resp= await fetch('./navConst.json');
    const obj=  await resp.json();
    return obj;
         } catch (error) {
            
        }
    }
 const contMenu = document.createElement('div');
 const navIns=getTag('nav')[0];
 navIns.innerHTML=navIns.innerHTML+`<input onchange="esconder()" type="checkbox"  id="menHidden"> <img class='navimg' id="lonav"  src='https://img.milanuncios.com/fg/3576/40/357640980_1.jpg?VersionId=xcsIoF7w7ruuOmBMYuwwfBD1AbyzLkyE'></img>`
    navJson().then((navItems)=>{

for (const raiz in navItems){
 const underList = document.createElement('ul');

 underList.innerHTML=underList.innerHTML + `<h1>${raiz}</h1>`;
 for(const liElemt of navItems[raiz]){
    underList.innerHTML=underList.innerHTML + `<li><a href="#" target="_blank">${liElemt}</a></li>`
 } 
 contMenu.appendChild(underList);  
}
navIns.appendChild(contMenu)
})

};
navPag();




function mainElem(){

    const mainimgJson=async()=>{
    try {
    const resp= await fetch('./imgList.json');
const obj=  await resp.json();
return obj;
     } catch (error) {
        
    }

}
mainimgJson().then((imgItems)=>{
for (const raiz of imgItems[Object.keys(imgItems)]){
   const linkImg= document.createElement('a');
   linkImg.innerHTML=`<img src='./web/${raiz}'>`;
   document.getElementsByTagName("main")[0].appendChild(linkImg)
   
}
})

}


mainElem()
function esconder(){
    if (getId('menHidden').checked===true) {
        getTag('nav')[0].setAttribute('class','navimgHidden')
        getTag('nav')[0].getElementsByTagName('img')[0].setAttribute('class','navimgHidden')
       for(const ulEle of getTag('nav')[0].getElementsByTagName('ul')){
       
        ulEle.setAttribute('class','menHidden')
       } 

    }else {
        getTag('nav')[0].setAttribute('class','')
        getTag('nav')[0].getElementsByTagName('img')[0].setAttribute('class','navimg')
    for(const ulEle of getTag('nav')[0].getElementsByTagName('ul')){
   
     ulEle.setAttribute('class','')
    }}
    
}
      