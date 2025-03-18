"use strict"


const PageCache = {

  open: function() {

    window.open('https://saude.rr.gov.br/administrator/index.php?option=com_cache', '_blank'); 

  }

}


const ShortCutBtnSalvarESair = {

  handle: function() {

    this.setListenner();
    this.setTitle();

  },

  setListenner: function() {

    document.addEventListener("keydown", function (event) {

      if (event.altKey && (event.key === 's' || event.key === 'S')) {

        // PageCache.open();
        
        let btn = document.querySelector('#toolbar-save > button');

        if(btn)
          btn.click();

      }

    });
  },

  setTitle: function() {

    let save_btn = document.querySelector('#toolbar-save > button');
    
    if(save_btn)
      save_btn.title = "(Alt + S)";

  }

}


const ShortCutBtnCancelar = {

  handle: function() {

    this.setListenner();
    this.setTitle();

  },

  setListenner: function() {

    document.addEventListener("keydown", function (event) {

      if (event.altKey && (event.key === 'c' || event.key === 'C')) {

        document.querySelector('#toolbar-cancel > button').click();

      }
    
    });
  },

  setTitle: function() {

    document.querySelector('#toolbar-cancel > button').title = "(Alt + C)";

  }

}


const MountedShortCutFormCadastro = {

  handle: function() {

    window.addEventListener('load', () => {

      ShortCutBtnSalvarESair.handle();
      ShortCutBtnCancelar.handle();

    });

  }

}


MountedShortCutFormCadastro.handle(); 
