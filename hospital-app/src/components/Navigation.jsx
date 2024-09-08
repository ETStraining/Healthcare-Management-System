import {Link, useLocation} from "react-router-dom";
import {RiPieChart2Fill as Home} from "react-icons/ri";
import {LiaStethoscopeSolid as Steto} from "react-icons/lia";
import {FaUsers as Users, FaWheelchair as Wheel} from "react-icons/fa6";
import {MdOutlinePayment as Payment} from "react-icons/md";
import {IoPeopleOutline as Dep} from "react-icons/io5";
import PropTypes from "prop-types";

const links = [
    {
        path: "/dashboard",
        label : "Dashboard",
        Icon: Home
    },
    {
        path: "/dashboard/appointments",
        label : "Appointments",
        Icon: Steto
    },
    {
        path: "/dashboard/staff",
        label : "Staff",
        Icon: Users
    },
    {
        path: "/dashboard/patients",
        label : "Patients",
        Icon: Wheel
    },
    {
        path: "/dashboard/departments",
        label : "Departments",
        Icon: Dep
    },
    {
        path: "/dashboard/payments",
        label : "Payments",
        Icon: Payment
    }
]

const Navigation = () => {
    return (
        <nav className={"mt-10"}>
            <h4 className="text-muted hidden xl:block">MEDICINE</h4>
            <div className="mt-4 flex items-center xl:items-start flex-col space-y-4">
                {links.map((link, idx) => (
                    <NavItem
                        key={idx}
                        to={link.path}
                        Icon={link.Icon}
                        label={link.label}
                    />
                ))}
            </div>
        </nav>
    )
}

const NavItem = ({to, label, Icon}) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return(
        <Link
            to={to}
            className={`py-2 flex items-center gap-3 font-bold ${isActive ? "text-dc-blue" : "text-dark-gray"}`}
        >
            <span className={`${isActive? "text-dc-blue/60": "text-muted/60" }`}>
                <Icon />
            </span>
            <span className="hidden xl:inline-flex">{label}</span>
        </Link>
    )
}

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired
}


export default Navigation;