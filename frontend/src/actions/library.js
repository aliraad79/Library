import axios from "./axios.js";

export const addLibrary = (data) => {
  return axios().post(`/library/`, data);
};


export const getLibraries = () => {
  return axios().get(`/library`);
};
