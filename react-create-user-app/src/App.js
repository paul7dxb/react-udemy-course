import React, { useState } from "react";
import NewUser from "./Components/User/NewUser";
import UserList from "./Components/User/UserList";

const DUMMY_USERS = [
  {
    id: "u1",
    username: "james",
    age: "32",
  },
  {
    id: "u2",
    username: "jesse",
    age: "34",
  },
  {
    id: "u3",
    username: "meowth",
    age: "21",
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
    console.log(users);
  };

  return (
    <div>
      <NewUser onAddUser={addUserHandler}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
