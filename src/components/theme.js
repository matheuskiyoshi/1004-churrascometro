const tema = function() {
    const containerTema = document.createElement("div");
          containerTema.setAttribute("id","containerTema");
    const labelTema = document.createElement("label");
          labelTema.setAttribute("for","temaCheckbox");
    const inputTema = document.createElement("input");
          inputTema.setAttribute("type","checkbox");
          inputTema.setAttribute("id","temaCheckbox");
          inputTema.classList.add("toggle-input");
    const divToggle = document.createElement("div");
          divToggle.classList.add("toggle");
    const divTemaDia = document.createElement("div");
          divTemaDia.setAttribute("id", "dia");
    const divTemaNoite = document.createElement("div");
          divTemaNoite.setAttribute("id", "noite");
    

    containerTema.appendChild(labelTema);
    labelTema.appendChild(inputTema);
    labelTema.appendChild(divToggle);
    divToggle.appendChild(divTemaDia);
    divToggle.appendChild(divTemaNoite);

            const mudarTema = ()=>
            divToggle.dispatchEvent(new CustomEvent(events.MUDAR_TEMA, {bubbles: true}))
            divToggle.addEventListener("click", mudarTema);

    return containerTema;
}