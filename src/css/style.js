const styleContent = `
:root {
    --color-dark-mode: rgb(166, 247, 80);

}

body {
    background-image: url(./assets/background-light.jpg); 
    font-family: "Fira Code", monospace;
    margin: 0;
    padding: 0;
    background-color: #181C23;
}

h1 {
    font-size: 54px;
    font-weight: 300;
    color: var(--color-dark-mode);
    text-shadow: 2px 2px #000;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
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
    color: var(--color-dark-mode);
    border-width: 1px;
    border-style: solid;
    box-shadow: 1px 1px #000;
    background: transparent;
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
    color: var(--color-dark-mode);
    text-shadow: 1.5px 1px #000;
    border-width: 1px;
    border-style: solid;
    box-shadow: 0px 1px #000;
    padding: 0 5px 0 5px;
    background: transparent;
}

.input-group input[type="number"] {
    width: 50px;
    text-align: center;
    height: 80px;
    border: 0px;
    font-weight: bold;
    font-size: 36px;
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
    color: var(--color-dark-mode);
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
    background-color: var(--color-dark-mode);
    box-shadow: 2px 2px #000;
    color: #181C23;
    font-size: 34px;
    font-weight: bold;
    height: 30px;
    padding: 0px;
    margin: 10px 5px 0px 5px;
    width: 36px;
}

.input-group__button--big{
    display: inline-block;
    border: none;
    text-decoration: none;
    outline: none;
    background: transparent;
    color: var(--color-dark-mode);
    text-shadow: 1.5px 1px #000;
    font-size: 34px;
    font-weight: bold;
    height: 30px;
    padding: 0px;
    margin: 10px 5px 0px 5px;
    width: 100%;
}
`

const styleTag = document.querySelector("style");
styleTag.textContent = styleContent;