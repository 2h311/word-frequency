import React from "react";

import DataTable from "./DataTable";
// import { ChartSVG } from "./Icons";
import { NoteBookSVG } from "./Icons";

const WordFrequencyTable = ({ frequencyData }) => {
  if (frequencyData.length) {
    return (
      <div className="container__down-region">
        <div className="container__down-left">
          <span className="container__down-svg">
            <NoteBookSVG />
          </span>
          <DataTable tableData={frequencyData} />
        </div>
        <div className="container__down-right">
          <div className="container__down-block"></div>
        </div>
      </div>
    );
  }
};

export default WordFrequencyTable;
