const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é uma das principais causas dos incêndios florestais recentes?",
        alternativas: [
            "a) Desmatamento desenfreado ",
            "b) Uso excessivo de energia renovável."
        ]
    },
    {
        enunciado: "Quais são os principais impactos das ondas de calor extremas? ",
        alternativas: [
            "a) Aumento da produção agrícola",
            "b) Mortes, incêndios florestais e colapsos de infraestrutura.",
        ]
    },
    {
        enunciado: "Como a poluição está afetando a biodiversidade?",
        alternativas: [
            "a) Promovendo a expansão de novas espécies",
            "b) Matando espécies e degradando ecossistemas."
        ]
    },
    {
        enunciado: "Qual é uma solução eficaz para reduzir as emissões de gases de efeito estufa? ",
        alternativas: [
            "a) Transição para fontes de energia renovável como solar e eólica.",
            "b) Aumento da produção de combustíveis fósseis. "
        ]
    },
    {
        enunciado: " O que é essencial para garantir um futuro sustentável? ",
        alternativas: [
            "a) Implementar soluções integradas que promovam a preservação do meio ambiente",
            "b) Continuar com práticas atuais sem mudanças significativas. "
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();