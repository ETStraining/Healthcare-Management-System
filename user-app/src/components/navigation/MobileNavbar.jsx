import Backdrop from "../Backdrop.jsx";
import {createContext, useEffect} from "react";
import logo from "../../assets/img/capstone.png";
import {Link, NavLink} from "react-router-dom";
import {IoClose as Close} from "react-icons/io5";
import PropTypes from "prop-types";

const NavigationContext = createContext(undefined);

const NavigationProvider = ({children, handleClose}) => (
    <NavigationContext.Provider value={handleClose}>
        {children}
    </NavigationContext.Provider>
)

const NavigationTitle = ({handleClose}) => {
    return(
        <div className="flex items-center justify-between">
            <Link className="font-semibold flex items-center gap-2 text-dark text-2xl" to={"/"}>
                <img src={`${logo}`} className="h-[20px]" alt={"Logo"}/>
                <span>CareSync</span>
            </Link>
            <span onClick={handleClose} className="cursor-pointer">
                <Close size={24}/>
            </span>
        </div>
    )
}

const MobileNavbar = ({links, handleClose,}) => {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleClose]);


    return (
        <Backdrop onClick={handleClose} className={"justify-end block lg:hidden"}>
            <NavigationProvider handleClose={handleClose}>
                <div className="w-[350px] md:w-[420px] h-full bg-white p-6">
                    <NavigationTitle handleClose={handleClose} />
                    <div className="flex flex-col mt-6 font-medium">
                        {
                            links.map((link, idx) => (
                                <NavLink
                                    key={idx}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `uppercase py-4 border-b border-b-muted text-sm font-semibold text-dark/80 hover:text-dc-blue ${isActive ? 'text-dc-blue' : ''}`
                                    }
                                >{link.label}</NavLink>
                            ))
                        }
                    </div>
                </div>
            </NavigationProvider>
        </Backdrop>
    )
}


MobileNavbar.propTypes = {
    links: PropTypes.array,
    handleClose: PropTypes.func
}


export default MobileNavbar;