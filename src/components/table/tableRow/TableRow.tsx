import React, { useMemo, useState } from "react";
import { User } from "../../../data/data";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { selectMembers } from "../../../redux/user/memberSlice";
import { handleDeleteUser } from "../../../redux/user/userSlice";
import BlogPostRow from "../../blogPost/BlogPostRow";
import { UserRow, Svg, ActionSvg } from "./TableRow.styled";

interface IProps {
  result: User;
}

const TableRow: React.FC<IProps> = ({ result }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useAppDispatch();
  let blogs = useTypedSelector(selectMembers);

  const usersBlogPost = useMemo(() => {
    if (isExpanded && result?.id) {
      return blogs.filter((blog) => blog.userId === result.id);
    }

    return [];
  }, [isExpanded, result?.id, blogs]);

  const handleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const userDeleteHandler = async (user: User) => {
    const data = await dispatch(handleDeleteUser(user.id)).unwrap();
  };

  return (
    <>
      <UserRow>
        <td onClick={handleExpand}>
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

        <td>
          <ActionSvg onClick={() => userDeleteHandler(result)}>
            <svg
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </ActionSvg>
        </td>
      </UserRow>
      {isExpanded && <BlogPostRow userBlogs={usersBlogPost} />}
    </>
  );
};

export default TableRow;
