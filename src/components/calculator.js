const calculator = function (){

    const containerCalculadora = document.createElement("div");
    containerCalculadora.classList.add("container-calculator");

    const calculator = document.createElement("div");
    calculator.classList.add("calculator");

    const displayRow = document.createElement("div");
    displayRow.classList.add("row");

    calculator.addEventListener(events.INCREMENTAR, (event) => {
        var { targetId } = event.detail;
        document.getElementById(targetId).value++;
        console.log("RECEBIDO: " + events.INCREMENTAR);
        sessionStorage.setItem(targetId, document.getElementById(targetId).value);
    });

    calculator.addEventListener(events.DECREMENTAR, (event) => {
        var { targetId } = event.detail;
        if(document.getElementById(targetId).value > 0){
            document.getElementById(targetId).value--;
            sessionStorage.setItem(targetId, document.getElementById(targetId).value);
        }
        console.log("RECEBIDO: " + events.DECREMENTAR);
    });

    calculator.addEventListener(events.CALCULAR, (event) => {

        let resultadoDoCalculo = document.getElementById("homem").value * 0.2;
        console.log("RECEBIDO: " + events.CALCULAR);
        console.log("QUANTIDADE DE PICANHA: " + resultadoDoCalculo + " KG");

        event.target.dispatchEvent(new CustomEvent(events.CALCULO_REALIZADO, { detail: {
            quantidadeDePicanha: resultadoDoCalculo
        }, 
        bubbles: true }))
    });

    function carregarValoresDoSessionStorage() {
        const elementos = ["homem", "mulher", "crianca"];
        
        for (let i = 0; i < elementos.length; i++) {
            const elementoId = elementos[i];
            const elementoValue = sessionStorage.getItem(elementoId);
            const elemento = document.getElementById(elementoId);
    
            if (elementoValue !== null && elemento) {
                elemento.value = elementoValue;
            }
        }
    }
    document.addEventListener("DOMContentLoaded", function() {
        carregarValoresDoSessionStorage();
    });

    carregarValoresDoSessionStorage();

    // PARA CRIAR NOVAS CAIXINHAS
    displayRow.appendChild(display("homem", "Homem"));
    displayRow.appendChild(display("mulher", "Mulher"));
    displayRow.appendChild(display("crianca", "Criança"));

    calculator.appendChild(displayRow);
    calculator.appendChild(calculateButton());
    
    containerCalculadora.appendChild(calculator);
    
    return containerCalculadora;
}