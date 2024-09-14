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

/*==================== SKILLS LIST ANIMATION ====================*/
const skillsContent = document.getElementsByClassName('skill techs'),
      skillHeader = document.querySelectorAll('.skill-header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skill techs skills_close'
    }
    if(itemClass === 'skill techs skills_close'){
        this.parentNode.className = 'skill techs skills_open'
    }
}

skillHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})
