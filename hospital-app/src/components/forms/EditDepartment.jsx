import { useState } from "react";
import {useDeleteDepartment, useUpdateDepartment} from "../../hooks/useDepartments.js";
import Button from "../ui/Button.jsx";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import TagsInput from "../ui/TagsInput.jsx";
import {toast} from "react-toastify";
import { FaRegTrashCan as Trash } from "react-icons/fa6";

const EditDepartment = ({ department, handleClose }) => {
    const [editingField, setEditingField] = useState(null);
    const [editedValues, setEditedValues] = useState(department);
    const [isEdited, setIsEdited] = useState(false);

    const updateMutation = useUpdateDepartment();
    const deleteMutation = useDeleteDepartment();

    const handleDoubleClick = (field) => {
        setEditingField(field);
    };

    const handleInputChange = (e, field) => {
        setEditedValues({
            ...editedValues,
            [field]: e.target.value,
        });
        setIsEdited(true);
    };

    const handleBlurOrEnter = (e) => {
        if (e.type === "blur" || e.key === "Enter") {
            setEditingField(null);
        }
    };

    const handleTagsChange = (newTags) => {
        setEditedValues({
            ...editedValues,
            services: newTags
        });
        setIsEdited(true);
    };

    const handleSaveChanges = () => {
        updateMutation.mutate(
            {
                departmentId: department._id,
                departmentData: editedValues,
            },
            {
                onSuccess: () => {
                    setIsEdited(false);
                    handleClose();
                    toast.warning("Department updated !");
                },
                onError: (error) => {
                    console.error("Error saving changes:", error);
                }
            }
        );
    };

    const handleDelete = () => {
        deleteMutation.mutate(department._id, {
            onSuccess: () => {
                handleClose();
                toast.success("Department deleted!")
            }
        });
    };


    return (
        <div className="flex flex-col space-y-3 text-dark min-w-80">
            <div className="flex items-center justify-between">
                <div className="bg-light-gray rounded-md w-1/3 p-2 flex items-center justify-center">
                    <span>{department._id}</span>
                </div>
                <button
                    className="p-4 hover:bg-red-300 rounded-md bg-red-200 text-red-700 transition-all flex items-center justify-center"
                    onClick={handleDelete}
                >
                    <Trash size={20} />
                </button>
            </div>

            {/* Editable Name */}
            {editingField === "name" ? (
                <Input
                    placeholder={"Department name"}
                    label="Department Name"
                    value={editedValues.name}
                    onChange={(e) => handleInputChange(e, "name")}
                    onBlur={handleBlurOrEnter}
                    onKeyDown={handleBlurOrEnter}
                    autoFocus
                />
            ) : (
                <h1 className="text-3xl font-bold" onDoubleClick={() => handleDoubleClick("name")}>
                    {editedValues.name}
                </h1>
            )}

            {/* Editable Description */}
            {editingField === "description" ? (
                <Input
                    placeholder={"description"}
                    label="Description"
                    value={editedValues.description}
                    onChange={(e) => handleInputChange(e, "description")}
                    onBlur={handleBlurOrEnter}
                    onKeyDown={handleBlurOrEnter}
                    autoFocus
                />
            ) : (
                <p onDoubleClick={() => handleDoubleClick("description")}>{editedValues.description}</p>
            )}

            {/* Editable Email */}
            {editingField === "email" ? (
                <Input
                    placeholder={"Email"}
                    label="Email"
                    type="email"
                    value={editedValues.email}
                    onChange={(e) => handleInputChange(e, "email")}
                    onBlur={handleBlurOrEnter}
                    onKeyDown={handleBlurOrEnter}
                    autoFocus
                />
            ) : (
                <p onDoubleClick={() => handleDoubleClick("email")}>{editedValues.email}</p>
            )}

            {/* Editable Location */}
            {editingField === "location" ? (
                <Input
                    placeholder={"location"}
                    label="Location"
                    value={editedValues.location}
                    onChange={(e) => handleInputChange(e, "location")}
                    onBlur={handleBlurOrEnter}
                    onKeyDown={handleBlurOrEnter}
                    autoFocus
                />
            ) : (
                <p onDoubleClick={() => handleDoubleClick("location")}>{editedValues.location}</p>
            )}

            {/* Services */}
            <TagsInput
                label="Services"
                tags={editedValues.services}
                setTags={handleTagsChange}
                placeholder="Enter a service and press Enter"
            />

            {/* Editable Large Description */}
            {editingField === "largeDescription" ? (
                <Textarea
                    placeholder={"Comments"}
                    label="Large Description"
                    value={editedValues.largeDescription}
                    onChange={(e) => handleInputChange(e, "large_description")}
                    onBlur={handleBlurOrEnter}
                    onKeyDown={handleBlurOrEnter}
                    autoFocus
                />
            ) : (
                <p onDoubleClick={() => handleDoubleClick("largeDescription")} className="max-w-[751px]">
                    {editedValues.largeDescription}
                </p>
            )}

            {/* Conditionally render the Save Changes button */}
            {isEdited && (
                <Button className="bg-blue-600 text-white rounded-md hover:bg-blue-700 mt-4" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            )}
        </div>
    );
};

export default EditDepartment;
