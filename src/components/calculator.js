const calculator = function (){

    const containerCalculadora = document.createElement("div");
    containerCalculadora.classList.add("container-calculator");

    const calculator = document.createElement("div");
    calculator.classList.add("calculator");

    const displayRow = document.createElement("div");
    displayRow.classList.add("row");

    // EVENTO DE INCREMENTO
    containerCalculadora.addEventListener(events.INCREMENTAR, (event) => {
        var { targetId } = event.detail;
        const inputElement = document.getElementById(targetId);
        inputElement.value++;
        inputElement.setAttribute("value", inputElement.value);
        
        const spanId = targetId + 'Quantidade';
        const spanElement = document.getElementById(spanId);
        
        spanElement.innerText = inputElement.value;
        console.log("RECEBIDO: " + events.INCREMENTAR);
        sessionStorage.setItem(spanId, inputElement.value);
        sessionStorage.setItem(targetId, inputElement.value);
    });

    // EVENTO DE DECREMENTO
    containerCalculadora.addEventListener(events.DECREMENTAR, (event) => {
        var { targetId } = event.detail;
        const inputElement = document.getElementById(targetId);
        if (inputElement.value > 0) {
            inputElement.value--;
            inputElement.setAttribute("value", inputElement.value);

            const spanId = targetId + 'Quantidade';
            const spanElement = document.getElementById(spanId);

            spanElement.innerText = inputElement.value;
            sessionStorage.setItem(spanId, inputElement.value);
            sessionStorage.setItem(targetId, inputElement.value);
        }
        console.log("RECEBIDO: " + events.DECREMENTAR);
    });

    // EVENTO DE CALCULAR E MODIFICAR OS SPANS
    
    function atualizarSpansCarnes(resultados) {
        const checkboxesMarcadas = Object.keys(carnesSpan).filter((carneId) => {
            const carneCheckbox = document.getElementById(carneId);
            return carneCheckbox.checked;
        });
    
        Object.keys(carnesSpan).forEach((carneId) => {
            const spanId = carnesSpan[carneId];
            const spanElement = document.getElementById(spanId);
    
            if (resultados[carneId] === '...' || resultados[carneId] === 0) {
                spanElement.innerText = '...';
            } else {
                let divisor = 1;
                if (checkboxesMarcadas.length === 2) {
                    divisor = 2;
                } else if (checkboxesMarcadas.length > 2) {
                    divisor = 4;
                }
    
                const valorCarne = resultados[carneId] / divisor;
                if (valorCarne >= 1000) {
                    spanElement.innerText = (valorCarne / 1000).toFixed(1) + " kg";
                } else {
                    spanElement.innerText = valorCarne.toFixed(0) + " g";
                }
            }
        });
    }
    
    function atualizarSpansBebidas(resultados) {
        Object.keys(bebidasSpan).forEach((bebidaId) => {
            const spanId = bebidasSpan[bebidaId];
            const spanElement = document.getElementById(spanId);
            spanElement.innerText = (resultados[bebidaId] === '...' || resultados[bebidaId] === 0) ? '...' : Math.ceil(resultados[bebidaId]);
        });
    }
    
    function atualizarSpansAcompanhamentos(resultados) {
        Object.keys(acompanhamentosSpan).forEach((acompanhamentoId) => {
            const spanId = acompanhamentosSpan[acompanhamentoId];
            const spanElement = document.getElementById(spanId);
    
            if (resultados[acompanhamentoId] === '...' || resultados[acompanhamentoId] === 0) {
                spanElement.innerText = '...';
            } else {
                const valorAcompanhamento = resultados[acompanhamentoId];
    
                if (acompanhamentoId === 'pao') {
                    spanElement.innerText = valorAcompanhamento.toFixed(0);
                } else {
                    if (valorAcompanhamento >= 1000) {
                        spanElement.innerText = (valorAcompanhamento / 1000).toFixed(1) + " kg";
                    } else {
                        spanElement.innerText = valorAcompanhamento.toFixed(0) + " g";
                    }
                }
            }
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
                // Percorra os IDs das carnes para verificar quais estão marcados
                Object.keys(carnesSpan).forEach((carneId) => {
                    const carneCheckbox = document.getElementById(carneId);
    
                    if (carneCheckbox.checked) {
                        if (!resultadosPorCarne[carneId]) {
                            resultadosPorCarne[carneId] = 0;
                        }
                        const fatorCarne = fatoresMultiplicacaoCarnes[carneId][tipoPessoa];
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
                        resultadosPorBebida[bebidaId] += pessoaValue * fatoresMultiplicacaoBebidas[bebidaId][tipoPessoa];
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
                        resultadosPorAcompanhamento[acompanhamentoId] += pessoaValue * fatoresMultiplicacaoAcompanhamentos[acompanhamentoId][tipoPessoa]; 
                    } else {
                        resultadosPorAcompanhamento[acompanhamentoId] = '...';
                    }
                });
            });
    
            // Atualize os spans correspondentes com base nos resultados
            atualizarSpansCarnes(resultadosPorCarne);
            atualizarSpansBebidas(resultadosPorBebida);
            atualizarSpansAcompanhamentos(resultadosPorAcompanhamento);
        };
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        const footer = document.querySelector('footer'); 
        containerCalculadora.addEventListener(events.CALCULAR, () => {
          const footerDisplay = getComputedStyle(footer).display;
          if (footerDisplay === 'none') {
            const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            const spans = document.querySelectorAll('table:not(:first-of-type) span');

            if (checkedCheckboxes.length > 1) {
                calcularQuantidade(pessoas)();
                console.log("DISPARADO: " + events.CALCULAR);
            } else {
                spans.forEach(span => {
                span.innerText = '...';
                });
                alert('Selecione pelo menos um item antes de calcular.');
            }
          } else {
            alert('Cadastre-se para poder utilizar o Churrascômetro.');
          }
        });
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
    
            // Adicione os IDs dos spans correspondentes
            const spanId = elementoId + 'Quantidade';
            const spanValue = sessionStorage.getItem(spanId);
            const spanElement = document.getElementById(spanId);
    
            if (spanValue !== null && spanElement) {
                spanElement.innerText = spanValue;
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
    // calculator.appendChild(calculateButton());
    
    containerCalculadora.appendChild(calculator);
    
    return containerCalculadora;
}
