import Button from "../../components/ui/Button.jsx";
import InnerHeader from "../../components/layout/InnerHeader.jsx";
import Dialog from "../../components/ui/Dialog.jsx";
import {useState} from "react";
import AddUser from "../../components/forms/AddUser.jsx";
import THead from "../../components/table/THead.jsx";
import {useStaff} from "../../hooks/useStaff.js";
import {useDepartments} from "../../hooks/useDepartments.js";


const Users = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const headers = ["Names", "Email", "Department", "Role"]
    const {data: users, isLoading, isSuccess} = useStaff();
    const {data: departmentsData} = useDepartments();

    console.log(departmentsData)

    console.log(users)

    return (
        <>
            {dialogOpen &&
                <Dialog handleClose={() => setDialogOpen(false)}>
                    <Dialog.Title>Add Staff</Dialog.Title>
                    <AddUser departments={departmentsData.departments} />
                </Dialog>
            }
            <InnerHeader title={"Staff"} className="flex items-center justify-between">
                <Button onClick={() => setDialogOpen(true)}>Add a Staff</Button>
            </InnerHeader>

            <div className="relative overflow-x-auto">
                {
                    isLoading &&
                    <div className="flex w-full h-full items-center justify-center">
                        Loading ...
                    </div>
                }
                {isSuccess && users && (
                    <table>
                        <THead headers={headers} />
                        <tbody>
                        {users.staff.map((user, idx) => (
                            <tr className="capitalize" key={idx}>
                                <td className="font-medium">{`${user.firstName} ${user.lastName}`}</td>
                                <td className="lowercase">{user.email}</td>
                                <td>{user.departmentId.name}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}


export default Users;