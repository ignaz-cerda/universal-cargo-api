

## Stack

NestJs as primary framework.
TypeScript inherit by NestJs as programming language
Render as deploy tool

## Brief
Se eligio NestJs como framework ya que integra diversas soluciones "out of the box".
- Integracion de TypeScript, la cual nos brinda una capa de seguridad en el código como desarrolladores.
- Separado por dominio, facil definicion y desarrollo de las diferentes funcionalidades, dejando clara la responsabilidad de cada elemento
- Rápido y facil de hacer deploy
En una siguiente iteracion, podríamos implementar pruebas unitarias a cada elemento del API.

Deploy url:
https://universal-cargo-api.onrender.com

## Project setup

### Clone repo
```bash
$ git clone git@github.com:ignaz-cerda/universal-cargo-api.git
```

```bash
$ npm install
```

### Run the project

```bash
# watch mode
$ npm run start:dev
```

#### Open browser on http://127.0.0.1:3000 to se health page

## Consume

### List leads
```bash
curl --location 'http://127.0.0.1:3000/leads'
```

```bash
curl --location 'https://universal-cargo-api.onrender.com/leads'
```

### Create Lead
```bash
curl --location 'http://127.0.0.1:3000/leads' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "ignacio",
    "email": "ignacio@test.com",
    "company": "Universal Cargo",
    "message": "Test API"
}'
```

```bash
curl --location 'https://universal-cargo-api.onrender.com/leads' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "ignacio",
    "email": "ignacio@test.com",
    "company": "Universal Cargo",
    "message": "Test API"
}'
```

### Health check

```bash
curl --location 'http://127.0.0.1:3000'
```

```bash
curl --location 'https://universal-cargo-api.onrender.com'
```

Output:
```json
{"status":"ok","timestamp":"2026-08-13T21:00:46.672Z"}
```
