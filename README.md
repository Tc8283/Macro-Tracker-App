# React Starter Template

A minimal React starter template — ready to build on.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v3** — utility-first styling
- **React Router v7** (library mode) — client-side routing
- **ESLint v9** (flat config) — react + hooks rules
- **Prettier** — code formatting

## Project Structure

```
src/
  components/
    Navbar.jsx       ← top nav bar
  pages/
    Home.jsx         ← "/" route
    NotFound.jsx     ← "*" catch-all 404
  App.jsx            ← router setup
  main.jsx           ← entry point
  index.css          ← Tailwind directives
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at http://localhost:5173 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint on src/ |
| `npm run format` | Run Prettier on src/ |

## Getting Started

```bash
npm install
npm run dev
```

To use this as a starting point for a new project, copy the folder and run `npm install`.
