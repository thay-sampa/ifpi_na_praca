// ========================================
// 1. PERGUNTAS E RESPOSTAS
// ========================================

// Para criar ou mudar perguntas, edite esta parte.
// "correta" deve ser a letra da alternativa certa: A, B, C ou D.

const perguntas = [
    {
        pergunta: "Qual é a principal mensagem transmitida pelo filme?",
        alternativas: {
            A: "O avanço científico depende exclusivamente dos recursos tecnológicos disponíveis",
            B: "As mulheres contribuíram para o avanço da ciência, mesmo enfrentando preconceito e falta de reconhecimento",
            C: "A exploração espacial foi possível apenas graças ao trabalho dos engenheiros homens",
            D: "O sucesso profissional depende mais da posição social do que do conhecimento científico"
        },
        correta: "B"
    },

    {
        pergunta: "Qual foi a importância das três protagonistas para a NASA?",
        alternativas: {
            A: "Elas desenvolveram sozinhas todos os foguetes utilizados nas missões espaciais",
            B: "Elas contribuíram com conhecimentos matemáticos, programação e engenharia para o avanço das missões espaciais",
            C: "Elas foram responsáveis exclusivamente pelo treinamento dos astronautas",
            D: "Elas criaram a NASA e organizaram os primeiros programas espaciais dos Estados Unidos"
        },
        correta: "B"
    },

    {
        pergunta: "Quais dificuldades as protagonistas enfrentaram durante suas carreiras?",
        alternativas: {
            A: "Racismo, desigualdade de gênero e dificuldades para obter reconhecimento profissional",
            B: "Falta de interesse pelos estudos e pouca dedicação ao trabalho científico",
            C: "Ausência de conhecimentos matemáticos e dificuldades com cálculos básicos",
            D: " Falta de interesse da NASA pela exploração espacial e pela tecnologia"
        },
        correta: "A"
    },

    {
        pergunta: "Qual é o significado do título “Mulheres na Ciência que Mudaram e Mudam o Mundo”?",
        alternativas: {
            A: "Mostrar que as mulheres tiveram importância apenas nas primeiras descobertas científicas",
            B: "Defender que as mulheres devem ocupar todas as profissões científicas existentes",
            C: "Destacar que as descobertas científicas são realizadas principalmente por mulheres famosas",
            D: "Valorizar as mulheres que transformaram a ciência no passado e as que continuam contribuindo atualmente"
        },
        correta: "D"
    },

    {
        pergunta: "Por que é importante reconhecer a participação das mulheres na ciência?",
        alternativas: {
            A: "Porque ajuda a valorizar suas contribuições e incentiva novas gerações de meninas a seguir carreiras científicas",
            B: "Porque demonstra que apenas as mulheres são capazes de realizar descobertas importantes",
            C: "Porque permite substituir os conhecimentos científicos desenvolvidos pelos homens",
            D: "Porque mostra que o preconceito não influencia as oportunidades profissionais"
        },
        correta: "A"
    },

    {
        pergunta: "Qual era a especialidade de Katherine Johnson na NASA?",
        alternativas: {
            A: "Criou os primeiros compiladores — traduzindo linguagens humanas para código de máquina",
            B: "Escreveu o primeiro algoritmo da história para a Máquina Analítica de Charles Babbage",
            C: "Foi uma matemática da NASA especializada no cálculo de trajetórias espaciais",
            D: "Foi uma engenheira aeroespacial da NASA especializada no comportamento do ar"
        },
        correta: "C"
    },

    {
        pergunta: "O que Dorothy Vaughan fez com a chegada dos computadores eletrônicos da IBM?",
        alternativas: {
            A: "Escreveu o primeiro algoritmo da história para a Máquina Analítica de Charles Babbage",
            B: "Calculava velocidade, posição e ponto de reentrada",
            C: "Realizava pesquisas sobre o comportamento do ar ao redor de aeronaves",
            D: "Percebeu que o futuro da ciência dependia do uso das máquinas"
        },
        correta: "D"
    },

    {
        pergunta: "O que Ada Lovelace escreveu?",
        alternativas: {
            A: "Criou os primeiros compiladores — traduzindo linguagens humanas para código de máquina",
            B: "Escreveu o primeiro algoritmo da história para a Máquina Analítica de Charles Babbage",
            C: "Realizava pesquisas sobre o comportamento do ar ao redor de aeronaves",
            D: "Aprendeu a linguagem de programação FORTRAN e ensinou sua equipe"
        },
        correta: "B"
    },

    {
        pergunta: "O que Mary Jackson se tornou?",
        alternativas: {
            A: "Escreveu o primeiro algoritmo da história para a Máquina Analítica de Charles Babbage",
            B: "Criou os primeiros compiladores — traduzindo linguagens humanas para código de máquina",
            C: "Superou diversas barreiras educacionais e institucionais para se tornar a primeira engenheira aeroespacial negra da NASA",
            D: "Foi uma matemática da NASA especializada no cálculo de trajetórias espaciais"
        },
        correta: "C"
    },

    {
        pergunta: "O que Grace Hopper criou?",
        alternativas: {
            A: "Criou os primeiros compiladores — traduzindo linguagens humanas para código de máquina — e ajudou a desenvolver a linguagem COBOL",
            B: "Foi uma matemática da NASA especializada no cálculo de trajetórias espaciais",
            C: "Realizava pesquisas sobre o comportamento do ar ao redor de aeronaves",
            D: "Escreveu o primeiro algoritmo da história para a Máquina Analítica de Charles Babbage"
        },
        correta: "A"
    }
];


