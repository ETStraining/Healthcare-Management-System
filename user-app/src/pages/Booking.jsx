import Container from "../components/Container.jsx";
import SectionTop from "../components/SectionTop.jsx";
import BookingForm from "../components/forms/BookingForm.jsx";
import {motion} from "framer-motion";

const Booking = () => {
    return(
        <>
            <SectionTop current="APPOINTMENT">
                <SectionTop.Title>Book an Appointment</SectionTop.Title>
                <SectionTop.Description>
                    Ensure the best care for your loved ones with our skilled doctors, whether you need urgent medical attention, emergency treatment, or just a routine consultation.
                </SectionTop.Description>
            </SectionTop>

            <section className="my-[100px]">
                <Container>
                    <motion.div
                        className="flex items-center justify-center"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity:1, y:0}}
                        transition={{delay: 1, duration: 1}}
                    >
                        <div className="w-full lg:w-2/3">
                            <BookingForm />
                        </div>
                    </motion.div>
                </Container>
            </section>
        </>
    )
}


export default Booking;