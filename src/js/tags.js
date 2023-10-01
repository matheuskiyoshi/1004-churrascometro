// ARQUIVO PARA A CRIAÇÃO DAS TAGS HTML, DOS ATRIBUTOS E DO ANINHAMENTO

const body = document.querySelector("body");
body.classList.add("noite");

const style = document.createElement("style");
document.head.appendChild(style);
const app = document.querySelector("app");

const container = document.createElement("div");
container.setAttribute("id", "container");

const containerCalculadora = document.createElement("div");
containerCalculadora.classList.add("container-calculator");

const h1 = document.createElement("h1");
h1.innerText = "Churrascômetro";

// TABELA DE RESULTADOS
const containerResumo = document.createElement("div");
containerResumo.classList.add("container-resumo");

const tituloResumoChurras = document.createElement("h2");
tituloResumoChurras.innerText = "Resumo do Churrasco";

// TABELA - PESSOAS
const tablePessoas = document.createElement("table");
const tbodyPessoas = document.createElement("tbody");
const trPessoas = document.createElement("tr");
const tdPessoas = document.createElement("td");
tdPessoas.innerHTML = "<b>Pessoas</b>";

const trHomem = document.createElement("tr");
const trMulher = document.createElement("tr");
const trCrianca = document.createElement("tr");
const tdHomem = document.createElement("td");
const tdMulher = document.createElement("td");
const tdCrianca = document.createElement("td");
const tdValorHomem = document.createElement("td");
const tdValorMulher = document.createElement("td");
const tdValorCrianca = document.createElement("td");
const quantidadeHomem = document.createElement("span");
const quantidadeMulher = document.createElement("span");
const quantidadeCrianca = document.createElement("span");
tdHomem.innerText = "Homem";
tdMulher.innerText = "Mulher";
tdCrianca.innerText = "Criança";
quantidadeHomem.innerText = "0";
quantidadeMulher.innerText = "0";
quantidadeCrianca.innerText = "0";
quantidadeHomem.setAttribute("id","quantidadeHomem");
quantidadeMulher.setAttribute("id","quantidadeMulher");
quantidadeCrianca.setAttribute("id","quantidadeCrianca");

// TABELA - CARNES
const tableCarnes = document.createElement("table");
const tbodyCarnes = document.createElement("tbody");
const trCarnes = document.createElement("tr");
const tdCarnes = document.createElement("td");
tdCarnes.innerHTML = "<b>Carnes</b>";

const trPicanha = document.createElement("tr");
const trAlcatra = document.createElement("tr");
const trMaminha = document.createElement("tr");
const trCupim = document.createElement("tr");
const trLinguica = document.createElement("tr");
const trFrango = document.createElement("tr");
const trCostela = document.createElement("tr");
const trCoracao = document.createElement("tr");

const tdPicanha = document.createElement("td");
const tdAlcatra = document.createElement("td");
const tdMaminha = document.createElement("td");
const tdCupim = document.createElement("td");
const tdLinguica = document.createElement("td");
const tdFrango = document.createElement("td");
const tdCostela = document.createElement("td");
const tdCoracao = document.createElement("td");

const quantidadePicanha = document.createElement("span");
const quantidadeAlcatra = document.createElement("span");
const quantidadeMaminha = document.createElement("span");
const quantidadeCupim = document.createElement("span");
const quantidadeLinguica = document.createElement("span");
const quantidadeFrango = document.createElement("span");
const quantidadeCostela = document.createElement("span");
const quantidadeCoracao = document.createElement("span");

tdPicanha.innerText = "Picanha";
tdAlcatra.innerText = "Alcatra";
tdMaminha.innerText = "Maminha";
tdCupim.innerText = "Cupim";
tdLinguica.innerText = "Linguiça";
tdFrango.innerText = "Frango (sobrecoxa e asa)";
tdCostela.innerText = "Costela";
tdCoracao.innerText = "Coração de Frango";

quantidadePicanha.innerText = "...";
quantidadeAlcatra.innerText = "...";
quantidadeMaminha.innerText = "...";
quantidadeCupim.innerText = "...";
quantidadeLinguica.innerText = "...";
quantidadeFrango.innerText = "...";
quantidadeCostela.innerText = "...";
quantidadeCoracao.innerText = "...";

