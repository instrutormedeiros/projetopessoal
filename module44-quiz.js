/* === module44-quiz.js === */
var questionBank = {
    'module44': [
        {
            id: 'm44-q1',
            question: 'Qual a frequência e profundidade corretas das compressões torácicas em um adulto?',
            options: { a: '80 a 100 compressões/minuto e pelo menos 4 cm.', b: '100 a 120 compressões/minuto e pelo menos 5 cm.', c: '150 compressões/minuto e 7 cm.', d: '60 compressões/minuto e 4 cm.' },
            answer: 'b',
            explanation: 'A RCP de alta qualidade exige frequência de 100-120/min e profundidade de 5-6 cm.'
        },
        {
            id: 'm44-q2',
            question: 'Qual é a relação correta de compressão-ventilação para um adulto em PCR (com 1 ou 2 socorristas)?',
            options: { a: '30 compressões para 2 ventilações.', b: '15 compressões para 2 ventilações.', c: '30 compressões para 5 ventilações.', d: '15 compressões para 1 ventilação.' },
            answer: 'a',
            explanation: 'Para adultos, a relação é sempre 30:2, independente do número de socorristas.'
        },
        {
            id: 'm44-q3',
            question: 'A ausência de pulso e a respiração agônica (gasping) são sinais clássicos de:',
            options: { a: 'Crise convulsiva.', b: 'Choque hipovolêmico leve.', c: 'Desmaio (síncope).', d: 'Parada Cardiorrespiratória (PCR).' },
            answer: 'd',
            explanation: 'Irresponsividade, ausência de respiração (ou gasping) e ausência de pulso são os sinais de PCR.'
        },
        {
            id: 'm44-q4',
            question: 'Para evitar a fadiga, os socorristas devem trocar de posição (quem comprime) a cada:',
            options: { a: '1 minuto.', b: '5 minutos.', c: '10 minutos.', d: '2 minutos (ou 5 ciclos).' },
            answer: 'd',
            explanation: 'A troca deve ser feita a cada 2 minutos (ou 5 ciclos de 30:2) para manter a qualidade das compressões.'
        },
        {
            id: 'm44-q5',
            question: 'Qual é a relação compressão-ventilação para crianças com DOIS socorristas?',
            options: { a: '30:2.', b: '15:2.', c: '30:1.', d: '15:1.' },
            answer: 'b',
            explanation: 'Para crianças e lactentes COM DOIS socorristas, a relação muda para 15:2.'
        },
        {
            id: 'm44-q6',
            question: 'Qual é a profundidade correta da compressão em um adulto?',
            options: { a: '1 a 2 cm.', b: '3 a 4 cm.', c: 'Pelo menos 5 cm (não mais que 6 cm).', d: 'O máximo possível.' },
            answer: 'c',
            explanation: 'A profundidade deve ser de 5 a 6 cm em um adulto.'
        },
        {
            id: 'm44-q7',
            question: 'O que é "retorno do tórax"?',
            options: { a: 'Virar a vítima de lado.', b: 'Permitir que o tórax volte à posição original após cada compressão.', c: 'O momento da ventilação.', d: 'Quando o tórax afunda.' },
            answer: 'b',
            explanation: 'É crucial permitir o retorno completo do tórax para que o coração possa se encher de sangue novamente.'
        },
        {
            id: 'm44-q8',
            question: 'Onde as mãos devem ser posicionadas para a RCP em adulto?',
            options: { a: 'Sobre o estômago.', b: 'Na metade inferior do osso esterno, entre os mamilos.', c: 'No lado esquerdo do peito.', d: 'No pescoço.' },
            answer: 'b',
            explanation: 'As compressões são feitas no centro do tórax, na metade inferior do esterno.'
        },
        {
            id: 'm44-q9',
            question: 'O que é "Gasping"?',
            options: { a: 'Uma respiração normal.', b: 'Respirações ofegantes e ineficazes.', c: 'Um tipo de tosse.', d: 'Vômito.' },
            answer: 'b',
            explanation: 'Gasping (respiração agônica) são respirações fracas, "como um peixe fora d\'água", e são um sinal de PCR.'
        },
        {
            id: 'm44-q10',
            question: 'Por que é importante "minimizar interrupções"?',
            options: { a: 'Para o socorrista não se cansar.', b: 'Porque cada pausa nas compressões para o fluxo de sangue para o cérebro.', c: 'Para o DEA funcionar melhor.', d: 'Para terminar o atendimento mais rápido.' },
            answer: 'b',
            explanation: 'A perfusão cerebral e coronariana cai a zero a cada pausa. Minimizar interrupções é vital.'
        },
        {
            id: 'm44-q11',
            question: 'Qual é a relação compressão-ventilação para crianças com APENAS UM socorrista?',
            options: { a: '30:2.', b: '15:2.', c: '30:1.', d: '15:1.' },
            answer: 'a',
            explanation: 'Com apenas UM socorrista, a relação para crianças é a mesma do adulto (30:2).'
        },
        {
            id: 'm44-q12',
            question: 'Para uma RCP de alta qualidade, a vítima deve estar em uma:',
            options: { a: 'Superfície macia (cama ou sofá).', b: 'Superfície rígida (chão).', c: 'Posição sentada.', d: 'Posição lateral.' },
            answer: 'b',
            explanation: 'As compressões só são eficazes se a vítima estiver em uma superfície rígida (como o chão ou uma prancha).'
        }
    ]
};

// **CHAMADA DE RETORNO EXPLÍCITA**
if (typeof handleQuizLoad === 'function') {
    handleQuizLoad(questionBank);
}