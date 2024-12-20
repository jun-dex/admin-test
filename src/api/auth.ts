import axiosInstance from "@/api/axiosInstance";

/**
 * 사용자 토큰 확인
 * @returns 서버 응답 데이터
 */
export const loginUser = async () => {
  try {
    const response = await axiosInstance.get("/auth/verify-token");
    console.log("In LoginUser:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error logging in:", error);
    throw error.response?.data || error.message;
  }
};
