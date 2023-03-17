import React from "react";
import { Result } from "../tableBody/tableBody";

interface Columns {
  [key: string]: string;
}

interface IProps {
  results: Result[];
  columns: Columns[];
}

const TableHead: React.FC<IProps> = ({ results, columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column: any) => (
          <th key={column.id}>{column.name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
