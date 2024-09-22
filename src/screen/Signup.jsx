import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Signup() {
  const [Credentials, setCredentials] = useState({
    name: "",
    Password: "",
    email: "",
    location: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/CreateUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: Credentials.name,
        Password: Credentials.Password,
        email: Credentials.email,
        location: Credentials.location,
      }),
    });

    if (!response.ok) {
      console.log( " this one ",response);
    } else {
      const json =await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter valid Credentials");
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
            <label htmlFor="name " className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={Credentials.name}
              onChange={handlechange}
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="location " className="form-label">
              location
            </label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={Credentials.location}
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
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}
