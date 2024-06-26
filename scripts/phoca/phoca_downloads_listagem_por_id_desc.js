"use strict"


const PhocaDownloadsListagemByIdDesc = {

  handle: function() {

    let select_options_order = document.querySelector('#list_fullordering');
    let select_fake = document.querySelector('#list_fullordering_chzn > a > span');
  
    let OPTION = "a.id DESC";
  
    // select_options_order.style.display = "block";
  
    let options_categories = [...select_options_order.options];
  
    let refresh_page = false;
  
    /* changer selected */
    for (let i = 0; i < options_categories.length; i++) {
  
      /* refresh caso esteja outra option selecionada */
      if (options_categories[i].selected && options_categories[i].value != OPTION) {

        refresh_page = true;
        
      }
  
      if (options_categories[i].value == OPTION) {

        options_categories[i].selected = true;
        break;

      }

    }
  
    if (refresh_page){

      document.querySelector('#adminForm').submit();

    }

  }

}


window.addEventListener('load', () => {

  PhocaDownloadsListagemByIdDesc.handle();

});
