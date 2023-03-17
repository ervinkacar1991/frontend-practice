import React from "react";
import { User } from "../../../data/data";

interface Columns {
  [key: string]: string;
}

interface IProps {
  results: User[];
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
