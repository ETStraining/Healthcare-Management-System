import Container from "../components/Container.jsx";
import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import logo from "../assets/img/capstone.png";

const Login = () => {
    const navigate = useNavigate();
    return(
        <div className="min-h-screen w-full flex items-center justify-center">
            <Container>
                <div className="w-full md:w-1/2 mx-auto">
                    <div className="form-wrapper flex flex-col gap-6 items-center">
                        <Link className="font-semibold flex items-center gap-2 text-dark text-2xl"  to={"/"}>
                            <img src={`${logo}`} className="h-[30px]" alt={"Logo"} />
                            <span>CareSync</span>
                        </Link>
                        <form className="w-full">
                            <div className="flex flex-col gap-4">
                                <Input onChange={() => {}} label={"User name or Email"} placeholder={"example@gmail.com"} required />
                                <Input onChange={() => {}} type={"password"} label={"Password"} placeholder={"Password"} required />
                                <Button onClick={() => {navigate("/dashboard")}}>Login</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Login;