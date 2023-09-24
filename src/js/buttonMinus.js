const events = {
    DECREMENTAR : "DECREMENTAR_EVENTO",
}

const buttonPlus = document.getElementsByClassName("input-group__button--small")[0];
const calculator = document.getElementsByClassName("calculator")[0];

buttonPlus.addEventListener("click", ()=>{
    console.log("DISPARADO: " + events.DECREMENTAR); 
    buttonPlus.dispatchEvent(new CustomEvent(events.DECREMENTAR, {bubbles: true}))
})

calculator.addEventListener(events.DECREMENTAR, () => {

    document.getElementById("homem").value--;
    
    console.log("RECEBIDO: " + events.DECREMENTAR);
});
