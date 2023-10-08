
const app = document.querySelector("app");
app.appendChild(tema());
app.appendChild(title());
app.appendChild(container());

const body = document.querySelector("body");
body.appendChild(footer());

const containerCalculadora = document.querySelector(".container-calculator");
containerCalculadora.appendChild(items(dadosCarnes));
containerCalculadora.appendChild(items(dadosBebidas));
containerCalculadora.appendChild(items(dadosAcompanhamentos));
containerCalculadora.appendChild(calculateButton());

let imagemAtual = 'noite';

app.addEventListener(events.MUDAR_TEMA, () => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-input");
    if(imagemAtual === 'noite'){
        body.classList.remove('noite');
        body.classList.add('dia');
        imagemAtual = 'dia';
        toggle.checked = false;
        localStorage.setItem("tema", "dia");
    } else{
        body.classList.remove('dia');
        body.classList.add('noite');
        imagemAtual = 'noite';
        toggle.checked = true;
        localStorage.setItem("tema", "noite");
    }
});

function carregarValoresDoLocalStorage() {  
    const temaSalvo = localStorage.getItem("tema");
    let imagemAtual = 'noite';
    const toggle = document.querySelector(".toggle-input");

    if (temaSalvo === 'dia') {
        document.body.classList.remove('noite');
        document.body.classList.add('dia');
        imagemAtual = 'dia';
        toggle.checked = true;
    } else {
        document.body.classList.remove('dia');
        document.body.classList.add('noite');
        imagemAtual = 'noite';
        toggle.checked = false;
    }

    const customerData = localStorage.getItem('customer');
    if(customerData){
        const footer = document.querySelector('footer');
        footer.style.display = 'none';
    }
}
carregarValoresDoLocalStorage();