import { auth, googleProvider } from "@/firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import googlLogo from '@/assets/google.png'
import { useCreateUserMutation } from "@/redux/feature/auth/authApi";

const GoogleLogin = () => {
  const [creteUser] = useCreateUserMutation()

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // Get user info
      const user = result.user;
      console.log("User Info:", user);
      const userData = {
        name: user?.displayName,
        email: user?.email,
        password: user?.email,
        role: 'user',
        image: user?.photoURL,
      }
     const res = await creteUser(userData)
     console.log(res);
     
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <>
      <button
        onClick={handleGoogleLogin}
        className="w-full flex justify-center items-center gap-2 py-2 px-4 rounded shadow hover:bg-gray-50 duration-300 mt-5"
      >
        <span> Sign in with Google</span>
        <img src={googlLogo} alt="google" className="w-4" />
      </button>
    </>
  )
}

export default GoogleLogin