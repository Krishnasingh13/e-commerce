import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import CartItems from "@/components/CartItems";
import PriceDetails from "@/components/PriceDetails";
import EmptyCartMessage from "@/components/EmptyCartMessage";
import Link from "next/link";

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
  const discount = cart.totalAmount * 0.1;
  const finalAmount = cart.totalAmount - discount;

  return (
    <div className="container pt-5">
      {cart.items.length > 0 ? (
        <div className="">
          <h1 className="sticky top-0 z-10 bg-white text-3xl font-bold tracking-tight text-gray-900">
            Shopping Cart
          </h1>
          <div className="mt-5 w-full lg:grid lg:grid-cols-12 lg:items-start">
            <section className="scrollbar-hidden overflow-y-scroll rounded-lg bg-white md:h-[80vh] md:pl-2 md:pr-10 lg:col-span-8">
              <ul role="list" className="divide-y divide-gray-200">
                {cart.items.map((product) => (
                  <CartItems product={product} key={product.id} />
                ))}
              </ul>
            </section>

            <section className="fixed bottom-2 z-20 w-[90%] md:sticky md:top-20 md:hidden lg:col-span-4">
              <div className="shadow-3xl flex items-end justify-between rounded-lg bg-gray-200 px-3 pb-2">
                <div>
                  <div className="text-xs font-medium text-gray-900">
                    Total Amount
                  </div>
                  <dd className="text-xl font-semibold text-gray-900">
                    $ {finalAmount.toFixed(2)}
                  </dd>
                </div>
                <Link href={{ pathname: "/checkout" }}>
                  <button className="mt-4 w-fit rounded-md border bg-black px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-black hover:bg-white hover:text-black">
                    Checkout
                  </button>
                </Link>
              </div>
            </section>

            <section className="sticky top-20 pb-5 lg:col-span-4">
              <div className="rounded-md bg-white p-4 shadow-xl">
                <h2 className="border-b border-gray-200 pb-3 text-lg font-medium text-gray-900">
                  Price Details
                </h2>
                <div>
                  <PriceDetails
                    cart={cart}
                    finalAmount={finalAmount}
                    discount={discount}
                  />
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
