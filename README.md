# React Todo List App with Vite

This is a simple **React Todo List App** built using **Vite**. The app allows users to add and remove tasks, and it features CSS Grid for layout and hover effects for a modern design.

## Table of Contents

- [Project Setup](#project-setup)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Components](#components)
  - [App.jsx](#appjsx)
  - [TodoApp.jsx](#todoappjsx)
- [Styling](#styling)
  - [TodoApp.css](#todoappcss)
  - [index.css](#indexcss)
- [Improvements](#improvements)
- [Credits](#credits)

## Project Setup

1. **Create a new React project using Vite:**

```bash
npm create vite@latest todo-list --template react
```

2. **Navigate to your project and install dependencies:**

```bash
cd todo-list
npm install
npm run dev
```

Now your development server should be running at `http://localhost:3000`.

## Folder Structure

Your folder structure should look like this:

```
todo-list/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── TodoApp.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Features

- **Add tasks**: Users can add tasks to the list.
- **Remove tasks**: Users can remove tasks by clicking a button.
- **Responsive design**: The app is styled using CSS Grid and has hover effects for buttons and tasks.

## Components

### App.jsx

This component renders the main `TodoApp` component:

```jsx
import React from "react";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div>
      <TodoApp />
    </div>
  );
}

export default App;
```

### TodoApp.jsx

This component manages the state for tasks and renders the input field, the list of tasks, and the remove button for each task.

```jsx
import { nanoid } from "nanoid";
import { useState } from "react";
import "./TodoApp.css";

export const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    setTasks([...tasks, { id: nanoid(), text: newTask }]);
    setNewTask(""); // Clear the input field after adding
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>React Todo List App</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
          className="task-input"
        />
        <button type="submit" className="add-task-btn">
          Add Task
        </button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.text}</span>
            <button onClick={() => removeTask(task.id)} className="remove-btn">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

## Styling

### TodoApp.css

This file contains the styles for the Todo List app, using CSS Grid for layout and hover effects for buttons and tasks.

```css
/* TodoApp.css */

.todo-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.task-input {
  padding: 12px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  margin-right: 10px;
  transition: border-color 0.3s;
}

.task-input:focus {
  border-color: #007bff;
  outline: none;
}

.add-task-btn {
  padding: 12px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-task-btn:hover {
  background-color: #0056b3;
}

.task-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 20px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.task-item:hover {
  transform: scale(1.02);
}

.remove-btn {
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #ff1a1a;
}
```

### index.css

This file contains global styles for the app.

```css
/* index.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Arial", sans-serif;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

## Improvements

Here are a few ideas for additional features:

- **Task completion**: Add a checkbox to mark tasks as completed and style them differently.
- **Persistent tasks**: Use `localStorage` to store tasks so they remain after refreshing the page.
- **Task filtering**: Add options to filter tasks by "All", "Completed", and "Incomplete".

### Contributing

Contributions are welcome! If you have suggestions for improving the app, feel free to fork the repository and create a pull request. Whether it’s fixing a bug, adding a new feature, or improving the documentation, I would love to see your contributions.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with descriptive messages.
4. Push your branch to your forked repository.
5. Open a pull request to the main branch of this repository.
6. Thank you in advance for your contribution!

> Thank you for checking out TaskMasterPlus! I appreciate your time and interest in this project. Whether you're using the app, providing feedback, or contributing to the code, your support means a lot. I hope you find this project useful and inspiring for your own development journey.

Happy coding! 🙂
