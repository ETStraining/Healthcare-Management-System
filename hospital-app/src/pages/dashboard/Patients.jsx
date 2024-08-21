import Button from "../../components/ui/Button.jsx";
import InnerHeader from "../../components/layout/InnerHeader.jsx";

const Patients = () => {
    return(
        <>
            <InnerHeader title={"Patients"} className="flex items-center justify-between">
                <Button onClick={() => {}}>Add a Patient</Button>
            </InnerHeader>
            <div className="relative overflow-x-auto">

            </div>
        </>
    )
}


export default Patients;