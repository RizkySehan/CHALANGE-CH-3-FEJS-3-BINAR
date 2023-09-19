function Filter() {
  return (
    <>
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
    </>
  );
}

export default Filter;
