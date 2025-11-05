/* === module46-quiz.js === */
var questionBank = {
    'module46': [
        {
            id: 'm46-q1',
            question: 'Qual é o primeiro e mais eficaz método para controlar uma hemorragia externa?',
            options: { a: 'Compressão Direta.', b: 'Torniquete.', c: 'Elevação do membro.', d: 'Compressão Indireta.' },
            answer: 'a',
            explanation: 'A Compressão Direta é o primeiro e mais eficaz método para a maioria das hemorragias.'
        },
        {
            id: 'm46-q2',
            question: 'Uma hemorragia com sangue vermelho vivo e que jorra em jatos (pulsátil) é característica de um ferimento:',
            options: { a: 'Venoso.', b: 'Arterial.', c: 'Capilar.', d: 'Interno.' },
            answer: 'b',
            explanation: 'Sangue arterial é vermelho vivo e pulsátil devido à pressão do coração.'
        },
        {
            id: 'm46-q3',
            question: 'Qual dos seguintes sinais é típico do estado de choque hipovolêmico?',
            options: { a: 'Pele quente e avermelhada.', b: 'Pulso lento (bradicardia).', c: 'Pele pálida, fria e úmida.', d: 'Pressão arterial alta (hipertensão).' },
            answer: 'c',
            explanation: 'Pele pálida, fria e úmida (pegajosa) é um sinal clássico de choque hipovolêmico.'
        },
        {
            id: 'm46-q4',
            question: 'Qual é o recurso de hemostasia reservado para sangramentos massivos em membros que não respondem a outros métodos?',
            options: { a: 'Elevação do membro.', b: 'Compressão Indireta.', c: 'Curativo compressivo.', d: 'Torniquete.' },
            answer: 'd',
            explanation: 'O Torniquete é o último recurso para sangramentos massivos em extremidades.'
        },
        {
            id: 'm46-q5',
            question: 'O que é Choque Hipovolêmico?',
            options: { a: 'Uma reação alérgica.', b: 'Uma infecção grave.', c: 'Falência circulatória por perda de grande volume de sangue/líquidos.', d: 'Um ataque cardíaco.' },
            answer: 'c',
            explanation: 'Hipo = baixo, Volemia = volume. É o choque causado por baixo volume de sangue.'
        },
        {
            id: 'm46-q6',
            question: 'Hemorragia venosa é caracterizada por sangue:',
            options: { a: 'Vermelho vivo e pulsátil.', b: 'Vermelho escuro e contínuo.', c: 'Vermelho vivo e contínuo.', d: 'Vermelho escuro e pulsátil.' },
            answer: 'b',
            explanation: 'O sangue venoso é mais escuro (menos oxigênio) e flui de forma contínua.'
        },
        {
            id: 'm46-q7',
            question: 'Qual é a conduta no APH para um paciente em choque hipovolêmico?',
            options: { a: 'Sentar a vítima e dar água.', b: 'Deitar, elevar membros inferiores, aquecer e ofertar oxigênio.', c: 'Manter a vítima em pé e caminhando.', d: 'Não fazer nada até o CBMDF chegar.' },
            answer: 'b',
            explanation: 'A conduta visa melhorar o fluxo de sangue para os órgãos vitais (deitar, elevar pernas) e prevenir a hipotermia (aquecer).'
        },
        {
            id: 'm46-q8',
            question: 'A hipotensão (pressão baixa) no choque hipovolêmico é um sinal:',
            options: { a: 'Inicial.', b: 'Tardio.', c: 'Raro.', d: 'Inexistente.' },
            answer: 'b',
            explanation: 'A pressão arterial baixa é um sinal tardio; o corpo compensa a perda de sangue no início.'
        },
        {
            id: 'm46-q9',
            question: 'Ao aplicar um torniquete, o que é crucial anotar?',
            options: { a: 'O nome da vítima.', b: 'O tipo de sangue da vítima.', c: 'O horário da aplicação.', d: 'O nome do socorrista.' },
            answer: 'c',
            explanation: 'O horário da aplicação é vital para a equipe hospitalar saber há quanto tempo o membro está sem circulação.'
        },
        {
            id: 'm46-q10',
            question: 'Qual sinal vital é um indicador PRECOCE de choque?',
            options: { a: 'Taquicardia (pulso rápido e fraco).', b: 'Hipotensão (pressão baixa).', c: 'Pele quente.', d: 'Bradicardia (pulso lento).' },
            answer: 'a',
            explanation: 'O corpo tenta compensar a perda de volume aumentando a frequência cardíaca (Taquicardia).'
        },
        {
            id: 'm46-q11',
            question: 'Elevar os membros inferiores de uma vítima em choque ajuda a:',
            options: { a: 'Piorar o sangramento.', b: 'Melhorar a respiração.', c: 'Redirecionar o sangue das pernas para os órgãos vitais (cérebro, coração).', d: 'Diminuir a dor.' },
            answer: 'c',
            explanation: 'A elevação usa a gravidade para aumentar o retorno de sangue ao tronco e à cabeça.'
        },
        {
            id: 'm46-q12',
            question: 'O que deve ser feito para prevenir a hipotermia no paciente em choque?',
            options: { a: 'Cobrir a vítima com uma manta.', b: 'Expor a vítima ao ar livre.', c: 'Jogar água fria na vítima.', d: 'Nada, a hipotermia não é um risco.' },
            answer: 'a',
            explanation: 'A perda de sangue dificulta o controle da temperatura. Cobrir a vítima (prevenir hipotermia) é uma etapa crucial.'
        }
    ]
};

// **CHAMADA DE RETORNO EXPLÍCITA**
if (typeof handleQuizLoad === 'function') {
    handleQuizLoad(questionBank);
}