import React from "react";

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

interface PriceDetailsProps {
  cart: CartState;
}

const PriceDetails: React.FC<PriceDetailsProps> = ({ cart }) => {
  const discount = cart.totalAmount * 0.1;
  const finalAmount = cart.totalAmount - discount;

  return (
    <div className="space-y-1 px-2 py-4">
      <div className="flex items-center justify-between">
        <dt className="text-sm text-gray-800">
          Price ({cart.totalQuantity} item)
        </dt>
        <dd className="text-sm font-medium text-gray-900">
          $ {cart.totalAmount.toFixed(2)}
        </dd>
      </div>
      <div className="flex items-center justify-between pt-4">
        <dt className="flex items-center text-sm text-gray-800">
          <span>Discount (10%)</span>
        </dt>
        <dd className="text-sm font-medium text-green-700">
          - $ {discount.toFixed(2)}
        </dd>
      </div>
      <div className="flex items-center justify-between py-4">
        <dt className="flex text-sm text-gray-800">
          <span>Delivery Charges</span>
        </dt>
        <dd className="text-sm font-medium text-green-700">Free</dd>
      </div>
      <div className="flex items-center justify-between border-y border-dashed py-4">
        <dt className="text-base font-medium text-gray-900">Total Amount</dt>
        <dd className="text-base font-medium text-gray-900">
          $ {finalAmount.toFixed(2)}
        </dd>
      </div>
      <div className="pt-3">
        <button className="w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default PriceDetails;
