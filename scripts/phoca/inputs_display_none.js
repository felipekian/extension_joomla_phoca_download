"use strict"

window.addEventListener('load', () => {
  
  function displayNoneIputs() {

    document.querySelector('#general > div:nth-child(2)').style.display = "none";
    for (let index = 6; index < 26; index++) {
      document.querySelector(`#general > div:nth-child(${index})`).style.display = "none";
    }

    /* Campos de textos */
    document.querySelector('#general > div:nth-child(31) > div.editor.wf-editor-container.mb-2').style.display = 'none';

    document.querySelector('#general > div:nth-child(34) > div.editor.wf-editor-container.mb-2').style.display = 'none';

    document.querySelector('#general > div:nth-child(37) > div.editor.wf-editor-container.mb-2').style.display = 'none';

  }

<<<<<<< HEAD
  /* Campos de textos */
  document.querySelector('#general > div:nth-child(31) > div.editor.wf-editor-container.mb-2').style.display = 'none';

  document.querySelector('#general > div:nth-child(34) > div.editor.wf-editor-container.mb-2').style.display = 'none';

  document.querySelector('#general > div:nth-child(37) > div.editor.wf-editor-container.mb-2').style.display = 'none';

}

/**
 *
 * Start 
 * 
 **/

window.addEventListener('load', () => {

  displayNoneIputs();

=======
  displayNoneIputs();

>>>>>>> e0ead41d7e1a33bcd4ed1c591dcb13b59a29d44b
});
