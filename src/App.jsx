function App() {
  return (
    <>
      <div className="container border mt-5 p-5">
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
                <a href="#">
                  <button className="btn btn-primary w-100 fs-5">
                    Add New Task
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h1 className="text-center fw-bold my-3">Todo List</h1>
          <div className="container-fluid p-3">
            <div className="row">
              <div className="col-12 d-flex justify-content-evenly gap-5">
                <button className="btn btn-primary fs-5 w-100">All</button>
                <button className="btn btn-primary fs-5 w-100">Done</button>
                <button className="btn btn-primary fs-5 w-100">Todo</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <ul className="list-inline">
                <div className="d-flex justify-content-between border rounded m-2 p-2">
                  <li className="list-inline-item">Nyuci Mobil</li>
                  <div className="d-flex justify-content-center align-items-center mx-1 gap-2">
                    <input
                      type="checkbox"
                      className="me-2"
                      style={{ width: "20px", height: "20px" }}
                    />

                    <button className="border-0 bg-transparent">
                      <img
                        width="25px"
                        height="25px"
                        src="edit.svg"
                        alt="Edit.svg"
                      />
                    </button>
                    <button className="border-0 bg-transparent">
                      <img
                        width="25px"
                        height="25px"
                        src="trash.svg"
                        alt="trash.svg"
                      />
                    </button>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-3">
            <div className="col-6">
              <button className="btn btn-danger fs-5 w-100 ">
                Delete done task
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-danger fs-5 w-100 ">
                Delete all task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
