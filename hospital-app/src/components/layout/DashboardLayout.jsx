import logo from "../../assets/img/capstone.png";
import {Link, Outlet} from "react-router-dom";
import Navigation from "../Navigation.jsx";
import { FaBell as Bell } from "react-icons/fa";
import avatar from "../../assets/img/avatar.png";

const DashboardLayout = () => {
    return(
        <>
            <div className="navigation w-6 xl:w-[256px] h-[100vh] p-5 fixed top-0 left-0 border-r border-light-gray">
                <Link className="font-semibold flex items-center xl:gap-2 xl:text-dark xl:text-2xl"  to={"/"}>
                    <img src={`${logo}`} className="h-[12x] xl:h-[30px]" alt={"Logo"} />
                    <span className="hidden xl:inline-flex">CareSync</span>
                </Link>
                <Navigation />
            </div>
            <div className="w-[calc(100vw-24px)] xl:w-[calc(100vw-256px)] float-right p-5">
                <div className="w-full flex items-center justify-end">
                    <div className="flex items-center gap-2">
                        <div className="relative text-dark-gray">
                            <span className="text-[24px] lg:text-[30px]">
                                <Bell className="rotate-45"/>
                            </span>
                            <span className="absolute text-[12px] lg:text-xs flex items-center justify-center h-5 w-5 lg:h-6 lg:w-6 bg-red-400 rounded-full -top-2 right-0 border border-white">
                                32
                            </span>
                        </div>
                        <Link to={"/profile"} className="h-8 w-8 lg:h-10 lg:w-10 border-2 border-light-gray rounded-full">
                            <img src={`${avatar}`} alt=""/>
                        </Link>
                    </div>
                </div>
                <main className="px-4 mt-6">
                    <Outlet/>
                </main>
            </div>
        </>
    )
}

export default DashboardLayout;