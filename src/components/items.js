const items = function (items){

    const containerItems = document.createElement("div");
          containerItems.classList.add("container-items");
    
    const tituloItems = titleSecundario(items[0].nome);
          
    const ul = document.createElement("ul");

    
    const containerUl = document.createElement("div");
    containerUl.classList.add("container-ul");
    containerUl.appendChild(ul);
    
    containerItems.appendChild(tituloItems);
    containerItems.appendChild(containerUl);

    for (let i = 1; i < items.length; i++){
        const li = document.createElement("li");

        const checkItem = document.createElement("input");
            checkItem.setAttribute("type", "checkbox");
            checkItem.setAttribute("id", items[i].id);
            checkItem.setAttribute("name", items[i].id);
            checkItem.classList.add("check");

        const labelItem = document.createElement("label");
              labelItem.setAttribute("for", items[i].id);
              labelItem.innerText = items[i].nome;

        ul.appendChild(li);
        li.appendChild(checkItem);
        li.appendChild(labelItem);
    }

    return containerItems;
}
