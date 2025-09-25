// questions.js

const quizData = [
  // ===============================
  // 📘 PARTE 1 – MODELO OSI (12 Q)
  // ===============================
  {
    question: "Qual é a principal função do Modelo OSI?",
    options: [
      "Permitir apenas comunicação entre dispositivos móveis",
      "Substituir o protocolo TCP/IP",
      "Dividir a comunicação de rede em camadas independentes",
      "Definir os tipos de cabos utilizados na rede"
    ],
    answer: 2
  },
  {
    question: "Coloque as camadas do Modelo OSI na ordem correta (da 7 até a 1).",
    options: [
      "Aplicação, Apresentação, Sessão, Transporte, Rede, Enlace, Física",
      "Aplicação, Sessão, Apresentação, Transporte, Enlace, Rede, Física",
      "Física, Enlace, Rede, Transporte, Sessão, Apresentação, Aplicação",
      "Rede, Física, Aplicação, Transporte, Enlace, Sessão, Apresentação"
    ],
    answer: 0
  },
  {
    question: "Em qual camada do Modelo OSI está o protocolo HTTP?",
    options: ["Aplicação", "Transporte", "Rede", "Enlace"],
    answer: 0
  },
  {
    question: "O TCP e o UDP são protocolos da camada:",
    options: ["Aplicação", "Transporte", "Rede", "Física"],
    answer: 1
  },
  {
    question: "Qual camada é responsável pela criptografia e compressão de dados (ex.: SSL/TLS)?",
    options: ["Aplicação", "Apresentação", "Sessão", "Transporte"],
    answer: 1
  },
  {
    question: "Cite um protocolo que funciona na Camada de Sessão:",
    options: ["NetBIOS", "Ethernet", "ICMP", "SMTP"],
    answer: 0
  },
  {
    question: "Um roteador atua principalmente em qual camada do Modelo OSI?",
    options: ["Enlace", "Rede", "Transporte", "Aplicação"],
    answer: 1
  },
  {
    question: "Um switch de camada 2 atua em qual camada?",
    options: ["Física", "Enlace", "Rede", "Transporte"],
    answer: 1
  },
  {
    question: "Qual camada utiliza endereços MAC?",
    options: ["Rede", "Enlace", "Física", "Aplicação"],
    answer: 1
  },
  {
    question: "Qual camada define cabos, conectores e sinais?",
    options: ["Rede", "Aplicação", "Enlace", "Física"],
    answer: 3
  },
  {
    question: "Explique a diferença principal entre a Camada de Enlace e a Camada de Rede:",
    options: [
      "A Enlace trata do roteamento, a Rede do cabeamento",
      "A Enlace cuida da entrega ponto a ponto, a Rede cuida do roteamento entre redes",
      "Ambas fazem a mesma função",
      "A Rede só trata de cabos, a Enlace de protocolos"
    ],
    answer: 1
  },
  {
    question: "Qual camada é considerada 'extra' e trata de tradução de dados?",
    options: ["Sessão", "Aplicação", "Apresentação", "Transporte"],
    answer: 2
  },

  // ===============================
  // 📗 PARTE 2 – VLANs e ENLACE (8 Q)
  // ===============================
  {
    question: "O que é uma VLAN?",
    options: [
      "Um tipo de cabo de rede",
      "Uma rede virtual que segmenta uma rede física em redes lógicas",
      "Um protocolo de criptografia",
      "Um equipamento de rede"
    ],
    answer: 1
  },
  {
    question: "Qual é a VLAN padrão de fábrica em switches?",
    options: ["VLAN 0", "VLAN 1", "VLAN 10", "VLAN 100"],
    answer: 1
  },
  {
    question: "Cite um benefício das VLANs:",
    options: [
      "Aumentam o tamanho físico dos cabos",
      "Permitem isolar tráfego e aumentar a segurança",
      "Diminuem a velocidade da rede",
      "Eliminam a necessidade de switches"
    ],
    answer: 1
  },
  {
    question: "As VLANs operam em qual camada do Modelo OSI?",
    options: ["Aplicação", "Enlace", "Rede", "Transporte"],
    answer: 1
  },
  {
    question: "O que é um Broadcast Storm?",
    options: [
      "Uma tempestade elétrica que afeta cabos de rede",
      "Um excesso de tráfego broadcast que sobrecarrega a rede",
      "Uma falha de IP em redes privadas",
      "Um ataque hacker contra roteadores"
    ],
    answer: 1
  },
  {
    question: "Qual é a diferença entre topologia física e lógica?",
    options: [
      "A física descreve cabos e conexões, a lógica descreve o fluxo dos dados",
      "A lógica trata apenas de switches, a física de roteadores",
      "Ambas significam a mesma coisa",
      "A lógica descreve cabos e a física o software"
    ],
    answer: 0
  },
  {
    question: "A subcamada MAC da Camada de Enlace é responsável por:",
    options: [
      "Criptografia de dados",
      "Controle de acesso ao meio físico",
      "Conversão binária para decimal",
      "Estabelecimento de sessão"
    ],
    answer: 1
  },
  {
    question: "A subcamada LLC da Camada de Enlace é responsável por:",
    options: [
      "Estabelecer e manter conexões lógicas",
      "Configurar cabos coaxiais",
      "Definir portas de transporte",
      "Ativar roteamento entre redes"
    ],
    answer: 0
  },

  // ===============================
  // 📙 PARTE 3 – CAMADA DE REDE / IP (10 Q)
  // ===============================
  {
    question: "O que é um endereço IP?",
    options: [
      "Um identificador exclusivo para um dispositivo em rede",
      "Um número de série do processador",
      "Um protocolo de camada de aplicação",
      "Um endereço físico de memória"
    ],
    answer: 0
  },
  {
    question: "Um endereço IPv4 possui quantos bits?",
    options: ["16 bits", "32 bits", "64 bits", "128 bits"],
    answer: 1
  },
  {
    question: "Quantos endereços IPv4 existem aproximadamente?",
    options: ["65 mil", "4 bilhões", "1 trilhão", "16 milhões"],
    answer: 1
  },
  {
    question: "No endereço 192.168.0.1/24, qual é a máscara de rede?",
    options: [
      "255.255.255.0",
      "255.255.0.0",
      "255.255.255.255",
      "255.0.0.0"
    ],
    answer: 0
  },
  {
    question: "Um exemplo de rede privada Classe A é:",
    options: [
      "10.0.0.0/8",
      "172.32.0.0/12",
      "192.169.0.0/16",
      "224.0.0.0/4"
    ],
    answer: 0
  },
  {
    question: "Um exemplo de rede privada Classe C é:",
    options: [
      "192.168.0.0/16",
      "172.15.0.0/12",
      "10.255.0.0/16",
      "200.100.100.0/24"
    ],
    answer: 0
  },
  {
    question: "Qual a diferença entre NetID e HostID?",
    options: [
      "NetID identifica a rede e HostID identifica o dispositivo",
      "NetID é o IP do roteador e HostID é o IP do switch",
      "NetID é a máscara de rede e HostID é o broadcast",
      "NetID é sempre 255 e HostID é 0"
    ],
    answer: 0
  },
  {
    question: "Na rede 200.100.100.0/24, quantos hosts válidos podem ser configurados?",
    options: ["254", "255", "256", "253"],
    answer: 0
  },
  {
    question: "O endereço 200.100.100.255 corresponde a:",
    options: ["NetID", "Gateway", "Broadcast", "Host válido"],
    answer: 2
  },
  {
    question: "O que é subnetting?",
    options: [
      "Divisão de uma rede maior em redes menores para melhor gerenciamento",
      "Um tipo de endereço MAC",
      "A criação de cabos de fibra óptica",
      "Um ataque de negação de serviço"
    ],
    answer: 0
  }
];
