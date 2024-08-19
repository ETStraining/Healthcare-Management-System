import Container from "../Container.jsx";
import logo from "../../assets/img/capstone.png";
import Button from "../ui/Button.jsx";
import hero from "../../assets/img/hero.png";
import {useNavigate} from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    return (
        <div className="py-[170px] relative w-full">
            <div className="absolute w-full h-full inset-0"/>
            <Container className="relative z-3">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                    <div>
                        <img src={`${logo}`} className="h-[50px] mb-5" alt=""/>
                        <h1 className="text-dark font-bold text-5xl capitalize leading-[60px] mb-5">Meet the <br/> best
                            Doctors</h1>
                        <p className="max-w-[600px] font-medium text-dark/80 mb-5">Experience seamless access to top
                            healthcare professionals for immediate assistance, emergency care, or personalized
                            consultations. Your health journey begins with us.</p>
                        <div className="flex flex-col items-start gap-2">
                            <Button onClick={() => (navigate("/booking-appointment"))}>Make Appointment</Button>
                            <p className="font-medium text-dark/80">T&C apply. Please read Terms and Conditions</p>
                        </div>
                    </div>
                    <div>
                        <img src={`${hero}`} alt=""/>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Hero;