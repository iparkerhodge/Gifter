import React, { useState } from "react";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = useState([]);

    const getAllUsers = () => {
        return fetch("api/userprofile")
            .then((res) => res.json())
            .then(setUsers);
    };

    const getUser = (id) => {
        return fetch(`/api/userprofile/${id}`)
            .then((res) => res.json())
            .then(setUsers)
    };

    return (
        <UserContext.Provider value={{
            getAllUsers, getUser, users
        }}>
            {props.children}
        </UserContext.Provider>
    );
};