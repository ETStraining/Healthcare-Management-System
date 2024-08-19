import HomeCard from "../../components/HomeCard.jsx";

const Dashboard = () => {
    return(
        <>
            <div className="grid grid-cols-4 gap-5">
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </div>
        </>
    )
}


export default Dashboard;