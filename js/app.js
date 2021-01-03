const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.fa-bars');
const headline = document.querySelector('.headline');
const times = document.querySelector('.fa-times-circle');
const menu = document.querySelector('#menu');

let toggleStatus = 1;

function toggleMenu() {
    if (toggleStatus === 0) {
        // document.getElementById('menu').style.left = "-240px";
        document.getElementById('iks').style.display = "none";
        document.getElementById('bars').style.display = "block"
        menu.classList.remove('active')
        menu.classList.add('unactive')
        toggleStatus = 1;
        hamburger.classList.remove('hide')
        times.classList.add('hide')
    } else if (toggleStatus === 1) {
        // document.getElementById('menu').style.left = "0px";
        document.getElementById('bars').style.display = "none"
        document.getElementById('iks').style.display = "block"
        menu.classList.remove('unactive')
        menu.classList.add('active')
        toggleStatus = 0;
        times.classList.remove('hide')
        hamburger.classList.add('hide')
    };
};

close.onclick = function () {
    toggleMenu.style.display = none;
}

const tl = new TimelineMax();

tl.fromTo(hero,1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut});

tl.fromTo(hero,1.2, { width: "100%" }, { width: "90%", ease: Power2.easeInOut});

tl.fromTo(slider, 1, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2");

tl.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")

// tl.fromTo(hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")

tl.fromTo(headline, 0.5, {opacity: 0, x: 20}, {opacity: 1, x: 0}, "-=0.5")

