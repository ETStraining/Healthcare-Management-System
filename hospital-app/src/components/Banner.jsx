import PropTypes from "prop-types";

const Banner = ({ type = "warning", message }) => {
    const bannerStyles = {
        success: "bg-green-100 border-l-4 border-l-green-800 text-green-800",
        warning: "bg-yellow-100 border-l-4 border-l-yellow-800 text-yellow-800",
        danger: "bg-red-100 border-l-4 border-l-red-800 text-red-800",
    };

    return (
        <div className={`${bannerStyles[type]} p-4 rounded-md`}>
            {message}
        </div>
    );
};

Banner.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string.isRequired,
}


export default Banner;