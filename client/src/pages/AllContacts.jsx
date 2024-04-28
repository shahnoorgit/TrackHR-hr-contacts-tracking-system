import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import useAllContacts from "../Hooks/useAllContacts";
import Spinner from "../component/Spinner";
import Contactlist from "../component/Contactlist";

const AllContacts = () => {
  const { Auth } = useContext(AuthContext);
  const { loading, fetchAllContacts, myContacts } = useAllContacts();
  useEffect(() => {
    fetchAllContacts(Auth?._id);
  }, []);
  return (
    <>
      <div className="flex flex-col justify-start items-center">
        <h1 className=" text-white font-bold">{Auth?.username}</h1>
        <p className="text-semibold text-white">
          Now you are seeing all the contacts
        </p>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className=" mb-5 flex flex-col gap-1 p-10">
          {myContacts.map((contact) => (
            <Contactlist key={contact._id} contact={contact} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllContacts;

//8050353451
