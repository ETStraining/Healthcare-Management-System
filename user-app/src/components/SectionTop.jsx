import Container from "./Container.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaChevronRight as ChevRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
        },
    },
};

const descriptionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            delay: 0.8,
            ease: "easeOut",
        },
    },
};

const SectionTop = ({ children, current }) => {
    return (
        <motion.section
            className="py-[170px] relative w-full bg-mut-blue"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
        >
            <Container>
                <div className="flex items-center justify-center mt-5">
                    <motion.div className="text-center">
                        {children}
                        <motion.div
                            className="bg-white font-normal inline-flex flex gap-2 text-sm mt-7 items-center py-1 px-2 rounded-md"
                            variants={descriptionVariants}
                        >
                            <Link to={"/"} className="text-dark">CARESYNC</Link>
                            <ChevRight size={10} />
                            <Link to={""} className="uppercase text-dc-blue">{current}</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </motion.section>
    );
};

const SectionTitle = ({ children }) => {
    return (
        <motion.h3
            className="font-bold text-dark text-3xl mb-5"
            variants={titleVariants}
        >
            {children}
        </motion.h3>
    );
}

const SectionDescription = ({ children }) => {
    return (
        <motion.h3
            className="max-w-[600px] text-muted"
            variants={descriptionVariants}
        >
            {children}
        </motion.h3>
    );
}

SectionTop.Title = SectionTitle;
SectionTop.Description = SectionDescription;

const childrenProp = {
    children: PropTypes.node,
};

const currentProp = {
    current: PropTypes.string.isRequired,
};

SectionTop.propTypes = {
    ...childrenProp,
    ...currentProp,
};
SectionTitle.propTypes = childrenProp;
SectionDescription.propTypes = childrenProp;

export default SectionTop;
