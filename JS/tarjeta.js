const imagenes = document.querySelectorAll('.bc')
const pop_up = document.querySelector('.pop-up')
const popup_content = document.querySelector('.popup-content')
const menu_nav = document.querySelector('.menu-nav')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        aparecerPopUp(imagen.getAttribute('src'))
    })
})

popup_content.addEventListener('click', (e)=>{
    //if(e.target !== pop_up){
        console.log(e.target)
        /*popup_content.classList.toggle('show')
        pop_up.classList.toggle('show-popup')
        menu_nav.style.opacity ='1' */
    }
)

const aparecerPopUp = (imagen)=>{
    pop_up.src = imagen;
    popup_content.classList.toggle('show')
    pop_up.classList.toggle('show-popup')
    menu_nav.style.opacity ='0'
}