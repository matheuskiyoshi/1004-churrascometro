const container = function (){

    const container = document.createElement("div");
    container.setAttribute("id", "container");

    container.appendChild(calculator());
    container.appendChild(resumo());

    return container;
}