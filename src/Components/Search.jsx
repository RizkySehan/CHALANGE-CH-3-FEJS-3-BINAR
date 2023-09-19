import { Link } from "react-router-dom";

function Search() {
  return (
    <>
      <div className="mb-4">
        <h1 className="text-center fw-bold my-3">TodoSearch</h1>
        <div className="container-fluid border rounded p-3">
          <div className="row d-flex justify-content-between">
            <div className="col-7">
              <div className="d-flex">
                <div className="bg-primary p-1">
                  <img
                    width="30px"
                    height="30px"
                    src="search.svg"
                    alt="search.svg"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search Todo"
                  className="w-100"
                />
              </div>
              <button className="btn btn-primary mt-2 w-100 fs-5">
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

export default Search;
