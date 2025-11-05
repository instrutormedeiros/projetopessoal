/* === module48-quiz.js === */
var questionBank = {
    'module48': [
        {
            id: 'm48-q1',
            question: 'Qual é o termo para a lesão onde um osso se desloca completamente de sua articulação?',
            options: { a: 'Entorse.', b: 'Luxação.', c: 'Fratura.', d: 'Contusão.' },
            answer: 'b',
            explanation: 'Luxação é o deslocamento de um osso de sua articulação (a "junta" sai do lugar).'
        },
        {
            id: 'm48-q2',
            question: 'Em uma fratura exposta, qual é a principal prioridade do socorrista antes de iniciar a imobilização?',
            options: { a: 'Controlar a hemorragia.', b: 'Tentar alinhar o osso.', c: 'Aplicar gelo diretamente sobre o osso.', d: 'Verificar a temperatura corporal.' },
            answer: 'a',
            explanation: 'A fratura exposta rompe a pele e vasos; controlar a hemorragia (o "X" do XABCDE) é a prioridade.'
        },
        {
            id: 'm48-q3',
            question: 'O que deve ser verificado obrigatoriamente (PMS) antes e depois de imobilizar uma lesão?',
            options: { a: 'Pressão, Medicação e Sensibilidade.', b: 'Postura, Mobilidade e Sangramento.', c: 'Pulso, Movimento e Sensibilidade.', d: 'Perfusão, Memória e Sistema nervoso.' },
            answer: 'c',
            explanation: 'PMS = Pulso, Movimento e Sensibilidade. Deve ser checado antes e depois da imobilização.'
        },
        {
            id: 'm48-q4',
            question: 'Qual é a regra fundamental ao imobilizar uma suspeita de fratura no meio de um osso longo (ex: fêmur)?',
            options: { a: 'Imobilizar apenas o local exato da fratura.', b: 'Usar uma tala bem apertada para evitar movimento.', c: 'Aplicar calor para relaxar o músculo.', d: 'Imobilizar a articulação acima e a articulação abaixo da lesão.' },
            answer: 'd',
            explanation: 'A regra é imobilizar as articulações adjacentes (acima e abaixo) para impedir a movimentação do osso quebrado.'
        },
        {
            id: 'm48-q5',
            question: 'O que é uma Entorse?',
            options: { a: 'A quebra do osso.', b: 'O deslocamento da articulação.', c: 'Uma lesão dos ligamentos por torção.', d: 'Um "ralado" na pele.' },
            answer: 'c',
            explanation: 'Entorse é a lesão dos ligamentos (ex: torcer o tornozelo).'
        },
        {
            id: 'm48-q6',
            question: 'Qual a "Regra de Ouro" no atendimento a fraturas e luxações?',
            options: { a: 'Sempre alinhar o osso.', b: 'NUNCA tentar colocar o osso ou articulação "no lugar".', c: 'Aplicar o torniquete imediatamente.', d: 'Ignorar a lesão e focar na respiração.' },
            answer: 'b',
            explanation: 'Nunca tente realinhar ou "colocar no lugar" um osso, pois isso pode causar danos a nervos e vasos.'
        },
        {
            id: 'm48-q7',
            question: 'O que é Crepitação?',
            options: { a: 'A deformidade visível do membro.', b: 'O inchaço no local.', c: 'O som ou sensação de ossos raspando.', d: 'A perda de movimento.' },
            answer: 'c',
            explanation: 'Crepitação é o som ou sensação tátil dos topos dos ossos quebrados raspando um no outro.'
        },
        {
            id: 'm48-q8',
            question: 'Uma fratura onde a pele permanece intacta é chamada de:',
            options: { a: 'Fratura Fechada.', b: 'Fratura Aberta.', c: 'Entorse.', d: 'Luxação.' },
            answer: 'a',
            explanation: 'Fratura Fechada é aquela em que o osso quebrou, mas a pele não foi perfurada.'
        },
        {
            id: 'm48-q9',
            question: 'Ao imobilizar, a tala deve ser aplicada:',
            options: { a: 'O mais apertado possível, para garrotear.', b: 'Firme, mas sem garrotear a circulação.', c: 'Frouxa, permitindo movimento.', d: 'Apenas sobre a pele, nunca sobre a roupa.' },
            answer: 'b',
            explanation: 'A imobilização deve ser firme para impedir o movimento, mas não tão apertada a ponto de prender a circulação.'
        },
        {
            id: 'm48-q10',
            question: 'A lesão dos ligamentos de uma articulação é uma:',
            options: { a: 'Fratura.', b: 'Luxação.', c: 'Contusão.', d: 'Entorse.' },
            answer: 'd',
            explanation: 'Entorse é a lesão ligamentar causada por uma torção.'
        },
        {
            id: 'm48-q11',
            question: 'O que é uma Fratura Aberta?',
            options: { a: 'Uma fratura no crânio.', b: 'Uma fratura que pode ser vista no Raio-X.', c: 'Uma fratura onde o osso perfura a pele.', d: 'Uma fratura de fácil tratamento.' },
            answer: 'c',
            explanation: 'Fratura Aberta (ou Exposta) é quando o osso quebrado rompe a pele, aumentando o risco de infecção.'
        },
        {
            id: 'm48-q12',
            question: 'Por que checamos o PMS (Pulso, Movimento, Sensibilidade) antes e DEPOIS da imobilização?',
            options: { a: 'Para saber se a vítima está viva.', b: 'Para garantir que a imobilização não prendeu a circulação ou um nervo.', c: 'Para saber se a vítima pode andar.', d: 'Para decidir se chamamos o SAMU.' },
            answer: 'b',
            explanation: 'Checar o PMS depois é vital para garantir que a tala não foi aplicada de forma muito apertada, piorando a lesão.'
        }
    ]
};

// **CHAMADA DE RETORNO EXPLÍCITA**
if (typeof handleQuizLoad === 'function') {
    handleQuizLoad(questionBank);
}