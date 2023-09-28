// ARQUIVO PARA A CRIAÇÃO DAS TAGS HTML, DOS ATRIBUTOS E DO ANINHAMENTO

const body = document.querySelector("body");
body.classList.add("noite");

const style = document.createElement("style");
document.head.appendChild(style);
const app = document.querySelector("app");

const container = document.createElement("div");
container.classList.add("container");

const h1 = document.createElement("h1");
h1.innerText = "Churrascômetro";

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
container.appendChild(h1);
container.appendChild(calculator);

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

app.appendChild(container);
app.appendChild(temaButton);