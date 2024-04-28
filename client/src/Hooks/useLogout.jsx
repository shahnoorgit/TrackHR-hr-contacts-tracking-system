import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://trackhr-backend.onrender.com/api/user/logout"
      );
      const data = await res.json();
      setAuth(null);
      localStorage.removeItem("UserTrack");
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};

export default useLogout;
