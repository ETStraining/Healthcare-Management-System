import Button from "../../components/ui/Button.jsx";
import InnerHeader from "../../components/layout/InnerHeader.jsx";
import Dialog from "../../components/ui/Dialog.jsx";
import {useState} from "react";
import AddUser from "../../components/forms/AddUser.jsx";
import THead from "../../components/table/THead.jsx";
import {useDeleteStaff, useStaff} from "../../hooks/useStaff.js";
import {useDepartments} from "../../hooks/useDepartments.js";
import Pagination from "../../components/ui/Pagination.jsx";
import Filter from "../../components/Filter.jsx";
import Spinner from "../../components/Spinner.jsx";
import Banner from "../../components/Banner.jsx";
import {FaRegTrashCan as Trash} from "react-icons/fa6";
import {toast} from "react-toastify";


const Users = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [filters, setFilters] = useState({})
    const [selectedUser, setSelectedUser] = useState(null);
    const [filterModalOpen, setFilterModalOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [oneUserDialog, setOneUserDialog] = useState(false)

    const headers = ["Names", "Email", "Department", "Role"]
    const {data: users, isLoading, isSuccess} = useStaff(filters, page, limit);
    const {data: departmentsData, isSuccess:isDepartmentsSuccess} = useDepartments();
    const {mutate, isPending} = useDeleteStaff();

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        setPage(1);
    };

    const closeUserDialog = () => {
        setOneUserDialog(false)
    }

    const handleOpenUserDialog = (user) => {
        setSelectedUser(user);
        setOneUserDialog(true)
    }

    const handleStaffDeletion = (id) => {
        mutate(id, {
            onSuccess: () => {
                toast.warning("User deleted")
            }
        })
    }




    return (
        <>
            {dialogOpen &&
                <Dialog handleClose={() => setDialogOpen(false)}>
                    <Dialog.Title>Add Staff</Dialog.Title>
                    <AddUser departments={departmentsData.departments} />
                </Dialog>
            }
            {oneUserDialog &&
                <Dialog handleClose={closeUserDialog}>
                    <>
                        <div className="flex min-w-[450px] mb-2 items-center text-dark justify-between">
                            <div className="bg-light-gray rounded-md w-1/3 p-2 flex items-center justify-center">
                                <span className="truncate">{selectedUser._id}</span>
                            </div>
                            <button
                                className="p-4 hover:bg-red-300 rounded-md bg-red-200 text-red-700 transition-all flex items-center justify-center"
                                onClick={() => handleStaffDeletion(selectedUser._id)}
                            >
                                <Trash size={20}/>
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold">{selectedUser.firstName + " " + selectedUser.lastName}</h1>
                            <p>{selectedUser.phone}</p>
                        </div>
                        <p className="text-muted">{selectedUser.description}</p>
                        <div>
                            <h3 className="text-lg">Department: {selectedUser.department.name}</h3>
                        </div>
                    </>
                </Dialog>
            }
            <InnerHeader title={"Staff"} className="flex items-center justify-between">
                <Button onClick={() => setDialogOpen(true)}>Add a Staff</Button>
            </InnerHeader>

            <div className="relative min-h-40 overflow-x-auto">
                {
                    isLoading ? (
                        <Spinner/>
                    ) : users && users.staff.length > 0 ? (
                        <>
                            <div className="flex items-center justify-between px-4">
                                <h1 className="text-dark font-bold">Total: <span className="font-medium">{users.total}</span></h1>
                                {isDepartmentsSuccess && (
                                    <Filter
                                        onFilterChange={handleFilterChange}
                                        filters={filters}
                                        departments={departmentsData.departments}
                                        filterModalOpen={filterModalOpen}
                                        setFilterModalOpen={setFilterModalOpen}
                                    />
                                )}
                            </div>
                        <table>
                            <THead headers={headers} />
                            <tbody>
                            {users.staff.map((user, idx) => (
                                <tr className="capitalize" key={idx}>
                                    <td
                                        className="font-medium hover:underline cursor-pointer"
                                        onClick={() => handleOpenUserDialog(user)}
                                    >{`${user.firstName} ${user.lastName}`}</td>
                                    <td className="lowercase">{user.email}</td>
                                    <td>{user.department.name || ""}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <Pagination
                            page={users.page}
                            totalPages={users.totalPages}
                            onPageChange={setPage}
                        />
                    </>
                ): (
                    <Banner message={"No Staff members found"} />
                    )
                }
            </div>
        </>
    )
}


export default Users;