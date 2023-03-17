import React, { Fragment, useState } from "react";
import { User } from "../../../data/data";
import TableRow from "../tableRow/TableRow";

interface IProps {
  results: User[];
}

const TableBody: React.FC<IProps> = ({ results }) => {
  // const [isExpanded, setIsExpanded] = useState<number[]>([]);
  // const handleExpand = (result: Result) => {
  //   const newIsExpanded = [...isExpanded];
  //   if (newIsExpanded.includes(result.id as number)) {
  //     const index = newIsExpanded.indexOf(result.id as number);
  //     newIsExpanded.splice(index, 1);
  //   } else {
  //     newIsExpanded.push(result.id as number);
  //   }
  //   setIsExpanded(newIsExpanded);
  // };
  return (
    <tbody>
      {results.map((result: User, index: number) => (
        <Fragment key={result.id as number}>
          <TableRow result={result} />
          {/* {isExpanded.includes(result.id as number) && <tr>Expanded</tr>} */}
        </Fragment>
      ))}
    </tbody>
  );
};

export default TableBody;
