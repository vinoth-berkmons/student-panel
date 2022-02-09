import './StudentDetail.css';

import React, { FC, useEffect, useState } from 'react';
// import Button from '../../../common/components/button/Button';

import Select from 'react-select';
import { CourseOption } from '../../../common/models/Courses';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '../../../common/components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { doFetchStudentById } from '../../../store/studentSlice/thunk';
import { selectStudentDetail } from '../../../store/studentSlice/studentDetailSlice';


/**
 * Save button Data
 * Save button to save the selected course of the student
 */
const saveButtonData = {
    name: 'Save',
    type: 'button'
}

/**
 * back button data
 * back button to redirect to dashboard: student list page
 */

const backButtonData = {
    name: 'Back',
    type: 'button'
}

// interface CourseOption {
//     newValue: {};
//     actionMeta: {}
// }

// const courses: CourseOption[] = [
//     {
//         "value": "maths",
//         "label": "Maths"
//     },
//     {
//         "value": "computer",
//         "label": "Computer"
//     },
//     {
//         "value": "physics",
//         "label": "Physics"
//     }
// ]

/**
 * URL Query to get the id of the student
 * @returns 
 */
function useURLQuery() {


    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}


const StudentDetail: FC = () => {
    const history = useHistory();
    let query = useURLQuery();

    const dispatch = useDispatch()
    const studentDetail = useSelector(selectStudentDetail.fetchedStudent)
    console.log('studentDetail', studentDetail);

    /**
     * Multi select option scope
     */
    const [selectedOption, setSelectedOption] = useState<any>([]);

    useEffect(() => {
        dispatch(doFetchStudentById(query.get('id') || ''))
    }, [])


    /**
     * Save course detail for the student
     */
    const saveCourseClicked = () => {
        console.log('saveCourseClicked')
    }

    /**
     * Navigate to dashboard: student list page
     */
    const navigateToDashboard = () => {
        history.push(`/dashboard`);
    }


    return (
        <>
            {
                studentDetail && <>
                    <div className='mb-2'>
                        <Button
                            width='75px'
                            height='35px'
                            bg='#7c7c7e'
                            color='#FFF'
                            formValue={backButtonData}
                            disable={false}
                            clickEvent={() => navigateToDashboard()} />
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title flex justify-center flex-col">
                                <span className='flex-wrap font-semibold text-black text-lg'>Student Detail</span>
                                {/* <span className='text-gray-600 text-sm'>Sophomores</span> */}
                            </h3>

                        </div>

                        <div className="card-body">
                            <div className='row mb-7'>
                                <label className='col-lg-4 fw-normal text-muted'>First Name</label>
                                <div className='col-lg-8'>
                                    <span className='fw-bolder fs-6 text-dark'>{studentDetail.firstName} {studentDetail.lastName}</span>
                                </div>
                            </div>
                            <div className='row mb-7'>
                                <label className='col-lg-4 fw-normal text-muted'>Email</label>
                                <div className='col-lg-8'>
                                    <span className='fw-bolder fs-6 text-dark'>{studentDetail.email}</span>
                                </div>
                            </div>
                            <div className='row mb-7'>
                                <label className='col-lg-4 fw-normal text-muted'>Mobile Number</label>
                                <div className='col-lg-8'>
                                    <span className='fw-bolder fs-6 text-dark'>{studentDetail.mobile}</span>
                                </div>
                            </div>
                            <div className='row mb-7'>
                                <label className='col-lg-4 fw-normal text-muted'>DOB</label>
                                <div className='col-lg-8'>
                                    <span className='fw-bolder fs-6 text-dark'>{studentDetail.dob}</span>
                                </div>
                            </div>
                            <div className='row mb-7'>
                                <label className='col-lg-4 fw-normal text-muted'>Status</label>
                                <div className='col-lg-8'>
                                    <span className='fw-bolder fs-6 text-dark'>{studentDetail.status}</span>
                                </div>
                            </div>
                            <div className='row mb-7'>
                                <label className='col-lg-4 fw-normal text-muted'>Department</label>
                                <div className='col-lg-8'>
                                    <span className='fw-bolder fs-6 text-dark'>{studentDetail.department}</span>
                                </div>
                            </div>
                            <div className='row mb-7'>
                                <label className='col-lg-4 fw-normal text-muted'>Courses</label>
                                <div className='col-lg-8'>
                                    <Select
                                        defaultValue={selectedOption}
                                        isMulti={true}
                                        onChange={setSelectedOption}
                                        options={studentDetail.courses}
                                    />
                                </div>
                            </div>


                            <div className='card-footer-custom d-flex justify-content-end py-6 px-9'>
                                <div className="card-toolbar">
                                    <Button
                                        width='110px'
                                        height='40px'
                                        bg='#007d8d'
                                        color='#FFF'
                                        formValue={saveButtonData}
                                        disable={false}
                                        clickEvent={() => saveCourseClicked()} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

        </>
    )
}


export default StudentDetail;