import React, { useEffect, useMemo } from "react";
import Table from "../../components/table/Table";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchMembers, selectMembers } from "../../redux/user/memberSlice";
import { selectUsers, fetchUsers } from "../../redux/user/userSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  let users = useTypedSelector(selectUsers);
  const blogs = useTypedSelector(selectMembers);

  users = users.slice(0, 10);

  const columns = [
    { id: "expand", name: "Expand" },
    { id: "first_name", name: "First Name" },
    { id: "last_name", name: "Last Name" },
    { id: "email", name: "Email" },
    { id: "gender", name: "Gender" },
    { id: "ip_address", name: "IP Address" },
    { id: "action", name: "Action" },
  ];

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

  return (
    <>
      <Table data={users} columns={columns} />
    </>
  );
};

export default HomePage;
