import React from "react";
import Rating from "./Rating";

const ProductCard = ({
  product: {
    title,
    image,
    price,
    rating: { rate },
  },
}) => {
  return (
    <div className="p-5 border border-slate-300 flex flex-col items-start gap-4">
      <img className="h-40" src={image} alt="" />
      <p className="font-bold text-slate-600 line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex items-center w-full justify-between mt-auto">
        <p className="font-bold text-slate-600">{price + "$"}</p>
        <button className="btn">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
