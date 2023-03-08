import axios from "axios";

function getHeaders() {
  let token = localStorage.getItem("Token");
  return {
    Authorization: token ? `Token ${token}` : "",
  };
}

function createAxiosInstance() {
  var url = "http://localhost:8000/api";
  if (process.env.REACT_APP_HOST_IP_ADDRESS) {
    url = process.env.REACT_APP_HOST_IP_ADDRESS;
  }
  const instance = axios.create({
    baseURL: url,
    headers: getHeaders(),
  });

  instance.defaults.timeout = 5000;

  instance.interceptors.request.use((request) => {
    if (request.method === "POST" && !request.headers.includes("content-type"))
      request.headers["content-type"] = "application/json";
    return request;
  });

  instance.interceptors.response.use(
    (response) => response,
    (err) => {
      if (err || err.response.status === 403 || err.response.status === 401) {
        localStorage.clear();
        // window.location.reload();
      }
      throw err;
    }
  );

  return instance;
}

export default createAxiosInstance;
