import Button from "../../components/ui/Button.jsx";
import InnerHeader from "../../components/layout/InnerHeader.jsx";
import Dialog from "../../components/ui/Dialog.jsx";
import {useState} from "react";
import AddUser from "../../components/forms/AddUser.jsx";
import {useQuery} from "@tanstack/react-query";
import {getAllRoles} from "../../firebase/roles.js";
import {getAllDepartments} from "../../firebase/departments.js";
import {getAllUsers} from "../../firebase/users.js";
import THead from "../../components/table/THead.jsx";


const Users = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const headers = ["Names", "Email", "Department", "Role"]
    const {
        data,
        isLoading,
        isSuccess
    } = useQuery({
        queryKey: ["getRolesAndCategories"],
        queryFn: async () => {
            const roles = await getAllRoles();
            const departments = await getAllDepartments();
            const users = await getAllUsers();

            const rolesMap = {};
            roles.forEach(role => {
                rolesMap[role.id] = role.name;
            })

            const departmentsMap = {};
            departments.forEach(department => {
                departmentsMap[department.id] = department.name;
            })


            return {
                roles: roles,
                departments: departments,
                users: users,
                rolesMap: rolesMap,
                departmentsMap: departmentsMap
            }

        }
    })

    return (
        <>
            {dialogOpen &&
                <Dialog handleClose={() => setDialogOpen(false)}>
                    <Dialog.Title>Add Staff</Dialog.Title>
                    <AddUser roles={data.roles} departments={data.departments} />
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
                {
                    data&&
                    <table>
                        <THead headers={headers} />
                        <tbody>
                        {
                            data.users.map((user, idx) => (
                                <tr
                                    className="capitalize"
                                    key={idx}>
                                    <td className="font-medium">{`${user.firstName} ${user.lastName}`}</td>
                                    <td className="lowercase">{user.email}</td>
                                    <td>{data.departmentsMap[user.department]}</td>
                                    <td>{data.rolesMap[user.role]}</td>
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


export default Users;