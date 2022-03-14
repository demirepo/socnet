import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Credentials } from "../redux/authReducer";
import { ProfileDataType } from "../redux/profileReducer";
import {
  SubscriptionActionResponse,
  UsersResponseType,
} from "../redux/usersReducer";

const axiosInstance: AxiosInstance = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "fe13a1cc-d612-458c-8548-db77dcbaa68a" },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const ResultCodes = {
  Success: 0,
  Error: 1,
  "Captcha is required": 10,
};

type UserAPI = {
  getUsers: (
    currentPage: number,
    pageSize: number
  ) => Promise<AxiosResponse<UsersResponseType>>;
  followUser: (userId: number) => Promise<SubscriptionActionResponse>;
  unfollowUser: (userId: number) => Promise<SubscriptionActionResponse>;
  getProfile: (userId: number) => Promise<AxiosResponse<ProfileDataType>>;
};

export const usersAPI: UserAPI = {
  getUsers(currentPage, pageSize) {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`);
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

type AuthMeResponse = {
  data: { id: number; login: string; email: string };
  fieldsErrors: string | number[];
  messages: string[];
  resultCode: number;
};

type LoginResponse = {
  resultCode: number;
  messages: string[];
  data: {
    userId: number;
  };
};

type LogoutResponse = {
  resultCode: number;
  messages: string[];
  data: object;
};

type GetCaptchResponse = {
  url: string;
};
type AuthAPI = {
  authMe: () => Promise<AxiosResponse<AuthMeResponse>>;
  login: (credentials: Credentials) => Promise<AxiosResponse<LoginResponse>>;
  logout: () => Promise<AxiosResponse<LogoutResponse>>;
  getCaptcha: () => Promise<AxiosResponse<GetCaptchResponse>>;
};

export const authAPI: AuthAPI = {
  authMe() {
    return axiosInstance.get(`auth/me`);
  },
  login(credentials) {
    return axiosInstance.post(`auth/login`, credentials);
  },
  logout() {
    return axiosInstance.delete(`auth/login`);
  },
  getCaptcha() {
    return axiosInstance.get(`security/get-captcha-url`);
  },
};

type ProfileAPI = {
  getStatus: (userId: number) => Promise<AxiosResponse<string>>;
  updateStatus: (
    statusText: string
  ) => Promise<AxiosResponse<UpdateStatusResponse>>;
  updateAvatar: (file: any) => Promise<AxiosResponse<UpdateAvatarResponse>>;
};

type UpdateStatusResponse = {
  data: object;
  fieldsErrors: any[];
  messages: string[];
  resultCode: number;
};

type UpdateAvatarResponse = {
  data: {
    photos: { small: string; large: string };
  };
  messages: string[];
  resultCode: number;
};

export const profileAPI: ProfileAPI = {
  getStatus(userId) {
    return axiosInstance.get(`/profile/status/${userId}`);
  },
  updateStatus(statusText) {
    return axiosInstance.put(`/profile/status/`, { status: `${statusText}` });
  },
  updateAvatar(file) {
    console.log("api");
    const formData = new FormData();
    formData.append("image", file);
    return axiosInstance.put(`/profile/photo`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
