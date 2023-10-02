const theme = function (){
    const temaButton = document.createElement("button");
          temaButton.setAttribute("id","tema-button");
          temaButton.innerText = "Tema";

          const mudarTema = ()=>
          temaButton.dispatchEvent(new CustomEvent(events.MUDAR_TEMA, {bubbles: true}))
          temaButton.addEventListener("click", mudarTema);

    return temaButton;
}