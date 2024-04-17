"use strict"

let title_input_phoca = document.querySelector('#jform_title');
let category_input_phoca = document.querySelector('#jform_catid_chzn > a > span');
let filename_input_phoca = document.querySelector('#jform_filename');
/* setar path upload no final para abrir em outra aba */
const URL_PHOCA_FILES_UPLOAD = 'https://saude.rr.gov.br/administrator/index.php?option=com_phocadownload&view=phocadownloadmanager&manager=file&tmpl=component&field=jform_filename&folder=';

function verificarSeTituloExperado(titleInput, expected) {
  return titleInput.toLowerCase().indexOf(expected.toLowerCase()) > 0;
}

function getNumberFileAndYear(title) {
  // deepcode ignore GlobalReplacementRegex: <please specify a reason of ignoring this>
  let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;
  let numero_documento = split_title[tam_split_title - 2];
  let ano = split_title[tam_split_title - 1];
  return [numero_documento, ano];
}

function dataAtual() {
  let data = new Date();
  let dia = String(data.getDate()).padStart(2, '0');
  let mes = String(data.getMonth() + 1).padStart(2, '0');
  let ano = data.getFullYear();
  return [dia, mes, ano];
}

function setCategoria(categoria) {
  let category_input = document.querySelector('#jform_catid');
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
  // deepcode ignore OverwriteAssignment: <please specify a reason of ignoring this>
  filename_input_phoca.value = '';
  filename_input_phoca.value = filename;
}

function abrirSelectFileName(path_to_upload = '') {
  /* 
    abre a tela de upload do arquivo
  */
  // document.querySelector('#general > div:nth-child(5) > div.controls > span > a').click();

  /* 
    abre a aba ja na janela correta de upload
  */
  window.open(`${URL_PHOCA_FILES_UPLOAD}${path_to_upload}`, '__blank');
}

function __modeloComunicacaoCotacao(title) {
  let split_title = title.replace(' - ', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let ano = split_title[tam_split_title - 2];
  let numero_documento = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano} - :: Comunicado de Cotação ${ano}`;

  let filename = `csl/cotacao_${ano}/COMUNICADODECOTACAO-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/cotacao_${ano}`);
}

function __modeloPropostaCotacao(title) {

  // deepcode ignore GlobalReplacementRegex: <please specify a reason of ignoring this>
  let split_title = title.replace(' - ', ' ').trim().split(' ');
  let tam_split_title = split_title.length;

  let ano = split_title[tam_split_title - 2];
  let numero_documento = split_title[tam_split_title - 1];

  let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano} - :: Comunicado de Cotação ${ano}`;
  let filename = `csl/cotacao_${ano}/PROPOSTADECOTACAO-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalErrataAviso(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/ERRATA DO AVISO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/editaisetermos_${ano}`);
}

function __editalAviso(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/AVISO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/editaisetermos_${ano}`);
}

function __editalEdital(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/EDITAL DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalMinuta(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/MINUTA DE CONTRATO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalPlanilhaEstimativa(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/PLANILHA ESTIMATIVA DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalTermoDeReferencia(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/TERMO DE REFERENCIA DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalNotaExplicativa(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/NOTA EXPLICATIVA DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalEsclarecimentos(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/ESCLARECIMENTOS DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalInformativo(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/INFORMATIVO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}


/* Editais e Termos Reabertura */
function __editalAvisoReabertura(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/AVISO DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;
  //let filename = `csl/editaisetermos_${ano}/reabertura-${numero_documento}-${ano}/AVISO DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/editaisetermos_${ano}`);
}

function __editalEditalReabertura(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/EDITAL DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;
  //let filename = `csl/editaisetermos_${ano}/reabertura-${numero_documento}-${ano}/EDITAL DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalMinutaReabertura(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/MINUTA DE CONTRATO DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;
  //let filename = `csl/editaisetermos_${ano}/reabertura-${numero_documento}-${ano}/MINUTA DE CONTRATO DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalPlanilhaEstimativaReabertura(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/PLANILHA ESTIMATIVA DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;
  //let filename = `csl/editaisetermos_${ano}/reabertura-${numero_documento}-${ano}/PLANILHA ESTIMATIVA DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalTermoDeReferenciaReabertura(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/TERMO DE REFERENCIA DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;
  //let filename = `csl/editaisetermos_${ano}/reabertura-${numero_documento}-${ano}/TERMO DE REFERENCIA DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalNotaExplicativaReabertura(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/NOTA EXPLICATIVA REABERTURA-PERP-${numero_documento}-${ano}.pdf`;
  //let filename = `csl/editaisetermos_${ano}/reabertura-${numero_documento}-${ano}/NOTA EXPLICATIVA REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalMapaReabertura(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/MAPA DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;
  //let filename = `csl/editaisetermos_${ano}/reabertura-${numero_documento}-${ano}/MAPA DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}


/* Editais e Termos Republicação */
function __editalAvisoRepublicacao(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/AVISO DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/editaisetermos_${ano}`);
}

function __editalEditalRepublicacao(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/EDITAL DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalMinutaRepublicacao(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/MINUTA DE CONTRATO DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalPlanilhaEstimativaRepublicacao(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/PLANILHA ESTIMATIVA DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalTermoDeReferenciaRepublicacao(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/TERMO DE REFERENCIA DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __editalAdendoRepublicacao(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

  let filename = `csl/editaisetermos_${ano}/ADENDO DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}


function __resultadoLicitacao(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
  let filename = `csl/resultadosesinteses_${ano}/RESULTADO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/resultadosesinteses_${ano}`);
}

function __resultadoLicitacaoParcial(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
  let filename = `csl/resultadosesinteses_${ano}/RESULTADO DE LICITACAO PARCIAL-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/resultadosesinteses_${ano}`);
}

