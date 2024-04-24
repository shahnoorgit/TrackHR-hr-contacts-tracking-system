import React, { useState } from "react";
import useSignup from "../Hooks/useSignup";

const SignUp = () => {
  const { signup, loading } = useSignup();
  const [FormInput, setFormInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const signupForm = async (e) => {
    e.preventDefault();
    await signup(FormInput);
  };
  return (
    <form
      onSubmit={(e) => signupForm(e)}
      className="flex justify-center items-center mt-10 "
    >
      <div className=" bg-slate-800 max-lg:w-[70vw] shadow-2xl rounded-md flex flex-col gap-5 w-[40vw] h-[70vh]  max-sm:w-[90vw]">
        <div className=" flex mt-5 flex-col justify-center items-center gap-2">
          <h2 className=" font-bold text-3xl">
            <span className=" text-blue-500">Track</span>
            <span className="text-white">HR</span>
          </h2>
          <p className=" text-white font-semibold max-sm:hidden">
            Register to TrackHR and Track Your Process to get Job
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
          <div className=" flex flex-col gap-1">
            <label className="text-white font-semibold">Confirm Password</label>
            <input
              required
              className="border-2 p-2 border-white rounded-md w-full h-10"
              placeholder="Confirm your password"
              type="password"
              value={FormInput.confirmPassword}
              onChange={(e) =>
                setFormInput({ ...FormInput, confirmPassword: e.target.value })
              }
            />
          </div>
          <a
            href="/login"
            className=" font-light text-white hover:text-blue-500"
          >
            Already Have account?
          </a>
        </div>
        <div className=" flex justify-end m-5">
          <button className="bg-blue-600 w-[100px] p-3 rounded-lg text-white font-bold">
            {loading ? "Signing you up..." : "sign-up"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
