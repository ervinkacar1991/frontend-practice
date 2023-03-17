import React, { useState } from "react";
import { User } from "../../../data/data";

interface IProps {
  result: User;
}

const TableRow: React.FC<IProps> = ({ result }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <>
      <tr onClick={handleExpand}>
        <td>{result.first_name}</td>
        <td>{result.last_name}</td>
        <td>{result.email}</td>
        <td>{result.gender}</td>
        <td>{result.ip_address}</td>
      </tr>
      {isExpanded && <tr>Expanded</tr>}
    </>
  );
};

export default TableRow;
