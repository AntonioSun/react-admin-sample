import React from "react";
import {
  List,
  Datagrid,
  DateField,
  TextField,
  EditButton,
  UrlField
} from "react-admin";

export const UserList = props => (
  <List {...props}>
    <Datagrid>
      <TextField label="UserID" source="userID" />
      <TextField label="Username" source="username" />
      <TextField label="First Name" source="firstName" />
      <TextField label="Middle Name" source="middleName" />
      <TextField label="Last Name" source="lastName" />
      <UrlField title="DP" source="profileImageURL" />
      <DateField title="Joining Date" source="joiningTime" />
    </Datagrid>
  </List>
);

export const LoginCredentialList = props => (
  <List {...props}>
    <Datagrid>
      {console.log(props)}
      <TextField source="loginCredentialID" />
      <TextField source="username" />
      <TextField source="passwordHash" />
      <TextField source="sessionID" />
      <EditButton basePath="/posts" />
    </Datagrid>
  </List>
);
