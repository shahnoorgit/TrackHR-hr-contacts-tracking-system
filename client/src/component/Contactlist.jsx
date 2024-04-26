import { useState } from "react";
import { FaCopy, FaRegCircleUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { parseDate } from "../utils/DateFormatter";

const Contactlist = ({ contact, handleDelete }) => {
  const [action, setAction] = useState("pending");
  console.log(contact);
  const changeAction = () => {};
  const date = parseDate(contact?.contactDate);
  return (
    <div className=" max-sm:mx-2 max-sm:flex-col max-sm:items-start flex gap-1 justify-between items-start border p-3 rounded-lg bg-gray-700 mt-2">
      <div className=" flex justify-center items-center gap-1">
        <FaRegCircleUser className="text-white" />
        <h2 className="text-bold text-white">{contact?.name}</h2>
      </div>
      <div className="flex justify-center items-center gap-1">
        <h2 className="text-bold text-white">{contact?.phoneNumber}</h2>
        <FaCopy className="text-white" />
      </div>
      <div className="flex justify-center items-center gap-1">
        <h2 className="text-bold text-white">{contact?.email}</h2>
        <FaCopy className="text-white" />
      </div>
      <div className="flex justify-center items-center gap-1">
        <h2 className="text-bold text-white">{contact?.role}</h2>
      </div>
      <div className="flex justify-center items-center gap-1">
        <h2 className="text-bold text-white">{date}</h2>
      </div>
      <div className="flex justify-center items-center gap-1">
        <select
          value={contact?.action}
          onChange={(e) => setAction(e.target.value)}
          className={` ${
            (action == "pending" && "bg-red-400") ||
            (action == "done" && "bg-green-500") ||
            (action == "successful" && "bg-green-900") ||
            (action == "call_not_picked" && " bg-red-600") ||
            (action == "failed" && "bg-red-900")
          } cursor-pointer border bg-gray-900 text-white rounded-md px-2 py-1 sm:w-auto`}
        >
          <option value="pending">Pending</option>
          <option value="done">Contacted</option>
          <option value="successful">Successful</option>
          <option value="call_not_picked">Call Not Picked</option>
          <option value="failed">Failed</option>
        </select>
      </div>
      <div className="flex justify-center items-center gap-1">
        <MdDelete
          onClick={() => handleDelete(contact?._id)}
          className="text-red-600 text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Contactlist;
