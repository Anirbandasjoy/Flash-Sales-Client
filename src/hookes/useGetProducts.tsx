import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type ProductType = {
  products: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }[];
};

const useGetProducts = () => {
  const {
    data = undefined,
    isLoading,
    error,
    refetch,
  } = useQuery<ProductType, Error>({
    queryKey: ["Products"],
    queryFn: async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        return res.data;
      } catch (error) {
        throw new Error("Error fetching data from the server");
      }
    },
  });

  return { data, isLoading, error, refetch };
};

export default useGetProducts;
