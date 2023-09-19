import Filter from "../Components/Filter";
import Search from "../Components/Search";

function Home() {
  return (
    <div className="container border mt-5 p-5">
      <Search />
      <Filter />
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
  );
}

export default Home;
