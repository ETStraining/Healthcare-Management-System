import PropTypes from "prop-types";

const THead = ({headers}) => {
    return(
        <thead className="uppercase">
        <tr>
            {
                headers.map((title, idx) => (
                    <th
                        key={idx}
                    >{title}</th>
                ))
            }
        </tr>
        </thead>
    )
}


THead.propTypes = {
    headers: PropTypes.array.isRequired
}



export default THead;