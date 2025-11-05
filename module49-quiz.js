/* === module49-quiz.js === */
var questionBank = {
    'module49': [
        {
            id: 'm49-q1',
            question: 'No método START, uma vítima que está respirando a uma frequência de 35 mpm (movimentos por minuto) é classificada como:',
            options: { a: 'Vermelho.', b: 'Amarelo.', c: 'Verde.', d: 'Preto.' },
            answer: 'a',
            explanation: 'Respiração acima de 30 mpm é um sinal de gravidade (choque), classificando a vítima como VERMELHO (Prioridade 1).'
        },
        {
            id: 'm49-q2',
            question: 'No método START, qual é a classificação de vítimas que conseguem andar ("walking wounded")?',
            options: { a: 'Vermelho.', b: 'Verde.', c: 'Amarelo.', d: 'Preto.' },
            answer: 'b',
            explanation: 'O primeiro passo do START é pedir para quem consegue andar ir até você. Todos que andam são VERDE.'
        },
        {
            id: 'm49-q3',
            question: 'Uma vítima que está respirando a 22 mpm, tem pulso radial presente, mas NÃO consegue obedecer a comandos simples, é classificada como:',
            options: { a: 'Verde.', b: 'Amarelo.', c: 'Vermelho.', d: 'Preto.' },
            answer: 'c',
            explanation: 'Respiração OK (<30), Perfusão OK (pulso presente), mas falha no Nível de Consciência (não obedece) = VERMELHO.'
        },
        {
            id: 'm49-q4',
            question: 'Qual é a triagem dada a uma vítima que não respira após a abertura das vias aéreas?',
            options: { a: 'Preto.', b: 'Vermelho.', c: 'Amarelo.', d: 'Preto.' },
            answer: 'a',
            explanation: 'Se, após abrir as vias aéreas, a vítima não respirar, ela é classificada como PRETO (Prioridade 0).'
        },
        {
            id: 'm49-q5',
            question: 'Qual é a triagem para uma vítima que respira a 20 mpm, tem pulso radial presente E consegue obedecer a comandos simples?',
            options: { a: 'Verde.', b: 'Amarelo.', c: 'Vermelho.', d: 'Preto.' },
            answer: 'b',
            explanation: 'Respiração OK (<30), Perfusão OK (pulso presente), Consciência OK (obedece) = AMARELO (pode aguardar).'
        },
        {
            id: 'm49-q6',
            question: 'Qual é a triagem para uma vítima que respira a 25 mpm, MAS não tem pulso radial?',
            options: { a: 'Verde.', b: 'Amarelo.', c: 'Vermelho.', d: 'Preto.' },
            answer: 'c',
            explanation: 'Respiração OK (<30), mas falha na Perfusão (pulso radial ausente) = VERMELHO.'
        },
        {
            id: 'm49-q7',
            question: 'Quanto tempo o socorrista deve levar, idealmente, para triar cada vítima no método START?',
            options: { a: '5 minutos.', b: '3 minutos.', c: 'Menos de 1 minuto.', d: '10 segundos.' },
            answer: 'c',
            explanation: 'START (Simple Triage and Rapid Treatment) é um método rápido, visando classificar cada vítima em menos de 60 segundos.'
        },
        {
            id: 'm49-q8',
            question: 'O que significa IMV?',
            options: { a: 'Incidente de Múltiplas Vítimas.', b: 'Imobilização Média de Vítimas.', c: 'Incidente de Média Valia.', d: 'Intervenção Médica Vital.' },
            answer: 'a',
            explanation: 'IMV = Incidente com Múltiplas Vítimas.'
        },
        {
            id: 'm49-q9',
            question: 'Vítimas com lesões obviamente incompatíveis com a vida são classificadas como:',
            options: { a: 'Verde.', b: 'Amarelo.', c: 'Vermelho.', d: 'Preto.' },
            answer: 'd',
            explanation: 'Lesões como decapitação ou esmagamento de crânio são classificadas como PRETO.'
        },
        {
            id: 'm49-q10',
            question: 'Qual é o objetivo da triagem em um IMV?',
            options: { a: 'Salvar a vítima mais grave primeiro.', b: 'Salvar a vítima mais nova primeiro.', c: 'Fazer o melhor para o maior número de vítimas.', d: 'Tratar todas as vítimas no local.' },
            answer: 'c',
            explanation: 'Em um IMV, o objetivo muda para "fazer o melhor para o maior número de vítimas", priorizando quem tem mais chance de sobreviver.'
        },
        {
            id: 'm49-q11',
            question: 'A cor AMARELA no START significa:',
            options: { a: 'Lesões leves, pode andar.', b: 'Lesões graves, transporte imediato.', c: 'Lesões graves, mas pode aguardar transporte.', d: 'Morto ou morrendo.' },
            answer: 'c',
            explanation: 'Amarelo é a Prioridade 2 (Demora), para vítimas graves que não correm risco de vida imediato.'
        },
        {
            id: 'm49-q12',
            question: 'Se a vítima não consegue andar, qual é a PRÓXIMA coisa a se checar no START?',
            options: { a: 'Perfusão (Pulso).', b: 'Nível de Consciência.', c: 'Respiração.', d: 'A cor da pele.' },
            answer: 'c',
            explanation: 'O fluxograma é: 1. Consegue andar? (VERDE) -> 2. Respiração? (PRETO/VERMELHO) -> 3. Perfusão? (VERMELHO) -> 4. Consciência? (VERMELHO/AMARELO).'
        }
    ]
};

// **CHAMADA DE RETORNO EXPLÍCITA**
if (typeof handleQuizLoad === 'function') {
    handleQuizLoad(questionBank);
}