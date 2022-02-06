import './StudentList.css';

import { FC } from 'react';

import { DUMMY_DATA } from '../../../common/helpers/Constants';
import useWindowDimensions from '../../../common/helpers/Utils';


const StudentList: FC = () => {
    const { height } = useWindowDimensions();
    const calculateData = (height - 227) / 40;

    const count = Math.floor(calculateData);
    const data = DUMMY_DATA.slice(0, count);

    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-center">
                                <thead className="border-b bg-gray-800 table-head">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium table-head-th pl-4 whitespace-nowrap">
                                            <span className="float-left">Full Name</span>
                                        </th>
                                        <th scope="col" className="text-sm font-medium table-head-th pl-4 whitespace-nowrap">
                                            <span className="float-left">Email</span>
                                        </th>
                                        <th scope="col" className="text-sm font-medium table-head-th pl-4  whitespace-nowrap">
                                            <div className="flex">
                                                <span className="float-left">Mobile Number</span>
                                            </div>

                                        </th>
                                        <th scope="col" className="text-sm font-medium table-head-th pl-4 whitespace-nowrap">Course</th>
                                        <th scope="col" className="text-sm font-medium table-head-th pl-4 whitespace-nowrap">DOB</th>
                                        <th scope="col" className="text-sm font-medium table-head-th pl-4 whitespace-nowrap">Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map(
                                            d => {
                                                return <tr className="bg-white border-b table-body-tr" key={d.id}>
                                                    <td className="py-2 pl-4 whitespace-nowrap text-sm ">{d.firstName} {d.lastName}</td>
                                                    <td className="text-sm py-2 pl-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            {d.email}
                                                        </div>
                                                    </td>
                                                    <td className="text-sm py-2 pl-4 whitespace-nowrap ">{d.mobile}</td>
                                                    <td className="text-sm py-2 pl-4 whitespace-nowrap">{d.courses.map(c => c)}</td>
                                                    <td className="text-sm  py-2 pl-4 whitespace-nowrap">{d.dob}</td>
                                                    <td className="text-sm  py-2 pl-4 whitespace-nowrap">{d.status}</td>

                                                </tr>
                                            }
                                        )
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentList;