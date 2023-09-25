const events = {
    DECREMENTAR_HOMEM: "DECREMENTAR_HOMEM_EVENTO",
    DECREMENTAR_MULHER: "DECREMENTAR_MULHER_EVENTO",
    DECREMENTAR_CRIANCA: "DECREMENTAR_CRIANCA_EVENTO",
}

const calculator = document.getElementsByClassName("calculator")[0];

// DECREMENTO HOMEM
const buttonMinusHomem = document.getElementsByClassName("input-group__button--small")[0];

buttonMinusHomem.addEventListener("click", () => {
    console.log("DISPARADO: " + events.DECREMENTAR_HOMEM);
    buttonMinusHomem.dispatchEvent(new CustomEvent(events.DECREMENTAR_HOMEM, { bubbles: true }));
});

calculator.addEventListener(events.DECREMENTAR_HOMEM, () => {
    const homemInput = document.getElementById("homem");
    if (homemInput.value > 0) {
        homemInput.value--;
    }
    console.log("RECEBIDO: " + events.DECREMENTAR_HOMEM);
});

// DECREMENTO MULHER
const buttonMinusMulher = document.getElementsByClassName("input-group__button--small")[2];

buttonMinusMulher.addEventListener("click", () => {
    console.log("DISPARADO: " + events.DECREMENTAR_MULHER);
    buttonMinusMulher.dispatchEvent(new CustomEvent(events.DECREMENTAR_MULHER, { bubbles: true }));
});

calculator.addEventListener(events.DECREMENTAR_MULHER, () => {
    const mulherInput = document.getElementById("mulher");
    if (mulherInput.value > 0) {
        mulherInput.value--;
    }
    console.log("RECEBIDO: " + events.DECREMENTAR_MULHER);
});

// DECREMENTO CRIANCA
const buttonMinusCrianca = document.getElementsByClassName("input-group__button--small")[4];

buttonMinusCrianca.addEventListener("click", () => {
    console.log("DISPARADO: " + events.DECREMENTAR_CRIANCA);
    buttonMinusCrianca.dispatchEvent(new CustomEvent(events.DECREMENTAR_CRIANCA, { bubbles: true }));
});

calculator.addEventListener(events.DECREMENTAR_CRIANCA, () => {
    const criancaInput = document.getElementById("crianca");
    if (criancaInput.value > 0) {
        criancaInput.value--;
    }
    console.log("RECEBIDO: " + events.DECREMENTAR_CRIANCA);
});
