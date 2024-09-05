import axios from "axios";
const API = axios.create({
baseURL: "https://hm-system-923x.onrender.com/api",
headers: {
Accept:"application/json",
"Content-Type":"application/json"
}
})
const APIServices = {
getDepartments: async() => {
    const resp = await API.get("departments")
    return resp.data;
},
addDepartment: async (data) => {
    const resp = await API.post("/departments", data)
}

    
}
export default APIServices;