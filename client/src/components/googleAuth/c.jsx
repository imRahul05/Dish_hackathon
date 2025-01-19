import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebaseConfig";

export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    // Add these configurations to handle the popup properly
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    // Check for specific popup-related errors
    if (error.code === 'auth/popup-blocked') {
      throw new Error('Please enable popups for this website');
    }
    if (error.code === 'auth/popup-closed-by-user') {
      throw new Error('Sign-in cancelled');
    }
    throw error;
  }
};