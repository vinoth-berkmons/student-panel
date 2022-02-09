import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AuthPage from '../containers/auth/AuthPage';



/**
 *All the public routes goes here
 Fall back view component to take care of the page before it renders
 *
 * @export
 * @returns
 */
export function PublicRoutes() {

    return (

        <Switch>
            <Route path='/auth' component={AuthPage} />
            <Redirect from='/' to='/auth'/>
        </Switch>

    )
}

