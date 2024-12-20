import axios from "axios";
import { auth } from "@/lib/firebase";
import { error } from "console";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001", // API URL (추후 환경변수에서 관리)
  timeout: 5000,                    // 요청 타임아웃
});

axiosInstance.interceptors.request.use(
  async (config) => {
    console.log("auth.currentUser:", auth.currentUser);
    if (auth.currentUser) {
      try {
        const token = await auth.currentUser.getIdToken(true); // Firebase ID 토큰
        config.headers.Authorization = `Bearer ${token}`;
      } catch (error) {
        console.error("Failed to get Firebase token:", error);
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response, // 응답이 성공적이면 그대로 반환
  async (error) => {
    // 401 에러 발생 시 처리
    if (error.response?.status === 401) {
      try {
        if (auth.currentUser) {
          const token = await auth.currentUser.getIdToken(true); // Firebase 토큰 강제 갱신
          error.config.headers.Authorization = `Bearer ${token}`;
          return axiosInstance.request(error.config); // 갱신된 토큰으로 재요청
        }
      } catch (tokenError) {
        console.error("Failed to refresh Firebase token:", tokenError);
      }
    }
    return Promise.reject(error); // 다른 에러는 그대로 반환
  }
);

export default axiosInstance;
