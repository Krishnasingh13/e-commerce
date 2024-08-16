import React from "react";
import Link from "next/link";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import CartItems from "@/components/CartItems";
import PriceDetails from "@/components/PriceDetails";
import EmptyCartMessage from "@/components/EmptyCartMessage";

interface CartItem {
  id: string;
  thumbnail: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalQuantity: number;
}

const Index = () => {
  const cart = useSelector((state: RootState) => state.cart as CartState);

  return (
    <div className="py-8">
      {cart.items.length > 0 ? (
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Shopping Cart
          </h1>
          <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section className="rounded-lg bg-white lg:col-span-8">
              <ul role="list" className="divide-y divide-gray-200">
                {cart.items.map((product) => (
                  <CartItems product={product} key={product.id} />
                ))}
              </ul>
            </section>
            <section className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0">
              <h2 className="border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4">
                Price Details
              </h2>
              <div>
                <PriceDetails cart={cart} />
              </div>
            </section>
          </div>
        </div>
      ) : (
        <EmptyCartMessage />
      )}
    </div>
  );
};

export default Index;
