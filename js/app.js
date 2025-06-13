/*====== Menu Show ======*/
let navMenu = document.getElementById('nav-menu'),
    navToggle =  document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*======= Remove Menu Mobile =======*/
//when any of the links is cicked we remove the menu 
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*========= Change Background Header ==========*/
function scrollHeader(){
  const header = document.getElementById('header')
  if(this.scrollY >= 50){
    header.classList.add('scroll-header')
  }else{
    header.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader);

/*========= Show Scroll Up =========*/
function scrollUp(){
  const scrollup = document.getElementById('scroll-up')
  if(this.scrollY >= 200){
    scrollup.classList.add('show-scroll')
  } else {
    scrollup.classList.remove('show-scroll')
  }
}

window.addEventListener('scroll', scrollUp);


/*====== SCROLL SECTIONS ACTIVE LINK ======= */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive);

/**======= SCROLL REVEAL ANIMATION ======= */
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
});

sr.reveal('.home__title,.section__title',{delay:600});
sr.reveal('.home__footer',{delay:700});
sr.reveal('.home__img',{delay:900, origin: 'top'});

sr.reveal('.sponsor__img,.products__card,.footer__logo,.footer__content,.footer__copy',{origin: 'top', interval: 100});
sr.reveal('.specs__data,.discount__img',{origin: 'left', interval: 100});
sr.reveal('.specs__img,.discount__animate',{origin: 'right', interval: 100});
sr.reveal('.case__img',{origin: 'top'});
sr.reveal('.case__data',{origin: 'bottom'});

