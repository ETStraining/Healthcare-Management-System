import Container from "../components/Container.jsx";
import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";
import {Link, Navigate, useNavigate} from "react-router-dom";
import logo from "../assets/img/capstone.png";
import {useState} from "react";
import {useLogin} from "../hooks/useAuth.js";
import {toast} from "react-toastify";
import {useUser} from "../context/UserContext.jsx";

const Login = () => {
    const {user} = useUser();
    const navigate = useNavigate();
    const {mutate, isPending} = useLogin();
    const initialCredentials = {
        email: "",
        password: ""
    }
    const [credentials, setCredential] = useState(initialCredentials);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredential((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        mutate(credentials, {
            onSuccess: (data) => {
                navigate("/dashboard");
                const {user} = data;
                toast.success(`Welcome ${user.firstName}`)
            },
            onError: (error) => {
                toast.error("Login failed. Please check your credentials.");
            }
        })
    }

    if (user) {
        return <Navigate to="/dashboard" />;
    }

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
                                <Input
                                    onChange={handleChange}
                                    name={"email"}
                                    label={"User name or Email"}
                                    placeholder={"example@gmail.com"} required />
                                <Input
                                    onChange={handleChange}
                                    name={"password"}
                                    type={"password"}
                                    label={"Password"} placeholder={"Password"} required />
                                <Button onClick={handleLogin}>
                                    {
                                        isPending ?
                                            (<>
                                                <div className="flex items-center justify-center">
                                                    <span>Logging in</span>
                                                </div>
                                            </>) : "Login"
                                    }
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Login;