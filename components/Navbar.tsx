import { RootState } from "@/store";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart || []);

  return (
    <div className="flex items-center justify-between bg-white">
      <Link href={{ pathname: "/" }}>
        <span className="text-xl font-bold">E-commerce</span>
      </Link>
      <Link href={{ pathname: "/cart" }} className="relative p-4">
        <span className="absolute right-1.5 top-1.5 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
          {cart.totalQuantity}
        </span>
        <div className="">
          <ShoppingBag />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
