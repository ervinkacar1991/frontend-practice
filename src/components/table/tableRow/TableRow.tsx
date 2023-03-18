import React, { useState } from "react";
import { User } from "../../../data/data";
import BlogPost from "../../blogPost/BlogPostRow";
import { UserRow, Svg } from "./TableRow.styled";

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
      <UserRow onClick={handleExpand}>
        <td>
          {!isExpanded ? (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </Svg>
          ) : (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </Svg>
          )}
        </td>
        <td>{result.first_name}</td>
        <td>{result.last_name}</td>
        <td>{result.email}</td>
        <td>{result.gender}</td>
        <td>{result.ip_address}</td>
      </UserRow>
      {isExpanded && <BlogPost />}
    </>
  );
};

export default TableRow;
