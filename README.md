# Native Demo App - Mobile Test

Projeto de automação de testes mobile para o aplicativo [native-demo-app](https://github.com/webdriverio/native-demo-app).

## 1. Visão geral

A automação tem como objetivo validar funcionalidades do aplicativo mobile, contemplando fluxos de autenticação, cadastro, navegação entre telas, preenchimento de formulários e mensagens de validação.

Os principais objetivos são:

- Automatizar cenários funcionais do aplicativo.
- Validar comportamentos e resultados apresentados pela interface.
- Organizar os elementos e as ações por meio do padrão Page Object.
- Utilizar dados externos para apoiar a execução dos testes.
- Executar os testes em ambiente Android.
- Capturar screenshots automaticamente em caso de falhas.
- Gerar relatórios para análise dos resultados.
- Automatizar a execução dos testes por meio de uma pipeline de CI/CD.

## 2. Aplicativo e escopo

**Aplicativo:** native-demo-app  
**Repositório oficial:** https://github.com/webdriverio/native-demo-app  
**Plataforma validada:** Android  
**Driver de automação:** UiAutomator2

O projeto contempla a automação das seguintes funcionalidades:

- Login e cadastro.
- Navegação entre telas.
- Preenchimento e interação com formulários.
- Verificação de mensagens de validação e sucesso.

A cobertura funcional está organizada em dez cenários de teste, definidos a partir da exploração do aplicativo e dos comportamentos efetivamente identificados.

### Cenários funcionais

| ID | Cenário | Classificação | 
|---|---|---|
| CT-001 | Realizar login com sucesso | Positivo | 
| CT-002 | Falha ao realizar login com e-mail inválido | Negativo | 
| CT-003 | Falha ao realizar login com senha inferior ao mínimo permitido | Negativo | 
| CT-004 | Falha ao realizar login com campos obrigatórios vazios | Negativo | 
| CT-005 | Realizar cadastro com sucesso | Positivo | 
| CT-006 | Falha ao realizar cadastro com e-mail inválido | Negativo | 
| CT-007 | Falha ao realizar cadastro com senha inferior ao mínimo permitido | Negativo | 
| CT-008 | Falha ao realizar cadastro com senhas diferentes | Negativo | 
| CT-009 | Interagir com os componentes do formulário | Positivo | 
| CT-010 | Navegar para as funcionalidades pelo Menu | Positivo | 

**Dados utilizados no cenário:**

- E-mail: `teste@email.com`
- Senha: `Teste123`

A validação considera o comportamento observado na interface do aplicativo. Não representa uma confirmação de autenticação em backend.

Os cenários foram implementados com base nos comportamentos observados durante a exploração do aplicativo e organizados para execução independente.

## 3. Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| JavaScript | Linguagem de programação |
| Node.js | Ambiente de execução |
| npm | Gerenciamento de dependências e scripts |
| WebdriverIO 9 | Framework de automação |
| Appium 3 | Automação mobile |
| UiAutomator2 | Driver de automação Android |
| Mocha | Organização e execução dos testes |
| Chai | Assertions e validações |
| Allure Report | Geração e visualização de relatórios |
| Git | Controle de versão |
| GitHub Actions | Integração e execução contínua |

## 4. Estratégia de testes

Os cenários são organizados considerando o comportamento funcional esperado do aplicativo.

As principais validações contemplam:

- **Funcional:** execução dos fluxos e verificação dos resultados esperados.
- **Interface:** identificação e interação com elementos da tela.
- **Navegação:** transição entre telas e estados do aplicativo.
- **Dados:** preenchimento de campos com informações válidas e inválidas.
- **Mensagens:** validação de mensagens de sucesso e erro.

Os testes são estruturados para serem independentes entre si, evitando dependência de estados deixados por execuções anteriores.

A estratégia prioriza validações funcionais observáveis, sem presumir comportamentos internos ou funcionalidades não identificadas durante a exploração do aplicativo.

## 5. Arquitetura do projeto

A arquitetura utiliza o padrão Page Object Model (POM), mantendo separadas as responsabilidades de interação com a interface, organização dos cenários e armazenamento dos dados de teste.

### Componentes e responsabilidades

- **Specs:** organização dos cenários automatizados e respectivas assertions.
- **Screens:** centralização dos elementos da interface e das ações disponíveis em cada tela.
- **Support:** armazenamento dos dados utilizados pelos testes.
- **Config:** configurações do WebdriverIO, capacidades do dispositivo, conexão com Appium, hooks e reporters.
- **Allure:** geração dos resultados e relatórios de execução.
- **GitHub Actions:** configuração da pipeline de integração contínua.

As assertions permanecem nos arquivos de teste, enquanto os Page Objects concentram os locators e as ações de interação com a interface.

### Estrutura de diretórios

```text
native-demo-app-mobile-test/
│
├── .github/
│   └── workflows/
│       └── mobile-tests.yml
│
├── config/
│   └── wdio.android.conf.js
│
├── screens/
│   ├── login.screen.js
│   ├── signup.screen.js
│   ├── forms.screen.js
│   └── ...
│
├── specs/
│   ├── login.spec.js
│   ├── signup.spec.js
│   ├── forms.spec.js
│   └── ...
│
├── support/
│   ├── login.data.json
│   ├── signup.data.json
│   └── ...
│
├── docs/
│   └── evidence/
│       ├── allure/
│       │   ├── forms.png
│       │   ├── login.png
│       │   ├── navigation.png
│       │   └── signup.png
│       │
│       └── terminal/
│           ├── forms.png
│           ├── login.png
│           ├── navigation.png
│           └── signup.png
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

Os diretórios `allure-results/` e `allure-report/` são gerados durante a execução dos testes e não fazem parte da estrutura permanente de evidências versionadas.

## 6. Pré-requisitos e instalação

Para executar o projeto localmente, são necessários:

- Node.js e npm.
- Java Development Kit (JDK).
- Android Studio.
- Android SDK.
- Emulador Android configurado.
- Appium 3.
- Driver UiAutomator2.
- Git.

### Ambiente utilizado na validação local

| Componente | Versão / Configuração |
|---|---|
| Node.js | 26.13.0 |
| npm | 11.20.0 |
| JDK | 25.0.5.1 |
| Appium | 3.9.0 |
| UiAutomator2 | 8.7.3 |
| WebdriverIO | 9.32.0 |
| Emulador | Medium Phone API 37.0 |
| Android | API 37 |
| Dispositivo ADB | emulator-5554 |

### Clonar o repositório

```bash
git clone https://github.com/LevyMarcelo/native-demo-app-mobile-test
```

### Instalar as dependências

```bash
npm ci
```

### Configurar o Appium

Instalar o Appium globalmente:

```bash
npm install -g appium
```

Instalar o driver UiAutomator2:

```bash
appium driver install uiautomator2
```

Verificar a instalação:

```bash
appium driver list --installed
```

### Configurar o Android SDK

É necessário configurar as variáveis de ambiente:

- `ANDROID_HOME`
- `ANDROID_SDK_ROOT`

O diretório `platform-tools` também deve estar acessível para execução do ADB.

Verificar se o emulador está disponível:

```bash
adb devices
```

O dispositivo deverá aparecer com o estado `device`.

## 7. Configuração do ambiente de execução

O projeto utiliza a configuração Android localizada em:

```text
config/wdio.android.conf.js
```

As principais configurações contemplam:

- Conexão com o servidor Appium local.
- Plataforma Android.
- Driver UiAutomator2.
- Identificação do dispositivo.
- Pacote e activity do aplicativo.
- Configuração do Mocha.
- Reporter Spec e Allure.
- Hooks para preparação do estado do aplicativo.
- Captura automática de screenshots em caso de falha.

### Inicializar o Appium

Com o emulador Android iniciado, executar:

```bash
appium --address 127.0.0.1 --port 4723
```

O servidor deverá permanecer ativo durante a execução dos testes.

## 8. Execução dos testes

### Executar todos os testes no Android

```bash
npm run test:android
```

### Executar os testes por funcionalidade no Android

```bash
npm run test:login
npm run test:signup
npm run test:forms
npm run test:navigation
```

Os comandos utilizam os scripts definidos no `package.json`.

## 9. Relatórios e evidências

O projeto utiliza Allure Report para organizar e apresentar os resultados das execuções.

O relatório permite consultar:

- Resumo dos testes executados.
- Status dos cenários.
- Informações do ambiente de execução.
- Logs e informações disponibilizadas pelo reporter.
- Screenshots anexados aos resultados quando aplicável.

### Gerar o relatório

Após a execução dos testes:

```bash
npm run report:generate
```

### Abrir o relatório

```bash
npm run report:open
```

Os diretórios `allure-results/` e `allure-report/` armazenam, respectivamente, os resultados brutos e o relatório HTML gerado.

### Evidências da execução

Foram organizadas oito evidências permanentes no diretório `docs/evidence/`, divididas em dois grupos:

**Relatório Allure**

| Funcionalidade | Evidência |
|---|---|
| Login | [login](docs/evidence/allure/login.png) |
| Cadastro | [signup](docs/evidence/allure/signup.png) |
| Formulários | [forms](docs/evidence/allure/forms.png) |
| Navegação | [navigation](docs/evidence/allure/navigation.png) |

**Terminal**

| Funcionalidade | Evidência |
|---|---|
| Login | [login](docs/evidence/terminal/login.png) |
| Cadastro | [signup](docs/evidence/terminal/signup.png) |
| Formulários | [forms](docs/evidence/terminal/forms.png) |
| Navegação | [navigation](docs/evidence/terminal/navigation.png) |

## 10. Integração contínua (CI/CD)

O projeto utiliza GitHub Actions para automatizar a execução dos testes mobile.

A pipeline está configurada em:

```text
.github/workflows/mobile-tests.yml
```

### Fluxo configurado

A configuração contempla as seguintes etapas:

1. Obter o código do repositório.
2. Configurar o ambiente Node.js.
3. Instalar as dependências do projeto.
4. Preparar o ambiente Android e o emulador.
5. Instalar o aplicativo native-demo-app.
6. Inicializar o servidor Appium.
7. Executar os testes automatizados.
8. Gerar o relatório Allure.
9. Publicar resultados, relatórios e logs como artefatos da execução.

### Gatilhos de execução

A configuração contempla:

- Push.
- Pull Request.
- Execução manual.

O workflow está configurado para utilizar API 35 no runner Ubuntu.

## 11. Limitações e observações

### Plataforma iOS

O ambiente de desenvolvimento utilizado é Windows, sem disponibilidade de macOS e Xcode.

Por esse motivo, a execução em simulador iOS não foi realizada. A validação atual está concentrada em Android.
