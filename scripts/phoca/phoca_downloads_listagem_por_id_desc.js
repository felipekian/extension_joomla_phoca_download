"use strict"


const PhocaDownloadsListagemByIdDesc = {

  handle: function () {
    this.tableSelectId();
    this.seletionId();    
  },

  seletionId: function() {
    let select_options_order = document.querySelector('#list_fullordering');    
    let OPTION = "a.id DESC";
    
    if (select_options_order.value.toLowerCase() !== OPTION.toLowerCase()) {            
      setTimeout(() => {
        select_options_order.value = OPTION;
        select_options_order.form.submit();
        select_options_order.dispatchEvent(new Event('change'));
      }, 1000);      
    }
  },

  tableSelectId: function() {    
    let link_sorted = document.getElementById('sorted');    
    const targetOrder = 'a.id';
    const targetCaption = 'ID - decrescente';
    const targetSort = 'descending';

    if(link_sorted.dataset.order !== targetOrder) {
      setTimeout(() => {
        link_sorted.dataset.order = targetOrder;
        link_sorted.dataset.caption = targetCaption;
        link_sorted.dataset.sort = targetSort;
        link_sorted.click();    
      }, 1000);
    }
  }
}


window.addEventListener('load', () => {

  PhocaDownloadsListagemByIdDesc.handle();

});