function __resultadoLicitacaoRetificado(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
  let filename = `csl/resultadosesinteses_${ano}/RESULTADO DE LICITACAO RETIFICADO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/resultadosesinteses_${ano}`);
}

function __resultadoLicitacaoErrata(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
  let filename = `csl/resultadosesinteses_${ano}/ERRATA RESULTADO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/resultadosesinteses_${ano}`);
}

function __resultadoLicitacaoComplementar(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
  let filename = `csl/resultadosesinteses_${ano}/RESULTADO DE LICITACAO COMPLEMENTAR-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/resultadosesinteses_${ano}`);
}

function __resultadoLicitacaoFracassada(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
  let filename = `csl/resultadosesinteses_${ano}/RESULTADO DE LICITACAO FRACASSADA-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/resultadosesinteses_${ano}`);
}

function __sinteseLicitacao(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
  let filename = `csl/resultadosesinteses_${ano}/SINTESE DE LICITACAO REGISTRO PRECOS-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/resultadosesinteses_${ano}`);
}

function __sinteseParcialLicitacao(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
  let filename = `csl/resultadosesinteses_${ano}/SINTESE PARCIAL DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/resultadosesinteses_${ano}`);
}

function __sinteseLicitacaoComplementar(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
  let filename = `csl/resultadosesinteses_${ano}/SINTESE DE LICITACAO COMPLEMENTAR REGISTRO PRECOS-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/resultadosesinteses_${ano}`);
}

function __avisosLicitacaoAdiamento(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano}`;
  let filename = `csl/avisosecomunicados_${ano}/AVISO DE ADIAMENTO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/avisosecomunicados_${ano}`);
}

function __avisosLicitacaoRevogacao(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano}`;
  let filename = `csl/avisosecomunicados_${ano}/AVISO DE REVOGACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/avisosecomunicados_${ano}`);
}

function __avisosLicitacaoTornarSemEfeito(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano}`;
  let filename = `csl/avisosecomunicados_${ano}/TORNAR SEM EFEITO AVISO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/avisosecomunicados_${ano}`);
}

function __comunicadosLicitacao(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano}`;
  let filename = `csl/avisosecomunicados_${ano}/COMUNICADO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/avisosecomunicados_${ano}`);
}

function __avisosLicitacaoErrata(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano}`;
  let filename = `csl/avisosecomunicados_${ano}/ERRATA_AVISO DE LICITACAO_PERP_${numero_documento}_${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/avisosecomunicados_${ano}`);
}

function __comunicadosLicitacaoSuspensao(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano}`;
  let filename = `csl/avisosecomunicados_${ano}/COMUNICADO SUSPENSAO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/avisosecomunicados_${ano}`);
}

