import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import "./NewUser.css";
import Button from "../UI/Button";
import Wrapper from "../Helper/wrapper";

const NewUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    //Username Validation
    if (enteredUsername.trim().length === 0) {
      setError({
        title: "Empty Input Field",
        message: "Ensure all fields are completed",
      });
      return;
    }

    //Age validation
    if (enteredAge.trim().length === 0 || +enteredAge < 0) {
      setError({
        title: "Inappropriate Age",
        message: "You have not been born yet!",
      });
      return;
    }
    props.onAddUser({
      id: Math.random().toString(),
      username: enteredUsername,
      age: enteredAge,
    });

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label>Username</label>
          <input ref={nameInputRef} type="text" placeholder="username" />
          <label>Age (in years)</label>
          <input ref={ageInputRef} type="text" placeholder="Age" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default NewUser;
