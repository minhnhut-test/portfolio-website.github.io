

const contentDark = document.querySelector(".navigation");
const buttonDarkMode = document.getElementById("dark_mode");
let isToggled = true;
buttonDarkMode.addEventListener('click', () => {
    if(isToggled){
        contentDark.classList.add("active");
    }else{
        contentDark.classList.remove("active");
    }
    isToggled = !isToggled;
});

var scrollBefore = 0;

window.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;

    if(scrollBefore > scrolled){
        console.log("ScrollUP");
        contentDark.style.display = 'block';
        scrollBefore = scrolled;
        //Desired action
    }else{
        scrollBefore = scrolled;
       
        contentDark.style.display = 'none';
        console.log("ScrollDOWN");
        //Desired action
    }

})



/// hiện ở một số brek point nhất định
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function applyBreakPoint(){
    console.log(screenWidth);
    if(screenWidth < 1000|| screenWidth > 2361){
        document.getElementById("body").style.display ="none";
    }
}
window.addEventListener('load', applyBreakPoint);
window.addEventListener('resize', applyBreakPoint);


const points = document.querySelectorAll('.point');
let index = 0;

function drawNextPoint() {
  points[index].classList.add('active');

  index++;

  if (index >= points.length) {
    clearInterval(interval);
  }
}

const interval = setInterval(drawNextPoint, 500);



/// 
const point_1 = document.getElementsByClassName('point_1')[0];
const write_1 = document.getElementsByClassName('auto_write1')[0];

point_1.addEventListener('mouseover', () => {
    write_1.style.display = "block";
    writeText()
});

point_1.addEventListener('mouseout', () => {
    write_1.style.display = "none";
});

const text = "Choose java as my first programming language to learn . Learn programming basics";

let index_auto_write = 0;
let timeout;

function writeText(){
    write_1.innerText = text.slice(0,index_auto_write);
    index_auto_write++;

    if(index_auto_write > text.length){
        clearTimeout(timeout);
        return;
    }
    timeout = setTimeout(writeText,100);
}

/// point 2
const point_2 = document.getElementsByClassName('point_3')[0];
const write_2 = document.getElementsByClassName('auto_write2')[0];

point_2.addEventListener('mouseover', () => {
    write_2.style.display = "block";
    writeText2()
});

point_2.addEventListener('mouseout', () => {
    write_2.style.display = "none";
});

const text1 = "Choose java as my first programming language to learn . Learn programming basics";

let index_auto_write2 = 0;
let timeout2;

function writeText2(){
    write_2.innerText = text.slice(0,index_auto_write2);
    index_auto_write2++;

    if(index_auto_write2 > text.length){
        clearTimeout(timeout2);
        return;
    }
    timeout2 = setTimeout(writeText2,100);
}


/// point 3
const point_3 = document.getElementsByClassName('point_5')[0];
const write_3 = document.getElementsByClassName('auto_write3')[0];

point_3.addEventListener('mouseover', () => {
    write_3.style.display = "block";
    writeText3()
});

point_3.addEventListener('mouseout', () => {
    write_3.style.display = "none";
});

const text3 = "Choose java as my first programming language to learn . Learn programming basics";

let index_auto_write3 = 0;
let timeout3;

function writeText3(){
    write_3.innerText = text.slice(0,index_auto_write3);
    index_auto_write3++;

    if(index_auto_write3 > text.length){
        clearTimeout(timeout3);
        return;
    }
    timeout3 = setTimeout(writeText3,100);
}

/// point 4
const point_4 = document.getElementsByClassName('point_7')[0];
const write_4 = document.getElementsByClassName('auto_write4')[0];

point_4.addEventListener('mouseover', () => {
    write_4.style.display = "block";
    writeText4()
});

point_4.addEventListener('mouseout', () => {
    write_4.style.display = "none";
});

const text4 = "Choose java as my first programming language to learn . Learn programming basics";

let index_auto_write4 = 0;
let timeout4;

function writeText4(){
    write_4.innerText = text.slice(0,index_auto_write4);
    index_auto_write4++;

    if(index_auto_write4 > text.length){
        clearTimeout(timeout4);
        return;
    }
    timeout4 = setTimeout(writeText4,100);
}

