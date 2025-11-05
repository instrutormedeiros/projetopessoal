/* === module42-quiz.js === */
var questionBank = {
    'module42': [
        {
            id: 'm42-q1',
            question: 'Qual é a primeira e mais importante etapa antes de iniciar o atendimento a uma vítima?',
            options: { a: 'Garantir a segurança da cena.', b: 'Checar o pulso da vítima.', c: 'Abrir as vias aéreas.', d: 'Ligar para a família.' },
            answer: 'a',
            explanation: 'A segurança da cena é a prioridade máxima. Se a cena não estiver segura, o socorrista não entra.'
        },
        {
            id: 'm42-q2',
            question: 'No protocolo XABCDE, o que a letra \'A\' representa?',
            options: { a: 'Atendimento rápido.', b: 'Abertura das vias aéreas com controle da cervical.', c: 'Análise da circulação.', d: 'Avaliação da hemorragia.' },
            answer: 'b',
            explanation: 'A = Airway (Vias Aéreas), sempre feito com controle da coluna cervical em vítimas de trauma.'
        },
        {
            id: 'm42-q3',
            question: 'A verificação do pulso carotídeo e da perfusão capilar faz parte de qual etapa do protocolo?',
            options: { a: 'X.', b: 'A.', c: 'B.', d: 'C.' },
            answer: 'd',
            explanation: 'C = Circulation (Circulação), onde se avalia o pulso e a perfusão (enchimento capilar).'
        },
        {
            id: 'm42-q4',
            question: 'Qual é a principal prioridade na etapa \'X\' do atendimento ao trauma?',
            options: { a: 'Controle de hemorragia externa grave.', b: 'Exame neurológico rápido.', c: 'Exposição da vítima.', d: 'Checagem da respiração.' },
            answer: 'a',
            explanation: 'O "X" (Hemorragia Exsanguinante) prioriza o controle de sangramentos graves e visíveis.'
        },
        {
            id: 'm42-q5',
            question: 'Qual é a ordem de prioridade de segurança na cena?',
            options: { a: '1º Vítima, 2º Equipe, 3º Socorrista.', b: '1º Socorrista, 2º Equipe, 3º Vítima.', c: '1º Equipe, 2º Vítima, 3º Socorrista.', d: '1º Vítima, 2º Socorrista, 3º Equipe.' },
            answer: 'b',
            explanation: 'A prioridade é sempre: 1º Eu (socorrista), 2º Minha equipe, 3º A vítima.'
        },
        {
            id: 'm42-q6',
            question: 'O que é avaliado na etapa "B" (Breathing)?',
            options: { a: 'O nível de consciência.', b: 'A presença de pulso.', c: 'A qualidade da respiração (frequência, profundidade).', d: 'Se as vias aéreas estão abertas.' },
            answer: 'c',
            explanation: 'No "B" (Respiração), avaliamos se a vítima está respirando e a qualidade dessa respiração.'
        },
        {
            id: 'm42-q7',
            question: 'Qual manobra de abertura de vias aéreas é indicada para vítimas de trauma (com suspeita de lesão cervical)?',
            options: { a: 'Chin Lift (Elevação do queixo).', b: 'Jaw Thrust (Tração da mandíbula).', c: 'Inclinação da cabeça.', d: 'Todas as anteriores.' },
            answer: 'b',
            explanation: 'O Jaw Thrust (Tração da mandíbula) abre as vias aéreas sem movimentar a coluna cervical.'
        },
        {
            id: 'm42-q8',
            question: 'Qual é o tempo de enchimento capilar considerado normal?',
            options: { a: 'Menor que 2 segundos.', b: 'Maior que 3 segundos.', c: 'Exatamente 5 segundos.', d: 'Menor que 10 segundos.' },
            answer: 'a',
            explanation: 'Um enchimento capilar normal (indicativo de boa perfusão) é menor que 2 segundos.'
        },
        {
            id: 'm42-q9',
            question: 'O "X" no protocolo XABCDE foi adicionado para priorizar o quê?',
            options: { a: 'Lesões no Tórax (X-Ray).', b: 'Hemorragias graves.', c: 'Verificar se há fraturas (Raio-X).', d: 'Exposição da vítima.' },
            answer: 'b',
            explanation: 'O X (Hemorragia Exsanguinante) foi adicionado para tratar sangramentos que podem matar antes mesmo de problemas nas vias aéreas.'
        },
        {
            id: 'm42-q10',
            question: 'Se a cena não estiver segura, qual a conduta do socorrista?',
            options: { a: 'Entrar assim mesmo.', b: 'Não entrar, acionar serviço especializado e aguardar.', c: 'Pedir para a vítima sair.', d: 'Entrar rapidamente e sair.' },
            answer: 'b',
            explanation: 'A regra é clara: se a cena não estiver segura, o socorrista não entra. A segurança própria vem primeiro.'
        },
        {
            id: 'm42-q11',
            question: 'A etapa "A" (Airway) verifica se há obstruções. Qual a obstrução mais comum em vítimas inconscientes?',
            options: { a: 'Sangue.', b: 'Dentes quebrados.', c: 'Vômito.', d: 'A própria língua.' },
            answer: 'd',
            explanation: 'Em uma vítima inconsciente, a musculatura relaxa e a língua pode obstruir a passagem de ar.'
        },
        {
            id: 'm42-q12',
            question: 'Onde se verifica o pulso em vítimas conscientes durante a etapa "C"?',
            options: { a: 'Artéria Carótida (pescoço).', b: 'Artéria Radial (punho).', c: 'Artéria Femoral (virilha).', d: 'No peito.' },
            answer: 'b',
            explanation: 'Em vítimas conscientes, o pulso radial (periférico) é o mais fácil e rápido de checar.'
        }
    ]
};

// **CHAMADA DE RETORNO EXPLÍCITA**
if (typeof handleQuizLoad === 'function') {
    handleQuizLoad(questionBank);
}