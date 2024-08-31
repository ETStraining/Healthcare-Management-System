import {FaRegTrashCan as Del} from "react-icons/fa6";
import Dialog from "../ui/Dialog.jsx";
import {useState} from "react";
import Button from "../ui/Button.jsx";
import PropTypes from "prop-types";

const DelBtn = ({action}) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    return(
        <>
            {
                dialogOpen &&
                <Dialog handleClose={() => setDialogOpen(false)}>
                    <div className="my-3 text-center">
                        <h4 className="text-dark text-2xl font-bold">Are you sure you want to delete this ?</h4>
                        <p className="my-3 font-medium text-muted text-lg">This can not be undone!!</p>
                        <Button onClick={action} variant="danger">
                            Confirm
                        </Button>
                    </div>
                </Dialog>
            }
            <button
                className="h-30 w-30 p-3 bg-red-400 text-white rounded-full flex items-center justify-center"
                onClick={() => setDialogOpen(true)}
            >
                <Del size={16} />
            </button>
        </>
    )
}

DelBtn.propTypes = {
    action: PropTypes.func.isRequired
}

export default DelBtn;