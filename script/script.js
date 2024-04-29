const Nav = document.querySelector('.burger-btn')
const openNav = document.querySelector('.open-nav')
const closeNav = document.querySelector('.close-nav')


const nav = document.querySelector('.nav-mobile')
const allIinks = document.querySelectorAll('.nav-item')


const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup-close");
const POPUP_IMG = document.querySelector(".popup-img");

const faqs = document.querySelectorAll('.faq-box')

const footerYear = document.querySelector('.footer-year')
const handleNav = () => {
    openNav.classList.toggle('open-nav-active')
    closeNav.classList.toggle('close-nav-active')
    nav.classList.toggle('nav-active')
    allIinks.forEach(item => {
        item.addEventListener('click', () => nav.classList.remove('nav-active'))
        item.addEventListener('click', () => closeNav.classList.remove('close-nav-active'))
        item.addEventListener('click', () => openNav.classList.remove('open-nav-active'))
    })
}

document.addEventListener('DOMContentLoaded', function () { 
    const navShadow = document.querySelector('.nav-desktop')
    function addShadow() {
        if(window.scrollY >= 10) {
            navShadow.classList.add('shadow-bg')
        }
        else{
            navShadow.classList.remove('shadow-bg')
        }
    }
    window.addEventListener('scroll', addShadow)
})


document.addEventListener('DOMContentLoaded', function () { 
    const navvShadow = document.querySelector('.burger')
    function addShadowMobile() {
        if(window.scrollY >= 800) {
            navvShadow.classList.add('shadow-bg-mobile')
        }
        else{
            navvShadow.classList.remove('shadow-bg-mobile')
        }
    }
    window.addEventListener('scroll', addShadowMobile)
})


THUMBNAILS.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (e) => {
        POPUP.classList.remove('popup-hidden')
        POPUP_IMG.src = e.target.src
    }
    )
})
POPUP_CLOSE.addEventListener('click', () =>{
    POPUP.classList.add('popup-hidden')
}
)
const closePopup = () => {
        POPUP.classList.add("popup-hidden");
};
POPUP.addEventListener("click", (e) => {
    if (e.target === POPUP) {
        closePopup();
    }
});


faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('faq-answer-active');
    })
})

const currentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year
}
currentYear()

Nav.addEventListener('click', handleNav)