import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./productReducer";

const ProductsList = () => {
  const products = useSelector((state) => state.shop.data);
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(
      addToCart({
        item: products[id - 1],
      })
    );
  };

  return (
    <div>
      <ul className="flex flex-wrap gap-10 px-3 mt-10">
        {products.map((product) => (
          <li
            key={product.id}
            className="w-[300px] h-[400px] bg-[#fff] text-black font-sans py-5 flex flex-col items-center gap-3"
          >
            <p className="text-center">{product.name}</p>
            <img
              src={product.image}
              alt={product.name}
              className="w-[70%] h-[170px]"
            />
            <h1>Price: ${product.price}</h1>
            <p className="text-center">{product.title}</p>
            <button
              className="bg-[#011936FF] text-white px-5 py-3 rounded-xl"
              onClick={() => handleAddToCart(product.id)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
