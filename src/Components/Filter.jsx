import { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

function Filter({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <>
      <div className="mb-5">
        <h1 className="text-center my-3">TodoList</h1>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-between gap-3">
              <Button
                bgColor={
                  activeFilter === "All" ? "btn btn-danger" : "btn btn-primary"
                }
                text="All"
                onClick={() => handleFilterChange("All")}
              />
              <Button
                bgColor={
                  activeFilter === "Done" ? "btn btn-danger" : "btn btn-primary"
                }
                text="Done"
                onClick={() => handleFilterChange("Done")}
              />
              <Button
                bgColor={
                  activeFilter === "Todo" ? "btn btn-danger" : "btn btn-primary"
                }
                text="Todo"
                onClick={() => handleFilterChange("Todo")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func,
};

export default Filter;
