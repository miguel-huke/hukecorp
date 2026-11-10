window.HUKE_V7_CATALOG=[
  {
    "id": "supermercado",
    "title": "Supermercado",
    "category": "Comércio",
    "mode": "pos",
    "accent": "#f3c84b",
    "action": "Nova venda",
    "roles": [
      "Operador de caixa",
      "Gerente",
      "Auditor"
    ],
    "samples": [
      "Café especial",
      "Arroz integral",
      "Leite fresco",
      "Sabonete neutro",
      "Pão artesanal",
      "Suco natural"
    ],
    "objective": "operar venda, caixa, catálogo, estoque e reposição de um supermercado de pequeno ou médio porte.",
    "features": [
      "Frente de caixa com leitura por código, busca e atalhos.",
      "Carrinho com quantidade, remoção, cancelamento e observação.",
      "Catálogo de produtos, categorias, unidades, códigos e preços.",
      "Promoções, descontos autorizados e regras por período.",
      "Controle de estoque por movimento, ajuste, perda e inventário.",
      "Estoque mínimo, alerta e sugestão de reposição.",
      "Cadastro de fornecedores e pedidos de compra.",
      "Recebimento com conferência de quantidade e custo.",
      "Abertura, sangria, suprimento e fechamento de caixa.",
      "Clientes e identificação opcional da venda.",
      "Devolução e cancelamento auditados.",
      "Relatórios de vendas, margem, ruptura e desempenho por turno.",
      "Integrações fiscal e de pagamento como adaptadores de produção."
    ],
    "entities": [
      "Produto",
      "Categoria",
      "Preço",
      "Promoção",
      "Estoque",
      "Movimento",
      "Fornecedor",
      "PedidoCompra",
      "Recebimento",
      "Caixa",
      "Turno",
      "Venda",
      "ItemVenda",
      "Cliente."
    ],
    "uiux": [
      "Tela inicial é o PDV, com produtos à esquerda e pedido atual à direita.",
      "Navegação: `PDV`, `Produtos`, `Estoque`, `Compras`, `Caixa`, `Relatórios`.",
      "Busca e leitura de código mantêm foco contínuo no caixa.",
      "Ação “Finalizar venda” abre resumo e meios de pagamento.",
      "Estoque usa tabela com filtros, cobertura e alerta de ruptura.",
      "Mobile prioriza consulta e inventário; PDV completo prioriza desktop/tablet."
    ],
    "navigation": [
      "PDV",
      "Produtos",
      "Estoque",
      "Compras",
      "Caixa",
      "Relatórios"
    ],
    "demo": "totalização do carrinho, desconto, troco ilustrativo, baixa de estoque, alerta de mínimo e ticket médio. Dados sintéticos; nenhuma cobrança ou emissão fiscal.",
    "url": "systems/supermercado.html",
    "css": "systems/supermercado.css"
  },
  {
    "id": "restaurante",
    "title": "Restaurante",
    "category": "Comércio",
    "mode": "floor",
    "accent": "#ff7b54",
    "action": "Nova comanda",
    "roles": [
      "Garçom",
      "Cozinha",
      "Gerente"
    ],
    "samples": [
      "Mesa 01",
      "Mesa 04",
      "Mesa 07",
      "Balcão 02",
      "Reserva Lima",
      "Delivery 18"
    ],
    "objective": "coordenar salão, comandas, cozinha, cardápio, estoque por ficha técnica e fechamento.",
    "features": [
      "Mapa de mesas e status de ocupação.",
      "Reserva, fila de espera e associação de cliente.",
      "Comanda por mesa, pessoa ou balcão.",
      "Cardápio com categorias, disponibilidade, adicionais e observações.",
      "Divisão, transferência e união de comandas.",
      "KDS da cozinha com estações e tempo de preparo.",
      "Fichas técnicas e baixa estimada de ingredientes.",
      "Controle de pedidos para retirada e entrega.",
      "Fechamento parcial ou total e divisão de pagamento.",
      "Taxas, descontos autorizados e serviço.",
      "Controle de caixa e resumo do turno.",
      "Relatórios de giro de mesa, tempo, venda e itens."
    ],
    "entities": [
      "Mesa",
      "Reserva",
      "Comanda",
      "Pedido",
      "ItemPedido",
      "ProdutoCardapio",
      "Adicional",
      "EstacaoCozinha",
      "Receita",
      "Ingrediente",
      "Caixa",
      "Pagamento."
    ],
    "uiux": [
      "Tela inicial é mapa de mesas com cor, tempo e total.",
      "Navegação: `Salão`, `Cozinha`, `Reservas`, `Cardápio`, `Estoque`, `Caixa`.",
      "Abrir mesa leva a comanda em painel lateral, sem perder o mapa.",
      "KDS usa colunas por estágio e cartões legíveis à distância.",
      "O fechamento usa resumo, divisão e confirmação antes de concluir."
    ],
    "navigation": [
      "Salão",
      "Cozinha",
      "Reservas",
      "Cardápio",
      "Estoque",
      "Caixa"
    ],
    "demo": "cálculo de comanda, adicionais, taxa de serviço, divisão por pessoas, tempo de mesa e estimativa de consumo de ingredientes.",
    "url": "systems/restaurante.html",
    "css": "systems/restaurante.css"
  },
  {
    "id": "lanchonete",
    "title": "Lanchonete",
    "category": "Comércio",
    "mode": "kanban",
    "accent": "#ff9f43",
    "action": "Novo pedido",
    "roles": [
      "Atendente",
      "Chapeiro",
      "Gerente"
    ],
    "samples": [
      "Pedido #1042",
      "Pedido #1043",
      "Pedido #1044",
      "Combo da casa",
      "Retirada 12",
      "Entrega 08"
    ],
    "objective": "processar pedidos rápidos de balcão, retirada, delivery e cozinha com baixa fricção.",
    "features": [
      "Pedido rápido com atalhos e busca.",
      "Combos, tamanhos, adicionais e remoções.",
      "Senha sequencial e painel de retirada.",
      "Fila de produção por prioridade e estação.",
      "Controle de disponibilidade em tempo real.",
      "Pedidos de balcão, totem e delivery em uma fila.",
      "Cancelamento, estorno e reimpressão auditados.",
      "Caixa por operador e turno.",
      "Estoque simplificado por item e insumo crítico.",
      "Tempos médios de preparo e entrega.",
      "Relatórios de volume, mix e pico de demanda."
    ],
    "entities": [
      "Pedido",
      "Senha",
      "Canal",
      "Combo",
      "Produto",
      "Modificador",
      "Estacao",
      "TicketProducao",
      "Estoque",
      "Turno",
      "Operador."
    ],
    "uiux": [
      "Tela inicial é o pedido rápido com categorias em abas.",
      "Navegação: `Pedidos`, `Produção`, `Retirada`, `Produtos`, `Estoque`, `Caixa`.",
      "Após confirmar, o pedido aparece imediatamente na fila de produção.",
      "Painel de retirada usa tipografia grande e estados “preparando/pronto”.",
      "A UI privilegia toque, velocidade e poucos campos por etapa."
    ],
    "navigation": [
      "Pedidos",
      "Produção",
      "Retirada",
      "Produtos",
      "Estoque",
      "Caixa"
    ],
    "demo": "preço de combos, adicionais, fila, tempo estimado, total do pedido e agregação de itens vendidos.",
    "url": "systems/lanchonete.html",
    "css": "systems/lanchonete.css"
  },
  {
    "id": "farmacia",
    "title": "Farmácia",
    "category": "Comércio",
    "mode": "table",
    "accent": "#56cfe1",
    "action": "Nova dispensação",
    "roles": [
      "Balconista",
      "Farmacêutico",
      "Gerente"
    ],
    "samples": [
      "Dipirona 500 mg",
      "Protetor solar",
      "Vitamina C",
      "Curativo estéril",
      "Pedido #882",
      "Lote A24"
    ],
    "objective": "controlar balcão, vendas, lotes, validade, estoque, compras e conferência com rastreabilidade.",
    "features": [
      "Catálogo com princípios, apresentações e códigos.",
      "Estoque por lote, validade e localização.",
      "Venda de itens comuns e fluxo controlado conforme legislação aplicável.",
      "Registro de documentos obrigatórios sem decisão clínica automatizada.",
      "Separação e dupla conferência antes da entrega.",
      "Alertas de validade, lote e estoque mínimo.",
      "Fornecedores, pedidos e recebimentos.",
      "Devolução, perda e ajuste com motivo obrigatório.",
      "Caixa e fechamento por operador.",
      "Perfis, autorizações e trilha de auditoria.",
      "Relatórios de giro, validade, ruptura e movimentação."
    ],
    "entities": [
      "Produto",
      "Apresentacao",
      "Lote",
      "Validade",
      "Estoque",
      "Documento",
      "Atendimento",
      "Venda",
      "ItemVenda",
      "Fornecedor",
      "Compra",
      "Auditoria."
    ],
    "uiux": [
      "Tela inicial é balcão com busca de produto e disponibilidade por lote.",
      "Navegação: `Balcão`, `Separação`, `Estoque`, `Compras`, `Caixa`, `Auditoria`.",
      "Itens que exigem fluxo especial exibem gate e permissões, nunca recomendação clínica.",
      "A conferência apresenta produto, lote, validade e quantidade lado a lado.",
      "Alertas críticos usam cor somente quando exigem ação."
    ],
    "navigation": [
      "Balcão",
      "Separação",
      "Estoque",
      "Compras",
      "Caixa",
      "Auditoria"
    ],
    "demo": "seleção de lote FEFO, saldo, validade relativa, totalização e validação de transição. Apenas dados sintéticos; nenhuma prescrição ou dado de paciente real.",
    "url": "systems/farmacia.html",
    "css": "systems/farmacia.css"
  },
  {
    "id": "loja",
    "title": "Loja",
    "category": "Comércio",
    "mode": "cards",
    "accent": "#d6a2e8",
    "action": "Novo pedido",
    "roles": [
      "Vendedor",
      "Estoquista",
      "Gerente"
    ],
    "samples": [
      "Jaqueta urbana",
      "Tênis casual",
      "Bolsa compacta",
      "Pedido #1908",
      "Coleção Aurora",
      "Cliente Marina"
    ],
    "objective": "operar catálogo com variações, estoque, venda, pedidos omnicanal, troca e entrega.",
    "features": [
      "Catálogo com produto, variação, cor, tamanho e preço.",
      "Estoque por SKU e localização.",
      "PDV e carrinho com descontos autorizados.",
      "Pedidos de balcão, retirada e entrega.",
      "Separação, embalagem e expedição.",
      "Cadastro de clientes e histórico de compra.",
      "Troca, devolução e crédito auditados.",
      "Promoções e cupons.",
      "Compras e recebimento de fornecedores.",
      "Caixa e fechamento.",
      "Relatórios de venda, conversão, estoque e curva ABC."
    ],
    "entities": [
      "Produto",
      "SKU",
      "Variacao",
      "Estoque",
      "Cliente",
      "Pedido",
      "ItemPedido",
      "Fulfillment",
      "Troca",
      "Cupom",
      "Caixa",
      "Fornecedor."
    ],
    "uiux": [
      "Tela inicial alterna entre PDV e painel de pedidos.",
      "Navegação: `Vender`, `Pedidos`, `Produtos`, `Estoque`, `Clientes`, `Caixa`.",
      "Variações são selecionadas em matriz clara antes de adicionar.",
      "Pedidos usam kanban `Recebido → Separando → Pronto → Entregue`.",
      "Troca abre o pedido original e registra motivo e destino do item."
    ],
    "navigation": [
      "Vender",
      "Pedidos",
      "Produtos",
      "Estoque",
      "Clientes",
      "Caixa"
    ],
    "demo": "cálculo do carrinho, promoção, saldo por SKU, disponibilidade e movimentação do pedido.",
    "url": "systems/loja.html",
    "css": "systems/loja.css"
  },
  {
    "id": "hospital",
    "title": "Hospital",
    "category": "Saúde",
    "mode": "floor",
    "accent": "#ef476f",
    "action": "Nova admissão",
    "roles": [
      "Recepção",
      "Enfermagem",
      "Gestor assistencial"
    ],
    "samples": [
      "Leito A-101",
      "Leito A-104",
      "Leito B-202",
      "Triagem 08",
      "Paciente demo 12",
      "Alta prevista"
    ],
    "objective": "oferecer gestão operacional de admissão, triagem, atendimento, leitos e alta, sem substituir sistemas clínicos certificados.",
    "features": [
      "Cadastro e identificação segura do paciente.",
      "Admissão, episódio e origem do atendimento.",
      "Fila de triagem e prioridade registrada por profissional autorizado.",
      "Gestão de leitos, setores e transferências.",
      "Agenda de procedimentos e recursos.",
      "Ordens e resultados recebidos por integração autorizada.",
      "Evolução e documentos clínicos conforme escopo regulatório.",
      "Plano de alta e encerramento do episódio.",
      "Consentimentos, privacidade e acesso por necessidade.",
      "Auditoria integral de leitura e alteração.",
      "Painel operacional de capacidade e tempos."
    ],
    "entities": [
      "Paciente",
      "Episodio",
      "Admissao",
      "Triagem",
      "Leito",
      "Setor",
      "Transferencia",
      "Ordem",
      "Documento",
      "Alta",
      "Profissional",
      "Auditoria."
    ],
    "uiux": [
      "Tela inicial é mapa de capacidade por setor.",
      "Navegação: `Operação`, `Triagem`, `Leitos`, `Agenda`, `Episódios`, `Auditoria`.",
      "A busca do paciente exige identificação e apresenta mínimo necessário.",
      "A lateral do leito mostra contexto e ações autorizadas.",
      "A UI nunca recomenda diagnóstico ou conduta de forma autônoma."
    ],
    "navigation": [
      "Operação",
      "Triagem",
      "Leitos",
      "Agenda",
      "Episódios",
      "Auditoria"
    ],
    "demo": "ocupação, disponibilidade, tempo de espera e priorização operacional sintética. Sem dados reais, diagnóstico, prescrição ou decisão clínica.",
    "url": "systems/hospital.html",
    "css": "systems/hospital.css"
  },
  {
    "id": "clinica",
    "title": "Clínica",
    "category": "Saúde",
    "mode": "calendar",
    "accent": "#06d6a0",
    "action": "Novo agendamento",
    "roles": [
      "Recepção",
      "Profissional",
      "Gestor clínico"
    ],
    "samples": [
      "Consulta 08:00",
      "Retorno 09:30",
      "Procedimento 11:00",
      "Encaixe 14:20",
      "Teleconsulta 16:00",
      "Sala 03"
    ],
    "objective": "gerenciar agenda, cadastro, check-in, atendimento, documentos e retorno de uma clínica.",
    "features": [
      "Agenda por profissional, sala e serviço.",
      "Cadastro, consentimento e contatos do paciente.",
      "Confirmação, lembrete, check-in e fila.",
      "Registro de encontro e documentos do atendimento.",
      "Anexos e termos com controle de acesso.",
      "Solicitações e resultados por integração.",
      "Retorno, recorrência e lista de espera.",
      "Cobrança e convênio como adaptadores autorizados.",
      "Relatórios de ocupação, ausência e tempo.",
      "Auditoria de acesso a dados sensíveis."
    ],
    "entities": [
      "Paciente",
      "Profissional",
      "Agenda",
      "Sala",
      "Servico",
      "Consulta",
      "CheckIn",
      "Encontro",
      "Documento",
      "Consentimento",
      "Auditoria."
    ],
    "uiux": [
      "Tela inicial é agenda diária/semanal.",
      "Navegação: `Agenda`, `Fila`, `Pacientes`, `Atendimentos`, `Documentos`, `Relatórios`.",
      "Arrastar horário só é permitido com validação de conflito.",
      "Painel de consulta concentra check-in, estado e documentos.",
      "Dados clínicos aparecem apenas em contexto autorizado."
    ],
    "navigation": [
      "Agenda",
      "Fila",
      "Pacientes",
      "Atendimentos",
      "Documentos",
      "Relatórios"
    ],
    "demo": "disponibilidade, conflitos, ocupação, duração e fila. Todos os pacientes são sintéticos; a demo não oferece recomendação médica.",
    "url": "systems/clinica.html",
    "css": "systems/clinica.css"
  },
  {
    "id": "laboratorio",
    "title": "Laboratório",
    "category": "Saúde",
    "mode": "timeline",
    "accent": "#48cae4",
    "action": "Nova coleta",
    "roles": [
      "Recepção",
      "Técnico",
      "Responsável técnico"
    ],
    "samples": [
      "Amostra #A102",
      "Amostra #A103",
      "Coleta domiciliar",
      "Lote CQ-08",
      "Laudo #443",
      "Rota 02"
    ],
    "objective": "rastrear pedidos, amostras, processamento, controle de qualidade e liberação de resultados.",
    "features": [
      "Cadastro de pedido e exames solicitados.",
      "Geração e leitura de código de amostra.",
      "Coleta, recebimento, rejeição e nova coleta.",
      "Roteamento por setor e equipamento.",
      "Worklists e fila técnica.",
      "Controle de qualidade e bloqueio de lote analítico.",
      "Digitação ou integração de resultados.",
      "Validação técnica e liberação autorizada.",
      "Rastreabilidade completa da amostra.",
      "Monitoramento de prazo de atendimento.",
      "Auditoria, privacidade e retenção."
    ],
    "entities": [
      "Pedido",
      "Exame",
      "Amostra",
      "Coleta",
      "Setor",
      "Equipamento",
      "Worklist",
      "ControleQualidade",
      "Resultado",
      "Validacao",
      "Auditoria."
    ],
    "uiux": [
      "Tela inicial é pipeline de amostras por setor.",
      "Navegação: `Recepção`, `Coleta`, `Amostras`, `Worklists`, `Qualidade`, `Liberação`.",
      "Código da amostra mantém foco e reduz digitação.",
      "Rejeição exige motivo e ação corretiva.",
      "Resultado crítico exige fluxo e confirmação configuráveis."
    ],
    "navigation": [
      "Recepção",
      "Coleta",
      "Amostras",
      "Worklists",
      "Qualidade",
      "Liberação"
    ],
    "demo": "prazo, fila, capacidade, regras de aceite sintéticas e agregações. Não usa resultados clínicos reais nem interpreta exames.",
    "url": "systems/laboratorio.html",
    "css": "systems/laboratorio.css"
  },
  {
    "id": "escola",
    "title": "Escola",
    "category": "Educação",
    "mode": "classroom",
    "accent": "#ffd166",
    "action": "Novo registro",
    "roles": [
      "Professor",
      "Coordenação",
      "Secretaria"
    ],
    "samples": [
      "Turma 6A",
      "Turma 7B",
      "Turma 8A",
      "Avaliação mensal",
      "Frequência hoje",
      "Ocorrência #18"
    ],
    "objective": "administrar matrícula, turmas, frequência, atividades, notas, calendário e comunicação escolar.",
    "features": [
      "Cadastro de estudantes e responsáveis.",
      "Matrícula, remanejamento e situação acadêmica.",
      "Turmas, componentes, docentes e horários.",
      "Diário de frequência.",
      "Atividades, entregas e avaliação.",
      "Notas, critérios e fechamento de período.",
      "Calendário e eventos.",
      "Comunicação com responsáveis.",
      "Documentos e relatórios acadêmicos.",
      "Portais de docente, estudante e responsável.",
      "Permissões e auditoria."
    ],
    "entities": [
      "Estudante",
      "Responsavel",
      "Matricula",
      "Turma",
      "Disciplina",
      "Docente",
      "Aula",
      "Frequencia",
      "Atividade",
      "Avaliacao",
      "Nota",
      "Periodo."
    ],
    "uiux": [
      "Docente inicia no diário da turma atual.",
      "Navegação: `Hoje`, `Turmas`, `Atividades`, `Avaliações`, `Calendário`, `Relatórios`.",
      "Chamada usa lista rápida e suporte a teclado/toque.",
      "Visão da turma combina progresso sem expor comparação indevida.",
      "Portais mudam navegação conforme o papel."
    ],
    "navigation": [
      "Hoje",
      "Turmas",
      "Atividades",
      "Avaliações",
      "Calendário",
      "Relatórios"
    ],
    "demo": "frequência agregada, pesos de avaliação, progresso e fechamento sintético. Nenhum estudante real.",
    "url": "systems/escola.html",
    "css": "systems/escola.css"
  },
  {
    "id": "universidade",
    "title": "Universidade",
    "category": "Educação",
    "mode": "cards",
    "accent": "#9b5de5",
    "action": "Nova solicitação",
    "roles": [
      "Aluno",
      "Docente",
      "Secretaria acadêmica"
    ],
    "samples": [
      "Engenharia 2026",
      "Disciplina INF201",
      "Turma N2",
      "Matrícula #2081",
      "Projeto Atlas",
      "Biblioteca central"
    ],
    "objective": "gerenciar programas, disciplinas, ofertas, matrícula, projetos e trajetória acadêmica.",
    "features": [
      "Estrutura de programas, currículos e pré-requisitos.",
      "Disciplinas, turmas, docentes, salas e horários.",
      "Oferta e inscrição em disciplinas.",
      "Validação de conflito e pré-requisito.",
      "Atividades, avaliações e frequência.",
      "Projetos de pesquisa e extensão.",
      "Orientação e marcos de trabalho final.",
      "Histórico, créditos e integralização.",
      "Calendário e comunicações.",
      "Portais por papel e auditoria."
    ],
    "entities": [
      "Programa",
      "Curriculo",
      "Disciplina",
      "Oferta",
      "Turma",
      "Docente",
      "Estudante",
      "Inscricao",
      "Credito",
      "Projeto",
      "Orientacao",
      "Marco."
    ],
    "uiux": [
      "Tela inicial é portal personalizado por papel.",
      "Navegação discente: `Meu curso`, `Matrícula`, `Agenda`, `Projetos`, `Histórico`.",
      "Navegação docente: `Turmas`, `Avaliações`, `Orientações`, `Projetos`.",
      "Matrícula usa grade horária visual e explica bloqueios.",
      "Projetos usam portfólio com marcos e responsáveis."
    ],
    "navigation": [
      "Meu curso",
      "Matrícula",
      "Agenda",
      "Projetos",
      "Histórico"
    ],
    "demo": "conflito de horário, pré-requisitos sintéticos, créditos, progresso curricular e marcos de projeto.",
    "url": "systems/universidade.html",
    "css": "systems/universidade.css"
  },
  {
    "id": "biblioteca",
    "title": "Biblioteca",
    "category": "Educação",
    "mode": "library",
    "accent": "#00b4d8",
    "action": "Novo empréstimo",
    "roles": [
      "Atendente",
      "Bibliotecário",
      "Gestor"
    ],
    "samples": [
      "Dom Casmurro",
      "Código Limpo",
      "Design de Sistemas",
      "História do Brasil",
      "Reserva #304",
      "Usuário demo"
    ],
    "objective": "administrar catálogo, exemplares, usuários, empréstimos, reservas, aquisição e inventário.",
    "features": [
      "Catálogo bibliográfico e autoridades.",
      "Exemplares, localização e estado físico.",
      "Cadastro e categoria de usuário.",
      "Empréstimo, renovação e devolução.",
      "Reserva e fila por título.",
      "Regras de prazo e limite por categoria.",
      "Multa, isenção e bloqueio configuráveis.",
      "Aquisição, recebimento e tombamento.",
      "Inventário e descarte.",
      "Busca pública e disponibilidade.",
      "Relatórios e auditoria."
    ],
    "entities": [
      "Obra",
      "Autoridade",
      "Exemplar",
      "Localizacao",
      "Usuario",
      "Emprestimo",
      "Reserva",
      "RegraCirculacao",
      "Multa",
      "Aquisicao",
      "Inventario."
    ],
    "uiux": [
      "Balcão inicia em circulação com leitor de código.",
      "Navegação: `Circulação`, `Catálogo`, `Usuários`, `Reservas`, `Aquisição`, `Inventário`.",
      "Busca pública prioriza título, autor, assunto e disponibilidade.",
      "Tela de usuário mostra empréstimos, bloqueios e reservas juntos.",
      "Devolução indica próxima reserva e destino do exemplar."
    ],
    "navigation": [
      "Circulação",
      "Catálogo",
      "Usuários",
      "Reservas",
      "Aquisição",
      "Inventário"
    ],
    "demo": "prazos, limites, fila de reserva, multa ilustrativa e disponibilidade.",
    "url": "systems/biblioteca.html",
    "css": "systems/biblioteca.css"
  },
  {
    "id": "oficina",
    "title": "Oficina",
    "category": "Serviços",
    "mode": "kanban",
    "accent": "#f8961e",
    "action": "Nova ordem",
    "roles": [
      "Consultor",
      "Mecânico",
      "Gerente"
    ],
    "samples": [
      "OS #2041",
      "OS #2042",
      "Revisão 40 mil",
      "Diagnóstico elétrico",
      "Peça reservada",
      "Veículo demo"
    ],
    "objective": "controlar clientes, veículos, orçamento, ordem de serviço, peças, execução e entrega.",
    "features": [
      "Cadastro de cliente e veículo.",
      "Agenda e recepção do veículo.",
      "Checklist de entrada com fotos.",
      "Diagnóstico e orçamento.",
      "Aprovação do cliente registrada.",
      "Ordem de serviço, tarefas e técnicos.",
      "Peças, estoque e requisição.",
      "Apontamento de tempo e status.",
      "Teste, liberação e entrega.",
      "Faturamento e histórico do veículo.",
      "Indicadores de prazo, retrabalho e produtividade."
    ],
    "entities": [
      "Cliente",
      "Veiculo",
      "Agendamento",
      "Checklist",
      "Diagnostico",
      "Orcamento",
      "OrdemServico",
      "Tarefa",
      "Tecnico",
      "Peca",
      "Apontamento",
      "Entrega."
    ],
    "uiux": [
      "Tela inicial é bancada de ordens por etapa.",
      "Navegação: `Agenda`, `Recepção`, `Ordens`, `Peças`, `Equipe`, `Caixa`.",
      "Ordem abre em workspace com abas de diagnóstico, orçamento, execução e histórico.",
      "Aprovação é um gate antes da execução.",
      "Técnicos usam visão simplificada por tarefa."
    ],
    "navigation": [
      "Agenda",
      "Recepção",
      "Ordens",
      "Peças",
      "Equipe",
      "Caixa"
    ],
    "demo": "orçamento, peças, horas, capacidade de boxes e transições de aprovação.",
    "url": "systems/oficina.html",
    "css": "systems/oficina.css"
  },
  {
    "id": "hotel",
    "title": "Hotel",
    "category": "Serviços",
    "mode": "floor",
    "accent": "#90be6d",
    "action": "Nova reserva",
    "roles": [
      "Recepção",
      "Governança",
      "Gerente"
    ],
    "samples": [
      "Quarto 101",
      "Quarto 103",
      "Suíte 204",
      "Reserva #881",
      "Check-in 14:00",
      "Limpeza 305"
    ],
    "objective": "administrar disponibilidade, tarifas, reservas, recepção, estadias, governança e fechamento.",
    "features": [
      "Tipos de quarto, inventário e bloqueios.",
      "Tarifas, períodos e regras de ocupação.",
      "Busca de disponibilidade e reserva.",
      "Cadastro de hóspede e acompanhantes.",
      "Check-in, alocação e troca de quarto.",
      "Folio com diárias, consumo e ajustes.",
      "Governança e status de limpeza.",
      "Manutenção e indisponibilidade.",
      "Check-out e pagamento.",
      "Relatórios de ocupação, diária média e receita.",
      "Auditoria de alterações de tarifa e folio."
    ],
    "entities": [
      "Quarto",
      "TipoQuarto",
      "Tarifa",
      "Reserva",
      "Hospede",
      "Estadia",
      "Folio",
      "Lancamento",
      "Limpeza",
      "Manutencao",
      "Pagamento."
    ],
    "uiux": [
      "Tela inicial é mapa de quartos por estado.",
      "Navegação: `Reservas`, `Recepção`, `Quartos`, `Governança`, `Folio`, `Relatórios`.",
      "Busca de disponibilidade usa período, hóspedes e tipo.",
      "Check-in é assistido em etapas curtas.",
      "Governança possui visão móvel para atualização em campo."
    ],
    "navigation": [
      "Reservas",
      "Recepção",
      "Quartos",
      "Governança",
      "Folio",
      "Relatórios"
    ],
    "demo": "disponibilidade, tarifa por período, ocupação, diária média, folio e saldo.",
    "url": "systems/hotel.html",
    "css": "systems/hotel.css"
  },
  {
    "id": "estacionamento",
    "title": "Estacionamento",
    "category": "Serviços",
    "mode": "floor",
    "accent": "#43aa8b",
    "action": "Nova entrada",
    "roles": [
      "Operador",
      "Supervisor",
      "Auditor"
    ],
    "samples": [
      "Vaga A01",
      "Vaga A04",
      "Vaga B12",
      "Mensalista 208",
      "Ticket #882",
      "Setor coberto"
    ],
    "objective": "controlar entradas, vagas, permanência, tarifas, mensalistas, pagamento e saída.",
    "features": [
      "Cadastro de setores, vagas e capacidade.",
      "Entrada manual, ticket ou leitura integrada.",
      "Sessão de estacionamento e placa.",
      "Tarifas por faixa, tolerância e período.",
      "Mapa de ocupação em tempo real.",
      "Pagamento e validação de saída.",
      "Mensalistas, planos e veículos autorizados.",
      "Ocorrências, bloqueios e perda de ticket.",
      "Controle de dispositivos de entrada/saída.",
      "Fechamento de caixa e relatórios."
    ],
    "entities": [
      "Setor",
      "Vaga",
      "Veiculo",
      "Sessao",
      "Ticket",
      "Tarifa",
      "Pagamento",
      "Mensalista",
      "Plano",
      "Dispositivo",
      "Ocorrencia",
      "Caixa."
    ],
    "uiux": [
      "Tela inicial é mapa de vagas por setor.",
      "Navegação: `Operação`, `Entradas`, `Saídas`, `Mensalistas`, `Tarifas`, `Caixa`.",
      "Entrada privilegia placa e setor; saída mostra tempo e valor.",
      "Alertas destacam capacidade crítica e sessão irregular.",
      "Mobile serve rondas e atualização de ocorrência."
    ],
    "navigation": [
      "Operação",
      "Entradas",
      "Saídas",
      "Mensalistas",
      "Tarifas",
      "Caixa"
    ],
    "demo": "tempo, tarifa, tolerância, capacidade, ocupação e valor da sessão.",
    "url": "systems/estacionamento.html",
    "css": "systems/estacionamento.css"
  },
  {
    "id": "salao",
    "title": "Salão",
    "category": "Serviços",
    "mode": "calendar",
    "accent": "#f15bb5",
    "action": "Novo agendamento",
    "roles": [
      "Recepção",
      "Profissional",
      "Gerente"
    ],
    "samples": [
      "Corte 09:00",
      "Coloração 10:30",
      "Manicure 13:00",
      "Barba 14:00",
      "Cliente Ana",
      "Estação 04"
    ],
    "objective": "administrar agenda, clientes, profissionais, serviços, comissão, consumo e caixa.",
    "features": [
      "Cadastro de clientes e preferências autorizadas.",
      "Profissionais, horários e disponibilidade.",
      "Serviços, duração, preço e recursos.",
      "Agenda diária/semanal e lista de espera.",
      "Confirmação, cancelamento e ausência.",
      "Comanda de serviços e produtos.",
      "Comissão por profissional e serviço.",
      "Estoque de produtos e consumo.",
      "Caixa e fechamento.",
      "Relatórios de ocupação, receita e retorno."
    ],
    "entities": [
      "Cliente",
      "Profissional",
      "Disponibilidade",
      "Servico",
      "Agendamento",
      "Recurso",
      "Comanda",
      "Produto",
      "Consumo",
      "Comissao",
      "Caixa."
    ],
    "uiux": [
      "Tela inicial é agenda por profissional.",
      "Navegação: `Agenda`, `Clientes`, `Equipe`, `Serviços`, `Produtos`, `Caixa`.",
      "Arrastar horário valida duração, conflito e recurso.",
      "Atendimento abre comanda em painel lateral.",
      "Mobile prioriza agenda e atualização rápida de status."
    ],
    "navigation": [
      "Agenda",
      "Clientes",
      "Equipe",
      "Serviços",
      "Produtos",
      "Caixa"
    ],
    "demo": "disponibilidade, conflito, duração, valor, comissão e ocupação da agenda.",
    "url": "systems/salao.html",
    "css": "systems/salao.css"
  },
  {
    "id": "fabrica",
    "title": "Fábrica",
    "category": "Indústria",
    "mode": "factory",
    "accent": "#f94144",
    "action": "Nova ordem",
    "roles": [
      "Planejador",
      "Operador",
      "Gestor industrial"
    ],
    "samples": [
      "OP #4401",
      "Linha A",
      "Linha B",
      "Lote 26-11",
      "Inspeção CQ",
      "Parada prevista"
    ],
    "objective": "planejar e acompanhar ordens de produção, materiais, operações, qualidade e desempenho.",
    "features": [
      "Cadastro de produto, roteiro e lista de materiais.",
      "Demanda e planejamento de produção.",
      "Ordem de produção e lote.",
      "Centros de trabalho e capacidade.",
      "Reserva e consumo de materiais.",
      "Apontamento de quantidade, tempo e perda.",
      "Estados de operação e fila de máquina.",
      "Inspeção de qualidade e não conformidade.",
      "Rastreabilidade de lote.",
      "Paradas e motivos.",
      "Indicadores de produtividade e OEE simplificado."
    ],
    "entities": [
      "Produto",
      "BOM",
      "Roteiro",
      "OrdemProducao",
      "Lote",
      "CentroTrabalho",
      "Operacao",
      "Material",
      "Apontamento",
      "Inspecao",
      "NaoConformidade",
      "Parada."
    ],
    "uiux": [
      "Tela inicial é quadro das ordens por estágio e linha.",
      "Navegação: `Planejamento`, `Ordens`, `Linha`, `Materiais`, `Qualidade`, `Indicadores`.",
      "Operador usa terminal simplificado por centro de trabalho.",
      "Planejador vê capacidade e conflitos em horizonte temporal.",
      "Qualidade pode bloquear avanço e liberar lote."
    ],
    "navigation": [
      "Planejamento",
      "Ordens",
      "Linha",
      "Materiais",
      "Qualidade",
      "Indicadores"
    ],
    "demo": "necessidade de material, capacidade, rendimento, perda, progresso e OEE ilustrativo.",
    "url": "systems/fabrica.html",
    "css": "systems/fabrica.css"
  },
  {
    "id": "manutencao",
    "title": "Manutenção",
    "category": "Indústria",
    "mode": "kanban",
    "accent": "#f3722c",
    "action": "Nova OS",
    "roles": [
      "Solicitante",
      "Técnico",
      "Supervisor"
    ],
    "samples": [
      "OS #771",
      "OS #772",
      "Preventiva mensal",
      "Ativo PR-08",
      "Inspeção elétrica",
      "Peça aguardando"
    ],
    "objective": "administrar ativos, planos, ordens, inspeções, peças, falhas e disponibilidade.",
    "features": [
      "Hierarquia de ativos e localização.",
      "Criticidade, medidores e documentos.",
      "Planos preventivos por tempo ou uso.",
      "Solicitação e ordem de manutenção.",
      "Priorização e planejamento de equipe.",
      "Checklist, inspeção e apontamento.",
      "Peças, reserva e consumo.",
      "Falha, causa, ação e tempo parado.",
      "Liberação e retorno à operação.",
      "Histórico do ativo.",
      "Indicadores MTBF, MTTR e backlog."
    ],
    "entities": [
      "Ativo",
      "Localizacao",
      "Medidor",
      "Plano",
      "Solicitacao",
      "OrdemManutencao",
      "Tarefa",
      "Tecnico",
      "Peca",
      "Falha",
      "Causa",
      "Apontamento."
    ],
    "uiux": [
      "Tela inicial é lista de ativos e intervenções críticas.",
      "Navegação: `Ativos`, `Solicitações`, `Ordens`, `Planos`, `Peças`, `Indicadores`.",
      "Ordem possui checklist móvel e modo offline planejado.",
      "Planejamento usa calendário de equipe e ativos.",
      "Liberação exige checklist concluído."
    ],
    "navigation": [
      "Ativos",
      "Solicitações",
      "Ordens",
      "Planos",
      "Peças",
      "Indicadores"
    ],
    "demo": "prioridade operacional, horas, capacidade de equipe, disponibilidade, MTBF/MTTR sintéticos e saldo de peças.",
    "url": "systems/manutencao.html",
    "css": "systems/manutencao.css"
  },
  {
    "id": "transportadora",
    "title": "Transportadora",
    "category": "Transporte",
    "mode": "map",
    "accent": "#277da1",
    "action": "Nova expedição",
    "roles": [
      "Expedição",
      "Motorista",
      "Gestor logístico"
    ],
    "samples": [
      "Carga #5501",
      "Rota Norte",
      "Rota Centro",
      "Entrega #902",
      "Doca 04",
      "Ocorrência #17"
    ],
    "objective": "gerenciar cotação, coleta, embarque, rota, eventos, entrega e faturamento do frete.",
    "features": [
      "Clientes, endereços e contratos.",
      "Cotação e cálculo de frete configurável.",
      "Ordem de transporte e volumes.",
      "Planejamento de coleta e entrega.",
      "Consolidação de cargas e veículo.",
      "Despacho e roteiro.",
      "Eventos de rastreamento.",
      "Ocorrências e tratativas.",
      "Comprovante de entrega.",
      "Faturamento e conferência.",
      "Painéis de prazo, custo e nível de serviço."
    ],
    "entities": [
      "Cliente",
      "Cotacao",
      "OrdemTransporte",
      "Volume",
      "Carga",
      "Rota",
      "Veiculo",
      "Motorista",
      "Evento",
      "Ocorrencia",
      "Comprovante",
      "Fatura."
    ],
    "uiux": [
      "Tela inicial é mapa de cargas e exceções.",
      "Navegação: `Cotações`, `Coletas`, `Cargas`, `Rotas`, `Ocorrências`, `Faturamento`.",
      "Carga abre timeline de eventos e documentos.",
      "Planejamento combina mapa e lista de paradas.",
      "Exceções recebem destaque e fila própria."
    ],
    "navigation": [
      "Cotações",
      "Coletas",
      "Cargas",
      "Rotas",
      "Ocorrências",
      "Faturamento"
    ],
    "demo": "cubagem, frete ilustrativo, capacidade, sequência de paradas, prazo e agregações.",
    "url": "systems/transportadora.html",
    "css": "systems/transportadora.css"
  },
  {
    "id": "gestao-frotas",
    "title": "Gestão de frotas",
    "category": "Transporte",
    "mode": "map",
    "accent": "#4d908e",
    "action": "Novo veículo",
    "roles": [
      "Despachante",
      "Motorista",
      "Gestor de frota"
    ],
    "samples": [
      "Veículo F-101",
      "Veículo F-104",
      "Rota 22",
      "Abastecimento #81",
      "Manutenção 30k",
      "Alerta de pneu"
    ],
    "objective": "controlar veículos, motoristas, viagens, combustível, manutenção, documentos e disponibilidade.",
    "features": [
      "Cadastro técnico e situação do veículo.",
      "Motoristas e autorizações.",
      "Viagens, rotas e alocação.",
      "Eventos de telemetria por integração.",
      "Abastecimentos, consumo e custo.",
      "Planos e ordens de manutenção.",
      "Pneus e componentes críticos.",
      "Documentos, licenças e vencimentos.",
      "Ocorrências e indisponibilidade.",
      "Checklist de saída e retorno.",
      "Indicadores de utilização, consumo e custo."
    ],
    "entities": [
      "Veiculo",
      "Motorista",
      "Viagem",
      "Rota",
      "EventoTelemetria",
      "Abastecimento",
      "PlanoManutencao",
      "Ordem",
      "Pneu",
      "Documento",
      "Checklist",
      "Ocorrencia."
    ],
    "uiux": [
      "Tela inicial é grade da frota por disponibilidade.",
      "Navegação: `Frota`, `Viagens`, `Motoristas`, `Combustível`, `Manutenção`, `Documentos`.",
      "Veículo possui visão 360 com próximos vencimentos.",
      "Planejamento impede alocação em conflito ou manutenção.",
      "Mobile atende checklist e ocorrência em campo."
    ],
    "navigation": [
      "Frota",
      "Viagens",
      "Motoristas",
      "Combustível",
      "Manutenção",
      "Documentos"
    ],
    "demo": "disponibilidade, conflito de alocação, consumo médio, custo por distância e vencimentos sintéticos.",
    "url": "systems/gestao-frotas.html",
    "css": "systems/gestao-frotas.css"
  },
  {
    "id": "ERP",
    "title": "ERP",
    "category": "Administração",
    "mode": "ledger",
    "accent": "#577590",
    "action": "Novo lançamento",
    "roles": [
      "Analista",
      "Aprovador",
      "Administrador"
    ],
    "samples": [
      "Conta a pagar #81",
      "Pedido de compra",
      "Centro de custo 04",
      "Conciliação diária",
      "Orçamento 2027",
      "Fechamento mensal"
    ],
    "objective": "integrar cadastros, vendas, compras, estoque, financeiro e visão gerencial de uma pequena empresa.",
    "features": [
      "Organização, unidades, usuários e parâmetros.",
      "Cadastros de clientes, fornecedores, produtos e serviços.",
      "Orçamento, pedido e faturamento de venda.",
      "Solicitação, pedido e recebimento de compra.",
      "Estoque, movimentação e inventário.",
      "Contas a receber e a pagar.",
      "Caixa, bancos e conciliação.",
      "Centros de custo e categorias financeiras.",
      "Integrações fiscal e contábil por adaptadores.",
      "Fluxo de aprovação configurável.",
      "Dashboard e relatórios.",
      "RBAC e auditoria transversal."
    ],
    "entities": [
      "Organizacao",
      "Unidade",
      "Pessoa",
      "Produto",
      "PedidoVenda",
      "PedidoCompra",
      "MovimentoEstoque",
      "Titulo",
      "ContaFinanceira",
      "CentroCusto",
      "Aprovacao",
      "Auditoria."
    ],
    "uiux": [
      "Tela inicial é visão gerencial com pendências por módulo.",
      "Navegação: `Vendas`, `Compras`, `Estoque`, `Financeiro`, `Cadastros`, `Relatórios`.",
      "Busca global abre qualquer entidade sem navegar por menus profundos.",
      "Documentos usam cabeçalho, itens, totais e timeline de estado.",
      "Aprovações aparecem em caixa de entrada própria."
    ],
    "navigation": [
      "Vendas",
      "Compras",
      "Estoque",
      "Financeiro",
      "Cadastros",
      "Relatórios"
    ],
    "demo": "totais, saldo, custo médio ilustrativo, fluxo de caixa, aging e validação de aprovação.",
    "url": "systems/ERP.html",
    "css": "systems/ERP.css"
  },
  {
    "id": "CRM",
    "title": "CRM",
    "category": "Administração",
    "mode": "pipeline",
    "accent": "#9b5de5",
    "action": "Nova oportunidade",
    "roles": [
      "Vendedor",
      "Gestor comercial",
      "Administrador"
    ],
    "samples": [
      "Lead Aurora",
      "Conta Horizonte",
      "Oportunidade Atlas",
      "Proposta #304",
      "Atividade 15:00",
      "Meta trimestral"
    ],
    "objective": "controlar leads, contas, contatos, oportunidades, atividades, propostas e previsão comercial.",
    "features": [
      "Captura e qualificação de leads.",
      "Contas e contatos relacionados.",
      "Pipeline configurável por equipe.",
      "Oportunidade, valor, probabilidade e previsão.",
      "Atividades, tarefas e calendário.",
      "Histórico de interações.",
      "Produtos, proposta e versões.",
      "Motivo de ganho ou perda.",
      "Metas e forecast.",
      "Automação simples de tarefas e alertas.",
      "Relatórios de conversão e ciclo.",
      "Permissões por equipe e auditoria."
    ],
    "entities": [
      "Lead",
      "Conta",
      "Contato",
      "Oportunidade",
      "Etapa",
      "Atividade",
      "Tarefa",
      "Produto",
      "Proposta",
      "Meta",
      "Equipe",
      "Auditoria."
    ],
    "uiux": [
      "Tela inicial é pipeline kanban.",
      "Navegação: `Pipeline`, `Leads`, `Contas`, `Atividades`, `Propostas`, `Relatórios`.",
      "Card mostra valor, próximo passo e tempo na etapa.",
      "Detalhe da oportunidade combina timeline, tarefas e proposta.",
      "Mover etapa pode exigir campos configuráveis."
    ],
    "navigation": [
      "Pipeline",
      "Leads",
      "Contas",
      "Atividades",
      "Propostas",
      "Relatórios"
    ],
    "demo": "valor ponderado, conversão, tempo de ciclo, meta e forecast sintético.",
    "url": "systems/CRM.html",
    "css": "systems/CRM.css"
  },
  {
    "id": "HRM",
    "title": "HRM",
    "category": "Administração",
    "mode": "people",
    "accent": "#00bbf9",
    "action": "Novo colaborador",
    "roles": [
      "Colaborador",
      "Liderança",
      "RH"
    ],
    "samples": [
      "Colaborador #201",
      "Vaga Analista",
      "Férias novembro",
      "Ponto pendente",
      "Avaliação 1:1",
      "Folha mensal"
    ],
    "objective": "administrar estrutura, pessoas, documentos, integração, jornada, ausências e desenvolvimento.",
    "features": [
      "Organização, cargos, posições e centros.",
      "Cadastro funcional com minimização de dados.",
      "Admissão e onboarding por tarefas.",
      "Documentos e vencimentos.",
      "Jornada, ponto ou integração autorizada.",
      "Férias, ausências e aprovação.",
      "Benefícios e elegibilidade básica.",
      "Objetivos, ciclos e avaliações.",
      "Treinamentos e competências.",
      "Portal de autosserviço.",
      "Integração de folha por adaptador.",
      "RBAC rigoroso e auditoria."
    ],
    "entities": [
      "Pessoa",
      "Vinculo",
      "Cargo",
      "Posicao",
      "Unidade",
      "Documento",
      "TarefaOnboarding",
      "Jornada",
      "Ausencia",
      "Beneficio",
      "CicloAvaliacao",
      "Treinamento."
    ],
    "uiux": [
      "Tela inicial muda por papel: pessoa, gestor ou RH.",
      "Navegação RH: `Pessoas`, `Estrutura`, `Jornada`, `Ausências`, `Desenvolvimento`, `Relatórios`.",
      "Perfil da pessoa usa seções e controle granular de acesso.",
      "Gestor possui caixa de aprovações e visão do time.",
      "Autosserviço privilegia mobile e linguagem clara."
    ],
    "navigation": [
      "Pessoas",
      "Estrutura",
      "Jornada",
      "Ausências",
      "Desenvolvimento",
      "Relatórios"
    ],
    "demo": "saldo de férias sintético, horas, elegibilidade, progresso de onboarding e indicadores agregados. Nenhum dado pessoal real.",
    "url": "systems/HRM.html",
    "css": "systems/HRM.css"
  },
  {
    "id": "WMS",
    "title": "WMS",
    "category": "Administração",
    "mode": "warehouse",
    "accent": "#00f5d4",
    "action": "Nova tarefa",
    "roles": [
      "Operador",
      "Conferente",
      "Gestor de armazém"
    ],
    "samples": [
      "Rua A-01",
      "Rua A-04",
      "Doca 02",
      "Onda #781",
      "Picking #903",
      "Inventário cíclico"
    ],
    "objective": "controlar recebimento, endereçamento, inventário, reposição, separação, embalagem e expedição.",
    "features": [
      "Armazéns, zonas, ruas, posições e capacidade.",
      "Aviso de recebimento e agenda de doca.",
      "Recebimento, conferência e divergência.",
      "Qualidade e quarentena.",
      "Endereçamento dirigido.",
      "Inventário por item, lote, validade e posição.",
      "Reposição de picking.",
      "Ondas, tarefas e rotas de separação.",
      "Conferência, embalagem e etiqueta.",
      "Expedição e carregamento.",
      "Contagem cíclica e ajuste auditado.",
      "Rastreabilidade e indicadores operacionais."
    ],
    "entities": [
      "Armazem",
      "Localizacao",
      "Item",
      "Lote",
      "ASN",
      "Recebimento",
      "UnidadeEstoque",
      "Tarefa",
      "Onda",
      "Separacao",
      "Embalagem",
      "Expedicao",
      "Contagem."
    ],
    "uiux": [
      "Tela inicial é mapa de capacidade e fila de tarefas.",
      "Navegação: `Recebimento`, `Estoque`, `Reposição`, `Separação`, `Expedição`, `Inventário`.",
      "Operação móvel usa leitura de código e confirmações curtas.",
      "Desktop atende planejamento, exceções e capacidade.",
      "Toda divergência exige motivo e trilha."
    ],
    "navigation": [
      "Recebimento",
      "Estoque",
      "Reposição",
      "Separação",
      "Expedição",
      "Inventário"
    ],
    "demo": "capacidade, endereçamento, FEFO/FIFO ilustrativo, rota de picking, saldo e produtividade.",
    "url": "systems/WMS.html",
    "css": "systems/WMS.css"
  },
  {
    "id": "BI",
    "title": "BI",
    "category": "Administração",
    "mode": "dashboard",
    "accent": "#fee440",
    "action": "Nova análise",
    "roles": [
      "Analista",
      "Gestor",
      "Administrador"
    ],
    "samples": [
      "Receita líquida",
      "Margem operacional",
      "Conversão",
      "Ruptura",
      "Tempo de ciclo",
      "Meta mensal"
    ],
    "objective": "conectar dados, modelar métricas, atualizar datasets e entregar dashboards governados.",
    "features": [
      "Conexões e credenciais protegidas.",
      "Ingestão agendada ou por evento.",
      "Transformações e qualidade de dados.",
      "Modelo semântico, dimensões e medidas.",
      "Datasets versionados.",
      "Dashboards, páginas e componentes.",
      "Filtros globais, drill-down e drill-through.",
      "Alertas por limiar.",
      "Compartilhamento e RBAC por conteúdo/dado.",
      "Catálogo, descrição e linhagem.",
      "Exportação controlada.",
      "Histórico de atualização, auditoria e observabilidade."
    ],
    "entities": [
      "Fonte",
      "Conexao",
      "Pipeline",
      "Transformacao",
      "Dataset",
      "ModeloSemantico",
      "Medida",
      "Dashboard",
      "Widget",
      "Filtro",
      "Alerta",
      "Permissao",
      "Execucao."
    ],
    "uiux": [
      "Tela inicial é catálogo de dashboards e favoritos.",
      "Navegação: `Dashboards`, `Explorar`, `Datasets`, `Pipelines`, `Alertas`, `Administração`.",
      "Dashboard preserva filtros e explica atualização/fonte.",
      "Exploração usa painel lateral de campos e área visual.",
      "Erro de atualização mostra impacto, etapa e ação recomendada."
    ],
    "navigation": [
      "Dashboards",
      "Explorar",
      "Datasets",
      "Pipelines",
      "Alertas",
      "Administração"
    ],
    "demo": "agregações, percentuais, médias, comparação com meta, filtros e transformação de dados sintéticos.",
    "url": "systems/BI.html",
    "css": "systems/BI.css"
  }
];
