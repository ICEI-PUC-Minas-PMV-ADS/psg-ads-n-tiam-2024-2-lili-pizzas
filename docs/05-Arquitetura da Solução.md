# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Para a implementação do sistema de agendamento de eventos para a pizzaria, as seguintes tecnologias serão utilizadas:

- React Native: Framework de desenvolvimento de aplicações móveis que permite criar aplicativos nativos para iOS e Android com JavaScript e React. Ele será usado para construir a interface do usuário.

- Firebase: Em outras palavras, o Firebase é uma plataforma de desenvolvimento multiplataforma criada pelo Google

Ferramentas e IDEs:

- draw.io: Ferramenta utilizada para a modelagem do diagrama de classes e fluxos do sistema.
- GitHub: Controle de versão do código-fonte e colaboração da equipe.
- Expo: O Expo é uma ferramenta utilizada no desenvolvimento mobile com React Native que permite o fácil acesso às API’s nativas do dispositivo sem precisar instalar qualquer dependência ou alterar código nativo.

## Hospedagem
A hospedagem da aplicação será feita utilizando o Firebase Hosting, que é uma solução serverless. Isso significa que a aplicação será automaticamente escalável e robusta, suportando picos de acesso sem a necessidade de configurar servidores manualmente.

O Expo também será utilizado para distribuir as versões da aplicação durante o desenvolvimento e testes, facilitando o compartilhamento de builds com os membros da equipe e clientes.

## Qualidade do Software
Para garantir a qualidade do software desenvolvido, serão seguidas algumas características e subcaracterísticas da norma ISO/IEC 25010, visando a entrega de um produto robusto e alinhado às expectativas do cliente.

- Usabilidade:
   - Aprendizado: A interface será simples e intuitiva, para que os usuários possam agendar eventos com facilidade.
   - Acessibilidade: O design será responsivo, garantindo que o app funcione bem em diferentes dispositivos e seja acessível a todos os tipos de usuários.

- Aprendizado: A interface será simples e intuitiva, para que os usuários possam agendar eventos com facilidade.
- Acessibilidade: O design será responsivo, garantindo que o app funcione bem em diferentes dispositivos e seja acessível a todos os tipos de usuários.
- Desempenho:
   - Capacidade de Resposta: A comunicação com o Firebase será otimizada para garantir tempos de resposta rápidos, minimizando a latência.
   - Segurança:
   - Confidencialidade: Serão seguidas boas práticas de segurança no armazenamento de dados de usuários, como criptografia das credenciais de login e uso de Firebase Authentication para proteger o acesso à aplicação.
   - Integridade: Validação de entrada de dados para evitar a inclusão de dados incorretos ou maliciosos.
