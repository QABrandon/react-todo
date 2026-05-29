# React Todo List App

A todo list application built with React and Vite for FS12 Week 9 Session 3. It reimplements the Week 7 vanilla JavaScript todo app using React components, state, and event handling.

**Note:** Day-to-day development happens in `full-stack-2026/portfolio/major-03-react-todo/`. This `todo-react-app/` folder is the class submission copy for [react-todo](https://github.com/QABrandon/react-todo). Minor 03 on the portfolio is the vanilla JavaScript version.

## Features

- Add todos with validation (required, minimum 3 characters)
- Mark todos complete or incomplete
- Delete todos
- Filter todos: All, Active, Completed (with counts)
- Persist todos in `localStorage` across browser sessions
- Responsive layout styled after the Week 7 vanilla version

## Tech stack

- React 19
- Vite
- JavaScript (JSX)

## Project structure

```text
src/
  App.jsx              # Lifted state, handlers, localStorage
  components/
    AddTodo.jsx        # Controlled form input
    TodoList.jsx       # Renders list or empty states
    TodoItem.jsx       # Single todo row
    TodoFilters.jsx    # Filter buttons with counts
```

## Getting started

From the `todo-react-app` folder:

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Rubric checklist

- Functional components with props and JSX
- `useState` for todos and form input
- Event handlers for add, toggle, delete, and form submit
- Controlled inputs with validation and `preventDefault`
- Dynamic list rendering with `.map()` and stable `key` props
- Empty state messaging
- Component folder with one component per file
- Bonus: localStorage, filters, responsive CSS

## Author

Brandon Mosco — Full-Stack Bootcamp 2026
