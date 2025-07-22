## Tasks do Projeto

### Estrutura inicial do projeto

- [ ] Configurar o projeto (ex: Node.js + TypeScript)
- [ ] Configurar ESLint e Prettier (opcional)
- [ ] Configurar banco de dados (ex: SQLite ou PostgreSQL)
- [ ] Instalar e configurar **Knex** para migrations
- [ ] Criar arquivo de configuração do Knex (`knexfile.ts` ou equivalente)
- [ ] Configurar tool de execução de migrations (`npm run knex` ou script no package.json)

---

### Validação de dados

- [ ] Instalar e configurar **Zod** para validação de dados das requisições
- [ ] Criar schemas de validação (ex.: `createUserSchema`, `createMealSchema`, etc.)
- [ ] Validar dados de entrada nas rotas usando Zod

---

### Funcionalidades de Usuário

- [ ] Criar tabela `users` no banco de dados (id, name, email, created_at, etc.)
- [ ] Criar endpoint para **criar usuário**
- [ ] Implementar mecanismo para **identificar o usuário entre requisições**
  - Exemplo: salvar ID do usuário em um cookie ou usar JWT
- [ ] Criar middleware para validar se o usuário está autenticado na requisição

---

### Funcionalidades de Refeições

- [ ] Criar tabela `meals` (id, user_id, name, description, datetime, is_on_diet, created_at, updated_at)
- [ ] Criar endpoint para **registrar uma refeição**
- [ ] Criar endpoint para **listar todas as refeições** de um usuário
- [ ] Criar endpoint para **visualizar uma única refeição**
- [ ] Criar endpoint para **editar uma refeição**
- [ ] Criar endpoint para **apagar uma refeição**

---

### Métricas

- [ ] Criar endpoint para **recuperar as métricas** de um usuário:
- [ ] Quantidade total de refeições registradas
- [ ] Quantidade total de refeições dentro da dieta
- [ ] Quantidade total de refeições fora da dieta
- [ ] Melhor sequência de refeições dentro da dieta

---

### Regras de autorização

- [ ] Garantir que o usuário **só possa listar, visualizar, editar ou apagar refeições que ele mesmo criou**

---

### Extras / Organização

- [ ] Documentar a API (README ou Swagger)
- [ ] Criar testes (unitários e/ou de integração)