function __credenciamento(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Credenciamento - :: Credenciamento ${ano}`;

  setCategoria(categoria);

  if (split_title[1].toLowerCase() === 'aviso') {
    let filename = `csl/credenciamento${ano}/aviso_credenciamento-${numero_documento}-${ano}.pdf`;
    setFileName(filename);
    abrirSelectFileName(`csl/credenciamento${ano}`);
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

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Chamamento - :: Chamamento Público ${ano}`;

  setCategoria(categoria);

  if (split_title[1].toLowerCase() === 'aviso') {
    let filename = `chamamentos/CHAMAMENTO_PUBLICO_AVISO-${numero_documento}-${ano}.pdf`;
    setFileName(filename);
    abrirSelectFileName(`chamamentos`);
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

function __cib_resolucoes(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CIB - :: Resoluções - :: Resoluções CIB - ${ano}`;
  setCategoria(categoria);

  let filename = `cib/resolucoes_${ano}/resolucao-cib-${numero_documento}-${ano}.pdf`;
  setFileName(filename);
}

function __cib_resolucoes_adreferendum(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CIB - :: Resoluções - :: Resoluções CIB - ${ano}`;
  setCategoria(categoria);

  let filename = `cib/resolucoes_${ano}/resolucao-cib-adreferendum-${numero_documento}-${ano}.pdf`;
  setFileName(filename);
}


/* Dispensas */
function __avisoDispensa(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Dispensa de Licitação - :: Dispensa Licitação ${ano}`;

  let filename = `csl/avisosecomunicados_${ano}/AVISO DE DISPENSA DE LICITACAO-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
  abrirSelectFileName(`csl/avisosecomunicados_${ano}`);
}

function __projetoBasicoDispensa(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Dispensa de Licitação - :: Dispensa Licitação ${ano}`;

  let filename = `csl/dispensa${ano}/PROJETO BASICO DE DISPENSA DE LICITACAO-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}

function __termoReferenciaDispensa(title) {

  const [numero_documento, ano] = getNumberFileAndYear(title);

  let categoria = `:: CSL - :: Dispensa de Licitação - :: Dispensa Licitação ${ano}`;

  let filename = `csl/dispensa${ano}/TERMO DE REFERENCIA DE DISPENSA DE LICITACAO-${numero_documento}-${ano}.pdf`;

  setCategoria(categoria);
  setFileName(filename);
}



function controller(title) {

  /****************************************** 
  
  comunicado e proposta de cotação 
  
  *******************************************/
  if (verificarSeTituloExperado(title, 'modelo de comunicado de cotação')) {
    __modeloComunicacaoCotacao(title);
  }
  else if (verificarSeTituloExperado(title, 'modelo de proposta de cotação')) {
    __modeloPropostaCotacao(title);
  }

  /*******************************************
  
  Editais Reabertura 
  
  *******************************************/
  else if (verificarSeTituloExperado(title, 'aviso de licitação - reabertura')) {
    __editalAvisoReabertura(title);
  }
  else if (verificarSeTituloExperado(title, 'edital de licitação - reabertura')) {
    __editalEditalReabertura(title);
  }
  else if (verificarSeTituloExperado(title, 'minuta de contrato de licitação - reabertura')) {
    __editalMinutaReabertura(title);
  }
  else if (verificarSeTituloExperado(title, 'planilha estimativa de licitação - reabertura')) {
    __editalPlanilhaEstimativaReabertura(title);
  }
  else if (verificarSeTituloExperado(title, 'termo de referência de licitação - reabertura')) {
    __editalTermoDeReferenciaReabertura(title);
  }
  else if (verificarSeTituloExperado(title, 'nota explicativa de licitação - reabertura')) {
    __editalNotaExplicativaReabertura(title);
  }
  else if (verificarSeTituloExperado(title, 'mapa de licitação - reabertura')) {
    __editalMapaReabertura(title);
  }

  /******************************************
  
  Editais Republicação
  
  *******************************************/
  else if (verificarSeTituloExperado(title, 'aviso de licitação - republicação')) {
    __editalAvisoRepublicacao(title);
  }
  else if (verificarSeTituloExperado(title, 'edital de licitação - republicação')) {
    __editalEditalRepublicacao(title);
  }
  else if (verificarSeTituloExperado(title, 'minuta de contrato de licitação - republicação')) {
    __editalMinutaRepublicacao(title);
  }
  else if (verificarSeTituloExperado(title, 'planilha estimativa de licitação - republicação')) {
    __editalPlanilhaEstimativaRepublicacao(title);
  }
  else if (verificarSeTituloExperado(title, 'termo de referência de licitação - republicação')) {
    __editalTermoDeReferenciaRepublicacao(title);
  }
  else if (verificarSeTituloExperado(title, 'adendo de licitação - republicação')) {
    __editalAdendoRepublicacao(title);
  }

  /*******************************************
  
  Editais e Termos
  
  *******************************************/
  else if (verificarSeTituloExperado(title, 'errata do aviso de licitação')) {
    __editalErrataAviso(title);
  }
  else if (verificarSeTituloExperado(title, 'aviso de licitação')) {
    __editalAviso(title);
  }
  else if (verificarSeTituloExperado(title, 'edital de licitação')) {
    __editalEdital(title);
  }
  else if (verificarSeTituloExperado(title, 'minuta de contrato de licitação')) {
    __editalMinuta(title);
  }
  else if (verificarSeTituloExperado(title, 'planilha estimativa de licitação')) {
    __editalPlanilhaEstimativa(title);
  }
  else if (verificarSeTituloExperado(title, 'termo de referência de licitação')) {
    __editalTermoDeReferencia(title);
  }
  else if (verificarSeTituloExperado(title, 'nota explicativa de licitação')) {
    __editalNotaExplicativa(title);
  }
  else if (verificarSeTituloExperado(title, 'esclarecimentos de licitação')) {
    __editalEsclarecimentos(title);
  }
  else if (verificarSeTituloExperado(title, 'informativo de licitação')) {
    __editalInformativo(title);
  }

  /******************************************
  
  Dispensas 
  
  ******************************************/
  else if (verificarSeTituloExperado(title, 'aviso de dispensa de licitação')) {
    __avisoDispensa(title);
  }
  else if (verificarSeTituloExperado(title, 'projeto básico de dispensa de licitação')) {
    __projetoBasicoDispensa(title);
  }
  else if (verificarSeTituloExperado(title, 'termo de referência de dispensa de licitação')) {
    __termoReferenciaDispensa(title);
  }

  /******************************************
  
  Resultados
  
  ******************************************/
  else if (verificarSeTituloExperado(title, 'errata resultado de licitação')) {
    __resultadoLicitacaoErrata(title);
  }
  else if (verificarSeTituloExperado(title, 'resultado complementar de licitação')) {
    __resultadoLicitacaoComplementar(title);
  }
  else if (verificarSeTituloExperado(title, 'resultado de licitação fracassada')) {
    __resultadoLicitacaoFracassada(title);
  }
  else if (verificarSeTituloExperado(title, 'resultado de licitação parcial')) {
    __resultadoLicitacaoParcial(title);
  }
  else if (verificarSeTituloExperado(title, 'resultado de licitação retificado')) {
    __resultadoLicitacaoRetificado(title);
  }
  else if (verificarSeTituloExperado(title, 'resultado de licitação')) {
    __resultadoLicitacao(title);
  }

  /******************************************
  
  Sinteses
  
  *******************************************/
  else if (verificarSeTituloExperado(title, 'síntese de licitação registro de preços')) {
    __sinteseLicitacao(title);
  }
  else if (verificarSeTituloExperado(title, 'síntese parcial de licitação registro de preços')) {
    __sinteseParcialLicitacao(title);
  }
  else if (verificarSeTituloExperado(title, 'síntese de licitação complementar registro de preços')) {
    __sinteseLicitacaoComplementar(title);
  }

  /******************************************
  
  Comunicados
  
  ******************************************/
  else if (verificarSeTituloExperado(title, 'comunicado de licitação')) {
    __comunicadosLicitacao(title);
  }
  else if (verificarSeTituloExperado(title, 'errata - aviso de licitação')) {
    __avisosLicitacaoErrata(title);
  }
  else if (verificarSeTituloExperado(title, 'comunicado de suspensão de licitação')) {
    __comunicadosLicitacaoSuspensao(title);
  }

  /******************************************
  
  Avisos 
  
  ******************************************/
  else if (verificarSeTituloExperado(title, 'aviso de adiamento')) {
    __avisosLicitacaoAdiamento(title);
  }
  else if (verificarSeTituloExperado(title, 'aviso de revogação')) {
    __avisosLicitacaoRevogacao(title);
  }
  else if (verificarSeTituloExperado(title, 'tornar sem efeito - aviso de licitação')) {
    __avisosLicitacaoTornarSemEfeito(title);
  }

  /******************************************
  
  Credenciamento
  
  ******************************************/
  else if (verificarSeTituloExperado(title, 'credenciamento público')) {
    __credenciamento(title);
  }

  /******************************************
  
  Chamamento 
  
  ******************************************/
  else if (verificarSeTituloExperado(title, 'chamamento público')) {
    __chamamento(title);
  }

  /******************************************
  
  CIB Resolução ad'referendum
  
  ******************************************/
  else if (verificarSeTituloExperado(title, 'resolução cib ad referendum')) {
    __cib_resolucoes_adreferendum(title);
  }

  /******************************************
  
  CIB Resolução 
  
  ******************************************/
  else if (verificarSeTituloExperado(title, 'resolução cib')) {
    __cib_resolucoes(title);
  }
}



/*******************************************
*
* Start 
* 
*******************************************/

window.addEventListener('load', () => {

  title_input_phoca.addEventListener('blur', function (e) {
    controller(e.target.value);
  });

});
