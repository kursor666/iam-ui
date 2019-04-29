import './UsersList.css';

import React, {useEffect, useState} from 'react';
import {Button, Col, Container, FormControl, InputGroup, Pagination, Row, Table} from "react-bootstrap";

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

const UsersTable = ({users, filter, page, changeActive, total}) => {
    const filteredUsers = users
        .filter(value => value.first_name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <div>
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
                        <th>{user.first_name}</th>
                        <th>{user.last_name}</th>
                    </tr>
                ))}
                </tbody>
            </Table>
            <PaginationUsers active={page} change={changeActive} total={total}/>
        </div>
    )
};

export const UsersList = () => {
    let [searchName, setName] = useState("");
    let [users, setUsers] = useState(null);
    let [page, setPage] = useState(1);

    const filterUsers = (value) => {
        setName(value);
    };

    useEffect(() => {
        setUsers(null);
        fetch(`https://reqres.in/api/users?page=${page}`)
            .then(res => res.json())
            .then(json => setUsers(json));
    }, [page]);



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
                    {
                        (!users) ? <div>Loading</div>:
                        <UsersTable users={users.data} filter={searchName} changeActive={setPage} page={page}
                                total={users.total_pages}/>
                    }
                </Col>
            </Row>
        </Container>
    );
};
