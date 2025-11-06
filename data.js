/* === ARQUIVO data.js (SOMENTE CONTEÚDO E ESTRUTURA) === */

// MAPA DE MÓDULOS (Permanece para que a navegação inicial funcione)
const moduleContent = {
    'module1': { 
        id: "module1", 
        title: "1. RH: Fundamentos da Comunicação", 
        iconClass: "fas fa-comments", 
        content: `<h4>1.1 O que é Comunicação?</h4><p>A comunicação é o coração das nossas interações. É o processo de compartilhar ideias, emoções e informações, usando símbolos como palavras, gestos ou imagens. Ela é fundamental para criar conexões e fortalecer tanto as relações humanas quanto as culturais.</p><p>Essencial em todos os aspectos da vida, a comunicação se manifesta de diversas formas: oral, escrita, corporal e digital.</p><h4>1.2 Por que a Comunicação é Importante?</h4><p>A comunicação é a base para:</p><ul><li>Construir amizades e laços familiares sólidos.</li><li>Compartilhar conhecimento e aprender com outras culturas.</li><li>Resolver problemas de forma eficaz e colaborar em equipe.</li><li>Expressar quem somos e compreender o próximo, promovendo a empatia.</li></ul><h4>1.3 Formas de Comunicação</h4><p>Existem duas grandes formas de comunicação: Verbal e Não-verbal.</p><div class="key-concept"><h5>Comunicação Verbal</h5><p>A comunicação verbal foca na formação de frases com coerência para transmitir uma mensagem clara. Ela utiliza, principalmente, as formas orais, escritas e digitais. Exemplos incluem conversas, e-mails, mensagens de aplicativos e comandos de voz.</p></div><div class="key-concept"><h5>Comunicação Não-Verbal</h5><p>A comunicação não-verbal dispensa o uso de frases, concentrando-se em formas corporais e visuais. Exemplos incluem Libras, gestos, expressões faciais, placas de trânsito e emojis.</p></div>` 
    },
    'module2': { 
        id: "module2", 
        title: "2. RH: Processo e Tipos de Comunicação", 
        iconClass: "fas fa-sitemap", 
        content: `<h4>2.1 Elementos da Comunicação</h4><p>Para que a comunicação aconteça, alguns elementos são essenciais:</p><ul><li><strong>Emissor:</strong> Aquele que emite a mensagem (pessoa, grupo, empresa).</li><li><strong>Receptor:</strong> Quem recebe a mensagem.</li><li><strong>Canal:</strong> O meio por onde a mensagem é transmitida (jornal, TV, conversa presencial).</li><li><strong>Feedback:</strong> A resposta do receptor, indicando se a mensagem foi compreendida.</li></ul><h4>2.2 Tipos de Comunicação</h4><div class="key-concept"><h5>Comunicação Formal</h5><p>É a comunicação oficial e estruturada que segue regras e a hierarquia de um grupo.</p><ul><li><strong>Ascendente:</strong> De um nível inferior para um superior (funcionário para chefe). Serve para dar sugestões ou relatar problemas.</li><li><strong>Descendente:</strong> De um nível superior para um inferior (chefe para funcionário). Serve para dar ordens, explicar regras ou definir metas.</li><li><strong>Horizontal:</strong> Entre pessoas do mesmo nível hierárquico, para facilitar a colaboração.</li></ul></div><div class="key-concept"><h5>Comunicação Informal</h5><p>Acontece de forma espontânea, sem regras ou canais oficiais. Pode causar confusão se não for bem gerenciada. Exemplos incluem:</p><ul><li><strong>Videira:</strong> Informação que se espalha rapidamente, mas sua origem é incerta, como um boato.</li><li><strong>Rumor:</strong> Informação que circula sem confirmação de veracidade e sem fonte confiável.</li><li><strong>Mexerico (ou Fofoca):</strong> Falar sobre pessoas específicas, com informações que podem não ser verdadeiras e com fonte duvidosa.</li></ul></div>` 
    },
    'module3': { 
        id: "module3", 
        title: "3. RH: Percepção Social e Julgamento", 
        iconClass: "fas fa-balance-scale", 
        content: `<p>Julgamos pessoas constantemente, muitas vezes sem perceber como somos influenciados por comparações, ideias pré-concebidas ou nossas próprias projeções.</p><h4>1. Efeito de Contraste</h4><p>É quando julgamos alguém comparando-o com outra pessoa ou situação que vimos recentemente. Essa comparação pode distorcer nossa opinião, fazendo alguém parecer melhor ou pior do que realmente é.</p><div class="key-concept"><h5>Exemplo Prático</h5><p>Em um concurso de talentos, se um participante canta muito mal, o próximo pode parecer incrível só pelo contraste, mesmo que sua performance seja apenas mediana.</p></div><h4>2. Estereótipo</h4><p>É quando julgamos alguém com base em ideias prontas e generalizadas sobre um grupo, como aparência, idade ou estilo. É como colocar um "rótulo" sem conhecer a pessoa de verdade.</p><div class="key-concept"><h5>Exemplo Prático</h5><p>Achar que uma pessoa de óculos é automaticamente "nerd" ou que alguém com cabelo colorido é "rebelde", sem saber quem ela é de fato.</p></div><h4>3. Projeção</h4><p>É quando atribuímos nossas próprias características, sentimentos ou pensamentos aos outros, como se eles fossem iguais a nós. É como usar um espelho para julgar, projetando nossas experiências internas neles.</p><div class="key-concept"><h5>Exemplo Prático</h5><p>Se você está se sentindo nervoso, pode erroneamente acreditar que todo mundo ao seu redor também está nervoso, mesmo que estejam calmos.</p></div>` 
    },
    'module4': { 
        id: "module4", 
        title: "4. RH: Liderança e Tomada de Decisão", 
        iconClass: "fas fa-user-tie", 
        content: `<p>Este módulo explora a diferença entre chefiar e liderar, os diversos estilos de liderança e os processos de tomada de decisão em grupo, elementos essenciais para a gestão eficaz de equipes.</p><h4>4.1 Chefe vs. Líder</h4><p>Existe uma diferença crucial entre ser um chefe e ser um líder. Um chefe geralmente foca no controle e na execução de tarefas; ele manda. Um líder inspira, motiva, guia e desenvolve sua equipe; ele engaja e caminha junto.</p><h4>4.2 Tipos de Liderança</h4><ul><li><strong>Liderança Transformacional:</strong> O líder inspira as pessoas a abraçar uma visão, fazendo com que se sintam parte de algo maior. O foco é na ideia e no crescimento da equipe.</li><li><strong>Liderança Carismática:</strong> O líder tem uma personalidade magnética que atrai as pessoas. As pessoas o seguem por causa de sua forte influência pessoal, sendo o líder o centro.</li></ul><h4>4.3 Tipos de Líder</h4><ul><li><strong>Autoritário:</strong> O líder toma todas as decisões sozinho, sem consultar a equipe.</li><li><strong>Laissez-Faire:</strong> O líder dá total autonomia à equipe para tomar suas próprias decisões, intervindo minimamente.</li></ul><h4>4.4 Tomada de Decisão</h4><ul><li><strong>Consultiva:</strong> O líder consulta a equipe, mas a palavra final é dele.</li><li><strong>Democrática:</strong> A decisão é tomada por votação da maioria.</li><li><strong>Consenso:</strong> Todos os membros do grupo concordam com a mesma decisão, buscando total aceitação.</li></ul>` 
    },
    'module5': { 
        id: "module5", 
        title: "5. RH: Inclusão e Tipos de Deficiência", 
        iconClass: "fas fa-wheelchair", 
        content: `<p>A deficiência é uma limitação ou ausência em alguma função do corpo ou da mente. Conhecer os diferentes tipos é essencial para promover a inclusão.</p><h4>1. Deficiência Física</h4><p>É a limitação no movimento ou na estrutura do corpo, como braços ou pernas, podendo afetar a mobilidade e a coordenação motora. Exemplo: uma pessoa que usa cadeira de rodas.</p><h4>2. Deficiência Visual</h4><p>É a perda parcial ou total da visão, variando desde a baixa visão até a cegueira total. Exemplo: uma pessoa cega que usa bengala para se locomover.</p><h4>3. Deficiência Auditiva</h4><p>É a perda parcial ou total da audição, incluindo desde dificuldades leves até a surdez completa. Exemplo: uma pessoa surda que usa Libras para se comunicar.</p><h4>4. Deficiência Intelectual</h4><p>É a limitação no funcionamento intelectual que afeta áreas como aprendizado, memória e raciocínio. Exemplo: uma pessoa que pode precisar de apoio adicional para aprender novas tarefas e desenvolver habilidades.</p><h4>5. Deficiência Múltipla</h4><p>É a combinação de dois ou mais tipos de deficiência, como física e auditiva. Exige apoios mais variados e personalizados.</p>` 
    },
    'module6': { 
        id: "module6", 
        title: "6. Legislação: NR vs NT", 
        iconClass: "fas fa-balance-scale-right", 
        content: `<h4>6.1 Norma Regulamentadora (NR)</h4><p>As Normas Regulamentadoras (NRs) são regras criadas pelo Ministério do Trabalho e Emprego (MTE) que tratam de segurança e saúde no trabalho em todo o Brasil.</p><p>Elas são <strong>obrigatórias</strong> para todas as empresas e trabalhadores.</p><p>O descumprimento dessas normas pode gerar multas, penalidades e, em casos mais graves, interdição ou embargo das atividades.</p><h4>6.2 Norma Técnica (NT)</h4><p>As Normas Técnicas (NTs), também conhecidas como NBRs (Normas Brasileiras), são documentos criados por organismos especializados, como a ABNT (Associação Brasileira de Normas Técnicas).</p><p>Elas servem para <strong>padronizar</strong> procedimentos, definir regras, diretrizes e características técnicas, garantindo que algo seja feito sempre da mesma forma, com segurança e qualidade.</p>` 
    },
    'module7': { 
        id: "module7", 
        title: "7. Legislação: Hierarquia da Brigada", 
        iconClass: "fas fa-gavel", 
        content: `<h4>7.1 O que é a Brigada de Incêndio?</h4><p>É um grupo organizado de pessoas treinadas e capacitadas para atuar na prevenção e em emergências de incêndio e pânico, dentro de uma edificação ou área preestabelecida.</p><h4>7.2 Quem Faz Parte da Brigada?</h4><p>A brigada é composta por diferentes funções, cada uma com sua responsabilidade:</p><ul><li><strong>Supervisor de Brigada:</strong> É o responsável técnico. Ele planeja, organiza, elabora o PPCI e coordena os treinamentos da brigada.</li><li><strong>Chefe de Brigada:</strong> Coordena e orienta as ações de emergência, garantindo que o PPCI seja colocado em prática pela equipe.</li><li><strong>Brigadista Particular:</strong> Profissional credenciado pelo CBMDF com dedicação exclusiva às tarefas da brigada no local onde foi contratado.</li><li><strong>Brigadista Voluntário:</strong> É um funcionário do local, treinado para atuar como apoio em emergências durante seu expediente de trabalho.</li></ul>` 
    },
    'module8': { 
        id: "module8", 
        title: "8. Legislação: Equipamentos e PPCI", 
        iconClass: "fas fa-shield-alt", 
        content: `<h4>8.1 Equipamentos de Proteção</h4><p>A segurança dos brigadistas e ocupantes do local é prioridade. Para isso, existem dois tipos de equipamentos:</p><ul><li><strong>EPI (Equipamento de Proteção Individual):</strong> Destinado a proteger a integridade física do brigadista contra riscos. Exemplos incluem luvas, botas, capacete, máscara de proteção respiratória e óculos de segurança.</li><li><strong>EPC (Equipamento de Proteção Coletiva):</strong> Protege todas as pessoas do ambiente, não apenas a brigada. Exemplos são extintores, alarme de incêndio, sinalização de emergência e portas corta-fogo.</li></ul><h4>8.2 PPCI (Plano de Prevenção Contra Incêndio e Pânico)</h4><p>O PPCI é um documento obrigatório que detalha o conjunto de ações e recursos para controlar uma situação de emergência. Ele deve ser elaborado pelo Supervisor da Brigada e precisa conter:</p><ul><li>Análise dos riscos da edificação.</li><li>Procedimentos de emergência e abandono.</li><li>Planejamento de simulados e treinamentos.</li><li>Detalhes sobre os equipamentos e sistemas de proteção.</li><li>Organograma da brigada.</li></ul>` 
    },
    'module9': { 
        id: "module9", 
        title: "9. Legislação: Ações da Brigada", 
        iconClass: "fas fa-tasks", 
        content: `<p>As atribuições da Brigada de Incêndio são divididas em duas frentes principais: prevenção e emergência.</p><h4>9.1 Ações de Prevenção</h4><p>Estas são as atribuições fundamentais da brigada no dia a dia, para evitar que emergências aconteçam:</p><ul><li>Fazer rondas periódicas para identificar riscos.</li><li>Inspecionar e solicitar manutenção dos sistemas de proteção (saídas de emergência, extintores, etc.).</li><li>Treinar os ocupantes do prédio para situações de emergência por meio de simulados e palestras.</li><li>Elaborar relatórios sobre irregularidades, riscos e atividades realizadas.</li><li>Implementar e manter o PPCI atualizado.</li></ul><h4>9.2 Ações de Emergência</h4><p>Quando uma emergência ocorre, a brigada deve agir rapidamente:</p><ul><li>Identificar a situação e acionar o CBMDF imediatamente.</li><li>Auxiliar no abandono seguro da edificação e controlar o pânico.</li><li>Prestar os primeiros socorros a feridos.</li><li>Combater o fogo em sua fase inicial com os recursos do local (extintores, mangueiras).</li><li>Cortar o fornecimento de energia e gás, se necessário.</li><li>Fornecer informações ao CBMDF na sua chegada.</li></ul>` 
    },
    'module10': { 
        id: "module10", 
        title: "10. Legislação: Uniformes e Avaliação", 
        iconClass: "fas fa-user-check", 
        content: `<h4>10.1 Uniforme dos Brigadistas</h4><p>A identificação correta da brigada é crucial durante uma emergência.</p><ul><li><strong>Brigadista Voluntário:</strong> O uso de uniforme é dispensado. A identificação pode ser feita por crachá ou, opcionalmente, por um colete com a inscrição "Brigadista Voluntário".</li><li><strong>Brigadista Particular:</strong> O uso de uniforme é obrigatório e exclusivo para o local de serviço. O uniforme não pode ser parecido com os do CBMDF ou de outras forças militares e deve ser aprovado previamente pelo CBMDF. Deve conter a descrição "Brigadista" nas costas e um crachá com foto e validade de 6 meses.</li></ul><h4>10.2 Avaliação do Brigadista Particular</h4><p>O CBMDF pode avaliar os brigadistas particulares a qualquer momento para garantir sua capacitação.</p><ul><li>A avaliação pode ser teórica e/ou prática.</li><li>Faltar a 2 convocações sem justificativa pode levar à suspensão.</li><li>Faltar a 3 convocações ou ser reprovado em 3 avaliações consecutivas resulta no descredenciamento.</li><li>O brigadista reprovado tem 30 dias para agendar uma nova avaliação.</li></ul>` 
    },
    'module11': { 
        id: "module11", 
        title: "11. Salvamento: Comunicação via Rádio", 
        iconClass: "fas fa-walkie-talkie", 
        content: `<h4>11.1 Código "Q"</h4><p>O Código Q é uma forma padronizada e internacional de comunicação por rádio, utilizada para transmitir informações de forma rápida e clara. Alguns códigos essenciais são:</p><ul><li><strong>QAP:</strong> Na escuta</li><li><strong>QRA:</strong> Nome (pessoa)</li><li><strong>QRF:</strong> Refeição (intervalo)</li><li><strong>QRL:</strong> Você está ocupado?</li><li><strong>QRU:</strong> Problema</li><li><strong>QRV:</strong> Estou à disposição</li><li><strong>QRX:</strong> Aguarde</li><li><strong>QSF:</strong> Você já realizou o salvamento?</li><li><strong>QSJ:</strong> Dinheiro</li><li><strong>QSL:</strong> Entendido</li><li><strong>QSM:</strong> Repita a mensagem</li><li><strong>QTA:</strong> Última forma</li><li><strong>QTC:</strong> Mensagem</li><li><strong>QTH:</strong> Endereço</li><li><strong>QTI:</strong> A Caminho</li><li><strong>QTO:</strong> Banheiro (tomar água)</li><li><strong>QTR:</strong> Hora certa</li><li><strong>QBU:</strong> Paciente com problemas Psiquiátricos</li><li><strong>VTR:</strong> Viatura (carro)</li><li><strong>TKS:</strong> Obrigado</li></ul><h4>11.2 Alfabeto Fonético</h4><p>Para evitar erros ao soletrar nomes ou placas, utiliza-se o Alfabeto Fonético Internacional, onde cada letra corresponde a uma palavra:</p><table class="custom-table"><thead><tr><th>Letra</th><th>Código</th><th>Letra</th><th>Código</th></tr></thead><tbody><tr><td>A</td><td>ALFA</td><td>N</td><td>NOVEMBER</td></tr><tr><td>B</td><td>BRAVO</td><td>O</td><td>OSCAR</td></tr><tr><td>C</td><td>CHARLIE</td><td>P</td><td>PAPA</td></tr><tr><td>D</td><td>DELTA</td><td>Q</td><td>QUEBEC</td></tr><tr><td>E</td><td>ECO</td><td>R</td><td>ROMEU</td></tr><tr><td>F</td><td>FOXTROT</td><td>S</td><td>SIERRA</td></tr><tr><td>G</td><td>GOLF</td><td>T</td><td>TANGO</td></tr><tr><td>H</td><td>HOTEL</td><td>U</td><td>UNIFORM</td></tr><tr><td>I</td><td>ÍNDIA</td><td>V</td><td>VICTOR</td></tr><tr><td>J</td><td>JULIET</td><td>W</td><td>WHISKEY</td></tr><tr><td>K</td><td>KILO</td><td>X</td><td>XRAY</td></tr><tr><td>L</td><td>LIMA</td><td>Y</td><td>YANKEE</td></tr><tr><td>M</td><td>MIKE</td><td>Z</td><td>ZULU</td></tr></tbody></table>` 
    },
    'module12': { 
        id: "module12", 
        title: "12. Salvamento: Fases e Classificações", 
        iconClass: "fas fa-life-ring", 
        content: `<h4>12.1 Fases do Salvamento</h4><p>O processo de salvamento é dividido em duas fases principais:</p><ul><li><strong>Busca:</strong> É a fase em que se procura por algo ou alguém que precisa ser salvo.</li><li><strong>Resgate:</strong> Consiste na retirada da vítima (pessoa ou bem) do local do incidente para um local seguro.</li></ul><h4>12.2 Classificações do Salvamento</h4><p>O salvamento pode ser classificado de acordo com o ambiente onde ocorre:</p><ul><li><strong>Aéreo:</strong> Realizado com uso ou auxílio de aeronaves, tais como helicópteros, aviões, drones.</li><li><strong>Vertical:</strong> Realizado em altura, utilizando técnicas de rapel e pontos fixos de ancoragem.</li><li><strong>Terrestre:</strong> Ocorre em contato direto com o solo.</li><li><strong>Aquático:</strong> Realizado em meio líquido, como rios, lagos ou mar, exigindo técnicas de remoção específicas.</li></ul>` 
    },
    'module13': { 
        id: "module13", 
        title: "13. Salvamento: Pontos da Operação", 
        iconClass: "fas fa-map-marked-alt", 
        content: `<h4>13.1 Etapas da Operação de Salvamento</h4><p>Uma operação de salvamento segue uma sequência de pontos para garantir a eficiência e a segurança:</p><ul><li><strong>Aviso:</strong> O reconhecimento do pedido de socorro, que pode vir por grito, apito, rádio ou telefone.</li><li><strong>Deslocamento:</strong> O percurso até o local da emergência. Este é um período de preparação, onde táticas são elaboradas e equipamentos são organizados.</li><li><strong>Reconhecimento:</strong> A análise da cena. É feita uma varredura total para observar riscos (fogo, fumaça), sinalizar o local e garantir a segurança da equipe antes do atendimento.</li><li><strong>Regresso:</strong> A saída do local do salvamento para um abrigo, se necessário.</li><li><strong>Abrigo:</strong> O ponto de encontro seguro para a equipe de salvamento e para onde as vítimas e bens resgatados são levados. A primeira equipe a chegar organiza os materiais enquanto a próxima assume o atendimento.</li></ul>` 
    },
    'module14': { 
        id: "module14", 
        title: "14. Salvamento: Múltiplas Vítimas", 
        iconClass: "fas fa-users", 
        content: `<p>Existem situações de grande escala que exigem uma compreensão clara de sua magnitude para a correta alocação de recursos.</p><ul><li><strong>Desastre:</strong> Ocorrências onde o número de vítimas excede a capacidade de resposta do serviço de salvamento local.</li><li><strong>Catástrofe (Tragédia):</strong> Um acontecimento funesto (fatal) de grande desgraça que atinge muitas pessoas.</li><li><strong>Calamidade:</strong> Uma série de desastres que lança um grande número de pessoas em situação de desamparo, onde até o poder público perde a capacidade de resposta.</li></ul><h4>Tipos de Ocorrência</h4><ul><li><strong>Soterramento:</strong> Queda de terra, pedras ou outras substâncias sobre pessoas ou edificações, geralmente devido a chuvas.</li><li><strong>Desabamento:</strong> Queda de estruturas com teto, geralmente devido a falhas estruturais, acidentes naturais ou atos de terrorismo.</li></ul>` 
    },
    'module15': { 
        id: "module15", 
        title: "15. Salvamento: Noções de Evacuação", 
        iconClass: "fas fa-door-open", 
        content: `<h4>15.1 Procedimentos de Evacuação</h4><p>Em uma evacuação, a calma e a organização são essenciais. Siga estes passos:</p><ul><li>Reúna e acalme as vítimas. Peça ajuda às pessoas mais tranquilas.</li><li>Improvise EPIs com cobertores, toalhas ou panos molhados.</li><li>Desça sempre pelas escadas de emergência, nunca suba, a menos que orientado pelo CBM.</li><li>Oriente as pessoas a respirarem de forma curta e rápida.</li><li>Se não houver visibilidade, mande todos se abaixarem.</li><li>Desloque-se em colunas (simples ou dupla), com um brigadista ("xerife") na frente e outro ("cerra fila") no final.</li><li>Feche todas as portas pelas quais passar, sem trancá-las.</li></ul><h4>15.2 Tipos de Locomoção e Transporte</h4><p>Existem diferentes formas de se mover e transportar vítimas:</p><ul><li><strong>Locomoção:</strong> Em pé, 3 Pontas e Rastejo.</li><li><strong>Transporte de Vítimas:</strong> Cadeirinha, Mochila, Arrasto, Elevação Dupla, Transporte de Noiva e Transporte de Bombeiro.</li></ul>` 
    },
    'module16': { 
        id: "module16", 
        title: "16. PCI: Fundamentos e Legislação", 
        iconClass: "fas fa-book-reader", 
        content: `<h4>16.1 Introdução à PCI</h4><p>O estudo da Prevenção e Combate a Incêndio (PCI) baseia-se na compreensão aprofundada do fogo, seus componentes e fenômenos. É mandatório que o profissional domine as terminologias para diferenciar fogo, incêndio, queima e combustão.</p>
            
            <div class="key-concept">
                <h5>16.2 Legislação Aplicada (NR-23)</h5>
                <p>A NR-23 estabelece as medidas de proteção contra incêndio em todos os locais de trabalho. A norma determina que os locais de trabalho devem ter:</p>
                <ul>
                    <li>Proteção contra incêndio.</li>
                    <li>Saídas de emergência suficientes.</li>
                    <li>Equipamentos para combate inicial.</li>
                    <li>Pessoal treinado.</li>
                </ul>
            </div>

            <h4>16.3 Fogo vs. Incêndio</h4>
            <div class="key-concept">
                <h5>Fogo</h5>
                <p>É uma reação de combustão controlada, usada como ferramenta (ex: a chama de um fogão).</p>
            </div>
            <div class="key-concept">
                <h5>Incêndio</h5>
                <p>É o fogo que foge ao controle humano, causando danos e riscos.</p>
            </div>` 
    },
    'module17': { 
        id: "module17", 
        title: "17. PCI: A Ciência do Fogo", 
        iconClass: "fas fa-atom", 
        content: `
            <div class="key-concept">
                <h5>17.1 Tetraedro do Fogo</h5>
                <p>Para que a combustão ocorra e se sustente, quatro elementos são indispensáveis:</p>
                <ul>
                    <li><strong>Calor:</strong> A energia que inicia a reação (ex: faísca, chama, atrito).</li>
                    <li><strong>Combustível:</strong> Material que queima (ex: madeira, papel, gasolina, gás). A quantidade total é chamada de "Carga de Incêndio".</li>
                    <li><strong>Comburente:</strong> O agente oxidante que reage com o combustível (ex: oxigênio do ar).</li>
                    <li><strong>Reação em Cadeia:</strong> O processo autossustentável que alimenta o ciclo de combustão.</li>
                </ul>
            </div>
            <div class="key-concept">
                <h5>17.2 Formas e Produtos da Combustão</h5>
                <p><strong>Formas:</strong> Completa (com oxigênio suficiente, >16%) e Incompleta (com pouco oxigênio, <16%).</p>
                <p><strong>Produtos:</strong> Gases e Fumaça. A cor da fumaça indica o material em queima:</p>
                <ul>
                    <li><strong>Branca/Cinza Clara:</strong> Madeira, papel, tecidos.</li>
                    <li><strong>Negra/Cinza Escura:</strong> Derivados de petróleo (plásticos, pneus).</li>
                    <li><strong>Amarela/Vermelha:</strong> Produtos químicos com gases tóxicos.</li>
                </ul>
            </div>` 
    },
    'module18': { 
        id: "module18", 
        title: "18. PCI: Propagação e Pontos de Inflamabilidade", 
        iconClass: "fas fa-wind", 
        content: `
            <div class="key-concept">
                <h5>18.1 Pontos de Inflamabilidade</h5>
                <ul>
                    <li><strong>Ponto de Fulgor:</strong> Temperatura mínima para liberar vapores que se inflamam com fonte externa, mas a chama <strong>NÃO</strong> se mantém.</li>
                    <li><strong>Ponto de Combustão:</strong> Temperatura em que os vapores se inflamam com fonte externa e a chama <strong>SE MANTÉM</strong>.</li>
                    <li><strong>Ponto de Ignição:</strong> Temperatura em que os gases entram em combustão <strong>ESPONTANEAMENTE</strong>, sem fonte externa.</li>
                </ul>
            </div>
            <div class="key-concept">
                <h5>18.2 Métodos de Transmissão de Calor</h5>
                <p>O fogo se propaga por:</p>
                <ul>
                    <li><strong>Condução:</strong> Transferência por contato direto (ex: através de uma viga de metal).</li>
                    <li><strong>Convecção:</strong> Transferência por massas de ar e fumaça aquecida, que sobem e iniciam fogo em locais mais altos.</li>
                    <li><strong>Irradiação:</strong> Transferência por ondas de calor, que podem incendiar objetos à distância, sem contato físico.</li>
                </ul>
            </div>` 
    },
    'module19': { 
        id: "module19", 
        title: "19. PCI: Fenômenos e Tipos de Incêndio", 
        iconClass: "fas fa-bomb", 
        content: `
            <div class="key-concept">
                <h5>19.1 Fenômenos da Combustão</h5>
                <ul>
                    <li><strong>Explosão:</strong> É a queima de gases (ou partículas sólidas), em altíssima velocidade, geralmente em locais confinados, com grande liberação de energia e deslocamento de ar.</li>
                    <li><strong>Flashover:</strong> Inflamação súbita e generalizada de todo o ambiente, quando todas as superfícies atingem sua temperatura de ignição.</li>
                    <li><strong>Backdraft:</strong> Explosão causada pela entrada repentina de ar (oxigênio) em um ambiente confinado e cheio de gases superaquecidos.</li>
                    <li><strong>Boilover:</strong> Quando um recipiente com líquidos inflamáveis está em chamas e jogamos água, esta água vai para o fundo do recipiente e quando ela ferve, seu volume aumenta até 1700x e expulsa o líquido inflamável do recipiente.</li>
                    <li><strong>Rollover:</strong> Ignição dos gases acumulados no teto, que "rolam" em chamas pela camada de fumaça.</li>
                    <li><strong>BLEVE:</strong> Acontece quando um líquido em ebulição (fervendo) dentro de um recipiente pressurizado (como um botijão ou tanque) se rompe, liberando o vapor em expansão que explode e gera uma bola de fogo.</li>
                </ul>
            </div>
            <div class="key-concept">
                <h5>19.2 Tipos de Incêndio</h5>
                <ul>
                    <li><strong>Princípio:</strong> Fogo em objeto isolado (lixeira).</li>
                    <li><strong>Pequeno:</strong> Fogo em um móvel (sofá).</li>
                    <li><strong>Médio:</strong> Fogo em um cômodo inteiro.</li>
                    <li><strong>Grande:</strong> Fogo em toda a edificação.</li>
                    <li><strong>Extraordinário:</strong> Incêndios de proporções extremas (florestais).</li>
                </ul>
            </div>` 
    },
    'module20': { 
        id: "module20", 
        title: "20. PCI: Métodos de Extinção e Classes de Incêndio", 
        iconClass: "fas fa-fire-extinguisher", 
        content: `
            <div class="key-concept">
                <h5>20.1 Métodos de Extinção</h5>
                <p>Extinguir um incêndio significa quebrar o Tetraedro do Fogo:</p>
                <ul>
                    <li><strong>Resfriamento:</strong> Remove o <strong>CALOR</strong> (agente: água).</li>
                    <li><strong>Abafamento:</strong> Remove o <strong>COMBURENTE</strong> (oxigênio) (agentes: CO2, PQS, espuma).</li>
                    <li><strong>Isolamento:</strong> Remove o <strong>COMBUSTÍVEL</strong> (retirada do material que queima).</li>
                </ul>
            </div>
            <div class="key-concept">
                <h5>20.2 Classes de Incêndio</h5>
                <p>A escolha do extintor depende da classe do incêndio:</p>
                <ul>
                    <li><strong>Classe A:</strong> Em sólidos que deixam resíduos (madeira, papel). Método: Resfriamento (água).</li>
                    <li><strong>Classe B:</strong> Em líquidos inflamáveis e gases. Método: Abafamento.</li>
                    <li><strong>Classe C:</strong> Em equipamentos elétricos energizados. Método: Abafamento (agente não condutor).</li>
                    <li><strong>Classe D:</strong> Em metais pirofóricos (magnésio, sódio). Método: Abafamento com pós especiais.</li>
                    <li><strong>Classe K:</strong> Em óleos e gorduras de cozinha.</li>
                </ul>
            </div>` 
    },
    'module21': { 
        id: "module21", 
        title: "21. PCI: Causas do Incêndio", 
        iconClass: "fas fa-fire-alt", 
        content: `
            <h4>21.1 Causas do Incêndio</h4>
            <p>Os incêndios podem começar de três formas principais, de acordo com sua origem:</p>
            
            <div class="key-concept">
                <h5>1ª – Causas Naturais</h5>
                <p>São incêndios que acontecem sem a ação do homem, provocados por fenômenos da natureza.</p>
                <p><strong>Exemplos:</strong> raios, erupções vulcânicas, calor intenso do sol, terremotos.</p>
                <p><strong>Resumo:</strong> o fogo surge naturalmente, sem intervenção humana.</p>
            </div>
            
            <div class="key-concept">
                <h5>2ª – Causas Acidentais</h5>
                <p>Ocorrem por descuidos, falhas ou acidentes durante atividades humanas.</p>
                <p><strong>Exemplos:</strong> curto-circuito, vazamento de gás, vela acesa, solda, faíscas ou superaquecimento de equipamentos.</p>
                <p><strong>Resumo:</strong> o incêndio não foi intencional, mas aconteceu por erro ou falta de cuidado.</p>
            </div>
            
            <div class="key-concept">
                <h5>3ª – Causas Criminosas</h5>
                <p>São incêndios intencionais, provocados de propósito por uma ou mais pessoas.</p>
                <p><strong>Exemplos:</strong> fogo causado por vingança, inveja, fraude em seguro, ou motivos psicológicos.</p>
                <p><strong>Resumo:</strong> o fogo é provocado com intenção de causar dano ou prejuízo.</p>
            </div>` 
    },
    'module22': { 
        id: "module22", 
        title: "22. PCI: SCIP (Sistema Contra Incêndio)", 
        iconClass: "fas fa-broadcast-tower", 
        content: `
            <h4>22.1 Introdução ao SCIP</h4>
            <p>O SCIP (Sistema Contra Incêndio e Pânico) é o conjunto de equipamentos, dispositivos e medidas de segurança instalados em uma edificação com o objetivo de detectar, combater e controlar princípios de incêndio, além de garantir a evacuação segura das pessoas.</p>
            <p>Ele deve estar em conformidade com as normas técnicas e legislações vigentes, como as NBRs da ABNT e as Instruções Técnicas do Corpo de Bombeiros.</p>
            
            <h4>22.2 Componentes Principais do SCIP</h4>
            
            <div class="key-concept">
                <h5>22.2.1 Extintor de Incêndio</h5>
                <p><strong>Função:</strong> Equipamento de primeira resposta, portátil, destinado ao combate imediato e inicial de focos de incêndio.</p>
                <p><strong>Características:</strong> Contém diferentes agentes extintores para classes de fogo específicas (A: Papel/Madeira, B: Líquidos Inflamáveis, C: Equipamentos Elétricos, K: Cozinha). Os tipos mais comuns são Água Pressurizada, Pó Químico Seco (BC ou ABC) e Dióxido de Carbono (CO2).</p>
            </div>
            
            <div class="key-concept">
                <h5>22.2.2 Mangueiras (Sistema de Hidrantes)</h5>
                <p><strong>Função:</strong> Conduzir a água sob pressão da rede de hidrantes até o foco do incêndio.</p>
                <p><strong>Características:</strong> Ficam acondicionadas em abrigos de mangueira (caixas vermelhas), geralmente acompanhadas de esguicho (bico) e chave de mangueira. Existem diferentes tipos (ex: Tipo 1, 2, 3) com diâmetros e resistências variadas.</p>
            </div>

            <div class="key-concept">
                <h5>22.2.3 Sprinklers (Chuveiros Automáticos)</h5>
                <p><strong>Função:</strong> Sistema de supressão de incêndio automático. É a forma mais eficaz de controlar um incêndio em seu estágio inicial.</p>
                <p><strong>Características:</strong> Consiste em uma rede de tubulações pressurizadas instalada no teto. Cada sprinkler (chuveiro) possui um bulbo termossensível que se rompe com o calor, liberando água individualmente apenas sobre a área afetada pelo fogo.</p>
            </div>

            <div class="key-concept">
                <h5>22.2.4 Hidrantes (Pontos de Tomada de Água)</h5>
                <p><strong>Função:</strong> Fornecer um ponto de conexão com alto volume de água para as mangueiras, permitindo o combate ao incêndio por equipes treinadas (Brigada de Incêndio ou Corpo de Bombeiros).</p>
                <p><strong>Características:</strong> Podem ser internos (em abrigos nas paredes) ou externos (de coluna, no solo). São alimentados pela reserva de água (RTI) e pressurizados pela Casa de Bombas.</p>
            </div>

            <div class="key-concept">
                <h5>22.2.5 Detectores Automáticos</h5>
                <p><strong>Função:</strong> Identificar sinais precoces de incêndio (fumaça, calor, chama) e enviar um sinal elétrico para a Central de Alarme.</p>
                <p><strong>Características:</strong> Os tipos mais comuns são: Detectores de Fumaça (Ópticos ou Iônicos), Detectores Térmicos (Termovelocimétricos ou de Temperatura Fixa) e Detectores de Chama (UV/IR).</p>
            </div>

            <div class="key-concept">
                <h5>22.2.6 Alarmes (Avisadores)</h5>
                <p><strong>Função:</strong> Alertar todos os ocupantes da edificação sobre a emergência, indicando a necessidade de evacuação.</p>
                <p><strong>Características:</strong> Podem ser Avisadores Sonoros (sirenes) ou Avisadores Visuais (luzes estroboscópicas).</p>
            </div>
            
            <div class="key-concept">
                <h5>22.2.7 Central de Alarmes</h5>
                <p><strong>Função:</strong> O "cérebro" do sistema. Recebe sinais dos detectores e acionadores manuais (botoeiras).</p>
                <p><strong>Características:</strong> Identifica o local do alarme, aciona sirenes/luzes e pode comandar outros sistemas (desligar ar-condicionado, liberar portas, etc.).</p>
            </div>` 
    },
    'module23': { 
        id: "module23", 
        title: "23. PCI: Sinalização de Emergência", 
        iconClass: "fas fa-sign-out-alt", 
        content: `
            <h4>23.1 Introdução à Sinalização de Emergência</h4>
            <p>A Sinalização de Emergência é um sistema passivo de proteção, vital para a orientação e segurança das pessoas durante uma evacuação. Seu objetivo é indicar, de forma clara e inequívoca, as rotas de fuga, as saídas de emergência, a localização dos equipamentos de combate (como extintores e hidrantes) e alertar sobre riscos específicos, mesmo na ausência de energia elétrica.</p>
            
            <h4>23.2 Componentes da Sinalização de Emergência</h4>
            
            <div class="key-concept">
                <h5>23.2.1 Placas de Sinalização (Fotoluminescentes)</h5>
                <p><strong>Função:</strong> Comunicar visualmente as ações necessárias, direções ou localizações.</p>
                <p><strong>Características:</strong> Devem ser fotoluminescentes ("brilham no escuro") para garantir visibilidade em blecautes. Categorias:</p>
                <ul>
                    <li><strong>Orientação e Salvamento (Verde):</strong> Indicam rotas de fuga, saídas, escadas, direções (setas).</li>
                    <li><strong>Equipamentos (Vermelha):</strong> Mostram a localização de extintores, hidrantes, alarmes, etc.</li>
                    <li><strong>Proibição (Circular, Vermelha):</strong> Indicam ações proibidas (ex: "Proibido Fumar").</li>
                    <li><strong>Alerta (Triangular, Amarela):</strong> Alertam para riscos (ex: "Risco Elétrico").</li>
                </ul>
            </div>

            <div class="key-concept">
                <h5>23.2.2 Luzes de Emergência (Iluminação de Emergência)</h5>
                <p><strong>Função:</strong> Garantir iluminação mínima na falta de energia, permitindo localizar rotas de fuga.</p>
                <p><strong>Características:</strong> Ativam-se automaticamente. Tipos:</p>
                <ul>
                    <li><strong>Iluminação de Aclaramento (Luminárias/Blocos):</strong> Clareia o ambiente geral (corredores, halls).</li>
                    <li><strong>Iluminação de Balizamento (Sinalização):</strong> Destaca a sinalização das rotas de fuga (placas de saída, degraus).</li>
                </ul>
            </div>

            <div class="key-concept">
                <h5>23.2.3 Sinalização de Piso</h5>
                <p><strong>Função:</strong> Complementar placas onde a visão superior é obstruída (fumaça) ou em áreas amplas.</p>
                <p><strong>Características:</strong> Fitas ou pinturas (fotoluminescentes) no chão, indicando o caminho contínuo até a saída.</p>
            </div>` 
    },
    'module24': { 
        id: "module24", 
        title: "24. PCI: Casa de Bombas", 
        iconClass: "fas fa-water", 
        content: `
            <h4>24.1 Introdução à Casa de Bombas</h4>
            <p>A Casa de Bombas é o coração do sistema de combate a incêndio por água (hidrantes e sprinklers). Ela é responsável por garantir a pressurização e o abastecimento de água com vazão e pressão adequadas nas tubulações durante um incêndio, mesmo que haja falha no fornecimento de energia elétrica.</p>
            
            <h4>24.2 Componentes Principais</h4>
            
            <div class="key-concept">
                <h5>24.2.1 Bombas Principal (01) e Reserva (02)</h5>
                <p><strong>Função:</strong> A Bomba 01 (elétrica) é a principal. A Bomba 02 (elétrica ou diesel) entra automaticamente se a 01 falhar ou a demanda for alta.</p>
                <p><strong>Características:</strong> Alta capacidade de fluxo e pressão, acionadas por pressostatos.</p>
            </div>
            
            <div class="key-concept">
                <h5>24.2.2 Bomba Jockey</h5>
                <p><strong>Função:</strong> Manter a pressão normal no sistema, compensando pequenas perdas.</p>
                <p><strong>Características:</strong> Baixa vazão, alta pressão. Evita acionamentos desnecessários das bombas principais.</p>
            </div>
            
            <div class="key-concept">
                <h5>24.2.3 Bomba Diesel</h5>
                <p><strong>Função:</strong> Serve como bomba principal ou reserva, operando independentemente da rede elétrica.</p>
                <p><strong>Características:</strong> Garante a operacionalidade do sistema em caso de blecaute.</p>
            </div>

            <div class="key-concept">
                <h5>24.3 Controle e Medição</h5>
                <ul>
                    <li><strong>Registros:</strong> São as válvulas (torneiras industriais) que controlam o fluxo de água, permitindo o isolamento de partes do sistema para manutenção ou direcionando a água durante uma emergência.</li>
                    <li><strong>Pressostatos:</strong> São os "interruptores" automáticos do sistema. Eles monitoram a pressão da água na tubulação. Cada bomba (Jockey, Principal, Reserva) tem seu próprio pressostato, calibrado para ligar em uma pressão específica.</li>
                    <li><strong>Kgf/cm² (Pressão):</strong> Sigla para "Quilograma-força por centímetro quadrado". É a unidade de medida usada para aferir a pressão da água no sistema (ex: 7 Kgf/cm²). As normas exigem uma pressão mínima nos pontos de hidrante para garantir a eficácia do combate.</li>
                </ul>
            </div>

            <div class="key-concept">
                <h5>24.4 Operação e Testes</h5>
                <p>A equipe de brigada deve realizar inspeções visuais diárias e testes de funcionamento (geralmente semanais ou mensais) nas bombas. Isso envolve ligar as bombas (em modo manual ou automático) e verificar se elas atingem a pressão correta, se não há vazamentos e se o motor (elétrico ou diesel) está em boas condições.</p>
            </div>` 
    },
    'module25': { 
        id: "module25", 
        title: "25. PCI: Equipamentos, Manutenção e Atribuições", 
        iconClass: "fas fa-check-circle", 
        content: `
            <div class="key-concept">
                <h5>25.1 Equipamentos de Combate</h5>
                <ul>
                    <li><strong>Extintores Portáteis:</strong> Para princípios de incêndio. Tipos: Água (AP), Gás Carbônico (CO2), Pó Químico Seco (PQS), Espuma Mecânica.</li>
                    <li><strong>Sistema de Hidrantes:</strong> Geralmente contém 2 lances de mangueira de 15m, esguicho e chave Storz. Mangueiras Tipo 1 (residencial) e Tipo 2 (industrial).</li>
                </ul>
            </div>
            <div class="key-concept">
                <h5>25.2 Manutenção de Extintores</h5>
                <ul>
                    <li><strong>Nível 1:</strong> Inspeção visual periódica (pela brigada).</li>
                    <li><strong>Nível 2:</strong> Manutenção e recarga anual (por empresa credenciada).</li>
                    <li><strong>Nível 3:</strong> Teste hidrostático do cilindro a cada 5 anos.</li>
                </ul>
            </div>
            <div class="key-concept">
                <h5>25.3 Atribuições da Brigada</h5>
                <p>O brigadista deve conhecer os riscos, combater princípios de incêndio, acionar o CBM, promover a evacuação segura e agir de forma rápida e assertiva.</p>
            </div>` 
    },
      /* === ATUALIZAÇÃO data.js (MÓDULOS 26-37 e 45) - CONTEÚDO LIMPO === */

    'module26': { 
        id: "module26", 
        title: "26. APH: Fundamentos e Aspectos Legais", 
        iconClass: "fas fa-file-medical", 
        content: `<h4>26.1 Definições em Atendimento Pré-Hospitalar (APH)</h4><p>O APH compreende o socorro prestado fora do ambiente hospitalar. É crucial diferenciar os seguintes termos:</p><ul><li>Urgência: Situação que não apresenta risco iminente à vida.</li><li>Emergência: Situação que apresenta risco iminente à vida.</li><li>Suporte Básico de Vida (SBV): Conjunto de procedimentos não invasivos.</li><li>Suporte Avançado de Vida (SAV): Conjunto de procedimentos invasivos, realizados por equipe médica.</li></ul><h4>26.2 Aspectos Legais: Omissão de Socorro</h4><p>Conforme o Artigo 135 do Código Penal, a omissão de socorro é crime. Todo cidadão tem a obrigação legal de prestar auxílio, o que pode ser feito de três maneiras: atender a vítima, auxiliar quem já está prestando socorro ou solicitar auxílio de serviços de emergência.</p><div class="key-concept"><h5>Exceções da Lei (para atendimento direto)</h5><p>Menores de 16 anos, maiores de 65 anos, gestantes a partir do terceiro mês e pessoas com deficiências incapacitantes.</p></div>
            <h4>26.3 Números de Emergência</h4>
            <p>Acionar o recurso correto é vital para um atendimento rápido e eficaz.</p>
            <ul>
                <li>CBMDF (Bombeiros): <strong>193</strong></li>
                <li>SAMU (Atendimento Clínico): <strong>192</strong></li>
                <li>Polícia Militar (PM): <strong>190</strong></li>
                <li>Polícia Civil (PC): <strong>197</strong></li>
                <li>Polícia Rodoviária Federal (PRF): <strong>191</strong></li>
                <li>Neoenergia (Energia Elétrica): <strong>116</strong></li>
                <li>CAESB (Água e Esgoto): <strong>115</strong></li>
            </ul>` 
    },
    'module27': { 
        id: "module27", 
        title: "27. APH: Anatomia e Fisiologia", 
        iconClass: "fas fa-user-md", 
        content: `<h4>27.1 Definições</h4>
            <div class="key-concept">
                <h5>Anatomia</h5>
                <p>Ciência que estuda a estrutura física dos seres vivos, incluindo a localização, disposição e interação dos órgãos internos e externos.</p>
                <p><strong>Exemplo Prático:</strong> Estudar anatomia é saber que o osso Fêmur está localizado na coxa, e que o coração está localizado no centro do tórax, ligeiramente à esquerda.</p>
            </div>
            <div class="key-concept">
                <h5>Fisiologia</h5>
                <p>Estudo do funcionamento dos sistemas que compõem o organismo humano.</p>
                <p><strong>Exemplo Prático:</strong> Estudar fisiologia é entender *como* o coração bombeia o sangue (sístole/diástole) ou *como* os pulmões realizam a troca de oxigênio.</p>
            </div>
            <h4>27.2 Posição e Terminologia Anatômica</h4><p>Posição Anatômica: Posição padrão de referência para a descrição e localização de estruturas anatômicas.</p>
            <h5>Termos de Posição e Direção:</h5>
            <ul>
                <li>Superior: Mais próximo da cabeça (ex: o tórax é superior ao abdômen).</li>
                <li>Inferior: Mais próximo dos pés (ex: o joelho é inferior ao quadril).</li>
                <li>Anterior (Ventral): A frente do corpo (ex: o nariz é anterior à nuca).</li>
                <li>Posterior (Dorsal): A parte de trás do corpo (ex: a coluna é posterior ao esterno).</li>
                <li>Proximal: Próximo à raiz de um membro (ex: o ombro é proximal ao cotovelo).</li>
                <li>Médio: Região próxima a uma articulação.</li>
                <li>Distal: Mais distante da raiz de um membro (ex: o pé é distal ao joelho).</li>
            </ul>
            <h5>Decúbito:</h5>
            <p>Refere-se à posição de uma pessoa deitada.</p>
            <ul>
                <li>Decúbito Dorsal: Deitado com o dorso no solo (barriga para cima).</li>
                <li>Decúbito Ventral: Deitado com o ventre no solo (barriga para baixo).</li>
                <li>Decúbito Lateral: Deitado de lado.</li>
            </ul>` 
    },
    'module28': { 
        id: "module28", 
        title: "28. APH: Sistemas do Corpo Humano", 
        iconClass: "fas fa-heart", 
        content: `<h4>28.1 Sistemas do Corpo Humano</h4>
            <ul>
                <li><strong>Sistema Tegumentar:</strong> Composto pela pele, que se divide em três camadas principais: Epiderme, Derme e Hipoderme. A pele é o maior órgão do corpo e serve como a principal barreira de proteção contra infecções, regula a temperatura e permite a sensibilidade (tato, dor, calor).</li>
                
                <li><strong>Sistema Esquelético:</strong> Conjunto de ossos e cartilagens que fornece sustentação, protege órgãos vitais (ex: o crânio protege o cérebro; as costelas protegem coração e pulmões) e produz células sanguíneas (hematopoiese). Divide-se em:
                    <ul>
                        <li>Esqueleto Axial: Crânio, coluna vertebral, costelas e esterno.</li>
                        <li>Esqueleto Apendicular: Membros superiores (MMSS) e inferiores (MMII).</li>
                    </ul>
                </li>
                
                <li><strong>Sistema Circulatório:</strong> Formado pelo coração e vasos sanguíneos.
                    <ul>
                        <li>Coração: Órgão responsável por bombear o sangue. Seus movimentos são: Diástole (dilatação/relaxamento, quando se enche de sangue) e Sístole (contração, quando ejeta o sangue).</li>
                        <li>Sangue: Desempenha funções vitais. É composto por: Plasma (parte líquida), Hemácias (transportam oxigênio), Leucócitos (defesa/combate a infecções) e Plaquetas (coagulação).</li>
                        <li>Pressão Arterial (P.A.): Medida em mmHg, representa a pressão do sangue. O valor maior corresponde à Sístole (pressão máxima) e o menor, à Diástole (pressão mínima).</li>
                    </ul>
                </li>
            </ul>` 
    },
    'module29': { 
        id: "module29", 
        title: "29. APH: Avaliação Geral do Paciente (AGP)", 
        iconClass: "fas fa-tasks", 
        content: `<h4>29.1 Conceito de AGP</h4>
            <p>É um conjunto de ações organizado em fases seguindo a prioridade de atendimento em um paciente. Funciona como um roteiro de atendimento.</p>
            
            <h4>29.2 Fases da AGP</h4>
            <p>O atendimento é dividido em 5 fases principais:</p>
            <ol>
                <li><strong>Avaliação da Cena</strong></li>
                <li><strong>Avaliação Inicial</strong></li>
                <li><strong>Avaliação Dirigida</strong></li>
                <li><strong>Exame Físico Detalhado</strong></li>
                <li><strong>Avaliação Continuada</strong></li>
            </ol>
            
            <h4>29.3 Objetivos de Cada Fase</h4>
            <ul>
                <li><strong>Avaliação da cena:</strong> O objetivo principal é a Segurança.</li>
                <li><strong>Avaliação inicial:</strong> Definir o aspecto geral do paciente (se é Trauma ou Clínico).</li>
                <li><strong>Avaliação dirigida:</strong> Focar na queixa principal do paciente (fluxo maior da dor).</li>
                <li><strong>Exame físico detalhado:</strong> Procurar por lesões ocultas.</li>
                <li><strong>Avaliação continuada:</strong> Reavaliar o paciente, muitas vezes feito pelo recurso adicional (S.A.V.).</li>
            </ul>

            <h4>29.4 Avaliação da Cena: A Prioridade de Segurança</h4>
            <p>A cena precisa ser segura, seguindo esta ordem de prioridade:</p>
            <ol>
                <li>Segurança para MIM (o socorrista).</li>
                <li>Segurança para MINHA EQUIPE.</li>
                <li>Segurança para TERCEIROS (curiosos).</li>
                <li>E por último, segurança para o PACIENTE.</li>
            </ol>

            <h4>29.5 Acionando Recursos Adicionais</h4>
            <p>Deve-se acionar o recurso correto, passando informações claras para que cheguem preparados.</p>
            <ul>
                <li><strong>SAMU (192):</strong> Quando acionar? (Geralmente emergências clínicas).</li>
                <li><strong>CBMDF (193):</strong> Por quê? (Geralmente trauma, resgate, incêndio).</li>
                <li><strong>Polícia (190/197):</strong> Para quê? (Garantir a segurança da cena, registrar ocorrência).</li>
            </ul>` 
    },
    'module30': { 
        id: "module30", 
        title: "30. APH: Avaliação Inicial e Detalhada", 
        iconClass: "fas fa-clipboard-check", 
        content: `<h4>30.1 Avaliação Inicial (Pós-Cena)</h4>
            <p>Esta fase foca nos riscos iminentes à vida.</p>
            <ul>
                <li><strong>A.V.D.I. e se Identificar:</strong> Avaliar o nível de consciência. (A-Alerta, V-Estímulo Verbal, D-Estímulo de Dor, I-Inconsciente).</li>
                <li><strong>Abertura das vias aéreas:</strong> Sempre isolando a coluna cervical em casos de trauma.</li>
                <li><strong>Aplicar o colar cervical:</strong> Caso não haja lesão no pescoço que impeça.</li>
                <li><strong>Verificar qualidade da respiração:</strong> Identificar se está Eupneia (normal), Gasping (agônica) ou Apneia (ausente).</li>
                <li><strong>Verificar Pulso:</strong> Contar por 30 ou 60 segundos.</li>
                <li><strong>Verificar escala C.I.P.E.:</strong> (Crítico, Instável, Potencialmente Instável, Estável).</li>
            </ul>

            <h4>30.2 Avaliação Dirigida</h4>
            <p>Focada na queixa principal da vítima.</p>
            <ul>
                <li><strong>Anamnese:</strong> Entrevista com o paciente para entender o ocorrido.</li>
                <li><strong>Verificar os Sinais Vitais:</strong> Pulso, Perfusão, Respiração e Temperatura.</li>
                <li><strong>Exame localizado:</strong> Examinar o local exato da maior queixa de dor.</li>
            </ul>

            <h4>30.3 Exame Físico Detalhado (Busca por lesões ocultas)</h4>
            <p>Uma varredura completa da cabeça aos pés:</p>
            <ul>
                <li><strong>Cabeça:</strong> Crânio e Pescoço.</li>
                <li><strong>Ombro:</strong> Anterior e Lateral do Tórax (Clavícula e Escápula).</li>
                <li><strong>Tronco:</strong> Esterno, Costelas, Quadrante Abdominal, Cintura Pélvica e Genitália.</li>
                <li><strong>Membros (MMII e MMSS):</strong> Checar P.P.S.M. (Pulso, Perfusão, Sensibilidade, Motricidade).</li>
                <li><strong>Região Dorsal:</strong> Costa, Glúteo, Posterior dos MMII.</li>
            </ul>
            
            <h4>30.4 Avaliação Continuada</h4>
            <p>É a reavaliação constante do paciente, muitas vezes realizada pelo Suporte Avançado (SAV).</p>
            <ul>
                <li><strong>Trauma:</strong> Reavaliar Exame rápido, Sinais Vitais, Anamnese.</li>
                <li><strong>Clínico:</strong> Reavaliar Anamnese, Sinais Vitais, Exame Rápido.</li>
            </ul>` 
    },
    'module31': { 
        id: "module31", 
        title: "31. APH: RCP e Cadeia de Sobrevivência", 
        iconClass: "fas fa-heartbeat", 
        content: `<h4>31.1 Parada Cardiorrespiratória (PCR)</h4>
            <p>Definição: Supressão súbita e inesperada dos batimentos cardíacos. Na PCR, não existe respiração e nem pulsação.</p>
            <h5>Sinais de PCR:</h5>
            <ul>
                <li>Inconsciência;</li>
                <li>Apneia (ausência de respiração) ou Gasping (respiração agônica, involuntária);</li>
                <li>Ausência de circulação/perfusão (sem pulso central);</li>
                <li>Cianose (pele azul-arroxeada) pode estar presente.</li>
            </ul>
            
            <h4>31.2 Reanimação Cardiopulmonar (RCP)</h4>
            <p>O protocolo de SBV indica 5 ciclos de 30 compressões para 2 ventilações (30x2).</p>
            <div class="key-concept">
                <h5>RCP de Alta Qualidade:</h5>
                <ul>
                    <li>Permitir o retorno total do tórax entre as compressões;</li>
                    <li>Minimizar interrupções nas compressões;</li>
                    <li>Alternar os socorristas (quem comprime) a cada 5 ciclos (ou 2 minutos) para evitar exaustão.</li>
                </ul>
            </div>

            <h4>31.3 Cadeia de Sobrevivência</h4>
            <p>Sequência de 5 elos fundamentais para a sobrevida em casos de PCR:</p>
            <ol>
                <li><strong>Acesso Precoce:</strong> Identificar a PCR e pedir ajuda (Ligar para 192/193).</li>
                <li><strong>RCP Precoce:</strong> Iniciar compressões e ventilações imediatamente.</li>
                <li><strong>Desfibrilação Precoce:</strong> Uso do Desfibrilador Externo Automático (DEA).</li>
                <li><strong>Suporte Avançado Rápido:</strong> Chegada do serviço de emergência (SAV).</li>
                <li><strong>Cuidados Pós-PCR:</strong> Tratamento intensivo na ambulância e hospital.</li>
            </ol>
            
            <h4>31.4 Quando Parar ou Não Iniciar a RCP</h4>
            <div class="warning-box">
                <h5>Motivos para PARAR a RCP:</h5>
                <ul>
                    <li>Retorno dos sinais vitais (vítima respira, tosse ou se move);</li>
                    <li>Chegada do Recurso Adicional (SAV) que assume o atendimento;</li>
                    <li>Exaustão da equipe (socorrista não consegue mais continuar);</li>
                    <li>O ambiente se torna inseguro (Risco).</li>
                </ul>
            </div>
            <div class="warning-box">
                <h5>Situações para NÃO INICIAR a RCP:</h5>
                <p>Sinais evidentes incompatíveis com a vida, facilmente identificáveis:</p>
                <ul>
                    <li>Decapitação</li>
                    <li>Carbonização</li>
                    <li>Evisceração (com exposição de órgãos vitais)</li>
                    <li>Decomposição</li>
                    <li>Rigor Mortis (Rigidez Cadavérica)</li>
                </ul>
            </div>` 
    },
    'module32': { 
        id: "module32", 
        title: "32. APH: OVACE (Obstrução de Vias Aéreas)", 
        iconClass: "fas fa-lungs-virus", 
        content: `<h4>32.1 Obstrução de Vias Aéreas por Corpo Estranho (OVACE)</h4>
            <p>É a obstrução súbita das vias aéreas superiores causada por um corpo estranho. Em adultos, geralmente ocorre durante a ingestão de alimentos; em crianças, com alimentos ou objetos pequenos.</p>
            
            <h5>Causas da Obstrução:</h5>
            <ul>
                <li>Pela língua (em vítimas inconscientes);</li>
                <li>Por corpos estranhos (alimentos, objetos);</li>
                <li>Pela epiglote (cartilagem que fecha a laringe);</li>
                <li>Por danos ao tecido ou enfermidades.</li>
            </ul>

            <h4>32.2 Sinais de Obstrução Grave (Total)</h4>
            <ul>
                <li>Sinal universal de asfixia (vítima segura o pescoço);</li>
                <li>Incapacidade de falar;</li>
                <li>Tosse fraca e ineficaz;</li>
                <li>Sons inspiratórios agudos ou ausentes;</li>
                <li>Dificuldade respiratória crescente;</li>
                <li>Cianose (pele azulada).</li>
            </ul>

            <h4>32.3 Manobras de Desobstrução</h4>
            <div class="key-concept">
                <h5>Vítima Consciente (Adulto/Criança)</h5>
                <p>Se a vítima não consegue tossir ou falar (obstrução total), aplique compressões abdominais (antiga Manobra de Heimlich). Posicione-se atrás da vítima, feche uma mão e posicione-a acima do umbigo, e puxe para dentro e para cima.</p>
            </div>
            <div class="key-concept">
                <h5>Vítima Inconsciente (Qualquer Idade)</h5>
                <p>Deite a vítima e inicie RCP imediatamente, começando pelas compressões torácicas.</p>
            </div>
            <div class="key-concept">
                <h5>Lactentes (Bebês até 1 ano)</h5>
                <p>A manobra consiste em um ciclo de 5 batidas (tapas) nas costas, seguidas por 5 compressões no peito.</p>
                <ol>
                    <li>Apoiar o bebê de bruços no antebraço, com a cabeça mais baixa que o corpo.</li>
                    <li>Aplicar 5 batidas com o "calcanhar" da mão nas costas (entre as escápulas).</li>
                    <li>Virar o bebê de barriga para cima, mantendo a inclinação, e aplicar 5 compressões no centro do peito (com dois dedos).</li>
                    <li>Repetir o ciclo até o bebê expelir o objeto.</li>
                </ol>
            </div>` 
    },
    'module33': { 
        id: "module33", 
        title: "33. APH: Hemorragias", 
        iconClass: "fas fa-tint", 
        content: `<h4>33.1 Conceito de Hemorragia</h4>
            <p>A hemorragia é a perda de sangue causada pela ruptura de vasos sanguíneos. Pode variar desde pequenas lesões até situações graves que colocam a vida em risco. O bombeiro civil deve identificar rapidamente o tipo, a causa e aplicar a técnica adequada para conter o sangramento.</p>

            <h4>33.2 Causas da Hemorragia</h4>
            <ul>
                <li><strong>Hemorragia Traumática:</strong> Decorre de traumas físicos (cortes, lacerações, fraturas expostas, perfurações).</li>
                <li><strong>Hemorragia Patológica:</strong> Ocorre devido a doenças que afetam a coagulação ou fragilizam os vasos (úlcera gástrica, hemofilia, cirrose).</li>
                <li><strong>Hemorragia Fisiológica:</strong> Relacionada a processos naturais (ex: menstruação).</li>
            </ul>

            <h4>33.3 Tipos de Hemorragia</h4>
            <table class="custom-table">
                <thead><tr><th>Tipo</th><th>Descrição</th><th>Exemplo</th></tr></thead>
                <tbody>
                    <tr><td><strong>Externa</strong></td><td>Sangue visível saindo do corpo.</td><td>Corte, ferimento aberto.</td></tr>
                    <tr><td><strong>Interna</strong></td><td>Sangramento dentro do corpo.</td><td>Hematomas, órgãos lesionados.</td></tr>
                    <tr><td><strong>Exteriorizada</strong></td><td>Sangue sai por orifícios naturais.</td><td>Nariz, boca, ouvido, ânus.</td></tr>
                </tbody>
            </table>

            <h4>33.4 Classificação da Hemorragia (Vaso)</h4>
            <table class="custom-table">
                <thead><tr><th>Vaso</th><th>Características</th><th>Cor</th></tr></thead>
                <tbody>
                    <tr><td><strong>Arterial</strong></td><td>Sangue jorra em pulsos, acompanhando os batimentos.</td><td>Vermelho vivo.</td></tr>
                    <tr><td><strong>Venosa</strong></td><td>Fluxo contínuo e sem pulsar.</td><td>Vermelho escuro.</td></tr>
                    <tr><td><strong>Capilar</strong></td><td>Escorrimento lento e uniforme.</td><td>Pequena quantidade.</td></tr>
                </tbody>
            </table>
            
            <h4>33.5 Principais Técnicas para Parar o Sangramento (Hemostasia)</h4>
            <ol>
                <li><strong>Compressão Direta:</strong> Primeira e mais eficaz medida. Aplicar pressão firme sobre o ferimento com gaze estéril. Se o curativo encharcar, não remova, coloque outro por cima.</li>
                <li><strong>Curativo Compressivo / Empacotamento da Ferida:</strong> Usado para feridas profundas. Introduzir gaze (comum ou hemostática) e manter pressão, fixando com bandagem.</li>
                <li><strong>Elevação do Membro:</strong> Elevar o membro lesionado acima do nível do coração (não usar se houver suspeita de fratura).</li>
                <li><strong>Compressão Indireta (Pontos Arteriais):</strong> Pressionar a artéria principal acima do ferimento (Braquial no braço, Femoral na perna).</li>
                <li><strong>Torniquete:</strong> Indicado para hemorragias de extremidades graves e incontroláveis. Aplicar 5 a 10 cm acima do ferimento (nunca sobre articulações). Apertar até cessar o sangramento e REGISTRAR O HORÁRIO.</li>
            </ol>
            
            <div class="warning-box">
                <h5>Lembre-se:</h5>
                <p>Sempre priorize segurança da cena e uso de EPIs. Controle rápido da hemorragia salva vidas. Após o controle, mantenha a vítima aquecida e estável até a chegada do suporte avançado.</p>
            </div>` 
    },
    'module34': { 
        id: "module34", 
        title: "34. APH: Ferimentos em Tecidos Moles", 
        iconClass: "fas fa-band-aid", 
        content: `<h4>34.1 Ferimentos em Tecidos Moles</h4><p>Classificam-se em Abertos (com perda de continuidade da pele) e Fechados (lesão abaixo da pele, como hematomas).</p><h5>Tipos de Ferimentos Abertos:</h5><ul><li>Escoriações: Lesões superficiais.</li><li>Incisos: Bordas regulares, por objetos cortantes (ex: navalha).</li><li>Lacerações: Bordas irregulares, por objetos contundentes (ex: pedra).</li><li>Avulsões: Um retalho de tecido é arrancado, mas permanece preso ao corpo.</li><li>Amputações: Remoção completa de uma extremidade.</li><li>Eviscerações: Exposição de órgãos internos.</li><li>Penetrantes: Causados por objetos pontiagudos ou projéteis (ex: prego, faca).</li></ul><h4>34.2 Condutas Específicas</h4><ul><li>Eviscerações: NÃO tente recolocar os órgãos. Cubra com um pano úmido e limpo.</li><li>Amputações: Envolva o membro em um pano limpo, coloque-o em um saco plástico e, em seguida, em um recipiente com gelo e água. NUNCA coloque o membro em contato direto com o gelo.</li><li>Objetos Empalados/Penetrantes: NUNCA remova o objeto. Estabilize-o com bandagens para evitar movimento.</li></ul>` 
    },
    'module35': { 
        id: "module35", 
        title: "35. APH: Queimaduras e Lesões Musculoesqueléticas", 
        iconClass: "fas fa-bone", 
        content: `<h4>35.1 Queimaduras - Classificação por Profundidade:</h4><p>Lesão causada por temperaturas extremas, agentes químicos, eletricidade ou radiação.</p><ul><li>1º Grau: Atinge a epiderme; causa vermelhidão e dor.</li><li>2º Grau: Atinge a epiderme e a derme; forma bolhas e causa dor intensa.</li><li>3º Grau: Atinge todas as camadas da pele; aspecto esbranquiçado ou carbonizado, com pouca ou nenhuma dor.</li></ul><h4>35.2 Conduta Básica em Queimaduras</h4><ul><li>Interromper o processo (ex: resfriar com água corrente).</li><li>Remover roupas que não estejam grudadas e joias.</li><li>NÃO estourar bolhas nem aplicar produtos caseiros (pasta de dente, café).</li></ul><h4>35.3 Lesões Musculoesqueléticas</h4><ul><li>Fratura: Ruptura total ou parcial de um osso (Fechada ou Exposta).</li><li>Luxação: Deslocamento de um osso de sua articulação.</li><li>Entorse: Torção ou distensão de uma articulação, com lesão de ligamentos.</li></ul><p>Conduta: NUNCA tente colocar ossos no lugar. Imobilize a articulação acima e abaixo da lesão e verifique o PMS (Pulso, Movimento, Sensibilidade) antes e depois.</p>` 
    },
    'module36': { 
            id: "module36", 
            title: "36. APH: Emergências Clínicas", 
            iconClass: "fas fa-stethoscope", 
            content: `
            <p>Emergências clínicas são estados graves de saúde que não são causados por traumas externos, mas sim pelo agravamento de doenças ou condições internas do corpo.</p>

            <h4>36.1 Síncope (Desmaio)</h4>
            <div class="key-concept" style="margin-bottom: 0.5rem;">
                <h5>Definição de Síncope</h5>
                <p>A Síncope, ou Desmaio, é a perda abrupta e transitória (momentânea) da consciência e da capacidade de ficar em pé (tônus postural). A recuperação geralmente é rápida e completa.</p>
                <p>Na maioria dos casos, ocorre por uma diminuição temporária do fluxo sanguíneo para o cérebro.</p>
            </div>
            
            <div class="key-concept" style="margin-bottom: 0.5rem;">
                <h5>Causas Comuns da Síncope</h5>
                <p>Qualquer pessoa pode desmaiar. Algumas causas incluem:</p>
                <ul>
                    <li>Pressão baixa (hipotensão), especialmente ao levantar-se rápido.</li>
                    <li>Hipoglicemia (baixo nível de açúcar no sangue, ex: ficar mais de 4 horas sem comer).</li>
                    <li>Fatores Ambientais: Calor excessivo ou frio extremo.</li>
                    <li>Fatores Emocionais: Ansiedade, ataque de pânico, medo extremo (ex: de agulhas) ou dor muito forte.</li>
                    <li>Problemas Cardíacos: Arritmias ou outras doenças que impedem o bombeamento eficaz do sangue.</li>
                </ul>
            </div>

            <div class="key-concept">
                <h5>Conduta na Síncope (O que fazer)</h5>
                <p>Ao ter a sensação de que vai desmaiar (tonturas, fraqueza, visão embaçada):</p>
                <ul>
                    <li>Deitar a vítima no chão e elevar suas pernas acima do nível do coração.</li>
                    <li>Se não for possível deitar, sente a pessoa e incline o tronco dela para frente, com a cabeça em direção aos joelhos.</li>
                    <li>Mantenha o ambiente arejado e afaste os curiosos.</li>
                </ul>
            </div>

            <h4>36.2 Crise Convulsiva</h4>
            <div class="key-concept" style="margin-bottom: 0.5rem;">
                <h5>Definição de Convulsão</h5>
                <p>A convulsão é um distúrbio que se caracteriza pela contratura muscular involuntária (movimentos de "se bater") de todo o corpo ou de parte dele.</p>
                <p>É provocada por um aumento excessivo e anormal da atividade elétrica no cérebro.</p>
            </div>
            
            <div class="key-concept">
                <h5>Causas Comuns da Convulsão</h5>
                <p>As causas prováveis mais comuns incluem:</p>
                <ul>
                    <li>Febre alta (principalmente em crianças menores de 5 anos).</li>
                    <li>Traumatismo craniano (pancadas fortes na cabeça).</li>
                    <li>Doenças como meningite, tétano ou tumores cerebrais.</li>
                    <li>Abstinência de álcool ou drogas.</li>
                    <li>Distúrbios metabólicos, como hipoglicemia severa.</li>
                </ul>
            </div>

            <h4>36.3 Epilepsia</h4>
            <div class="key-concept">
                <h5>Definição de Epilepsia</h5>
                <p>A Epilepsia é uma disfunção <strong>crônica</strong> do cérebro (uma neuropatia) que causa descargas elétricas anormais e <strong>recorrentes</strong>.</p>
                <p><strong>Diferença Chave:</strong> Ter uma única convulsão (ex: por febre) não significa ter epilepsia. A epilepsia é diagnosticada quando a pessoa tem duas ou mais convulsões que se repetem ao longo do tempo.</p>
            </div>

            <h4>36.4 Conduta no Atendimento à Convulsão</h4>
            <div class="warning-box" style="margin-bottom: 0.5rem;">
                <h5>O QUE FAZER:</h5>
                <ol>
                    <li><strong>Mantenha a calma:</strong> A crise geralmente dura poucos segundos ou minutos.</li>
                    <li><strong>Proteja a vítima:</strong> Afaste objetos (cadeiras, mesas) e ampare a cabeça da pessoa para evitar que ela se machuque no chão. Se possível, coloque algo macio (almofada, casaco) sob a cabeça.</li>
                    <li><strong>Lateralize a cabeça:</strong> Vire a cabeça da vítima de lado. Isso evita que ela se afogue (broncoaspire) com a própria saliva ou vômito.</li>
                    <li><strong>Cronometre a crise:</strong> Se durar mais de 5 minutos, é uma emergência grave e a vítima deve ser levada ao hospital imediatamente.</li>
                    <li><strong>Acione 192 ou 193:</strong> Especialmente se for a primeira crise da pessoa ou se durar mais de 5 minutos.</li>
                </ol>
            </div>
            
            <div class="warning-box" style="border-left-color: var(--primary); background-color: #fff5f5; color: #1a202c !important;">
                <h5 style="color: #c53030 !important;">O QUE NÃO FAZER:</h5>
                <ul style="color: #1a202c !important;"> 
                    <li><strong style="color: #c53030 !important;">NÃO tente conter os movimentos:</strong> Nunca segure os braços ou pernas da vítima.</li>
                    <li><strong style="color: #c53030 !important;">NÃO puxe a língua:</strong> É um mito. A vítima não engole a língua. Tentar puxá-la pode causar lesões graves na sua mão (mordida) ou na boca da vítima.</li>
                    <li><strong style="color: #c53030 !important;">NÃO coloque objetos na boca:</strong> Não insira dedos, panos, colheres ou qualquer objeto na boca da vítima. Isso pode quebrar dentes ou causar obstrução.</li>
                    <li><strong style="color: #c53030 !important;">NÃO dê água ou medicação:</strong> A vítima está inconsciente e pode se afogar.</li>
                </ul>
            </div>
            <h4>36.5 Outras Emergências Graves</h4>
            <div class="key-concept" style="margin-bottom: 0.5rem;">
                <h5>Infarto Agudo do Miocárdio (IAM)</h5>
                <p>Popularmente conhecido como ataque cardíaco, é a necrose (morte) de uma parte do músculo do coração (miocárdio) causada pela obstrução de uma artéria que leva sangue até ele.</p>
            </div>
            <div class="key-concept">
                <h5>Acidente Vascular Encefálico (AVE)</h5>
                <p>Popularmente conhecido como "Derrame", é a interrupção da circulação de sangue no cérebro, causada por um coágulo (AVE Isquêmico) ou pelo rompimento de um vaso (AVE Hemorrágico), levando à morte de células cerebrais.</p>
            </div>

            <h4>36.6 Tipos de Choque (Falência Circulatória)</h4>
            <p>O Choque é um estado de falência circulatória onde o oxigênio não chega adequadamente aos tecidos, ameaçando a vida. Os principais tipos são:</p>
            <ul>
                <li><strong>Choque Séptico:</strong> Causado por uma infecção generalizada que se espalha pelo sangue.</li>
                <li><strong>Choque Anafilático:</strong> Causado por uma reação alérgica grave e sistêmica (ex: picada de abelha, remédios, alimentos).</li>
                <li><strong>Choque Hipovolêmico:</strong> Causado pela perda de grande volume de sangue ou líquidos (ex: hemorragia grave).</li>
                <li><strong>Choque Cardiogênico:</strong> Ocorre quando o coração falha como bomba (ex: após um infarto) e não consegue bombear o sangue.</li>
                <li><strong>Choque Neurogênico:</strong> Ocorre por uma falha no sistema nervoso (ex: lesão na medula espinhal).</li>
            </ul>
        ` 
        },
    'module37': { 
        id: "module37", 
        title: "37. APH: Situação com Múltiplas Vítimas (IMV)", 
        iconClass: "fas fa-car-crash", 
        content: `<h4>37.1 Situação com Múltiplas Vítimas (IMV)</h4><p>Qualquer evento que gera um número de vítimas que sobrecarrega os recursos de emergência inicialmente disponíveis. O objetivo muda para "fazer o melhor para o maior número de vítimas".</p><h4>37.2 O Método de Triagem START</h4><p>Acrônimo para Simple Triage and Rapid Treatment (Triagem Simples e Tratamento Rápido), utiliza cores para priorizar o atendimento:</p><h5>Categorização por Cores:</h5><ul><li>VERMELHO (Primeira Prioridade): Vítimas graves com alta chance de sobrevida (transporte imediato).</li><li>AMARELO (Segunda Prioridade): Vítimas graves que podem aguardar tratamento.</li><li>VERDE (Terceira Prioridade): Vítimas com ferimentos leves, capazes de andar (walking wounded).</li><li>PRETO (Sem Prioridade): Vítimas com lesões obviamente mortais ou em PCR em cenário de recursos limitados.</li></ul><h5>Fluxograma de Avaliação:</h5><p>A triagem segue 4 passos rápidos: Deambulação, Respiração, Perfusão, Nível de Consciência.</p>` 
    },
    'module38': { 
        id: "module38", 
        title: "38. PHTLS: Introdução e Aspectos Legais", 
        iconClass: "fas fa-file-medical-alt", 
        content: `<h4>38.1 Conceitos Fundamentais em APH</h4><p>O Atendimento Pré-Hospitalar (APH) é a assistência prestada a uma vítima de agravo à saúde (trauma ou emergência clínica) fora do ambiente hospitalar. O objetivo é estabilizar a vítima e transportá-la com segurança a uma unidade de saúde. Para isso, dominamos alguns conceitos:</p><ul><li><strong>Primeiros Socorros:</strong> Cuidados imediatos prestados a uma pessoa fora do ambiente hospitalar, com o objetivo de manter a vida e reduzir sequelas até a chegada de socorro especializado.</li><li><strong>Socorrista:</strong> Pessoa com treinamento técnico para prestar atendimento de emergência.</li><li><strong>Urgência:</strong> Uma ocorrência grave que necessita de atendimento médico, mas não representa um risco iminente de vida.</li><li><strong>Emergência:</strong> Uma ocorrência que necessita de encaminhamento rápido ao hospital, pois apresenta risco iminente de vida.</li></ul><h4>38.2 Legislação Pertinente ao Socorrista</h4><p>A atuação em APH é respaldada e regulada por leis. É dever do profissional conhecê-las.</p><div class="key-concept"><h5>Constituição Federal</h5><p>O Art. 5º garante a inviolabilidade do <strong>direito à vida</strong>, e o Art. 196 estabelece que <strong>a saúde é um direito de todos e dever do Estado</strong>. Isso fundamenta a existência dos serviços de emergência públicos.</p></div><div class="warning-box"><h5>Código Penal - Art. 135: Omissão de Socorro</h5><p>É crime "deixar de prestar assistência, quando possível fazê-lo sem risco pessoal, à criança abandonada ou extraviada, ou à pessoa inválida ou ferida, ao desamparo ou em grave e iminente perigo; ou não pedir, nesses casos, o socorro da autoridade pública". A pena é de detenção de 1 a 6 meses, ou multa.</p><p><strong>Importante:</strong> Se a pessoa não possui treinamento específico ou não se sente confiante para agir diretamente, o simples ato de <strong>pedir socorro à autoridade pública (ligar para 192 ou 193)</strong> já descaracteriza a omissão.</p></div><h4>38.3 Consentimento para o Atendimento</h4><p>Antes de tocar na vítima, é preciso ter seu consentimento.</p><ul><li><strong>Consentimento Formal (ou Explícito):</strong> Ocorre quando a vítima, consciente e orientada, verbaliza ou gesticula sua permissão para o atendimento.</li><li><strong>Consentimento Implícito:</strong> É assumido quando a vítima está inconsciente, confusa ou gravemente ferida, e não pode responder. Também se aplica a menores desacompanhados.</li></ul><p>Se uma vítima consciente e orientada recusar o atendimento, o socorrista deve respeitar sua decisão, se possível na presença de testemunhas, e não deve discutir ou forçar o procedimento.</p></div>` 
    },
    'module39': { 
        id: "module39", 
        title: "39. PHTLS: Biossegurança no Atendimento", 
        iconClass: "fas fa-shield-virus", 
        content: `<h4>39.1 Riscos Biológicos para o Socorrista</h4><p>O bombeiro civil está constantemente exposto a riscos de contato com sangue ou secreções contaminadas, além da inalação de partículas de risco biológico e doenças transmitidas por contato. A segurança pessoal é a prioridade máxima em qualquer atendimento.</p><h4>39.2 Vias de Exposição</h4><p>A exposição a patógenos pode ocorrer de várias formas, principalmente através de:</p><ul><li><strong>Perfuração da pele:</strong> Acidentes com agulhas ou objetos cortantes.</li><li><strong>Contato com mucosas:</strong> Respingos de fluidos nos olhos ou na boca.</li><li><strong>Contato com pele não-íntegra:</strong> Presença de cortes, dermatites ou lesões não cicatrizadas na pele do socorrista.</li></ul><h4>39.3 Fontes de Infecção</h4><p>Além do sangue, diversos outros fluidos corporais são considerados potencialmente infecciosos. Entre eles estão:</p><ul><li>Secreções vaginais e sêmen.</li><li>Líquor (líquido cefalorraquidiano).</li><li>Líquidos sinovial, pericárdico, pleural, ascítico e amniótico.</li></ul><h4>39.4 Equipamentos de Proteção Individual (EPIs)</h4><p>O uso correto de EPIs é a principal barreira contra a contaminação. Os itens essenciais são:</p><ul><li><strong>Luvas descartáveis:</strong> Devem ser usadas em todos os atendimentos.</li><li><strong>Óculos de proteção:</strong> Protegem os olhos contra respingos.</li><li><strong>Máscara facial:</strong> Evita a inalação de partículas e protege contra respingos na boca e nariz.</li></ul><div class="warning-box"><strong>Atenção:</strong> Ao manipular objetos perfurocortantes como agulhas, nunca tente reencapá-las após o uso. Descarte-os em recipientes apropriados.</div><h4>39.5 Conduta em Caso de Acidente Biológico</h4><p>Se ocorrer uma exposição, siga estes passos imediatamente:</p><ul><li><strong>Pele:</strong> Lave abundantemente o local com água e sabão.</li><li><strong>Mucosa (boca ou olhos):</strong> Lave com água corrente ou soro fisiológico.</li><li><strong>Relatar e Documentar:</strong> Informe imediatamente seu superior ou responsável e procure assistência médica no local ou no pronto atendimento mais próximo.</li></ul>` 
    },
    'module40': { 
        id: "module40", 
        title: "40. PHTLS: Anatomia e Fisiologia Essencial", 
        iconClass: "fas fa-bone", 
        content: `<h4>40.1 Funções do Esqueleto Humano</h4><p>O esqueleto, composto por 206 ossos em um adulto, não serve apenas para sustentação. Suas funções vitais incluem:</p><ul><li><strong>Proteção:</strong> Salvaguarda de órgãos vitais, como o cérebro (protegido pelo crânio) e o coração/pulmões (protegidos pela caixa torácica).</li><li><strong>Sustentação:</strong> Fornece a estrutura e a forma do corpo.</li><li><strong>Movimento:</strong> Atua como um sistema de alavancas movimentado pelos músculos, permitindo o deslocamento.</li><li><strong>Armazenamento:</strong> Serve como depósito de íons importantes, como Cálcio (Ca) e Fósforo (P).</li><li><strong>Hematopoiese:</strong> Produção de células sanguíneas na medula óssea.</li></ul><h4>40.2 Divisão do Esqueleto</h4><p>O esqueleto é dividido em duas grandes porções:</p><ul><li><strong>Esqueleto Axial:</strong> O eixo central do corpo, formado pela cabeça (crânio), pescoço e tronco (coluna vertebral, costelas e esterno).</li><li><strong>Esqueleto Apendicular:</strong> Composto pelos membros superiores e inferiores.</li></ul><p>A união entre essas duas porções é feita pelas <strong>cinturas escapular</strong> (clavícula e escápula) e <strong>pélvica</strong> (ossos do quadril).</p><h4>40.3 Estruturas Anatômicas Chave</h4><div class="key-concept"><h5>Coluna Vertebral</h5><p>É o eixo de sustentação do corpo. É dividida em 5 regiões:</p><ul><li><strong>7 Vértebras Cervicais</strong> (pescoço).</li><li><strong>12 Vértebras Torácicas</strong> (onde se articulam as costelas).</li><li><strong>5 Vértebras Lombares</strong> (região inferior das costas).</li><li><strong>Sacro</strong> (formado pela fusão de 5 vértebras).</li><li><strong>Cóccix</strong> (formado pela fusão de 4 vértebras).</li></ul></div><div class="key-concept"><h5>Tórax</h5><p>Formado pelo osso <strong>esterno</strong> na frente, 12 pares de <strong>costelas</strong> nas laterais e as 12 vértebras torácicas atrás. O esterno é dividido em Manúbrio, Corpo e Processo Xifoide.</p></div><div class="key-concept"><h5>Membros Superiores e Inferiores</h5><ul><li><strong>Superiores (Braço/Antebraço/Mão):</strong> Úmero, Rádio, Ulna, Carpos, Metacarpos e Falanges.</li><li><strong>Inferiores (Coxa/Perna/Pé):</strong> Fêmur (maior osso do corpo), Patela, Tíbia, Fíbula, Tarsos, Metatarsos e Falanges.</li></ul></div>` 
    },
    'module41': { 
        id: "module41", 
        title: "41. PHTLS: Avaliação de Sinais Vitais", 
        iconClass: "fas fa-heartbeat", 
        content: `<h4>41.1 O que são Sinais Vitais?</h4><p>Sinais vitais são medições fisiológicas que indicam as funções corporais básicas. Eles fornecem uma maneira rápida e eficiente de monitorar o estado de saúde de um paciente e identificar problemas. Os quatro sinais clássicos são: Temperatura, Pulso, Respiração e Pressão Arterial.</p><h4>41.2 Temperatura (T)</h4><p>Reflete o equilíbrio entre o calor produzido e o perdido pelo corpo. A temperatura axilar é a mais comum no APH, embora menos precisa. Os valores de referência são:</p><table class="custom-table"><thead><tr><th>Classificação</th><th>Temperatura (°C)</th></tr></thead><tbody><tr><td>Hipotermia</td><td>35 ou menos</td></tr><tr><td>Normal</td><td>36 - 37,5</td></tr><tr><td>Febre / Hipertermia</td><td>Acima de 37,5</td></tr></tbody></table><h4>41.3 Pulso ou Frequência Cardíaca (FC)</h4><p>É a onda de pressão palpável gerada pelo fluxo de sangue a cada batimento cardíaco. Indica o estado circulatório. A frequência é contada em 1 minuto. Os principais locais de aferição são as artérias <strong>Radial</strong> (no punho) e <strong>Carótida</strong> (no pescoço).</p><p><strong>Valores de Referência para Adultos:</strong> 60 a 100 batimentos por minuto (bpm).</p><ul><li><strong>Bradicardia:</strong> Frequência abaixo do normal.</li><li><strong>Taquicardia:</strong> Frequência acima do normal.</li></ul><h4>41.4 Frequência Respiratória (FR)</h4><p>Corresponde ao número de ciclos respiratórios (1 inspiração + 1 expiração) por minuto. A respiração promove as trocas gasosas entre a atmosfera e o sangue.</p><p><strong>Valores de Referência para Adultos:</strong> 12 a 20 movimentos por minuto (mpm).</p><ul><li><strong>Bradipneia:</strong> Frequência abaixo do normal.</li><li><strong>Taquipneia:</strong> Frequência acima do normal.</li></ul><h4>41.5 Pressão Arterial (PA)</h4><p>É a força que o sangue exerce sobre as paredes das artérias.</p><ul><li><strong>Pressão Sistólica (Máxima):</strong> Ocorre durante a contração do coração.</li><li><strong>Pressão Diastólica (Mínima):</strong> Ocorre durante o relaxamento do coração.</li></ul><p><strong>Valor de Referência (Ótimo):</strong> 120 / 80 mmHg.</p>` 
    },
    'module42': { 
        id: "module42", 
        title: "42. PHTLS: Avaliação Primária e XABCDE", 
        iconClass: "fas fa-tasks", 
        content: `<h4>42.1 Segurança da Cena</h4><p>O primeiro passo em qualquer atendimento é garantir a segurança. Antes de abordar a vítima, observe todo o local. A prioridade de segurança é sempre: <strong>1º Eu (socorrista), 2º Minha equipe, 3º A vítima</strong>. Se a cena não estiver segura, não entre. Acione o serviço especializado e aguarde.</p><h4>42.2 Avaliação Primária: O Protocolo XABCDE</h4><p>A avaliação primária visa identificar e tratar condições que ameaçam a vida de forma imediata. Utilizamos o mnemônico XABCDE para seguir uma sequência lógica e priorizada.</p><div class="key-concept"><h5>X - Hemorragia Exsanguinante</h5><p><strong>Ação:</strong> Antes de qualquer outra coisa, controle hemorragias externas graves e visíveis que podem levar a vítima à morte em poucos minutos. Use compressão direta, curativos compressivos ou torniquetes, se indicado.</p></div><div class="key-concept"><h5>A - Vias Aéreas (Airway) com Controle da Coluna Cervical</h5><p><strong>Ação:</strong> Verifique se as vias aéreas da vítima estão abertas e sem obstruções (língua, sangue, vômito, etc.). Em vítimas de trauma, sempre suspeite de lesão na coluna cervical e realize a estabilização manual da cabeça e pescoço durante a abertura das vias aéreas. Utilize as manobras de <i>Chin Lift</i> (elevação do queixo) ou <i>Jaw Thrust</i> (tração da mandíbula).</p></div><div class="key-concept"><h5>B - Boa Respiração e Ventilação (Breathing)</h5><p><strong>Ação:</strong> Avalie se a vítima está respirando e a qualidade dessa respiração (frequência, profundidade, simetria do tórax). Forneça suporte ventilatório (oxigênio) se necessário.</p></div><div class="key-concept"><h5>C - Circulação com Controle de Hemorragia</h5><p><strong>Ação:</strong> Verifique a presença de pulso central (carotídeo em vítimas inconscientes, radial em conscientes). Avalie a perfusão da pele (cor, temperatura, umidade) e o tempo de enchimento capilar (normal < 2 segundos). Continue o controle de hemorragias.</p></div>` 
    },
    'module43': { 
        id: "module43", 
        title: "43. PHTLS: Avaliação Neurológica e Exposição", 
        iconClass: "fas fa-brain", 
        content: `<h4>43.1 D - Déficit Neurológico (Disability)</h4><p>Esta etapa avalia o nível de consciência da vítima. Uma avaliação rápida e padronizada é crucial para identificar possíveis lesões cerebrais.</p><div class="key-concept"><h5>Método AVDI</h5><p>É uma forma simples de classificar a resposta do paciente:</p><ul><li><strong>A - Alerta:</strong> A vítima está acordada, orientada e responde coerentemente.</li><li><strong>V - Verbal:</strong> A vítima não está alerta, mas responde a estímulos verbais (chamados).</li><li><strong>D - Dor:</strong> A vítima só responde a estímulos dolorosos (ex: pressão no leito ungueal).</li><li><strong>I - Inconsciente:</strong> A vítima não responde a nenhum estímulo.</li></ul></div><div class="key-concept"><h5>Escala de Coma de Glasgow (ECG)</h5><p>É uma avaliação mais detalhada e pontuada (de 3 a 15) que analisa três parâmetros: Abertura Ocular, Resposta Verbal e Resposta Motora.</p><table class="custom-table"><thead><tr><th>Parâmetro</th><th>Resposta</th><th>Pontos</th></tr></thead><tbody><tr><td rowspan="4"><strong>Abertura Ocular</strong></td><td>Espontânea</td><td>4</td></tr><tr><td>Ao estímulo verbal</td><td>3</td></tr><tr><td>Ao estímulo doloroso</td><td>2</td></tr><tr><td>Nenhuma</td><td>1</td></tr><tr><td rowspan="5"><strong>Resposta Verbal</strong></td><td>Orientada</td><td>5</td></tr><tr><td>Confusa</td><td>4</td></tr><tr><td>Palavras inapropriadas</td><td>3</td></tr><tr><td>Sons incompreensíveis</td><td>2</td></tr><tr><td>Nenhuma</td><td>1</td></tr><tr><td rowspan="6"><strong>Resposta Motora</strong></td><td>Obedece a comandos</td><td>6</td></tr><tr><td>Localiza a dor</td><td>5</td></tr><tr><td>Retirada (flexão normal)</td><td>4</td></tr><tr><td>Flexão anormal (decorticação)</td><td>3</td></tr><tr><td>Extensão anormal (descerebração)</td><td>2</td></tr><tr><td>Nenhuma</td><td>1</td></tr></tbody></table><p>Um resultado igual ou inferior a 8 indica um Traumatismo Cranioencefálico (TCE) grave (coma).</p></div><p>A avaliação das <strong>pupilas</strong> (isocóricas, miose, midríase, anisocóricas) também é fundamental na análise neurológica.</p><h4>43.2 E - Exposição com Controle Térmico (Exposure)</h4><p><strong>Ação:</strong> Exponha a vítima, cortando as vestes para procurar lesões ocultas (ferimentos, deformidades, etc.). Após a rápida avaliação, cubra a vítima imediatamente com uma manta ou cobertor para prevenir a <strong>hipotermia</strong> (perda de calor corporal), que pode agravar o quadro clínico.</p>` 
    },
    'module44': { 
        id: "module44", 
        title: "44. PHTLS: PCR e RCP de Alta Qualidade", 
        iconClass: "fas fa-medkit", 
        content: `<h4>44.1 Componentes da RCP de Alta Qualidade</h4><p>Para que a Reanimação Cardiopulmonar (RCP) seja eficaz, ela deve seguir parâmetros rigorosos. O objetivo é simular a função do coração, garantindo a perfusão cerebral e coronariana.</p><ul><li><strong>Localização:</strong> Posicione a base de uma mão sobre a outra, entrelaçando os dedos, no centro do tórax da vítima, na metade inferior do osso esterno.</li><li><strong>Frequência (Velocidade):</strong> Comprima a uma frequência de <strong>100 a 120 compressões por minuto</strong>.</li><li><strong>Profundidade:</strong> Comprima o tórax em pelo menos <strong>5 cm</strong> (para adultos), sem exceder 6 cm.</li><li><strong>Retorno do Tórax:</strong> Permita que o tórax retorne completamente à sua posição original após cada compressão, sem retirar as mãos do peito.</li><li><strong>Minimizar Interrupções:</strong> Pause as compressões o mínimo possível. A troca de socorrista deve ser feita a cada 2 minutos (ou 5 ciclos) para evitar a fadiga.</li></ul><p>A vítima deve estar em uma superfície rígida, e o socorrista deve usar o peso do próprio corpo, mantendo os braços esticados.</p><h4>44.2 Relação Compressão-Ventilação</h4><ul><li><strong>Adultos:</strong> A relação é de <strong>30 compressões para 2 ventilações</strong> (30:2).</li><li><strong>Crianças e Lactentes (com 2 socorristas):</strong> A relação muda para <strong>15 compressões para 2 ventilações</strong> (15:2).</li></ul><h4>44.3 Sinais de PCR no PHTLS</h4><ul><li><strong>Irresponsividade:</strong> A vítima não responde a chamados ou toques.</li><li><strong>Ausência de Respiração ou Respiração Agônica (Gasping):</strong> A vítima não apresenta movimentos respiratórios normais ou tem apenas "respirações ofegantes" e ineficazes.</li><li><strong>Ausência de Pulso Central:</strong> Não há pulso palpável na artéria carótida (pescoço).</li></ul>` 
    },
        'module45': { 
        id: "module45", 
        title: "45. PHTLS: DEA - Desfibrilador Externo Automático", 
        iconClass: "fas fa-heart-circle-bolt", 
        content: `<h4>45.1 Arritmias Cardíacas e Modalidades da PCR</h4>
            <p>Arritmias cardíacas são alterações do ritmo elétrico do coração que podem causar Parada Cardiorrespiratória (PCR). O coração não bombeia sangue eficazmente, exigindo RCP imediata e uso do DEA. A PCR se divide em dois grupos:</p>
            
            <div class="key-concept">
                <h5>Ritmos NÃO Chocáveis (DEA não indica choque)</h5>
                <ul>
                    <li><strong>1. Assistolia:</strong> Ausência completa de atividade elétrica ("linha reta"). É o tipo mais comum e com pior prognóstico. Conduta: RCP e medicamentos.</li>
                    <li><strong>2. Atividade Elétrica Sem Pulso (AESP):</strong> Presença de atividade elétrica organizada, mas sem pulso palpável. Conduta: RCP e investigar causas reversíveis.</li>
                </ul>
            </div>
            
            <div class="key-concept">
                <h5>Ritmos CHOCÁVEIS (DEA indica choque)</h5>
                <ul>
                    <li><strong>1. Fibrilação Ventricular (FV):</strong> Atividade elétrica caótica e desorganizada, fazendo o coração apenas "tremer". É a causa principal de morte súbita. Tratamento: Desfibrilação imediata.</li>
                    <li><strong>2. Taquicardia Ventricular Sem Pulso (TVSP):</strong> Ritmo muito rápido originado nos ventrículos, sem pulso. Tratamento: Desfibrilação imediata.</li>
                </ul>
            </div>

            <h4>45.2 O que é Desfibrilação Elétrica?</h4>
            <p>É o uso terapêutico de corrente elétrica de alta energia (ex: 120-200 joules bifásico ou 360 joules monofásico) para interromper uma arritmia letal (FV ou TVSP). O choque despolariza todas as células cardíacas, permitindo que o marca-passo natural (nó sinusal) reassuma o ritmo.</p>

            <h4>45.3 Passos de Uso do DEA</h4>
            <p>O DEA é um equipamento portátil que detecta o ritmo e indica o choque automaticamente.</p>
            <ol>
                <li>Avaliar segurança da cena.</li>
                <li>Verificar responsividade e respiração.</li>
                <li>Chamar ajuda (192/193) e solicitar o DEA.</li>
                <li>Iniciar RCP (30:2) enquanto o DEA não chega.</li>
                <li><strong>Ligar o DEA</strong> e seguir as instruções de voz.</li>
                <li>Expor o tórax da vítima e fixar os eletrodos (pás): um abaixo da clavícula direita e outro na linha axilar esquerda (abaixo da mama).</li>
                <li>Certificar-se de que ninguém toca na vítima.</li>
                <li>Permitir que o DEA analise o ritmo.</li>
                <li>Se o DEA indicar choque: Anunciar "Todos se afastem!", verificar visualmente e pressionar o botão de choque.</li>
                <li><strong>Após o choque, retomar RCP imediatamente</strong> por 2 minutos.</li>
                <li>Se o DEA não indicar choque, continuar RCP por 2 minutos e reavaliar.</li>
            </ol>

            <div class="warning-box">
                <h5>Atenção e Cuidados Especiais</h5>
                <ul>
                    <li><strong>Tórax peludo:</strong> Raspar ou tracionar os pelos rapidamente antes de aplicar as pás.</li>
                    <li><strong>Tórax molhado:</strong> Secar o tórax antes da aplicação. Nunca aplicar em ambiente molhado.</li>
                    <li><strong>Marca-passo:</strong> Aplicar o eletrodo a pelo menos 2,5 cm de distância do dispositivo.</li>
                    <li><strong>Adesivos medicamentosos:</strong> Remover o adesivo (ex: nicotina) e limpar o local antes.</li>
                    <li><strong>Crianças (1-8 anos):</strong> Usar pás pediátricas. Se não houver, usar as de adulto (sem sobrepor).</li>
                    <li><strong>Lactentes (<1 ano):</strong> Preferir desfibrilador manual; usar DEA apenas se tiver modo pediátrico.</li>
                    <li><strong>Gestantes:</strong> Priorizar salvar a mãe. Deslocar o útero manualmente para o lado esquerdo para descomprimir a veia cava antes da RCP. O DEA é seguro e deve ser usado.</li>
                    <li><strong>Segurança do Choque:</strong> Afastar o oxigênio a pelo menos 1 metro durante o choque.</li>
                </ul>
            </div>` 
    },
    'module46': { 
        id: "module46", 
        title: "46. PHTLS: Hemorragias e Estado de Choque", 
        iconClass: "fas fa-tint", 
        content: `<h4>46.1 Classificação e Controle de Hemorragias (Revisão PHTLS)</h4><p>A perda volêmica aguda é uma das principais causas de morte evitável no trauma.</p><h5>Classificação:</h5><ul><li><strong>Arterial:</strong> Sangue vermelho vivo, pulsátil (jato).</li><li><strong>Venosa:</strong> Sangue vermelho escuro, contínuo.</li></ul><h5>Técnicas de Hemostasia:</h5><ul><li><strong>Compressão Direta:</strong> O primeiro e mais eficaz método. Aplicar pressão firme sobre o ferimento.</li><li><strong>Torniquete:</strong> Utilizado como **último recurso** para sangramentos massivos em extremidades que não respondem à compressão direta. Deve ser aplicado proximalmente à lesão, apertado até o sangramento parar, e o horário de aplicação deve ser anotado.</li></ul><h4>46.2 Estado de Choque (Hipovolêmico)</h4><p>O choque hipovolêmico é uma condição de falência circulatória causada pela perda de grande volume de sangue ou líquidos corporais, resultando em perfusão inadequada de oxigênio para os tecidos.</p><h5>Sinais e Sintomas:</h5><ul><li>Pele **pálida, fria e úmida (pegajosa)**.</li><li>**Taquicardia** (pulso rápido e fraco).</li><li>**Taquipneia** (respiração rápida e superficial).</li><li>Alteração do nível de consciência (agitação, confusão).</li><li>**Hipotensão** (pressão arterial baixa) - é um sinal tardio.</li></ul><h5>Conduta no APH (Controle do Choque):</h5><ol><li>Controle a hemorragia externa (o 'X' do XABCDE).</li><li>Mantenha a vítima deitada (decúbito dorsal) e, se não houver contraindicação, **eleve seus membros inferiores**.</li><li>Mantenha as vias aéreas pérvias e ofereça oxigênio em alto fluxo.</li><li>**Previna a hipotermia** cobrindo a vítima com uma manta.</li><li>Transporte rápido para o hospital.</li></ol>` 
    },
    'module47': { 
        id: "module47", 
        title: "47. PHTLS: Queimaduras e Regra dos 9", 
        iconClass: "fas fa-fire", 
        content: `<h4>47.1 Queimaduras: Profundidade (Revisão Detalhada)</h4><p>Queimaduras são lesões na pele ou em outros tecidos causadas por agentes térmicos, químicos, elétricos ou radioativos. A gravidade é determinada pela **profundidade** e pela **extensão** da área corporal atingida.</p><ul><li><strong>1º Grau:</strong> Atinge apenas a **epiderme**. Causa dor e vermelhidão (eritema), mas não forma bolhas.</li><li><strong>2º Grau:</strong> Atinge a **epiderme e a derme**. Caracteriza-se pela formação de **bolhas**, aparência úmida e dor intensa.</li><li><strong>3º Grau:** Destrói todas as camadas da pele, podendo atingir músculos e ossos. A lesão é seca, esbranquiçada ou carbonizada, e geralmente **indolor** na área afetada devido à destruição dos nervos.</li></ul><h4>47.2 Classificação por Extensão (Regra dos 9)</h4><p>A "Regra dos 9" é um método rápido para estimar a porcentagem da superfície corporal queimada em adultos:</p><ul><li><strong>Cabeça e Pescoço:</strong> 9%</li><li><strong>Cada Membro Superior:</strong> 9%</li><li><strong>Cada Membro Inferior:</strong> 18%</li><li><strong>Tronco (Frente):</strong> 18%</li><li><strong>Tronco (Costas):</strong> 18%</li><li><strong>Genitália:</strong> 1%</li></ul><h4>47.3 Tipos Especiais e Conduta</h4><div class="key-concept"><h5>Queimaduras Elétricas e Químicas</h5><p>Queimaduras Elétricas sempre têm ponto de **entrada** e de **saída**, e o principal risco é a PCR e as lesões internas. Queimaduras Químicas (ácidos/bases) exigem que o tratamento inicial seja a lavagem abundante com **água corrente** para remover e diluir o agente.</p></div><div class="warning-box"><h5>Lesão por Inalação</h5><p>A inalação de fumaça quente ou gases tóxicos pode queimar as vias aéreas. Sinais de alerta incluem queimaduras na face, pelos nasais chamuscados, rouquidão e escarro fuliginoso (com fuligem). Esta é uma emergência grave.</p></div>` 
    },
    'module48': { 
        id: "module48", 
        title: "48. PHTLS: Lesões Musculoesqueléticas (Trauma)", 
        iconClass: "fas fa-bone-break", 
        content: `<h4>48.1 Lesões Comuns (Revisão Detalhada)</h4><p>As lesões musculoesqueléticas, ou traumas ortopédicos, afetam ossos, articulações e músculos.</p><ul><li><strong>Fratura:</strong> É a quebra de um osso. Pode ser **Fechada** (pele intacta) ou **Aberta/Exposta** (osso perfura a pele, com risco aumentado de infecção e hemorragia).</li><li><strong>Luxação:</strong> Ocorre quando um osso se desloca de sua articulação (a "junta" sai do lugar). Causa dor intensa e deformidade visível.</li><li><strong>Entorse:</strong> É a lesão dos ligamentos de uma articulação, causada por um movimento de torção.</li></ul><h4>48.2 Sinais e Sintomas Chave</h4><ul><li>Dor intensa no local.</li><li>Inchaço (edema) e hematoma.</li><li>Deformidade visível do membro.</li><li>Incapacidade de mover a área.</li><li>**Crepitação** (som ou sensação de ossos raspando).</li></ul><h4>48.3 Conduta no APH (Imobilização)</h4><div class="warning-box"><strong>Regra de Ouro:</strong> NUNCA tente colocar um osso ou articulação "no lugar" (realinhamento). Isso pode causar mais danos a nervos e vasos.</div><ol><li><strong>Avalie PMS:</strong> Verifique a circulação, motricidade e sensibilidade da extremidade do membro (**P**ulso, **M**ovimento, **S**ensibilidade) antes e depois de qualquer imobilização.</li><li><strong>Controle Hemorragias:</strong> Em fraturas expostas, controle o sangramento com um curativo compressivo, sem pressionar diretamente sobre o osso exposto.</li><li><strong>Imobilize a Lesão:</strong> Use talas para imobilizar a **articulação acima e a articulação abaixo da lesão**. Imobilização firme, mas sem garrotear a circulação.</li></ol>` 
    },
    'module49': { 
        id: "module49", 
        title: "49. PHTLS: IMV e Triagem START (Avançado)", 
        iconClass: "fas fa-car-crash", 
        content: `<h4>49.1 Incidentes com Múltiplas Vítimas (IMV) - Conceito Avançado</h4><p>Um IMV é qualquer evento que gera um número de vítimas que sobrecarrega os recursos de emergência inicialmente disponíveis. Nestes cenários, o objetivo muda de "fazer o melhor para cada vítima" para "**fazer o melhor para o maior número de vítimas**".</p><h4>49.2 O Método de Triagem START (Simple Triage and Rapid Treatment)</h4><p>O método START permite classificar cada vítima em **menos de 1 minuto**, usando um sistema de cores para priorizar o atendimento e transporte.</p><div class="key-concept"><h5>Categorias da Triagem START:</h5><ul><li><span class="font-bold text-red-600">VERMELHO (Prioridade 1 - Imediata):</span> Vítimas com lesões graves, mas com alta chance de sobrevida se tratadas imediatamente. Ex: respirando > 30 mpm, ou inconsciente que não obedece a comandos simples.</li><li><span class="font-bold text-yellow-500">AMARELO (Prioridade 2 - Demora/Pode Aguardar):</span> Vítimas com lesões graves, mas que não correm risco de vida imediato. Ex: fraturas importantes sem hemorragia descontrolada.</li><li><span class="font-bold text-green-600">VERDE (Prioridade 3 - Menor):</span> Vítimas com ferimentos leves, capazes de andar (**"walking wounded"**).</li><li><span class="font-bold text-black">PRETO (Prioridade 0 - Falecido/Expectante):</span> Vítimas com lesões obviamente incompatíveis com a vida ou em parada cardiorrespiratória em um cenário com recursos limitados.</li></ul></div><h4>49.3 Fluxograma de Avaliação START (Decisão)</h4><p>A triagem segue 4 passos rápidos que definem a cor:</p><ol><li><strong>Consegue andar?</strong> Se sim, é classificado como **VERDE**.</li><li><strong>Respiração:</strong> Abre as vias aéreas. Se não respira, é **PRETO**. Se respirar, e FR > 30 mpm, é **VERMELHO**. Se FR < 30 mpm, vá para o passo 3.</li><li><strong>Perfusão (Pulso):</strong> Verifique o pulso radial. Se ausente, é **VERMELHO**. Se presente, vá para o passo 4.</li><li><strong>Nível de Consciência (Comandos):</strong> Peça para a vítima realizar um comando simples. Se não conseguir, é **VERMELHO**. Se conseguir, é **AMARELO**.</li></ol>` 
    },
    'module50': { 
        id: "module50", 
        title: "50. NR35: Introdução ao Salvamento em Alturas", 
        iconClass: "fas fa-chalkboard-teacher", 
        content: `<h4>Introdução ao Salvamento em Alturas</h4><p>O salvamento em alturas é uma atividade crítica desempenhada por bombeiros profissionais civis, exigindo técnicas avançadas, equipamentos modernos e planejamento meticuloso.</p><p>A busca por eficiência e segurança é uma prioridade, visando alcançar a excelência na prestação de serviços à sociedade.</p><p>Este módulo apresenta os fundamentos do salvamento em alturas, destacando a importância de um processo organizado e estruturado, baseado em planejamento, capacitação contínua e melhoria das condições de trabalho.</p><p>O salvamento em alturas abrange operações realizadas em locais elevados, que podem ocorrer em planos verticais (como paredes de edifícios ou penhascos), inclinados (como telhados) ou horizontais (como pontes ou plataformas).</p><p>As técnicas envolvem o uso de ancoragens seguras, sistemas de descensão e içamento adaptados ao grau de lesão das vítimas, além do manejo correto de equipamentos específicos.</p><p>A capacitação dos bombeiros é essencial para lidar com a pressão psicológica e os riscos inerentes a essas operações, onde qualquer erro pode ser fatal.</p><p>Este módulo estabelece a base para os princípios técnicos e táticos abordados nos módulos seguintes.</p>` 
    },
    'module51': { 
        id: "module51", 
        title: "51. NR35: Princípios de Segurança", 
        iconClass: "fas fa-shield-alt", 
        content: `<h4>Princípios de Segurança no Salvamento em Alturas</h4><p>A segurança é a pedra angular do salvamento em alturas, considerando o alto risco envolvido. Este módulo detalha os princípios fundamentais que guiam as operações, garantindo a proteção da equipe, das vítimas e dos bens materiais.</p><p>Esses princípios incluem:</p><ul><li><strong>Garantir a própria segurança:</strong> A prioridade é proteger a vida dos bombeiros, pois um resgate bem-sucedido não deve custar a vida de um socorrista. Isso envolve o uso de equipamentos de proteção individual (EPIs) e a verificação rigorosa dos sistemas de segurança.</li><li><strong>Não agravar lesões:</strong> A manipulação cuidadosa da vítima é essencial para evitar novos danos. Técnicas como imobilização, controle de hemorragias e prevenção de choque devem ser priorizadas, muitas vezes acima da rapidez.</li><li><strong>Avaliar o binômio risco/benefício:</strong> Cada operação deve ser analisada friamente, buscando soluções simples e seguras, evitando improvisações que possam comprometer a segurança.</li><li><strong>Redundância na segurança:</strong> Sistemas de segurança devem ser duplicados ou triplicados em situações críticas, garantindo que, em caso de falha de um sistema, outro assuma imediatamente.</li><li><strong>Revisar os sistemas:</strong> Antes de iniciar qualquer operação, todos os equipamentos e sistemas devem ser inspecionados para garantir sua integridade, evitando falhas que possam ser fatais.</li><li><strong>Economia de esforço e tempo:</strong> Soluções simples, como descer vítimas em vez de içá-las, devem ser priorizadas para reduzir o esforço físico e o tempo de exposição ao risco.</li><li><strong>Instalar um Sistema de Comando em Operações (SCO):</strong> O SCO organiza a operação, definindo papéis, responsabilidades e um plano de ação claro, aumentando a eficiência e a segurança.</li><li><strong>Simplificar:</strong> O uso de técnicas simples evita manobras complexas, reduzindo o risco de erros.</li></ul><p>Esses princípios formam a base para operações seguras e eficazes, exigindo conhecimento técnico, experiência e bom senso.</p>` 
    },
    'module52': { 
        id: "module52", 
        title: "52. NR35: Condições e Classificação da Segurança", 
        iconClass: "fas fa-check-double", 
        content: `<h4>Condições e Classificação da Segurança</h4><p>Este módulo aborda as condições básicas para realizar um salvamento em alturas com segurança e a classificação dos tipos de segurança envolvidos.</p><h5>As condições incluem:</h5><ul><li><strong>Controle emocional:</strong> O bombeiro deve manter a calma sob pressão para tomar decisões acertadas.</li><li><strong>Controle da situação:</strong> Avaliar e gerenciar os riscos do ambiente e da ocorrência.</li><li><strong>Controle dos materiais:</strong> Garantir que os equipamentos estejam em boas condições e sejam usados corretamente.</li><li><strong>Controle das vítimas:</strong> Avaliar o estado das vítimas e adaptar as técnicas ao seu grau de lesão.</li><li><strong>Execução com convicção:</strong> Realizar as manobras com confiança e precisão.</li><li><strong>Organização dos materiais:</strong> Disponibilizar os equipamentos em locais seguros e de fácil acesso.</li></ul><h5>A segurança é classificada em:</h5><ul><li><strong>Segurança individual:</strong> Ações para minimizar riscos de acidentes pessoais ao bombeiro, como o uso correto de EPIs.</li><li><strong>Segurança coletiva:</strong> Procedimentos para proteger a equipe, as vítimas e os bens coletivos, considerando o número de vítimas, condições do local e proporções do evento. A perda de controle da situação, falta de conhecimento técnico, inexperiência e descontrole emocional são os principais riscos.</li><li><strong>Segurança dos materiais:</strong> Uso de equipamentos adequados e bem mantidos, reduzindo riscos e aumentando a eficiência.</li><li><strong>Segurança dos bens materiais:</strong> Proteger bens, desde que isso não coloque vidas em risco, considerando as condições do local e os recursos disponíveis.</li></ul>` 
    },
    'module53': { 
        id: "module53", 
        title: "53. NR35: Fases Táticas do Salvamento", 
        iconClass: "fas fa-clipboard-list", 
        content: `<h4>Fases Táticas do Salvamento em Alturas</h4><p>O salvamento em alturas é estruturado em fases táticas que garantem a organização e a eficiência da operação:</p><ul><li><strong>Fase Prévia:</strong> Envolve a coleta de informações antes de chegar ao local, como altura, natureza da ocorrência, número e condição das vítimas, idade, hora do acidente e localização exata. Essas informações ajudam a planejar a operação e reduzir imprevistos.</li><li><strong>Fase de Reconhecimento:</strong> No local, confirma-se as informações coletadas, avalia-se riscos (eletricidade, fogo, arestas vivas) e verifica-se a necessidade de reforços. Um plano de ação é elaborado com base nessas informações.</li><li><strong>Fase de Preparação:</strong> Inclui a montagem de sistemas de acesso à vítima, a disponibilização de recursos humanos (com diferentes níveis de especialização) e materiais (como equipamentos de proteção e iluminação). O plano de ação deve ser flexível para lidar com imprevistos, como desabamentos.</li><li><strong>Fase de Salvamento:</strong> Envolve a execução do resgate, com a escolha de pontos de ancoragem, montagem de sistemas de descensão ou içamento, e avaliação da vítima para determinar a necessidade de atendimento pré-hospitalar (APH). A comunicação entre a equipe é crucial.</li><li><strong>Fase de Desmobilização:</strong> Após o resgate, realiza-se a revisão e acondicionamento dos equipamentos, além de uma reunião para avaliar acertos e falhas, visando melhorar futuras operações.</li></ul>` 
    },
    'module54': { 
        id: "module54", 
        title: "54. NR35: Materiais Coletivos - Cordas", 
        iconClass: "fas fa-rope", 
        content: `<h4>Materiais Coletivos - Cordas</h4><p>As cordas são o elemento mais crítico no salvamento em alturas, exigindo cuidados especiais em sua escolha, uso e manutenção. Este módulo detalha os tipos de cordas, suas características e cuidados necessários:</p><h5>Materiais</h5><p>Fibras sintéticas (polipropileno, poliéster, poliamida e aramida) substituíram as naturais devido à maior resistência, durabilidade e capacidade de amortecimento. A poliamida, por exemplo, amortece oito vezes mais que o cânhamo. Polipropileno é resistente à umidade, mas tem baixa carga de ruptura; poliéster é durável, mas menos elástico; aramida (Kevlar) é extremamente resistente, comparável ao aço.</p><h5>Tipos de cordas:</h5><ul><li><strong>Torcidas:</strong> Fibras enroladas em fios e cordões, suscetíveis à abrasão e enrijecimento.</li><li><strong>Trançadas (8 ou 16 pernas):</strong> Resistentes à abrasão, mas podem formar "cocas" e encolher.</li><li><strong>Com alma e capa:</strong> Incluem cordas estáticas (elasticidade <5%, para salvamento) e dinâmicas (>5%, para escalada), com a alma suportando 80-85% da carga e a capa protegendo contra abrasão.</li></ul><h5>Classificação por diâmetro:</h5><ul><li><strong>Cordas simples (>10 mm):</strong> Para cabos de sustentação.</li><li><strong>Cordas de apoio (7-8 mm):</strong> Para segurança individual.</li><li><strong>Cordeletes (4-6 mm):</strong> Para ascensão e auto-resgate.</li></ul><h5>Manutenção e acondicionamento:</h5><p>Evitar pisar, contato com areia, exposição prolongada ao sol, tensão desnecessária, aquecimento da capa e contato com produtos químicos. Lavar com detergente neutro e secar à sombra. Métodos de acondicionamento incluem oito (cordas estáticas >50 m), anel/coroa (cordas dinâmicas ou estáticas <50 m), andino/charuto (operações em montanha) e sacola (aeronaves ou tentativas de suicídio).</p><h5>Força de choque:</h5><p>Calculada pelo fator de queda $(FQ=2H/L)$, mede o esforço da corda em quedas, sendo essencial para avaliar a segurança.</p>` 
    },
    'module55': { 
        id: "module55", 
        title: "55. NR35: Materiais Coletivos - Outros Equipamentos", 
        iconClass: "fas fa-toolbox", 
        content: `<h4>Outros Equipamentos Coletivos</h4><p>Além das cordas, outros equipamentos coletivos são essenciais para o salvamento em alturas, cada um com funções específicas:</p><h5>Fitas:</h5><p>Dividem-se em planas (mais rígidas) e tubulares (mais flexíveis e resistentes). São usadas em ancoragens para equalizar tensão e proteger cordas contra abrasão em arestas vivas. A resistência depende da largura e do material, com nós de fita exigindo sobra de 10 cm em cada lado.</p><h5>Escadas de gancho ou prolongáveis:</h5><p>Fabricadas em alumínio ou fibra de vidro, são usadas em resgates em sacadas, varandas ou janelas, especialmente em cenários com fogo ou fumaça. O primeiro bombeiro deve usar um cabo solteiro, com três bombeiros garantindo a estabilidade da escada.</p><h5>Equipamentos de evacuação:</h5><ul><li><strong>Macas:</strong> Rígidas (metálicas, mais pesadas e resistentes) ou flexíveis (plástico resistente, leves, mas exigem maior conhecimento técnico). Usadas para vítimas com lesões graves.</li><li><strong>Triângulos de evacuação:</strong> Versáteis, ocupam pouco espaço e são ideais para vítimas conscientes com lesões leves, com pontos de ancoragem ajustados ao tamanho da vítima.</li></ul><p>O uso correto desses equipamentos exige conhecimento técnico e manutenção rigorosa para garantir a segurança.</p>` 
    },
    'module56': { 
        id: "module56", 
        title: "56. NR35: Materiais Individuais", 
        iconClass: "fas fa-user-shield", 
        content: `<h4>Materiais Individuais</h4><p>Os equipamentos individuais são essenciais para a segurança e mobilidade do bombeiro durante o salvamento em alturas. Este módulo detalha os principais itens:</p><ul><li><strong>Cintos de segurança:</strong> Conhecidos como cadeirinha, arnês ou boldrier, são fundamentais, com modelos tipo paraquedista (acolchoados, com pontos de fixação na cintura e pernas) sendo os mais usados. Mantêm o centro de gravidade acima da cintura pélvica, evitando giros acidentais. Cintos profissionais oferecem maior conforto e pontos de fixação laterais.</li><li><strong>Capacetes:</strong> Protegem contra quedas de objetos e obstáculos, com jugular para fixação e furos para ventilação.</li><li><strong>Luvas:</strong> Protegem contra queimaduras por abrasão, com reforço na palma e polegar. São indispensáveis, apesar da redução no tato.</li></ul><h5>Descensores:</h5><ul><li><strong>Freio oito:</strong> Simples e econômico, mas torce a corda e não suporta cargas muito pesadas sem ajustes.</li><li><strong>Auto-blocantes (Stop, I'D, Gri Gri):</strong> Não torcem a corda, suportam maior carga e permitem pausas sem usar as mãos.</li><li><strong>De barras (Rack):</strong> Usados em grandes descidas, controlam a frenagem ajustando cilindros metálicos.</li><li><strong>O ATC e plaquetas:</strong> Ideais para cordas duplas, não torcem a corda, usados em escaladas.</li></ul><h5>Bloqueadores:</h5><ul><li><strong>Blocantes:</strong> Usam micro-garras para travar a corda, ideais para ascensão e multiplicação de força (máximo 500 kg).</li><li><strong>Trava-quedas:</strong> Travam sob carga em um sentido, mas não devem ser usados como descensores.</li></ul><h5>Conectores:</h5><ul><li><strong>Mosquetões:</strong> De aço ou duralumínio, com ou sem trava, usados em ancoragens, circuitos e progressão vertical.</li><li><strong>Malhas rápidas:</strong> De aço, com abertura por rosca, para manobras auxiliares.</li><li><strong>Roldanas:</strong> Para desvio ou multiplicação de força, usadas em deslocamentos sobre cabos aéreos.</li></ul>` 
    },
    'module57': { 
        id: "module57", 
        title: "57. NR35: Nós e Amarrações", 
        iconClass: "fas fa-link", 
        content: `
            <h4>Nós e Amarrações</h4>
            <p>Os nós são fundamentais no salvamento em alturas, devendo ser fáceis de fazer, desatar e oferecer baixa perda de resistência. Este módulo apresenta os principais tipos:</p>
            
            <h5>Nós de ancoragem e fixação:</h5>
            <ul>
                <li><strong>Oito simples:</strong> Criar um nó de parada, um volume na extremidade da corda para impedir que ela deslize.</li>
                <li><strong>Azelha em oito (oito duplo):</strong> O mais usado para encordoamento, revisável, com perda de resistência de 20-30%.</li>
                <li><strong>Oito duplo guiado:</strong> Criar uma alça fixa e segura na extremidade da corda, usada para se conectar a um objeto, como uma cadeirinha ou um ponto de ancoragem.</li>
                <li><strong>Azelha simples:</strong> Fácil, mas difícil de desatar sob tensão (perda 41%).</li>
                <li><strong>Azelha em nove:</strong> Similar à azelha em oito, com uma volta extra (perda <30%).</li>
                <li><strong>Azelha em oito duplo-alçado (orelha de coelho):</strong> Usado em SAS, aumenta a superfície de contato com o mosquetão (perda ~18%).</li>
                <li><strong>Fiel:</strong> Eficaz, mas desliza sob cargas >400 kg, com grande perda de resistência.</li>
                <li><strong>Nó sete:</strong> Iniciado com alça oposta à direção de uso.</li>
            </ul>
            
            <h5>Nós de união:</h5>
            <ul>
                <li><strong>Pescador duplo:</strong> Une cabos com nós contrapostos, perda de ~25%.</li>
                <li><strong>Nó de fita:</strong> Único para unir fitas, exige sobra de 2x a largura da fita (perda 36%).</li>
            </ul>
            
            <h5>Nós autoblocantes:</h5>
            <ul>
                <li><strong>Prússico:</strong> Três voltas, aperta muito a corda.</li>
                <li><strong>Machard:</strong> Cinco voltas com cordelete, resiste a 50% da resistência do cordelete.</li>
                <li><strong>Valdotan:</strong> Sete voltas, usado em descensão em cordas tensionadas para auto-resgate.</li>
            </ul>
            
            <h5>Nó de segurança:</h5>
            <ul>
                <li><strong>Dinâmico UIAA (meio-fiel):</strong> Deslizante, seguro, com grande capacidade de frenagem, ideal para mosquetões HMS.</li>
            </ul>` 
    },
    'module58': { 
        id: "module58", 
        title: "58. NR35: Sistemas de Ancoragens (SAS)", 
        iconClass: "fas fa-anchor", 
        content: `<h4>Sistemas de Ancoragens de Segurança (SAS)</h4><p>Os Sistemas de Ancoragens de Segurança (SAS) são fundamentais para garantir a segurança no salvamento em alturas, sendo a base de qualquer operação. Este módulo detalha os requisitos e classificações:</p><h5>Requisitos:</h5><ul><li>Usar mosquetões superdimensionados (>22 kN) em cada ponto de ancoragem (principal e secundário).</li><li>Evitar braços de alavanca, ancorando próximo à base da estrutura para reduzir forças.</li><li>Utilizar pelo menos dois pontos de ancoragem (principal e secundário).</li><li>Ancorar diretamente sobre o local de descida para evitar pêndulos.</li><li>Proteger cordas contra abrasão em arestas vivas com materiais resistentes.</li></ul><h5>Classificação:</h5><ul><li><strong>Ancoragem em linha:</strong><ul><li><strong>Tradicional:</strong> Ponto principal mais próximo do objetivo que o secundário.</li><li><strong>Contraposta:</strong> Ponto secundário mais próximo do objetivo.</li></ul></li><li><strong>Ancoragem distribuída:</strong><ul><li><strong>Equalizada:</strong> Ponto de descida fixo, definido no momento da ancoragem.</li><li><strong>Equalizável:</strong> Permite ajustar o ponto de descida, oferecendo mobilidade e segurança.</li></ul></li></ul><h5>Recomendações gerais:</h5><p>Posicionar mosquetões com a abertura oposta à parede, usar fitas tubulares para unir mosquetões, proteger pontos de abrasão e considerar a angulação entre pontos, pois ângulos maiores aumentam a força sobre cada ponto.</p>` 
    },
    'module59': { 
        id: "module59", 
        title: "59. NR35: Técnicas de Resgate", 
        iconClass: "fas fa-people-carry", 
        content: `<h4>Técnicas de Resgate Simples, Complexo e Auto-Resgate</h4><p>Este módulo aborda as técnicas de resgate em alturas, divididas em três categorias, cada uma com equipamentos e procedimentos específicos:</p><h5>Resgate Simples:</h5><p>Para vítimas com lesões leves, realizado por um bombeiro. Equipamentos mínimos incluem:</p><ul><li><strong>Individuais:</strong> Cinto paraquedista, capacete, 4 mosquetões de aço, 2 de alumínio (com e sem trava), blocantes, freio oito, cordeletes, luvas, óculos e cantil.</li><li><strong>Coletivos:</strong> Cabos solteiros, lanternas, coletes refletivos, fitas zebradas, cones, binóculos, croque, maca flexível, kit de primeiros socorros, cordas estáticas, triângulo de evacuação, descensores (Rack, Stop) e roldanas.</li></ul><h5>Resgate Complexo:</h5><p>Para vítimas com lesões graves (fraturas, hemorragias, traumatismos), exigindo equipe de pelo menos quatro bombeiros. Inclui:</p><ul><li><strong>Técnicas de içamento:</strong> Usam sistemas 3:1 com roldanas e blocantes para reduzir o peso da vítima a um terço, facilitando o içamento.</li><li><strong>Técnicas de descensão:</strong> Com macas (duas cordas: principal e de segurança) ou triângulos de evacuação. Socorristas podem acompanhar a maca em terrenos acidentados, ou usar cabo-guia para evitar obstáculos.</li></ul><h5>Auto-Resgate:</h5><p>Técnicas realizadas por um socorrista sem apoio, como:</p><ul><li><strong>Corte no cabo da vítima:</strong> Socorrista na ancoragem ou descendo até a vítima, usando novo cabo de resgate e nós blocantes (prússico, machard).</li><li><strong>Preservando o cabo da vítima:</strong> Usando valdotan ou blocantes, acessando por cima ou por baixo, com procedimentos como clipagem de longes e uso de estribos.</li><li><strong>Transposição de nó:</strong> Para subir ou descer em cabos emendados, usando blocantes e longes para passar pelo nó.</li></ul>` 
    },
};

