import API from "./axios.js";

export  const fetchAppointments = async (filters = {}, page = 1, limit = 10) => {
    const {data} = await API.get("/appointments", {
        params: {
            ...filters,
            page,
            limit
        }
    });
    return data;
}