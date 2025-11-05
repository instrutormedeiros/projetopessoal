/* === module47-quiz.js === */
var questionBank = {
    'module47': [
        {
            id: 'm47-q1',
            question: 'Qual grau de queimadura é indolor na área central e apresenta aspecto esbranquiçado ou carbonizado?',
            options: { a: '1º Grau.', b: '3º Grau.', c: '2º Grau.', d: '4º Grau.' },
            answer: 'b',
            explanation: 'A queimadura de 3º Grau destrói as terminações nervosas, sendo indolor, e tem aspecto esbranquiçado/carbonizado.'
        },
        {
            id: 'm47-q2',
            question: 'De acordo com a "Regra dos 9", qual a porcentagem de área queimada corresponde a um membro inferior inteiro de um adulto?',
            options: { a: '9%.', b: '18%.', c: '27%.', d: '36%.' },
            answer: 'b',
            explanation: 'Na Regra dos 9 para adultos, cada membro inferior (perna inteira) vale 18%.'
        },
        {
            id: 'm47-q3',
            question: 'Em uma queimadura química causada por ácido, qual a conduta imediata?',
            options: { a: 'Neutralizar o ácido com uma base forte.', b: 'Cobrir a área com um pano seco.', c: 'Lavar o local com água corrente em abundância.', d: 'Aplicar uma pomada anestésica.' },
            answer: 'c',
            explanation: 'Em queimaduras químicas, deve-se lavar com água corrente em abundância para remover e diluir o agente.'
        },
        {
            id: 'm47-q4',
            question: 'Qual dos sinais abaixo é um alerta para Lesão por Inalação?',
            options: { a: 'Pulso radial presente.', b: 'Ausência de dor na queimadura.', c: 'Pele fria.', d: 'Pelos nasais chamuscados e rouquidão.' },
            answer: 'd',
            explanation: 'Queimaduras na face, pelos nasais chamuscados, tosse com fuligem e rouquidão são sinais clássicos de lesão por inalação.'
        },
        {
            id: 'm47-q5',
            question: 'Qual grau de queimadura forma bolhas?',
            options: { a: '1º Grau.', b: '2º Grau.', c: '3º Grau.', d: 'Apenas queimaduras químicas.' },
            answer: 'b',
            explanation: 'A formação de bolhas (flictenas) é a principal característica da queimadura de 2º Grau.'
        },
        {
            id: 'm47-q6',
            question: 'Na Regra dos 9, a cabeça inteira de um adulto vale:',
            options: { a: '4.5%.', b: '9%.', c: '18%.', d: '1%.' },
            answer: 'b',
            explanation: 'A cabeça e o pescoço de um adulto valem 9%.'
        },
        {
            id: 'm47-q7',
            question: 'Na Regra dos 9, um braço inteiro (membro superior) de um adulto vale:',
            options: { a: '4.5%.', b: '9%.', c: '18%.', d: '1%.' },
            answer: 'b',
            explanation: 'Cada membro superior (braço inteiro) de um adulto vale 9%.'
        },
        {
            id: 'm47-q8',
            question: 'A região da genitália, na Regra dos 9, vale:',
            options: { a: '1%.', b: '5%.', c: '9%.', d: 'Não é contada.' },
            answer: 'a',
            explanation: 'A área da genitália/períneo corresponde a 1% da superfície corporal.'
        },
        {
            id: 'm47-q9',
            question: 'O tronco inteiro (frente E costas) de um adulto vale:',
            options: { a: '9%.', b: '18%.', c: '36%.', d: '27%.' },
            answer: 'c',
            explanation: 'O tronco (frente) vale 18% e o tronco (costas) vale 18%, totalizando 36%.'
        },
        {
            id: 'm47-q10',
            question: 'Qual é o principal risco em uma queimadura elétrica?',
            options: { a: 'Apenas a queimadura na pele.', b: 'Apenas a lesão por inalação.', c: 'Parada Cardiorrespiratória (PCR) e lesões internas.', d: 'A fumaça.' },
            answer: 'c',
            explanation: 'A eletricidade passa pelo corpo, podendo causar PCR e graves lesões internas, apesar de ter pontos de entrada/saída pequenos.'
        },
        {
            id: 'm47-q11',
            question: 'Uma queimadura de 1º Grau (como de sol) atinge qual camada da pele?',
            options: { a: 'Epiderme.', b: 'Derme.', c: 'Hipoderme.', d: 'Músculos.' },
            answer: 'a',
            explanation: 'A queimadura de 1º Grau é superficial, atingindo apenas a epiderme.'
        },
        {
            id: 'm47-q12',
            question: 'Escarro fuliginoso (com fuligem) é um sinal de:',
            options: { a: 'Queimadura de 3º Grau.', b: 'Queimadura Química.', c: 'Queimadura Elétrica.', d: 'Lesão por Inalação.' },
            answer: 'd',
            explanation: 'É um forte indicativo de que a vítima inalou fumaça quente ou gases tóxicos.'
        }
    ]
};

// **CHAMADA DE RETORNO EXPLÍCITA**
if (typeof handleQuizLoad === 'function') {
    handleQuizLoad(questionBank);
}