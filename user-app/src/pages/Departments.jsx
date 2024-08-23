import SectionTop from "../components/SectionTop.jsx";
import Container from "../components/Container.jsx";


const Departments = () => {
    return(
        <>
            <SectionTop current={"departments"}>
                <SectionTop.Title>
                    Departments
                </SectionTop.Title>
                <SectionTop.Description>
                    Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.
                </SectionTop.Description>
            </SectionTop>
            <section className="my-[100px]">
                <Container>

                </Container>
            </section>
        </>
    )
}


export default Departments;