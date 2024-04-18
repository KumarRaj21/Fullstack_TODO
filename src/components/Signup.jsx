import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  // const [errors, setErrors] = useState({});
  const onChangeData = (e) => {
    if (e.target.id === "name") {
      setUserData({ ...userData, name: e.target.value });
    } else if (e.target.id === "email") {
      setUserData({ ...userData, email: e.target.value });
    } else if (e.target.id === "password") {
      setUserData({ ...userData, password: e.target.value });
    } else {
      setUserData({ ...userData, confirmPassword: e.target.value });
    }
  };
  const dataValidation = () => {
    let validation = 1;
    if (!userData.name.trim()) {
      toast.error("Name is required");
      return (validation = 0);
    }

    // Email validation
    if (!userData.email.trim()) {
      toast.error("Email is required");
      return (validation = 0);
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      toast.error("Email is invalid");
      return (validation = 0);
    }

    // Password validation
    if (!userData.password.trim()) {
      toast.error("Password is required");
      return (validation = 0);
    } else if (userData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return (validation = 0);
    }

    // Confirm password validation
    if (!userData.confirmPassword.trim()) {
      toast.error("Confirm Password is required");
      return (validation = 0);
    } else if (userData.confirmPassword !== userData.password) {
      toast.error("Passwords do not match");
      return (validation = 0);
    }
    return validation;
  };
  // console.log(process.env.API);
  const registerUser = async (e) => {
    e.preventDefault();
    if (dataValidation()) {
      try {
        const status = await axios.post(`https://todo-backend-liard-delta.vercel.app/api/auth/signup`, {
          name: userData.name,
          email: userData.email,
          password: userData.password,
        });
        if (status.status == 200) {
          console.log("User Registered");
          toast.success("User Registere Successfully!");
          setUserData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } catch (err) {
        console.log(err);
        toast.error(err?.response?.data?.message);
      }
    } else {
      console.log("Data is not valid");
    }
  };
  return (
    <div className="Signup-container">
      <div className="signup-head">Create An Account</div>
      <div className="signup-form">
        <form action="" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Name"
            id="name"
            value={userData.name}
            onChange={onChangeData}
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={userData.email}
            onChange={onChangeData}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={userData.password}
            onChange={onChangeData}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            value={userData.confirmPassword}
            onChange={onChangeData}
          />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
