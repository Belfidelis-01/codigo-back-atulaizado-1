 Backend — Sistema Web

 1. Introdução

Este projeto corresponde ao backend do sistema web desenvolvido durante o curso de Técnico em Informática para Internet.

O backend é responsável por:

* Processar as requisições da aplicação;
* Implementar as regras de negócio;
* Realizar a autenticação dos usuários;
* Realizar a comunicação com o banco de dados;
* Disponibilizar uma API REST para o frontend.

 Tecnologias utilizadas

* Node.js
* Express
* Sequelize
* PostgreSQL
* JWT
* bcrypt
* API REST
* Git/GitHub
* Render

---

2. Arquitetura

A aplicação utiliza uma arquitetura na qual o frontend realiza requisições HTTP/HTTPS para o backend.

O backend utiliza o Express para receber e processar as requisições. O Sequelize realiza a comunicação entre a aplicação e o banco de dados PostgreSQL.

```text
Frontend
   │
   │ HTTP/HTTPS
   ▼
Node.js + Express
   │
   ├── Routes
   ├── Controllers
   ├── Middleware
   │
   ▼
Sequelize
   │
   ▼
PostgreSQL
```

O fluxo de comunicação do sistema é:

```text
React
  ↓
HTTP/HTTPS
  ↓
Node.js + Express
  ↓
Sequelize
  ↓
PostgreSQL
```

---

 3. Instalação

 3.1 Pré-requisitos

Para executar o backend localmente, é necessário possuir:

* Node.js
* npm
* Git
* PostgreSQL ou acesso ao banco utilizado pelo projeto

 3.2 Clonar o projeto

```bash
git clone URL_DO_REPOSITORIO
```

Acesse a pasta do backend:

```bash
cd backend
```

 3.3 Instalar dependências

Execute:

```bash
npm install
```

 3.4 Executar o projeto

Utilize o comando configurado no `package.json`.

Exemplo:

```bash
npm start
```

---

 4. Variáveis de ambiente

As credenciais e informações sensíveis utilizadas pelo backend devem ser configuradas como variáveis de ambiente.

Exemplo:

```env
PORT=
DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
JWT_SECRET=
```

 Variáveis utilizadas

| Variável      | Descrição                             |
| ------------- | ------------------------------------- |
| `PORT`        | Porta utilizada pelo servidor         |
| `DB_HOST`     | Host do banco PostgreSQL              |
| `DB_PORT`     | Porta do banco PostgreSQL             |
| `DB_NAME`     | Nome do banco de dados                |
| `DB_USER`     | Usuário do banco                      |
| `DB_PASSWORD` | Senha do banco                        |
| `JWT_SECRET`  | Segredo utilizado na autenticação JWT |

> **Importante:** os valores reais das credenciais não devem ser publicados no GitHub.

---

 5. Autenticação

O sistema utiliza **JWT (JSON Web Token)** para autenticação.

O usuário realiza o login através da API. Após a validação das credenciais, o backend utiliza o JWT para controlar o acesso às funcionalidades protegidas.

As senhas dos usuários são protegidas utilizando **bcrypt**.

O segredo utilizado pelo JWT deve ser armazenado através da variável:

```env
JWT_SECRET=
```

---

 6. API

A API disponibiliza endpoints para comunicação entre o frontend e o backend.

 Endpoints

| Método | Endpoint     | Descrição                     |
| ------ | ------------ | ----------------------------- |
| POST   | `/login`     | Realiza o login do usuário    |
| GET    | `/vagas`     | Consulta as vagas disponíveis |
| POST   | `/vagas`     | Cadastra uma nova vaga        |
| PUT    | `/vagas/:id` | Atualiza uma vaga             |
| DELETE | `/vagas/:id` | Remove uma vaga               |
| POST   | `/post`      | Cria uma postagem             |

---

 7. Exemplos de requisições

 GET `/vagas`

 Descrição

