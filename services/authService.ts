import { auth, googleProvider } from "@/firebase/config";
import {
  signInWithPopup,
  signOut,
  sendEmailVerification,
  UserCredential,
} from "firebase/auth";

export const signInWithGoogle = async () => {
  try {
    const result: UserCredential = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    window.location.href = "/app"; // Redirect to dashboard
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

export const signout = async (): Promise<void> => {
    try {
      await signOut(auth);
      console.log("User signed out");
      window.location.href = '/'; // Redirect to home
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };