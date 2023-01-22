import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import "./NewUser.css";
import Button from "../UI/Button";

const NewUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(age);

    //Username Validation
    if (username.trim().length === 0) {
      setError({
        title: "Empty Input Field",
        message: "Ensure all fields are completed",
      });
      return;
    }

    //Age validation
    if (age.trim().length === 0 || +age < 0) {
      setError({
        title: "Inappropriate Age",
        message: "You have not been born yet!",
      });
      return;
    }
    props.onAddUser({
      id: Math.random().toString(),
      username: username,
      age: age,
    });

    setUsername("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label>Username</label>
          <input
            value={username}
            type="text"
            placeholder="username"
            onChange={usernameChangeHandler}
          />
          <label>Age (in years)</label>
          <input
            value={age}
            type="text"
            placeholder="Age"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default NewUser;
