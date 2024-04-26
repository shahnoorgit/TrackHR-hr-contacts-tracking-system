import { useState } from "react";
import { FaCopy, FaRegCircleUser } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa6";

const Contactlist = () => {
  const [action, setAction] = useState("pending");
  console.log(action);
  const changeAction = () => {};
  return (
    <div className=" max-sm:mx-2 max-sm:flex-col max-sm:items-center flex gap-1 justify-between items-start border p-3 rounded-lg bg-gray-700 mt-2">
      <div className=" flex justify-center items-center gap-1">
        <FaRegCircleUser className="text-white" />
        <h2 className="text-bold text-white">Riya chakruvatri</h2>
      </div>
      <div className="flex justify-center items-center gap-1">
        <h2 className="text-bold text-white">+91720804035</h2>
        <FaCopy className="text-white" />
      </div>
      <div className="flex justify-center items-center gap-1">
        <h2 className="text-bold text-white">Riya.hr@vincesolutions.com</h2>
        <FaCopy className="text-white" />
      </div>
      <div className="flex justify-center items-center gap-1">
        <h2 className="text-bold text-white">MERN intern</h2>
      </div>
      <div className="flex justify-center items-center gap-1">
        <h2 className="text-bold text-white">22/11/2002</h2>
      </div>
      <div className="flex justify-center items-center gap-1">
        <select
          value={action}
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
    </div>
  );
};

export default Contactlist;
