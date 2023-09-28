import { atualizarLocalStorage } from "./localStorage.js";

const temaButton = document.getElementById("tema-button");
let imagemAtual = 'noite';

temaButton.addEventListener('click', function(){ 
    const body = document.body;
    if(imagemAtual === 'noite'){
        body.classList.remove('noite');
        body.classList.add('dia');
        imagemAtual = 'dia';
        atualizarLocalStorage(imagemAtual);
    } else{
        body.classList.remove('dia');
        body.classList.add('noite');
        imagemAtual = 'noite';
        atualizarLocalStorage(imagemAtual);
    }
});