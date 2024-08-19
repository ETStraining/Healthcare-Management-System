import SectionTop from "../components/SectionTop.jsx";
import Container from "../components/Container.jsx";
import ContactListing from "../components/ContactListing.jsx";
import img from "../assets/img/cont.png"
import ContactForm from "../components/forms/ContactForm.jsx";

const Contact = () => {
    return(
        <>
            <SectionTop current={"contact us"}>
                <SectionTop.Title>Contact Us</SectionTop.Title>
                <SectionTop.Description>
                    Ensure the best care for your loved ones with our skilled doctors, whether you need urgent medical attention, emergency treatment, or just a routine consultation.
                </SectionTop.Description>
            </SectionTop>

            <section className="my-[100px]">
                <Container>
                    <ContactListing />
                    <div className="mt-60 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="w-full lg:w-1/2 2xl:w-5/12">
                            <img
                                src={`${img}`}
                                className="h-auto max-w-full"
                                alt="Side Image"
                            />
                        </div>
                        <ContactForm className="w-full lg:w-1/2 2xl:w-7/12"/>
                    </div>
                </Container>
            </section>
        </>
    )
}


export default Contact;