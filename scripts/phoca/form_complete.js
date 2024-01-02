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

  // category_input.style.display = "block";

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
  filename_input_phoca.value = '';
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

  abrirSelectFileName();
}

function __modeloPropostaCotacao(title) {

  let split_title = title.replace(' - ', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let ano = split_title[tam_split_title - 2];
  let numero_documento = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano} - :: Comunicado de Cotação ${ano}`;
  let filename = `csl/cotacao_${ano}/PROPOSTADECOTACAO-${numero_documento}-${ano}.pdf`;

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

  let filename = `csl/editaisetermos_${ano}/EDITAL DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalMinuta(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/MINUTA DE CONTRATO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalPlanilhaEstimativa(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/PLANILHA ESTIMATIVA DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalTermoDeReferencia(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/TERMO DE REFERENCIA DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalNotaExplicativa(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/NOTA EXPLICATIVA DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalEsclarecimentos(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/ESCLARECIMENTOS DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalInformativo(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/INFORMATIVO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}


/* Editais e Termos Reabertura */
function __editalEditalReabertura(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/EDITAL DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalMinutaReabertura(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/MINUTA DE CONTRATO DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalPlanilhaEstimativaReabertura(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/PLANILHA ESTIMATIVA DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalTermoDeReferenciaReabertura(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/TERMO DE REFERENCIA DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalNotaExplicativaReabertura(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/NOTA EXPLICATIVA REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}


/* Editais e Termos Republicação */
function __editalEditalRepublicacao(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/EDITAL DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalMinutaRepublicacao(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/MINUTA DE CONTRATO DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalPlanilhaEstimativaRepublicacao(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/PLANILHA ESTIMATIVA DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalTermoDeReferenciaRepublicacao(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/TERMO DE REFERENCIA DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

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

function __credenciamento(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Credenciamento - :: Credenciamento ${ano}`;

  setCategoria(categoria);

  if (split_title[1].toLowerCase() === 'aviso') {
    abrirSelectFileName();
  }

  if (split_title[1].toLowerCase() === 'edital') {
    let filename = `csl/credenciamento${ano}/edital_credenciamento-${numero_documento}-${ano}.pdf`;
    setFileName(filename);
  }

  if (split_title[1].toLowerCase() === 'minuta') {
    let filename = `csl/credenciamento${ano}/minuta_credenciamento-${numero_documento}-${ano}.pdf`;
    setFileName(filename);
  }

  if (split_title[1].toLowerCase() === 'termo') {
    let filename = `csl/credenciamento${ano}/termo_referencia_credenciamento-${numero_documento}-${ano}.pdf`;
    setFileName(filename);
  }

  if (split_title[1].toLowerCase() === 'projeto') {
    let filename = `csl/credenciamento${ano}/projeto_basico_credenciamento-${numero_documento}-${ano}.pdf`;
    setFileName(filename);
  }

  if (split_title[1].toLowerCase() === 'errata') {
    let filename = `csl/credenciamento${ano}/errata_credenciamento-${numero_documento}-${ano}.pdf`;
    setFileName(filename);
  }

}
function __chamamento(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Chamamento - :: Chamamento Público ${ano}`;

  setCategoria(categoria);

  if (split_title[1].toLowerCase() === 'aviso') {
    abrirSelectFileName();
  }

  if (split_title[1].toLowerCase() === 'edital') {
    let filename = `chamamentos/CHAMAMENTO_PUBLICO_EDITAL-${numero_documento}-${ano}.pdf`;
    setFileName(filename);
  }

  if (split_title[1].toLowerCase() === 'minuta') {
    let filename = `chamamentos/CHAMAMENTO_PUBLICO_MINUTA-${numero_documento}-${ano}.pdf`;
    setFileName(filename);
  }

  if (split_title[1].toLowerCase() === 'termo') {
    let filename = `chamamentos/CHAMAMENTO_PUBLICO_TERMO_DE_REFERENCIA-${numero_documento}-${ano}.pdf`;
    setFileName(filename);
  }
}


/* Dispensas */
function __avisoDispensa(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Dispensa de Licitação - :: Dispensa Licitação ${ano}`;

  setCategoria(categoria);

  abrirSelectFileName();
}

function __projetoBasicoDispensa(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Dispensa de Licitação - :: Dispensa Licitação ${ano}`;

  let filename = `csl/dispensa${ano}/PROJETO BASICO DE DISPENSA DE LICITACAO-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __termoReferenciaDispensa(title) {

  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Dispensa de Licitação - :: Dispensa Licitação ${ano}`;

  let filename = `csl/dispensa${ano}/TERMO DE REFERENCIA DE DISPENSA DE LICITACAO-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}



function controller(title) {

  /* comunicado e proposta de cotação */
  if (title.toLowerCase().indexOf(("Modelo de Comunicado de Cotação").toLowerCase()) > 0) {
    __modeloComunicacaoCotacao(title);
  }
  else if (title.toLowerCase().indexOf(("Modelo de Proposta de Cotação").toLowerCase()) > 0) {
    __modeloPropostaCotacao(title);
  }
  /* Editais Reabertura */
  else if (title.toLowerCase().indexOf(("Aviso de Licitação - REABERTURA").toLowerCase()) > 0) {
    __editalAviso(title);
  }
  else if (title.toLowerCase().indexOf(("Edital de Licitação - REABERTURA").toLowerCase()) > 0) {
    __editalEditalReabertura(title);
  }
  else if (title.toLowerCase().indexOf(("Minuta de Contrato de Licitação - REABERTURA").toLowerCase()) > 0) {
    __editalMinutaReabertura(title);
  }
  else if (title.toLowerCase().indexOf(("Planilha Estimativa de Licitação - REABERTURA").toLowerCase()) > 0) {
    __editalPlanilhaEstimativaReabertura(title);
  }
  else if (title.toLowerCase().indexOf(("Termo de Referência de Licitação - REABERTURA").toLowerCase()) > 0) {
    __editalTermoDeReferenciaReabertura(title);
  }
  else if (title.toLowerCase().indexOf(("Nota Explicativa de Licitação - REABERTURA").toLowerCase()) > 0) {
    __editalNotaExplicativaReabertura(title);
  }
  /* Editais republicação */
  else if (title.toLowerCase().indexOf(("Aviso de Licitação - REPUBLICAÇÃO").toLowerCase()) > 0) {
    __editalAviso(title);
  }
  else if (title.toLowerCase().indexOf(("Edital de Licitação - REPUBLICAÇÃO").toLowerCase()) > 0) {
    __editalEditalRepublicacao(title);
  }
  else if (title.toLowerCase().indexOf(("Minuta de Contrato de Licitação - REPUBLICAÇÃO").toLowerCase()) > 0) {
    __editalMinutaRepublicacao(title);
  }
  else if (title.toLowerCase().indexOf(("Planilha Estimativa de Licitação - REPUBLICAÇÃO").toLowerCase()) > 0) {
    __editalPlanilhaEstimativaRepublicacao(title);
  }
  else if (title.toLowerCase().indexOf(("Termo de Referência de Licitação - REPUBLICAÇÃO").toLowerCase()) > 0) {
    __editalTermoDeReferenciaRepublicacao(title);
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
    __editalTermoDeReferencia(title);
  }
  else if (title.toLowerCase().indexOf(("Nota Explicativa de Licitação").toLowerCase()) > 0) {
    __editalNotaExplicativa(title);
  }
  else if (title.toLowerCase().indexOf(("Esclarecimentos de Licitação").toLowerCase()) > 0) {
    __editalEsclarecimentos(title);
  }
  else if (title.toLowerCase().indexOf(("Informativo de Licitação").toLowerCase()) > 0) {
    __editalInformativo(title);
  }
  /* Dispensas */
  else if (title.toLowerCase().indexOf(("AVISO DE DISPENSA DE LICITAÇÃO").toLowerCase()) > 0) {
    __avisoDispensa(title);
  }
  else if (title.toLowerCase().indexOf(("PROJETO BÁSICO DE DISPENSA DE LICITAÇÃO").toLowerCase()) > 0) {
    __projetoBasicoDispensa(title);
  }
  else if (title.toLowerCase().indexOf(("TERMO DE REFERÊNCIA DE DISPENSA DE LICITAÇÃO").toLowerCase()) > 0) {
    __termoReferenciaDispensa(title);
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
  /* Credenciamento */
  else if (
    title.toLowerCase().indexOf(("CREDENCIAMENTO PÚBLICO").toLowerCase()) > 0
  ) {
    __credenciamento(title);
  }
  /* Chamamento */
  else if (
    title.toLowerCase().indexOf(("CHAMAMENTO PÚBLICO").toLowerCase()) > 0
  ) {
    __chamamento(title);
  }
}


title_input_phoca.addEventListener('blur', function (e) {
  controller(e.target.value);
});

