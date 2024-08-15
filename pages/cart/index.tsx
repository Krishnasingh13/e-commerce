import CartProduct from "@/components/CartProduct";
import { RootState } from "@/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

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
                  <CartProduct product={product} key={product.id} />
                ))}
              </ul>
            </section>
            <section className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0">
              <h2 className="border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4">
                Price Details
              </h2>
              <div>
                <div className="space-y-1 px-2 py-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-800">
                      Price ({cart.totalQuantity} item)
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ₹ {cart.totalAmount.toFixed(2)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <dt className="flex items-center text-sm text-gray-800">
                      <span>Discount (10%)</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">
                      - ₹ {discount.toFixed(2)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="flex text-sm text-gray-800">
                      <span>Delivery Charges</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">Free</dd>
                  </div>
                  <div className="flex items-center justify-between border-y border-dashed py-4">
                    <dt className="text-base font-medium text-gray-900">
                      Total Amount
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ₹ {finalAmount.toFixed(2)}
                    </dd>
                  </div>
                  <div className="pt-3">
                    <button className=" w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-center tracking-tight text-gray-900">
            No Products in shopping cart
          </h1>
          <div className="flex items-center justify-center">
            <Link
              href={{ pathname: "/" }}
              className="mt-4 w-fit rounded-md bg-white px-2 py-1.5 text-sm font-semibold  border border-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Go back to home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
