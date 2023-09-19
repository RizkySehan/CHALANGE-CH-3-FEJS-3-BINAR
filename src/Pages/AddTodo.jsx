import { Link } from "react-router-dom";

function AddTodo() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <h1 className="text-center fw-bold my-3">TodoInput</h1>
            <div className="col-8 border rounded p-4  ">
              <Link to="/">
                <img width="35px" height="35px" src="prev.svg" alt="prev.svg" />
              </Link>
              <div className="d-flex mt-2">
                <div className="bg-primary p-1">
                  <img
                    width="25px"
                    height="25px"
                    src="paper.svg"
                    alt="paper.svg"
                  />
                </div>
                <input type="text" placeholder="Add Todo" className="w-100" />
              </div>
              <button className="btn btn-primary w-100 mt-2 ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
