import { auth } from "@/lib/firebase";

export async function getFirebaseToken(): Promise<string | null> {
  console.log("auth:: ", auth);
  const currentUser = auth.currentUser;

  // 유저가 없는 경우 null 반환
  if (!currentUser) {
    console.error("No current user found in Firebase Auth.");
    return null;
  }

  try {
    // Firebase ID Token 가져오기
    const firebaseToken = await currentUser.getIdToken(true); // true: Firebase ID Token 갱신
    console.log("Firebase Token: ", firebaseToken);
    return firebaseToken;
  } catch (error) {
    console.error("Error fetching Firebase ID Token:", error);
    return null;
  }
}
