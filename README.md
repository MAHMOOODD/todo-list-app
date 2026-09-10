# ✅ Todo List App

A clean, minimal todo list app built with **React** and **TypeScript** — add, edit, delete, and filter tasks entirely on the client side.

<p align="left">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-Styling-38B2AC?logo=tailwindcss&logoColor=white" />
</p>

**🔗 Live Demo:** [todo-app-nu-ivory-89.vercel.app](https://todo-app-nu-ivory-89.vercel.app/)

---

## ✨ Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- 🔍 Filter tasks (all / done / waiting)

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | React |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |

---

## 📂 Project Structure

```
frontend/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/              # Images and static assets
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Mycomponents/    # App-specific components
│   │   │   ├── Body/
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   ├── Todo.tsx
│   │   │   ├── TodoHeader.tsx
│   │   │   ├── TodoBody.tsx
│   │   │   ├── TodoFooter.tsx
│   │   │   ├── EditDialog.tsx
│   │   │   ├── AlertForDelete.tsx
│   │   │   └── ...
│   │   └── ui/               # Reusable UI primitives (shadcn/ui)
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       └── ...
│   ├── Context/
│   │   └── TodoContext.tsx   # Global todo state
│   ├── lib/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── package.json
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/MAHMOOODD/todo-list-app.git
cd todo-list-app/frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

---

## 🗺 Roadmap

- [ ] Persist tasks with `localStorage`
- [ ] Add due dates / priorities
- [ ] Connect to a backend API for multi-device sync

---

## 👤 Author

**Mahmoud Salah**
Computer Science student, Cairo University — focused on full-stack development.
