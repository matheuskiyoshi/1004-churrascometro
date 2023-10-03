const calculator = function (){

    const containerCalculadora = document.createElement("div");
    containerCalculadora.classList.add("container-calculator");

    const calculator = document.createElement("div");
    calculator.classList.add("calculator");

    const displayRow = document.createElement("div");
    displayRow.classList.add("row");

    // EVENTO DE INCREMENTO
    calculator.addEventListener(events.INCREMENTAR, (event) => {
        var { targetId } = event.detail;
        const inputElement = document.getElementById(targetId);
        inputElement.value++;
        inputElement.setAttribute("value", inputElement.value);
        console.log("RECEBIDO: " + events.INCREMENTAR);
        sessionStorage.setItem(targetId, inputElement.value);
    });

    // EVENTO DE DECREMENTO
    calculator.addEventListener(events.DECREMENTAR, (event) => {
        var { targetId } = event.detail;
        const inputElement = document.getElementById(targetId);
        if(inputElement.value > 0){
            inputElement.value--;
            inputElement.setAttribute("value", inputElement.value);
            sessionStorage.setItem(targetId, inputElement.value);
        }
        console.log("RECEBIDO: " + events.DECREMENTAR);
    });

    // EVENTO DE CALCULAR E MODIFICAR OS SPANS
    
    function atualizarSpansCarnes(resultados) {
        Object.keys(carnesSpan).forEach((carneId) => {
            const spanId = carnesSpan[carneId];
            const spanElement = document.getElementById(spanId);
            spanElement.innerText = (resultados[carneId] === '...' || resultados[carneId] === 0) ? '...' : resultados[carneId].toFixed(2) + " Kg";
        });
    }
    
    function atualizarSpansBebidas(resultados) {
        Object.keys(bebidasSpan).forEach((bebidaId) => {
            const spanId = bebidasSpan[bebidaId];
            const spanElement = document.getElementById(spanId);
            spanElement.innerText = (resultados[bebidaId] === '...' || resultados[bebidaId] === 0) ? '...' : resultados[bebidaId].toFixed(2) + " Kg";
        });
    }
    
    function atualizarSpansAcompanhamentos(resultados) {
        Object.keys(acompanhamentosSpan).forEach((acompanhamentoId) => {
            const spanId = acompanhamentosSpan[acompanhamentoId];
            const spanElement = document.getElementById(spanId);
            spanElement.innerText = (resultados[acompanhamentoId] === '...' || resultados[acompanhamentoId] === 0) ? '...' : resultados[acompanhamentoId].toFixed(2) + " Kg";
        });
    }
    
    function calcularQuantidade(idsPessoas) {
        return function() {
            // Inicialize objetos para armazenar os resultados para cada categoria
            const resultadosPorCarne = {};
            const resultadosPorBebida = {};
            const resultadosPorAcompanhamento = {};
    
            idsPessoas.forEach((pessoa) => {
                const pessoaInput = document.getElementById(pessoa.id);
                const pessoaValue = parseFloat(pessoaInput.value);
                
                const tipoPessoa = pessoa.id;
                let fatorMultiplicacao = 0;

                // Percorra os IDs das carnes para verificar quais estão marcados
                Object.keys(carnesSpan).forEach((carneId) => {
                    const carneCheckbox = document.getElementById(carneId);
    
                    if (carneCheckbox.checked) {
                        if (!resultadosPorCarne[carneId]) {
                            resultadosPorCarne[carneId] = 0;
                        }
                        const fatorCarne = fatoresMultiplicacaoCarne[carneId][tipoPessoa];
                        resultadosPorCarne[carneId] += pessoaValue * fatorCarne;
                    } else {
                        // Se a caixa de seleção foi desmarcada, defina o resultado como '...'
                        resultadosPorCarne[carneId] = '...';
                    }
                });
    
                // Repita o mesmo processo para as bebidas
                Object.keys(bebidasSpan).forEach((bebidaId) => {
                    const bebidaCheckbox = document.getElementById(bebidaId);
    
                    if (bebidaCheckbox.checked) {
                        if (!resultadosPorBebida[bebidaId]) {
                            resultadosPorBebida[bebidaId] = 0;
                        }
                        resultadosPorBebida[bebidaId] += pessoaValue * fatorMultiplicacao; // Aplica o fator de multiplicação apropriado
                    } else {
                        resultadosPorBebida[bebidaId] = '...';
                    }
                });
    
                // Repita o mesmo processo para os acompanhamentos
                Object.keys(acompanhamentosSpan).forEach((acompanhamentoId) => {
                    const acompanhamentoCheckbox = document.getElementById(acompanhamentoId);
    
                    if (acompanhamentoCheckbox.checked) {
                        if (!resultadosPorAcompanhamento[acompanhamentoId]) {
                            resultadosPorAcompanhamento[acompanhamentoId] = 0;
                        }
                        resultadosPorAcompanhamento[acompanhamentoId] += pessoaValue * fatorMultiplicacao; // Aplica o fator de multiplicação apropriado
                    } else {
                        resultadosPorAcompanhamento[acompanhamentoId] = '...';
                    }
                });
            });
    
            // Atualize os spans correspondentes com base nos resultados
            atualizarSpansCarnes(resultadosPorCarne);
            atualizarSpansBebidas(resultadosPorBebida);
            atualizarSpansAcompanhamentos(resultadosPorAcompanhamento);
    
            console.log(resultadosPorCarne);
            console.log(resultadosPorBebida);
            console.log(resultadosPorAcompanhamento);
        };
    }
    
    calculator.addEventListener(events.CALCULAR, (event) => {
        calcularQuantidade(pessoas)();
        console.log("DISPARADO: " + events.CALCULAR);
    });
        

    // CARREGAMENTO DOS VALORES DE INPUTS NO SESSIONSTORE
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
