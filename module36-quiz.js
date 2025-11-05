/* === module36-quiz.js (Atualizado com Convulsão e Síncope) === */
var questionBank = {
    'module36': [
        {
            id: 'm36-q1',
            question: 'Qual tipo de choque é causado por uma infecção generalizada que se espalha pelo sangue?',
            options: {
                a: 'Choque Anafilático.',
                b: 'Choque Hipovolêmico.',
                c: 'Choque Séptico.',
                d: 'Choque Neurogênico.'
            },
            answer: 'c',
            explanation: 'O Choque Séptico (Septicemia) ocorre quando uma infecção grave se espalha pelo corpo.'
        },
        {
            id: 'm36-q2',
            question: 'Qual tipo de choque é causado por uma reação alérgica grave (ex: picada de abelha)?',
            options: {
                a: 'Choque Anafilático.',
                b: 'Choque Cardiogênico.',
                c: 'Choque Séptico.',
                d: 'Choque Hipovolêmico.'
            },
            answer: 'a',
            explanation: 'O Choque Anafilático é uma resposta exagerada do sistema imune a uma alergia grave.'
        },
        {
            id: 'm36-q3',
            question: 'Um paciente com uma hemorragia grave, pele pálida e fria, e tonturas, está provavelmente entrando em qual tipo de choque?',
            options: {
                a: 'Choque Neurogênico.',
                b: 'Choque Hipovolêmico.',
                c: 'Choque Séptico.',
                d: 'Choque Anafilático.'
            },
            answer: 'b',
            explanation: 'O Choque Hipovolêmico ocorre pela perda de grande volume de sangue (Hipo = baixo, Volemia = volume).'
        },
        {
            id: 'm36-q4',
            question: 'Quando o coração falha em bombear o sangue (ex: após um infarto), qual choque pode ocorrer?',
            options: {
                a: 'Choque Cardiogênico.',
                b: 'Choque Neurogênico.',
                c: 'Choque Séptico.',
                d: 'Choque Hipovolêmico.'
            },
            answer: 'a',
            explanation: 'O Choque Cardiogênico é a falha da bomba (coração).'
        },
        {
            id: 'm36-q5',
            question: 'O que é um Acidente Vascular Encefálico (AVE)?',
            options: {
                a: 'A necrose do músculo cardíaco.',
                b: 'Uma infecção generalizada.',
                c: 'Uma reação alérgica grave.',
                d: 'A interrupção da circulação cerebral por coágulos ou hemorragia.'
            },
            answer: 'd',
            explanation: 'O AVE ocorre quando a circulação cerebral é interrompida, causando necrose (morte) de parte do cérebro.'
        },
        {
            id: 'm36-q6',
            question: 'O que é um Infarto do Miocárdio?',
            options: {
                a: 'Uma lesão na medula espinhal.',
                b: 'A interrupção da circulação cerebral.',
                c: 'A necrose (morte) de uma parte do músculo cardíaco por obstrução.',
                d: 'Uma crise convulsiva.'
            },
            answer: 'c',
            explanation: 'O Infarto do Miocárdio é a necrose do músculo cardíaco quando uma artéria coronária é obstruída.'
        },
        {
            id: 'm36-q7',
            question: 'Qual tipo de choque é comum em lesões graves na medula espinhal?',
            options: {
                a: 'Choque Neurogênico.',
                b: 'Choque Anafilático.',
                c: 'Choque Hipovolêmico.',
                d: 'Choque Cardiogênico.'
            },
            answer: 'a',
            explanation: 'O Choque Neurogênico ocorre por falha nos sinais do sistema nervoso, comum em lesões graves no cérebro ou medula.'
        },
        {
            id: 'm36-q9', // Nova pergunta (baseada no PDF)
            question: 'Qual é a conduta de primeiros socorros recomendada para uma pessoa que está prestes a desmaiar (síncope)?',
            options: {
                a: 'Dar água com açúcar imediatamente.',
                b: 'Deitá-la no chão e elevar suas pernas acima do nível do coração.',
                c: 'Dar tapas leves no rosto para mantê-la acordada.',
                d: 'Sentá-la e inclinar a cabeça para trás.'
            },
            answer: 'b',
            explanation: 'Deitar a vítima e elevar as pernas ajuda a aumentar o fluxo sanguíneo para o cérebro, prevenindo ou revertendo o desmaio.'
        },
        {
            id: 'm36-q10', // Nova pergunta (baseada no PDF)
            question: 'Durante uma crise convulsiva, qual das seguintes ações NÃO deve ser realizada?',
            options: {
                a: 'Proteger a cabeça da vítima para evitar traumatismos.',
                b: 'Tentar puxar a língua da vítima ou colocar objetos em sua boca.',
                c: 'Afastar objetos perigosos (móveis) de perto da vítima.',
                d: 'Lateralizar a cabeça da vítima (após os abalos) para evitar aspiração.'
            },
            answer: 'b',
            explanation: 'Nunca se deve tentar puxar a língua ou colocar objetos na boca da vítima; isso pode causar lesões graves tanto no socorrista quanto na vítima.'
        },
        {
            id: 'm36-q11', // Nova pergunta (baseada no PDF)
            question: 'Qual é a principal diferença entre ter uma convulsão e ter epilepsia?',
            options: {
                a: 'Convulsão só acontece com febre, epilepsia não.',
                b: 'Epilepsia é o diagnóstico dado quando a pessoa apresenta duas ou mais crises convulsivas recorrentes.',
                c: 'Convulsão é mais grave que epilepsia.',
                d: 'Epilepsia não causa movimentos de abalo, apenas ausência.'
            },
            answer: 'b',
            explanation: 'Uma pessoa pode ter uma convulsão pontual. A epilepsia é uma disfunção crônica caracterizada por crises convulsivas recorrentes.'
        },
        {
            id: 'm36-q12', // Nova pergunta (baseada no PDF)
            question: 'O que é uma convulsão?',
            options: {
                a: 'Um distúrbio do coração que causa arritmia.',
                b: 'Uma baixa de açúcar no sangue que causa fraqueza.',
                c: 'Um distúrbio causado por atividade elétrica excessiva e anormal no cérebro.',
                d: 'A perda de controle muscular que faz a pessoa cair.'
            },
            answer: 'c',
            explanation: 'A convulsão é uma contratura muscular involuntária provocada por um aumento excessivo da atividade elétrica em áreas cerebrais.'
        }
    ]
};
