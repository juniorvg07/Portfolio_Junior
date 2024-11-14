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

/*==================== INTERSECTION OBSERVER ====================*/
const profile = document.getElementById('profile');
const title = document.getElementById('home-title');
const front = document.getElementById('front');
const back = document.getElementById('back');

const animarImagen = (entradas, observador) => {
    
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
            console.log("visible");
        }
    });
};

const observador = new IntersectionObserver(animarImagen, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
});

observador.observe(profile);
observador.observe(title);
observador.observe(front);
observador.observe(back);