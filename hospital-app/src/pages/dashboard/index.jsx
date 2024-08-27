import HomeCard from "../../components/HomeCard.jsx";
import { ImAidKit as Aid } from "react-icons/im";
import { RiWheelchairFill as Chair } from "react-icons/ri";
import { FaHospitalUser as Patient } from "react-icons/fa";
import { TbReportMoney as Money } from "react-icons/tb";
const Dashboard = () => {
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <HomeCard Icon={Aid} title={"Appointments"} count={30} />
                <HomeCard Icon={Patient} title={"Patients"} count={10} />
                <HomeCard Icon={Chair} title={"Operations"} count={15} />
                <HomeCard Icon={Money} title={"Earning"} count={200} />
            </div>
        </>
    )
}


export default Dashboard;