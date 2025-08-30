# Sistema de Gestão de Pagamentos

O Sistema de Gestão de Pagamentos é uma aplicação full-stack projetada para simplificar o controle de despesas pessoais ou de pequenas empresas. A plataforma permite aos usuários cadastrar, visualizar, atualizar e deletar contas a pagar de forma intuitiva e eficiente.

Este projeto foi construído com uma arquitetura moderna, separando o backend (API RESTful) do frontend (Single Page Application), e serve como um excelente exemplo prático de integração entre essas tecnologias.

#

✨ **Funcionalidades Principais**

* ✅ CRUD Completo de Contas:

  * **Criar**: Adicionar novas contas com descrição, valor, data de vencimento e status.

  * **Ler**: Visualizar todas as contas em uma lista clara, com opções de visualizar detalhes, editar e excluir.

  * **Atualizar**: Editar informações de contas existentes.

  * **Deletar**: Remover contas do sistema.

* ✅ API RESTful Segura: Backend robusto com endpoints bem definidos para manipulação dos dados.

<br/>

🛠️ Pilha Tecnológica (Tech Stack)

```
Camada	        Tecnologia	                  Descrição

Frontend	    Next.js (com TypeScript)	  Framework React para renderização no lado do servidor e
                                              geração de sites estáticos.
                React	                      Biblioteca para construção de interfaces de usuário.

Backend	        Django REST Framework	      Framework poderoso para construir APIs Web com Python.
                Django	                      Framework web de alto nível que incentiva o
                                              desenvolvimento rápido.
                Python	                      Linguagem de programação principal do backend.

Banco de Dados	MySQL	                      Sistema de gerenciamento de banco de dados relacional.
```

<br/>

🚀 **Guia de Instalação e Execução**

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

**Pré-requisitos**
  * Node.js (v22.x ou superior) e npm ou yarn.
  * Python (v3.12 ou superior) e pip.
  * MySQL Server (v8.0 ou superior) instalado e em execução.
  * Git.
#

### Configuração Manual

**1. Backend (Django REST Framework)**
```
# 1. Clone o repositório
git clone https://github.com/DPelizoni/sistema-pagamentos.git
cd sistema-pagamentos/backend

# 2. Crie e ative um ambiente virtual
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate

# 3. Instale as dependências
pip install -r requirements.txt

# 4. Configure as variáveis de ambiente
# Crie um arquivo.env a partir do exemplo
.env

# Abra o arquivo.env e configure as credenciais do seu banco de dados MySQL
# SECRET_KEY="gere-uma-chave-secreta-aqui"
# DB_NAME=nome-do-deu-banco
# DB_USER=nome-do-deu-usuario
# DB_PASSWORD=sua-senha
# DB_HOST=localhost
# DB_PORT=3306
# CORS_ALLOWED_ORIGINS='http://localhost:3000,http://127.0.0.1:3000,http://172.31.16.1:3000'

# 5. Execute as migrações do banco de dados
python manage.py migrate

# 6. Inicie o servidor de desenvolvimento do backend
python manage.py runserver
# O backend estará rodando em http://127.0.0.1:8000
```

<br/>

**2. Frontend (Next.js)**

```
# Abra um novo terminal
cd../frontend

# 1. Instale as dependências
npm install

# 2. Configure as variáveis de ambiente
# Crie um arquivo.env.local a partir do exemplo
.env.local

# Abra o.env.local e aponte para a URL da sua API backend
# NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api

# 3. Inicie o servidor de desenvolvimento do frontend
npm run dev
# O frontend estará acessível em http://localhost:3000
```

<br/>

🔌 Referência da API

A API RESTful segue os padrões de mercado. 

```
Endpoint	              Método	  Descrição	

/api/payments/	          GET	      Lista todas as contas do usuário autenticado.	
/api/payments/	          POST	      Cria uma nova conta.	
/api/payments/{id}/	      GET	      Obtém os detalhes de uma conta específica.	
/api/payments/{id}/    	  PUT         Atualiza uma conta existente.	
/api/payments/{id}/	      DELETE	  Deleta uma conta.	

```
