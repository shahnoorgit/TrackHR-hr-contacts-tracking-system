import React, { useState } from "react";
import toast from "react-hot-toast";

const useDelete = () => {
  const [deleted, setdeleted] = useState(false);
  const deleteContact = async (id) => {
    try {
      const res = await fetch(
        "https://trackhr-backend.onrender.com/api/user/contacts/delete",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
          }),
        }
      );
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      setdeleted(!deleted);
      toast.success("contact deleted successfully");
    } catch (error) {
      toast.error(error);
    }
  };
  return { deleted, deleteContact };
};

export default useDelete;
