import React from 'react';
import {NavbarB} from "../NavbarB/NavbarB";
import {BrowserRouter, Route} from "react-router-dom";
import {UsersList} from "../Users/List/UsersList";

export const App = () => {
    return (
        <BrowserRouter>
            <NavbarB/>
            <div className='container mt-5'>
                <Route path='/' exact component={UsersList}/>
                <Route path='/users' exact component={UsersList}/>
            </div>
        </BrowserRouter>
    );
};

export default App;