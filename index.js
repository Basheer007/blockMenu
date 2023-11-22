

const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close');
const menu_container = document.getElementById('menubar');
const animateMenu = document.querySelector(' .animate-bars');

hamburger.addEventListener('click', () => {
     menu_container.classList.add('showmenu')
     animateMenu.classList.add('.showAnimation')
     const timeLine = gsap.timeline()
     timeLine.from('.menu',{xPercent:100})
     timeLine.from('.block', { xPercent: 100, stagger: .1, })
     timeLine.from('ul',{ xPercent: 200, },'<')
     timeLine.from('.list',{ xPercent: 200, stagger: .2, },'<')
})

closeMenu.addEventListener('click', () => {
     menu_container.classList.remove('showmenu')
     animateMenu.classList.remove('.showAnimation')
})

function show() {
      
}