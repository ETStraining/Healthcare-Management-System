import Button from "../../components/ui/Button.jsx";
import InnerHeader from "../../components/layout/InnerHeader.jsx";
import {useState} from "react";
import Dialog from "../../components/ui/Dialog.jsx";
import AddPatient from "../../components/forms/AddPatient.jsx";
import THead from "../../components/table/THead.jsx";

const Patients = () => {
    const headers = ["Names", "Phone", "Province", "District", "Village", "Cell"];
    const [dialogOpen, setDialogOpen] = useState(false)

    return(
        <>
            {
                dialogOpen &&
                <Dialog handleClose={() => setDialogOpen(false)}>
                    <Dialog.Title>Add Patient</Dialog.Title>
                    <AddPatient />
                </Dialog>
            }
            <InnerHeader title={"Patients"} className="flex items-center justify-between">
                <Button onClick={() => setDialogOpen(true)}>Add a Patient</Button>
            </InnerHeader>
            <div className="relative overflow-x-auto">
                <table>
                    <THead headers={headers} />
                </table>
            </div>
        </>
    )
}


export default Patients;