import API from "./axios.js";

export const fetchDepartments = async () => {
    const { data } = await API.get("/departments");
    return data;
}

export const fetchDepartmentById = async (departmentId) => {
    const {data} = await API.get(`/departments/${departmentId}`);
    return data;
}

export const createDepartment = async (departmentData) => {
    const {data} = await API.post('departments', departmentData);
    return data;
}

export const updateDepartment = async ({departmentId, departmentData}) => {
    const {data} = await API.put(`/departments/${departmentId}`, departmentData);
    return data;
}

export const deleteDepartment = async (departmentId) => {
    const {data} = await API.delete(`/departments/${departmentId}`);
    return data;
}