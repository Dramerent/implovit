// slider swipper
var disMenu = 0;
function pinktext(el){
    el.children[0].style.color = "#F4ACBA";
    el.style.transition = "0.3s"
}
function bluetextButton(el){
    el.children[0].style.color = "rgba(70, 192, 193, 1)"
    el.children[0].style.transition = "0.3s"

}
function bluetext(el){
    el.style.color = "rgba(70, 192, 193, 1)"
    el.style.transition = "0.3s"

}

function hover_fill(el){
    var max = 0
    for(i = 0; i < el.children[0].children.length; i++){
        console.dir(i)
        max = Math.max(i)

    }
    console.log("максимальное:" + max)
    el.children[0].children[max].style.transition = "0.3s"
    el.children[0].children[max-1].style.transition = "0.3s"
    el.children[0].children[max].style.cssText = "width: 10000px; heigth:10000px"
    el.children[0].children[max-1].style.cssText = "width: 10000px; heigth:10000px"
}
function hover_nofill(el){
    for(i = 0; i < el.children[0].children.length; i++){
        console.dir(i)
        max = Math.max(i)

    }
    console.log("максимальное:" + max)
    el.children[0].children[max].style.cssText = "transition: 0,3s; width: auto; heigth:auto"
    el.children[0].children[max-1].style.cssText = "transition: 0,3s; width: auto; heigth:auto"
}
fm_ierh = 0
function next(){
    if(fm_ierh == 0){
    document.getElementsByClassName("full-menu__body_group1")[0].style.display = "none"
    document.getElementsByClassName("full-menu__body_group2")[0].style.display = "flex"
    document.getElementsByClassName("menu-text_anactive-gray")[0].style.display = "flex"
    document.getElementsByClassName("full-menu__implovit")[0].style.display ="none"
    fm_ierh =1
    }
    else if(fm_ierh == 1){
        document.getElementsByClassName("full-menu__body_group2")[0].style.display = "none"
        document.getElementsByClassName("full-menu__body_group3")[0].style.display = "flex"
        fm_ierh = 2
        console.dir(fm_ierh)
        document.getElementsByClassName("full-menu__liked")[0].style.display = "none"
    }

}

function back(){
    if(fm_ierh == 2){
        document.getElementsByClassName("full-menu__body_group2")[0].style.display = "flex"
        document.getElementsByClassName("full-menu__body_group3")[0].style.display = "none"
        fm_ierh = 1
        document.getElementsByClassName("full-menu__liked")[0].style.display = "flex"

    }  
    else if(fm_ierh == 1){
    document.getElementsByClassName("full-menu__body_group1")[0].style.display = "flex"
    document.getElementsByClassName("full-menu__body_group2")[0].style.display = "none"
    document.getElementsByClassName("menu-text_anactive-gray")[0].style.display = "none"
    document.getElementsByClassName("full-menu__implovit")[0].style.display ="flex"
    fm_ierh=0
}
}
function fullMenu_enable(){
    
    document.getElementsByClassName("full-menu")[0].style.transition = "0.3s"

    document.getElementsByClassName("full-menu")[0].style.right = "0px"
    document.getElementsByClassName("stop-scroll")[0].style.display = "block"

}
function fullMenu_disable(){
    
    document.getElementsByClassName("full-menu")[0].style.transition = "0.3s"
    document.getElementsByClassName("stop-scroll")[0].style.display = "none"

    document.getElementsByClassName("full-menu")[0].style.right = "-360px"

}

function tumblerMouseEnter(el){
    if(el.style.color != "black")
        el.style.color ="rgba(70, 192, 193, 1)"
    
}
function whitetextButton(el){
 el.children[0].style.color = "white"
}
function whitetext(el){
    el.style.color = "white"
}
function icebluetext(el){
    el.style.color = "rgba(160, 220, 228, 1)"
    el.style.transition = "0.3s"
}
function blacktext(el){
    el.style.color = "black"
    el.style.transition = "0.3s"
}
tumbler = 0
function Lefttumblerchangecolor(el){
    if(tumbler == 0){
        el.style.color = "black"
    }
}
function Citiesblacktext(el){
    el.children[0].style.color = "black"
    el.children[0].style.transition = "0.3s"
}
function Citiesbluetext(el){
    el.children[0].style.color = "rgba(70, 192, 193, 1)"
    el.children[0].style.transition = "0.3s"

}
function tumblerRightLeft(el){
    if(document.documentElement.scrollWidth>1280){
        if(tumbler == 0){
            el.children[1].children[1].style.marginLeft = "auto"
            el.children[1].children[1].style.transition = "0.3s"
            el.children[0].style.color = "rgba(189, 189, 189, 1)"
            el.children[2].style.color = "black"

            tumbler = 1
        }
        else if(tumbler == 1){
            el.children[1].children[1].style.marginLeft = "0"
             el.children[2].style.color = "rgba(189, 189, 189, 1)"
            el.children[0].style.color = "black"
            tumbler = 0

        }
    }
}

