# Challange API

## Sobre
Essa app foi desenvolvida para atender ao desafio proposto pela equipe da
Brainn.co. Se trata de uma uma aplicação web que consome uma API para
gerenciamento de tags de repositórios "curtidos" no GitHub.

### Requerimentos
A aplicação foi desenvolvida com `React` e necessita do npm(Nodejs) para rodar.
É necessário também uma intancia da API para um correto funcionamento.

Alguns processos do projeto foram configurados com Docker (docker-compose). Mas
o uso é opicional.

## Rodando o projeto

### Docker/docker-compose
Foi utilizado o GNU Make para automação dos comandos. Para saber quais comandos
Docker estão sendo executados basta vizualizar o arquivo `Makefile`.

#### Comandos
Subir uma instancia da aplicação (http://localhost:4000):
```sh
make run
```

Subir um container com o bash
```
make bash
```

### Sem Docker
É possível definir a url da API via variaveis de ambiente no seu terminal.

```
export REACT_APP_API_URL=http://localhost:4000/api/v1
```

Para instalar as dependencias do projeto:
```sh
npm install
```

Subir uma instancia da aplicação (http://localhost:3000):
```sh
npm start
```
