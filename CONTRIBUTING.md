# Contribuir a Urban FixSolutions

## Reglas generales

1. **Nunca hacer push directo a `main`** — siempre crear un branch y abrir PR
2. **Cada uno trabaja en su carpeta** — frontend en `/frontend`, backend en `/backend`
3. **Commits descriptivos** — explicar qué se hizo, no solo "update"

## Branch Naming

```
feature/nombre-descriptivo    # cosas nuevas
fix/nombre-del-bug           # arreglos
docs/nombre                  # documentación
```

Ejemplo: `feature/login-form`, `fix/btn-submit`, `docs/api-routes`

## Setup inicial

```bash
git clone https://github.com/Check-The-Stack/Urban-FixSolutions-G15I0107.git
cd Urban-FixSolutions-G15I0107

# Frontend
cd frontend
pnpm install

# Backend
cd ../backend
cp .env.example .env  # configurar
pnpm install
```

## Flujo de trabajo

1. Crear branch desde `main`
2. Hacer cambios
3. Push al branch
4. Abrir PR
5. Esperar review del equipo
6. Merge a `main`

## Roles y carpetas

| Rol | Trabaja en | Puede tocar |
|-----|-----------|-------------|
| Frontend | `/frontend` | Componentes, páginas, hooks, styles |
| Backend | `/backend` | Routes, controllers, models, prisma |
| UX/UI | `/docs` | Wireframes, mockups, prototipos |
| Tester | `/tests` | Reportes de bugs, casos de prueba |

## Si necesitás tocar algo de otro rol

1. Avisar en el grupo
2. Hacer los cambios en un branch separado
3. Abrir PR para que la persona del rol revise

## Commits

Formato:
```
tipo: descripción corta

tipo: feature, fix, docs, chore, refactor
```

Ejemplos:
- `feature: agregar formulario de login`
- `fix: corregir validación de email`
- `docs: agregar wireframes de dashboard`
