import './StudentDetail.css';

import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Select, { MultiValue } from 'react-select';

import Button from '../../../common/components/button/Button';
import { Course, CourseOption, StudentCourse } from '../../../common/models/Courses';
import { selectCourses } from '../../../store/coursesSlice/coursesSlice';
import { selectStudentDetail } from '../../../store/studentSlice/studentDetailSlice';
import { doEnrollOrRemoveCourse } from '../../../store/studentSlice/thunks';
import Loader from '../../../common/components/fallback-view/FallbackView';

// import Button from '../../../common/components/button/Button';


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


const StudentDetail: FC = () => {
    const history = useHistory();

    const dispatch = useDispatch()

    /**
    * Multi select option scope
    */
    const [selectedOption, setSelectedOption] = useState<any>([]);
    const [coursesOption, setCoursesOption] = useState<any>([]);




    const studentDetail = useSelector(selectStudentDetail.fetchedStudent)
    console.log('studentDetail', studentDetail);
    const courses = useSelector(selectCourses.fetchedCourses)
    const courseLoading = useSelector(selectCourses.loading);
    console.log('courses', courses);

    if (courseLoading || !studentDetail?.courses) {
        return <Loader />
    }

    const selectedCourses = studentDetail?.courses.map(c => ({ value: c.id, label: c.name }))


    // if (studentDetail?.courses && studentDetail.courses.length > 0) {
    //     const mappedCourses = mapCourses(studentDetail?.courses)
    //     console.log('mappedCourses', mappedCourses);
    //     setSelectedOption(mappedCourses)
    // }
    // if (courses && courses?.length > 0) {
    //     const mappedCourses = mapCourses(courses)
    //     console.log('mappedCourses', mappedCourses);
    //     setCoursesOption(mappedCourses)

    // }




    /**
     * Save course detail for the student
     */
    const courseSelected = (courses: MultiValue<CourseOption>) => {

        dispatch(doEnrollOrRemoveCourse(courses.map(c => c)))
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
                                    {courseLoading ? <div>Loading...</div> : <Select
                                        defaultValue={selectedCourses}
                                        isMulti={true}
                                        onChange={courseSelected}
                                        options={courses}
                                    />}
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            }

        </>
    )
}

function mapCourses(courses: Course[] | StudentCourse[]) {
    let mappedCourses: CourseOption[] = [];
    courses.map(c => {
        mappedCourses.push({
            value: c.id,
            label: c.name
        })
    })
    return mappedCourses;
}


export default StudentDetail;