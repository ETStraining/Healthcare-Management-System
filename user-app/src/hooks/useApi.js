import {useMutation, useQuery} from "@tanstack/react-query";
import {createAppointment, fetchDepartments, fetchStaff} from "../api/api.js";


export const useDepartments = () => {
    return useQuery({
        queryKey: ["departments"],
        queryFn: fetchDepartments
    })
}

export const useStaff = (filters = {}) => {
    return useQuery({
        queryKey: ["staff", filters],
        queryFn: () => fetchStaff(filters)
    })
}


export const useCreateAppointment = () => {
    return useMutation({
        mutationFn: (appointment) => createAppointment(appointment),
    })
}