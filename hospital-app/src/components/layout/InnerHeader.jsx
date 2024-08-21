import PropTypes from "prop-types";

const InnerHeader = ({children, title, className}) => {
    return(
        <div className={`${className} mb-12 pb-4 border-b border-dark-gray/50`}>
            <h1 className="text-dark/80 font-bold text-4xl">{title}</h1>
            {children}
        </div>
    )
}

InnerHeader.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    className: PropTypes.string
}


export default InnerHeader;