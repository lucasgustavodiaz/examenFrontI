/* Carrusel */

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:32,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        500:{
            items:2,
        },
        800:{
            items:3,
        },
        1110:{
            items:4,
        },
    }
})

/* Menu hamburgesa */

const toggle = document.querySelector('.toggle')
        console.log(toggle)
        const navUL = document.querySelector('nav.navegacion ul')
        console.log(navUL)
        toggle.addEventListener('click', () => {
            navUL.classList.toggle('open')
            toggle.classList.toggle('open')
        })