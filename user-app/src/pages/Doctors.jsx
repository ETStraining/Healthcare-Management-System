import SectionTop from "../components/SectionTop.jsx";
import Container from "../components/Container.jsx";
import DoctorCard from "../components/DoctorCard.jsx";
import {containerVariants} from "../helpers/animations.js";
import {motion} from "framer-motion";

const Doctors = () => {
    return(
        <>
            <SectionTop current={"doctors"}>
                <SectionTop.Title>
                    Doctors
                </SectionTop.Title>
                <SectionTop.Description>
                    Ensure the best care for your loved ones with our skilled doctors, whether you need urgent medical attention, emergency treatment, or just a routine consultation.
                </SectionTop.Description>
            </SectionTop>
            <section className="my-[100px]">
                <Container>
                    <motion.div
                        className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                    </motion.div>
                </Container>
            </section>
        </>
    )
}


export default Doctors;