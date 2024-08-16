import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
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
    <div className="container pt-5">
      {cart.items.length > 0 ? (
        <div className="">
          <h1 className="sticky top-0 z-10 bg-white text-3xl font-bold tracking-tight text-gray-900">
            Shopping Cart
          </h1>
          <div className="mt-5 lg:grid lg:grid-cols-12 lg:items-start">
            <section className="scrollbar-hidden h-[80vh] overflow-y-scroll rounded-lg bg-white pl-2 pr-10 lg:col-span-8">
              <ul role="list" className="divide-y divide-gray-200">
                {cart.items.map((product) => (
                  <CartItems product={product} key={product.id} />
                ))}
              </ul>
            </section>
            <section className="sticky top-20 lg:col-span-4">
              <div className="rounded-md bg-white p-4 shadow-md">
                <h2 className="border-b border-gray-200 pb-3 text-lg font-medium text-gray-900">
                  Price Details
                </h2>
                <div>
                  <PriceDetails cart={cart} />
                </div>
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
