import Container from "./Container.jsx";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { FaChevronRight as ChevRight } from "react-icons/fa6";


const SectionTop = ({children, current}) => {
    return (
        <section className="py-[170px] relative w-full bg-mut-blue">
            <Container>
                <div className="flex items-center justify-center mt-5">
                    <div className="text-center">
                        {children}
                        <div className="bg-white font-normal inline-flex flex gap-2 text-sm mt-7 items-center py-1 px-2 rounded-md">
                            <Link to={"/"} className="text-dark">CARESYNC</Link>
                            <ChevRight size={10} />
                            <Link to={""} className="uppercase text-dc-blue">{current}</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}


const SectionTitle = ({children}) => {
    return(
        <h3 className="font-bold text-dark text-3xl mb-5">
            {children}
        </h3>
    )
}

const SectionDescription = ({children}) => {
    return(
        <h3 className="max-w-[600px] text-muted">
            {children}
        </h3>
    )
}

SectionTop.Title = SectionTitle;
SectionTop.Description = SectionDescription;


const childrenProp = {
    children: PropTypes.node
};

const currentProp = {
    current: PropTypes.string.isRequired
};

SectionTop.propTypes = {
    ...childrenProp,
    ...currentProp
};
SectionTitle.propTypes = childrenProp;
SectionDescription.propTypes = childrenProp;



export default SectionTop;