import './Dashboard.css';

import { FC } from 'react';

import StudentList from './student-list/StudentList';

/**
 * Initial Page loads the Dashboard
 * List of students imported to the dashboard
 * Pagination 
 * @returns 
 */

const Dashboard: FC = () => {
    return (
        <>
            <div className="table-container">
                <div className="flex flex-wrap overflow-hidden">

                    <div className="w-full overflow-hidden">
                        <StudentList />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;