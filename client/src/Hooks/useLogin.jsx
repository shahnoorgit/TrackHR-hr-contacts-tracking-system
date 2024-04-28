import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const { setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const login = async ({ username, password }) => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://trackhr-backend.onrender.com/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      localStorage.setItem("UserTrack", JSON.stringify(data));
      setAuth(data);
      toast.success("User Logged in successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