/// point 5
const point_5 = document.getElementsByClassName('point_9')[0];
const write_5 = document.getElementsByClassName('auto_write5')[0];

point_5.addEventListener('mouseover', () => {
    write_5.style.display = "block";
    writeText5()
});

point_5.addEventListener('mouseout', () => {
    write_5.style.display = "none";
});

const text5 = "Choose java as my first programming language to learn . Learn programming basics";

let index_auto_write5 = 0;
let timeout5;

function writeText5(){
    write_5.innerText = text.slice(0,index_auto_write5);
    index_auto_write5++;

    if(index_auto_write5 > text.length){
        clearTimeout(timeout5);
        return;
    }
    timeout5 = setTimeout(writeText5,100);
}


/// point 6
const point_6 = document.getElementsByClassName('point_11')[0];
const write_6 = document.getElementsByClassName('auto_write6')[0];

point_6.addEventListener('mouseover', () => {
    write_6.style.display = "block";
    writeText6()
});

point_6.addEventListener('mouseout', () => {
    write_6.style.display = "none";
});

const text6 = "Choose java as my first programming language to learn . Learn programming basics";

let index_auto_write6= 0;
let timeout6;

function writeText6(){
    write_6.innerText = text.slice(0,index_auto_write6);
    index_auto_write6++;

    if(index_auto_write6 > text.length){
        clearTimeout(timeout6);
        return;
    }
    timeout6 = setTimeout(writeText6,100);
}


/// point 7
const point_7 = document.getElementsByClassName('point_13')[0];
const write_7 = document.getElementsByClassName('auto_write7')[0];

point_7.addEventListener('mouseover', () => {
    write_7.style.display = "block";
    writeText7()
});

point_7.addEventListener('mouseout', () => {
    write_7.style.display = "none";
});

const text7 = "Choose java as my first programming language to learn . Learn programming basics";

let index_auto_write7= 0;
let timeout7;

function writeText7(){
    write_7.innerText = text.slice(0,index_auto_write7);
    index_auto_write7++;

    if(index_auto_write7 > text.length){
        clearTimeout(timeout7);
        return;
    }
    timeout7 = setTimeout(writeText7,100);
}

/// point 8
const point_8 = document.getElementsByClassName('point_15')[0];
const write_8 = document.getElementsByClassName('auto_write8')[0];

point_8.addEventListener('mouseover', () => {
    write_8.style.display = "block";
    writeText8()
});

point_8.addEventListener('mouseout', () => {
    write_8.style.display = "none";
});

const text8 = "Choose java as my first programming language to learn . Learn programming basics";

let index_auto_write8= 0;
let timeout8;

function writeText8(){
    write_8.innerText = text.slice(0,index_auto_write8);
    index_auto_write8++;

    if(index_auto_write8 > text.length){
        clearTimeout(timeout8);
        return;
    }
    timeout8 = setTimeout(writeText8,100);
}
/// point 9
const point_9 = document.getElementsByClassName('point_17')[0];
const write_9 = document.getElementsByClassName('auto_write9')[0];

point_9.addEventListener('mouseover', () => {
    write_9.style.display = "block";
    writeText9()
});

point_9.addEventListener('mouseout', () => {
    write_9.style.display = "none";
});

const text9 = "Choose java as my first programming language to learn . Learn programming basics";

let index_auto_write9= 0;
let timeout9;

function writeText9(){
    write_9.innerText = text.slice(0,index_auto_write9);
    index_auto_write9++;

    if(index_auto_write9 > text.length){
        clearTimeout(timeout9);
        return;
    }
    timeout9 = setTimeout(writeText9,100);
}


///hover transition 
const FrontEnd = document.getElementById("Frontend");
const BackEnd = document.getElementById("Backend");
const UI_UX = document.getElementById("UIUX");
const Line_Hover = document.getElementById("lineHover");

FrontEnd.addEventListener('click',()=>{
    console.log("Front end");
    Line_Hover.style.width ="10%";
    Line_Hover.style.left ="10%";
});
BackEnd.addEventListener('click',()=>{
    console.log("Back end");
    Line_Hover.style.width ="10%";
    Line_Hover.style.left ="45%";
});
UI_UX.addEventListener('click',()=>{
    console.log("UI_UX");
    Line_Hover.style.width ="12.5%";
    Line_Hover.style.left ="77%";
});


