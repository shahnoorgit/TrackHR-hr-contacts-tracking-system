import { useState } from "react";
import toast from "react-hot-toast";

const useAllContacts = () => {
  const [loading, setLoading] = useState();
  const [myContacts, setMyContacts] = useState([]);
  const fetchAllContacts = async (_id) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8080/api/user/contacts/mycontact/${_id}`
      );
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      setMyContacts(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, fetchAllContacts, myContacts };
};

export default useAllContacts;
