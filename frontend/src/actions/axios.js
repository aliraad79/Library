import axios from "axios";

function getHeaders() {
  let token = localStorage.getItem("Token");
  return {
    Authorization: token ? `Token ${token}` : "",
  };
}

function createAxiosInstance() {
  const instance = axios.create({
    // baseURL: window.REACT_APP_API_URL || process.env.REACT_APP_API_URL,
    baseURL: "http://localhost:8000/api",
    // baseURL: "/api",
    headers: getHeaders(),
  });

  instance.defaults.timeout = 5000;

  instance.interceptors.request.use((request) => {
    if (request.method === "POST")
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
