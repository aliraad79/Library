import axios from "./axios.js";

export const Login = (data) => {
  return axios().post(`/auth/token/login`, data);
};

export const signUp = (data) => {
  return axios().post(`/auth/users/`, data);
};

export const logOut = () => {
  return axios().post(`/auth/token/logout/`);
};
