import { ImAidKit as Aid } from "react-icons/im";

const HomeCard = () => {
    return(
        <div className="bg-dc-blue/15 min-h-[88px] py-5 flex items-center gap-7 justify-center px-5 rounded-lg">
            <span className="text-dc-blue text-6xl">
                <Aid />
            </span>
            <div className="flex flex-col gap-2">
                <h3 className="text-dark font-bold">Appointments</h3>
                <span className="text-4xl font-bold text-dc-blue">123</span>
            </div>
        </div>
    )
}


export default HomeCard;