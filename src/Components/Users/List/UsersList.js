import './UsersList.css';

import React, {useEffect, useState} from 'react';
import {Button, Col, Container, FormControl, InputGroup, Pagination, Row, Table} from "react-bootstrap";

const itemsOnPage = 7;
const initialUsers = [
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '1', name: 'test1', surname: 'test2'},
    {id: '3', name: 'test3', surname: 'test3'}
];

const PaginationUsers = (props) => {
    let items = [];
    for (let number = 1; number <= props.total; number++) {
        items.push(
            <Pagination.Item key={number} active={number === props.active} onClick={() => props.change(number)}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div>
            <Pagination>{items}</Pagination>
            <br/>
        </div>
    );
};

export const UsersList = () => {
    let [searchName, setName] = useState("");
    let [users, setUsers] = useState([]);
    let [page, changeActive] = useState(1);

    const filterUsers = (value) =>{
        setName(value);
        changeActive(1);
    };

    useEffect(() => {
        setUsers(initialUsers);
    });

    const filteredUsers = users
        .filter(value => value.name.includes(searchName));

    const slicedUsers = filteredUsers
        .slice((page - 1) * itemsOnPage, page * itemsOnPage);

    return (
        <Container>
            <Row>
                <Col sm={4} xs={12}>
                    <InputGroup className="mb-3">
                        <FormControl
                            value={searchName}
                            placeholder="Username"
                            aria-describedby="basic-addon2"
                            onChange={event => filterUsers(event.target.value)}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={() => filterUsers('')}>Clear</Button>
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
                        {slicedUsers.map((user, key) => (
                            <tr key={key}>
                                <th>{user.id}</th>
                                <th>{user.name}</th>
                                <th>{user.surname}</th>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    <PaginationUsers active={page} change={changeActive} total={filteredUsers.length/itemsOnPage+1}/>
                </Col>
            </Row>
        </Container>
    );
};