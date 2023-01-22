import React from "react";
import Card from "../UI/Card";
import User from "./User";

import styles from './UserList.module.css'

const UserList = (props) => {

    return(
        <Card className={styles.users} >
            {props.users.map((user) => (
                <User key={user.id} username={user.username} age={user.age} />
            ))}
        </Card>
    )
}

export default UserList;