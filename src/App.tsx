import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📋 Mis Notas</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe una nota..."
      />

      <button onClick={addTask}>Agregar</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;