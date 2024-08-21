import Input from "../ui/Input.jsx";
import Textarea from "../ui/Textarea.jsx";
import TagsInput from "../ui/TagsInput.jsx";
import Button from "../ui/Button.jsx";
import { useState } from "react";

const AddDept = () => {
    const initialFormData = {
        name: "",
        description: "",
        contact: "",
        email: "",
        services: [],
        location: "",
        comment: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleTagsChange = (tags) => {
        setFormData((prev) => ({
            ...prev,
            services: tags,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData(initialFormData)
    };

    return (
        <form>
            <div className="w-full flex flex-col gap-3">
                <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    label="Name"
                    placeholder="Department name"
                    required
                />
                <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    label="Description"
                    placeholder="Dept description"
                    required
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        label="Contact number"
                        placeholder="+2507884374"
                        required
                    />
                    <Input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        label="Dept. Email"
                        placeholder="example@gmail.com"
                        required
                    />
                </div>
                <TagsInput
                    label="Services"
                    tags={formData.services}
                    setTags={handleTagsChange}
                    placeholder="Enter the service and press ENTER"
                />
                <Input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    label="Location"
                    placeholder="Building A, Room 101"
                    required
                />
                <Textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    label="Comment"
                    placeholder="More description here:"
                />
                <Button onClick={handleSubmit}>Save Department</Button>
            </div>
        </form>
    );
};

export default AddDept;
