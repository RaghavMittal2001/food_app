import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/Counterslice";

export default function Card(props) {
  
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  
  const handleaddtocart = async() => {
    
    dispatch(increment());
    
    
  };
  const truncateText = (text, maxLength) => {
    if (text === undefined || text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };
  let options = props.options ? props.options[0] : [];
  let priceOptions = Object.keys(options);
  return (
    <div
      className="container m-3 "
      style={{ width: "18rem" }}
    >
      <div className="card mt-3" style={{ width: "18rem"}}>
        <img
          style={{ width: "18rem", maxHeight: "153px" }}
          src={props.imgSrc}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text">{truncateText(props.desc, 60)}</p>
          <div className="container">
            <select name="" id="" className=" h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select name="" id="" className="m-2 h-100 bg-success rounded">
              {priceOptions.map((data) => {
                return (
                  <option value={data} key={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
            <hr />
            <button
              className="btn btn-success justify-center ms-2"
              onClick={handleaddtocart}
            >
              Add to cart
            </button>
        </div>
      </div>
    </div>
  );
}
