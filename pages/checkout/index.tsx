import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <div className="container">
      <div className="overflow-hidden rounded-xl shadow">
        <div className="grid grid-cols-1">
          <div className="px-5 py-6 text-gray-900 md:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Checkout
            </h1>
            <div className="divide-y divide-gray-200">
              <div className="py-3">
                <div className="px-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Contact information
                    </h3>
                    <div className="mt-1 w-full">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                      >
                        Full Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <hr className="mb-4 mt-8" />
                  <div className="">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Payment details
                    </h3>
                    <div className="mt-2 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                      <div className="col-span-3 sm:col-span-4">
                        <label
                          htmlFor="cardNum"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Card number
                        </label>
                        <div className="mt-1">
                          <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="4242 4242 4242 4242"
                          />
                        </div>
                      </div>
                      <div className="col-span-2 sm:col-span-3">
                        <label
                          htmlFor="expiration-date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Expiration date (MM/YY)
                        </label>
                        <div className="mt-1">
                          <input
                            type="date"
                            name="expiration-date"
                            autoComplete="cc-exp"
                            className="block h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="cvc"
                          className="block text-sm font-medium text-gray-700"
                        >
                          CVC
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="cvc"
                            autoComplete="csc"
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mb-4 mt-8" />
                  <div className="">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Shipping address
                    </h3>
                    <div className="mt-2 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Address
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="address"
                            autoComplete="street-address"
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="city"
                            autoComplete="address-level2"
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="region"
                            autoComplete="address-level1"
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Postal code
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="postal-code"
                            autoComplete="postal-code"
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                    <Link href={{ pathname: "/" }}>
                      <button className="mt-1 w-fit rounded-md border bg-black px-4 py-1.5 text-sm font-semibold text-white transition-all duration-300 hover:border-black hover:bg-white hover:text-black">
                        Make payment
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
