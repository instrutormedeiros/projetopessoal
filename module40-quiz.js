/* === module40-quiz.js === */
var questionBank = {
    'module40': [
        {
            id: 'm40-q1',
            question: 'A produção de células sanguíneas, uma das funções do esqueleto, é chamada de:',
            options: { a: 'Hematopoiese.', b: 'Sustentação.', c: 'Proteção.', d: 'Articulação.' },
            answer: 'a',
            explanation: 'Hematopoiese é o nome do processo de produção de células sanguíneas na medula óssea.'
        },
        {
            id: 'm40-q2',
            question: 'O crânio, as costelas e a coluna vertebral fazem parte de qual divisão do esqueleto?',
            options: { a: 'Esqueleto Apendicular.', b: 'Esqueleto Axial.', c: 'Cintura Pélvica.', d: 'Cintura Escapular.' },
            answer: 'b',
            explanation: 'O Esqueleto Axial forma o eixo central do corpo (cabeça, pescoço e tronco).'
        },
        {
            id: 'm40-q3',
            question: 'Quantas vértebras compõem a região torácica da coluna?',
            options: { a: '7.', b: '5.', c: '4.', d: '12.' },
            answer: 'd',
            explanation: 'A coluna vertebral é dividida em 7 Cervicais, 12 Torácicas e 5 Lombares (além do sacro e cóccix).'
        },
        {
            id: 'm40-q4',
            question: 'Os ossos Fêmur, Tíbia e Fíbula pertencem a qual parte do corpo?',
            options: { a: 'Membros Inferiores.', b: 'Membros Superiores.', c: 'Esqueleto Axial.', d: 'Tórax.' },
            answer: 'a',
            explanation: 'Estes ossos formam a coxa (Fêmur) e a perna (Tíbia e Fíbula), parte dos Membros Inferiores.'
        },
        {
            id: 'm40-q5',
            question: 'Qual é o maior osso do corpo humano?',
            options: { a: 'Úmero.', b: 'Tíbia.', c: 'Crânio.', d: 'Fêmur.' },
            answer: 'd',
            explanation: 'O Fêmur, osso da coxa, é o maior e mais forte osso do corpo.'
        },
        {
            id: 'm40-q6',
            question: 'Quantas vértebras cervicais (pescoço) existem?',
            options: { a: '5.', b: '7.', c: '12.', d: '3.' },
            answer: 'b',
            explanation: 'Existem 7 vértebras cervicais (C1 a C7).'
        },
        {
            id: 'm40-q7',
            question: 'Qual é a função do esqueleto relacionada ao armazenamento?',
            options: { a: 'Armazenamento de gordura.', b: 'Armazenamento de íons como Cálcio e Fósforo.', c: 'Armazenamento de oxigênio.', d: 'Armazenamento de sangue.' },
            answer: 'b',
            explanation: 'Os ossos servem como um depósito mineral vital, principalmente de Cálcio e Fósforo.'
        },
        {
            id: 'm40-q8',
            question: 'A caixa torácica (costelas e esterno) tem como principal função:',
            options: { a: 'Proteção do cérebro.', b: 'Proteção do coração e pulmões.', c: 'Produção de sangue.', d: 'Movimento dos braços.' },
            answer: 'b',
            explanation: 'A caixa torácica protege os órgãos vitais do tórax (coração e pulmões).'
        },
        {
            id: 'm40-q9',
            question: 'Os ossos Úmero, Rádio e Ulna fazem parte de qual esqueleto?',
            options: { a: 'Membros Superiores (Esqueleto Apendicular).', b: 'Membros Inferiores (Esqueleto Apendicular).', c: 'Esqueleto Axial.', d: 'Tórax.' },
            answer: 'a',
            explanation: 'Estes ossos formam o braço (Úmero) e o antebraço (Rádio e Ulna), parte dos Membros Superiores.'
        },
        {
            id: 'm40-q10',
            question: 'Quantas vértebras lombares existem?',
            options: { a: '12.', b: '7.', c: '5.', d: '4.' },
            answer: 'c',
            explanation: 'A coluna lombar (região inferior das costas) é composta por 5 vértebras.'
        },
        {
            id: 'm40-q11',
            question: 'O osso esterno é dividido em 3 partes. Qual delas é a ponta inferior?',
            options: { a: 'Manúbrio.', b: 'Corpo.', c: 'Processo Xifoide.', d: 'Clavícula.' },
            answer: 'c',
            explanation: 'O esterno é dividido em Manúbrio (topo), Corpo (meio) e Processo Xifoide (ponta inferior cartilaginosa).'
        },
        {
            id: 'm40-q12',
            question: 'As cinturas escapular e pélvica servem para:',
            options: { a: 'Proteger o cérebro.', b: 'Produzir sangue.', c: 'Unir o esqueleto axial ao apendicular.', d: 'Armazenar cálcio.' },
            answer: 'c',
            explanation: 'As cinturas (ombros e quadril) conectam os membros (apendicular) ao tronco (axial).'
        }
    ]
};

// **CHAMADA DE RETORNO EXPLÍCITA**
if (typeof handleQuizLoad === 'function') {
    handleQuizLoad(questionBank);
}