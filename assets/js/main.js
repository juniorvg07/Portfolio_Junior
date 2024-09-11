/*==================== ANIMATION MENU ====================*/
const navbar = document.getElementById("navbar");
const menu = document.querySelector(".figure-icon");

menu.addEventListener("click",()=>{
    if(navbar.classList.contains("open")){
        navbar.classList.remove("open")
    }
    else{
        navbar.classList.add("open")
    }
});