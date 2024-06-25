"use strict"

const Data = {

  getDataDeHoje: function() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toDateString(); // "Sun Jan 30 2022"
  },
  
  formatar_data_para_meia_noite: function(data) {
    if (data === '') return data;
    data = data.split(' ');
    return data[0] + ' 00:00:00';
  }

}