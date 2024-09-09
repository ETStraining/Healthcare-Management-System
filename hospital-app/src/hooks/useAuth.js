import {useMutation} from "@tanstack/react-query";
import {login as ApiLogin} from "../api/authAPI.js";
import {useUser} from "../context/UserContext.jsx";


export const useLogin = () => {
    const {login} = useUser();
    return useMutation({
        mutationFn: async (credentials) => {
            const data = await ApiLogin(credentials);
            const { user, token } = data;

            login(user, token);

            return data;
        }
    });
}

export const useLogout = () => {
    const {logout} = useUser();
    logout();
}