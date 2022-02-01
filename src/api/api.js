import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "fe13a1cc-d612-458c-8548-db77dcbaa68a" },
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
  login(credentials) {
    return axiosInstance.post(`auth/login`, credentials);
  },
  logout() {
    return axiosInstance.delete(`auth/login`);
  },
};

export const profileAPI = {
  getStatus(userId) {
    return axiosInstance.get(`/profile/status/${userId}`);
  },
  updateStatus(statusText) {
    return axiosInstance.put(`/profile/status/`, { status: `${statusText}` });
  },
  updateAvatar(avatar) {
    const formData = new FormData();
    formData.append("image", avatar);
    console.log("formData: ", formData);
    return axiosInstance.put(`/profile/photo`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
