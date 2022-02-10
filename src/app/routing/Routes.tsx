import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { selectAuth } from '../store/auth/authSlice';
import { PrivateRoutes } from './PrivateRouting';

import { PublicRoutes } from './PublicRouting';


/**
 * Main Routes
 * Based on user validation routes will be redirected
 * @returns 
 */
const Routes: FC = () => {

    const isAuthenticated = useSelector(selectAuth.isAuthenticated)

    if (isAuthenticated) {
        return (
            <Switch>
                <PrivateRoutes />
            </Switch>
        )
    }

    return <PublicRoutes />;


}

export { Routes }