"use strict"

function setDateStartPublishInput(data, date) {
  if (date == getDateNow())
    document.querySelector('#jform_publish_up').value = data;
}

function getDateNow() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return today.toDateString(); // "Sun Jan 30 2022"
}

function startPublishInputControl() {
  setDateStartPublishInput(localStorage.getItem('joomla_start_publish'), localStorage.getItem('joomla_start_publish_date'));

  document.querySelector('#jform_publish_up').addEventListener('blur', (event) => {
    const data = event.target.value;
    localStorage.setItem('joomla_start_publish', data);
    localStorage.setItem('joomla_start_publish_date', getDateNow());
    setDateStartPublishInput(data, localStorage.getItem('joomla_start_publish_date'));
  });
}

startPublishInputControl();
