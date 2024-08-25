import {departments} from "../helpers/constants.js";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {containerVariants, itemVariants} from "../helpers/animations.js";


const DepartmentsGrid = () => {
    return (
        <motion.div
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            {
                departments.map((dep, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="flex flex-col h-full p-4 border border-muted/40 rounded-lg shadow-lg">
                                    <span className="text-dc-blue">
                                        <dep.icon size={30}/>
                                    </span>
                        <div className="mt-4 flex flex-col flex-grow">
                            <h3 className="text-dark font-bold text-[1.125rem]">{dep.name}</h3>
                            <p className="text-muted my-3">{dep.description}</p>
                            <div className="mt-auto">
                                <Link to={""} className="text-dc-blue font-semibold">
                                    Read More
                                    <span className="ml-1">→</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))
            }
        </motion.div>
    )
}


export default DepartmentsGrid