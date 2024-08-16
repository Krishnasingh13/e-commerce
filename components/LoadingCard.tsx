import React from "react";

const LoadingCard = () => {
  return (
    <div className="group flex h-full animate-pulse flex-col justify-between overflow-hidden rounded-md border">
      <div className="aspect-[16/9] w-full rounded-md bg-gray-300 transition-all duration-300 md:aspect-auto md:h-[300px] lg:h-[200px]"></div>
      <div className="p-4">
        <div className="h-4 w-3/4 rounded-md bg-gray-300"></div>
        <div className="mt-2 h-4 w-1/2 rounded-md bg-gray-300"></div>
        <div className="mt-2 flex items-center space-x-2">
          <div className="block h-2 w-10 rounded-md bg-gray-300"></div>
          <div className="block h-2 w-10 rounded-md bg-gray-300"></div>
          <div className="block h-2 w-10 rounded-md bg-gray-300"></div>
        </div>
        <div className="mt-4 h-10 w-full rounded-md bg-gray-300"></div>
      </div>
    </div>
  );
};

export default LoadingCard;