quantidadePicanha.setAttribute("id", "quantidadePicanha");
quantidadeAlcatra.setAttribute("id", "quantidadeAlcatra");
quantidadeMaminha.setAttribute("id", "quantidadeMaminha");
quantidadeCupim.setAttribute("id", "quantidadeCupim");
quantidadeLinguica.setAttribute("id", "quantidadeLinguica");
quantidadeFrango.setAttribute("id", "quantidadeFrango");
quantidadeCostela.setAttribute("id", "quantidadeCostela");
quantidadeCoracao.setAttribute("id", "quantidadeCoracao");

// BOTÃO DE TEMA
const temaButton = document.createElement("button");
temaButton.setAttribute("id","tema-button");
temaButton.innerText = "Tema";

const calculator = document.createElement("div");
calculator.classList.add("calculator");

// DIV DAS CAIXINHA 
const firstRow = document.createElement("div");
firstRow.classList.add("row");
// DIV HOMEM
const firstInputGroup = document.createElement("div");
firstInputGroup.classList.add("input-group");

const labelHomem = document.createElement("label");
labelHomem.setAttribute("for","homem");
labelHomem.innerText = "Homem";

const inputHomem = document.createElement("input");
inputHomem.setAttribute("type", "number");
inputHomem.setAttribute("id", "homem");
inputHomem.setAttribute("value", "0");
inputHomem.classList.add("input-valid");
inputHomem.readOnly = true;
// DIV BOTÕES + E - HOMEM
const buttonGroupHomem = document.createElement("div");
buttonGroupHomem.classList.add("button-group");

const buttonMinusHomem = document.createElement("button");
buttonMinusHomem.classList.add("input-group__button--small");
buttonMinusHomem.innerText = "-";

const buttonPlusHomem = document.createElement("button");
buttonPlusHomem.classList.add("input-group__button--small");
buttonPlusHomem.innerText = "+";
// DIV BOTÕES + E - HOMEM

// DIV MULHER
const secondInputGroup = document.createElement("div");
secondInputGroup.classList.add("input-group");

const labelMulher = document.createElement("label");
labelMulher.setAttribute("for","mulher");
labelMulher.innerText = "Mulher";

const inputMulher = document.createElement("input");
inputMulher.setAttribute("type", "number");
inputMulher.setAttribute("id", "mulher");
inputMulher.setAttribute("value", "0");
inputMulher.classList.add("input-valid");
inputMulher.readOnly = true;
// DIV BOTÕES + E - MULHER
const buttonGroupMulher = document.createElement("div");
buttonGroupMulher.classList.add("button-group");

const buttonMinusMulher = document.createElement("button");
buttonMinusMulher.classList.add("input-group__button--small");
buttonMinusMulher.innerText = "-";

const buttonPlusMulher = document.createElement("button");
buttonPlusMulher.classList.add("input-group__button--small");
buttonPlusMulher.innerText = "+";
// DIV BOTÕES + E - MULHER

// DIV CRIANÇA
const thirdInputGroup = document.createElement("div");
thirdInputGroup.classList.add("input-group");

const labelCrianca = document.createElement("label");
labelCrianca.setAttribute("for","crianca");
labelCrianca.innerText = "Criança";

const inputCrianca = document.createElement("input");
inputCrianca.setAttribute("type", "number");
inputCrianca.setAttribute("id", "crianca");
inputCrianca.setAttribute("value", "0");
inputCrianca.classList.add("input-valid");
inputCrianca.readOnly = true;
// DIV BOTÕES + E - CRIANÇA
const buttonGroupCrianca = document.createElement("div");
buttonGroupCrianca.classList.add("button-group");

const buttonMinusCrianca = document.createElement("button");
buttonMinusCrianca.classList.add("input-group__button--small");
buttonMinusCrianca.innerText = "-";

const buttonPlusCrianca = document.createElement("button");
buttonPlusCrianca.classList.add("input-group__button--small");
buttonPlusCrianca.innerText = "+";
// DIV BOTÕES + E - CRIANÇA

