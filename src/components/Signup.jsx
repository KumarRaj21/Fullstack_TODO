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
    
  };
  // console.log(process.env.API);
  const registerUser = async (e) => {
    e.preventDefault();
    if (dataValidation()) {
      try {
        const status = await axios.post(`${process.env.REACT_APP_API}api/auth/signup`, {
          name: userData.name,
          email: userData.email,
          password: userData.password,
        });
        if (status.status == 200) {
          // console.log("User Registered");
          toast.success("User Registered Successfully!");
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
