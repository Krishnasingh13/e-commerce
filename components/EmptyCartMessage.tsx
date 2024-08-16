import Link from "next/link";
import React from "react";

const EmptyCartMessage = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
        No Products in shopping cart
      </h1>
      <div className="flex items-center justify-center">
        <Link
          href={{ pathname: "/" }}
          className="mt-4 w-fit rounded-md border border-black bg-white px-2 py-1.5 text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default EmptyCartMessage;
