export function atualizarLocalStorage() {
    localStorage.setItem("homem", document.getElementById("homem").value);
    localStorage.setItem("mulher", document.getElementById("mulher").value);
    localStorage.setItem("crianca", document.getElementById("crianca").value);
}

function carregarValoresDoLocalStorage() {
    const homemValue = localStorage.getItem("homem");
    const mulherValue = localStorage.getItem("mulher");
    const criancaValue = localStorage.getItem("crianca");

    if (homemValue) {
        document.getElementById("homem").value = homemValue;
    }

    if (mulherValue) {
        document.getElementById("mulher").value = mulherValue;
    }

    if (criancaValue) {
        document.getElementById("crianca").value = criancaValue;
    }
}
carregarValoresDoLocalStorage();
