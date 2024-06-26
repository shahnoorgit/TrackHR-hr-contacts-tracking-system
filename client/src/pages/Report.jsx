import React, { useContext, useEffect, useState } from "react";
import useReport from "../Hooks/useReport";
import { AuthContext } from "../Context/AuthContext";
import Spinner from "../component/Spinner";

const Report = () => {
  const { loading, fetchReport } = useReport();
  const { Auth } = useContext(AuthContext);
  const [Report, setReport] = useState();
  useEffect(() => {
    fetchReport(Auth?._id).then((data) => setReport(data));
  }, []);
  return (
    <>
      <div className="flex flex-col justify-start items-center">
        <h1 className=" text-white text-xl font-bold">{Auth?.username}</h1>
        <p className="text-semibold text-lg text-white">
          Now you can review all your progress done <br /> this week , this
          month and overall{" "}
        </p>
      </div>
      {loading ? (
        <center>
          <Spinner />
        </center>
      ) : (
        <div className=" flex justify-between max-sm:flex-col p-5 gap-5">
          <div className="shadow-md flex flex-col gap-2 shadow-blue-400 w-full border-2 border-blue-500 bg-gray-800 rounded-lg hover:scale-105 hover:transition-all cursor-pointer p-3">
            <h1 className=" text-xl text-gray-200 font-bold">
              This Week-
              <span className=" ml-1 text-white text-lg font-normal">
                Your Progress
              </span>
            </h1>
            <div className=" w-full border border-blue-500" />
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.thisWeek.contactsThisWeek} HR Contacts created This
                Week
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.thisWeek.contactedThisWeek} HRs Contacted This Week
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.thisWeek.pendingThisWeek} pending HR to contact This
                Week
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                Got {Report?.thisWeek.successfulThisWeek} interview from HR
                Contacts This Week
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.thisWeek.notReceivedThisWeek} HRs didn&#39;t recived
                your call This Week
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.thisWeek.contactedPercentage}% HRs Contacted This Week
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.thisWeek.notReceivedPercentage}% HRs were unable to
                reach This Week
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.thisWeek.successfulPercentage}% interview This Week
              </p>
            </div>
          </div>

          <div className="shadow-md flex flex-col gap-2 shadow-blue-400 w-full border-2 border-blue-500 bg-gray-800 rounded-lg hover:scale-105 hover:transition-all cursor-pointer p-3">
            <h1 className=" text-xl text-gray-200 font-bold">
              This Month-
              <span className=" ml-1 text-white text-lg font-normal">
                Your Progress
              </span>
            </h1>
            <div className=" w-full border border-blue-500" />
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.thisMonth.contactsThisMonth} HR Contacts created This
                Month
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.thisMonth.contactedThisMonth} HRs Contacted This Month
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.thisMonth.pendingThisMonth} pending HR to contact This
                Month
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                Got {Report?.thisMonth.successfulThisMonth} interview from HR
                Contacts This Month
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.thisMonth.notReceivedThisMonth} HRs didn&#39;t recived
                your call This Month
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.thisMonth.contactedPercentage}% HRs Contacted This
                Month
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.thisMonth.notReceivedPercentage}% HRs were unable to
                reach This Month
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.thisMonth.successfulPercentage}% interview This Month
              </p>
            </div>
          </div>
          <div className="shadow-md flex flex-col gap-2 shadow-blue-400 w-full border-2 border-blue-500 bg-gray-800 rounded-lg hover:scale-105 hover:transition-all cursor-pointer p-3">
            <h1 className=" text-xl text-gray-200 font-bold">
              Overall-
              <span className=" ml-1 text-white text-lg font-normal">
                Your Progress
              </span>
            </h1>
            <div className=" w-full border border-blue-500" />
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.overall.allContactsCount} HR Contacts created
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.overall.contactedCount} HRs Contacted
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.overall.pendingCount} pending HR to contact
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                Got {Report?.overall.successfulCount} interview from HR Contacts
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.overall.notReceivedCount} HRs didn&#39;t recived your
                call
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.overall.contactedPercentage}% HRs were Contacted
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.overall.notReceivedPercentage}% HRs were unable to
                reach
              </p>
            </div>
            <div className=" flex gap-1 items-center">
              <div className="w-2 h-2 border rounded-full bg-white" />
              <p className=" text-white font-semibold">
                {Report?.overall.successfulPercentage}% interview Overall
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Report;