function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight &&
      rect.right <= windowWidth
    );
  }






//HTMl
const HTML = document.getElementById("HTML");
const HTML_content = document.getElementById("HTML_content");
let checkHTML = false;
HTML.addEventListener('click',()=>{
    if(checkHTML){
        console.log("0px");
        HTML.style.transform = "rotate(0deg)";
        HTML_content.style.height ="0px";
    
    }else{
        console.log("300px");
        HTML.style.transform = "rotate(-180deg)";
        HTML_content.style.height ="300px";
     
        
    }
    window.addEventListener('scroll',handleScroll);
    checkHTML = !checkHTML;
});

function handleScroll(){
    const currentVisibility = isElementVisible(HTML_content);
    console.log(currentVisibility);
    
    if(!currentVisibility && checkHTML == true){
        
        HTML.style.transform = "rotate(0deg)";
        HTML_content.style.height ="0px";
        checkHTML = !checkHTML;
        console.log(checkHTML); 
        
       
    }
}



const CSS = document.getElementById("CSS");
const CSS_content = document.getElementById("CSS_content");
let checkCSS = false;
CSS.addEventListener('click',()=>{
    if(checkCSS){
        console.log("0px");
        CSS.style.transform = "rotate(0deg)";
        CSS_content.style.height ="0px";
    }else{
        console.log("300px");
        CSS.style.transform = "rotate(-180deg)";
        CSS_content.style.height ="300px";
      
    }
    checkCSS = !checkCSS;
});


const JavaScript = document.getElementById("JavaScript");
const JavaScript_content = document.getElementById("JavaScript_content");
let checkJS = false;
JavaScript.addEventListener('click',()=>{
    if(checkJS){
        console.log("0px");
        JavaScript.style.transform = "rotate(0deg)";
        JavaScript_content.style.height ="0px";
    }else{
        console.log("300px");
        JavaScript.style.transform = "rotate(-180deg)";
        JavaScript_content.style.height ="300px";
       
    }
    checkJS = !checkJS;
});

const Bootstrap = document.getElementById("Bootstrap");
const Bootstrap_content = document.getElementById("Bootstrap_content");
let checkBST = false;
Bootstrap.addEventListener('click',()=>{
    if(checkBST){
        console.log("0px");
        Bootstrap.style.transform = "rotate(0deg)";
        Bootstrap_content.style.height ="0px";
    }else{
        console.log("300px");
        Bootstrap.style.transform = "rotate(-180deg)";
        Bootstrap_content.style.height ="300px";
        
      
    }
    checkBST = !checkBST;
});


const Certificate = document.getElementById("Certificate");
const Certificate_content = document.getElementById("Certificate_content");
let checkCer = false;
Certificate.addEventListener('click',()=>{
    if(checkCer){
        console.log("0px");
        Certificate.style.transform = "rotate(0deg)";
        Certificate_content.style.height ="0px";
    }else{
        console.log("300px");
        Certificate.style.transform = "rotate(-180deg)";
        Certificate_content.style.height ="300px";
    
    }
    checkCer = !checkCer;
});

const Coursera = document.getElementById("Coursera");
const Coursera_content = document.getElementById("Coursera_content");
let checkCour = false;
Coursera.addEventListener('click',()=>{
    if(checkCour){
        console.log("0px");
        Coursera.style.transform = "rotate(0deg)";
        Coursera_content.style.height ="0px";
    }else{
        console.log("300px");
        Coursera.style.transform = "rotate(-180deg)";
        Coursera_content.style.height ="300px";
       
    }
    checkCour = !checkCour;
});




const Website = document.getElementById("Website");
const Website_content = document.getElementById("Website_content");
let checkWEB = false;
Website.addEventListener('click',()=>{
    if(checkWEB){
        console.log("0px");
        Website.style.transform = "rotate(0deg)";
        Website_content.style.height ="0px";
    }else{
        console.log("300px");
        Website.style.transform = "rotate(-180deg)";
        Website_content.style.height ="300px";
      
    }
    checkWEB = !checkWEB;
});

