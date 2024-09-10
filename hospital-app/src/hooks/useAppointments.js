import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {approveAppointment, fetchAppointments, rejectAppointment} from "../api/appointmentAPI.js";

export const useAppointments = (filters = {}, page = 1, limit = 10) => {
    return useQuery({
        queryKey: ["appointments", filters, page, limit],
        queryFn: () => fetchAppointments(filters, page, limit)
    })
}

export const useApproving = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({appointmentId, formData}) => approveAppointment(appointmentId, formData),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["appointments"]})
        }
    })
}


export const useRejecting = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({appointmentId, formData}) => rejectAppointment(appointmentId, formData),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["appointments"]})
        }
    })
}