Retorna as vagas disponíveis cadastradas no sistema.

 Autenticação

Verificar a configuração da rota no backend.

 Resposta esperada

```json
{
  "status": 200,
  "data": [
    {
      "id": 1,
      "titulo": "Desenvolvedor Full Stack"
    }
  ]
}
```

---

 POST `/login`

 Descrição

Realiza a autenticação do usuário.

 Corpo da requisição

```json
{
  "email": "usuario@email.com",
  "senha": "senha"
}
```

 Resposta

A resposta deve retornar o resultado da autenticação e, quando aplicável, o token JWT utilizado para acesso às funcionalidades protegidas.

---

 POST `/vagas`

 Descrição

Cadastra uma nova vaga no sistema.

 Corpo da requisição

O corpo deve conter os dados necessários para criação da vaga definidos pela API.

### Autenticação

A necessidade de autenticação depende das regras definidas no backend.

---

 PUT `/vagas/:id`

Descrição

Atualiza os dados de uma vaga existente.

 Parâmetro

`id` — identificador da vaga que será atualizada.

---

 DELETE `/vagas/:id`

 Descrição

Remove uma vaga cadastrada.

 Parâmetro

`id` — identificador da vaga que será removida.

---

 POST `/post`

 Descrição

Cria uma nova postagem.

### Corpo da requisição

Deve conter os dados definidos pela API para criação da postagem.

---

8. Códigos de resposta

A API utiliza códigos de status HTTP para indicar o resultado das requisições.

| Código | Significado                      |
| ------ | -------------------------------- |
| `200`  | Requisição realizada com sucesso |
| `201`  | Recurso criado com sucesso       |
| `400`  | Requisição inválida              |
| `401`  | Não autorizado                   |
| `404`  | Recurso não encontrado           |
| `500`  | Erro interno do servidor         |

---

 9. Testes da API

A API pode ser testada utilizando ferramentas como:

* Insomnia
* Postman

Os principais endpoints que devem ser testados são:

```text
POST   /login
GET    /vagas
POST   /vagas
PUT    /vagas/:id
DELETE /vagas/:id
POST   /post
```

Os testes devem verificar tanto respostas de sucesso quanto situações de erro.

---
10. Deploy

O backend é disponibilizado utilizando o **Render**.

O processo de implantação segue:

```text
GitHub
   ↓
Render
   ↓
Backend / API REST
   ↓
PostgreSQL
```

 Processo de implantação

1. Conectar o repositório GitHub ao Render;
2. Criar um Web Service;
3. Selecionar o projeto backend;
4. Configurar o ambiente de execução;
5. Configurar o comando de instalação;
6. Configurar o comando de inicialização;
7. Configurar as variáveis de ambiente;
8. Realizar o deploy;
9. Testar a API após a implantação.

 URL da API

```text
URL_DA_API
```

---

 11. Integração com o Frontend

O backend recebe as requisições realizadas pelo frontend e retorna as respostas através da API REST.

A comunicação completa ocorre da seguinte maneira:

```text
React
  ↓
HTTP/HTTPS
  ↓
Express
  ↓
Controllers
  ↓
Sequelize
  ↓
PostgreSQL
```

Como o frontend e o backend podem estar hospedados em domínios diferentes, é necessário configurar o **CORS** corretamente.

Exemplo:

```javascript
app.use(cors({
    origin: "URL_DO_FRONTEND"
}));
```

---

 12. Documentação da API

A documentação completa da API deve apresentar:

* Método HTTP;
* URL;
* Descrição;
* Parâmetros;
* Autenticação;
* Corpo da requisição;
* Resposta esperada;
* Possíveis erros.

A documentação complementar está disponível no **ReadMe.io**.

**Documentação:** `URL_DA_DOCUMENTACAO`

---

 13. Autor

**Isabel dos Santos Fidélis**

Curso: Técnico em Informática para Internet

Disciplina: Projeto Back-End
