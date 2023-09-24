const events = {
    INCREMENTAR : "INCREMENTAR_EVENTO",
}

const buttonPlus = document.getElementsByClassName("input-group__button--small")[1];
const calculator = document.getElementsByClassName("calculator")[0];

buttonPlus.addEventListener("click", ()=>{
    console.log("DISPARADO: " + events.INCREMENTAR); 
    buttonPlus.dispatchEvent(new CustomEvent(events.INCREMENTAR, {bubbles: true}))
})

calculator.addEventListener(events.INCREMENTAR, () => {

    document.getElementById("homem").value++;
    
    console.log("RECEBIDO: " + events.INCREMENTAR);
});
