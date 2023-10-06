const styleContent = `
:root {
    --color-main-green: rgb(166, 247, 80);
}

.noite{
    background-image: url(./src/assets/background-dark.jpg); 
    background-size: cover;
}

.dia{
    background-image: url(./src/assets/background-light.jpg); 
    background-size: cover;
}

body {
    font-family: "Fira Code", monospace;
    margin-bottom: 200px;
    padding: 0;
    background-color: #181C23;
}

footer {
    padding: 10px 0;
    margin-top: 20px;
    background-color: black;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}

h1 {
    font-size: 74px;
    font-weight: 300;
    color: var(--color-main-green);
    text-shadow: 2px 2px #000;
    text-align: center;
    margin-bottom: 50px;
}

h2 {
    color: var(--color-main-green);
    text-shadow: 1.6px 1.2px #000;
    margin-bottom: 30px;
    margin-top: 15px;
}

table {
    text-align: left;
    margin-bottom: 20px;
}

form {
    text-align: center;
}

tr > td:first-child {
    width: 300px;
}

body.noite td{
    color: var(--color-main-green);
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
}

#container {
    display: flex;
    flex-wrap: wrap;
}

.container-calculator {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

body.noite .container-resumo {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 30px;
    padding: 0px 20px;
    border-radius: 10px;
    text-align: center;
    background-color: black;
}

body.dia .container-resumo {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 30px;
    padding: 0px 20px;
    border-radius: 10px;
    text-align: center;
    background-color: #DCDCDC;
}

.container-items{
    margin-top: 50px;
}

.row {
    display: flex;
    justify-content: space-between;
}

.calculator {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    border-radius: 10px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    padding: 0px;
    width: 160px;
    padding: 0 6px 0 6px;
    color: var(--color-main-green);
    border-width: 1px;
    border-style: solid;
    box-shadow: 1px 1px #000;
    background: transparent;
    transition: border-color 0.3s;
}

.input-group label {
    margin-bottom: 5px;
    -webkit-border-top-left-radius: 10px;
    -webkit-border-top-right-radius: 10px;
    -moz-border-radius-topleft: 10px;
    -moz-border-radius-topright: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    line-height: 50px;
    font-size: 18px;
    font-family: 'Foco-Regular';
    margin-bottom: 0;
    height: 50px;
    width: 100%;
    color: var(--color-main-green);
    text-shadow: 1px 0.5px #000;
    border-width: 1px;
    border-style: solid;
    box-shadow: 0px 1px #000;
    padding: 0 5px 0 5px;
    background: transparent;
}

.input-group input[type="number"] {
    width: 80px;
    text-align: center;
    height: 80px;
    border: 0px;
    font-weight: bold;
    font-size: 70px;
    text-align: center
}
.input-group input[type="number"]:focus {
    outline: none;
}

.input-invalid {
    color: rgb(233, 64, 64);
    border: 1px;
    border-color: rgb(233, 64, 64);
}
.input-valid {
    color: var(--color-main-green);
    text-shadow: 2px 1px #000;
    background: transparent;
}

.input-group .button-group {
    display: flex;
    justify-content: center;
}

.input-group button {
    padding: 5px 10px;
    font-size: 16px;
    margin: 5px;
    cursor: pointer;
    
}

.input-group__button--small{
    display: inline-block;
    border: none;
    text-decoration: none;
    outline: none;
    background-color: var(--color-main-green);
    box-shadow: 2px 2px #000;
    color: #181C23;
    font-size: 34px;
    font-weight: bold;
    height: 30px;
    padding: 0px;
    margin: 10px 5px 0px 5px;
    width: 36px;
    transition: background-color 0.3s;
}

.input-group__button--small:hover{
    background-color: rgb(126, 186, 60);
}

.input-group__button--big{
    display: inline-block;
    border: none;
    text-decoration: none;
    outline: none;
    background: transparent;
    color: var(--color-main-green);
    text-shadow: 1.5px 1px #000;
    font-size: 34px;
    font-weight: bold;
    height: 30px;
    padding: 0px;
    margin: 10px 5px 0px 5px;
    width: 100%;
    transition: color 0.3s;
}

.input-group .input-group__button--big:hover{
    color: rgb(126, 186, 60);
    border-style: rgb(126, 186, 60);
}

.button.input-group__button--big:hover + .input-group {
    border-color: rgb(126, 186, 60); /* Altera a cor da borda da div no hover do botão */
}

#tema-button{
    font-size: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: 4px;
    border-width: 1.5px;
    border-style: solid;
    border-color: var(--color-main-green);
    color: var(--color-main-green);
    text-shadow: 1.5px 1px #000;
    background: transparent;
    box-shadow: 1px 1px #000;
    cursor: pointer;
}

#consent-input {
    text-align: center;
}

#consent-input .input-group {
    display:inline-block;
}

#consent-label {
    color: var(--color-main-green);
}

.input-form {
    color: var(--color-main-green);
    width: 300px;
    text-align: center;
    height: 50px;
    border: 0px;
    background-color: #181C23;
    font-weight: bold;
    text-align: center;
    margin: 5px;
    border-width: 1px;
    border-style: solid;
    border-radius: 10px;
}

ul{
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

li{
    position: relative;
    display: inline-block;
    list-style-type: none;
    margin-right: 5px;
    margin-bottom: 5px;
}

ul li input{
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
}

body.noite ul li label{
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    color: var(--color-main-green);
    text-shadow: 0.5px 0 black;
    display: block;
    border: 1px solid var(--color-main-green);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    box-shadow: 0px 1px #000;
    transition: 0.2s all;
    cursor: pointer;
    transition: 0.3s;
}
body.noite ul li label:hover{
    color: black;
    background: var(--color-main-green);
}

body.dia ul li label{
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    color: black;
    display: block;
    border: 1px solid black;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    box-shadow: 0px 1px #000;
    transition: 0.2s all;
    cursor: pointer;
    transition: 0.3s;
}
body.dia ul li label:hover{
    color: black;
    background: var(--color-main-green);
}

ul li input:checked ~ label{
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    color: black;
    background: var(--color-main-green);
    border-color: var(--color-main-green);
    transition: 0.2s all;
}
`
const style = document.createElement("style");
      style.textContent = styleContent;
     
      document.head.appendChild(style);