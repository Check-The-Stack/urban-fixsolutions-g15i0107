# Notas Locales - React y el Proyecto

## Comandos del proyecto (USAR PNPM, NO npm)

```bash
# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Build
pnpm build
```

## Por qué usamos pnpm, no npm

pnpm es más rápido, usa menos memoria y maneja mejor node_modules.

```bash
# Commandos npm (MAL)
npm install
npm start
npm run build

# Commandos pnpm (CORRECTO)
pnpm install
pnpm dev
pnpm build
```

---

## Qué es React

React es una librería de JavaScript para crear interfaces de usuario. Todo se basa en **componentes**.

---

## Componentes

Un componente es una función que devuelve JSX (parece HTML pero es JavaScript).

```jsx
function MiComponente() {
  return <h1>Hola mundo</h1>;
}
```

**Reglas:**
- El nombre debe empezar con mayúscula
- Se guarda como `.jsx`
- Va en `frontend/src/components/`

---

## Props (propiedades)

Son datos que le pasás al componente. Funcionan como parámetros de función.

```jsx
function Saludo({ nombre, edad }) {
  return <p>Hola {nombre}, tenés {edad} años</p>;
}

// Uso: <Saludo nombre="Erika" edad={25} />
```

---

## Estado (useState)

Es como una variable que cuando cambia, React re-dibuja el componente.

```jsx
import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0); // valor inicial: 0

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
    </div>
  );
}
```

---

## Context (useContext)

Para compartir datos entre muchos componentes sin pasar props uno por uno.

```jsx
// Crear el contexto (AuthContext.jsx)
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Usar en cualquier componente
import { useAuth } from '../context/AuthContext';
const { user, setUser } = useAuth();
```

---

## useEffect

Ejecuta código cuando el componente se monta o cuando cambia algo.

```jsx
useEffect(() => {
  // se ejecuta al cargar el componente
  console.log('hola');
}, []); // [] = solo una vez

useEffect(() => {
  // se ejecuta cada vez que cambia 'token'
}, [token]);
```

---

## Estructura de archivos del proyecto

```
frontend/src/
├── components/      # Componentes visuales (Button, Input, etc.)
│   └── ui/          # Componentes base reutilizables
├── context/         # Estados globales (AuthContext)
├── pages/           # Páginas completas (Login, Dashboard)
│   ├── admin/
│   ├── cliente/
│   └── tecnico/
├── services/        # Conexiones al backend (api.js)
└── App.jsx          # Punto principal de la app
```

---

## Componentes creados hasta ahora

### Button (`components/ui/Button.jsx`)

```jsx
import { Button } from './components/ui/Button';

<Button>Hola</Button>                          // primary, tamaño m (default)
<Button variant="danger">Eliminar</Button>      // rojo
<Button size="xl">Grande</Button>               // grande
<Button disabled>No disponible</Button>         // deshabilitado
```

Variantes: `primary` (azul), `secondary` (gris), `danger` (rojo)
Tamaños: `xs`, `s`, `m` (default), `l`, `xl`

### Input (`components/ui/Input.jsx`)

```jsx
import { Input } from './components/ui/Input';

<Input label="Email" type="email" value={email} onChange={handleChange} />
<Input label="Contraseña" type="password" value={pass} onChange={handleChange} />
```

### AuthContext (`context/AuthContext.jsx`)

```jsx
import { useAuth } from '../context/AuthContext';

const { user, token, login, logout, loading } = useAuth();
```

### API Service (`services/api.js`)

```jsx
import api from '../services/api';

// Hace request a http://localhost:3001
const { data } = await api.post('/auth/login', { email, password });
const { data } = await api.get('/servicios');
```

Automáticamente agrega el token JWT al header de cada request.

### Login (`pages/Login.jsx`)

Página completa de login con:
- Formulario con email y contraseña
- Manejo de errores
- Redirección por rol (CLIENTE → /cliente, TECNICO → /tecnico, ADMIN → /admin)

---

## JSX - Sintaxis básica

```jsx
// Texto
<h1>Hola</h1>

// Variables (llaves)
<p>{nombre}</a>

// Clases CSS (className, no class)
<div className="bg-blue-500">

// Eventos
<button onClick={() => hacerAlgo()}>Clic</button>
<form onSubmit={handleSubmit}>

// Condicional
{error && <p>Error: {error}</p>}

// Listas
{items.map(item => <li key={item.id}>{item.nombre}</li>)}
```

---

## Tailwind CSS

Clases utilitarias para estilos. Ejemplos:

```jsx
// Colores
bg-blue-600      // fondo azul
text-white       // texto blanco
text-red-500     // texto rojo

// Espaciado
p-4              // padding 4 (1rem)
px-6             // padding horizontal
mb-2             // margin bottom

// Tamaños
w-full           // ancho completo
max-w-md         // ancho máximo

// Flexbox
flex items-center justify-center

// Bordes
rounded-lg       // bordes redondeados
shadow-sm        // sombra

// Hover
hover:bg-blue-700  // al pasar el mouse

// Transiciones
transition-colors  // animar cambios de color
```
