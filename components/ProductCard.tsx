import { addItemToCart } from "@/slices/cartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface ProductProps {
  product: {
    id: string;
    thumbnail: string;
    title: string;
    price: number;
    tags: string[];
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: product.id,
        thumbnail: product.thumbnail,
        name: product.title,
        price: product.price,
        quantity: 1,
        totalPrice: product.price,
      }),
    );

    toast.success(`Product added to cart successfully!`, {
      position: "top-right",
    });
  };

  return (
    <div className="group flex h-full flex-col justify-between overflow-hidden rounded-md border">
      <Image
        src={product.thumbnail}
        alt="thumbnail image"
        className="aspect-[16/9] w-full rounded-md transition-all duration-300 group-hover:scale-110 md:aspect-auto md:h-[300px] lg:h-[200px]"
        width={500}
        height={500}
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {product.title}
        </h1>
        <p className="mt-2 w-full text-xl font-semibold leading-tight text-gray-700">
          $ {product.price}
        </p>
        <div className="mt-2 flex items-center space-x-2">
          {product.tags.map((tag, idx) => (
            <span
              key={idx}
              className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => handleAddToCart()}
          className="mt-4 w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
