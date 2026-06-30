import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
const [editId, setEditId] = useState(null);
const [editText, setEditText] = useState("");
  function addTask() {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  }

  function delTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function startEdit(task){
    setEditId(task.id)
    setEditText(task.text)
  }
function saveEdit(id) {
  setTasks(
    tasks.map((task) =>
      task.id === id
        ? { ...task, text: editText }
        : task
    )
  );

  setEditId(null);
  setEditText("");
}
  return (
  <>
    <h1>Hey.. Add your tasks here to complete..</h1>

    <input
      type="text"
      placeholder="Get started"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      id="inputField"
    />

    <button onClick={addTask}>ADD</button>

    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />

          {editId === task.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />

              <button onClick={() => saveEdit(task.id)}>
                SAVE
              </button>
            </>
          ) : (
            <>
              <span
                style={{
                  textDecoration: task.completed
                    ? "line-through"
                    : "none",
                  margin: "0 10px",
                }}
              >
                {task.text}
              </span>

              <button onClick={() => startEdit(task)}>
                EDIT
              </button>
            </>
          )}

          <button onClick={() => delTask(task.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  </>
);
}

export default App;