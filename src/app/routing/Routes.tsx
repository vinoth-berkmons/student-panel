import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRouting';

import { PublicRoutes } from './PublicRouting';


/**
 * Main Routes
 * Based on user validation routes will be redirected
 * @returns 
 */
const Routes: FC = () => {

    return (
        <Switch>
            {/* <PublicRoutes /> */}
            <PrivateRoutes/>
        </Switch>
    )

}

export { Routes }