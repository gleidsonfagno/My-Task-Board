# My Task Board API

API REST contruída com *Node.js*, *Express* e *Knex.js*, utilizado pra gerencia (Borad) Quadro e suas (Tasks) Tarefas. Esse back end faz parte dee um projeto Fullstack  e foi desenvolvido seguindo boas práticas e estrutura, validaçã, versionamento e documentação.

## Tecnologias utilizadas

 - Node.js
 - Express.js
 - Knex.js
 - TypeScript
 - SQLite
 - Zod

# Instalação

- Clonar o repositoorio
```bash
git clone https://github.com/gleidsonfagno/My-Task-Board.git

cd server
```
- Instalar as dependeencias

```bash
npm install
```

## Rodar as migrações

```bash
npx knex migrate:latest
```

## Iniciar o servidor 

```bash
npm run dev
```
- O servodor em:
```bash
http://localhost:3000
```

## Rotas da API

### Criar boards
POST ```api/boards```

Body
```json
{
  "name": "My Task Board",
  "description": "Optional description"
}
```

### Listar boards

**Todos o boards**

GET ```api/boards```

Body
```json
[
    {
    "id": 1,
    "name": "My Task Board",
    "description": "Optional description",
    "created_at": "2025-12-05 13:37:43",
    "updated_at": "2025-12-06 14:43:41"
    }
]
```
**Listar board unico**

GET ```api/boards/:boardId```

```json
{
    "id": 1,
    "name": "My Task Board",
    "description": "Optional description",
    "created_at": "2025-12-05 13:37:43",
    "updated_at": "2025-12-06 14:43:41"
}
```

### Atualizar um board
PUT ```api/boards/:boardId```

body
```json
{
    "name": "My Task Board",
    "description": "Optional description",
}
```

### Deletar um board

DELETE ```api/boards/:boardId```

```json
{
  "message": "Board deleted successfully"
}
```

### Estrutura de pasta

```bash
/src
    /controllers
        /board
            board.controller.ts
    /database
        /migrations
        connection.ts
        database.ts
    /middlewares
        /borad
            middlleware.ts
    /routes
        /board
            board-route.ts
        /task
            task-route.ts
        index.ts
    /validations
        /create-board.schema.ts
    server.ts
```