import PropTypes from "prop-types";
import React from "react";
import {cn} from "../../utils/utils.js";

const Input = React.forwardRef(({ label, type = "text", className, required, ...props }, ref) => (
    <label>
        <span className="text-dark font-medium">{label}</span>
        {required && <span className="ms-1 text-red-400 font-medium">*</span>}

        <input
            ref={ref}
            type={type}
            required={required}
            {...props}
            className={cn('mt-1 py-[0.375rem] px-3 w-full outline-none border border-light-gray rounded-[0.375rem] text-dark text-[0.9375rem] transition-all focus:border-dc-blue focus:ring-4 focus:ring-dc-blue/30', className)}
        />
    </label>
))

Input.displayName = "Input"

// PropTypes validation for the Input component
Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    required: PropTypes.bool
};


export default Input;
