import PropTypes from "prop-types";

function Button ({children, disabled = false, onClick, className, variant="primary"}) {
    const variantStyles = (variable) => {
        switch (variable) {
            case "primary":
                return `${disabled ? `bg-dc-blue/70` : `bg-dc-blue`}`
            case "danger":
                return `${disabled ? `bg-red-200` : `bg-red-400`}`
        }
    }
    return(
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${className} ${variantStyles(variant)}  px-5 py-2 text-white rounded-md ${disabled ? `cursor-not-allowed` : `cursor-pointer`}`}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    variant: PropTypes.string
}

export default Button;