/* === MAPA DAS CATEGORIAS (Foco na Navegação Aprimorada) === */

const moduleCategories = { 
    rh: { id: "rh", title: "Relações Humanas", achievementTitle: "Excelente Comunicador", range: [1, 5], icon: "fas fa-users" }, 
    legislacao: { id: "legislacao", title: "Legislação Aplicada", achievementTitle: "Mestre em Leis", range: [6, 10], icon: "fas fa-gavel" }, 
    salvamento: { id: "salvamento", title: "Salvamento", achievementTitle: "Especialista em Resgate", range: [11, 15], icon: "fas fa-life-ring" }, 
    pci: { id: "pci", title: "Prevenção e Combate a Incêndio", achievementTitle: "Mestre das Chamas", range: [16, 25], icon: "fas fa-fire-extinguisher" }, 
    aph: { id: "aph", title: "Primeiros Socorros", achievementTitle: "Protetor da Vida", range: [26, 37], icon: "fas fa-briefcase-medical" }, 
    phtls: { id: "phtls", title: "APH - PHTLS", achievementTitle: "Socorrista Mestre", range: [38, 49], icon: "fas fa-star-of-life" }, 
    nr35: { id: "nr35", title: "NR 35 - Trabalho em Altura", achievementTitle: "Mestre do Ar", range: [50, 59], icon: "fas fa-hard-hat" } 
};

/* === NOVO: FONTE DE DADOS PARA LAZY LOADING === */

/*
    Este objeto mapeia os IDs dos módulos para o nome do arquivo 
    JSON que contém as perguntas daquele módulo.
    
    EXEMPLO: module1 usará o arquivo 'module1-quiz.js'.
    
    O app.js buscará este arquivo apenas quando o usuário clicar no módulo.
    
    ESTRUTURA NECESSÁRIA DOS ARQUIVOS DE PERGUNTAS (crie 59 arquivos separados):
    // Dentro de 'module1-quiz.js'
    const questionBank = {
        'module1': [
            // TODAS AS PERGUNTAS DO MÓDULO 1
        ]
    }; 
*/
const questionSources = {};
for (let i = 1; i <= 59; i++) {
    questionSources[`module${i}`] = `module${i}-quiz.js`; 

}






