'use strict';

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

const addEventOnElements = function(elements, eventType, callback) {
  for(let i = 0, len = elements.length ; i < len ; i += 1){
    elements[i].addEventListener(eventType, callback);
  }
}

const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');
const togglNavbar = function(){
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('nav-active');
}

addEventOnElements(navTogglers, 'click', togglNavbar);

const header = document.querySelector('[data-header]');

let lastScrollPos = 0;

const hideHeader = function() {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if(isScrollBottom){
    header.classList.add('hide');
  }else{
    header.classList.remove('hide');
  }
}

window.addEventListener('scroll', function(){
  if(this.window.scrollY >= 50){
    header.classList.add('active');
  }else {
    header.classList.remove('active');
  }
},
);