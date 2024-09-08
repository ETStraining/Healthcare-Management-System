import Input from "../ui/Input.jsx";
import Textarea from "../ui/Textarea.jsx";
import Select from "../ui/Select.jsx";
import Button from "../ui/Button.jsx";
import {useState} from "react";
import PropTypes from "prop-types";
import {useCreateStaff} from "../../hooks/useStaff.js";

const AddUser = ({departments}) => {

    const roles = ["Admin", "Doctor", "Nurse", "Receptionist"]

    const initialFormData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
        role: "",
        department: "",
        password: "12345678"
    }

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const {
        mutate,
        isPending,
        data
    } = useCreateStaff()

    console.log(data)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        mutate(formData, {
            onSuccess: () => {
                console.log("User added ");
                setFormData(initialFormData);
            },
            onError: (error) => {
                console.error("Error adding user: ", error);
            },
        });
    }


    return(
        <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                        onChange={handleChange}
                        name={"firstName"}
                        label={"First Name"}
                        value={formData.firstName}
                        placeholder={"John"} required/>
                    <Input
                        onChange={handleChange}
                        name={"lastName"}
                        label={"Last Name"}
                        value={formData.lastName}
                        placeholder={"Doe"} required/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                        onChange={handleChange}
                        name={"email"}
                        label={"Email"}
                        value={formData.email}
                        placeholder={"John"} required/>
                    <Input
                        onChange={handleChange}
                        name={"phone"}
                        label={"Phone"}
                        value={formData.phone}
                        placeholder={"+250(791)-154-300"} required/>
                </div>
                <Textarea
                    onChange={handleChange}
                    name={"description"}
                    label={"Description"}
                    value={formData.description}
                    placeholder={"User description here"} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Select
                        onChange={handleChange}
                        name={"role"}
                        value={formData.role}
                        label={"Role"} required>
                        {
                            roles.map((role) => (
                                <Select.Option
                                    key={role}
                                    value={role}
                                >{role}</Select.Option>
                            ))
                        }
                    </Select>
                    <Select
                        onChange={handleChange}
                        name={"department"}
                        value={formData.department}
                        label={"Department"} required>
                        {
                            departments.map((department) => (
                                <Select.Option
                                    key={department._id}
                                    value={department._id}
                                >{department.name}</Select.Option>
                            ))
                        }
                    </Select>
                </div>
                <Button onClick={() => {}}>
                    {isPending? 'Adding User':'Create User'}
                </Button>
            </div>
        </form>
    )
}

AddUser.propTypes = {
    departments: PropTypes.arrayOf(PropTypes.object)
}


export default AddUser;