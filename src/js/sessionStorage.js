export function atualizarSessionStorage() {
    sessionStorage.setItem("homem", document.getElementById("homem").value);
    sessionStorage.setItem("mulher", document.getElementById("mulher").value);
    sessionStorage.setItem("crianca", document.getElementById("crianca").value);
}

function carregarValoresDoSessionStorage() {
    const homemValue = sessionStorage.getItem("homem");
    const mulherValue = sessionStorage.getItem("mulher");
    const criancaValue = sessionStorage.getItem("crianca");

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
carregarValoresDoSessionStorage();
