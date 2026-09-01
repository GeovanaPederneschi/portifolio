export const projects = [
  {
    id: 1,
    name: 'Gestão de Processos',
    category: 'Web App',
    description:
      'Plataforma centralizada com kanban, aprovações por hierarquia e integração bidirecional em tempo real com o ERP Protheus — substituindo planilhas e centralizando a comunicação entre departamentos.',
    techs: ['React', 'Node.js', 'Protheus API', 'PostgreSQL'],
    tags: ['Web', 'ERP'],
    isConfidential: true,
    highlights: [
      'Substituiu planilhas descentralizadas usadas para alinhar pendências de faturamento entre áreas',
      'Sincronização automática e bidirecional com Protheus: equipe operacional atualiza prazos conforme entrega real',
      'Fluxo de aprovação com validação do líder técnico antes de qualquer alteração refletir no ERP',
      '200+ colaboradores, 100+ processos ativos, 6 meses em produção',
    ],
  },
  {
    id: 2,
    name: 'Geolocalização Indoor — John Deere',
    category: 'Mobile App',
    description:
      'Sistema de rastreamento de carrinhos industriais em tempo real dentro da planta da John Deere — sem GPS, sem sensores dedicados, usando os roteadores WiFi existentes como âncoras de trilateração.',
    techs: ['ESP32', 'PHP', 'MySQL', 'Android', 'WiFi RSSI'],
    tags: ['Mobile'],
    videoUrl: 'https://drive.google.com/file/d/1m6sGSiB3j_cqkZeMhz1GKyxvSJjmZw7m/view?usp=sharing',
    repoUrl: 'https://github.com/GeovanaPederneschi/lazuli-deere',
    highlights: [
      'Firmware ESP32 escaneia sinal RSSI de múltiplos roteadores com latência média < 0,30s',
      'Algoritmo de trilateração calcula posição X,Y dos carrinhos sem nenhuma infraestrutura adicional',
      'App Android consome a API em tempo real com atualização contínua do mapa via thread configurável',
      'Precisão média de 0,7 metros — validada em testes de campo na planta industrial',
    ],
  },
  {
    id: 3,
    name: 'Agente de IA — Suporte',
    category: 'IA / RAG',
    description:
      'Agente de suporte interno com RAG sobre FAQs e procedimentos: faz triagem de chamados, resolve autonomamente demandas N1 e executa ações reais nos fluxos do departamento.',
    techs: ['Python', 'LangChain', 'AWS', 'OpenAI'],
    tags: ['IA'],
    isConfidential: true,
    highlights: [
      'Criado para absorver crescimento exponencial da empresa sem escalar o time de suporte N1',
      'Triagem e atribuição automática de chamados por categoria e urgência',
      'Resolve autonomamente N1: liberação de acesso VPN, recuperação de credenciais, dúvidas frequentes',
      'RAG sobre base de FAQs e procedimentos internos — não só responde, executa ações reais no departamento',
    ],
  },
  {
    id: 4,
    name: 'Agente de IA — Manutenção Preditiva',
    category: 'IA / RAG',
    description:
      'Agente integrado ao sistema de ranking de desvios da empresa: lê os desvios ativos, consulta os procedimentos do departamento via RAG e gera prescrições automáticas — eliminando a etapa manual de diagnóstico.',
    techs: ['Python', 'LangChain', 'AWS', 'RAG', 'OpenAI'],
    tags: ['IA'],
    isConfidential: true,
    highlights: [
      'Antes: técnicos consultavam manualmente os documentos de procedimento para cada desvio no ranking',
      'Agente lê os desvios ativos e cruza com a base de procedimentos do departamento via RAG',
      'Gera prescrição de manutenção automaticamente — elimina o ciclo manual de desvio → consulta → diagnóstico',
      'Resolve gargalo de capacitação: novos profissionais recebem orientação precisa sem depender de seniores',
    ],
  },
  {
    id: 5,
    name: 'App de Gestão de Oficina',
    category: 'Mobile App',
    description:
      'App Android nativo para gestão de oficinas mecânicas com dois perfis distintos (Gerente e Técnico), sincronização offline-first, geração de PDF e controle de peças com geolocalização.',
    techs: ['Android', 'Java 17', 'MVVM', 'Retrofit', 'SQLite', 'MySQL', 'Material Design 3'],
    tags: ['Mobile'],
    videoUrl: 'https://drive.google.com/file/d/1fv_hciIrmUACe-x_ZjOr0NhCwMBS5OkQ/view?usp=sharing',
    repoUrl: 'https://github.com/GeovanaPederneschi/mechanic',
    highlights: [
      'Arquitetura MVVM com ViewModel, LiveData e Repository Pattern',
      'Offline-first: cache local SQLite sincronizado com API REST via Retrofit com retry automático (3 tentativas)',
      'Dois perfis com interfaces e permissões distintas: Gerente (dashboard, relatórios) e Técnico (OS, fotos, peças)',
      'Geração de relatórios em PDF, upload de fotos via câmera e coleta de peças com geolocalização',
    ],
  },
  {
    id: 6,
    name: 'Mensageria de Alarmes',
    category: 'Automação',
    description:
      'Bot integrado ao sistema de ranking de desvios — notifica o suporte terceirizado em tempo real via Telegram com categorização por tipo, níveis de severidade por recorrência e controle de silenciamento.',
    techs: ['Node.js', 'Telegram Bot API', 'MQTT'],
    tags: ['Automação'],
    isConfidential: true,
    highlights: [
      'Antes: suporte terceirizado só sabia dos desvios quando consultava o sistema manualmente',
      'Categorização automática por tipo de desvio: energia ou água, com canais separados no Telegram',
      'Níveis de severidade dinâmicos baseados no número de recorrências do mesmo desvio',
      'Controle de silenciamento: evita spam de notificações para alarmes já conhecidos ou em tratamento',
    ],
  },
  {
    id: 7,
    name: 'Automações Protheus',
    category: 'Integração ERP',
    description:
      'Customizações e integrações no ERP Protheus via ADVPL e REST — validações, fluxos de aprovação, automações de campos e facilitação de envios que o sistema padrão não entrega.',
    techs: ['ADVPL', 'Protheus API', 'REST'],
    tags: ['Automação', 'ERP'],
    isConfidential: true,
    highlights: [
      'Pontos de entrada ADVPL para validações e regras de negócio customizadas diretamente no fluxo do ERP',
      'Fluxos de aprovação de processos que o Protheus padrão não suporta nativamente',
      'Automação de preenchimento de campos e envios, eliminando etapas manuais repetitivas',
      'Integrações REST com sistemas externos, conectando o Protheus a outras ferramentas do ecossistema',
    ],
  },
  {
    id: 8,
    name: 'Trivegano — Marketplace Vegano',
    category: 'Web App',
    description:
      'Marketplace full stack que conecta consumidores a restaurantes e fornecedores veganos — com vitrine, carrinho, pagamentos, plataforma de conteúdo e três painéis administrativos distintos.',
    techs: ['PHP', 'JavaScript', 'jQuery', 'MySQL', 'Google Maps API'],
    tags: ['Web'],
    demoUrl: 'https://trivegano.rf.gd',
    repoUrl: 'https://github.com/GeovanaPederneschi/trivegano',
    highlights: [
      '3 painéis administrativos: gestão geral do site, painel para restaurantes parceiros (pedidos, produtos, funcionários) e suporte',
      'Geolocation API + Distance Matrix API para localizar restaurantes próximos ao usuário em tempo real',
      'Geocoding API para conversão automática de endereços nos formulários de cadastro',
      'Google Charts API para dashboards de desempenho nos painéis administrativos',
      'Arquitetura modular com separação clara entre frontend público, área de cadastro e painéis admin',
    ],
  },
  {
    id: 9,
    name: 'Alma — Moda Consciente',
    category: 'Web App',
    description:
      'Ecommerce para marca de moda feminina sustentável — coleção Primavera/Verão 2026 com peças criadas com tecidos certificados, processos de baixo impacto e parcerias com ateliês locais.',
    techs: ['React', 'TypeScript', 'CSS'],
    tags: ['Web', 'Landing Page'],
    demoUrl: 'https://lading-page-loja-roupa.vercel.app',
    highlights: [
      'Vitrine de produtos com nome, imagem e CTA "Adicionar à sacola"',
      'Seção "Nossa essência" com storytelling de marca e valores sustentáveis',
      'Depoimentos reais de clientes com nome, cidade e peça comprada',
      'Nova coleção em destaque com identidade visual Playfair Display + Inter',
    ],
  },

  {
    id: 10,
    name: 'Carlos Mendes — Deputado Estadual',
    category: 'Landing Page',
    description:
      'Landing page de campanha política para candidato a deputado estadual — com trajetória pessoal, propostas por área, depoimentos e canais de apoio e doação.',
    techs: ['React', 'TypeScript', 'CSS'],
    tags: ['Web', 'Landing Page'],
    demoUrl: 'https://lading-page-candidato.vercel.app',
    highlights: [
      'Seções de trajetória, propostas (saúde, educação, segurança, emprego) e conquistas',
      'Formulário de cadastro de apoiadores e canal de doação integrado',
      'Destaques de marcos: 20 anos de serviço, maior votação histórica do município',
      'Identidade visual com Merriweather + Inter e tom institucional/popular',
    ],
  },

  {
    id: 15,
    name: 'Portfólio de Sites de Campanha',
    category: 'Web App',
    description:
      'Hub com preview de todos os sites de campanha política que já desenvolvi — cada um com layout, paleta e narrativa próprios, mostrando até onde dá pra ir com identidade visual e features interativas.',
    techs: ['React', 'Vite', 'Tailwind CSS'],
    tags: ['Web', 'Landing Page'],
    demoUrl: 'https://portf-lio-politico.vercel.app',
    repoUrl: 'https://github.com/GeovanaPederneschi/portf-lio-politico',
    highlights: [
      'Preview de 6 sites temáticos: modelo base, placeholder moderno e pautas de animais, segurança, meio ambiente e educação',
      'Cada site inclui cadastro de apoiadores, painel administrativo e disparo de novidades por e-mail',
      'Gerador de foto lado a lado com o candidato, pronto pra compartilhar nos stories',
      'Vitrine pensada como portfólio de possibilidades pra campanhas reais',
    ],
  },

  {
    id: 11,
    name: 'Mendes & Associados — Advocacia',
    category: 'Landing Page',
    description:
      'Landing page para escritório de advocacia empresarial de alto nível — áreas de atuação (societário, trabalhista, tributário, contratos), diferenciais, depoimentos e orientação inicial gratuita.',
    techs: ['React', 'TypeScript', 'CSS'],
    tags: ['Web', 'Landing Page'],
    demoUrl: 'https://lading-page-advocacia-rosy.vercel.app',
    highlights: [
      'Áreas de atuação: Direito Societário, Trabalhista, Tributário e Contratos',
      'Diferenciais: sócio dedicado ao caso, comunicação sem jargão, acompanhamento em tempo real',
      'Depoimentos de clientes com nome, cargo e empresa',
      'Formulário de orientação inicial gratuita com seleção de área de interesse',
    ],
  },

  {
    id: 12,
    name: 'Hospital São Lucas',
    category: 'Landing Page',
    description:
      'Landing page institucional para hospital com 30 anos de história — especialidades médicas, diferenciais estruturais, depoimentos de pacientes e agendamento de consultas.',
    techs: ['React', 'TypeScript', 'CSS'],
    tags: ['Web', 'Landing Page'],
    demoUrl: 'https://landing-page-hospital-eta.vercel.app',
    highlights: [
      '50+ especialidades: Cardiologia, Ortopedia, Pediatria, Oncologia, Neurologia e mais',
      'Diferenciais: UTI com 60 leitos, acreditação hospitalar, prontuário eletrônico seguro',
      'Depoimentos reais de pacientes de diversas especialidades',
      'Formulário de agendamento com retorno em até 2 horas úteis',
    ],
  },

  {
    id: 13,
    name: 'TechNow — Eletrônicos',
    category: 'Web App',
    description:
      'Ecommerce para e-commerce de eletrônicos com oferta relâmpago em destaque, produtos em alta, avaliações de clientes e diferenciais de compra — foco máximo em conversão.',
    techs: ['React', 'TypeScript', 'CSS'],
    tags: ['Web', 'Landing Page'],
    demoUrl: 'https://lading-page-eccomerce.vercel.app',
    highlights: [
      'Oferta relâmpago em destaque: produto hero com preço, economia e avaliações',
      'Seção "bombando agora" com produtos em alta e descontos de até 40% OFF',
      'Mais de 47.382 avaliações exibidas com resenhas reais de clientes',
      'Diferenciais: parcelamento sem juros, frete grátis e devolução em 30 dias',
    ],
  },

  {
    id: 14,
    name: 'Atlantis Sul — Portal de Ideias',
    category: 'Web App',
    description:
      'Portal de ensaios e reflexões sobre política, economia, história, filosofia, direito e geopolítica — desenvolvido e em produção para cliente real, com sistema de categorias e artigos.',
    techs: ['React', 'TypeScript', 'CSS'],
    tags: ['Web', 'Landing Page'],
    demoUrl: 'https://atlantisul.vercel.app',
    highlights: [
      'Projeto em produção entregue para cliente real com múltiplos autores',
      'Sistema de categorias: Política, Filosofia, Economia, História, Música',
      'Seção de destaque com artigos em evidência e listagem de mais artigos',
      'Identidade editorial sólida: "densidade teórica, clareza editorial e responsabilidade intelectual"',
    ],
  },
]
