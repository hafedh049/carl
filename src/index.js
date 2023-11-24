'use strict';

/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

const addEventOnElements = function(elements, eventType, callback) {
  for(let i = 0, len = elements.length ; i < len ; i += 1){
    elements[i]
  }
}