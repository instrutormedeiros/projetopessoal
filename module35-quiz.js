/* === module35-quiz.js === */
var questionBank = {
    'module35': [
        {
            id: 'm35-q1',
            question: 'Qual grau de queimadura é caracterizado pela formação de bolhas?',
            options: { a: '1º Grau.', b: '2º Grau.', c: '3º Grau.', d: '4º Grau.' },
            answer: 'b',
            explanation: 'A queimadura de 2º Grau atinge a derme e forma bolhas.'
        },
        {
            id: 'm35-q2',
            question: 'O deslocamento de um osso de sua articulação é chamado de:',
            options: { a: 'Luxação.', b: 'Fratura.', c: 'Entorse.', d: 'Contusão.' },
            answer: 'a',
            explanation: 'Luxação é o deslocamento (perda de contato) de um osso na articulação.'
        },
        {
            id: 'm35-q3',
            question: 'Qual a regra de ouro para a imobilização de uma fratura em osso longo?',
            options: { a: 'Imobilizar apenas o local exato da fratura.', b: 'Imobilizar apenas a articulação mais próxima.', c: 'Tentar recolocar o osso no lugar antes da imobilização.', d: 'Imobilizar a articulação acima e a articulação abaixo da lesão.' },
            answer: 'd',
            explanation: 'A regra é imobilizar as articulações acima e abaixo da lesão para evitar movimento.'
        },
        {
            id: 'm35-q4',
            question: 'Uma queimadura de 3º grau é tipicamente indolor na área central por qual motivo?',
            options: { a: 'Atinge apenas a camada mais superficial da pele.', b: 'O frio do agente causador anestesia.', c: 'Destruição das terminações nervosas.', d: 'O corpo libera endorfinas em grande quantidade.' },
            answer: 'c',
            explanation: 'A queimadura de 3º Grau destrói todas as camadas, incluindo as terminações nervosas, por isso não há dor na área carbonizada.'
        },
        {
            id: 'm35-q5',
            question: 'O que é uma Fratura Exposta?',
            options: { a: 'Uma fratura onde o osso não quebrou totalmente.', b: 'Uma fratura onde o osso perfura a pele.', c: 'Uma fratura que causa muita dor.', d: 'Uma fratura na articulação.' },
            answer: 'b',
            explanation: 'Fratura Exposta (ou Aberta) é quando há um ferimento na pele causado pelo osso quebrado.'
        },
        {
            id: 'm35-q6',
            question: 'Vermelhidão e dor, mas sem bolhas, são características de qual queimadura?',
            options: { a: '1º Grau.', b: '2º Grau.', c: '3º Grau.', d: 'Química.' },
            answer: 'a',
            explanation: 'Queimaduras de 1º Grau (como de sol) atingem apenas a epiderme, causando vermelhidão e dor.'
        },
        {
            id: 'm35-q7',
            question: 'O que é uma Entorse?',
            options: { a: 'A quebra de um osso.', b: 'O deslocamento da articulação.', c: 'A torção ou distensão de uma articulação, com lesão de ligamentos.', d: 'Uma queimadura interna.' },
            answer: 'c',
            explanation: 'Entorse é a lesão dos ligamentos (ex: "virar o tornozelo").'
        },
        {
            id: 'm35-q8',
            question: 'Qual a conduta correta ao atender uma queimadura de 2º Grau?',
            options: { a: 'Estourar todas as bolhas para aliviar a pressão.', b: 'Aplicar pasta de dente ou café.', c: 'Resfriar com água corrente e cobrir com pano limpo.', d: 'Aplicar gelo diretamente sobre a bolha.' },
            answer: 'c',
            explanation: 'A conduta é resfriar com água corrente e NUNCA estourar bolhas ou aplicar produtos caseiros.'
        },
        {
            id: 'm35-q9',
            question: 'O que significa a sigla "PMS" na avaliação de fraturas?',
            options: { a: 'Pressão, Movimento, Sangue.', b: 'Pulso, Movimento, Sensibilidade.', c: 'Perna, Mão, Sapato.', d: 'Primeiros Múltiplos Socorros.' },
            answer: 'b',
            explanation: 'Deve-se checar Pulso, Movimento e Sensibilidade antes e depois de imobilizar.'
        },
        {
            id: 'm35-q10',
            question: 'Ao imobilizar uma Luxação, o que NUNCA se deve fazer?',
            options: { a: 'Chamar o socorro.', b: 'Verificar o PMS.', c: 'Tentar colocar o osso de volta no lugar.', d: 'Imobilizar a articulação.' },
            answer: 'c',
            explanation: 'Nunca tente "colocar no lugar" (reduzir) uma luxação ou fratura, pois pode causar danos graves.'
        },
        {
            id: 'm35-q11',
            question: 'Queimadura com aspecto esbranquiçado ou carbonizado é de:',
            options: { a: '1º Grau.', b: '2º Grau.', c: '3º Grau.', d: 'Apenas elétrica.' },
            answer: 'c',
            explanation: 'A queimadura de 3º Grau tem aspecto esbranquiçado ou carbonizado (preto).'
        },
        {
            id: 'm35-q12',
            question: 'O que deve ser removido da vítima de queimadura?',
            options: { a: 'Roupas que estão grudadas na pele.', b: 'Roupas que não estão grudadas e joias.', c: 'Toda a pele com bolha.', d: 'Nada, deve-se esperar o hospital.' },
            answer: 'b',
            explanation: 'Deve-se remover roupas (desde que não estejam grudadas) e joias (como anéis), pois o corpo incha.'
        }
    ]
};

// **CHAMADA DE RETORNO EXPLÍCITA**
if (typeof handleQuizLoad === 'function') {
    handleQuizLoad(questionBank);
}