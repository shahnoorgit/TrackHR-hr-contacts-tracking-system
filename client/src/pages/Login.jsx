import React, { useState } from "react";
import useLogin from "../Hooks/useLogin";

export const Login = () => {
  const loginForm = (e) => {
    e.preventDefault();
    login(FormInput);
  };
  const { loading, login } = useLogin();
  const [FormInput, setFormInput] = useState({
    username: "",
    password: "",
  });
  return (
    <form
      onSubmit={(e) => loginForm(e)}
      className="flex justify-center items-center mt-10 "
    >
      <div className=" bg-slate-800 max-lg:w-[70vw] shadow-2xl rounded-md flex flex-col gap-5 w-[40vw] h-[70vh]  max-sm:w-[90vw]">
        <div className=" flex mt-5 flex-col justify-center items-center gap-2">
          <h2 className=" font-bold text-3xl">
            <span className=" text-blue-500">Track</span>
            <span className="text-white">HR</span>
          </h2>
          <p className=" text-white font-semibold max-sm:hidden">
            Login to TrackHR and Track Your Process to get Job
          </p>
        </div>
        <div className=" p-5 h-full flex flex-col justify-start gap-3">
          <div className=" flex flex-col gap-1">
            <label className="text-white font-semibold">Username</label>
            <input
              required
              value={FormInput.username}
              onChange={(e) =>
                setFormInput({ ...FormInput, username: e.target.value })
              }
              className="border-2 p-2 border-white rounded-md w-full h-10"
              type="text"
              placeholder=" Enter username"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <label className="text-white font-semibold">Password</label>
            <input
              value={FormInput.password}
              onChange={(e) =>
                setFormInput({ ...FormInput, password: e.target.value })
              }
              required
              placeholder="Enter your password"
              className="border-2 p-2 border-white rounded-md w-full h-10"
              type="password"
            />
          </div>
          <a
            href="/sign-up"
            className=" font-light text-white hover:text-blue-500"
          >
            New Here ? click here to Register
          </a>
        </div>
        <div className=" flex justify-end m-5">
          <button className="bg-blue-600 w-[100px] p-3 rounded-lg text-white font-bold">
            {loading ? "logging you in..." : "login"}
          </button>
        </div>
      </div>
    </form>
  );
};
