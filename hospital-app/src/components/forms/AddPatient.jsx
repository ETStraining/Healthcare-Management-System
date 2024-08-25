import Input from "../ui/Input.jsx";
import Select from "../ui/Select.jsx";
import Button from "../ui/Button.jsx";


const AddPatient = () => {
    return(
        <form>
            <div className="w-full flex flex-col gap-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                        onChange={() => {
                        }}
                        label={"First name"}
                        placeholder={"Uwamaliya"} required/>
                    <Input
                        onChange={() => {
                        }}
                        label={"Last name"}
                        placeholder={"Donatha"} required/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                        onChange={() => {
                        }}
                        type={"email"}
                        label={"Email"}
                        placeholder={"example@gmail.com"}/>
                    <Input
                        onChange={() => {
                        }}
                        type={"tel"}
                        label={"Phone"}
                        placeholder={"+(250) 791 4300"} required/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Select onChange={() => {
                    }} label={"Province"}/>
                    <Select onChange={() => {
                    }} label={"District"}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Select onChange={() => {
                    }} label={"Cell"}/>
                    <Select onChange={() => {
                    }} label={"Village"}/>
                </div>
                <Button onClick={() => {}}>Add Patient</Button>
            </div>
        </form>
    )
}


export default AddPatient;