import React, { useMemo } from "react";
import TableHead from "./tableHead/tableHead";
import TableBody from "./tableBody/tableBody";
import { Result } from "./tableBody/tableBody";

interface IProps {
  data: Result[];
  columns: any;
}

const Table = ({ data, columns }: IProps) => {
  console.log(data);
  return useMemo(
    () => (
      <table>
        <TableHead results={[]} columns={columns} />
        <TableBody results={data} />
      </table>
    ),
    [data, columns],
  );
};

export default React.memo(Table);
