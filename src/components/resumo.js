const resumo = function () {

    const containerResumo = document.createElement("div");
          containerResumo.classList.add("container-resumo");
    
    containerResumo.appendChild(titleSecundario("Resumo do Churrasco"));
    containerResumo.appendChild(tabela(dadosPessoas));
    containerResumo.appendChild(tabela(dadosCarnes));
    containerResumo.appendChild(tabela(dadosBebidas));
    containerResumo.appendChild(tabela(dadosAcompanhamentos));
    
    return containerResumo;
}
