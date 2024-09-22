import React, { useState } from "react";
import { useSelector } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import Cart from "../screen/Cart";

export default function Navbar() {
  const navigate = useNavigate();
  const onChange = () => {
    localStorage.removeItem("authtoken");
    navigate("/Login");
  };
  const [cartview,setcartview] =useState(false);
  const count = useSelector((state) => state.todo.cart);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-success navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fs-2 fst-italic" to="/">
          FoodApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item Active fs-5">
              <Link className="nav-link active" to="/Abouts">
                Abouts
              </Link>
            </li>
            {localStorage.getItem("authtoken") ? (
              <li className="nav-item Active fs-5">
                <Link className="nav-link active" to="/">
                  My Orders
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          {!localStorage.getItem("authtoken") ? (
            <li className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/Login">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1" to="/Signup">
                Signup
              </Link>
            </li>
          ) : (
            <div>
              <div
                className="d-inline btn position-relative mx-3"
                style={{}}
                onClick={() => {
                  setcartview(true);
                }}
              >
                <i className="bi bi-cart fs-2"></i>
                <span className="position-absolute top-0 start-100 fs-7 translate-middle badge rounded-pill bg-danger">
                  {count? count.length:""}
                </span>
              </div>
              {cartview?<Modal onClose={()=>setcartview(false)}><Cart/></Modal>:null}
              <span className="visually-hidden">unread messages</span>

              <Link
                className="btn bg-white text-success mx-1"
                to="/Login"
                onClick={onChange}
              >
                Logout
              </Link>
            </div>
          )}
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
