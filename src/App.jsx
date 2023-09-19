import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AddTodo from "./Pages/AddTodo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-todo" element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
