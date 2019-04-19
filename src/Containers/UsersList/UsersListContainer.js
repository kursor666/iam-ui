import React, {useState} from 'react';
import {UsersSearchBox} from "../../Components/Users/SearchBox/UsersSearchBox";
import {UsersList} from "../../Components/Users/List/UsersList";

export const UsersListContainer = () => {
    let [searchName, setName] = useState("");

    const setSearchName = (name) => setName(name);

    return <div className='pt-4'>
        <UsersSearchBox change={setSearchName}/>
        <UsersList name={searchName}/>
    </div>;
};