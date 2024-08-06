import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = "Bearer ${accessToken}";
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      try {
        const response = await axiosInstance.post("/member/reissue", null, {
          headers: { Authorization: "Bearer ${refreshToken}" },
        });
        const { accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        originalRequest.headers.Authorization = "Bearer ${accessToken}";
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
