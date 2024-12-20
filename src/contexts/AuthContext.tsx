import { createContext, useContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { useSession } from "next-auth/react";
import { auth } from "@/lib/firebase";
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";

interface AuthContextProps {
  currentUser: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  loading: true,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: session } = useSession();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const syncFirebaseAuth = async () => {
      if (auth.currentUser) {
        setCurrentUser(auth.currentUser);
        setLoading(false);
        return;
      }

      if (session?.googleIdToken) {
        console.log("auth: ", auth);
        console.log("Session: ", session);
        try {
          const credential = GoogleAuthProvider.credential(session.googleIdToken);
          console.log("Credential: ", credential);
          const userCredential = await signInWithCredential(auth, credential);
          setCurrentUser(userCredential.user);
        } catch (error) {
          console.error("Failed to sync Firebase auth:", error);
        }
      }

      setLoading(false);
    };

    syncFirebaseAuth();
  }, [session]);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
