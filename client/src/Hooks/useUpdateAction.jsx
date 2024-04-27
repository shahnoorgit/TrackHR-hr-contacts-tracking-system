import { useState } from "react";

const useUpdateAction = () => {
  const [update, reload] = useState(false);
  const [updating, setloading] = useState(false);
  const updateAction = async (contact_id, action) => {
    setloading(true);
    try {
      console.log(contact_id);
      const res = await fetch("http://localhost:8080/api/user/contacts/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contact_id, action }),
      });
      const data = await res.json();
      reload(!update);
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  };
  return { update, updateAction, updating };
};

export default useUpdateAction;
