import './CreateCourse.css';

import { FC } from 'react';
import { useForm } from "react-hook-form";
import Button from '../../../common/components/button/Button';
import { useDispatch } from 'react-redux';
import { doCreateCourse } from '../../../store/coursesSlice/thunks';
import { Course } from '../../../common/models/Courses';

/**
 * Create button Data
 * 
 */
const createButtonData = {
    name: 'Create',
    type: 'submit'
}

const CreateCourse: FC = () => {
    const { register, reset, formState: { errors }, handleSubmit, } = useForm();
    const dispatch = useDispatch()

    const handleCreateCourse = (data: any) => {
        console.log(data);
        dispatch(doCreateCourse(data))
        reset()

    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title flex justify-center flex-col">
                        <span className='flex-wrap font-semibold text-black text-lg'>Create Course</span>
                    </h3>

                </div>

                <form onSubmit={handleSubmit(handleCreateCourse)}>
                    <div className="card-body">
                        <div className='row mb-7'>
                            <label className='col-lg-4 fw-normal text-muted'>Course Name</label>
                            <div className='col-lg-8'>
                                <input {...register("name", { required: true })} placeholder="Course name" />
                                {errors.name && " name is required"}
                            </div>
                        </div>
                        <div className='row mb-7'>
                            <label className='col-lg-4 fw-normal text-muted'>Description</label>
                            <div className='col-lg-8'>
                                <input {...register("description")} placeholder="Description" />
                            </div>
                        </div>
                        <div className='row mb-7'>
                            <label className='col-lg-4 fw-normal text-muted'>Is Course Active</label>
                            <div className='col-lg-8'>
                                <label className='mr-12'>
                                    <input {...register("isActive", { required: true })} type="radio" name='isActive' value={'Active'} className='mr-3' />
                                    Yes
                                </label>
                                <label className='mr-12'>
                                    <input {...register("isActive", { required: true })} type="radio" name='isActive' value={'InActive'} className='mr-3' />
                                    No
                                </label>
                                {errors.isActive && " isActive is required"}
                            </div>
                        </div>
                        <div className='row mb-7'>
                            <label className='col-lg-4 fw-normal text-muted'>Batch</label>
                            <div className='col-lg-8'>
                                <select {...register("batch", { required: true })} className='mr-12'>
                                    <option value="">Select...</option>
                                    <option value="Sophomore">Sophomore</option>
                                    <option value="Junior">Junior</option>
                                    <option value="Senior">Senior</option>
                                </select>
                                {errors.batch && " batch is required"}
                            </div>
                        </div>
                        <div className='row mb-7'>
                            <label className='col-lg-4 fw-normal text-muted'>Department</label>
                            <div className='col-lg-8'>
                                <input {...register("department", { required: true })} placeholder="Department" />
                                {errors.department && " department is required"}
                            </div>
                        </div>
                        <div className='row mb-7'>
                            <label className='col-lg-4 fw-normal text-muted'>Start Date</label>
                            <div className='col-lg-8'>
                                <input {...register("startDate")} type='date' />
                            </div>
                        </div>
                        <div className='row mb-7'>
                            <label className='col-lg-4 fw-normal text-muted'>End Date</label>
                            <div className='col-lg-8'>
                                <input {...register("endDate")} type='date' />
                            </div>
                        </div>


                        <div className='card-footer-custom d-flex justify-content-end py-6 px-9'>
                            <div className="card-toolbar">
                                <Button
                                    width='110px'
                                    height='40px'
                                    bg='#007d8d'
                                    color='#FFF'
                                    formValue={createButtonData}
                                    disable={false}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateCourse;