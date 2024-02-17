import React from "react";

import DataTable from "./DataTable";

const WordFrequencyTable = ({ frequencyData }) => {
  if (frequencyData.length) {
    return (
      <>
        <DataTable tableData={frequencyData} />
      </>
    );
  }
};

export default WordFrequencyTable;
