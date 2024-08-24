import THead from "../../components/table/THead.jsx";
import InnerHeader from "../../components/layout/InnerHeader.jsx";

const headers = ['Name', 'Email', 'Date', 'Visit time', 'Doctor']
const appointments = [
    {
        Name: 'John Doe',
        Email: 'johndoe@example.com',
        Date: '2024-08-19',
        VisitTime: '10:00 AM',
        Doctor: 'Dr. Smith',
    },
    {
        Name: 'Jane Smith',
        Email: 'janesmith@example.com',
        Date: '2024-08-20',
        VisitTime: '11:30 AM',
        Doctor: 'Dr. Johnson',
    },
    {
        Name: 'Samuel Green',
        Email: 'samuelgreen@example.com',
        Date: '2024-08-21',
        VisitTime: '02:00 PM',
        Doctor: 'Dr. Brown',
    },
    {
        Name: 'Emily White',
        Email: 'emilywhite@example.com',
        Date: '2024-08-22',
        VisitTime: '09:00 AM',
        Doctor: 'Dr. Wilson',
    },
    {
        Name: 'Michael Blue',
        Email: 'michaelblue@example.com',
        Date: '2024-08-23',
        VisitTime: '01:00 PM',
        Doctor: 'Dr. Taylor',
    },
];


const Appointments = () => {
    return(
        <>
            <InnerHeader title={"Appointments"} />
            <div className="relative overflow-x-auto">
                <table>
                    <THead headers={headers} />
                    <tbody>
                    {
                        appointments.map((row, idx) => (
                            <tr className="border-b" key={idx}>
                                <td className="font-medium">{row.Name}</td>
                                <td>{row.Email}</td>
                                <td>{row.Date}</td>
                                <td>{row.VisitTime}</td>
                                <td>{row.Doctor}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Appointments;