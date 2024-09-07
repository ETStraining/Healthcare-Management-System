import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {createStaff, fetchStaff, fetchStaffById} from "../api/staffAPI.js";

export const useStaff = (filters = {}) => {
    return useQuery({
        queryKey: ["staff", filters],
        queryFn: () => fetchStaff(filters)
    })
}

export const useCreateStaff = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (staffData) => createStaff(staffData),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["staff"]})
        }
    })
}

export const useOneStaff = (staffId) => {
    return useQuery({
        queryKey: ["staff", staffId],
        queryFn: () => fetchStaffById(staffId)
    })
}