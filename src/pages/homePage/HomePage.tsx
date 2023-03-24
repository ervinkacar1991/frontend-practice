import React, { useEffect, useState } from "react";
import PaginationButtons from "../../components/button/PaginationButtons";
import Table from "../../components/table/Table";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchMembers, selectMembers } from "../../redux/user/memberSlice";
import { selectUsers, fetchUsers } from "../../redux/user/userSlice";
import { HomePageWrapper } from "./HomePage.styled";

const HomePage = () => {
  const dispatch = useAppDispatch();
  let users = useTypedSelector(selectUsers);
  const blogs = useTypedSelector(selectMembers);

  const columns = [
    { id: "expand", name: "Expand" },
    { id: "first_name", name: "First Name" },
    { id: "last_name", name: "Last Name" },
    { id: "email", name: "Email" },
    { id: "gender", name: "Gender" },
    { id: "ip_address", name: "IP Address" },
    { id: "del", name: "Delete" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    if (!users?.length) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users?.length]);

  useEffect(() => {
    if (!blogs?.length) {
      dispatch(fetchMembers());
    }
  }, [dispatch, blogs?.length]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  return (
    <HomePageWrapper>
      <Table
        data={users.slice(indexOfFirstItem, indexOfLastItem)}
        columns={columns}
      />
      <div>
        <PaginationButtons
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </PaginationButtons>
        <PaginationButtons
          disabled={indexOfFirstItem >= users.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </PaginationButtons>
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;
