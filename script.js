const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Qual carro é melhor?",
    alternativas: [
        {
            texto:"Porsche 911",
            afirmacao: "Chad🗿"
        },
        {
        texto:"Tesla Model S",
        afirmacao: "Eca, noob 🤢"
        }
    ]
},

{
    enunciado: "Verstappen ou Räikkönen?",
    alternativas: [
        {

        texto: "Kimi",
        afirmacao: "Giga Chad 🗿"
        },
        {
        texto:"Max",
        afirmacao: "Muito gayyy 🤭"
        }
    ]
},

{
    enunciado: "Melhor professor?",
    alternativas: [
        {
        texto:"Estiverson",
        afirmacao: "Rei do universo 🔱"
        },
        {
        texto:"Leninha",
        afirmacao: "Queima-Queima 🔥"
        }
    ]
}

]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent = "Suas ações mudam o mundo!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();
