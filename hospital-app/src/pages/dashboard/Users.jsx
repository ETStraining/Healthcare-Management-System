import Button from "../../components/ui/Button.jsx";
import InnerHeader from "../../components/layout/InnerHeader.jsx";
import Dialog from "../../components/ui/Dialog.jsx";
import {useState} from "react";
import AddUser from "../../components/forms/AddUser.jsx";
import THead from "../../components/table/THead.jsx";
import {useStaff} from "../../hooks/useStaff.js";
import {useDepartments} from "../../hooks/useDepartments.js";
import Pagination from "../../components/ui/Pagination.jsx";
import Filter from "../../components/Filter.jsx";


const Users = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [filters, setFilters] = useState({})
    const [filterModalOpen, setFilterModalOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false)

    const headers = ["Names", "Email", "Department", "Role"]
    const {data: users, isLoading, isSuccess} = useStaff(filters, page, limit);
    const {data: departmentsData, isSuccess:isDepartmentsSuccess} = useDepartments();

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        setPage(1);
    };
    



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
                    <>
                        {isDepartmentsSuccess && (
                            <Filter
                                onFilterChange={handleFilterChange}
                                filters={filters}
                                departments={departmentsData.departments}
                                filterModalOpen={filterModalOpen}
                                setFilterModalOpen={setFilterModalOpen}
                            />
                        )}
                        <table>
                            <THead headers={headers} />
                            <tbody>
                            {users.staff.map((user, idx) => (
                                <tr className="capitalize" key={idx}>
                                    <td className="font-medium">{`${user.firstName} ${user.lastName}`}</td>
                                    <td className="lowercase">{user.email}</td>
                                    <td>{user.department.name}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </>
                )}
                {
                    users &&
                    <Pagination
                        page={users.page}
                        totalPages={users.totalPages}
                        onPageChange={setPage}
                    />
                }
            </div>
        </>
    )
}


export default Users;