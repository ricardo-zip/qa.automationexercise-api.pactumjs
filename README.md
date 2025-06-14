# qa.automationexercise-api.pactumjs
Implementação de testes automatizados de API utilizando o framework PactumJS.

## Desafio

O objetivo deste projeto é demonstrar a criação de testes de API robustos, cobrindo:

*   **Testes Funcionais
*   **Testes de Contrato

Critérios:

- [x] O código deve ser de fácil entendimento.
- [x] O código deve seguir um padrão.
- [x] Testes organizados em suítes.
- [x] Performance de execução dos testes.
- [x] Organização do código, testes, pastas e demais arquivos.
- [x] Integração com algum relatório.
- [x] Pipeline configurada no GitHub Action
- [x] O arquivo readme.md do projeto deve explicar quais configurações são necessárias, além de como instalar e executar o projeto.
- [x] Para os testes funcionais de API, será avaliado o uso do seu conhecimento teórico para desenvolver os testes.




### Tecnologias Utilizadas

*   **Node.js:**
*   **npm:**
*   **PactumJS:**
*   **Mocha:**
*   **Joi:**
*   **Mochawesome:**

### Pré-requisitos

*   [Node.js](https://nodejs.org/)

### Instalação e Configuração

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/ricardo-zip/qa.automationexercise-api.pactumjs
    cd qa.automationexercise-api.pactumjs
    ```

2.  **Instale as dependências:**
    Execute este comando na raiz do projeto para instalar as dependencias `package.json`:
    ```bash
    npm install
    ```

### Estrutura do Projeto


### Executando os Testes

*   **Executar todos os testes funcionais e de contrato:**
    ```bash
    npm test
    ```

*   **Executar os testes funcionais:**
    ```bash
    npm run test:fun
    ```

*   **Executar apenas os testes de contrato:**
    ```bash
    npm run test:contract
    ```

*   **Executar todos os testes e gerar o relatório:**
    ```bash
    npm run test:report
    ```
   Disponível na pasta `mochawesome-report/`. Abra o arquivo `mochawesome.html`.
