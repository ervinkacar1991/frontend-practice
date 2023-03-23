import React, { useMemo } from "react";
import TableHead from "./tableHead/tableHead";
import TableBody from "./tableBody/tableBody";
import { User } from "../../data/data";
import { TableWrapper } from "./Table.styled";

interface IProps {
  data: User[];
  columns: any;
}

const Table = ({ data, columns }: IProps) => {
  return useMemo(
    () => (
      // <TableWrapper>
      <table>
        <TableHead results={[]} columns={columns} />
        <TableBody results={data} />
      </table>
      // </TableWrapper>
    ),
    [data, columns],
  );
};

export default React.memo(Table);
