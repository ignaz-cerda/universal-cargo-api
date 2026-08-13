

## Stack

NestJs as primary framework.
TypeScript inherit by NestJs as programming language

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

### Health check
```bash
curl --location 'http://127.0.0.1:3000'
```

Output:
```json
{"status":"ok","timestamp":"2026-08-13T21:00:46.672Z"}
```
