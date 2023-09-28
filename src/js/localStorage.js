export function atualizarLocalStorage(tema) {
    localStorage.setItem("tema", tema);
}

function carregarValoresDoLocalStorage() {  
    const temaSalvo = localStorage.getItem("tema");
    let imagemAtual = 'noite';
    
    if (temaSalvo === 'dia') {
        document.body.classList.remove('noite');
        document.body.classList.add('dia');
        imagemAtual = 'dia';
    } else {
        document.body.classList.remove('dia');
        document.body.classList.add('noite');
        imagemAtual = 'noite';
    }
}
carregarValoresDoLocalStorage();
