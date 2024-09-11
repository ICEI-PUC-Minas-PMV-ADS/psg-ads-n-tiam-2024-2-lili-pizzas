# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Persona 1: Flávia Cristina tem 43 anos, é formada em gestão de processos. Pensa em fazer doutorado em comunicações pela PUC Minas, é casada e possui uma filha. Está buscando uma empresa que realize eventos em casa, pois deseja fazer a festa da sua filha Júlia em sua residência. 

Persona 2: Claudionei Mello tem 53 anos, trabalha com recarga de cartuchos de empresoras, é casado e pai de 2 filhos. Pensa em realizar uma confraternização em sua empresa e deseja um serviço de eventos focado em pizzas que possa ir até sua empresa no dia da confraternização para fazer as pizzas e servi-lás.

Persona 3: Elivania Silveira tem 43 anos, formada em gastronomia e empreendedora há 6 anos no ramo. Há muito tempo sofre com o agendamento e o atendimento manual de seus clientes. Ela deseja uma maneira simples e eficaz para agendar e melhorar a qualidade da gestão e do serviço que ela e sua equipe presta. 

Persona 4: Maria Eduarda Silveira tem 19 anos, é estudante e filha de Elivania. Trabalha com a mãe há 5 anos em toda gestão da organização dos eventos, e deseja ajudar a mãe a agilizar e melhorar a qualidade do serviço prestado.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Dono de uma empresa | Preciso realizar uma festa para minha empresa     | Para fazer uma confraternização        |                                                          

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Pai de familia      | Preciso realizar uma festa para    | Para comemorar o aniversário dela      |
|                    | minha filha                        |                                        |

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Dona da minha       | Preciso gerir melhor               | Para alavancar minhas vendas           |
|empresa             | toda minha empresa                 | e melhorar a qualidade                 |


|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Filha da dona da    | Preciso ter mais facilidade        | Para ajudar minha mãe nas              |
|empresa             | na gestão da empresa               | vendas e gestão da empresa             |



> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve ter uma tela de login  | ALTA | 
|RF-002| O sistema deve permitir cadastro de cliente| ALTA |
|RF-003| O sistema deve permitir cadastro de funcionário | ALTA |
|RF-004| O sistema deve permitir agendar um evento | ALTA |
|RF-005| O sistema deve permitir reagendar um evento | ALTA |
|RF-006| O sistema deve ter uma tela contando sobre a empresa | MÉDIA |
|RF-007| O sistema deve ter uma tela explicando como funciona | MÉDIA |
|RF-008| O sistema deve ter uma tela contendo valores | MÉDIA |
|RF-009| O sistema deve permitir agendamento de um evento | ALTA |
|RF-010| O sistema deve exibir lista de eventos agendados pro cliente | MÉDIA |
|RF-011| O sistema deve exibir lista de eventos agendados pro funcionário | MÉDIA |
|RF-012| O sistema deve permitir redirecionar o cliete para o whatsapp | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema não deve permitir que o usuário agende uma data anterior a data atual | ALTA | 
|RNF-002| O sistema só deve permitir agendamento com no mínimo uma semana de antecedência |  ALTA | 
|RNF-003| O sistema não deve permitir dois agendamentos no mesmo horário |  ALTA | 
|RNF-004| O sistema deve ser responsivo para diversos aparelhos móveis |  BAIXA | 
|RNF-005| O sistema deve ser intuitivo |  BAIXA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                    |
|--|--------------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre        |
|02| O projeto deverá seguir todas as datas de entrega            |
|03| Cada membro deve colaborar com todo desenvolvimento          |
|04| O cliente deve aprovar e avaliar todo processo               |
|05| Todo projeto deverá ser documento apenas no GitHub           |
|06| Deverá ser feita reuniões ou contatos semanais com o cliente |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

Casos de uso Amanda Avelino:

Casos de uso João Vitor:

Casos de uso Gabriel Chaves:

Casos de uso Gabriel Arthur:

Casos de uso Vitor Emanuel:

Casos de uso Vinicius Mello:

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
