import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "2347c37c-5c55-40d1-89f1-48177d8cbf03" },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followUser(userId) {
    return axiosInstance.post(`follow/${userId}`);
  },
  unfollowUser(userId) {
    return axiosInstance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    return axiosInstance.get(`profile/${userId}`);
  },
};

export const authAPI = {
  authMe() {
    return axiosInstance.get(`auth/me`);
  },
};
