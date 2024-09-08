import {useState} from "react";
import InnerHeader from "../../components/layout/InnerHeader.jsx";
import Button from "../../components/ui/Button.jsx";
import Dialog from "../../components/ui/Dialog.jsx";
import AddDepartment from "../../components/forms/AddDepartment.jsx";
import THead from "../../components/table/THead.jsx";
import {useDepartments} from "../../hooks/useDepartments.js";
import EditDepartment from "../../components/forms/EditDepartment.jsx";

const Departments = () => {
    const headers = ["Name", "Email", "Location", "Services"]
    const [dialogOpen, setDialogOpen] = useState(false)
    const [oneDepDialog, setOneDepDialog] = useState(false);
    const [selectedDep, setSelectedDep] = useState(null);

    const {data, isLoading} = useDepartments();

    const handleRowClick = (row) => {
        setOneDepDialog(true);
        setSelectedDep(row)
    }

    const closeOneDepDialog = () => {
        setOneDepDialog(false); // Close the department dialog
    };


    return(
        <>
            {dialogOpen &&
                <Dialog handleClose={() => setDialogOpen(false)}>
                    <Dialog.Title>Add Department</Dialog.Title>
                    <AddDepartment/>
                </Dialog>
            }
            {oneDepDialog && selectedDep &&
                <Dialog handleClose={closeOneDepDialog}>
                    <EditDepartment department={selectedDep} handleClose={closeOneDepDialog} />
                </Dialog>
            }
            <InnerHeader title={"Departments"} className="flex items-center justify-between">
                <Button onClick={() => setDialogOpen(true)}>Add a Department</Button>
            </InnerHeader>
            <div className="relative overflow-x-auto">
                {
                    isLoading &&
                    <div className="flex w-full h-full items-center justify-center">
                        Loading ...
                    </div>
                }
                {
                    data &&
                    <table>
                        <THead headers={headers}/>
                        <tbody>
                        {
                            data.departments.map((row, idx) => (
                                <tr key={idx}>
                                    <td
                                        className="font-medium hover:underline cursor-pointer"
                                        onClick={() => handleRowClick(row)}
                                    >{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.location}</td>
                                    <td>
                                        <ul className="flex items-center gap-3">
                                            {
                                                row.services.map((service, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="px-4 py-2 bg-dc-blue/30 rounded-md"
                                                    >{service}</li>
                                                ))
                                            }
                                        </ul>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                }
            </div>
        </>
    )
}


export default Departments;