import axios from "./axios.js";

export const addMedia = ({ library, data }) => {
  return axios().post(`/library/media`, { library, data });
};
