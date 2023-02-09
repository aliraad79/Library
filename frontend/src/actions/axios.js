import axios from "axios";

function getHeaders() {
  let userData = localStorage.getItem("userJWT");
  if (userData) userData = JSON.parse(userData);
  return {
    Authorization:
      userData && userData.access ? `JWT ${userData.access}` : "",
  };
}


function createAxiosInstance() {
  const instance = axios.create({
    // baseURL: window.REACT_APP_API_URL || process.env.REACT_APP_API_URL,
    baseURL: "localhost:3000",
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
      if (err.response.status === 403 || err.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      }
      throw err;
    }
  );

  return instance;
}

export default createAxiosInstance;
