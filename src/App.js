import React, { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
// import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  const deleteUser = (id) => {
    return () => {
      const updated = userList.filter((item) => item.id !== id);
      setUserList(updated);
    };
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} key="add-user" />
      <UsersList users={userList} key="use-list" onDeleteUser={deleteUser} />
    </>
  );
}

export default App;
