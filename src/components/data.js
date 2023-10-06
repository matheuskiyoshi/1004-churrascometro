// ARRAYS USADOS EM TABELAS.JS

const dadosPessoas = [
    { nome: 'Pessoas'},
    { nome: 'Homem', id: 'homem', quantidadeInicial: '0' },
    { nome: 'Mulher', id: 'mulher', quantidadeInicial: '0' },
    { nome: 'Criança', id: 'crianca', quantidadeInicial: '0' },
];

const dadosCarnes = [
    { nome: 'Carnes' },
    { nome: 'Picanha', id: 'picanha', quantidadeInicial: '...' },
    { nome: 'Alcatra', id: 'alcatra', quantidadeInicial: '...' },
    { nome: 'Maminha', id: 'maminha', quantidadeInicial: '...' },
    { nome: 'Cupim', id: 'cupim', quantidadeInicial: '...' },
    { nome: 'Linguiça', id: 'linguica', quantidadeInicial: '...' },
    { nome: 'Frango (sobrecoxa e asa)', id: 'frango', quantidadeInicial: '...' },
    { nome: 'Costela', id: 'costela', quantidadeInicial: '...' },
    { nome: 'Coração de Frango', id: 'coracao', quantidadeInicial: '...' },
];

const dadosBebidas = [
    { nome: 'Bebidas' },
    { nome: 'Refrigerante 2L', id: 'refrigerante', quantidadeInicial: '...' },
    { nome: 'Refrigerante (Lata)', id: 'lata', quantidadeInicial: '...' },
    { nome: 'Suco 1L', id: 'suco', quantidadeInicial: '...' },
    { nome: 'Cerveja (600ml)', id: 'cerveja', quantidadeInicial: '...' },
    { nome: 'Água 1L', id: 'agua', quantidadeInicial: '...' },
    { nome: 'Gelo 5kg', id: 'gelo', quantidadeInicial: '...' },
];

const dadosAcompanhamentos = [
    { nome: 'Acompanhamentos' },
    { nome: 'Pão de Alho', id: 'pao', quantidadeInicial: '...' },
    { nome: 'Farofa', id: 'farofa', quantidadeInicial: '...' },
    { nome: 'Maionese', id: 'maionese', quantidadeInicial: '...' },
    { nome: 'Vinagrete', id: 'vinagrete', quantidadeInicial: '...' },
    { nome: 'Arroz', id: 'arroz', quantidadeInicial: '...' },
];
// ARRAYS USADOS EM TABELAS.JS

// ARRAYS USADOS NO CALCULATOR.JS
const pessoas = [
    { id: 'homem' },
    { id: 'mulher' }, 
    { id: 'crianca' },
];

const carnesSpan = {
    picanha: 'picanhaQuantidade',
    alcatra: 'alcatraQuantidade',
    maminha: 'maminhaQuantidade',
    cupim: 'cupimQuantidade',
    linguica: 'linguicaQuantidade',
    frango: 'frangoQuantidade',
    costela: 'costelaQuantidade',
    coracao: 'coracaoQuantidade',
};

const bebidasSpan = {
    refrigerante: 'refrigeranteQuantidade',
    lata: 'lataQuantidade',
    suco: 'sucoQuantidade',
    cerveja: 'cervejaQuantidade',
    agua: 'aguaQuantidade',
    gelo: 'geloQuantidade',
};

const acompanhamentosSpan = {
    pao: 'paoQuantidade',
    farofa: 'farofaQuantidade',
    maionese: 'maioneseQuantidade',
    vinagrete: 'vinagreteQuantidade',
    arroz: 'arrozQuantidade',
};

const fatoresMultiplicacaoCarnes = {
    picanha: {
        homem: 400,
        mulher: 320,
        crianca: 200,
    },
    alcatra: {
        homem: 400,
        mulher: 320,
        crianca: 200,
    },
    maminha: {
        homem: 400,
        mulher: 320,
        crianca: 200,
    },
    cupim: {
        homem: 400,
        mulher: 320,
        crianca: 200,
    },
    linguica: {
        homem: 400,
        mulher: 320,
        crianca: 200,
    },
    frango: {
        homem: 350,
        mulher: 280,
        crianca: 180,
    },
    costela: {
        homem: 600,
        mulher: 480,
        crianca: 300,
    },
    coracao: {
        homem: 100,
        mulher: 80,
        crianca: 50,
    },
};

const fatoresMultiplicacaoBebidas = {
    refrigerante: {
        homem: 0.2,
        mulher: 0.2,
        crianca: 0.2,
    },
    lata: {
        homem: 2,
        mulher: 2,
        crianca: 1,
    },
    suco: {
        homem: 0.2,
        mulher: 0.2,
        crianca: 0.2,
    },
    cerveja: {
        homem: 3,
        mulher: 2,
        crianca: 0,
    },
    agua: {
        homem: 0.2,
        mulher: 0.2,
        crianca: 0.2,
    },
    gelo: {
        homem: 0.1,
        mulher: 0.1,
        crianca: 0,
    },
}
const fatoresMultiplicacaoAcompanhamentos = {
    pao: {
        homem: 1,
        mulher: 1,
        crianca: 1,
    },
    farofa: {
        homem: 100,
        mulher: 100,
        crianca: 100,
    },
    maionese: {
        homem: 100,
        mulher: 100,
        crianca: 100,
    },
    vinagrete: {
        homem: 100,
        mulher: 100,
        crianca: 100,
    },
    arroz: {
        homem: 100,
        mulher: 100,
        crianca: 100,
    },
}
// ARRAYS USADOS NO CALCULATOR.JS