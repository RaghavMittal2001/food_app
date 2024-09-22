import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/Fooditems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    setfooditem(response[0]);
    setfoodcat(response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        {foodcat.length !== 0
          ? foodcat.map((data) => {
              return (
                <div key={data._id}  className="row mb-3">
                  <div className="fs-3 m-3 fw-bold "style={{color:"#f00d0d"}}>
                    {data.CategoryName}
                    </div>
                  <hr />
                  {fooditem.length !== 0 ? (
                    fooditem
                      .filter((item) => item.CategoryName === data.CategoryName)
                      .map((filteritems) => {
                        return (
                          <div key={filteritems._id} className="col-12 col-md-6 col-lg-3">
                            <Card _id={filteritems._id}foodName={filteritems.name}
                            options={filteritems.options}
                            imgSrc={filteritems.img}
                            desc={filteritems.description}/>
                          </div>
                        );
                      })
                  ) : (
                    <div>not found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>

      <Footer />
    </>
  );
}
