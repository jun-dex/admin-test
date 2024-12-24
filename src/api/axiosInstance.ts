import axios from "axios";
import { getFirebaseToken } from "@/utils/firebase-token";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001", // API URL (추후 환경변수에서 관리)
  timeout: 5000,                    // 요청 타임아웃
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const firebaseToken = await getFirebaseToken();
    if (firebaseToken) {
      config.headers.Authorization = `Bearer ${firebaseToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
