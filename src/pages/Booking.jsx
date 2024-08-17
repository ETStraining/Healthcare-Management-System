import Container from "../components/Container.jsx";
import Input from "../components/ui/Input.jsx";
import Select from "../components/ui/Select.jsx";
import Textarea from "../components/ui/Textarea.jsx";
import Button from "../components/ui/Button.jsx";


const Booking = () => {
    return(
        <>
            <section className="py-[170px] relative w-full bg-light">
                <Container>
                    <div className="flex items-center justify-center mt-5">
                        <div className="text-center">
                            <h3 className="font-bold text-dark text-3xl mb-5">Book an appointment</h3>
                            <p className="max-w-[600px] text-muted">Great doctor if you need your family member to get
                                effective immediate assistance, emergency treatment or a simple consultation.</p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="my-[100px]">
                <Container>
                    <div className="flex items-center justify-center">
                        <div className="w-full lg:w-2/3">
                            <div className="w-full border border-light-gray rounded-[0.375rem] p-4">
                                <form>
                                    <div className="flex flex-col gap-3">
                                        <Input
                                            onChange={() => {}}
                                            label={"Patient name"}
                                            placeholder={"Patient name"}
                                            required
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <Select onChange={() => {}} label={"Departments"} required>
                                                <Select.Option value={"1"}>Department 1</Select.Option>
                                                <Select.Option value={"2"}>Department 2</Select.Option>
                                                <Select.Option value={"3"}>Department 3</Select.Option>
                                            </Select>
                                            <Select onChange={() => {}} label={"Doctor"} required>
                                                <Select.Option value={"1"}>Department 1</Select.Option>
                                                <Select.Option value={"2"}>Department 2</Select.Option>
                                                <Select.Option value={"3"}>Department 3</Select.Option>
                                            </Select>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <Input onChange={() => {}} label={"You email"} placeholder={"email@example.com"} required />
                                            <Input onChange={() => {}} label={"You Phone"} placeholder={"+250791154300"} required />
                                        </div>
                                        <Textarea onChange={() => {}} label={"Comments"} placeholder={"Problem description:"} />

                                        <Button onClick={() => {}}>
                                            Book an Appointment
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}


export default Booking;