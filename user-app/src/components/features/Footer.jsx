import Container from "../Container.jsx";
import logo from "../../assets/img/capstone.png";
import { Link } from "react-router-dom";
import { FaChevronRight as Right } from "react-icons/fa6";
import { links } from "../../helpers/constants.js";
import { FiPhone as Phone } from "react-icons/fi";
import { FiMail as Mail } from "react-icons/fi";

const deps = ["General Consultation", "Gynecology", "Internal Medicine", "Pediatrics", "Dental care", "Orthopedic", "Cardiology"];

const Footer = () => {
    return (
        <footer className="pt-16 pb-6 bg-dark-blue">
            <Container>
                <div className="flex flex-col lg:flex-row gap-5 mb-6 items-start">
                    <div className="mb-6 md:mb-0 md:mr-5">
                        <Link className="font-semibold flex items-center gap-2 text-white text-2xl" to={"/"}>
                            <img src={logo} className="h-[30px]" alt={"Logo"} />
                            <span>CareSync</span>
                        </Link>
                        <p className="max-w-[600px] text-gray mt-4">
                            Experience seamless access to top healthcare professionals for immediate assistance, emergency care, or personalized consultations. Your health journey begins with us.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="">
                            <h5 className="footer-head mb-2">Company</h5>
                            <div className="flex flex-col gap-2 ml-1">
                                {links.map((link, idx) => (
                                    <Link key={idx} to={link.path} className="footer-link">
                                        <span>
                                            <Right size={12} />
                                        </span>
                                        <span>{link.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 ml-1">
                            <h5 className="footer-head">Departments</h5>
                            <div className="flex flex-col gap-2 ml-1">
                                {deps.map((dep, idx) => (
                                    <Link key={idx} to={"/departments"} className="footer-link">
                                        <span>
                                            <Right size={12} />
                                        </span>
                                        <span>{dep}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 ml-1">
                            <h5 className="footer-head">Contact us</h5>
                            <div className="flex flex-col gap-2 ml-1">
                                <a href={"mailto:contact@caresync.com"} className="flex items-center gap-2 text-gray hover:text-white transition-all">
                                    <span>
                                        <Mail />
                                    </span>
                                    <span>contact@caresync.com</span>
                                </a>
                                <a href={"tel:+25079115300"} className="flex items-center gap-2 text-gray hover:text-white transition-all">
                                    <span>
                                        <Phone />
                                    </span>
                                    <span>+25-079-115-300</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4 px-2 border-t border-t-muted/30">
                    <div className="flex flex-col md:flex-row items-center justify-between text-muted font-medium gap-4">
                        <p>2024 &copy; Caresync</p>
                        <div className="flex gap-3">
                            <Link className="hover:text-white transition-all" to={""}>Terms</Link>
                            <Link className="hover:text-white transition-all" to={""}>Privacy</Link>
                            <Link className="hover:text-white transition-all" to={"/contact"}>Contact</Link>
                            <Link className="hover:text-white transition-all" to={"/about"}>About us</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
