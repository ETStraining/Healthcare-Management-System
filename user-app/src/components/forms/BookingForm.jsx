import Input from "../ui/Input.jsx";
import Select from "../ui/Select.jsx";
import Textarea from "../ui/Textarea.jsx";
import Button from "../ui/Button.jsx";
import { useState } from "react";
import { validatePatientName as validatePatientName1 } from "../../helpers/validation.js";
import { validatePatientName as validatePatientName2} from "../../helpers/second validation.js";


const BookingForm = () => {

    const [name,setname] = useState (" ")
    const [email,setemail] = useState (" ")
    const [Phone,setPhone] = useState (" ")
    const [Time,setTime] = useState (" ")
    const [Date,setDate] = useState (" ")
    const [Comments,setComments] = useState (" ")
    

    const handlesubmit = (e) => {
     e.preventDefault();
     const isValid1 = validatePatientName1(name);
     const isValid2 = validatePatientName2(name);
     if (isValid1 && isValid2) {
        alert("Appointment booked successfully!");
        
    } else {
        alert("Validation failed. Please check the form fields.");
    }
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handlesubmit}>
                <div className="flex flex-col gap-3">
                    <Input
                        onChange={
                     setname(e.target.value)
                        }
value={
name
}

                        label={"Patient name"}
                        placeholder={"Patient name"}
                        required
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Select onChange={() => {
                        }} label={"Departments"} required>
                            <Select.Option value={"1"}>Department 1</Select.Option>
                            <Select.Option value={"2"}>Department 2</Select.Option>
                            <Select.Option value={"3"}>Department 3</Select.Option>
                        </Select>
                        <Select onChange={() => {
                        }} label={"Doctor"} required>
                            <Select.Option value={"1"}>Department 1</Select.Option>
                            <Select.Option value={"2"}>Department 2</Select.Option>
                            <Select.Option value={"3"}>Department 3</Select.Option>
                        </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input onChange={
                             setemail(e.target.value)
                        }
                        value={
                            email
                            }
                        
                        label={"You email"} placeholder={"email@example.com"} required/>
                        <Input onChange={setPhone(e.target.value)} value={Phone} label={"You Phone"} placeholder={"+250791154300"} required/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input onChange={setDate(e.target.value)} value={Date} type={"date"} label={"Date"} placeholder={"date"} required/>
                        <Input onChange={setTime(e.target.value)}  value={Time} type={"time"} label={"Time"} placeholder={"03:30AM"} required/>
                    </div>
                    <Textarea onChange={ setComments(e.target.value)} value={Comments} label={"Comments"} placeholder={"Problem description:"}/>

                    <Button onClick={() => {
                    }}>
                        Book an Appointment
                    </Button>
                </div>
            </form>
        </div>
    )
}


export default BookingForm;