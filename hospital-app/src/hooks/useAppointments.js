import {useQuery} from "@tanstack/react-query";
import {fetchAppointments} from "../api/appointmentAPI.js";

export const useAppointments = (filters = {}, page = 1, limit = 10) => {
    return useQuery({
        queryKey: ["appointments", filters, page, limit],
        queryFn: () => fetchAppointments(filters, page, limit)
    })
}