//DIV CALCULATE
const calculateRow = document.createElement("div");
calculateRow.classList.add("row");

const divCalculate = document.createElement("div");
divCalculate.classList.add("input-group");

const buttonCalculate = document.createElement("button");
buttonCalculate.classList.add("input-group__button--big");
buttonCalculate.innerText = "Calcular";
// DIV CALCULATE

//ANINHAMENTO
containerCalculadora.appendChild(calculator);

calculator.appendChild(firstRow);
firstRow.appendChild(firstInputGroup);
firstRow.appendChild(secondInputGroup);
firstRow.appendChild(thirdInputGroup);

firstInputGroup.appendChild(labelHomem);
secondInputGroup.appendChild(labelMulher);
thirdInputGroup.appendChild(labelCrianca);

firstInputGroup.appendChild(inputHomem);
secondInputGroup.appendChild(inputMulher);
thirdInputGroup.appendChild(inputCrianca);

firstInputGroup.appendChild(buttonGroupHomem);
buttonGroupHomem.appendChild(buttonMinusHomem);
buttonGroupHomem.appendChild(buttonPlusHomem);

secondInputGroup.appendChild(buttonGroupMulher);
buttonGroupMulher.appendChild(buttonMinusMulher);
buttonGroupMulher.appendChild(buttonPlusMulher);

thirdInputGroup.appendChild(buttonGroupCrianca);
buttonGroupCrianca.appendChild(buttonMinusCrianca);
buttonGroupCrianca.appendChild(buttonPlusCrianca);

calculator.appendChild(calculateRow);
calculateRow.appendChild(divCalculate);
divCalculate.append(buttonCalculate);

containerResumo.appendChild(tituloResumoChurras);
containerResumo.appendChild(tablePessoas);
containerResumo.appendChild(tableCarnes);

// PRIMEIRA TABELA - PESSOAS
tablePessoas.appendChild(tbodyPessoas);
tbodyPessoas.appendChild(trPessoas);
tbodyPessoas.appendChild(trHomem);
tbodyPessoas.appendChild(trMulher);
tbodyPessoas.appendChild(trCrianca);
trPessoas.appendChild(tdPessoas);
trHomem.appendChild(tdHomem);
trMulher.appendChild(tdMulher);
trCrianca.appendChild(tdCrianca);
trHomem.appendChild(tdValorHomem);
trMulher.appendChild(tdValorMulher);
trCrianca.appendChild(tdValorCrianca);
tdValorHomem.appendChild(quantidadeHomem);
tdValorMulher.appendChild(quantidadeMulher);
tdValorCrianca.appendChild(quantidadeCrianca);

// SEGUNDA TABELA - CARNES
tableCarnes.appendChild(tbodyCarnes);

tbodyCarnes.appendChild(trCarnes);
tbodyCarnes.appendChild(trPicanha);
tbodyCarnes.appendChild(trAlcatra);
tbodyCarnes.appendChild(trMaminha);
tbodyCarnes.appendChild(trCupim);
tbodyCarnes.appendChild(trLinguica);
tbodyCarnes.appendChild(trFrango);
tbodyCarnes.appendChild(trCostela);
tbodyCarnes.appendChild(trCoracao);

trCarnes.appendChild(tdCarnes);
trPicanha.appendChild(tdPicanha);
trPicanha.appendChild(quantidadePicanha);
trAlcatra.appendChild(tdAlcatra);
trAlcatra.appendChild(quantidadeAlcatra);
trMaminha.appendChild(tdMaminha);
trMaminha.appendChild(quantidadeMaminha);
trCupim.appendChild(tdCupim);
trCupim.appendChild(quantidadeCupim);
trLinguica.appendChild(tdLinguica);
trLinguica.appendChild(quantidadeLinguica);
trFrango.appendChild(tdFrango);
trFrango.appendChild(quantidadeFrango);
trCostela.appendChild(tdCostela);
trCostela.appendChild(quantidadeCostela);
trCoracao.appendChild(tdCoracao);
trCoracao.appendChild(quantidadeCoracao);


container.appendChild(containerCalculadora);
container.appendChild(containerResumo);

app.appendChild(h1);
app.appendChild(container);
app.appendChild(temaButton);