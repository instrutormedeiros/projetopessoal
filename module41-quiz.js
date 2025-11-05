/* === module41-quiz.js === */
var questionBank = {
    'module41': [
        {
            id: 'm41-q1',
            question: 'Um adulto com frequência cardíaca de 50 bpm apresenta um quadro de:',
            options: { a: 'Normocardia.', b: 'Taquicardia.', c: 'Bradipneia.', d: 'Bradicardia.' },
            answer: 'd',
            explanation: 'O normal para adultos é 60-100 bpm. Abaixo de 60 é Bradicardia (pulso lento).'
        },
        {
            id: 'm41-q2',
            question: 'Qual é o valor de referência considerado ótimo para a Pressão Arterial em um adulto?',
            options: { a: '140 / 90 mmHg.', b: '80 / 120 mmHg.', c: '100 / 60 mmHg.', d: '120 / 80 mmHg.' },
            answer: 'd',
            explanation: 'O valor ótimo de referência é 120 (Sistólica) / 80 (Diastólica) mmHg.'
        },
        {
            id: 'm41-q3',
            question: 'Uma temperatura corporal de 35°C ou menos é classificada como:',
            options: { a: 'Hipotermia.', b: 'Febre.', c: 'Normal.', d: 'Hipertermia.' },
            answer: 'a',
            explanation: 'Hipotermia é a temperatura corporal abaixo de 35°C.'
        },
        {
            id: 'm41-q4',
            question: 'Qual é a faixa normal da Frequência Respiratória (FR) para um adulto em repouso?',
            options: { a: '5 a 10 mpm.', b: '12 a 20 mpm.', c: '25 a 30 mpm.', d: '60 a 100 mpm.' },
            answer: 'b',
            explanation: 'O normal para um adulto respirar em repouso é de 12 a 20 movimentos por minuto (mpm).'
        },
        {
            id: 'm41-q5',
            question: 'Um adulto com Frequência Respiratória de 25 mpm apresenta:',
            options: { a: 'Bradipneia.', b: 'Taquipneia.', c: 'Bradicardia.', d: 'Taquicardia.' },
            answer: 'b',
            explanation: 'Acima de 20 mpm é considerado Taquipneia (respiração rápida).'
        },
        {
            id: 'm41-q6',
            question: 'Um adulto com frequência cardíaca de 110 bpm apresenta:',
            options: { a: 'Bradicardia.', b: 'Bradipneia.', c: 'Taquicardia.', d: 'Taquipneia.' },
            answer: 'c',
            explanation: 'Acima de 100 bpm é considerado Taquicardia (pulso rápido).'
        },
        {
            id: 'm41-q7',
            question: 'Em uma vítima inconsciente, qual pulso é preferencialmente verificado?',
            options: { a: 'Radial (punho).', b: 'Carotídeo (pescoço).', c: 'Femoral (virilha).', d: 'Pedioso (pé).' },
            answer: 'b',
            explanation: 'Em vítimas inconscientes, verifica-se um pulso central (forte), como o Carotídeo.'
        },
        {
            id: 'm41-q8',
            question: 'Em uma vítima consciente, qual pulso é mais fácil de verificar?',
            options: { a: 'Radial (punho).', b: 'Carotídeo (pescoço).', c: 'Apenas o coração.', d: 'Nenhum.' },
            answer: 'a',
            explanation: 'Em vítimas conscientes, o pulso Radial (no punho) é o mais acessível.'
        },
        {
            id: 'm41-q9',
            question: 'Qual temperatura axilar é considerada Febre (Hipertermia)?',
            options: { a: '36°C.', b: '37,5°C.', c: 'Acima de 37,5°C.', d: 'Abaixo de 35°C.' },
            answer: 'c',
            explanation: 'Acima de 37,5°C é considerado estado febril (Febre ou Hipertermia).'
        },
        {
            id: 'm41-q10',
            question: 'O que significa Bradipneia?',
            options: { a: 'Respiração rápida.', b: 'Respiração lenta.', c: 'Pulso rápido.', d: 'Pulso lento.' },
            answer: 'b',
            explanation: 'Bradipneia é a frequência respiratória abaixo do normal (menos de 12 mpm em adultos).'
        },
        {
            id: 'm41-q11',
            question: 'A pressão Sistólica (máxima) ocorre durante qual movimento do coração?',
            options: { a: 'Contração (Sístole).', b: 'Relaxamento (Diástole).', c: 'Inspiração.', d: 'Expiração.' },
            answer: 'a',
            explanation: 'A pressão Sistólica (o valor maior) é medida durante a contração do coração.'
        },
        {
            id: 'm41-q12',
            question: 'Qual dos seguintes NÃO é um dos quatro sinais vitais clássicos?',
            options: { a: 'Temperatura.', b: 'Pulso.', c: 'Nível de Consciência.', d: 'Pressão Arterial.' },
            answer: 'c',
            explanation: 'Os 4 clássicos são: Temperatura, Pulso, Respiração e Pressão Arterial. (Nível de consciência é um sinal neurológico).'
        }
    ]
};

// **CHAMADA DE RETORNO EXPLÍCITA**
if (typeof handleQuizLoad === 'function') {
    handleQuizLoad(questionBank);
}