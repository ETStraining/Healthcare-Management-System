import API from "./axios.js";


export const createStaff = async (staffData) => {
    const {data} = await API.post('/auth/signup', staffData);
    return data;
}

export const fetchStaff = async (filters = {}) => {
    const { data } = await API.get('/staff/all', {params: filters});
    return data;
};

export const fetchStaffById = async (staffId) => {
    const {data} = await API.get(`/staff/single/${staffId}`);
    return data;
}
