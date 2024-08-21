import PropTypes from "prop-types";

function Button ({children, disabled = false, onClick, className}) {
    return(
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${className}  px-5 py-2 text-white rounded-md ${disabled ? `cursor-not-allowed bg-dc-blue/70` : `cursor-pointer bg-dc-blue`}`}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
}

export default Button;