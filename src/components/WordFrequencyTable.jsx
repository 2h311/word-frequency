import React from "react";

import DataTable from "./DataTable";
import { NoteBookSVG, ChartSVG } from "./Icons";
import "../Table.css";

const WordFrequencyTable = ({ frequencyData }) => {
  if (frequencyData.length) {
    return (
      <div className="container__down-region">
        <div className="container__down-left">
          <span className="container__notebook">
            <NoteBookSVG />
          </span>
          <DataTable tableData={frequencyData} />
        </div>
        <div className="container__down-right">
          <div className="container__down-block">
            <span className="container__chart">
              <ChartSVG />
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default WordFrequencyTable;
