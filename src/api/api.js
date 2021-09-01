import axios from "axios";

const axi = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "2347c37c-5c55-40d1-89f1-48177d8cbf03" },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return axi
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  followUser(userId) {
    return axi.post(`follow/${userId}`);
  },

  unfollowUser(userId) {
    return axi.delete(`follow/${userId}`);
  },
  authMe() {
    return axi.get(`auth/me`);
  },
};
