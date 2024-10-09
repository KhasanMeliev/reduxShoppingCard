import React from "react";
import { useSelector } from "react-redux";

const Basket = () => {
  const totalPrice = useSelector((state) => state.shop.totalPrice);
  const totalItems = useSelector((state) => state.shop.totalItems);
  const items = useSelector((state) => state.shop.basketItems);

  return (
    <div className="flex flex-col items-center gap-5 w-[300px] h-[500px] mr-10 mt-10 bg-white">
      <h1 className="text-2xl font-bold">Your cart summary</h1>
      <div className="flex gap-5">
        <div>
          <p>Item(s) in cart </p>
          <p className="text-center font-bold text-xl">{totalItems}</p>
        </div>
        <div>
          <p>Grand Total(USD)</p>
          <p className="text-center font-bold text-xl">{totalPrice}</p>
        </div>
      </div>
      <hr className="w-[300px]" />
      <div>
        <div className="w-[300px] flex justify-between px-2">
          <p className="font-bold text-xl">Item </p>
          <p className="font-bold text-xl">Total(USD)</p>
        </div>
        {items.map((item) => (
          <div className="w-[300px] flex justify-between px-2">
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basket;
