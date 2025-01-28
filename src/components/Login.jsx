import React from "react";
import GoogleButton from "react-google-button";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth"; // Import signInWithPopup from Firebase
import { useDispatch } from "react-redux";
import { setUser } from "../redux/appSlice";

const Login = () => {
  const dispatch = useDispatch();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider); // Use signInWithPopup for Google authentication
      console.log("User signed in successfully:", result.user);
      dispatch(
        setUser({
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        })
      );
    } catch (error) {
      console.error("Error during Google Sign-In:", error.message);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <div className="p-8 bg-white flex flex-col gap-3 rounded-md">
        <h1 className="text-center text-xl font-medium mb-5">LOGIN</h1>
        <GoogleButton onClick={signInWithGoogle} />{" "}
        {/* Google Sign-In Button */}
      </div>
    </div>
  );
};

export default Login;
