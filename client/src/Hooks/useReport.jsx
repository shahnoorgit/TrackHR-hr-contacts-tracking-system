import { useState } from "react";
import toast from "react-hot-toast";

const useReport = () => {
  const [loading, setLoading] = useState(false);
  const fetchReport = async (user_id) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8080/api/user/stats/${user_id}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, fetchReport };
};

export default useReport;
