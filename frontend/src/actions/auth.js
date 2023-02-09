import axios from "./axios.js";

export const Login = (data) => {
  console.log("Login!");
  // return axios().post(`/auth/jwt/create/`, data);
};

export const signUp = (data) => {
  console.log("Sign Up ", data);
  // return axios().post(`/auth/users/`, data);
};

export const logOut = (data) => {
  console.log("Log Out!");
  // return axios().post(`/auth/users/`, data);
};