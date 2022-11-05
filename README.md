
# TrybeSmith

Este projeto foi desenvolvido em Typescript + Node.JS + Docker,  
seguindo os padrões REST, conceitos de orientação a objetos e clean architecture  

Utiliza o framework Express como servidor, JWT(JsonWebToken) para autenticação  
de usuários e MySQL como banco de dados.  
A API simula uma loja de itens medievais artesanais.  
Nela você pode:  
- Cadastrar uma pessoa usuária
- Logar na aplicação
- Cadastrar novos produtos
- Listar todos os produtos
- Cadastrar novos pedidos
- Listar todos os pedidos

## Documentação da API

#### Cadastra uma pessoa usuária

```http
  POST /users
```

| Corpo da Req.   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | Nome da pessoa usuária  (**Obrigatório**). |
| `classe` | `string` | Classe da pessoa usuária - Ex.: Swordsman  (**Obrigatório**). |
| `level` | `number` | Level da pessoa usuária  (**Obrigatório**). |
| `password` | `string` | Senha de acesso da pessoa usuária  (**Obrigatório**). |

#### Loga na aplicação

```http
  POST /login
```

| Corpo da Req.   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `username` | `string` | Nome da pessoa usuária  (**Obrigatório**). |
| `password` | `string` | Senha de acesso da pessoa usuária  (**Obrigatório**). |

#### Cadastra novos produtos

```http
  POST /products
```

| Corpo da Req.   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name` | `string` | Nome do produto  (**Obrigatório**). |
| `amount` | `string` | Preço do produto  (**Obrigatório**). |

#### Retorna todos os produtos

```http
  GET /products
```

#### Cadastra novo pedido

```http
  POST /orders
```

| Corpo da Req.   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `productsIds` | `Array(Number)` | Array com os ids dos produtos do pedido (**Obrigatório**). |

| Cabeç da Req.   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization` | `string` | Token de autentição da pessoa usuária (**Obrigatório**). |

#### Retorna todos os pedidos

```http
  POST /orders
```

| Corpo da Req.   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `productsIds` | `Array(Number)` | Array com os ids dos produtos do pedido (**Obrigatório**). |

| Cabeç da Req.   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization` | `string` | Token de autentição da pessoa usuária (**Obrigatório**). |


## Variáveis de Ambiente

Vocẽ pode rodar o projeto através do docker-compose,
caso prefira rodar localmente em sua maquina você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`MYSQL_USER` - Usuário do banco de dados

`MYSQL_PASSWORD` - Senha do banco de dados

`MYSQL_HOST` - Host do banco de dados

`JWT_SECRET` - Chave secreta para criptografia do JsonWebToken

## Autor

- Renato Mendes ([Github](https://www.github.com/octokatherine) - [Linkedin](https://www.linkedin.com/in/renatolmendes/))