function tumblerRightLeft_1280(el){
    if(document.documentElement.scrollWidth<=1280){
        if(tumbler == 0){
            el.children[1].style.marginLeft = "auto"
            el.children[1].style.transition = "0.3s"
            el.children[0].style.color = "rgba(189, 189, 189, 1)"
            el.children[2].style.color = "black"
    
            tumbler = 1
        }
        else if(tumbler == 1){
            el.children[1].style.marginLeft = "0"
            el.children[2].style.color = "rgba(189, 189, 189, 1)"
            el.children[0].style.color = "black"
            tumbler = 0
    
        }
    }
}
function activeTumblerHoverLeft(el){
    console.dir(el)
    if(tumbler != 0){
        el.style.color = "rgb(70, 192, 193)"
    }
}
function activeTumblerHoverLeftActive(el){
    if(document.documentElement.scrollWidth>=1280){
        activeTumblerHoverLeft(el);
    }
}
function anactiveTumblerHoverLeft(el){
    if(el.style.color == "rgb(70, 192, 193)"){
        el.style.color ="rgba(189, 189, 189, 1)"
    }
}
function activeTumblerHoverRight(el){
    console.dir(el)
    if(tumbler == 0){
        el.style.color = "rgb(70, 192, 193)"
    }
}
function anactiveTumblerHoverRight(el){
    if(el.style.color == "rgb(70, 192, 193)"){
        el.style.color ="rgba(189, 189, 189, 1)"
    }
}


var time = 0;
var searchGroup = document.getElementsByClassName("Anactive-Lupa")[0]
var products = [document.getElementsByClassName("Header-Menu__Products")[0], document.getElementsByClassName("Header-Group__Products")[0]]
var locate = 0
function ret(){
    time = 1;
    
    enable = 0
    document.getElementsByClassName("Search-Group_anactive")[0].style.display = "flex"
    document.getElementsByClassName("Search-Group__Input")[0].placeholder = "поиск товара";
    document.getElementsByClassName("Search-Group__Lupa_Enabled")[0].style.display = "block"
    document.getElementsByClassName("Anactive-close")[0].style.display = "none"
    searchGroup.style.display = "none"
    document.getElementsByClassName("SearchLine")[0].style.width = "377px"
    document.getElementsByClassName("Search-Group__Input")[0].style.backgroundColor = "white"
    setTimeout(timer, 0.1)
    document.getElementsByClassName("Search-Group__Input")[0].value = ""
    setTimeout(timer, 0.1)
    setTimeout(() => {enable = 2}, 1)

    
}

function changeActiveSearch(el){
    
    if(time != 1){

        time = 1
        enable = 0
        for(i = 2; i <=8; i++){
            groupChild[i].style.display = "flex"
        }
        el.children[1].placeholder = "Введите первые буквы";
        el.children[1].style.backgroundColor = "rgba(0, 89, 176, 0.2) ";
        el.children[1].style.fontWeight = "lighter";
        console.dir(el) 
        searchGroup.style.display = "block"
        document.getElementsByClassName("Search-Group__Lupa_Enabled")[0].style.display = "none"
        document.getElementsByClassName("Anactive-close")[0].style.display = "block"
        document.getElementsByClassName("SearchLine")[0].style.width = "395px"
        setTimeout(timer, 1)
    }
    
    setTimeout(timer, 1)
    setTimeout(() => {enable = 2}, 1)
        
        
}

function timer(){
 time = 0
}
function ReturnToHomePage(){
    time = 1
    window.open("index.html");  
    setTimeout(timer, 1)
}
var enable = 0;
var groupChild = (document.getElementsByClassName("header__Group")[0].children)

