# Urban FixSolutions

Plataforma de gestión de servicios urbanos.

## Equipo

| Rol | Integrante |
|-----|------------|
| Frontend | |
| Backend | |
| UX/UI | |
| Tester | |

## Stack Tecnológico

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Express + Prisma
- **Base de datos:** PostgreSQL

## Cómo correr el proyecto

### Requisitos
- Node.js v18+
- pnpm (`npm install -g pnpm`)

### Frontend
```bash
cd frontend
pnpm install
pnpm dev
```

### Backend
```bash
cd backend
cp .env.example .env  # configurar variables de entorno
pnpm install
pnpm prisma db push
pnpm dev
```

## Estructura del proyecto

```
Urban-FixSolutions-G15I0107/
├── frontend/          # React + Vite
├── backend/           # Express + Prisma
├── docs/              # Documentación, wireframes, mockups
├── tests/             # Tests manuales y reportes
└── README.md
```

## Contribuir

Ver [CONTRIBUTING.md](CONTRIBUTING.md) para reglas del equipo.
