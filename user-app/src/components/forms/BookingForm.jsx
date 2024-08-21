import Input from "../ui/Input.jsx";
import Select from "../ui/Select.jsx";
import Textarea from "../ui/Textarea.jsx";
import Button from "../ui/Button.jsx";
import {useState} from "react";


const BookingForm = () => {

    const initialFormData = {
        patientName: "",
        department: "",
        doctor: "",
        patientEmail: "",
        patientPhone: "",
        date: "",
        time: "",
        comment: ""
    }

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                    <Input
                        name="patientName"
                        onChange={handleChange}
                        value={formData.patientName}
                        label={"Patient name"}
                        placeholder={"Patient name"}
                        required
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Select
                            name="department"
                            onChange={handleChange}
                            label={"Departments"}
                            required
                        >
                            <Select.Option value={"1"}>Department 1</Select.Option>
                            <Select.Option value={"2"}>Department 2</Select.Option>
                            <Select.Option value={"3"}>Department 3</Select.Option>
                        </Select>
                        <Select
                            name="doctor"
                            onChange={handleChange}
                            label={"Doctor"}
                            required
                        >
                            <Select.Option value={"1"}>Doctor 1</Select.Option>
                            <Select.Option value={"2"}>Doctor 2</Select.Option>
                            <Select.Option value={"3"}>Doctor 3</Select.Option>
                        </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input
                            name="patientEmail"
                            onChange={handleChange}
                            value={formData.patientEmail}
                            label={"Your email"}
                            placeholder={"email@example.com"}
                            required
                        />
                        <Input
                            name="patientPhone"
                            onChange={handleChange}
                            value={formData.patientPhone}
                            label={"Your Phone"}
                            placeholder={"+250791154300"}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input
                            name="date"
                            onChange={handleChange}
                            type={"date"}
                            value={formData.date}
                            label={"Date"}
                            placeholder={"date"}
                            required
                        />
                        <Input
                            name="time"
                            onChange={handleChange}
                            type={"time"}
                            value={formData.time}
                            label={"Time"}
                            placeholder={"03:30AM"}
                            required
                        />
                    </div>
                    <Textarea
                        name="comment"
                        onChange={handleChange}
                        value={formData.comment}
                        label={"Comments"}
                        placeholder={"Problem description:"}
                    />

                    <Button type="submit">
                        Book an Appointment
                    </Button>
                </div>
            </form>
        </div>
    )
}


export default BookingForm;