import './UsersList.css';

import React, {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";

const initialUsers = [
    {id: '1', name: 'test1', surname: 'test'},
    {id: '2', name: 'test2', surname: 'test2'},
    {id: '3', name: 'test3', surname: 'test3'}
];

export const UsersList = () => {

    let [searchName, setName] = useState("");

    let [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(initialUsers);
    });

    const filteredUsers = users.filter(value => value.name.includes(searchName));

    return (
        <Container>
            <Row>
                <Col sm={4} xs={12}>
                    <InputGroup className="mb-3" >
                        <FormControl
                            value={searchName}
                            placeholder="Username"
                            aria-describedby="basic-addon2"
                            onChange={event => setName(event.target.value)}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-primary" onClick={() => setName('')}>Clear</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover responsive>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>surname</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredUsers.map((user, key) => (
                            <tr key={key}>
                                <th>{user.id}</th>
                                <th>{user.name}</th>
                                <th>{user.surname}</th>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};