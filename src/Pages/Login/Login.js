import React from "react";
import "./Login.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { NavLink, useHref, useNavigate } from "react-router-dom";
import axios from "axios";
import CustomLoader from "../../components/Loader/CustomLoader";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const onChangeData = (e) => {
    if (e.target.id === "email") {
      setLoginData({ ...loginData, email: e.target.value });
    } else {
      setLoginData({ ...loginData, password: e.target.value });
    }
  };
  const dataValidation = () => {
    let validation = 1;
    if (!loginData.email.trim()) {
      toast.error("Email is required");
      return (validation = 0);
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      toast.error("Email is invalid");
      return (validation = 0);
    }

    // Password validation
    if (!loginData.password.trim()) {
      toast.error("Password is required");
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
          `${process.env.REACT_APP_API}api/auth/signin`,
          {
            email: loginData.email,
            password: loginData.password,
          }
        );
        if (status.status == 200) {
          toast.success("Login successful");
          // console.log(status);
          localStorage.setItem("user", JSON.stringify(status.data));
          setTimeout(()=>{
            navigate("/");
          },3000);
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    }
    setLoader(false);
  };
  return (
    <>
    {loader?<CustomLoader/>:null}
    <div className="Login">
      <div className="loginContainer">
        <form action="" onSubmit={onSubmit}>
          <h2>Welcome Back!</h2>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={loginData.email}
            onChange={onChangeData}
            disabled={loader}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={loginData.password}
            onChange={onChangeData}
            disabled={loader}
          />
          <input type="submit" value="Log In" disabled={loader} />
          <div className="registerDiv">
            <NavLink to="/signup" tooltip="Register">
              Don't have an account?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
