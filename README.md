# BySecret Messages Project

_Aplicação de perguntas e respostas secretas._

## Informações

Estas são algumas informações importantes para a correta execução deste projeto:

- Este projeto utiliza o yarn workspaces para gerenciar as aplicações em Monorepo, dessa forma é necessário ter o `yarn` instalado.

- Para utilizar o ambiente de desenvolvimento já configurado em containers para este projeto é necessário ter o Docker (ou Podman) e o docker-compose instalados e configurados em sua máquina.

## Executando

Para executar este projeto siga os seguintes passos:

1. Clone este repositório em sua máquina local.

```sh
git clone https://github.com/marllef/bsecret.git
```

2. Crie e preencha corretamente os arquivos `.env.local` deste projeto, seguindo o exemplo dos arquivos `.env` contidos dentro da pasta `server` e `web`.

   - Obs.: Os arquivos `.env` tem valores mínimos pré-configurados para execução do projeto em modo de desenvolvimento. Em ambiente de produção exclua os arquivos `.env`.

3. Instale as depêndencias do projeto.

```sh
yarn install
```

4. Suba os containers do ambiente de desenvolvimento.

```sh
docker-compose up
```

5. Execute o projeto.

```sh
yarn start
```

## Licença

Copyright (c) 2022 [Marllef H. A. de Freitas](http://github.com/marllef).

Este projeto está licenciado sob os termos da licença do `MIT`.
