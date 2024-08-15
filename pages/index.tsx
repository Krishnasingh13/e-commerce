import ProductCard from "@/components/ProductCard";
import { setProducts } from "@/slices/productsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

const Index = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.products.items || []
  );

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=10");
    const data = await res.json();
    dispatch(setProducts(data.products));
  };

  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Shopping
      </h1>
      <div className="grid items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {products?.map((product,idx) => (
          <ProductCard product={product} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Index;
