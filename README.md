 # Api - Marcação de Consulta para uma clinica
 Api para marcação de consulta dinamica para uma clinica odontologica
 

 ## Indice
 - <a href="#proposta">Proposta</a>
 - <a href="#endpoints">Endpoints</a>
 - <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a>
 - <a href="#como-rodar-esse-projeto?">Como rodar esse projeto?</a>
 - <a href="#documentação">Documentação</a>


## Proposta
Api criada para desenvolver habilidades com o banco de dados Nosql MongoDB ,e o nodemailer para envio de email para um usuario.

## Endpoints

```bash
# POST - Create
"https://localhost:3003/create"
Faz a marcação de uma consulta
```

```bash
# GET - GetAll
"https://localhost:3003/getAll "
Retorna todas as consultas que ainda não foram concluidas.

Passar no parametro true se quiser ver as que ja foram concluidas
```

```bash
# GET - GetById
"https://localhost:3003/getById/:id"
Traz uma consulta de acordo com o id passado.
```

```bash

# GET - Seeking
"https://localhost:3003/seeking"
Busca determinada consulta de acordo com o email ou o cpf que for passado na query
```
```bash

# PUT - Finish
"https://localhost:3003/finish/:id"
Conclui a consulta que for passada o id
```



## Tecnologias Utilizadas

1. ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
2. ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
3. ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
4. ![MongoDB]( 	https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)


## Como rodar esse projeto?
``` bash
# Clone esse repositório
$ git clone linkrepo
# Acesse a pasta do projeto no seu computador
$ cd backend
# Instale as dependências
$ npm run dev
# A aplicação ira iniciar na porta 3003, acesse pelo navegador
$ http://localhost:3000/
```

## Documentação
<a href="https://documenter.getpostman.com/view/21068479/2s93JnTmP7">Postman</a>