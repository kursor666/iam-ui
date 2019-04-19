import React from 'react';

export const UsersSearchBox = (props) => {

    return (
        <div>
            <input type='text' onChange={event => props.change(event.target.value)}/>
        </div>);
};