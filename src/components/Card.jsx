import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, updatetodo } from "../redux/features/todoSlice.jsx";
export default function Card(props) {

  let option = props.options;
  const priceref = useRef();
  const dispatch = useDispatch();
  const [qty, setqty] = useState(1);
  const [size, setsize] = useState(priceref);


  const todo = useSelector((state) => state.todo.cart);


  const handleaddtocart = async (e) => {
    let food = []
    for (const item of todo) {
      if (item.id === props._id) {
        food = item;

        break;
      }
    }
    if (food.length !== 0) {
      if (food.size === size) {
         
         dispatch(updatetodo({  id: props._id, price: finalPrice, qty: qty }));
        return
      }
      else  {
        dispatch(addtodo({ name: props.foodName, id: props._id, price: finalPrice, qty: qty, size: size }));
        console.log("Size different so simply ADD one more to the list")
        return
      }
    }
    dispatch(addtodo({ name: props.foodName, id: props._id, price: finalPrice, qty: qty, size: size }));
  };
  const truncateText = (text, maxLength) => {
    if (text === undefined || text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };
  let options = props.options ? props.options[0] : [];
  let priceOptions = Object.keys(options);
  const [finalPrice, setFinalPrice] = useState(qty * parseInt(options[size]));
  useEffect(() => {
    setsize(priceref.current.value);
  }, [])
  useEffect(() => {
    setFinalPrice(qty * parseInt(option[0][size]));
  }, [qty, size, option]);

  return (
    <div
      className="container m-3 "
      style={{ width: "18rem" }}
    >
      <div className="card mt-3" style={{ width: "18rem" }}>
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
            <select name="" id="" className=" h-100 bg-success rounded" onChange={(e) => setqty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select name="" id="" className="m-2 h-100 bg-success rounded" ref={priceref} onChange={(e) => setsize(e.target.value)}>
              {priceOptions.map((data) => {
                return (
                  <option value={data} key={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">
              ₹{finalPrice}/-
            </div>
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
