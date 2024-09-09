import HomeCard from "../../components/HomeCard.jsx";
import { ImAidKit as Aid } from "react-icons/im";
import { RiWheelchairFill as Chair } from "react-icons/ri";
import { FaHospitalUser as Patient } from "react-icons/fa";
import { TbReportMoney as Money } from "react-icons/tb";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Jan', patients2019: 150, patients2020: 170 },
    { month: 'Feb', patients2019: 120, patients2020: 180 },
    { month: 'Mar', patients2019: 180, patients2020: 190 },
    { month: 'Apr', patients2019: 200, patients2020: 200 },
    { month: 'May', patients2019: 170, patients2020: 210 },
    { month: 'Jun', patients2019: 220, patients2020: 220 },
    { month: 'Jul', patients2019: 210, patients2020: 230 },
    { month: 'Aug', patients2019: 250, patients2020: 240 },
    { month: 'Sep', patients2019: 230, patients2020: 250 },
    { month: 'Oct', patients2019: 190, patients2020: 260 },
    { month: 'Nov', patients2019: 140, patients2020: 270 },
    { month: 'Dec', patients2019: 160, patients2020: 280 },
];

const Dashboard = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <HomeCard Icon={Aid} title={"Appointments"} count={30}/>
                <HomeCard Icon={Patient} title={"Patients"} count={10}/>
                <HomeCard Icon={Chair} title={"Operations"} count={15}/>
                <HomeCard Icon={Money} title={"Earning"} count={200}/>
            </div>

            <div className="mt-8 h-96 w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Patient Trends (2019 vs 2020)</h2>
                    
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="month" axisLine={false} tickLine={false}/>
                        <YAxis axisLine={false} tickLine={false}/>
                        <Tooltip/>
                        <Legend align="right" verticalAlign="top"/>
                        <Line type="monotone" dataKey="patients2019" stroke="#8884d8" name="Patients 2019"/>
                        <Line type="monotone" dataKey="patients2020" stroke="#82ca9d" name="Patients 2020"/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};


export default Dashboard;
