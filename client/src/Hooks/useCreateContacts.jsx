import React, { useState } from "react";
import toast from "react-hot-toast";

const useCreateContacts = () => {
  const [load, reload] = useState(false);
  const createContact = async ({
    name,
    role,
    action,
    phoneNumber,
    email,
    user_id,
  }) => {
    try {
      const res = await fetch(
        "http://localhost:8080/api/user/contacts/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            role,
            action,
            phoneNumber,
            email,
            user_id,
          }),
        }
      );
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      console.log(data);
      toast.success("Contacts added successfully");
      reload(!load);
    } catch (error) {
      toast.error(error);
    }
  };
  return { createContact, load };
};

export default useCreateContacts;
