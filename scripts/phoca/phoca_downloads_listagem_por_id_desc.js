"use strict"


const PhocaDownloadsListagemByIdDesc = {

  handle: function () {

    let select_options_order = document.querySelector('#list_fullordering');

    let OPTION = "a.id DESC";

    if (select_options_order.value.toLowerCase() != OPTION.toLowerCase()) {

      document.querySelector('#adminForm').focus();
      select_options_order.value = OPTION;
      document.querySelector('#adminForm').submit();

    }
  }

}


window.addEventListener('load', () => {

  PhocaDownloadsListagemByIdDesc.handle();

});
