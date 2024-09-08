import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {createStaff, fetchStaff, fetchStaffById} from "../api/staffAPI.js";

export const useStaff = (filters = {}, page = 1, limit = 10) => {
    return useQuery({
        queryKey: ["staff", filters, page, limit],
        queryFn: () => fetchStaff(filters, page, limit)
    });
};

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