import SectionTop from "../components/SectionTop.jsx";
import Container from "../components/Container.jsx";
import {departments} from ".././helpers/constants.js"
import {Link} from "react-router-dom";


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
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {
                            departments.map((dep, idx) => (
                                <div key={idx} className="flex flex-col h-full p-4 border border-muted/40 rounded-lg shadow-lg">
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
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </section>
        </>
    )
}


export default Departments;