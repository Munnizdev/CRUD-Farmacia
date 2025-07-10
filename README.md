<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<h2 align="center">💊 CRUD Farmácia – NestJS + TypeORM + MySQL</h2>

<p align="center">
  Projeto backend construído com NestJS para gerenciamento de <strong>categorias</strong> e <strong>produtos</strong> de uma farmácia.
  <br/>
  <em>Desenvolvido no Bootcamp Full Stack JavaScript da Generation Brasil.</em>
</p>

---

## 🚀 Visão Geral

Este projeto foi desenvolvido com o framework **NestJS** e utiliza **TypeORM** com banco de dados **MySQL**. Ele simula um sistema de cadastro de produtos e categorias para uma farmácia, com estrutura organizada em módulos.

O projeto está dividido em duas branches principais:
- `CRUD-Categoria`: contém somente a funcionalidade de Categoria.
- `CRUD-Produto`: contém Produto + Categoria.

---

## 🧠 Tecnologias utilizadas

- [NestJS](https://nestjs.com/)
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)

---

## 🗂️ Estrutura de Branches

| Branch           | Conteúdo                           |
|------------------|------------------------------------|
| `main`           | Projeto completo                   |
| `CRUD-Categoria` | Apenas CRUD de Categoria           |
| `CRUD-Produto`   | CRUD de Produto + Categoria        |

---

## 📦 Endpoints Disponíveis

### Categoria

| Método | Rota                           | Descrição               |
|--------|--------------------------------|-------------------------|
| GET    | `/categorias`                  | Lista todas             |
| GET    | `/categorias/:id`              | Busca por ID            |
| GET    | `/categorias/titulo/:titulo`   | Busca por título        |
| POST   | `/categorias`                  | Cria uma nova           |
| PUT    | `/categorias`                  | Atualiza uma existente  |
| DELETE | `/categorias/:id`              | Remove uma categoria    |

### Produto

| Método | Rota                          | Descrição                |
|--------|-------------------------------|--------------------------|
| GET    | `/produtos`                   | Lista todos              |
| GET    | `/produtos/:id`               | Busca por ID             |
| GET    | `/produtos/titulo/:titulo`    | Busca por título         |
| POST   | `/produtos`                   | Cria um novo             |
| PUT    | `/produtos`                   | Atualiza um existente    |
| DELETE | `/produtos/:id`               | Remove um produto        |

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Munnizdev/CRUD-Farmacia.git
cd CRUD-Farmacia
