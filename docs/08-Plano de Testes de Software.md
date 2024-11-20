# Plano de Testes de Software

## Metodologia de Testes para Garantia da Qualidade do Sistema

Para garantir a qualidade do nosso sistema, utilizaremos os testes: testes manuais;

# Testes Manuais:
Nesta abordagem, iremos analisar cada componente do sistema de forma detalhada, separando as funcionalidades em tópicos. Cada componente será testado manualmente, sem o auxílio de ferramentas de automação. Essa metodologia nos permitirá identificar problemas de usabilidade e garantir que cada funcionalidade atenda aos requisitos especificados.
 
# Descrição dos Casos de Teste
## TC-001: Tela de Login

Objetivo: Verificar se a tela de login está acessível e funcional.
Passos:
Acessar a tela de login.
Inserir um nome de usuário e senha válidos.
Clicar no botão de login.
Resultado Esperado: O sistema deve permitir o acesso à área restrita.
## TC-002: Cadastro de Usuário

Objetivo: Testar se o sistema permite o cadastro de novos usuários.
Passos:
Acessar a tela de cadastro.
Inserir dados válidos (nome, email, senha).
Clicar em "Cadastrar".
Resultado Esperado: O usuário deve ser cadastrado com sucesso.
## TC-003: Cadastro de Funcionário

Objetivo: Testar o cadastro de funcionários.
Passos:
Acessar a tela de cadastro de funcionário.
Inserir dados válidos (nome, cargo, email).
Clicar em "Cadastrar".
Resultado Esperado: O funcionário deve ser cadastrado com sucesso.
## TC-004: Visualização de Funcionários de um Evento

Objetivo: Verificar se os funcionários de um evento são exibidos corretamente.
Passos:
Selecionar um evento específico.
Clicar na opção para visualizar funcionários.
Resultado Esperado: O sistema deve listar todos os funcionários associados ao evento.
## TC-005: Reagendamento de Evento

Objetivo: Testar a funcionalidade de reagendamento.
Passos:
Acessar a lista de eventos agendados.
Selecionar um evento para reagendamento.
Alterar a data e/ou hora.
Confirmar o reagendamento.
Resultado Esperado: O evento deve ser reagendado corretamente.
## TC-006: Tela Sobre a Empresa

Objetivo: Verificar a exibição da tela informativa.
Passos:
Acessar a tela que contém informações sobre a empresa.
Resultado Esperado: A tela deve mostrar informações corretas e atualizadas.
## TC-007: Tela Explicativa

Objetivo: Testar a tela que explica como funciona o sistema.
Passos:
Acessar a tela explicativa.
Resultado Esperado: As informações devem ser claras e compreensíveis.
## TC-008: Tela de Valores

Objetivo: Verificar a exibição de valores.
Passos:
Acessar a tela que contém os valores.
Resultado Esperado: Os valores devem ser exibidos corretamente.
## TC-009: Agendamento de Evento

Objetivo: Testar a funcionalidade de agendamento.
Passos:
Acessar a tela de agendamento.
Inserir dados válidos (data, horário, tipo de evento).
Confirmar o agendamento.
Resultado Esperado: O evento deve ser agendado com sucesso.
## TC-010: Lista de Eventos Agendados para Cliente

Objetivo: Verificar a lista de eventos do cliente.
Passos:
Acessar a área do cliente.
Clicar na opção de visualizar eventos agendados.
Resultado Esperado: A lista deve conter todos os eventos do cliente.
## TC-011: Lista de Eventos Agendados para Funcionário

Objetivo: Verificar a lista de eventos do funcionário.
Passos:
Acessar a área do funcionário.
Clicar na opção de visualizar eventos agendados.
Resultado Esperado: A lista deve conter todos os eventos do funcionário.
## TC-012: Redirecionamento para WhatsApp

Objetivo: Testar o redirecionamento para o WhatsApp.
Passos:
Clicar no botão de redirecionamento.
Resultado Esperado: O cliente deve ser redirecionado para o WhatsApp.
# 3. Estratégia de Teste
Ambiente de Teste: A aplicação deve ser testada em um ambiente de desenvolvimento que simule o ambiente de produção.
