import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "./api/Api";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await api.post("/users", {
        name,
        username,
        password,
      });
      console.log("User created:", response.data);
      alert("User created successfully!");
      setName("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user.");
    }
  };
  return (
    <div className="container mx-auto w-full h-screen  flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center gap-5 bg-white px-2 h-auto"
      >
        <h1 className="text-3xl">Welcome to back!</h1>
        <div className="flex flex-col gap-5">
          <label htmlFor="name" className="flex flex-col  text-xl  gap-1">
            Your Name
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="min-w-[330px] h-[50px] outline-none rounded-sm bg-[#F1F1F1] pl-2"
              placeholder="Enter Name"
              autoComplete="name"
            />
          </label>
          <label htmlFor="username" className="flex flex-col  text-xl gap-1 ">
            Username
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                console.log(e.target.value);
              }}
              className="min-w-[330px] h-[50px] outline-none rounded-sm bg-[#F1F1F1] pl-2"
              placeholder="Enter Username"
              autoComplete="username"
            />
          </label>
          <label htmlFor="password" className="flex flex-col  text-xl  gap-1">
            Password
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="min-w-[330px] h-[50px] outline-none rounded-sm bg-[#F1F1F1] pl-2"
              placeholder="Create Password"
              autoComplete="new-password"
            />
          </label>
          <label
            htmlFor="confirmPassword"
            className="flex flex-col  text-xl gap-1 "
          >
            Confirm Password
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="min-w-[330px] h-[50px] outline-none rounded-sm bg-[#F1F1F1] pl-2"
              placeholder=" Confirm Your Password"
              autoComplete="new-password"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-[#27AE60] w-[330px] text-xl cursor-pointer hover:bg-[#32965f] text-white h-[50px] rounded-3xl"
        >
          Sign Up
        </button>
        <p>
          <Link to="/Login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
