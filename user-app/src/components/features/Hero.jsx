import Container from "../Container.jsx";
import logo from "../../assets/img/capstone.png";
import Button from "../ui/Button.jsx";
import hero from "../../assets/img/hero.png";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.2, // Start after 1.2 seconds
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.4, // Start after 1.4 seconds
            duration: 0.5,
            ease: "easeOut"
        }
    }
};


function Hero() {
    const navigate = useNavigate();
    return (
        <div className="py-[170px] relative w-full">
            <div className="absolute w-full h-full inset-0"/>
            <Container className="relative z-3">
                <motion.div
                    className="flex flex-col lg:flex-row items-center gap-6"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={textVariants}>
                        <img src={`${logo}`} className="h-[50px] mb-5" alt=""/>
                        <h1 className="text-dark font-bold text-5xl capitalize leading-[60px] mb-5">Meet the <br/> best
                            Doctors</h1>
                        <p className="max-w-[600px] font-medium text-dark/80 mb-5">
                            Experience seamless access to top healthcare professionals for immediate assistance,
                            emergency care, or personalized consultations. Your health journey begins with us.
                        </p>
                        <motion.div variants={buttonVariants} className="flex flex-col items-start gap-2">
                            <Button onClick={() => navigate("/booking-appointment")}>Make Appointment</Button>
                            <p className="font-medium text-dark/80">T&C apply. Please read Terms and Conditions</p>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={imageVariants}>
                        <img src={`${hero}`} alt=""/>
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    )
}


export default Hero;