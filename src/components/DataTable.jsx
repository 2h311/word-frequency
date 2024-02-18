import React from "react";

import TableBody from "./TableBody";
import TableHead from "./TableHead";

const DataTable = ({ tableData }) => {
  return (
    <table className="table">
      <TableHead />
      <TableBody tableData={tableData} />
    </table>
  );
};

export default DataTable;
