import React from 'react';
import {NavbarB} from "../NavbarB/NavbarB";
import {BrowserRouter, Route} from "react-router-dom";
import {UsersListContainer} from "../../Containers/UsersList/UsersListContainer";

export const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavbarB/>
                <div className='container'>
                    <Route path='/' exact component={UsersListContainer}/>
                    <Route path='/users' exact component={UsersListContainer}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;