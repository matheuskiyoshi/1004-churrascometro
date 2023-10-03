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
    cerveja: 'cervejaQuantidade',
    agua: 'aguaQuantidade',
    gelo: 'geloQuantidade',
};

const acompanhamentosSpan = {
    pao: 'paoQuantidade',
    farofa: 'farofaQuantidade',
    maionese: 'maioneseQuantidade',
    vinagrete: 'vinagreteQuantidade',
};

const fatoresMultiplicacaoCarne = {
    picanha: {
        homem: 0.4,
        mulher: 0.32,
        crianca: 0.2,
    },
    alcatra: {
        homem: 0.4,
        mulher: 0.32,
        crianca: 0.2,
    },
    maminha: {
        homem: 0.4,
        mulher: 0.32,
        crianca: 0.2,
    },
    cupim: {
        homem: 0.4,
        mulher: 0.32,
        crianca: 0.2,
    },
    linguica: {
        homem: 0.4,
        mulher: 0.32,
        crianca: 0.2,
    },
    frango: {
        homem: 0.35,
        mulher: 0.28,
        crianca: 0.18,
    },
    costela: {
        homem: 0.6,
        mulher: 0.48,
        crianca: 0.3,
    },
    coracao: {
        homem: 0.1,
        mulher: 0.08,
        crianca: 0.05,
    },
};

// ARRAYS USADOS NO CALCULATOR.JS