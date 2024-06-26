"use strict"


const ShortCutBtnNew = {

  handle: function() {

    this.setListenner();
    this.setTitle();

  },

  setListenner: function() {

    document.addEventListener("keydown", function (event) {

      if (event.altKey && (event.key === 'n' || event.key === 'N')) {

        document.querySelector('#toolbar-new > button').click();

      }

    });

  },

  setTitle: function() {

    document.querySelector('#toolbar-new > button').title = "(Ctrl + Alt + N)";

  }

}

const ShortCutBtnAddMultiple = {
  
  handle: function() {

    this.setListenner();
    this.setTitle();

  },

  setListenner: function() {

    document.addEventListener("keydown", function (event) {

      if (event.altKey && (event.key === 'm' || event.key === 'M')) {

        document.querySelector('#toolbar-multiple > button').click();

      }

    });

  },

  setTitle: function() {

    document.querySelector('#toolbar-multiple > button').title = "(Ctrl + Alt + M)";

  }

}


const MountedShortCutsRegister = {

  handle: function() {

    window.addEventListener('load', () => {
      
      ShortCutBtnNew.handle();
      ShortCutBtnAddMultiple.handle();

    });

  }

}


MountedShortCutsRegister.handle();
