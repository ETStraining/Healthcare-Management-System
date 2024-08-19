import Input from "../ui/Input.jsx";
import Select from "../ui/Select.jsx";
import Textarea from "../ui/Textarea.jsx";
import Button from "../ui/Button.jsx";

const BookingForm = () => {
    return (
        <div className="form-wrapper">
            <form>
                <div className="flex flex-col gap-3">
                    <Input
                        onChange={() => {
                        }}
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
                        <Input onChange={() => {
                        }} label={"You email"} placeholder={"email@example.com"} required/>
                        <Input onChange={() => {
                        }} label={"You Phone"} placeholder={"+250791154300"} required/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input onChange={() => {
                        }} type={"date"} label={"Date"} placeholder={"date"} required/>
                        <Input onChange={() => {
                        }} type={"time"} label={"Time"} placeholder={"03:30AM"} required/>
                    </div>
                    <Textarea onChange={() => {
                    }} label={"Comments"} placeholder={"Problem description:"}/>

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