const events = {
    INCREMENTAR_HOMEM: "INCREMENTAR_HOMEM_EVENTO",
    INCREMENTAR_MULHER: "INCREMENTAR_MULHER_EVENTO",
    INCREMENTAR_CRIANCA: "INCREMENTAR_CRIANCA_EVENTO",
}

const calculator = document.getElementsByClassName("calculator")[0];

// INCREMENTO HOMEM
const buttonPlusHomem = document.getElementsByClassName("input-group__button--small")[1];

buttonPlusHomem.addEventListener("click", () => {
    console.log("DISPARADO: " + events.INCREMENTAR_HOMEM);
    buttonPlusHomem.dispatchEvent(new CustomEvent(events.INCREMENTAR_HOMEM, { bubbles: true }));
});

calculator.addEventListener(events.INCREMENTAR_HOMEM, () => {
    document.getElementById("homem").value++;
    console.log("RECEBIDO: " + events.INCREMENTAR_HOMEM);
});

// INCREMENTO MULHER
const buttonPlusMulher = document.getElementsByClassName("input-group__button--small")[3];

buttonPlusMulher.addEventListener("click", () => {
    console.log("DISPARADO: " + events.INCREMENTAR_MULHER);
    buttonPlusMulher.dispatchEvent(new CustomEvent(events.INCREMENTAR_MULHER, { bubbles: true }));
});

calculator.addEventListener(events.INCREMENTAR_MULHER, () => {
    document.getElementById("mulher").value++;
    console.log("RECEBIDO: " + events.INCREMENTAR_MULHER);
});

// INCREMENTO CRIANCA
const buttonPlusCrianca = document.getElementsByClassName("input-group__button--small")[5];

buttonPlusCrianca.addEventListener("click", () => {
    console.log("DISPARADO: " + events.INCREMENTAR_CRIANCA);
    buttonPlusCrianca.dispatchEvent(new CustomEvent(events.INCREMENTAR_CRIANCA, { bubbles: true }));
});

calculator.addEventListener(events.INCREMENTAR_CRIANCA, () => {
    document.getElementById("crianca").value++;
    console.log("RECEBIDO: " + events.INCREMENTAR_CRIANCA);
});
