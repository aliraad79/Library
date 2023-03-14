import axios from "./axios.js";

export const addLibrary = (data) => {
  return axios().post(`/library/`, data);
};

export const getLibraries = () => {
  return axios().get(`/library`);
};

export const getLibraryInfo = ({ id }) => {
  return axios().get(`/library/${id}`);
};

export const getAllFileTypes = () => {
  return axios().get(`/library/mediaTypes`);
};

export const setLibraryAsShared = (id, data) => {
  return axios().patch(`/library/${id}`, data);
};
