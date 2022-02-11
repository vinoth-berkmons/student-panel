import './StudentList.css';

import React, { FC, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Loader from '../../../common/components/fallback-view/FallbackView';
import { doFetchCourses } from '../../../store/coursesSlice/thunks';
import { selectStudents, studentActions } from '../../../store/studentSlice/studentSlice';
import { doFetchNextBatch, doFetchStudentById } from '../../../store/studentSlice/thunks';
import TableList from '../table/TableList';
import { selectAuth } from '../../../store/auth/authSlice';


const TableHeader = ['Full Name', 'Email', 'Mobile Number', 'Status', 'Department'];



/**
 * List of students listed
 * Mobile friendly this page
 * handled Pagination
 * react-paginate Package used
 * by clicking on the view button redirect to detail page
 * Student list passed on to table to display the list
 * @returns 
 */

const StudentList: FC = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    /** 
     * Fetch List of students
    */
    const isAuthenticated = useSelector(selectAuth.isAuthenticated);
    const students = useSelector(selectStudents.fetchedStudents);
    const totalStudentsCount = useSelector(selectStudents.totalStudentsCount);
    const loadingStudents = useSelector(selectStudents.loading);

    /**
     * Set loader to load until get the data from store
     */
    const loader = !students || loadingStudents;


    useEffect(() => {
        if (students && students?.length > 0) {
            return;
        }
        if (isAuthenticated) {
            dispatch(studentActions.doFetchStudents());
        }
    }, [])


    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        dispatch(doFetchNextBatch(event.isNext))
    };


    /**
     * Navigate to student detail page by clicking on the view button
     * @param id 
     */
    const navigateToStudentDetail = (id: string) => {
        dispatch(doFetchStudentById(id))
        dispatch(doFetchCourses())
        history.push(`/student?id=${id}`)
    }



    return (
        <> {
            loader ? <Loader /> :
                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="inline-block min-w-full">
                            <div className="overflow-x-auto">
                                <TableList
                                    header={TableHeader}
                                    currentItems={students}
                                    selectedStudent={(id: string) => navigateToStudentDetail(id)} />
                            </div>
                        </div>
                    </div>
                    <div className="pagination-container">
                        <div className="pagination items-center">
                            <ReactPaginate
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                nextLabel="Next >"
                                onClick={(e) => handlePageClick(e)}
                                pageRangeDisplayed={3}
                                pageCount={totalStudentsCount}
                                activeClassName="pagination-active"
                                previousLabel="< Prev"
                                renderOnZeroPageCount={undefined}
                            />
                        </div>
                    </div>
                </div>
        }

        </>
    )
}

export default StudentList;