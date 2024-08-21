import Button from "../../components/ui/Button.jsx";
import InnerHeader from "../../components/layout/InnerHeader.jsx";
import Dialog from "../../components/ui/Dialog.jsx";
import AddDepartment from "../../components/forms/AddDepartment.jsx";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getAllDepartments} from "../../firebase/departments.js";
import THead from "../../components/table/THead.jsx";

const Departments = () => {
    const headers = ["Name", "Email", "Location", "Services"]
    const [dialogOpen, setDialogOpen] = useState(false)

    const {
        isLoading,
        data
    } = useQuery({
        queryFn: getAllDepartments,
        queryKey: ["allDepartments"]
    })

    console.log(data)
    return(
        <>
            {dialogOpen &&
                <Dialog handleClose={() => setDialogOpen(false)}>
                    <Dialog.Title>Add Department</Dialog.Title>
                    <AddDepartment />
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
                            data.map((row, idx) => (
                                <tr key={idx}>
                                    <td>{row.name}</td>
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