function baseHeaderOff(){
    if(time < 1 && document.documentElement.scrollWidth >=1280 && disMenu == 0){
        for(i = 2; i <=8; i++){
            groupChild[i].style.display = "flex"
           
        }
        document.getElementsByClassName("Search-Group_anactive")[0].style.cssText = "display: none; margin-left:50px; padding: 0 30px"

         enable = 2;       
         time = 1
         document.getElementsByClassName("header__NameLogo-And-Search")[0].style.display = "none"
         document.getElementsByClassName("Header__Menu")[0].style.display = "none"
         document.getElementsByClassName("Header__Group_Disabled")[0].style.display = "flex"
         document.getElementsByClassName("Like Search-Group__like")[0].style.display = "none"
         document.getElementsByClassName("Line").style.display = "block"
         
         
            
       
        document.getElementsByClassName("Search-Group_anactive")[0].style.display = "none"
        document.getElementsByClassName("Like ")[0].style.display = "flex"
        document.getElementsByClassName("Lupa ")[0].style.display = "flex"
      
       
     } 
     else if(time < 1 && document.documentElement.scrollWidth >=1500 && disMenu == 1){
        headerGroupEnable()
        disMenu = 0 
     }
     
}  

function baseHeaderOn(){
    if(enable == 2 && disMenu == 0){
        enable = 0
        time = 1
        document.getElementsByClassName("header__NameLogo-And-Search")[0].style.display = "flex"
        document.getElementsByClassName("Header__Menu")[0].style.display = "flex"
        document.getElementsByClassName("Header__Group_Disabled")[0].style.display = "none"
        document.getElementsByClassName("Like Search-Group__like")[0].style.display = "block"
        document.getElementsByClassName("Search-Group_anactive")[0].style.display = "none"
          for(i = 2; i <=8; i++){
            groupChild[i].style.display = "none"
            
        }
        
    }
    else if(enable == 2 && disMenu == 1){
        headerGroupEnable()
        disMenu = 0
    }

    setTimeout(timer, 1)
    
}

document.onclick = function(){
    if(time != 1 && enable == 0 && disMenu == 0){
        ret()
    }
}
document.getElementsByClassName("Search-Group__Input")[0].oninput = function(){
    if(document.getElementsByClassName("Search-Group__Input")[0].selectionStart>0){
        document.getElementsByClassName("Search-Group__Input")[0].style.backgroundColor = "white"
        console.dir(document.getElementsByClassName("Search-Group__Input")[0])
    }
    else{
        document.getElementsByClassName("Search-Group__Input")[0].style.backgroundColor = "rgba(0, 89, 176, 0.2) "
    }
}
function menuover(el){ 
    time = 1
    el.style.backgroundColor = "rgba(160, 220, 228, 1)"
    el.style.border = "1px transparent"
    el.style.borderStyle = "none none solid none"
    el.style.borderColor = "rgba(70, 192, 193, 1)"
    if(el.className == "Header-Group__Products"){
        enable = 0
        console.dir(enable)
    }
    
    
}
function menuleave(el){
    time = 0;
    enable = 2
    el.style.backgroundColor = "white"
    el.style.border = "0px none transparent"
    if(document.getElementsByClassName("Header-Menu__Products")[0]){
        for(i = 0; i<=products.length; i++)
            {   products[i].style.backgroundColor = "rgba(160, 220, 228, 1)";
                products[i].style.border = "1px transparent";
                products[i].style.borderStyle = "none none solid none";
                products[i].style.borderColor = "rgba(70, 192, 193, 1)";
            }
    }
}

for(i = 0; i<=products.length; i++)
{   
    products[i].style.backgroundColor = "rgba(160, 220, 228, 1)";
    products[i].style.border = "1px transparent";
    products[i].style.borderStyle = "none none solid none";
    products[i].style.borderColor = "rgba(70, 192, 193, 1)";
}


function headerGroupDisable(){
    enable = 0
    time = 1 
    document.getElementsByClassName("Search-Group_anactive")[0].style.cssText = "display: flex; margin-left:50px; padding: 0 30px"
    
    for(i = 2; i <=8; i++){
         groupChild[i].style.display = "none"
    }
    setTimeout(() => {enable = 2}, 1)
    document.getElementsByClassName("Like header-group__like")[0].style.display = "none"
    document.getElementsByClassName("Lupa header-group__Lupa")[0].style.display = "none" 
    setInterval(timer, 1)
    disMenu = 1

}

function headerGroupEnable(){
    enable = 0
    time = 1 
    document.getElementsByClassName("Search-Group_anactive")[0].style.display = ""
    for(i = 2; i <=8; i++){
         groupChild[i].style.display = "flex"
         console.dir("w")
    }
    document.getElementsByClassName("Like header-group__like")[0].style.display = ""
    document.getElementsByClassName("Lupa header-group__Lupa")[0].style.display = ""
    setTimeout(() => {enable = 2}, 1)
}
function text(){
    time = 1
    enable = 0
    setTimeout(() => {enable = 2}, 1)
    setInterval(timer, 1)
}









