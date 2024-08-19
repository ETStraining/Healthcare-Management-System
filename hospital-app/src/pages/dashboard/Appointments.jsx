
const Appointments = () => {
    return(
        <div>
            <h1 className="text-dark/80 font-bold text-4xl mb-12 pb-4 border-b border-dark-gray/50">Appointments</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full table-auto text-sm text-left text-dark">
                    <thead className="uppercase">
                    <tr className="border-b">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Visit time</th>
                        <th>Doctor</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <BTr />
                        <BTr />
                        <BTr />
                        <BTr />
                        <BTr />
                        <BTr />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const BTr = () => {
    return(
        <tr className="border-b">
            <th className="px-6 py-4 font-medium">
                Ingabire Marie Sandrine
            </th>
            <td className="px-6 py-4">
                email.sd1@gamil.com
            </td>
            <td className="px-6 py-4">
                23rdMay2023
            </td>
            <td className="px-6 py-4">
                03:20PM
            </td>
            <td className="px-6 py-4">
                ETS Sando
            </td>
        </tr>
    )
}

export default Appointments;