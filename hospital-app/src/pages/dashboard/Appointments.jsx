import THead from "../../components/table/THead.jsx";
import InnerHeader from "../../components/layout/InnerHeader.jsx";
import {useAppointments} from "../../hooks/useAppointments.js";
import Pagination from "../../components/ui/Pagination.jsx";
import {useState} from "react";

const headers = ['Patient Name', 'Email', 'Date', 'Visit time', 'Doctor']




const Appointments = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [filters, setFilters] = useState({})

    const {data, isLoading} = useAppointments(filters, page, limit);

    const formatDate = (inDate) => {
        const date = new Date(inDate);
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');

        return  `${year}-${month}-${day}`;
    }

    return(
        <>
            <InnerHeader title={"Appointments"} />
            <div className="relative overflow-x-auto">
                {
                    isLoading &&
                    <div className="flex w-full h-full items-center justify-center">
                        Loading ...
                    </div>
                }
                {
                    data &&
                    <>
                        <table>
                            <THead headers={headers}/>
                            <tbody>
                            {
                                data.appointments.map((row, idx) => (
                                    <tr className="border-b" key={idx}>
                                        <td className="font-medium">{row.patientName}</td>
                                        <td>{row.email}</td>
                                        <td>{formatDate(row.visitDate)}</td>
                                        <td>{row.time}</td>
                                        <td>{row.doctor.firstName + " " + row.doctor.lastName}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                        <Pagination
                            page={data.page}
                            totalPages={data.totalPages}
                            onPageChange={setPage}
                        />
                    </>
                }
            </div>
        </>
    )
}


export default Appointments;