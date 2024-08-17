import PropTypes from "prop-types";

/**
 * Input Component
 *
 * A reusable input component that includes a label, placeholder text,
 * and optional required field indication. This component is flexible
 * and can be customized with different types, classes, and handlers.
 *
 * @param {string} label - The text label for the input field.
 * @param {string} type - The type of the input (e.g., "text", "password", etc.). Defaults to "text".
 * @param {string} placeholder - The placeholder text for the input field.
 * @param {string|number} value - The value of the input field.
 * @param {function} onChange - The handler function for the input's onChange event.
 * @param {string} className - Additional classes for styling the input field.
 * @param {boolean} required - Determines if the input field is required. If true, a red asterisk is displayed.
 */
const Input = ({ label, type = "text", placeholder, value, onChange, className, required }) => {
    return (
        <label>
            {/* Label for the input field */}
            <span className="text-dark font-medium">{label}</span>

            {/* Conditionally render an asterisk if the input is required */}
            {required && <span className="ms-1 text-red-400 font-medium">*</span>}

            {/* The input element itself, which passes through all necessary props */}
            <input
                type={type}                     // The type of the input (text, password, etc.)
                value={value}                   // The current value of the input
                onChange={onChange}             // Event handler for the input change event
                required={required}             // HTML5 required attribute
                placeholder={placeholder}       // Placeholder text for the input
                className={`${className} mt-1 py-[0.375rem] px-3 w-full outline-none border border-light-gray rounded-[0.375rem] text-dark text-[0.9375rem] transition-all focus:border-dc-blue focus:ring-4 focus:ring-dc-blue/30`} // Styling classes
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

// Default export of the Input component
export default Input;
