import Button from "../../components/ui/Button.jsx";
import InnerHeader from "../../components/layout/InnerHeader.jsx";
import Dialog from "../../components/ui/Dialog.jsx";
import AddDept from "../../components/forms/AddDept.jsx";
import {useState} from "react";

const Departments = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    return(
        <>
            {dialogOpen &&
                <Dialog handleClose={() => setDialogOpen(false)}>
                    <Dialog.Title>Add Department</Dialog.Title>
                    <AddDept />
                </Dialog>
            }
            <InnerHeader title={"Departments"} className="flex items-center justify-between">
                <Button onClick={() => setDialogOpen(true)}>Add a Department</Button>
            </InnerHeader>
            <div className="relative overflow-x-auto">

            </div>
        </>
    )
}


export default Departments;