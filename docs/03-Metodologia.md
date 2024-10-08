
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A abordagem adotada pela equipe para o desenvolvimento do projeto de sistema para o negócio de rodízio de pizzas baseou-se em uma metodologia ágil, adaptada para as necessidades específicas do cliente. A metodologia ágil foi escolhida devido à sua flexibilidade e capacidade de responder rapidamente às mudanças de requisitos, características essenciais para um ambiente dinâmico como o do setor de serviços de alimentação. Para o desenvolvimento do projeto, utilizamos o ambiente integrado de desenvolvimento Visual Studio. Este ambiente foi selecionado por sua capacidade robusta de suportar diversas tecnologias de maneira integrada, facilitando não apenas a codificação, mas também a depuração e a integração contínua de novas funcionalidades.

A gestão do código fonte foi realizada através do Git, configurado em um fluxo de trabalho baseado no método Kanban. Isso proporcionou à equipe uma visão clara das tarefas em andamento e permitiu priorizar de forma eficiente as entregas. Reuniões diárias (stand-ups) foram realizadas para alinhar o progresso, identificar obstáculos e ajustar estratégias conforme necessário. Ao adotar essa abordagem ágil combinada com ferramentas modernas de desenvolvimento e gestão de projetos, não apenas atendemos às expectativas do cliente, mas também superamos suas necessidades. 

O sistema resultante não apenas automatiza o processo de gestão do rodízio de pizzas, mas também melhora significativamente a experiência tanto para os operadores quanto para os clientes finais, demonstrando nossa capacidade de entrega de soluções eficientes e orientadas para resultados.

## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito deverá ser apresentada em uma tabela que especifica que detalha Ambiente, Plataforma e Link de Acesso. 
Nota: Vide documento modelo do estudo de caso "Portal de Notícias" e defina também os ambientes e frameworks que serão utilizados no desenvolvimento de aplicações móveis.

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `development`: código de teste de desenvolvimento

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

A atualização que será realizada, garantindo entregas contínuas e com qualidade sempre com aprovação das partes. Além disso, usaremos para controle de versão do código ou github com branchs como main (código original), development (código de teste de desenvolvimento) e um branch específico para cada história desenvolvida.

> **Links Úteis**:
> - [Microfundamento: Gerência de Configuração](https://pucminas.instructure.com/courses/87878/)
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Gerenciamento de Projeto

### Divisão de Papéis

Abaixo segue a divisão de papeis da equipe:

Exemplificação: A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A equipe está organizada da seguinte maneira:
- Scrum Master: Vinicius Ferreira;
- Product Owner: Vitor Emmanuel;
- Equipe de Desenvolvimento: Amanda Avelino, Gabriel Arthur, Gabriel Chaves, João Vitor Almeida, Vinicius Ferreira e Vitor Emmanuel;
- Equipe de Design: Amanda Avelino, Gabriel Chaves e João Vitor Almeida.

> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles)

### Processo

 Papéis no Scrum:
Product Owner (PO): Responsável por gerenciar o backlog do produto, priorizando as funcionalidades e interagindo com os stakeholders.
Scrum Master (SM): Facilita o processo, remove impedimentos e garante que a equipe siga as práticas Scrum.
Time de Desenvolvimento: Conjunto de membros que trabalham na execução e entrega dos incrementos de software.

Sprint Planning (Planejamento da Sprint):
Realizar uma reunião de planejamento no início de cada sprint.
Definir os itens do backlog que serão priorizados para a sprint.
Dividir esses itens em tarefas no GitHub, com detalhes como descrição clara, responsáveis e tempo estimado.
Estabelecer a meta da sprint, uma descrição concisa do objetivo a ser alcançado.

GitHub Projects para Gerenciamento Visual:
Quadro Kanban: Utilizar o GitHub Projects como quadro para visualização de tarefas.
Colunas típicas podem ser:
Backlog: Tarefas que ainda não foram priorizadas para a sprint.
Pronto para o desenvolvimento: Tarefas selecionadas para a sprint atual.
Em andamento: Tarefas em execução.
Disponivel para validação: Tarefas aguardando revisão ou testes.
Concluidas: Tarefas concluídas.

weekly Scrum (Reunião Semanal):
Realizar semanalmente reuniões rápidas (até 30 minutos) para que cada membro responda:
O que fez na semana anterior.
O que planeja fazer na proxima.
Se há algum impedimento ou bloqueio.

> **Links Úteis**:
> - [Planejamento e Gestáo Ágil de Projetos](https://pucminas.instructure.com/courses/87878/pages/unidade-2-tema-2-utilizacao-de-ferramentas-para-controle-de-versoes-de-software)
> - [Sobre quadros de projeto](https://docs.github.com/pt/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código escolhido: plataforma ExpoDev.
- Ferramentas de comunicação: Discord, Microsoft Teams e WhatsApp.
- Ferramenta de desenho de tela escolhido: Figma.

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão e facilita o desenvolvimento mobile utilizando o react native. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos o Figma pela variedade de elementos que facilitam o esboço e o desenvolvimento do prototipo.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)
