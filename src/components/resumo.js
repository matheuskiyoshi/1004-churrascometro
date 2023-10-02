const resumo = function () {

    const containerResumo = document.createElement("div");
          containerResumo.classList.add("container-resumo");
    
    containerResumo.appendChild(titleResumo());
    containerResumo.appendChild(tabela(dadosTabela1));
    containerResumo.appendChild(tabela(dadosTabela2));
    containerResumo.appendChild(tabela(dadosTabela3));
    containerResumo.appendChild(tabela(dadosTabela4));
    
    return containerResumo;
}
