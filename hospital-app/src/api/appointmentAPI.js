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


export const approveAppointment = async (appointmentId, comment) => {
    const {data} = await API.post(`/appointments/${appointmentId}/approve`, comment);
    return data;
}

export const rejectAppointment = async (appointmentId, comment) => {
    const {data} = await API.post(`/appointments/${appointmentId}/reject`, comment);
    return data;
}