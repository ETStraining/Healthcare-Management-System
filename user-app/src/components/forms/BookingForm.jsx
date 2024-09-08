import Input from "../ui/Input.jsx";
import Select from "../ui/Select.jsx";
import Textarea from "../ui/Textarea.jsx";
import Button from "../ui/Button.jsx";
import {useState} from "react";
import {useCreateAppointment, useDepartments, useStaff} from "../../hooks/useApi.js";
import {toast} from "react-toastify";


const BookingForm = () => {

    const [filters, setFilters] = useState({
        role: "Doctor"
    })

    const {data: deps, isSuccess} = useDepartments();
    const {data: docs, isSuccess: ready} = useStaff(filters);



    const initialFormData = {
        patientName: "",
        department: "",
        doctor: "",
        email: "",
        phone: "",
        visitDate: "",
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
        if (name === "department") {
            setFilters((prevFilters) => ({
                ...prevFilters,
                department: value
            }));
        }
    };

    const {mutate, isPending} = useCreateAppointment();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        mutate(formData, {
            onSuccess: () => {
                toast.success("Appointment added")
                setFormData(initialFormData);
            },
            onError: (error) => {
                toast.error("An Error occurred")
                console.error("Error: ", error);
            },
        })
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
                            {
                                isSuccess &&
                                (deps.departments.map((dep, idx) => (
                                    <Select.Option value={dep._id} key={idx}>{dep.name}</Select.Option>
                                )))
                            }
                        </Select>
                        <Select
                            name="doctor"
                            onChange={handleChange}
                            label={"Doctor"}
                            required
                        >
                            {
                                ready &&
                                (docs.staff.map((doc, idx) => (
                                    <Select.Option value={doc._id} key={idx}>{doc.firstName +" "+ doc.lastName}</Select.Option>
                                )))
                            }
                        </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input
                            name="email"
                            onChange={handleChange}
                            value={formData.patientEmail}
                            label={"Your email"}
                            placeholder={"email@example.com"}
                            required
                        />
                        <Input
                            name="phone"
                            onChange={handleChange}
                            value={formData.patientPhone}
                            label={"Your Phone"}
                            placeholder={"+250791154300"}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input
                            name="visitDate"
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
                        {
                            isPending? "Booking...":"Book an Appointment"
                        }
                    </Button>
                </div>
            </form>
        </div>
    )
}


export default BookingForm;