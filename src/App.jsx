import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import data from "./Json/data.json";

import Home from "./Pages/Home";
import AddTodo from "./Pages/AddTodo";

function App() {
  const [todoData, setTodoData] = useState([...data]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home todoData={todoData} setTodoData={setTodoData} />}
          />
          <Route
            path="/add-todo"
            element={<AddTodo todoData={todoData} setTodoData={setTodoData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
