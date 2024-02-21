"use strict"

function bottomFunction() {
  document.body.scrollTop = 30000;
  document.documentElement.scrollTop = 30000;
}

window.addEventListener('load', () => {
  setTimeout(() => {
    bottomFunction();
  }, 1000);
});