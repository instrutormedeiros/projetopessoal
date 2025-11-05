/* === module43-quiz.js === */
var questionBank = {
    'module43': [
        {
            id: 'm43-q1',
            question: 'Na escala AVDI, o que a letra \'D\' significa?',
            options: { a: 'A vítima está Desorientada.', b: 'A vítima está Deitada.', c: 'A vítima responde apenas a estímulos de Dor.', d: 'A vítima está Alerta.' },
            answer: 'c',
            explanation: 'D = Dor (Disability). O paciente só responde a um estímulo doloroso.'
        },
        {
            id: 'm43-q2',
            question: 'Qual pontuação na Escala de Coma de Glasgow (ECG) indica um TCE grave (coma)?',
            options: { a: '15.', b: '8 ou menos.', c: 'Entre 9 e 12.', d: '3.' },
            answer: 'b',
            explanation: 'Uma pontuação igual ou inferior a 8 na ECG indica um Traumatismo Cranioencefálico (TCE) grave, ou coma.'
        },
        {
            id: 'm43-q3',
            question: 'O principal objetivo da etapa \'E\' (Exposição) é:',
            options: { a: 'Manter a vítima aquecida.', b: 'Conversar com a vítima para acalmá-la.', c: 'Avaliar a circulação nas extremidades.', d: 'Procurar por lesões ocultas e depois prevenir a hipotermia.' },
            answer: 'd',
            explanation: 'E = Exposure. O socorrista expõe (corta as roupas) para procurar lesões e, imediatamente, cobre a vítima para prevenir a hipotermia.'
        },
        {
            id: 'm43-q4',
            question: 'Pupilas com diâmetros diferentes entre si são chamadas de:',
            options: { a: 'Anisocóricas.', b: 'Isocóricas.', c: 'Miose.', d: 'Midríase.' },
            answer: 'a',
            explanation: 'Anisocóricas = pupilas com tamanhos desiguais, o que pode indicar grave lesão neurológica.'
        },
        {
            id: 'm43-q5',
            question: 'Na escala AVDI, o que significa a letra "A"?',
            options: { a: 'Ausente.', b: 'Acidentado.', c: 'Alerta.', d: 'Agitado.' },
            answer: 'c',
            explanation: 'A = Alerta. A vítima está acordada e orientada.'
        },
        {
            id: 'm43-q6',
            question: 'O que significa "Hipotermia"?',
            options: { a: 'Febre alta.', b: 'Perda de calor corporal.', c: 'Pressão alta.', d: 'Respiração rápida.' },
            answer: 'b',
            explanation: 'Hipotermia é a queda da temperatura corporal, uma condição grave que deve ser prevenida na etapa E.'
        },
        {
            id: 'm43-q7',
            question: 'Pupilas "Isocóricas" são:',
            options: { a: 'Pupilas com tamanhos iguais.', b: 'Pupilas dilatadas.', c: 'Pupilas contraídas.', d: 'Pupilas com tamanhos diferentes.' },
            answer: 'a',
            explanation: 'Isocóricas = pupilas de tamanhos iguais (situação normal).'
        },
        {
            id: 'm43-q8',
            question: 'Na Escala de Coma de Glasgow (ECG), quais são os 3 parâmetros avaliados?',
            options: { a: 'Abertura Ocular, Resposta Verbal, Resposta Motora.', b: 'Pulso, Respiração, Pressão.', c: 'AVDI, CIPE, PMS.', d: 'Dor, Temperatura, Consciência.' },
            answer: 'a',
            explanation: 'A ECG avalia Abertura Ocular (1-4), Resposta Verbal (1-5) e Resposta Motora (1-6).'
        },
        {
            id: 'm43-q9',
            question: 'Pupilas dilatadas (grandes) são chamadas de:',
            options: { a: 'Miose.', b: 'Midríase.', c: 'Isocóricas.', d: 'Anisocóricas.' },
            answer: 'b',
            explanation: 'Midríase = pupilas dilatadas.'
        },
        {
            id: 'm43-q10',
            question: 'Pupilas contraídas (pequenas) são chamadas de:',
            options: { a: 'Miose.', b: 'Midríase.', c: 'Isocóricas.', d: 'Anisocóricas.' },
            answer: 'a',
            explanation: 'Miose = pupilas contraídas.'
        },
        {
            id: 'm43-q11',
            question: 'Qual é a pontuação MÁXIMA na Escala de Coma de Glasgow?',
            options: { a: '10.', b: '12.', c: '15.', d: '8.' },
            answer: 'c',
            explanation: 'A pontuação máxima é 15 (4 Ocular + 5 Verbal + 6 Motora), indicando uma pessoa alerta e orientada.'
        },
        {
            id: 'm43-q12',
            question: 'Qual é a pontuação MÍNIMA na Escala de Coma de Glasgow?',
            options: { a: '0.', b: '1.', c: '3.', d: '5.' },
            answer: 'c',
            explanation: 'A pontuação mínima é 3 (1 Ocular + 1 Verbal + 1 Motora), indicando coma profundo.'
        }
    ]
};

// **CHAMADA DE RETORNO EXPLÍCITA**
if (typeof handleQuizLoad === 'function') {
    handleQuizLoad(questionBank);
}