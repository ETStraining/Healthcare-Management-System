import THead from "../../components/table/THead.jsx";
import InnerHeader from "../../components/layout/InnerHeader.jsx";
import {useAppointments} from "../../hooks/useAppointments.js";
import Pagination from "../../components/ui/Pagination.jsx";
import {useState} from "react";
import Spinner from "../../components/Spinner.jsx";
import Banner from "../../components/Banner.jsx";
import Approve from "../../components/actions/Approve.jsx";
import Reject from "../../components/actions/Reject.jsx";

const headers = ['Patient Name', 'Email', 'Date', 'Visit time', 'Doctor', 'Status', 'Action']




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

    const styleStatus = (status) => {
        switch (status) {
            case 'PENDING':
                return 'bg-yellow-200';
            case 'ACCEPTED':
                return 'bg-green-200';
            case 'REJECTED':
                return 'bg-red-200';
            default:
                return 'bg-gray-200';
        }
    }

    return(
        <>
            <InnerHeader title={"Appointments"} />
            <div className="relative min-h-40 overflow-x-auto">
                {
                    isLoading ? (
                    <Spinner />
                    ) : data && data.appointments.length > 0 ? (
                    <>
                        <table>
                            <THead headers={headers}/>
                            <tbody>
                            {
                                data.appointments.map((row, idx) => (
                                    <tr className="border-b" key={idx}>
                                        <td className="font-medium hover:underline cursor-pointer">{row.patientName}</td>
                                        <td>{row.email}</td>
                                        <td>{formatDate(row.visitDate)}</td>
                                        <td>{row.time}</td>
                                        <td>{row.doctor.firstName + " " + row.doctor.lastName}</td>
                                        <td>
                                            <span className={`px-4 py-2 rounded-lg font-bold ${styleStatus(row.status)}`}>{row.status}</span>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-4">
                                                <Approve appointmentId={row._id} />
                                                <Reject appointmentId={row._id} />
                                            </div>
                                        </td>
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
                    ):(
                        <Banner message={"No Appointments found!"} />
                    )
                }
            </div>
        </>
    )
}


export default Appointments;