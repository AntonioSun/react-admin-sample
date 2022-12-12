import React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { UserList, LoginCredentialList } from "./posts";
import { stringify } from "query-string";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const apiUrl = "https://jsonplaceholder.typicode.com";
const httpClient = fetchUtils.fetchJson;

const myDataProvider = {
  ...restProvider,
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter)
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    console.log(url);

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      //data: json.map(record => ({"id": record.userID, ...record})),
      total: 5 //temporary hardcoded to avoid headers error.
      //total: parseInt(headers.get('content-range').split('/').pop(), 10),
    }));
  }
};

class AdminPanel extends React.Component {
  render() {
    return (
      <div>
        <Admin dataProvider={myDataProvider}>
          <Resource name="users" list={UserList} />
          <Resource name="loginCredential" list={LoginCredentialList} />
        </Admin>
      </div>
    );
  }
}

export default AdminPanel;

//                  <Resource name="posts" list={UserList} edit={PostEdit} create={PostCreate}/>
