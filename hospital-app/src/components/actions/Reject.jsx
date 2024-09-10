import {FcDisapprove} from "react-icons/fc";
import {useState} from "react";
import {useRejecting} from "../../hooks/useAppointments.js";
import {toast} from "react-toastify";
import Dialog from "../ui/Dialog.jsx";
import Textarea from "../ui/Textarea.jsx";
import Button from "../ui/Button.jsx";

const Reject = ({appointmentId}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({comment: ""});

    const {mutate, isPending} = useRejecting();

    const handleSubmit = () => {
        mutate({appointmentId, formData}, {
            onSuccess: () => {
                toast.success("Appointment Rejected");
                setFormData({comment: ""})
                setIsOpen(false)
            },
            onError: () => {
                toast.error("Unexpected error occurred");
            }
        })
    }
    return(
        <>
            {
                isOpen &&
                <Dialog handleClose={() => setIsOpen(false)}>
                    <div className="min-w-[420px]">
                        <h1 className="text-3xl text-dark font-bold mb-4">Rejecting Appointment</h1>
                        <div>
                            <Textarea
                                className="mb-4"
                                onChange={(e) => setFormData({comment: e.target.value})}
                                value={formData.comment}
                                label={"Add remarks"}
                                required
                                placeholder={"Remarks here for more explanation"}/>
                            <Button variant={"danger"} onClick={handleSubmit}>
                                {
                                    isPending ? 'Rejecting...' : 'Reject'
                                }
                            </Button>
                        </div>
                    </div>
                </Dialog>
            }
            <button onClick={() => setIsOpen(true)}>
                <FcDisapprove size={36} />
            </button>
        </>
    )
}

export default Reject;