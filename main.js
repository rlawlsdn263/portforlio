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

/* Scroll Up Button */
const scrollUpBtn = document.querySelector('.scrollUpBtn');
const homeHeightHalf = homeHeight / 2;

document.addEventListener('scroll', () => {
    if(scrollY > homeHeightHalf) {
        scrollUpBtn.classList.add('scrollUpBtn__on');
    } else {
        scrollUpBtn.classList.remove('scrollUpBtn__on');
    }
})

scrollUpBtn.addEventListener('click', () => {
    scrollIntoView('#home');
})

/*
//엘리 코드

//Show "arrow up" button when scrolling down 
const arrowUp = document.querySelector('.arrow-up'); //<button class="arrow-up">은 arrowUp이다

document.addEventListener('scroll', () => {          //문서에 scroll 이벤트를 부여한다
    if(window.scrollY > homeHeight / 2) {            //scrollY가 homeHeight의 절반값보다 크다면
        arrowUp.classList.add('visible');            //arrowUp에 class="visible"을 추가한다
    } else {                                         //반대로 scrollY가 homeHeight의 절반값보다 작다면
        arrowUp.classList.remove('visible);          //arrowUp에 class="visible"을 삭제한다
    }
})

arrowUp.addEventListener('click', () => {            //arrowUp에 click 이벤트를 부여한다
    scrollIntoView('#home');                         //arrowUp을 클릭할 경우 scrollIntoView() 함수를 실행시킨다
})                                                   //함수의 대상은 document.querySelector('#home')이다

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}
*/

//My Works Catergory Button
const workCategoriesBtn = document.querySelector('.work__categories'); 
const workProjects = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

console.log(workCategoriesBtn);
console.log(workProjects);
console.log(projects);

workCategoriesBtn.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter;
    console.log(filter);

    projects.forEach(project => {
        if (filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    })
});

/*
//Ellie code
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelector('.project'); //8개의 프로젝트 요소가 담긴 배열을 할당한다

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.targer.dataset.filter;
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter; 없으면 false값이 나오기 떄문에
    if (filter == null) {
        retrun;
    }

    projects.forEach((project) => {
        console.log(project.dataset.type);
        if(filter==='*' || filter===project.dataset.type) {
            project.classList.remove('invisible);
        } else {
            project.classList.add('invisible);
        }

    })

    //forEach는 무엇과 닮았는가?
    console.log(`-----------------------`);
    for(project of projects) {
        console.log(project);
    }

    console.log(`-----------------------`);
    let project;
    for (let i = 0; i < projects.length; i++) {
        project = projects[i];
        console.log(project);
    }
    console.log(filter);
})



*/







