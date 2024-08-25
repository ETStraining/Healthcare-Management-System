import doc from "../assets/img/doc.jpg";
import { AiOutlineHeart as Heart } from "react-icons/ai";
import { MdAccessTime as Time } from "react-icons/md";
import { IoLocationOutline as Location } from "react-icons/io5";
import {itemVariants} from "../helpers/animations.js";
import {motion} from "framer-motion";

const DoctorCard = () => {
    return (
        <motion.div
            className="p-2"
            variants={itemVariants}
        >
            <div className="rounded-md border border-gray/20 shadow-md">
                <div className="relative overflow-hidden">
                    <img
                        src={`${doc}`}
                        className="min-w-[236px] w-full h-full rounded-md"
                        alt=""
                        style={{ transform: "scale(1)" }}
                        onMouseOver={(e) => {
                            e.target.style.transition = "transform 0.5s ease-in-out";
                            e.target.style.transform = "scale(1.1)";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transition = "transform 0.5s ease-in-out";
                            e.target.style.transform = "scale(1)";
                        }}
                    />
                    <span className="absolute top-2 right-2 cursor-pointer h-8 w-8 rounded-full flex items-center justify-center border border-red-100 text-red-400 bg-red-50 shadow-md shadow-red-200 hover:bg-red-400 hover:text-white transition-all">
            <Heart size={20} />
          </span>
                </div>
                <div className="p-3">
                    <div className="mb-3">
                        <h4 className="font-bold text-dark text-[1.125rem]">Calvin Carlo</h4>
                        <p className="text-muted text-sm">Eye Care</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 text-muted">
                            <span className="text-dc-blue">
                                <Location />
                            </span>
                            <p>63, PG Shustoke, KG</p>
                        </div>
                        <div className="flex items-center gap-2 text-muted">
                            <span className="text-dc-blue">
                                <Time />
                            </span>
                            <p>Mon: 2:00PM - 6:00PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DoctorCard;