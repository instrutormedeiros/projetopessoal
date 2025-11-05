/* === module38-quiz.js === */
var questionBank = {
    'module38': [
        {
            id: 'm38-q1',
            question: 'Qual a principal diferença entre emergência e urgência?',
            options: { a: 'Urgência precisa de atendimento hospitalar, emergência não.', b: 'Emergência apresenta risco iminente de vida, urgência não.', c: 'Urgência é sempre trauma, emergência é sempre clínico.', d: 'Não há diferença entre os termos.' },
            answer: 'b',
            explanation: 'Emergência tem risco IMINENTE de vida; Urgência é grave, mas não tem risco iminente.'
        },
        {
            id: 'm38-q2',
            question: 'De acordo com o Código Penal (Art. 135), qual ação descaracteriza o crime de omissão de socorro para um leigo?',
            options: { a: 'Pedir socorro à autoridade pública (ligar para emergência).', b: 'Tentar realizar um procedimento complexo sem treinamento.', c: 'Ir embora do local sem ser visto.', d: 'Filmar a cena para obter provas.' },
            answer: 'a',
            explanation: 'O simples ato de pedir socorro (ligar para 192 ou 193) já descaracteriza a omissão.'
        },
        {
            id: 'm38-q3',
            question: 'Quando uma vítima está inconsciente e não pode dar permissão para o atendimento, qual tipo de consentimento se aplica?',
            options: { a: 'Consentimento Formal.', b: 'Consentimento Legal.', c: 'Nenhum, o atendimento é proibido.', d: 'Consentimento Implícito.' },
            answer: 'd',
            explanation: 'O Consentimento Implícito é assumido quando a vítima está inconsciente ou incapaz de responder.'
        },
        {
            id: 'm38-q4',
            question: 'Qual artigo da Constituição Federal estabelece a saúde como um direito de todos e dever do Estado?',
            options: { a: 'Art. 5º.', b: 'Art. 196.', c: 'Art. 135.', d: 'Art. 200.' },
            answer: 'b',
            explanation: 'O Art. 196 estabelece a saúde como direito de todos e dever do Estado.'
        },
        {
            id: 'm38-q5',
            question: 'O que são "Primeiros Socorros"?',
            options: { a: 'Atendimento médico dentro do hospital.', b: 'Cuidados imediatos prestados fora do hospital para manter a vida.', c: 'Apenas para socorristas treinados.', d: 'O mesmo que Suporte Avançado de Vida.' },
            answer: 'b',
            explanation: 'São os cuidados imediatos prestados no local para manter a vida até a chegada do socorro especializado.'
        },
        {
            id: 'm38-q6',
            question: 'O que é o Artigo 135 do Código Penal?',
            options: { a: 'Direito à vida.', b: 'Omissão de Socorro.', c: 'Dever do Estado.', d: 'Consentimento Implícito.' },
            answer: 'b',
            explanation: 'O Art. 135 é o que tipifica o crime de Omissão de Socorro.'
        },
        {
            id: 'm38-q7',
            question: 'O que é Consentimento Formal (Explícito)?',
            options: { a: 'Quando a vítima está inconsciente.', b: 'Quando a vítima é menor de idade.', c: 'Quando a vítima verbaliza ou gesticula sua permissão.', d: 'Quando o socorrista decide atender.' },
            answer: 'c',
            explanation: 'É quando a vítima, consciente e orientada, permite o atendimento (verbalmente ou por gesto).'
        },
        {
            id: 'm38-q8',
            question: 'O que fazer se uma vítima consciente e orientada RECUSAR atendimento?',
            options: { a: 'Forçar o atendimento, pois é uma emergência.', b: 'Chamar a polícia para prender a vítima.', c: 'Respeitar a decisão, se possível na presença de testemunhas.', d: 'Discutir com a vítima até ela aceitar.' },
            answer: 'c',
            explanation: 'O socorrista deve respeitar a autonomia da vítima consciente e orientada que recusa socorro.'
        },
        {
            id: 'm38-q9',
            question: 'O Art. 5º da Constituição Federal garante qual direito inviolável?',
            options: { a: 'Direito à saúde.', b: 'Direito ao trabalho.', c: 'Direito à vida.', d: 'Direito ao silêncio.' },
            answer: 'c',
            explanation: 'O Art. 5º garante a inviolabilidade do direito à vida.'
        },
        {
            id: 'm38-q10',
            question: 'Um "Socorrista" é definido como:',
            options: { a: 'Qualquer pessoa que ajuda.', b: 'Apenas médicos e enfermeiros.', c: 'Pessoa com treinamento técnico para prestar atendimento de emergência.', d: 'O motorista da ambulância.' },
            answer: 'c',
            explanation: 'Socorrista é a pessoa com treinamento técnico (curso) para o APH.'
        },
        {
            id: 'm38-q11',
            question: 'Uma parada cardíaca é uma:',
            options: { a: 'Urgência.', b: 'Emergência.', c: 'Situação de baixo risco.', d: 'Ocorrência clínica simples.' },
            answer: 'b',
            explanation: 'Uma parada cardíaca é a emergência mais crítica, pois há risco de morte imediato.'
        },
        {
            id: 'm38-q12',
            question: 'O Consentimento Implícito se aplica a menores desacompanhados?',
            options: { a: 'Sim.', b: 'Não, é preciso esperar os pais.', c: 'Não, é crime atender.', d: 'Apenas com autorização policial.' },
            answer: 'a',
            explanation: 'O Consentimento Implícito é assumido para vítimas inconscientes, confusas ou menores desacompanhados.'
        }
    ]
};

// **CHAMADA DE RETORNO EXPLÍCITA**
if (typeof handleQuizLoad === 'function') {
    handleQuizLoad(questionBank);
}