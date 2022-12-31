import axios from "axios";

const instance = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMyIsIkhldEhhblN0cmluZyI6IjExLzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTE3MTIwMDAwMCIsIm5iZiI6MTY1Mjg5MzIwMCwiZXhwIjoxNjgxMzE4ODAwfQ.j4z4TCOvHfc7Iq372RxnnLGogFR3Yf1bukUxTce5WTc",
  },
});

instance.interceptors.request.use((config) => {
  const authProfile = JSON.parse(localStorage.getItem("authProfile"));

  if (authProfile) {
    config.headers = {
      ...config.headers,
      token: authProfile.token,
    };
  }

  return config;
});

export default instance;
