import PropTypes from "prop-types";

const Textarea = ({label, placeholder, value, onChange, className, required, ...rest }) => {
    return (
        <label>
            <span className="text-dark font-medium">{label}</span>
            {required && <span className="ms-1 text-red-400 font-medium">*</span>}
            <textarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                rows={4}
                {...rest}
                className={`${className} mt-1 py-[0.375rem] px-3 w-full outline-none border border-light-gray rounded-[0.375rem] text-dark text-[0.9375rem] transition-all focus:border-dc-blue focus:ring-4 focus:ring-dc-blue/30 resize-vertical`}
            />
        </label>
    );
};

// PropTypes validation for the Textarea component
Textarea.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,      // Placeholder text is required
    value: PropTypes.oneOfType([                   // Value can be a string or a number
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired,           // onChange function is required for handling textarea changes
    className: PropTypes.string,                   // Optional additional classes for styling
    required: PropTypes.bool                       // Determines if the field is required, default is false
};


export default Textarea;
