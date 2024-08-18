import Input from "../ui/Input.jsx";
import Textarea from "../ui/Textarea.jsx";
import Button from "../ui/Button.jsx";
import PropTypes from "prop-types";

const ContactForm = ({className}) => {
    return(
        <div className={`form-wrapper ${className}`}>
            <h3 className="text-[1.125rem] font-bold text-dark mb-6">Get in Touch!</h3>
            <form>
                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        <Input
                            onChange={() => {}}
                            label={"Your name"}
                            placeholder={"John Doe"} required/>
                        <Input
                            onChange={() => {}}
                            type="email"
                            label={"Your Email"}
                            placeholder={"example@gmai.com"} required />
                    </div>
                    <Input
                        onChange={() => {}}
                        label={"Your subject"}
                        placeholder={"Subject title"} />
                    <Textarea
                        onChange={() => {}}
                        label={"Message body"}
                        placeholder={"Message here"} required />
                    <Button onClick={() => {}}>Submit</Button>
                </div>
            </form>
        </div>
    )
}

ContactForm.propTypes = {
    className: PropTypes.string
}

export default ContactForm;