import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "d0be0b43-e7aa-4b9a-8e1c-e89f5a6c4d0c"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        return instance.get(`profile/` + userId);
    }
}
export const authAPI = {
    me() {
       return instance.get(`auth/me`);
    }
}


