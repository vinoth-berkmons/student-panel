import './StudentList.css';

import React, { FC, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Loader from '../../../common/components/fallback-view/FallbackView';
import { doFetchCourses } from '../../../store/coursesSlice/thunks';
import { selectStudents, studentActions } from '../../../store/studentSlice/studentSlice';
import { doFetchStudentById } from '../../../store/studentSlice/thunks';
import TableList from '../table/TableList';


const TableHeader = ['Full Name', 'Email', 'Mobile Number', 'Status', 'Department'];

const perPageCount = 10;


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

    const students = useSelector(selectStudents.fetchedStudents)
    const loadingStudents = useSelector(selectStudents.loading)

    useEffect(() => {
        if (students && students?.length > 0) {
            return;
        }
        dispatch(studentActions.doFetchStudents());
    }, []);

    console.log('students', students);




    /**
     * Pagination Scopes starts
     */

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState([{}]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data .
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        if (!students || students.length <= 0) {
            return;
        }
        const endOffset = itemOffset + perPageCount;
        setCurrentItems(students.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(students.length / perPageCount));
    }, [itemOffset, perPageCount, students]);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        console.log(event);
        if (!students) {
            console.log(`User requested page number`);
            return;
        }
        const newOffset = (event.selected * perPageCount) % students.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    /**
       * Pagination Scopes Ends
    */


    /**
     * Navigate to student detail page by clicking on the view button
     * @param id 
     */
    const navigateToStudentDetail = (id: string) => {
        dispatch(doFetchStudentById(id))
        dispatch(doFetchCourses())
        console.log({ id })
        history.push(`/student?id=${id}`)
    }



    return (
        <> {
            loadingStudents ? <Loader /> :
                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="inline-block min-w-full">
                            <div className="overflow-x-auto">
                                <TableList
                                    header={TableHeader}
                                    currentItems={currentItems}
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
                                pageCount={pageCount}
                                activeClassName="pagination-active"
                                previousLabel="< Prev"
                                renderOnZeroPageCount={undefined}
                                prevRel='null'
                            />
                        </div>
                    </div>
                </div>
        }

        </>
    )
}

export default StudentList;