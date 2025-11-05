/* === module34-quiz.js === */
var questionBank = {
    'module34': [
        {
            id: 'm34-q1',
            question: 'Em um ferimento por Evisceração, qual é a conduta correta?',
            options: { a: 'Tentar recolocar os órgãos para dentro da cavidade.', b: 'Cobrir com um pano úmido e limpo, sem recolocar os órgãos.', c: 'Lavar os órgãos com água e sabão.', d: 'Ignorar e focar em outras lesões.' },
            answer: 'b',
            explanation: 'NÃO tente recolocar os órgãos. A conduta é cobrir com pano limpo e úmido.'
        },
        {
            id: 'm34-q2',
            question: 'Um ferimento causado por um prego é do tipo:',
            options: { a: 'Laceração.', b: 'Inciso.', c: 'Penetrante.', d: 'Avulsão.' },
            answer: 'c',
            explanation: 'Ferimentos penetrantes são causados por objetos pontiagudos (prego, faca).'
        },
        {
            id: 'm34-q3',
            question: 'Qual é a principal característica dos ferimentos Incisos?',
            options: { a: 'Bordas regulares, causados por objetos cortantes.', b: 'Bordas irregulares, causados por objetos contundentes.', c: 'Lesões superficiais e discretas.', d: 'Remoção completa de um membro.' },
            answer: 'a',
            explanation: 'Ferimentos Incisos têm bordas regulares (retas) e são feitos por objetos cortantes (navalha, bisturi).'
        },
        {
            id: 'm34-q4',
            question: 'No caso de uma Amputação, como o membro deve ser acondicionado para transporte?',
            options: { a: 'Em contato direto com o gelo.', b: 'Em saco plástico com gelo e água, sem contato direto com o gelo.', c: 'Em recipiente seco e quente.', d: 'Apenas envolto em um pano limpo.' },
            answer: 'b',
            explanation: 'O membro deve ser envolto em pano limpo, colocado em um saco plástico, e este saco colocado em um recipiente com água e gelo (sem contato direto).'
        },
        {
            id: 'm34-q5',
            question: 'Qual a conduta correta para um objeto empalado (penetrante) no abdômen?',
            options: { a: 'Remover o objeto imediatamente.', b: 'Estabilizar o objeto sem removê-lo.', c: 'Puxar o objeto um pouco para fora para ver a profundidade.', d: 'Cobrir o objeto com um pano seco.' },
            answer: 'b',
            explanation: 'NUNCA remova um objeto empalado. Ele deve ser estabilizado para evitar mais danos.'
        },
        {
            id: 'm34-q6',
            question: 'Um ferimento com bordas irregulares, causado por uma pedra, é do tipo:',
            options: { a: 'Laceração.', b: 'Inciso.', c: 'Escoriação.', d: 'Amputação.' },
            answer: 'a',
            explanation: 'Lacerações são ferimentos com bordas irregulares, geralmente causados por objetos contundentes (sem corte).'
        },
        {
            id: 'm34-q7',
            question: 'O que é uma Avulsão?',
            options: { a: 'Um "ralado" superficial.', b: 'Um corte com bordas retas.', c: 'Quando um retalho de tecido é arrancado, mas permanece preso ao corpo.', d: 'A remoção completa de um membro.' },
            answer: 'c',
            explanation: 'Avulsão é quando um retalho de pele ou tecido é destacado, mas ainda tem uma base de ligação.'
        },
        {
            id: 'm34-q8',
            question: 'O que é uma Escoriação?',
            options: { a: 'Um corte profundo.', b: 'Uma lesão superficial, tipo "ralado".', c: 'Uma exposição de órgãos.', d: 'Uma remoção de membro.' },
            answer: 'b',
            explanation: 'Escoriações são lesões superficiais ("ralados") que atingem apenas as camadas externas da pele.'
        },
        {
            id: 'm34-q9',
            question: 'Um hematoma (mancha roxa) é um exemplo de ferimento:',
            options: { a: 'Aberto.', b: 'Fechado.', c: 'Inciso.', d: 'Penetrante.' },
            answer: 'b',
            explanation: 'Ferimentos fechados são aqueles onde a lesão ocorre abaixo da pele, sem perda de continuidade (sem corte).'
        },
        {
            id: 'm34-q10',
            question: 'Qual a principal diferença entre Amputação e Avulsão?',
            options: { a: 'Não há diferença.', b: 'Amputação é superficial, Avulsão é profunda.', c: 'Amputação é a remoção completa; Avulsão o tecido ainda está preso.', d: 'Amputação é por corte, Avulsão é por impacto.' },
            answer: 'c',
            explanation: 'Na Avulsão, o retalho de tecido ainda está preso ao corpo; na Amputação, ele é completamente removido.'
        },
        {
            id: 'm34-q11',
            question: 'O que NÃO se deve fazer em uma Evisceração?',
            options: { a: 'Chamar o socorro.', b: 'Cobrir com pano úmido.', c: 'Tentar recolocar os órgãos.', d: 'Acalmar a vítima.' },
            answer: 'c',
            explanation: 'Nunca tente recolocar os órgãos expostos, pois isso pode causar infecção e mais lesões.'
        },
        {
            id: 'm34-q12',
            question: 'Por que o membro amputado NÃO deve ir em contato direto com o gelo?',
            options: { a: 'Porque o gelo pode "queimar" o tecido, inviabilizando o reimplante.', b: 'Porque o gelo derrete muito rápido.', c: 'Porque o gelo não conserva o membro.', d: 'Porque o gelo pode sujar o membro.' },
            answer: 'a',
            explanation: 'O contato direto com o gelo pode causar queimadura pelo frio, danificando os tecidos e tornando o reimplante impossível.'
        }
    ]
};

// **CHAMADA DE RETORNO EXPLÍCITA**
if (typeof handleQuizLoad === 'function') {
    handleQuizLoad(questionBank);
}