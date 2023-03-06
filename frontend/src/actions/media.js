import axios from "./axios.js";

export const addMedia = ({ library, data }) => {
  return axios().post(`/library/media`, { library, data });
};

export const getMediaInfo = ({ id }) => {
  return axios().get(`/library/media/${id}`);
};
