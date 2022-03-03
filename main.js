'use strict'; /*always at the first line!*/

const nav = document.querySelector('#navbar');
const navHeight = nav.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(scrollY);
    console.log(`navHeight: ${navHeight}`);

    if ( scrollY > navHeight) {
        nav.classList.add('nav--dark');
    } else {
        nav.classList.remove('nav--dark');
    }
})


/* scroll into section */
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (e)=> {
    const scrollTo = document.querySelector(e.target.dataset.link);
    scrollTo.scrollIntoView({behavior: "smooth"});
    console.log(e.target); //클릭된 요소
    console.log(e.target.dataset.link); //클릭된 요소가 가진 data-link의 값 
    console.log(scrollTo); //클릭된 요소가 가진 data-link의 값
    

})


/*

1. menu에 있는 아이템들을 지정했다. 하지만 모두 동일한 클래스였기 때문에 개별 지정을 하고 싶었다.
2. 개별지정을 했지만 section과의 연결을 못했다. section도 별도의 변수로 지정해줬다.
3. 작동한다. 하지만 코드가 너무 길어졌다. BAD!

*/

/*
menu.onclick = e => {
    e.target.addEventListener('click', () => {
        console.log(`Event Target Name: ${e.target.tagName}`);
        menuItems[e]

    })
}
*/

/* 
//엘리 코드
const navbarMenu = document.querySelector('.navbar__menu);

navbarMenu.addEventListener('click', (e) => {
    const target = event.target; //클릭된 놈
    cont link = target.dataset.link; //클릭된 놈이 가진 data-link 값
    if (link == null) { //클릭된 놈이 가진 data-link 값이 비어있다면
        return;  //개같이 무시
    }

    console.log(event.target.dataset.link); //클릭된 이벤트 놈이 가진 data-link 값을 보여줘
    const scrollTo = document.querySelector(link); data-link 값은 이제부터 scrollTo야
    scrollTo.scrollIntoView({behavior: "smooth"}); data-link 값으로 부드럽게 이동하라
})

*/ 





/*
//실패한 코드 - 1트
const menuItems = document.querySelectorAll('.navbar__menu__item');

console.log(menuItems[4]);

menuItems[4].addEventListener('click', () => {
    const testimonials = document.querySelector('#testimonials');

    if (true) {
        testimonials.scrollIntoView(true);
        console.log(menuItems[4]);
    }
})
*/

/*
성공 But Bad Code 

const menu = document.querySelector('.navbar__menu');
const menuItems = document.querySelectorAll('.navbar__menu__item');
const contactBtn = document.querySelector('.home__contact');

const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const work = document.querySelector('#work');
const testimonials = document.querySelector('#testimonials');
const contact = document.querySelector('#contact');

menuItems[0].addEventListener('click', () => {
    console.log('Home was clicked!');
    home.scrollIntoView({behavior: "smooth", block: "start"});
})

menuItems[1].addEventListener('click', () => {
    console.log('About was clicked!');
    about.scrollIntoView({behavior: "smooth", block: "start"});
})

menuItems[2].addEventListener('click', () => {
    console.log('Skills was clicked!');
    skills.scrollIntoView({behavior: "smooth", block: "start"});
})

menuItems[3].addEventListener('click', () => {
    console.log('work was clicked!');
    work.scrollIntoView({behavior: "smooth", block: "start"});
})

menuItems[4].addEventListener('click', () => {
    console.log('work was clicked!');
    testimonials.scrollIntoView({behavior: "smooth", block: "start"});
})

menuItems[5].addEventListener('click', () => {
    console.log('work was clicked!');
    contact.scrollIntoView({behavior: "smooth", block: "start"});
})


contactBtn.addEventListener('click', () => {
    contact.scrollIntoView({behavior: "smooth", block: "start"});
})
*/

/*
const homeBtn = menuItems[0];
const aboutBtn = menuItems[1];
const skillsBtn = menuItems[2];
const workBtn = menuItems[3];
const testimonialsBtn = menuItems[4];
const contactBtn = menuItems[5];


function goToClicked (e) {
    EventTarget.scrollIntoView(true);
}

menuItems.addEventListener('click', goToClicked);
*/














/*
//Make navigation bar background-color pink when scrolled

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})
*/

