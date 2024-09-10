import API from "./axios.js";


export const createStaff = async (staffData) => {
    const {data} = await API.post('/auth/signup', staffData);
    return data;
}

export const fetchStaff = async (filters = {}, page = 1, limit = 10) => {
    const { data } = await API.get('/staff/all', {
        params: {
            ...filters,
            page,
            limit
        }
    });
    return data;
};

export const fetchStaffById = async (staffId) => {
    const {data} = await API.get(`/staff/single/${staffId}`);
    return data;
}

export const deleteStaff = async (staffId) => {
    const {data} = await API.delete(`/staff/${staffId}`);
    return data;
}
