import PropTypes from "prop-types";


// This will act the wrapper of every content of the page to keep everything centered🤗

function Container({children, className}) {
    return (
        <div className={`${className} container mx-auto px-8 md:px-16 2xl:px-56`}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}


export default Container;