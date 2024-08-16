import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import ProductCard from "@/components/ProductCard";
import { setProducts } from "@/slices/productsSlice";
import LoadingCard from "@/components/LoadingCard";

interface Product {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  tags: string[];
}

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.products.items as Product[],
  );

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchProducts = async (page: number) => {
    try {
      const limit = 12;
      const skip = (page - 1) * limit;
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );
      const data = await res.json();
      dispatch(setProducts(data.products));
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts(page);
  }, [dispatch, page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Shopping
      </h1>
      <div className="grid items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {loading ? (
          <>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
              <LoadingCard key={idx} />
            ))}
          </>
        ) : (
          products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        )}
      </div>
      <div className="flex items-center justify-end">
        {[1, 2, 3, 4].map((pageNumber) => (
          <div
            key={pageNumber}
            className={`mx-1 flex cursor-pointer items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 ${
              pageNumber === page ? "bg-gray-200" : ""
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
