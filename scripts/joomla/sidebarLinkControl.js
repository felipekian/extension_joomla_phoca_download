"use strict"


const sidebarControl = {
  addBtnClearCache: function () {

    if (!document.querySelector('#menu12')) return;

    // create elements
    let sidebar = document.querySelector('#menu12')
    let listItemMenu = document.createElement('li');
    let link_clear_cache = document.createElement('a')
    let spanIcon = document.createElement('span');
    let spanTitle = document.createElement('span');

    // list item menu
    listItemMenu.classList.add('item', 'item-level-1');

    // link redirect page clear cache
    link_clear_cache.href = 'https://saude.rr.gov.br/transparencia/administrator/index.php?option=com_cache';
    // link_clear_cache.textContent = 'Cache';
    link_clear_cache.classList.add('brand');
    link_clear_cache.style.marginLeft = '1px';

    // span icon
    spanIcon.classList.add('icon-trash', 'icon-fw');
    spanIcon.setAttribute('aria-hidden', 'true');

    // span title
    spanTitle.classList.add('sidebar-item-title');
    spanTitle.textContent = 'Limpar Cache';

    // append elements
    sidebar.appendChild(listItemMenu);
    listItemMenu.appendChild(link_clear_cache);
    link_clear_cache.appendChild(spanIcon);
    link_clear_cache.appendChild(spanTitle);

  },

  addBtnPhocaDownloadsUploads: function () {

    if (!document.querySelector('#menu12')) return;

    // create elements
    let sidebar = document.querySelector('#menu12')
    let listItemMenu = document.createElement('li');
    let link_clear_cache = document.createElement('a')
    let spanIcon = document.createElement('span');
    let spanTitle = document.createElement('span');

    // list item menu
    listItemMenu.classList.add('item', 'item-level-1');

    // link redirect page clear cache
    link_clear_cache.href = 'https://saude.rr.gov.br/transparencia/administrator/index.php?option=com_phocadownload&view=phocadownloadfile&layout=edit';
    // link_clear_cache.textContent = 'Cache';
    link_clear_cache.classList.add('brand');
    link_clear_cache.style.marginLeft = '1px';

    // span icon
    spanIcon.classList.add('icon-upload', 'icon-fw');
    spanIcon.setAttribute('aria-hidden', 'true');

    // span title
    spanTitle.classList.add('sidebar-item-title');
    spanTitle.textContent = 'Phoca Uploads';

    // append elements
    sidebar.appendChild(listItemMenu);
    listItemMenu.appendChild(link_clear_cache);
    link_clear_cache.appendChild(spanIcon);
    link_clear_cache.appendChild(spanTitle);

  },

  addBtnPhocaDownloadsList: function () {

    if (!document.querySelector('#menu12')) return;

    // create elements
    let sidebar = document.querySelector('#menu12')
    let listItemMenu = document.createElement('li');
    let link_clear_cache = document.createElement('a')
    let spanIcon = document.createElement('span');
    let spanTitle = document.createElement('span');

    // list item menu
    listItemMenu.classList.add('item', 'item-level-1');

    // link redirect page clear cache
    link_clear_cache.href = 'https://saude.rr.gov.br/transparencia/administrator/index.php?option=com_phocadownload&view=phocadownloadfiles';
    link_clear_cache.classList.add('brand');
    link_clear_cache.style.marginLeft = '1px';

    // span icon
    spanIcon.classList.add('icon-list', 'icon-fw');
    spanIcon.setAttribute('aria-hidden', 'true');

    // span title
    spanTitle.classList.add('sidebar-item-title');
    spanTitle.textContent = 'Phoca List';

    // append elements
    sidebar.appendChild(listItemMenu);
    listItemMenu.appendChild(link_clear_cache);
    link_clear_cache.appendChild(spanIcon);
    link_clear_cache.appendChild(spanTitle);

  },

}


window.addEventListener('load', () => {

  sidebarControl.addBtnPhocaDownloadsList();
  sidebarControl.addBtnPhocaDownloadsUploads();
  sidebarControl.addBtnClearCache();

});