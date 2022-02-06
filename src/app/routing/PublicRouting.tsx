import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import FallbackView from '../common/components/fallback-view/FallbackView';



/**
 *All the public routes goes here
 Fall back view component to take care of the page before it renders
 *
 * @export
 * @returns
 */
export function PublicRoutes() {

    const Dashboard = lazy(() => import('../containers/dashboard/Dashboard'))

    return (
        <Suspense fallback={<FallbackView />}>
            <Switch>
                <Route path='/dashboard' component={Dashboard} />
                <Redirect exact from='/' to='/dashboard' />
            </Switch>
        </Suspense>
    )
}

