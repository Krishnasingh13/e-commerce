import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import ProductCard from "@/components/ProductCard";
import { setPage, setProducts } from "@/slices/productsSlice";
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
  const page = useSelector((state: RootState) => state.products.page);
  const total = useSelector((state: RootState) => state.products.total);

  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async (page: number) => {
    try {
      const limit = 12;
      const skip = (page - 1) * limit;
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );
      const data = await res.json();
      dispatch(setProducts({ products: data.products, total: data.total }));
      setHasMore(data.products.length > 0); // Set hasMore based on fetched products
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

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !loading &&
      hasMore
    ) {
      dispatch(setPage(page + 1)); // Increment the page number
    }
  }, [loading, hasMore, page, dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="container pb-20 pt-5">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Shopping
      </h1>
      <div className="grid items-center space-y-4 px-2 py-5 md:grid-cols-2 gap-6 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {products.length === 0 && !loading ? (
          <p className="text-center text-gray-500">No products found</p>
        ) : (
          <>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
            {loading && (
              <>
                {[0, 1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
                  <LoadingCard key={idx} />
                ))}
              </>
            )}
          </>
        )}
      </div>
      {!hasMore && !loading && (
        <p className="text-center text-gray-500">No more products to load</p>
      )}
    </div>
  );
};

export default Index;
