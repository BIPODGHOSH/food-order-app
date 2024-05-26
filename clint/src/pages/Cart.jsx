import React, { useContext, useEffect, useState } from "react";
import { Store } from "../context/store";
import { assets } from "../assets/assets";

const Cart = () => {
  const { cartItems, food_list, addToCart, removeFromCart } = useContext(Store);
  const [showPayment, setShowPayment] = useState(null);
  const [total, setTotal] = useState(0);
  console.log(cartItems);
  useEffect(() => {
    if (Object.keys(cartItems).length > 0) {
      setShowPayment(true);
    } else {
      setShowPayment(false);
    }
  }, [cartItems, removeFromCart]);

  useEffect(() => {
    // Calculate total price when cartItems change
    let totalPrice = 0;
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      const item = food_list.find((item) => item._id === itemId);
      if (item) {
        totalPrice += item.price * quantity;
      }
    }
    setTotal(totalPrice);
  }, [cartItems, food_list]);

  return (
    <div className="p-5 flex flex-col gap-5 justify-center w-full">
      {food_list.map((item, i) => {
        if (cartItems[item._id] > 0) {
          return (
            <div
              key={i}
              className=" flex p-4 bg-gray-100 justify-between rounded-md shadow-md"
            >
              <div className="flex flex-col justify-between">
                <img src={item.image} alt="" className=" w-14" />
                <p className=" text-xl font-semibold">{item.name}</p>
                <p className="">₹ {item.price}</p>
              </div>
              <div className=" flex flex-col items-center justify-between">
                <div className="flex justify-between size-8 bg-white w-24 rounded-full">
                  <img
                    src={assets.add_icon_green}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => addToCart(item._id)}
                  />
                  <p className="font-semibold text-lg">{cartItems[item._id]}</p>
                  <img
                    src={assets.remove_icon_red}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => removeFromCart(item._id)}
                  />
                </div>
                <p className="">₹ {item.price * cartItems[item._id]}</p>
              </div>
            </div>
          );
        }
      })}

      {!showPayment ? (
        <p className="self-center text-xl sm:text-3xl font-semibold">
          You haven't added any food items to the cart
        </p>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p className=" text-2xl font-semibold">Total = ₹{total} </p>
          <button className="bg-red-500 rounded-md py-3 w-full sm:w-1/3 self-center text-white text-xl">
            Choose payment method
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
