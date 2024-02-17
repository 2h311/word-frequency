import React from "react";

const TableBody = ({ tableData }) => {
  return (
    <tbody>
      {tableData.map(function (data, index) {
        const { word, frequency } = data;
        return (
          <tr key={index}>
            <td>{word}</td>
            <td>{frequency}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
