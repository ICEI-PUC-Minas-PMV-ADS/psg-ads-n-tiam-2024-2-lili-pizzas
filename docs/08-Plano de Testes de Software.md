# Plano de Testes de Software

## Metodologia de Testes para Garantia da Qualidade do Sistema

Para garantir a qualidade do nosso sistema, utilizaremos os testes testes manuais.

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
## TC-002: Reset de Senha

Objetivo: Verificar se o e-mail de reset de senha está sendo enviado pelo e-mail
Acessar a tela de login.
Clicar em "esqueci minha senha"
Resultado Esperado: Um email de redefinição de senha ser enviado.

## TC-003: Cadastro de Usuário
Objetivo: Testar se o sistema permite o cadastro de novos usuários.
Passos:
Acessar a tela de cadastro.
Inserir dados válidos (nome, email, senha).
Clicar em "Cadastrar".
Resultado Esperado: O usuário deve ser cadastrado com sucesso.
## TC-004: Cadastro de Funcionário

## TC-006: Reagendamento de Evento

Objetivo: Testar a tela que explica como funciona o sistema.
Passos:
Acessar a tela explicativa.
Resultado Esperado: As informações devem ser claras e compreensíveis.
## TC-009: Tela de Valores

Objetivo: Testar a funcionalidade de agendamento.
Passos:
Acessar a tela de agendamento.
Inserir dados válidos (data, horário, tipo de evento).
Confirmar o agendamento.
Resultado Esperado: O evento deve ser agendado com sucesso.
## TC-011: Lista de Eventos Agendados para Cliente

Objetivo: Verificar a lista de eventos do cliente.
Passos:
Acessar a área do cliente.
Clicar na opção de visualizar eventos agendados.
Resultado Esperado: A lista deve conter todos os eventos do cliente.
## TC-012: Lista de Eventos Agendados para Funcionário

Objetivo: Testar o redirecionamento para o WhatsApp.
Passos:
Clicar no botão de redirecionamento.
Resultado Esperado: O cliente deve ser redirecionado para o WhatsApp.
# 3. Estratégia de Teste
Ambiente de Teste: A aplicação deve ser testada em um ambiente de desenvolvimento que simule o ambiente de produção.
