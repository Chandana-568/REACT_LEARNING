import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");

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

  function startEdit(task) {
    setEditId(task.id);
    setEditText(task.text);
  }

  function saveEdit(id) {
    if (editText.trim() === "") return;

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

  function cancelEdit() {
    setEditId(null);
    setEditText("");
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  function clearCompleted() {
    setTasks(tasks.filter((task) => !task.completed));
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

      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>

        <button onClick={() => setFilter("active")}>
          Active
        </button>

        <button onClick={() => setFilter("completed")}>
          Completed
        </button>

        <button onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
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
                  onChange={(e) =>
                    setEditText(e.target.value)
                  }
                />

                <button onClick={() => saveEdit(task.id)}>
                  Save
                </button>

                <button onClick={cancelEdit}>
                  Cancel
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
                  Edit
                </button>
              </>
            )}

            <button onClick={() => delTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;