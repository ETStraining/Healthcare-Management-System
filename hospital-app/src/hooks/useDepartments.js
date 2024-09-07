import {
    useMutation,
    useQuery,
    useQueryClient} from "@tanstack/react-query";
import {
    createDepartment,
    deleteDepartment,
    fetchDepartmentById,
    fetchDepartments,
    updateDepartment} from "../api/departmentAPI.js";

export const useDepartments = () => {
    return useQuery({
        queryKey: ["departments"],
        queryFn: fetchDepartments
    })
}

export const useDepartment = (departmentId) => {
    return useQuery({
        queryKey: ["department", departmentId],
        queryFn: () => fetchDepartmentById(departmentId),
        enabled: !!departmentId
    })
}

export const useCreateDepartment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (departmentData) => createDepartment(departmentData),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["departments"]})
        }
    })
}

export const useUpdateDepartment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ departmentId, departmentData }) => updateDepartment({ departmentId, departmentData }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["departments"] });
            queryClient.invalidateQueries({ queryKey: ["department", departmentId] });
        },
    });
};

export const useDeleteDepartment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (departmentId) => deleteDepartment(departmentId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["departments"] });
        },
    });
};