<!-- PROJECT SHIELDS -->

[![PRETTIER](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://gitter.im/jlongster/prettie)
[![LICENSE](https://img.shields.io/github/license/arshadkazmi42/awesome-github-init.svg)](https://github.com/arshadkazmi42/awesome-github-init/LICENSE)
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/erlanlucio/)

<!-- PROJECT -->

<br /><br />

<p align="center">
  <h1 align="center">

Desafio Técnico Take 🙋

  </h3> 
  <p align="center">
    <img width="30%" src="https://www.take.net/files/uploads/2020/09/logo-header.svg" alt="Take Logo" >
    <br />
    <br />
    <a href="https://github.com/lucioerlan/Desafio-Take/issues">Report Bug</a>
    ·
    <a href="https://github.com/lucioerlan/Desafio-Take/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## 🤔 Sobre o projeto

Esse Readme é para auxiliar no processo de instalação, execução e rodar os testes, bem tranquilo. 👋

Para os detalhes técnicos do que foi implementado, e sobre os desafios propostos <details> <summary><b>🎷Clique Aqui<sup>ver+</sup></b></summary>

  <ul>
    <li><a target="_blank" rel="noopener noreferrer" href='https://github.com/lucioerlan/desafio-take/blob/develop/challenge/Api/DESAFIO.md'> README COM OS DESAFIOS </a></li>
  </ul> 
</details>

<br /><br />

<!-- INSTALLATION -->

## 🔨 Instalação Local

Você precisará do [Node.js](https://nodejs.org) versão 10 ou superior, instalado no seu computador para continuar.

```bash
git clone https://github.com/lucioerlan/Desafio-Take.git
$ cd Desafio-Take/challenge/Api
$ npm install
```

<br /> <br />

<!-- SETUP -->

## 🔥 Configuração Local

#### Copie ou renomeie o arquivo de configuração

```
$ cp .env-examples .env
```

**-** Localizado na raiz de challenge\Api

**-** Se você estiver rodando essa aplicação localmente, você irá precisar de algumas coisas.

- Uma conexão com o Redis, Você pode obter uma grátis, através desse link 💁 [Redis](https://app.redislabs.com)
- Porque? 🤔 - Api do GITHUB possui Rate limiting
- Para que não ocorra sobrecarga, os dados são passados para o caching, com duração de 60 seg.

<br /><br />

<!-- RUNNING TESTS -->

## 🤓 Rodando testes

<br />

- ### Para rodar os testes 🤑

```
$ npm run test
```

**-** Mocha & Chai - Units

<br />

<!-- DOCUMENTATION -->

- Accesse a documentação no swagger
- http://localhost:5000/api/docs - local
- https://desafio-take-github.herokuapp.com/api/docs - exposta

<br /><br />

<!-- RUNNING -->



## 🎲 Rodando a Api Localmente

```bash

# Execute a aplicação
$ npm run start

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:5000 - acesse http://localhost:5000 

```

<br />


<!-- DOCKER -->

## 🐳 Executando com o Docker

- Rode tudo com o docker - nodejs e redis

```
$ docker network create node-net
```

```
$ docker-compose up
```

<br /><br />

<!-- PUBLICATION -->

## 🤖 Publicação

- O código está hospedado no Heroku, integrado com o Github /ci

**-** <a href="https://desafio-take-github.herokuapp.com/api/docs" target="_blank">Backend</a>

<br /><br />

<!-- LICENSE -->

## 🔓 Licença

Este projeto está sob licença do MIT. Consulte a LICENÇA para obter mais detalhes. © - [Erlan Lucio](https://www.linkedin.com/in/erlanlucio/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
