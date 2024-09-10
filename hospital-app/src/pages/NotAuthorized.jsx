import error from "../assets/img/error.svg"
import Button from "../components/ui/Button.jsx";
import {useNavigate} from "react-router-dom";

const NotAuthorized = () => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center h-screen justify-center">
                <div className="flex flex-col max-w-screen-2xl justify-center items-center">
                    <img src={`${error}`} alt="" className="w-full"/>
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-dark mb-6 text-3xl">Not Authorized</h1>
                        <p className="font-medium text-muted text-center">It seems you are tying to access the route you are not allowed to.</p>
                        <Button
                            className="mt-6"
                            onClick={() => {navigate("/dashboard", {replace: true})}}>
                            Go to Home
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NotAuthorized;