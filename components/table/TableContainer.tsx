import React from "react";
import AddCarousel from "./AddCarousel";
import Table from "./Table";

const TableContainer = () => {
  return (
    <div id="#results" className="max-w-7xl mx-auto my-4">
      <div className="grid grid-cols-12 gap-6 relative ">
        <div className="col-span-9">
          <Table />
          <Table />
          <Table />
        </div>
        <div className="hidden md:block md:col-span-3 mt-20 ">
          <div className="sticky top-24">
            <AddCarousel border={"166534"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
