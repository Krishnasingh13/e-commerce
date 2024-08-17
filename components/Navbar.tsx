import { RootState } from "@/store";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart || []);

  const navRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navHeight = navRef.current?.offsetHeight;
        const scrollY = window.scrollY;
        const scrollThreshold = navHeight * 0.1;

        if (scrollY >= scrollThreshold) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className={`${
        isScrolled ? "shadow-xl" : ""
      } sticky left-0 top-0 z-[999] w-full bg-white px-4 py-2 md:px-0`}
    >
      <div className="container flex items-center justify-between">
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
    </div>
  );
};

export default Navbar;
