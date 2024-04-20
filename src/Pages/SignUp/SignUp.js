import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import CustomLoader from "../../components/Loader/CustomLoader";

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const onChangeData = (e) => {
    if (e.target.id === "name") {
      setSignUpData({ ...signUpData, name: e.target.value });
    } else if (e.target.id === "email") {
      setSignUpData({ ...signUpData, email: e.target.value });
    } else if (e.target.id === "password") {
      setSignUpData({ ...signUpData, password: e.target.value });
    } else {
      setSignUpData({ ...signUpData, confirmPassword: e.target.value });
    }
  };

  const dataValidation = () => {
    let validation = 1;
    if (!signUpData.name.trim()) {
      toast.error("Name is required");
      return (validation = 0);
    }

    // Email validation
    if (!signUpData.email.trim()) {
      toast.error("Email is required");
      return (validation = 0);
    } else if (!/\S+@\S+\.\S+/.test(signUpData.email)) {
      toast.error("Email is invalid");
      return (validation = 0);
    }

    // Password validation
    if (!signUpData.password.trim()) {
      toast.error("Password is required");
      return (validation = 0);
    } else if (signUpData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return (validation = 0);
    }

    // Confirm password validation
    if (!signUpData.confirmPassword.trim()) {
      toast.error("Confirm Password is required");
      return (validation = 0);
    } else if (signUpData.confirmPassword !== signUpData.password) {
      toast.error("Passwords do not match");
      return (validation = 0);
    }
    return validation;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (dataValidation()) {
      setLoader(true);
      try {
        const status = await axios.post(
          `${process.env.REACT_APP_API}api/auth/signup`,
          {
            name: signUpData.name,
            email: signUpData.email,
            password: signUpData.password,
          }
        );
        if (status.status == 200) {
          toast.success("Successfully Registered!");
        //   console.log(status);
        //   localStorage.setItem("user", JSON.stringify(status.data));
          navigate("/login");
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    }
    setLoader(false);
  };
  return (
    <>
      {loader ? <CustomLoader /> : null}
      <div className="signUp">
        <div className="signUpContainer">
          <form action="" onSubmit={onSubmit}>
            <h2>Welcome Back!</h2>
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={signUpData.name}
              onChange={onChangeData}
              disabled={loader}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={signUpData.email}
              onChange={onChangeData}
              disabled={loader}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={signUpData.password}
              onChange={onChangeData}
              disabled={loader}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              value={signUpData.confirmPassword}
              onChange={onChangeData}
              disabled={loader}
            />
            <input type="submit" value="Log In" disabled={loader} />
            <div className="registerDiv">
              <NavLink to="/login" tooltip="Register">
                Already have an account?
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
