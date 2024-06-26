"use strict"


const ScrollPageUploadArquivos = {
  
  handle: function () {

    document.body.scrollTop = 30000;
    document.documentElement.scrollTop = 30000;

  }

}


window.addEventListener('load', () => {

  setTimeout(() => {

    ScrollPageUploadArquivos.handle();

  }, 1000);

});