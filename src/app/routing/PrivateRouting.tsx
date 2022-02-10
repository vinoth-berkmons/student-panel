import { FC, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MasterLayout } from "../../layout/MasterLayout";
import Loader from "../common/components/fallback-view/FallbackView";
import StudentDetail from "../containers/dashboard/student-detail/StudentDetail";

/**
 * Private routes will be called on success of verified pin
 * @returns 
 */
const PrivateRoutes: FC = () => {

    /**
     * load on demand
     */
    const Dashboard = lazy(() => import('../containers/dashboard/Dashboard'))
    const CreateCourse = lazy(() => import('../containers/courses/createCourse/CreateCourse'))

    /**
     * Private routes to set the url
     */
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <MasterLayout>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/student' component={StudentDetail} />
                    <Route path='/createCourse' component={CreateCourse} />
                    <Redirect from='/' to='/dashboard' />
                </MasterLayout>
            </Switch>
        </Suspense>
    )
}

export { PrivateRoutes }