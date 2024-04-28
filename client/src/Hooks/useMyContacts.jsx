import { useState } from "react";
import toast from "react-hot-toast";

const useMyContacts = () => {
  const [loading, setLoading] = useState();
  const [myContacts, setMyContacts] = useState([]);
  const fetchMyContacts = async (_id) => {
    setLoading(true);
    console.log("func", _id);
    try {
      const res = await fetch(
        `https://trackhr-backend.onrender.com/api/user/contacts/mycontact/perweek/${_id}`
      );
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      setMyContacts(data);
      return data;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, fetchMyContacts, myContacts, setMyContacts };
};

export default useMyContacts;
