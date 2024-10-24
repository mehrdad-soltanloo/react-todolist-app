import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

export const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks && storedTasks !== "[]") {
      const parsedTasks = JSON.parse(storedTasks);

      setTasks(parsedTasks);
    }
  }, []);

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    const updatedTasks = [...tasks, { id: nanoid(), text: newTask }];
    setTasks(updatedTasks);

    setNewTask("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="todo-container">
      <h1>React to do list app</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="task-input"
        />
        <button type="submit" className="add-task-btn">
          add task
        </button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => {
          return (
            <li key={task.id} className="task-item">
              {task.text}
              <button
                onClick={() => removeTask(task.id)}
                className="remove-btn"
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
