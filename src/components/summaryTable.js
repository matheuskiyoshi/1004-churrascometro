const tabela = function (data) {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
   
    table.appendChild(tbody);
    
    const trTitulo = document.createElement("tr");
    const tdTitulo = document.createElement("td");  
          tdTitulo.innerHTML = "<b>" + data[0].nome + "</b>";

    trTitulo.appendChild(tdTitulo);
    tbody.appendChild(trTitulo);

    for (let i = 1; i < data.length; i++) {
        const trElemento = document.createElement("tr");
        const tdElemento = document.createElement("td");
              tdElemento.innerText = data[i].nome;

        const tdQuantidade = document.createElement("td");
        const spanQuantidade = document.createElement("span");
              spanQuantidade.setAttribute("id", data[i].id + "Quantidade");
              spanQuantidade.innerText = data[i].quantidadeInicial;

        trElemento.appendChild(tdElemento);
        trElemento.appendChild(tdQuantidade);
        tdQuantidade.appendChild(spanQuantidade);
        tbody.appendChild(trElemento);
    }

    return table;
}