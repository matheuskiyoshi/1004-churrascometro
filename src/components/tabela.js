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
              spanQuantidade.setAttribute("id", "quantidadeDe" + data[i].nome);
              spanQuantidade.innerText = data[i].quantidadeInicial;

        trElemento.appendChild(tdElemento);
        trElemento.appendChild(tdQuantidade);
        tdQuantidade.appendChild(spanQuantidade);
        tbody.appendChild(trElemento);
    }

    return table;
}

const dadosTabela1 = [
    { nome: 'Pessoas'},
    { nome: 'Homem', quantidadeInicial: '0' },
    { nome: 'Mulher', quantidadeInicial: '0' },
    { nome: 'Criança', quantidadeInicial: '0' },
];

const dadosTabela2 = [
    { nome: 'Carnes' },
    { nome: 'Picanha', quantidadeInicial: '...' },
    { nome: 'Alcatra', quantidadeInicial: '...' },
    { nome: 'Maminha', quantidadeInicial: '...' },
    { nome: 'Cupim', quantidadeInicial: '...' },
    { nome: 'Linguiça', quantidadeInicial: '...' },
    { nome: 'Frango (sobrecoxa e asa)', quantidadeInicial: '...' },
    { nome: 'Costela', quantidadeInicial: '...' },
    { nome: 'Coração de Frango', quantidadeInicial: '...' },
];

const dadosTabela3 = [
    { nome: 'Bebidas' },
    { nome: 'Refrigerante 2L', quantidadeInicial: '...' },
    { nome: 'Refrigerante (Lata)', quantidadeInicial: '...' },
    { nome: 'Cerveja (600ml)', quantidadeInicial: '...' },
    { nome: 'Água 1L', quantidadeInicial: '...' },
    { nome: 'Gelo 5kg', quantidadeInicial: '...' },
];