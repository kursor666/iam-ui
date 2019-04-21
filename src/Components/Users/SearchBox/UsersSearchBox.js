import React from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";

export const UsersSearchBox = (props) => {

    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Username"
                aria-describedby="basic-addon2"
                onChange={event => props.change(event.target.value)}/>
            <InputGroup.Append>
                <Button variant="outline-primary" onClick>Clear</Button>
            </InputGroup.Append>
        </InputGroup>
        );
};