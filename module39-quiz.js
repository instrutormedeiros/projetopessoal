/* === module39-quiz.js === */
var questionBank = {
    'module39': [
        {
            id: 'm39-q1',
            question: 'Qual é o procedimento imediato em caso de contato de sangue com a pele ÍNTEGRA do socorrista?',
            options: { a: 'Aplicar álcool 70%.', b: 'Lavar o local com água e sabão.', c: 'Secar com um pano e continuar o atendimento.', d: 'Procurar um hospital imediatamente sem lavar.' },
            answer: 'b',
            explanation: 'Mesmo na pele íntegra, o procedimento padrão é a lavagem abundante com água e sabão.'
        },
        {
            id: 'm39-q2',
            question: 'Qual dos seguintes itens NÃO é considerado um EPI essencial para o atendimento pré-hospitalar?',
            options: { a: 'Luvas descartáveis.', b: 'Óculos de proteção.', c: 'Máscara facial.', d: 'Capacete.' },
            answer: 'd',
            explanation: 'Luvas, óculos e máscara são EPIs de biossegurança. O capacete é um EPI de segurança da cena, mas não de biossegurança.'
        },
        {
            id: 'm39-q3',
            question: 'O que NUNCA se deve fazer ao manipular uma agulha usada?',
            options: { a: 'Tentar reencapá-la.', b: 'Descartá-la em um recipiente apropriado.', c: 'Manuseá-la com luvas.', d: 'Transportá-la com cuidado.' },
            answer: 'a',
            explanation: 'Nunca tente reencapar agulhas usadas, pois este é o momento de maior risco de perfuração.'
        },
        {
            id: 'm39-q4',
            question: 'Em caso de respingo de secreção nos olhos, qual a conduta correta?',
            options: { a: 'Esfregar os olhos com as luvas.', b: 'Pingar colírio.', c: 'Lavar com soro fisiológico ou água em abundância.', d: 'Fechar os olhos e esperar a ardência passar.' },
            answer: 'c',
            explanation: 'Em contato com mucosas (olhos, boca), deve-se lavar abundantemente com água corrente ou soro fisiológico.'
        },
        {
            id: 'm39-q5',
            question: 'Quais são as 3 principais vias de exposição a riscos biológicos mencionadas?',
            options: { a: 'Ar, Água e Solo.', b: 'Perfuração da pele, Contato com mucosas, Contato com pele não-íntegra.', c: 'Tosse, Espirro e Suor.', d: 'Seringas, Agulhas e Luvas.' },
            answer: 'b',
            explanation: 'As vias de exposição são: perfuração (agulhas), mucosas (respingos nos olhos/boca) e pele não-íntegra (cortes).'
        },
        {
            id: 'm39-q6',
            question: 'Qual destes fluidos corporais NÃO é considerado potencialmente infeccioso?',
            options: { a: 'Sangue.', b: 'Líquor.', c: 'Sêmen.', d: 'Suor.' },
            answer: 'd',
            explanation: 'Suor, lágrimas e urina (sem sangue visível) geralmente não são considerados fontes de infecção para patógenos como HIV/Hepatite.'
        },
        {
            id: 'm39-q7',
            question: 'Para que servem os óculos de proteção?',
            options: { a: 'Proteger do sol.', b: 'Proteger contra respingos de fluidos nos olhos.', c: 'Apenas para quem usa óculos de grau.', d: 'Para enxergar melhor.' },
            answer: 'b',
            explanation: 'Os óculos de proteção são essenciais para proteger a mucosa ocular contra respingos.'
        },
        {
            id: 'm39-q8',
            question: 'O que é pele "não-íntegra"?',
            options: { a: 'Pele suja.', b: 'Pele com tatuagem.', c: 'Pele com cortes, dermatites ou lesões não cicatrizadas.', d: 'Pele limpa.' },
            answer: 'c',
            explanation: 'Pele não-íntegra é qualquer pele que tenha uma barreira rompida, como cortes ou dermatites.'
        },
        {
            id: 'm39-q9',
            question: 'Qual o primeiro passo após sofrer um acidente biológico (ex: respingo nos olhos)?',
            options: { a: 'Lavar o local abundantemente.', b: 'Relatar e documentar.', c: 'Continuar o atendimento.', d: 'Tomar um antibiótico.' },
            answer: 'a',
            explanation: 'A primeira ação imediata é a lavagem do local (pele com água e sabão, mucosas com água/soro).'
        },
        {
            id: 'm39-q10',
            question: 'Luvas descartáveis devem ser usadas:',
            options: { a: 'Apenas se a vítima parecer doente.', b: 'Apenas se houver sangue visível.', c: 'Em todos os atendimentos.', d: 'Apenas no hospital.' },
            answer: 'c',
            explanation: 'Deve-se tratar todos os pacientes como potencialmente infecciosos; portanto, use luvas em todos os atendimentos.'
        },
        {
            id: 'm39-q11',
            question: 'Qual o destino correto de objetos perfurocortantes (agulhas)?',
            options: { a: 'Lixo comum.', b: 'Vaso sanitário.', c: 'Recipientes apropriados (Descarpack).', d: 'Bolsa de APH.' },
            answer: 'c',
            explanation: 'Devem ser descartados em recipientes rígidos, apropriados para perfurocortantes.'
        },
        {
            id: 'm39-q12',
            question: 'A máscara facial protege o socorrista de qual via de exposição?',
            options: { a: 'Perfuração da pele.', b: 'Contato com pele não-íntegra.', c: 'Inalação de partículas e respingos na boca/nariz.', d: 'Apenas do mau cheiro.' },
            answer: 'c',
            explanation: 'A máscara protege contra inalação (via aérea) e respingos nas mucosas da boca e nariz.'
        }
    ]
};

// **CHAMADA DE RETORNO EXPLÍCITA**
if (typeof handleQuizLoad === 'function') {
    handleQuizLoad(questionBank);
}