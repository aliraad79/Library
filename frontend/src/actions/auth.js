import axios from "./axios.js";

export const signIn = (data) => {
  return axios().post(`/auth/jwt/create/`, data);
};

export const signUp = (data) => {
  return axios().post(`/auth/users/`, data);
};