"use strict"


let usuario_title = document.querySelector('#lblUsuario')
let usuario = document.querySelector('#txtUsuario')
usuario_title.style.fontSize = '.9rem';
usuario_title.style.color = 'black';
usuario.style.borderRadius = '8px';
usuario.style.height = '25px';
usuario.style.border = '2px solid black';
usuario.style.fontWeight = 'bold';
usuario.style.paddingLeft = '10px';





let senha_title = document.querySelector('#lblSenha')
let senha = document.querySelector('#pwdSenha')
senha_title.style.fontSize = '.9rem';
senha_title.style.color = 'black';
senha.style.borderRadius = '8px';
senha.style.border = '2px solid black';
senha.style.height = '25px';
senha.style.fontWeight = 'bold';
senha.style.paddingLeft = '10px';




let orgao_title = document.querySelector('#lblOrgao')
let orgao = document.querySelector('#selOrgao')
orgao_title.style.fontSize = '.9rem';
orgao_title.style.color = 'black';
orgao.style.borderRadius = '8px';
orgao.style.border = '2px solid black';
orgao.style.height = '30px';
orgao.style.width = '103%';
orgao.style.fontWeight = 'bold';
orgao.style.paddingLeft = '10px';


let div_acesso_opcoes = document.querySelector('#divOpcoes')
div_acesso_opcoes.style.marginBottom = '20px';


let div_form = document.querySelector('#divAreaRestrita')
div_form.style.height = '230px';
div_form.style.borderRadius = '8px';


let div_image = document.querySelector('#divSistema')
div_image.style.height = '230px';


let check_box_lembrar = document.querySelector('#lblLembrar')
check_box_lembrar.style.color = 'black';
check_box_lembrar.style.fontSize = '.7rem';


let botao_acessar = document.querySelector('#sbmLogin')
let botao_acessar_span = document.querySelector('#sbmLogin > span')
botao_acessar.style.paddingRight = '30px';
botao_acessar.style.paddingLeft = '30px';
botao_acessar.style.borderRadius = '5px';
botao_acessar.style.fontWeight = 'bold';
botao_acessar.style.fontSize = '.7rem';
botao_acessar.style.color = 'white';
botao_acessar_span.style.color = 'white';
botao_acessar.style.background = 'black';

document.querySelector('#selOrgao > option:nth-child(57)').selected = true;