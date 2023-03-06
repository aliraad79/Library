import axios from "./axios.js";

export const addMedia = ({ library, data, title }) => {
  var formData = new FormData();

  formData.append("library", library);
  formData.append("title", title);
  formData.append("data", data);
  
  return axios().post(`/library/media`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getMediaInfo = ({ id }) => {
  return axios().get(`/library/media/${id}`);
};
