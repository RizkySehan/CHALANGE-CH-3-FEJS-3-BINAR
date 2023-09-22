import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Search({ todoData, setFilteredData }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const filter = todoData.filter((item) =>
      item.task.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filter);
  };

  return (
    <>
      <div className="mb-4">
        <h1 className="text-center fw-bold my-3">TodoSearch</h1>
        <div className="container-fluid border rounded p-3">
          <div className="row d-flex justify-content-between">
            <div className="col-7">
              <div className="d-flex">
                <div className="bg-primary p-1">
                  <label htmlFor="Search Todo">
                    <img
                      width="30px"
                      height="30px"
                      src="search.svg"
                      alt="search.svg"
                    />
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Search Todo"
                  className="w-100"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button
                className="btn btn-primary mt-2 w-100 fs-5"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div className="col-4 d-flex flex-column-reverse">
              <Link to="/add-todo">
                <button className="btn btn-primary w-100 fs-5">
                  Add New Task
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Search.propTypes = {
  todoData: PropTypes.array,
  setFilteredData: PropTypes.func,
};

export default Search;
