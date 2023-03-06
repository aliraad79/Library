import axios from "./axios.js";

export const addAttachment = ({ data, name, media }) => {
  var formData = new FormData();
  
  if (data.type != null) {
    formData.append("fileValue", data);
  } else {
    formData.append("textValue", data);
  }

  formData.append("name", name);
  formData.append("media", media);
  return axios().post(`/library/attachment`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getAttachmentInfo = ({ id }) => {
  return axios().get(`/library/attachment/${id}`);
};
