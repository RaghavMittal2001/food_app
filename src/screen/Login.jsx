import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link,useNavigate } from "react-router-dom";

export default function Login() {
  const [Credentials, setCredentials] = useState({
    Password: "",
    email: "",
  });
  const navigate=useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/LoginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Password: Credentials.Password,
        email: Credentials.email,
      }),
    });

    if (!response.ok) {
      console.log(" this one ", response);
    } else {
      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter valid Credentials");
      }else{
        localStorage.setItem("authtoken",json.authToken)
        navigate("/")
      }
    }
  };
  const handlechange = (event) => {
    setCredentials({ ...Credentials, [event.target.name]: event.target.value });
  };
  return (
    <>
      <Navbar />
      <div className="container mb-3 my-5">
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="Email id " className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={Credentials.email}
              onChange={handlechange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="Password"
              value={Credentials.Password}
              onChange={handlechange}
            />
          </div>
          
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <Link to="/Signup" className="m-3 btn btn-danger">
            New User
          </Link>
        </form>
      </div>
    </>
  );
}
