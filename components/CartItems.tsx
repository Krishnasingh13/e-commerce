import {
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
} from "@/slices/cartSlice";
import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

interface CartItemsProps {
  product: {
    id: string;
    thumbnail: string;
    name: string;
    price: number;
    quantity: number;
  };
}

const CartItems: React.FC<CartItemsProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="mb-10 rounded-xl px-8 py-2 shadow-md">
      <li className="flex py-6 sm:py-6">
        <div className="group flex-shrink-0 rounded-xl border">
          <Image
            src={product.thumbnail}
            className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center transition-all duration-300 group-hover:scale-110"
            alt="thumbnail"
            width={500}
            height={500}
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
            <div>
              <div className="flex justify-between">
                <h3 className="text-lg">
                  <p className="font-semibold text-black">{product.name}</p>
                </h3>
              </div>
              <div className="flex items-end">
                <p className="text-sm font-medium text-gray-900">
                  $ {product.price}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-2 flex">
            <div className="flex min-w-24">
              <button
                onClick={() => dispatch(decreaseQuantity(product.id))}
                className="h-7 w-7"
              >
                -
              </button>
              <input
                type="text"
                className="mx-1 h-7 w-9 rounded-md border text-center"
                value={product.quantity}
                readOnly
              />
              <button
                onClick={() => dispatch(increaseQuantity(product.id))}
                className="flex h-7 w-7 items-center justify-center"
              >
                +
              </button>
            </div>
            <div className="ml-6 flex text-sm">
              <button
                onClick={() => dispatch(removeItemFromCart(product.id))}
                className="flex items-center space-x-2 px-2 py-1 pl-0"
              >
                <Trash size={14} className="text-red-500" />
                <span className="text-xs font-medium text-red-500">Remove</span>
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItems;
