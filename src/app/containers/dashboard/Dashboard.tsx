import './Dashboard.css';

import { FC } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';

import StudentList from './student-list/StudentList';

const Dashboard: FC = () => {
    return (
        <>
            <div className="table-container">
                <div className="flex flex-wrap overflow-hidden">

                    <div className="w-full overflow-hidden">
                        <StudentList />
                        <div className="pagination-container">
                            <div className="pagination items-center">
                                <span className='active'>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span className='flex items-center'><MdOutlineNavigateNext /></span>
                                <span>View All</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;