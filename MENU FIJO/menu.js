const nav = document.querySelector('.nav');

window.addEventListener('scroll', function(){
    nav.classList.toggle("active", windows.scrollY >0)
})