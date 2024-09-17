import PropTypes from "prop-types";
import React from "react";
import {cn} from "../../utils/utils.js";

const Textarea = React.forwardRef(({ label, className, required, ...props }, ref) => (
    <label>
        <span className="text-dark font-medium">{label}</span>
        {required && <span className="ms-1 text-red-400 font-medium">*</span>}
        <textarea
            ref={ref}
            required={required}
            rows={4}
            {...props}
            className={cn('mt-1 py-[0.375rem] px-3 w-full outline-none border border-light-gray rounded-[0.375rem] text-dark text-[0.9375rem] transition-all focus:border-dc-blue focus:ring-4 focus:ring-dc-blue/30 resize-vertical', className)}
        />
    </label>
));

Textarea.displayName = "TextArea"

Textarea.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,                   // Optional additional classes for styling
    required: PropTypes.bool                       // Determines if the field is required, default is false
};


export default Textarea;
