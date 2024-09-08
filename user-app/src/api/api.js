import API from "hospital-app/src/api/axios.js";

export const fetchDepartments = async () => {
    const { data } = await API.get("/departments");
    return data;
}

export const fetchStaff = async (filters = {}) => {
    const { data } = await API.get('/staff/all', {params: filters});
    return data;
};


export const createAppointment = async (appointment) => {
    const {data} = await API.post("/appointments", appointment);
    return data;
}