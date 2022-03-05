/*always at the first line!*/
'use strict'; 

/*navigation bar scroll action*/
const nav = document.querySelector('#navbar');
const navHeight = nav.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if ( scrollY > navHeight) {
        nav.classList.add('nav--dark');
    } else {
        nav.classList.remove('nav--dark');
    }
})


/* Navigation Menu Scroll Effect */
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (e)=> {
    const link = e.target.dataset.link;
    if (link == null) {
        return;
    }

    scrollIntoView(link);
}) 

/* Home Contact Button Scroll Effect */
const contactBtn = document.querySelector('.home__contact');

contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})


/* Scroll Effect Function */
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

/* Transparent Home When Scrolled Down */
const homeContainer = document.querySelector('.home__container');
const homeContainerHeight = homeContainer.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (scrollY > 300) {
        homeContainer.classList.add('element__fade');
    } else {
        homeContainer.classList.remove('element__fade');
    }
})

/*
//엘리 코드
const navbarMenu = document.querySelector('.navbar__menu'); //메뉴바를 navbarMenu라는 변수에 할당

navbarMenu.addEventListener('click', (e) => { //navbarMenu 변수에 click 이벤트 할당
    const target = event.target;              
    cont link = target.dataset.link;         //link 변수는 click 이벤트가 발생한 이벤트 타겟의 data-link 값 #home
    if (link == null) {                      //click 이벤트 타켓의 data-link 값이 비어있다면 
        return;                              //개같이 무시
    }

    console.log(event.target.dataset.link); 
    const scrollTo = document.querySelector(link); //click한 타겟의 data-link 값이 스크롤 목적지 <section id="home">
    scrollTo.scrollIntoView({behavior: "smooth"}); //click한 목적지로 이동
})

const homeContactBtn = document.querySelector('.home__contact); //homeContactBtn은 <button>다

homeContactBtn.addEventListener('click', () => {                //<button>을 클릭하면(클릭 이벤트가 발생하면)
    const scrollTo = document.querySelector('#contact');        //scrollTo는 <section id="contact">다.
    scrollTo.scrollIntoView({behavior: "smooth"});              //<section id="contact">로 스크롤링해라
})

const home = document.querySelector('.home__container');  //<div class="home__container">는 home이라는 변수다
const homeHeight = home.getBoundingClientRect().height;   //<div class="home__container">의 높이는 homeHeight이라는 변수다
document.addEventListener('scroll', () => {               //document에 스크롤 이벤트를 할당했다.
    home.style.opacity = 1 - window.scrollY / homeHeight; //document에서 스크롤이 발생하면 <div class="home__container">의 투명도를 1 - 스크롤 높이/<div class="home__container">의 높이로 해라
});
*/

/* Transparent Home When Scrolled Down */
const home = document.querySelector('.home__container');  //<div class="home__container">는 home이라는 변수다
const homeHeight = home.getBoundingClientRect().height;   //<div class="home__container">의 높이는 homeHeight이라는 변수다
document.addEventListener('scroll', () => {               //document에 스크롤 이벤트를 할당했다.
    home.style.opacity = 1 - window.scrollY / homeHeight; //document에서 스크롤이 발생하면 <div class="home__container">의 투명도를 1 - 스크롤 높이/<div class="home__container">의 높이로 해라
});

