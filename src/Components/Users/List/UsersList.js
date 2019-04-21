import './UsersList.css';

import React, {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";

export const UsersList = (props) => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        let originalUsers = [
            {id: '1', name: 'test1', surname: 'test'},
            {id: '2', name: 'test2', surname: 'test2'},
            {id: '3', name: 'test3', surname: 'test3'}
        ];
        if (!props.name) setUsers(originalUsers);
        else setUsers(users.filter(value => value.name.includes(props.name)))
    });

    return (
        <Table striped bordered hover responsive>
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>surname</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, key) => (
                <tr key={key}>
                    <th>{user.id}</th>
                    <th>{user.name}</th>
                    <th>{user.surname}</th>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};