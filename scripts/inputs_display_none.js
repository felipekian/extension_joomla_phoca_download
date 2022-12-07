"use strict"

function displayNoneIputs() {

  document.querySelector('#general > div:nth-child(2)').style.display = "none";
  for (let index = 6; index < 26; index++) {
    document.querySelector(`#general > div:nth-child(${index})`).style.display = "none";
  }

}

displayNoneIputs();
