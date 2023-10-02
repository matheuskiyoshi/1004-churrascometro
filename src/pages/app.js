
const app = document.querySelector("app");
app.appendChild(title());
app.appendChild(container());
app.appendChild(theme());

const body = document.querySelector("body");
body.appendChild(footer());

let imagemAtual = 'noite';

app.addEventListener(events.MUDAR_TEMA, () => {
    const body = document.body;
    if(imagemAtual === 'noite'){
        body.classList.remove('noite');
        body.classList.add('dia');
        imagemAtual = 'dia';
        localStorage.setItem("tema", "dia");
    } else{
        body.classList.remove('dia');
        body.classList.add('noite');
        imagemAtual = 'noite';
        localStorage.setItem("tema", "noite");
    }
});

function carregarValoresDoLocalStorage() {  
    const temaSalvo = localStorage.getItem("tema");
    let imagemAtual = 'noite';
    
    if (temaSalvo === 'dia') {
        document.body.classList.remove('noite');
        document.body.classList.add('dia');
        imagemAtual = 'dia';
    } else {
        document.body.classList.remove('dia');
        document.body.classList.add('noite');
        imagemAtual = 'noite';
    }

    const customerData = localStorage.getItem('customer');
    if(customerData){
        const footer = document.querySelector('footer');
        footer.style.display = 'none';
    }
}
carregarValoresDoLocalStorage();