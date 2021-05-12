const menu_nav = document.querySelector('.menu-nav');
const nav = document.querySelector('.navigation');

menu_nav.addEventListener('click', ()=> {
    nav.classList.toggle("open-menu")
})
window.addEventListener('click', e=>{
    if(nav.classList.contains('open-menu')
    && e.target != nav && e.target != menu_nav){
        nav.classList.toggle("open-menu")
    }
})