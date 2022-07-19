const menuBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')
const navLink = document.querySelector('.nav-links')
menuBtn.addEventListener('click',()=>{
    navLink.classList.remove('nav')
    navLink.classList.add('nav')
})

closeBtn.addEventListener('click',()=>{
    navLink.classList.remove('nav')
})