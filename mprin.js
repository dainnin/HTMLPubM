/* http://palabraygracia.com/wp-content/uploads/2021/09/20210901-EELI-La-redenci%C3%B3n-Qu%C3%A9-es-y-qu%C3%A9-significa-ART.png */

const getTag =(x)=> document.getElementsByTagName(x);

const getId =(x)=> document.getElementById(x);

const csl=console.log;

/* document.getElementById('lonav').setAttribute('src',"")
 */
getId('vidio').setAttribute('src', "https://www.youtube.com/embed/PJ8Rz8KPmFc?si=9-Ldcu87o5vlVc-h")

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
 navIns.innerHTML=navIns.innerHTML+`<img id="lonav"  src='https://img.milanuncios.com/fg/3576/40/357640980_1.jpg?VersionId=xcsIoF7w7ruuOmBMYuwwfBD1AbyzLkyE'></img>`
    navJson().then((navItems)=>{

for (const raiz in navItems){
 const underList = document.createElement('ul');
 underList.innerHTML=underList.innerHTML + `<h1>${raiz}</h1>`;
 for(const liElemt of navItems[raiz]){
    underList.innerHTML=underList.innerHTML + `<li>${liElemt}</li>`
 } 
 contMenu.appendChild(underList);  
}
navIns.appendChild(contMenu)
})

};
navPag()

      /*   <div>
            <ul><h1>asd</h1>
                <li><a href="#vidio">asdasd</a></li>
                <li><a href="https://google.com.ar" target="_blank">Google</a></li>
                <li><a href="#">asdasd</a></li>
                <li><a href="#">asdasd</a></li>
            </ul>
            <ul><h1>contacto</h1>
                <li><a href="#vidio">asdasd</a></li>
                <li><a href="https://google.com.ar" target="_blank">Google</a></li>
                <li><a href="#">asdasd</a></li>
                <li><a href="#">asdasd</a></li>
            </ul>
            <ul><h1>contacto</h1>
                <li><a href="#vidio">asdasd</a></li>
                <li><a href="https://google.com.ar" target="_blank">Google</a></li>
                <li><a href="#">asdasd</a></li>
                <li><a href="#">asdasd</a></li>
            </ul>
            <ul><h1>contacto</h1>
                <li><a href="#vidio">asdasd</a></li>
                <li><a href="https://google.com.ar" target="_blank">Google</a></li>
                <li><a href="#">asdasd</a></li>
                <li><a href="#">asdasd</a></li>
            </ul>
        </div> */
