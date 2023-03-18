import React, { useEffect } from "react";
import styled from "styled-components";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers, selectUsers } from "../redux/user/userSlice";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import Table from "./table/Table";

const StyledWrapper = styled.div`
  padding: 24px;
`;

export const App = () => {
  const dispatch = useAppDispatch();
  let users = useTypedSelector(selectUsers);
  users = users.slice(0, 10); // TODO: Remove this when you have found a better way to not show all users at once
  const columns = [
    { id: "show_blog", name: "Expand" },
    { id: "first_name", name: "First Name" },
    { id: "last_name", name: "Last Name" },
    { id: "email", name: "Email" },
    { id: "gender", name: "Gender" },
    { id: "ip_address", name: "IP Address" },
    ,
  ];

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <StyledWrapper>
      <GlobalStyles />

      <h1>NaviPartner Tech Test</h1>

      <h2>Create your app here!</h2>
      <p>Let's get you started:</p>

      <Table data={users} columns={columns} />
    </StyledWrapper>
  );
};
