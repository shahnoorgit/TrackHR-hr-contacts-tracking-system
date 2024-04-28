import { useState } from "react";
import toast from "react-hot-toast";

const useUpdateAction = () => {
  const [update, reload] = useState(false);
  const [updating, setloading] = useState(false);
  const updateAction = async (contact_id, action) => {
    setloading(true);
    try {
      const res = await fetch(
        "https://trackhr-backend.onrender.com/api/user/contacts/edit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ contact_id, action }),
        }
      );
      const data = await res.json();
      reload(!update);
      return data;
    } catch (err) {
      toast.error(err);
    } finally {
      setloading(false);
    }
  };
  return { update, updateAction, updating };
};

export default useUpdateAction;
