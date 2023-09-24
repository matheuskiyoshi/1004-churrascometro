const events = {
    CALCULAR: "CALCULO_SOLICITADO_EVENTO",
    CALCULO_REALIZADO: "CALCULO_REALIZADO_EVENTO",
}

const buttonCalculate = document.getElementsByClassName("input-group__button--big")[0];
const calculator = document.getElementsByClassName("calculator")[0];
const app = document.querySelector("app");

app.addEventListener(events.CALCULO_REALIZADO, (e) => {

    console.log("RECEBIDO: " + e.detail.quantidadeDePicanha + " KG");

})

buttonCalculate.addEventListener("click", () => {
    const buttonPlus = document.getElementsByClassName("input-group__button--small")[1];
    buttonPlus.dispatchEvent(new CustomEvent(events.CALCULAR, { bubbles: true}))
    console.log("DISPARADO: " + events.CALCULAR); 

})

calculator.addEventListener(events.CALCULAR, () => {

    let resultadoDoCalculo = document.getElementById("homem").value * 0.2;
    console.log("RECEBIDO: " + events.CALCULAR);
    console.log("QUANTIDADE DE PICANHA: " + resultadoDoCalculo + " KG");


    calculator.dispatchEvent(new CustomEvent(events.CALCULO_REALIZADO, { detail: {
        quantidadeDePicanha: resultadoDoCalculo
    }, 
    bubbles: true }))
});