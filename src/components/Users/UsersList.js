import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import { Fragment } from "react";

const UsersList = (props) => {
  return (
    <>
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
              <button onClick={props.onDeleteUser(user.id)}>Delete User</button>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
