# 📌 Projeto: qa.automationexercise-api.pactumjs

Automação de testes de API utilizando o framework **PactumJS**.

[![Node.js CI](https://github.com/ricardo-zip/qa.automationexercise-api.pactumjs/actions/workflows/ci.yml/badge.svg)](https://github.com/ricardo-zip/qa.automationexercise-api.pactumjs/actions)

---

## 🎯 Objetivo do Projeto

Demonstrar a criação de **testes de API automatizados**, focando em:

✅ Testes Funcionais  
✅ Testes de Contrato  
✅ Boas práticas de código e estrutura de projeto  
✅ Integração com Pipeline CI/CD (GitHub Actions)  
✅ Relatórios de execução  

---

## 📚 Tecnologias Utilizadas

- **Node.js**
- **npm**
- **PactumJS** – Framework de testes de API
- **Mocha** – Executor de testes
- **Joi** – Validação de contratos (Schemas)
- **Mochawesome** – Geração de relatórios HTML

---

## ✅ Pré-requisitos

- Node.js instalado 👉 [Download Node.js](https://nodejs.org/)

---

## 🛠️ Instalação e Configuração

1. **Clone o repositório:**

```bash
git clone https://github.com/ricardo-zip/qa.automationexercise-api.pactumjs
cd qa.automationexercise-api.pactumjs
```

2. **Instale as dependências:**

```
npm install
```

```bash
✅ Executar todos os testes Funcionais + Contrato:
npm test
```

```bash
✅ Executar e gerar relatório Mochawesome:
npm run test:report
```

```bash
👉 O relatório será salvo em:
mochawesome-report/mochawesome.html
