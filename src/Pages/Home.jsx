import PropTypes from "prop-types";

import Filter from "../Components/Filter";
import Search from "../Components/Search";
import Button from "../Components/Button";
import { useEffect, useState } from "react";

function Home({ todoData, setTodoData }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredData, setFilteredData] = useState([...todoData]);
  const [editItemId, setEditItemId] = useState(null);
  const [editItemText, setEditItemText] = useState("");

  useEffect(() => {
    setActiveFilter("All");
  }, [todoData]);

  useEffect(() => {
    const filtered = todoData.filter((item) => {
      if (activeFilter === "All") {
        return true;
      } else if (activeFilter === "Done") {
        return item.complete;
      } else if (activeFilter === "Todo") {
        return !item.complete;
      }
      return true;
    });
    setFilteredData(filtered);
  }, [todoData, activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleCheckboxItem = (itemId) => {
    setTodoData((prevTodoData) =>
      prevTodoData.map((item) =>
        item.id === itemId ? { ...item, complete: !item.complete } : item
      )
    );
  };

  const handleDeleteItem = (itemId) => {
    const confirmDelete = window.confirm("Are you sure want to delete a task?");
    if (confirmDelete) {
      setTodoData((prevTodoData) =>
        prevTodoData.filter((item) => item.id !== itemId)
      );
    }
  };

  const handleEdit = (itemId, initialText) => {
    setEditItemId(itemId);
    setEditItemText(initialText);
  };

  const handleSaveEdit = (itemId) => {
    setTodoData((prevTodoData) =>
      prevTodoData.map((item) =>
        item.id === itemId ? { ...item, task: editItemText } : item
      )
    );
    setEditItemId(null);
    setEditItemText("");
  };

  const handleDeleteDoneTask = () => {
    const confirmDelete = window.confirm(
      "Are you sure want to delete a completed task?"
    );
    if (confirmDelete) {
      setTodoData((prevTodoData) =>
        prevTodoData.filter((item) => !item.complete)
      );
    }
  };

  const handleDeleteAllTask = () => {
    const confirmDelete = window.confirm(
      "Are you sure want to delete all task?"
    );
    if (confirmDelete) {
      setTodoData([]);
    }
  };

  return (
    <div className="container border mt-5 p-5">
      <Search todoData={todoData} setFilteredData={setFilteredData} />
      <Filter onFilterChange={handleFilterChange} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ul className="list-inline">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between border rounded m-2 p-2"
                >
                  {editItemId === item.id ? (
                    <div className="w-100">
                      <input
                        type="text"
                        className="w-100"
                        value={editItemText}
                        onChange={(e) => setEditItemText(e.target.value)}
                        autoFocus
                      />
                    </div>
                  ) : (
                    <li
                      className={
                        item.complete
                          ? "text-decoration-line-through text-danger"
                          : "list-ineline-item"
                      }
                    >
                      {item.task}
                    </li>
                  )}
                  <div className="d-flex justify-content-center align-items-center mx-1 gap-2">
                    <input
                      type="checkbox"
                      className="me-2"
                      checked={item.complete}
                      style={{ width: "20px", height: "20px" }}
                      onChange={() => handleCheckboxItem(item.id)}
                    />
                    {editItemId === item.id ? (
                      <button
                        className="border-0 bg-transparent"
                        aria-label="button ceklis"
                        onClick={() => handleSaveEdit(item.id)}
                      >
                        <img
                          width="25px"
                          height="25px"
                          src="ceklis.svg"
                          alt="ceklis.svg"
                        />
                      </button>
                    ) : (
                      <button
                        className="border-0 bg-transparent"
                        aria-label="button edit"
                        onClick={() => handleEdit(item.id, item.task)}
                      >
                        <img
                          width="25px"
                          height="25px"
                          src="edit.svg"
                          alt="Edit.svg"
                        />
                      </button>
                    )}
                    <button
                      className="border-0 bg-transparent"
                      aria-label="button trash"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      <img
                        width="25px"
                        height="25px"
                        src="trash.svg"
                        alt="trash"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-6">
            <Button
              onClick={handleDeleteDoneTask}
              text="Delete done task"
              bgColor="btn btn-danger"
            />
          </div>
          <div className="col-6">
            <Button
              onClick={handleDeleteAllTask}
              text="Delete all task"
              bgColor="btn btn-danger"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  todoData: PropTypes.array,
  setTodoData: PropTypes.func,
};

export default Home;
