import PropTypes from "prop-types";
import {createContext, useContext} from "react";
import Backdrop from "../Backdrop.jsx";
import {IoClose as Close} from "react-icons/io5";

const DialogContext = createContext(undefined);

const DialogProvider = ({children, handleClose}) => {
    return(
        <DialogContext.Provider value={handleClose}>
            {children}
        </DialogContext.Provider>
    )
}

const Dialog = ({children, handleClose}) => {
    return(
        <Backdrop onClick={handleClose}>
            <DialogProvider handleClose={handleClose}>
                <div
                    className="bg-white p-6 rounded-md"
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </DialogProvider>
        </Backdrop>
    )
}

const useHandleClose = () => {
    const handleClose = useContext(DialogContext);
    if (!handleClose) {
        throw new Error("useHandleClose must be used within a Dialog");
    }
    return handleClose;
};


const DialogTitle = ({children}) => {
    const handleClose = useHandleClose();
    return(
        <div className="flex items-center justify-between border-b border-b-muted/70 pb-2 mb-4">
            <h1 className="text-dark font-bold text-2xl">{children}</h1>
            <span onClick={handleClose} className="cursor-pointer">
                <Close size={24} />
            </span>
        </div>
    )
}

Dialog.Title = DialogTitle;


Dialog.propTypes = {
    children: PropTypes.node.isRequired,
    handleClose: PropTypes.func.isRequired,
};

DialogProvider.propTypes = {
    children: PropTypes.node.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default Dialog;