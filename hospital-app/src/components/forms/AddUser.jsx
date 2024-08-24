import Input from "../ui/Input.jsx";
import Textarea from "../ui/Textarea.jsx";
import {useMutation} from "@tanstack/react-query";
import Select from "../ui/Select.jsx";
import Button from "../ui/Button.jsx";
import {useState} from "react";
import {createUser} from "../../firebase/users.js";

const AddUser = ({roles, departments}) => {

    const initialFormData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
        role: "",
        department: ""
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
        isSuccess
    } = useMutation({
        mutationKey: ["createUser"],
        mutationFn: createUser
    })

    const handleSubmit = (e) => {
        e.preventDefault();
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
                                    key={role.id}
                                    value={role.id}
                                >{role.name}</Select.Option>
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
                                    key={department.id}
                                    value={department.id}
                                >{department.name}</Select.Option>
                            ))
                        }
                    </Select>
                </div>
                <Button onClick={() => {}}>Create User</Button>
            </div>
        </form>
    )
}


export default AddUser;