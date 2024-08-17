import PropTypes from "prop-types";

const Input = ({ label, type = "text", placeholder, value, onChange, className, required }) => {
    return (
        <label>
            <span className="text-dark font-medium">{label}</span>
            {required && <span className="ms-1 text-red-400 font-medium">*</span>}

            <input
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className={`${className} mt-1 py-[0.375rem] px-3 w-full outline-none border border-light-gray rounded-[0.375rem] text-dark text-[0.9375rem] transition-all focus:border-dc-blue focus:ring-4 focus:ring-dc-blue/30`}
            />
        </label>
    );
};

// PropTypes validation for the Input component
Input.propTypes = {
    label: PropTypes.string.isRequired,            // Label text is required
    type: PropTypes.string,                        // Type of the input field (e.g., text, password)
    placeholder: PropTypes.string.isRequired,      // Placeholder text is required
    value: PropTypes.oneOfType([                   // Value can be a string or a number
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired,           // onChange function is required for handling input changes
    className: PropTypes.string,                   // Optional additional classes for styling
    required: PropTypes.bool                       // Determines if the field is required, default is false
};


export default Input;
