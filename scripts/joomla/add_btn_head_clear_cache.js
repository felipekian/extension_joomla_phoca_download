"use strict"

let link_clear_cache = document.createElement('a')
link_clear_cache.href='https://saude.rr.gov.br/administrator/index.php?option=com_cache';
link_clear_cache.textContent = 'Cache';
link_clear_cache.classList.add('brand');
link_clear_cache.style.marginLeft = '1px';

document.querySelector('#sp-pagebuiler-menu').appendChild(link_clear_cache)