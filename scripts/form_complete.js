"use strict"

let title_input_phoca = document.querySelector('#jform_title');
let category_input_phoca = document.querySelector('#jform_catid_chzn > a > span');
let filename_input_phoca = document.querySelector('#jform_filename');

function dataAtual() {
  let data = new Date();
  let dia = String(data.getDate()).padStart(2, '0');
  let mes = String(data.getMonth() + 1).padStart(2, '0');
  let ano = data.getFullYear();
  return [dia, mes, ano];
}

function setCategoria(categoria) {
  let category_input = document.querySelector('#jform_catid');

  category_input.style.display = "block";

  let options_category = [...category_input.options];

  for (let i = 0; i < options_category.length; i++) {
    if (options_category[i].innerText == categoria) {
      options_category[i].selected = true;
      break;
    }
  }

  category_input_phoca.innerHTML = categoria;
  category_input_phoca.classList.add("result-selected");
  category_input_phoca.classList.add("highlighted");
}

function setFileName(filename) {
  filename_input_phoca.value = filename;
}

function abrirSelectFileName() {
  document.querySelector('#general > div:nth-child(5) > div.controls > span > a').click();
}

function __modeloComunicacaoCotacao(title) {
  let split_title = title.replace(' - ', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let ano = split_title[tam_split_title - 2];
  let numero_documento = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano} - :: Comunicado de Cotação ${ano}`;

  setCategoria(categoria);

  abrirSelectFileName();;
}

function __modeloPropostaCotacao(title) {

  let [dia_atual, mes_atual, ano_atual] = dataAtual();

  let split_title = title.replace(' - ', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let ano = split_title[tam_split_title - 2];
  let numero_documento = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano} - :: Comunicado de Cotação ${ano}`;
  let filename = `csl/cotacao_2022/PROPOSTADECOTACAO_${dia_atual}.${mes_atual}.${ano_atual}_${numero_documento}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalAviso(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  setCategoria(categoria);

  abrirSelectFileName();
}

function __editalEdital(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/EDITAL DE LICITACAO-PERP-${numero_documento}-${ano}.pdf
  `;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalMinuta(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/MINUTA DE CONTRATO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf
  `;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalPlanilhaEstimativa(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/PLANILHA ESTIMATIVA DE LICITACAO-PERP-${numero_documento}-${ano}.pdf
  `;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalTermoDeReferência(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/TERMO DE REFERENCIA DE LICITACAO-PERP-${numero_documento}-${ano}.pdf
  `;

  setCategoria(categoria);
  setFileName(filename);
}

function __resultadoLicitacao(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;

  setCategoria(categoria);

  abrirSelectFileName();
}

function __avisosEComunicados(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano}`;

  setCategoria(categoria);

  abrirSelectFileName();
}

function __coronaVirus(title) {

  let categoria = `Coronavírus - Informações`;

  setCategoria(categoria);

  abrirSelectFileName();
}

function controller(title) {

  /* comunicado e proposta de cotação */
  if (title.toLowerCase().indexOf(("Modelo de Comunicado de Cotação").toLowerCase()) > 0) {
    __modeloComunicacaoCotacao(title);
  }
  else if (title.toLowerCase().indexOf(("Modelo de Proposta de Cotação").toLowerCase()) > 0) {
    __modeloPropostaCotacao(title);
  }
  /* Editais */
  else if (title.toLowerCase().indexOf(("Aviso de Licitação").toLowerCase()) > 0) {
    __editalAviso(title);
  }
  else if (title.toLowerCase().indexOf(("Edital de Licitação").toLowerCase()) > 0) {
    __editalEdital(title);
  }
  else if (title.toLowerCase().indexOf(("Minuta de Contrato de Licitação").toLowerCase()) > 0) {
    __editalMinuta(title);
  }
  else if (title.toLowerCase().indexOf(("Planilha Estimativa de Licitação").toLowerCase()) > 0) {
    __editalPlanilhaEstimativa(title);
  }
  else if (title.toLowerCase().indexOf(("Termo de Referência de Licitação").toLowerCase()) > 0) {
    __editalTermoDeReferência(title);
  }
  /* Resultados */
  else if (
    title.toLowerCase().indexOf(("Resultado de Licitação").toLowerCase()) > 0 ||
    title.toLowerCase().indexOf(("Errata Resultado de Licitação").toLowerCase()) > 0 ||
    title.toLowerCase().indexOf(("Resultado Complementar de Licitação").toLowerCase()) > 0 ||
    title.toLowerCase().indexOf(("Resultado DE Licitação Fracassada").toLowerCase()) > 0
  ) {
    __resultadoLicitacao(title);
  }
  /* sinteses */
  else if (
    title.toLowerCase().indexOf(("Síntese de Licitação Registro de Preços").toLowerCase()) > 0 ||
    title.toLowerCase().indexOf(("Síntese de Licitação Complementar Registro de Preços").toLowerCase()) > 0
  ) {
    __resultadoLicitacao(title);
  }
  /* Comunicados */
  else if (
    title.toLowerCase().indexOf(("Comunicado de Licitação").toLowerCase()) > 0 ||
    title.toLowerCase().indexOf(("Errata - Aviso de Licitação").toLowerCase()) > 0 ||
    title.toLowerCase().indexOf(("Comunicado de Suspensão de Licitação").toLowerCase()) > 0
  ) {
    __avisosEComunicados(title);
  }
  /* Avisos */
  else if (
    title.toLowerCase().indexOf(("Aviso de Adiamento").toLowerCase()) > 0 ||
    title.toLowerCase().indexOf(("Aviso de Revogação").toLowerCase()) > 0 ||
    title.toLowerCase().indexOf(("Tornar sem Efeito - Aviso de Licitação").toLowerCase()) > 0
  ) {
    __avisosEComunicados(title);
  }
  /* Corona virus */
  else if (
    title.toLowerCase().indexOf(("Boletim Epidemiologico - Coronavírus").toLowerCase()) > 0) {
    __coronaVirus(title);
  }
}


title_input_phoca.addEventListener('blur', function (e) {
  controller(e.target.value);
});