const Stores = document.getElementById("Stores");
const Stores_content = document.getElementById("Stores_content");
let checkSTR= false;
Stores.addEventListener('click',()=>{
    if(checkSTR){
        console.log("0px");
        Stores.style.transform = "rotate(0deg)";
        Stores_content.style.height ="0px";
    }else{
        console.log("300px");
        Stores.style.transform = "rotate(-180deg)";
        Stores_content.style.height ="300px";
     
    }
    checkSTR = !checkSTR;
});
const elementsSkills = [
    document.getElementById("HTML_content"),
    document.getElementById("CSS_content"),
    document.getElementById("JavaScript_content"),
    document.getElementById("Bootstrap_content"),
    document.getElementById("Certificate_content"),
    document.getElementById("Coursera_content"),
    document.getElementById("Website_content"),
    document.getElementById("Stores_content")
  ];
  function autoCloseElement(){
    elementsSkills.forEach(element => {
        element.style.height = "0px";
    })
  }

 


const service = document.getElementById("service");
const service_content = document.getElementById("service_content");
let checkSER = true;
service.addEventListener('click',()=>{
    if(checkSER){
        service.style.transform = "rotate(0deg)";
        service_content.classList.remove("active");
    }else{
        service.style.transform = "rotate(-180deg)";
        service_content.classList.add("active");
    }
    checkSER = !checkSER;
});





const button_home = document.getElementById("button_home");
const targetButton_home = document.getElementById("home");
button_home.addEventListener('click', ()=>{ 
    window.location.href ='#' + targetButton_home.id;

});

const button_about = document.getElementById("button_about");
const targetbutton_about = document.getElementById("about");
button_about.addEventListener('click', ()=>{ 
    window.location.href ='#' + targetbutton_about.id;
    
});
const button_services = document.getElementById("button_services");
const targetbutton_services = document.getElementById("services");
button_services.addEventListener('click', ()=>{ 
    window.location.href ='#' + targetbutton_services.id;
    
});
const button_blog = document.getElementById("button_blog");
const targetbutton_blog= document.getElementById("blog");
button_blog.addEventListener('click', ()=>{ 
    window.location.href ='#' + targetbutton_blog.id;
    
});
const button_contact = document.getElementById("button_contact");
const targetbutton_contact= document.getElementById("contact");
button_contact.addEventListener('click', ()=>{ 
    window.location.href ='#' + targetbutton_contact.id;
    
});

const select_front_end = document.getElementById("select_front_end");
const select_back_end = document.getElementById("select_back_end");
const select_UI_UX = document.getElementById("select_UI_UX");
const select_other = document.getElementById("select_other");

let checkSelect = 0;
select_front_end.addEventListener('click', ()=>{
    checkSelect =1;
   select_option(checkSelect);
})
select_back_end.addEventListener('click', ()=>{
    checkSelect =2;
    select_option(checkSelect);
})
select_UI_UX.addEventListener('click', ()=>{
    checkSelect =3;
    select_option(checkSelect);
})
select_other.addEventListener('click', ()=>{
    checkSelect =4;
    select_option(checkSelect);
})

function select_option(number){
    const div_infront = select_front_end.querySelector('div');
    div_infront.style.backgroundColor ="#27395B";

    const div_inback = select_back_end.querySelector('div');
    div_inback.style.backgroundColor ="#27395B";

    const div_inUI = select_UI_UX.querySelector('div');
    div_inUI.style.backgroundColor ="#27395B";

    const div_inOther = select_other.querySelector('div');
    div_inOther.style.backgroundColor ="#27395B";

    switch(number){
        case 1:
            div_infront.style.backgroundColor ="#D0A920";
            break;
        case 2:
            div_inback.style.backgroundColor ="#D0A920";
            break;
        case 3:
            div_inUI.style.backgroundColor ="#D0A920";
            break;
        case 4: 
             div_inOther.style.backgroundColor ="#D0A920";
            break;
    }
}


const slider = document.getElementById("slider");
const main_click = document.getElementById("main");
const slideElement = Array.from(slider.querySelectorAll('.slide'));

main_click.addEventListener('click', () =>{
    console.log("hello");
    nextSlide();
})
let currentSlide = 0;
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideElement.length;
  }
function prevSlide() {
    currentSlide = (currentSlide - 1 + slideElement.length) % slideElement.length;

}



