import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";

const useSignup = () => {
  const { setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const signup = async ({ username, password, confirmPassword }) => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://trackhr-backend.onrender.com/api/user/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            confirmPassword,
          }),
        }
      );
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      console.log(data);
      setAuth(data);
      localStorage.setItem("UserTrack", JSON.stringify(data));
      toast.success(" user signed up successfully");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;
