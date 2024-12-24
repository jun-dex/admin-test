import axiosInstance from "@/api/axiosInstance";
import axios from "axios";

/**
 * 사용자 토큰 확인
 * @returns 서버 응답 데이터
 */
export const loginUser = async () => {
  try {
    const response = await axiosInstance.get("/auth/verify-token");
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error logging in:", error);
      throw error.response?.data || error.message;
    } else {
      console.error("Unexpected error logging in:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};
