# Billder - Gestor de Proyectos

## Descripción

Esta es una aplicación para gestionar proyectos de construcción utilizando React, TypeScript y Vite. La aplicación permite a los usuarios crear, seguir y gestionar sus proyectos de manera eficiente.

Los albañiles enfrentan problemas de informalidad laboral, lo que significa que muchos de ellos trabajan sin acceso a seguridad social, beneficios como licencias pagadas, o la capacidad de realizar aportes jubilatorios. Esta situación los deja económicamente vulnerables tanto en el corto como en el largo plazo. A nivel más práctico, también carecen de herramientas que les permitan gestionar sus proyectos de manera profesional y organizada.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Requisitos Previos](#requisitos-previos)
- [Configuración](#configuración)
- [Configuración del Proyecto](#configuración-del-proyecto)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Instalación

Instrucciones paso a paso sobre cómo clonar e instalar el proyecto localmente.

```
# Clona el repositorio
git clone https://github.com/usuario/billder.git

# Accede al directorio del proyecto
cd billder

# Instala las dependencias
npm install
```

## Requisitos Previos

- Node.js v16.0 o superior
- npm v7.0 o superior
- Vite v3.0

## Configuración

Crea un archivo .env en la raíz del proyecto
`cp .env.example .env`

Luego, edita el archivo .env para ajustar las variables de entorno
`VITE_API_URL="https://api.ejemplo.com"`

## Configuración del Proyecto

Este template proporciona una configuración mínima para hacer que React funcione en Vite con HMR y algunas reglas de ESLint.

Actualmente, hay disponibles dos plugins oficiales:

```
@vitejs/plugin-react usa Babel para Fast Refresh
@vitejs/plugin-react-swc usa SWC para Fast Refresh
```

### Expansión de la Configuración de ESLint

Configura la propiedad parserOptions del nivel superior de la siguiente manera:

```
export default tseslint.config({
  languageOptions: {
    // otras opciones...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Reemplaza `tseslint.configs.recommended` por `tseslint.configs.recommendedTypeChecked` o `tseslint.configs.strictTypeChecked`
- Opcionalmente, añade `...tseslint.configs.stylisticTypeChecked`
- Instala [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) y actualiza la configuración:

```
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Establece la versión de React
  settings: { react: { version: "18.3" } },
  plugins: {
    // Añade el plugin de React
    react,
  },
  rules: {
    // otras reglas...
    // Habilita sus reglas recomendadas
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
### Ejecución del Proyecto
#### Modo Desarrollo
```
# Para ejecutar el proyecto en modo desarrollo
npm run dev

```
#### Build para Producción
```
# Para construir el proyecto para producción
npm run build
```
### Tecnologías Utilizadas
- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Lenguaje de programación tipado que se compila a JavaScript.
- **Vite**: Herramienta rápida de desarrollo y build.
- **Tailwind CSS**: Framework de CSS utilitario.
- **ESLint**: Herramienta para mantener la calidad del código y aplicar reglas de estilo.

### Estructura del Proyecto
```
src/
│
├── api/             # Servicios API
├── app/             # Lógica de la aplicación
├── assets/          # Archivos estáticos (imágenes, íconos, etc.)
├── auth/            # Manejo de autenticación
├── context/         # Context API
├── hooks/           # Hooks personalizados
├── interfaces/      # Interfaces TypeScript
├── layouts/         # Layouts para las páginas
├── router/          # Configuración de rutas
├── store/           # Estado global (Redux, Context, etc.)
├── ui/              # Componentes de interfaz de usuario
├── utils/           # Utilidades y funciones auxiliares
├── App.tsx          # Componente principal
├── index.css        # Estilos globales
└── main.tsx         # Entrada principal de la aplicación
```