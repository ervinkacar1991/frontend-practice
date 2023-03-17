import React, { Fragment, useState } from "react";

export interface Result {
  [key: string]: string | number | boolean;
}

interface IProps {
  results: Result[];
}

const TableBody: React.FC<IProps> = ({ results }) => {
  const [isExpanded, setIsExpanded] = useState<number[]>([]);
  const handleExpand = (result: Result) => {
    const newIsExpanded = [...isExpanded];
    if (newIsExpanded.includes(result.id as number)) {
      const index = newIsExpanded.indexOf(result.id as number);
      newIsExpanded.splice(index, 1);
    } else {
      newIsExpanded.push(result.id as number);
    }
    setIsExpanded(newIsExpanded);
  };
  return (
    <tbody>
      {results.map((result: Result, index: number) => (
        <Fragment key={result.id as number}>
          <tr onClick={() => handleExpand(result)}>
            <td>{result.first_name}</td>
            <td>{result.last_name}</td>
            <td>{result.email}</td>
            <td>{result.gender}</td>
            <td>{result.ip_address}</td>
          </tr>
          {isExpanded.includes(result.id as number) && <tr>Expanded</tr>}
        </Fragment>
      ))}
    </tbody>
  );
};

export default TableBody;
