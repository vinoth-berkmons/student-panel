import { FC } from 'react';

import Button from '../../../common/components/button/Button';

/**
 * View button data
 *  To view the details of the student
 */
const viewButtonData = {
    name: 'View',
    type: 'button'
}

/**
 * Table is used to display list of students
 * Called from StudentList component
 * @param param0 
 * @returns 
 */

const TableList: FC<any> = ({ header, currentItems, selectedStudent }) => {

    console.log({ currentItems })

    return (
        <>
            <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800 table-head">
                    <tr>
                        {
                            header.map((h: string) => {
                                return (
                                    <th key={h} scope="col" className="text-sm font-medium table-head-th pl-4 whitespace-nowrap">
                                        <span className="float-left">{h}</span>
                                    </th>
                                )
                            })
                        }
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentItems.map(
                            (d: any, i: number) => {
                                return <tr className="bg-white border-b table-body-tr h-16" key={d.id}>
                                    <td className="py-2 pl-4 whitespace-nowrap text-sm ">{d.firstName} {d.lastName}</td>
                                    <td className="text-sm py-2 pl-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            {d.email}
                                        </div>
                                    </td>
                                    <td className="text-sm py-2 pl-4 whitespace-nowrap ">{d.mobile}</td>
                                    <td className="text-sm  py-2 pl-4 whitespace-nowrap">{d.status}</td>
                                    <td className="text-sm py-2 pl-4 whitespace-nowrap ">{d.department}</td>
                                    <td className="text-sm  py-2 pl-4 whitespace-nowrap">
                                        <Button
                                            clickEvent={() => selectedStudent(d.id)}
                                            width='50px' height='25px'
                                            formValue={viewButtonData}
                                            style={{ fontSize: "12px", display: "flex", alignItems: "center" }}
                                        />
                                    </td>

                                </tr>
                            }
                        )
                    }


                </tbody>
            </table>
        </>
    )
}

export default TableList;