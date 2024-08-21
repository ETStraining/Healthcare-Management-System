import InnerHeader from "../../components/layout/InnerHeader.jsx";
import Button from "../../components/ui/Button.jsx";

const Doctors = () => {
    return(
        <>
            <InnerHeader title={"Doctors"} className="flex items-center justify-between" >
                <Button onClick={() => {}}>Add a Doctor</Button>
            </InnerHeader>
            <div className="relative overflow-x-auto">

            </div>
        </>
    )
}


export default Doctors;