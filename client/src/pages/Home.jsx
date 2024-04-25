import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import SortOptions from "../component/Sortby";

const Home = () => {
  const { Auth } = useContext(AuthContext);
  const contactsNo = 0;
  Auth?.contacts.map((contact) => (contactsNo += 1));
  const [FormData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    role: "",
    action: "pending",
  });
  const handleAdd = (e) => {
    e.preventDefault();
    console.log(FormData);
  };
  return (
    <div className=" flex flex-col justify-center items-start">
      <div className=" flex flex-col gap-2 mt-5 ml-5">
        <h1 className=" font-bold text-white">{Auth?.username}</h1>
        <p className=" font-semibold text-white">
          Your current contacts are {contactsNo}
        </p>
        <SortOptions />
      </div>
      <div className="flex flex-col gap-1 mx-auto mt-5">
        <form
          onSubmit={(e) => handleAdd(e)}
          className="flex flex-wrap gap-1 border-white sm:flex-row sm:justify-center sm:items-center"
        >
          <input
            value={FormData.name}
            onChange={(e) => setFormData({ ...FormData, name: e.target.value })}
            type="text"
            placeholder="Enter Name"
            className="border rounded-md px-2 py-1 sm:w-auto"
          />
          <input
            value={FormData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...FormData, phoneNumber: e.target.value })
            }
            type="text"
            placeholder="Enter Contact Number"
            className="border rounded-md px-2 py-1 sm:w-auto"
          />
          <input
            value={FormData.email}
            onChange={(e) =>
              setFormData({ ...FormData, email: e.target.value })
            }
            type="email"
            placeholder="Enter Email"
            className="border rounded-md px-2 py-1 sm:w-auto"
          />
          <input
            value={FormData.role}
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
            <option value="done">Contacted</option>
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
      </div>
    </div>
  );
};

export default Home;
