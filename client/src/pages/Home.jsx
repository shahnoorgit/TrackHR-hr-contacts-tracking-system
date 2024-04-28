import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Contactlist from "../component/Contactlist";
import useMyContacts from "../Hooks/useMyContacts";
import Spinner from "../component/Spinner";
import useCreateContacts from "../Hooks/useCreateContacts";
import useDelete from "../Hooks/useDelete";
import useUpdateAction from "../Hooks/useUpdateAction";

const Home = () => {
  const { Auth } = useContext(AuthContext);
  const { loading, fetchMyContacts, myContacts, setMyContacts } =
    useMyContacts();
  const { createContact, load } = useCreateContacts();
  const { deleted, deleteContact } = useDelete();
  const { updating, updateAction, update } = useUpdateAction();

  const [useToFilter, setFilter] = useState([]);
  const [FormData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    role: "",
    action: "pending",
    user_id: Auth?._id,
  });

  const handleAdd = (e) => {
    e.preventDefault();
    createContact(FormData);
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      role: "",
      action: "pending",
      user_id: Auth?._id,
    });
  };
  const [sorting, setSorting] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };

  const handleDelete = (id) => {
    deleteContact(id);
  };

  const changeAction = (action, contact_id) => {
    updateAction(contact_id, action);
  };

  useEffect(() => {
    fetchMyContacts(Auth._id).then((data) => setFilter(data));
  }, [load, deleted, update]);

  const sort = (e) => {
    if (e.target.value === "all") {
      setFilter(myContacts);
    } else {
      const filtered = myContacts.filter(
        (contact) => contact.action == e.target.value
      );
      setFilter(filtered);
    }
  };
  console.log(Auth._id);
  return (
    <div className=" flex flex-col justify-center items-start">
      <div className=" flex flex-col gap-2 mt-5 ml-5">
        <h1 className=" font-bold text-white">{Auth?.username}</h1>
        <p className=" font-semibold text-white">
          You will only be shown contacts that you need to take action of this
          week to see all contacts <br /> click here
        </p>
        <a
          href="/all-contacts"
          type="submit"
          className="text-white bg-blue-700 shadow-md rounded-md w-full sm:w-[100px] px-2 py-1"
        >
          {" "}
          See all contacts
        </a>
        <div className="relative">
          <button className="btn" onClick={toggleSortOptions}>
            Sort By
            <svg
              className="h-4 w-4 ml-1 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.707 7.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 11H17a1 1 0 100-2H6.414l2.293-2.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showSortOptions && (
            <div className="absolute w-25 top-full left-0 mt-1  bg-white border rounded-md shadow-lg z-10">
              <button
                value="contacted"
                onClick={(e) => sort(e)}
                className="btn-dropdown"
              >
                Contacted
              </button>
              <button
                value="pending"
                onClick={(e) => sort(e)}
                className="btn-dropdown"
              >
                Pending
              </button>
              <button
                value="successful"
                onClick={(e) => sort(e)}
                className="btn-dropdown"
              >
                Successful
              </button>
              <button
                value="call_not_picked"
                onClick={(e) => sort(e)}
                className="btn-dropdown"
              >
                Call Not Picked
              </button>
              <button
                value="failed"
                onClick={(e) => sort(e)}
                className="btn-dropdown"
              >
                Failed
              </button>
              <button
                value="all"
                className="btn-dropdown"
                onClick={(e) => sort(e)}
              >
                All
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1 mx-auto mt-5">
        <form
          onSubmit={(e) => handleAdd(e)}
          className="flex flex-wrap gap-1 border-white sm:flex-row sm:justify-center sm:items-center"
        >
          <input
            value={FormData.name}
            required
            onChange={(e) => setFormData({ ...FormData, name: e.target.value })}
            type="text"
            placeholder="Enter Name"
            className="border rounded-md px-2 py-1 sm:w-auto"
          />
          <input
            value={FormData.phoneNumber}
            required
            onChange={(e) =>
              setFormData({ ...FormData, phoneNumber: e.target.value })
            }
            type="text"
            placeholder="Enter Contact Number"
            className="border rounded-md px-2 py-1 sm:w-auto"
          />
          <input
            value={FormData.email}
            required
            onChange={(e) =>
              setFormData({ ...FormData, email: e.target.value })
            }
            type="email"
            placeholder="Enter Email"
            className="border rounded-md px-2 py-1 sm:w-auto"
          />
          <input
            value={FormData.role}
            required
            onChange={(e) => setFormData({ ...FormData, role: e.target.value })}
            type="text"
            placeholder="Applying For"
            className="border rounded-md px-2 py-1 sm:w-auto"
          />
          <select
            value={FormData.action}
            onChange={(e) =>
              setFormData({ ...FormData, action: e.target.value })
            }
            className="cursor-pointer border rounded-md px-2 py-1 sm:w-auto"
          >
            <option value="pending">Pending</option>
            <option value="contacted">Contacted</option>
            <option value="successful">Successful</option>
            <option value="call_not_picked">Call Not Picked</option>
            <option value="failed">Failed</option>
          </select>
          <button
            type="submit"
            className="bg-blue-700 shadow-md rounded-md w-full sm:w-[100px] px-2 py-1"
          >
            <span className="font-bold text-white">Add</span>
          </button>
        </form>
        {loading ? (
          <Spinner />
        ) : (
          <div className=" mb-5 flex flex-col gap-1">
            {useToFilter.map((contact) => (
              <Contactlist
                actionLoading={updating}
                key={contact._id}
                contact={contact}
                changeAction={changeAction}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