// ========================================
// 2. VARIÁVEIS DO QUESTIONÁRIO
// ========================================

let indiceAtual = 0;
let acertos = 0;
let selecionada = null;
let confirmada = false;

const total = perguntas.length;


// ========================================
// 3. ELEMENTOS DO HTML
// ========================================

const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");

const progresso = document.getElementById("progresso");
const barraProgresso = document.getElementById("barra-progresso");
const perguntaTexto = document.getElementById("pergunta");
const alternativasDiv = document.getElementById("alternativas");

const feedback = document.getElementById("feedback");
const botaoConfirmar = document.getElementById("confirmar");
const botaoProxima = document.getElementById("proxima");
const botaoReiniciar = document.getElementById("reiniciar");


// ========================================
// 4. MOSTRAR A PERGUNTA
// ========================================

function mostrarPergunta() {
    const atual = perguntas[indiceAtual];

    selecionada = null;
    confirmada = false;

    progresso.textContent =
        `Pergunta ${indiceAtual + 1} de ${total}`;

    barraProgresso.style.width =
        `${((indiceAtual + 1) / total) * 100}%`;

    perguntaTexto.textContent = atual.pergunta;

    alternativasDiv.innerHTML = "";
    feedback.textContent = "";
    feedback.className = "";

    botaoConfirmar.hidden = false;
    botaoConfirmar.disabled = true;
    botaoProxima.hidden = true;

    // Cria as alternativas automaticamente.
    for (const letra in atual.alternativas) {
        const botao = document.createElement("button");

        botao.className = "alternativa";
        botao.textContent =
            `${letra}) ${atual.alternativas[letra]}`;

        botao.type = "button";

        botao.addEventListener("click", function () {
            selecionarAlternativa(letra, botao);
        });

        alternativasDiv.appendChild(botao);
    }
}


// ========================================
// 5. SELECIONAR UMA ALTERNATIVA
// ========================================

function selecionarAlternativa(letra, botaoEscolhido) {
    if (confirmada) return;

    selecionada = letra;

    // Retira a seleção anterior.
    document.querySelectorAll(".alternativa").forEach(botao => {
        botao.classList.remove("selecionada");
    });

    // Destaca a alternativa escolhida.
    botaoEscolhido.classList.add("selecionada");

    botaoConfirmar.disabled = false;
}


// ========================================
// 6. CONFIRMAR A RESPOSTA
// ========================================

function confirmarResposta() {
    // Impede confirmar sem escolher ou confirmar duas vezes.
    if (selecionada === null || confirmada) return;

    confirmada = true;

    const atual = perguntas[indiceAtual];
    const acertou = selecionada === atual.correta;

    if (acertou) {
        acertos++;
        feedback.textContent =
            `Correto! A resposta certa é a letra ${atual.correta}.`;
        feedback.className = "acerto";
    } else {
        feedback.textContent =
            `Errado! A resposta certa é a letra ${atual.correta}.`;

        feedback.className = "erro";
    }

    // Marca as respostas certas e erradas.
    document.querySelectorAll(".alternativa").forEach(botao => {
        botao.disabled = true;

        const letra = botao.textContent[0];

        if (letra === atual.correta) {
            botao.classList.add("correta");
        }

        if (letra === selecionada && !acertou) {
            botao.classList.add("errada");
        }
    });

    botaoConfirmar.hidden = true;
    botaoProxima.hidden = false;

    botaoProxima.textContent =
        indiceAtual === total - 1
            ? "Ver resultado"
            : "Próxima pergunta";
}


// ========================================
// 7. IR PARA A PRÓXIMA PERGUNTA
// ========================================

function proximaPergunta() {
    if (!confirmada) return;

    if (indiceAtual < total - 1) {
        indiceAtual++;
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}


// ========================================
// 8. MOSTRAR O RESULTADO FINAL
// ========================================

function mostrarResultado() {
    quiz.hidden = true;
    resultado.hidden = false;

    const porcentagem = Math.round((acertos / total) * 100);

    document.getElementById("pontuacao").textContent =
        `Pontuação: ${acertos}/${total} (${acertos} acertos).`;

    document.getElementById("porcentagem").textContent =
        `Porcentagem de acertos: ${porcentagem}%.`;

    let mensagem;

    if (porcentagem === 100) {
        mensagem = "Excelente! Você acertou todas as perguntas!";
    } else if (porcentagem >= 80) {
        mensagem = "Muito bem! Você tem ótimos conhecimentos.";
    } else if (porcentagem >= 60) {
        mensagem = "Bom trabalho! Continue aprendendo.";
    } else if (porcentagem >= 40) {
        mensagem = "Você está no caminho certo. Continue praticando!";
    } else {
        mensagem = "Continue estudando e tente novamente!";
    }

    document.getElementById("mensagem").textContent = mensagem;
}


// ========================================
// 9. REINICIAR O QUESTIONÁRIO
// ========================================

function reiniciarQuestionario() {
    indiceAtual = 0;
    acertos = 0;
    selecionada = null;
    confirmada = false;

    resultado.hidden = true;
    quiz.hidden = false;

    mostrarPergunta();
}


// ========================================
// 10. EVENTOS DOS BOTÕES
// ========================================

botaoConfirmar.addEventListener("click", confirmarResposta);

botaoProxima.addEventListener("click", proximaPergunta);

botaoReiniciar.addEventListener("click", reiniciarQuestionario);


// Inicia o questionário.
mostrarPergunta();