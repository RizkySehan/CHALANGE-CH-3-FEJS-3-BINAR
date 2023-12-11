import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Proptypes from "prop-types";
import { FaBook } from "react-icons/fa";
import { SlActionUndo } from "react-icons/sl";

export default function AddTodo({ todoData, setTodoData }) {
  const [newTodo, setNewTodo] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!newTodo.trim()) return;

    const newTodoList = {
      id: todoData.length + 10,
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
                <SlActionUndo size={35} style={{ color: "rgb(37 99 235)" }} />
              </Link>
              <form onSubmit={handleSubmit}>
                <div className="d-flex mt-2">
                  <div className="bg-primary p-1">
                    <FaBook size={25} style={{ color: "white" }} />
                  </div>
                  <input
                    type="text"
                    placeholder="Add Todo"
                    className="w-100 rounded border"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    autoFocus
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
