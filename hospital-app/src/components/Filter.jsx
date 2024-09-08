import {useState, useEffect, useMemo} from "react";
import { CiFilter as Fil } from "react-icons/ci";
import Dialog from "./ui/Dialog.jsx";
import Button from "./ui/Button.jsx";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

const roles = ["Admin", "Doctor", "Nurse", "Receptionist"];

const Filter = ({ onFilterChange, filters, departments, filterModalOpen, setFilterModalOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
    
    const [selectedRole, setSelectedRole] = useState(queryParams.get("role") || filters.role || "");
    const [selectedDepartment, setSelectedDepartment] = useState(queryParams.get("department") || filters.department || "");

    // Update state when the URL query params change
    useEffect(() => {
        const role = queryParams.get("role") || "";
        const department = queryParams.get("department") || "";

        setSelectedRole(role);
        setSelectedDepartment(department);
    }, [queryParams]);

    const handleRoleChange = (role) => {
        setSelectedRole(role === selectedRole ? "" : role);
    };

    const handleDepartmentChange = (deptId) => {
        setSelectedDepartment(deptId === selectedDepartment ? "" : deptId);
    };

    const applyFilter = () => {
        const newFilters = {
            ...filters,
            role: selectedRole,
            department: selectedDepartment,
        };
        onFilterChange(newFilters);

        const queryParams = new URLSearchParams();

        if (selectedRole) queryParams.set("role", selectedRole);
        if (selectedDepartment) queryParams.set("department", selectedDepartment);

        navigate({
            pathname: location.pathname,
            search: `?${queryParams.toString()}`,
        });

        setFilterModalOpen(false); // Close the modal
    };

    return (
        <div className="relative w-full flex items-center justify-end mb-2">
            <button
                className="px-4 py-2 bg-gray-200 text-dark rounded-md hover:bg-gray-300 flex items-center"
                onClick={() => setFilterModalOpen(true)}
            >
                <Fil size={24} />
                <span className="ml-2">Filter</span>
            </button>

            {filterModalOpen && (
                <Dialog handleClose={() => setFilterModalOpen(false)}>
                    <Dialog.Title>Filter Staff</Dialog.Title>
                    <div className="p-4">
                        <div className="flex gap-16">
                            {/* Role Filter */}
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold mb-2">Filter by Role</h3>
                                {roles.map((role) => (
                                    <label key={role} className="block mb-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedRole === role}
                                            onChange={() => handleRoleChange(role)}
                                            className="mr-2"
                                        />
                                        {role}
                                    </label>
                                ))}
                            </div>

                            {/* Department Filter */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Filter by Department</h3>
                                {departments.map((dept) => (
                                    <label key={dept._id} className="block mb-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedDepartment === dept._id}
                                            onChange={() => handleDepartmentChange(dept._id)}
                                            className="mr-2"
                                        />
                                        {dept.name}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Apply and Cancel Buttons */}
                        <div className="flex justify-end space-x-2 mt-4">
                            <Button
                                className="bg-muted text-dark rounded-md hover:bg-gray-600"
                                onClick={() => setFilterModalOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                onClick={applyFilter}
                            >
                                Apply
                            </Button>
                        </div>
                    </div>
                </Dialog>
            )}
        </div>
    );
};

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filters: PropTypes.shape({
        role: PropTypes.string,
        department: PropTypes.string,
    }).isRequired,
    departments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    filterModalOpen: PropTypes.bool.isRequired,
    setFilterModalOpen: PropTypes.func.isRequired,
};

export default Filter;
