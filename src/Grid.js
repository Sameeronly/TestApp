import React from "react";

import { useState } from "react";
import "./App.css";

function GridForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }



    return(
        <form>
        <label>Username:</label>
        <input onClick = {handleUsernameChange} type = "text" value = {username}/><br></br>
        <label>Password:</label>
        <input onClick = {handlePasswordChange} type = "text" value = {password}/><br></br>
        <button>Submit</button>
        </form>
    )
}


export default GridForm;