import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Proptypes from "prop-types";

export default function AddTodo({ todoData, setTodoData }) {
  const [newTodo, setNewTodo] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!newTodo.trim()) return;

    const newTodoList = {
      id: todoData.length + 1,
      task: newTodo,
      complete: false,
    };

    setTodoData((prevTodoData) => [...prevTodoData, newTodoList]);
    setNewTodo("");

    navigate("/");
  }
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <h1 className="text-center fw-bold my-3">TodoInput</h1>
            <div className="col-md-8 border rounded p-4  ">
              <Link to="/">
                <img width="35px" height="35px" src="prev.svg" alt="prev.svg" />
              </Link>
              <form onSubmit={handleSubmit}>
                <div className="d-flex mt-2">
                  <div className="bg-primary p-1">
                    <img
                      width="25px"
                      height="25px"
                      src="paper.svg"
                      alt="paper.svg"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Add Todo"
                    className="w-100"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary w-100 mt-2 ">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

AddTodo.propTypes = {
  todoData: Proptypes.array,
  setTodoData: Proptypes.func,
};
