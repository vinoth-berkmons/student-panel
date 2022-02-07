import { FC } from 'react';


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

                    </tr>
                </thead>
                <tbody>
                    {
                        currentItems.map(
                            (d: any, i: number) => {
                                return <tr className="bg-white border-b table-body-tr" key={d.id} onClick={() => selectedStudent(d.id)}>
                                    <td className="py-2 pl-4 whitespace-nowrap text-sm ">{d.firstName} {d.lastName}</td>
                                    <td className="text-sm py-2 pl-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            {d.email}
                                        </div>
                                    </td>
                                    <td className="text-sm py-2 pl-4 whitespace-nowrap ">{d.mobile}</td>
                                    <td className="text-sm py-2 pl-4 whitespace-nowrap">
                                        {d.courses && d.courses.map((c: string) => {
                                            return <span className='mr-2'>{c}</span>
                                        })}

                                    </td>
                                    <td className="text-sm  py-2 pl-4 whitespace-nowrap">{d.dob}</td>
                                    <td className="text-sm  py-2 pl-4 whitespace-nowrap">{d.status}</td>

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