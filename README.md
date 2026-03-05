# soa-backend

Backend del proyecto SOA — Harry Potter API  
Stack: **NestJS 10 + TypeScript**

## Estructura

```
src/
├── common/
│   ├── filters/           → HttpExceptionFilter (errores centralizados)
│   ├── interceptors/      → TransformInterceptor (wrapper de respuestas)
│   └── interfaces/        → Tipos RAW de la HP API (solo uso interno)
├── integration/
│   └── hp-api/            → HpApiService (Facade — único acceso a HP API)
└── modules/
    ├── characters/        → GET /api/characters, GET /api/characters/:id
    ├── students/          → GET /api/students
    ├── staff/             → GET /api/staff
    ├── houses/            → GET /api/houses/:house
    ├── spells/            → GET /api/spells
    ├── character-house/   → GET /api/characters/:id/house-members (composición)
    └── health/            → GET /api/health
```

## Instalación

```bash
npm install
```

## Variables de entorno

Copia `.env.example` a `.env`:

```bash
cp .env.example .env
```

## Desarrollo

```bash
npm run start:dev
```

## Producción

```bash
npm run build
npm run start:prod
```

## Docker

```bash
docker build -t soa-backend .
docker run -p 3000:3000 --env-file .env soa-backend
```

## Swagger UI

Una vez corriendo: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)
